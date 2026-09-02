// Result presentation layer V002.
// Keeps the underlying scoring deterministic while making the 42-answer result
// feel specific, useful and worth reading. No population percentiles are used.

export const CHARACTER_PROFILES = {
  T01:{name:'버티는 힘이 강한 현금흐름형', headline:"당신은 '버틸 수 있는가'부터 보는 건물주입니다."},
  T02:{name:'숫자 확인이 끝나야 움직이는 검증형', headline:'좋다는 말보다 확인된 숫자가 먼저인 편입니다.'},
  T03:{name:'기회를 놓치지 않는 계획형', headline:'기회는 빨리 찾고, 돈은 계산하고 움직입니다.'},
  T04:{name:'대출도 계산서 안에 넣는 재무설계형', headline:'대출 한도보다 버틸 한도를 먼저 보는 편입니다.'},
  T05:{name:'기회를 보면 자금부터 만드는 추진형', headline:"물건을 보면 '살 수 있는 방법'부터 찾는 편입니다."},
  T06:{name:'지금보다 다음 장면을 보는 성장형', headline:"현재 숫자보다 '앞으로 무엇이 달라질까'를 먼저 봅니다."},
  T07:{name:'월세가 남아야 마음이 놓이는 수익형', headline:'오를지보다 지금 남는 돈을 먼저 계산합니다.'},
  T08:{name:'남의 확신보다 내 기준을 믿는 독립분석형', headline:'남들이 좋다고 할수록 숫자를 한 번 더 보는 편입니다.'},
  T09:{name:'정보를 넓게 듣고 직접 거르는 정보활용형', headline:'정보는 넓게 듣고, 결정은 좁게 거르는 편입니다.'},
  T10:{name:'시장 분위기를 빠르게 감지하는 정보민감형', headline:'남들보다 빨리 듣지만, 그만큼 한 번 더 걸러야 하는 타입입니다.'},
  T11:{name:'현장에서 먼저 감이 오는 직관형', headline:"숫자가 다 모이기 전에 '될 물건' 느낌을 먼저 받는 편입니다."},
  T12:{name:'좋은 물건보다 내 기준부터 찾는 탐색형', headline:'살 수 있는 물건보다 왜 사는지를 정리할 단계입니다.'},
  T13:{name:'사고 끝이 아니라 운영부터 시작하는 직접운영형', headline:"건물을 '보유'보다 '운영'에 가깝게 보는 편입니다."},
  T14:{name:'내 시간 대신 시스템을 쓰는 위임운영형', headline:'직접 뛰기보다 잘 돌아가는 구조를 만드는 편입니다.'},
};

const hi=(axes,k)=>(axes[k]??0)>=.75;
const lo=(axes,k)=>(axes[k]??0)<=-.75;
const mid=(axes,k)=>!hi(axes,k)&&!lo(axes,k);

export const PRAISE_RULES = [
  {id:'P01',group:'검증',title:'남의 말보다 확인하는 힘',when:a=>hi(a,'정보검증'),text:'추천이나 분위기를 그대로 받아들이기보다 한 번 더 확인하는 습관이 강합니다. 실제 투자에서 꽤 큰 방어력으로 작동할 수 있습니다.',balance:'다만 확인을 끝내는 기준도 필요합니다.'},
  {id:'P02',group:'독립',title:'자기 기준이 쉽게 흔들리지 않음',when:a=>hi(a,'독립판단'),text:'다른 사람이 확신해도 자신의 기준을 다시 보는 편입니다. 군중 분위기에 휩쓸릴 가능성을 낮추는 강점입니다.',balance:'반대자료도 같은 비중으로 확인하면 더 강해집니다.'},
  {id:'P03',group:'중단',title:'멈출 줄 아는 것도 실력',when:a=>hi(a,'중단기준'),text:'조건이 틀어졌을 때 계속 버티기보다 멈출 기준을 생각하는 편입니다. 손실을 키우지 않는 데 중요한 습관입니다.',balance:'기준을 시장 상황에 맞게 정기적으로 업데이트하세요.'},
  {id:'P04',group:'재무',title:'매입 후까지 생각하는 자금감각',when:a=>hi(a,'유동성'),text:'살 수 있는 가격보다 산 뒤 남는 현금을 함께 보는 편입니다. 보유 중 변수에 대응하기 좋은 습관입니다.',balance:'현금만 남기느라 기회를 지나치게 줄이지 않는 균형도 필요합니다.'},
  {id:'P05',group:'재무',title:'대출을 숫자로 보는 편',when:a=>hi(a,'금융이해')&&hi(a,'레버리지선호'),text:'대출을 막연히 무서워하거나 무조건 쓰기보다 상환구조와 조건을 함께 보는 경향이 있습니다.',balance:'금리·공실 가정이 낙관적이지 않은지는 별도로 확인하세요.'},
  {id:'P06',group:'현금흐름',title:'빈 기간까지 계산하는 현실감각',when:a=>hi(a,'공실대응'),text:'월세가 계속 들어온다는 전제보다 공실 기간까지 생각하는 편입니다. 수익률 숫자를 현실적으로 보는 데 도움이 됩니다.',balance:'지나친 공실 걱정으로 좋은 후보를 너무 일찍 제외하지는 않는지도 확인하세요.'},
  {id:'P07',group:'목적',title:'왜 사는지가 비교적 분명함',when:a=>hi(a,'목적명확성'),text:'좋은 물건을 찾기 전에 자신이 왜 사려는지를 비교적 분명하게 알고 있습니다. 기준이 흔들리는 일을 줄여줍니다.',balance:'목적이 바뀌면 기준도 함께 다시 잡아야 합니다.'},
  {id:'P08',group:'관리',title:'운영을 남의 일로 보지 않음',when:a=>hi(a,'관리참여'),text:'보유 이후의 관리까지 자신의 의사결정 일부로 보는 편입니다. 매입 뒤 생길 일을 미리 보는 강점이 있습니다.',balance:'실제 투입 가능한 시간과 체력은 별도로 계산하세요.'},
  {id:'P09',group:'위험',title:'겁보다 계산이 앞서는 편',when:a=>hi(a,'위험선호')&&hi(a,'위험감당능력'),text:'불확실성을 무조건 피하지 않으면서도 실제 감당 범위를 함께 보는 편입니다. 기회를 검토할 수 있는 폭이 넓습니다.',balance:'좋은 경험이 반복될수록 과신 여부를 점검하세요.'},
  {id:'P10',group:'현금흐름',title:'수익률의 겉보다 속을 봄',when:a=>hi(a,'현금흐름선호'),text:'표면 수익률보다 실제로 들어오고 나가는 돈을 보는 경향이 강합니다. 숫자에 속지 않기 위한 좋은 출발점입니다.',balance:'장기 자산가치 요인도 함께 보세요.'},
  {id:'P11',group:'가치',title:'기다릴 시간을 같이 보는 편',when:a=>hi(a,'가격상승선호')&&hi(a,'보유기간'),text:'미래가치를 보면서도 시간이 필요할 수 있다는 점을 받아들이는 편입니다. 기대와 보유기간을 맞추려는 강점이 있습니다.',balance:'상승이 늦어져도 버틸 현금흐름은 따로 확인하세요.'},
  {id:'P12',group:'정보',title:'정보를 넓게 쓰되 그대로 믿지는 않음',when:a=>hi(a,'외부영향')&&hi(a,'정보검증'),text:'다른 사람의 경험과 시장정보를 적극 활용하면서도 다시 확인하려는 편입니다. 혼자 볼 때 놓칠 수 있는 관점을 얻는 장점이 있습니다.',balance:'정보가 많아질수록 무엇을 결정기준으로 쓸지 우선순위를 정하세요.'},
];

export const BEHAVIOR_RULES = [
  {id:'B01',title:"'오늘 아니면 끝'이라는 말에 바로 움직이지 않을 가능성",when:a=>hi(a,'정보검증')&&hi(a,'독립판단'),text:'중개사가 오늘 결정해야 한다고 압박해도 계약금보다 실거래·임대현황을 한 번 더 확인할 가능성이 높습니다.'},
  {id:'B02',title:'높은 수익률보다 빈 기간이 더 신경 쓰일 수 있음',when:a=>hi(a,'현금흐름선호')&&lo(a,'공실대응'),text:'표면 수익률이 높아도 공실 가능성이 보이면 예상보다 빠르게 관심이 식을 수 있습니다.'},
  {id:'B03',title:'막판에 자료를 하나 더 찾는 타입',when:a=>hi(a,'정보검증')&&!hi(a,'과신'),text:'거의 결정한 뒤에도 마지막 숫자나 계약조건을 다시 확인하려는 경향이 있습니다.'},
  {id:'B04',title:'할인폭이 관심을 빠르게 끌 수 있음',when:a=>hi(a,'앵커링')&&hi(a,'위험선호'),text:"'원래 얼마였는데 지금 얼마'라는 설명이 첫 관심을 강하게 만들 수 있습니다. 할인폭과 실제 가치가 같은지는 따로 봐야 합니다."},
  {id:'B05',title:'뉴스보다 내 상환액을 계산하는 편',when:a=>hi(a,'레버리지선호')&&hi(a,'금리대응'),text:'금리 이야기가 나오면 막연히 겁먹기보다 자신의 상환액이 얼마나 달라지는지 계산하려는 편입니다.'},
  {id:'B06',title:'확신이 생기면 판단속도가 빨라질 수 있음',when:a=>hi(a,'과신')&&hi(a,'위험선호'),text:'판단이 잘 맞았다고 느끼는 시기에는 평소보다 검토 단계를 줄이고 싶어질 수 있습니다.'},
  {id:'B07',title:'가격이 돌아올 때까지 기다리고 싶어질 수 있음',when:a=>hi(a,'손실회피')&&lo(a,'중단기준'),text:"처음 세운 기준보다 '조금만 더 기다리면'이라는 생각이 강해질 수 있습니다."},
  {id:'B08',title:'정보를 더 모으다가 결정이 늦어질 수 있음',when:a=>hi(a,'외부영향')&&hi(a,'정보검증'),text:'서로 다른 의견을 많이 접하면 한쪽을 바로 믿기보다 추가 자료를 찾으면서 결정이 늦어질 수 있습니다.'},
  {id:'B09',title:'수익보다 관리 피로가 더 크게 보일 수 있음',when:a=>lo(a,'관리참여')&&hi(a,'현금흐름선호'),text:'숫자가 좋아도 관리가 복잡하면 실제 매력도를 낮게 평가할 가능성이 있습니다.'},
  {id:'B10',title:'현재 월세보다 변화의 방향에 더 끌릴 수 있음',when:a=>hi(a,'가격상승선호')&&hi(a,'보유기간'),text:'당장 수익이 크지 않아도 시간이 지나며 달라질 근거가 보이면 검토를 이어갈 가능성이 높습니다.'},
  {id:'B11',title:'비교표를 만들수록 판단이 편해지는 타입',when:a=>hi(a,'독립판단')&&hi(a,'정보검증')&&hi(a,'목적명확성'),text:'후보를 같은 기준으로 나란히 놓으면 감보다 결정이 빨라질 가능성이 높습니다.'},
  {id:'B12',title:'직접 해결하려다 현금 스트레스가 커질 수 있음',when:a=>lo(a,'유동성')&&hi(a,'관리참여'),text:'문제 해결 의지는 강하지만 남겨둔 현금이 적다면 예상보다 스트레스를 크게 받을 수 있습니다.'},
];

export const CONTRADICTION_RULES = [
  {id:'C01',title:'마음은 공격적인데 방어력은 아직 보수적입니다.',when:a=>hi(a,'위험선호')&&lo(a,'위험감당능력'),text:'기회를 잡고 싶은 성향은 강하지만 실제 충격을 버틸 자금여유는 상대적으로 낮게 나타났습니다.',positive:'추진력 자체는 강점입니다.',check:'레버리지·공실·유동성 점검'},
  {id:'C02',title:'오르길 바라지만 오래 기다리기는 싫어합니다.',when:a=>hi(a,'가격상승선호')&&lo(a,'보유기간'),text:'미래가치 기대는 큰데 결과를 기다릴 수 있는 기간은 짧은 편입니다. 기대와 시간표가 어긋날 수 있습니다.',positive:'변화를 보는 시각은 분명합니다.',check:'보유기간·현금흐름 점검'},
  {id:'C03',title:'월세는 중요하지만 빈 기간 준비는 약합니다.',when:a=>hi(a,'현금흐름선호')&&lo(a,'공실대응'),text:'현금흐름을 중요하게 보면서도 월세가 끊기는 기간에 대한 대비는 상대적으로 약하게 나타났습니다.',positive:'현금흐름 감각은 강점입니다.',check:'공실을 버틸 기간 계산'},
  {id:'C04',title:'남의 말에는 안 흔들리지만 내 판단에는 흔들릴 수 있습니다.',when:a=>hi(a,'독립판단')&&hi(a,'과신')&&lo(a,'정보검증'),text:'외부 의견에는 독립적이지만 자신의 첫 판단을 다시 의심하는 과정은 부족할 수 있습니다.',positive:'자기 기준이 분명합니다.',check:'반대자료 의무 확인'},
  {id:'C05',title:'남의 말을 많이 듣지만 그대로 믿지는 않습니다.',when:a=>hi(a,'외부영향')&&hi(a,'정보검증'),text:"외부정보를 적극 활용하면서도 교차검증을 하는 편이라 '의존'보다는 '활용'에 가깝습니다.",positive:'정보 네트워크를 잘 활용하는 조합입니다.',check:'정보과부하만 주의'},
  {id:'C07',title:'대출 의지는 빠른데 계산은 더 필요합니다.',when:a=>hi(a,'레버리지선호')&&lo(a,'금융이해'),text:'차입을 활용하려는 성향에 비해 상환구조를 확인하는 습관은 약하게 나타났습니다.',positive:'기회를 찾는 추진력은 분명합니다.',check:'상환액·금리 스트레스 점검'},
  {id:'C08',title:'버티고 싶어도 멈출 기준은 갖고 있습니다.',when:a=>hi(a,'손실회피')&&hi(a,'중단기준'),text:'손실을 확정하기 싫어하는 마음은 있지만 사전에 정한 기준으로 통제하려는 성향도 함께 나타났습니다.',positive:'감정과 규칙을 분리할 가능성이 높은 조합입니다.',check:'기준을 실제로 지키는지 확인'},
  {id:'C09',title:'살 능력과 살 이유는 별개입니다.',when:a=>lo(a,'목적명확성')&&hi(a,'위험감당능력')&&hi(a,'유동성'),text:'재무적으로 검토할 여력은 있어도 무엇을 위해 살지는 아직 넓게 열려 있을 수 있습니다.',positive:'선택지가 넓다는 뜻이기도 합니다.',check:'목적 1순위 먼저 정리'},
  {id:'C10',title:'감으로 찾고 숫자로 거르는 타입입니다.',when:a=>hi(a,'직관의존')&&hi(a,'정보검증'),text:'첫 관심은 빠르게 생기지만 최종 결정 전에는 자료를 확인하는 조합입니다.',positive:'속도와 검증을 같이 쓰는 강점이 있습니다.',check:'검증단계를 생략하지 않기'},
];

export const ASSET_INSIGHTS = {
  '아파트':{good:'운영 스트레스를 줄이고 비교에 집중하는 성향과 궁합',goodText:'직접 관리보다 가격·입지·수요를 비교하는 데 집중하고 싶다면 성향상 단순하게 접근하기 좋을 수 있습니다.',tired:'운영 개선 욕구가 큰 사람에겐 심심할 수 있음',tiredText:'직접 손봐서 가치를 만드는 과정에 흥미가 크다면 통제할 수 있는 요소가 적다고 느낄 수 있습니다.'},
  '빌라·연립/다세대':{good:'가격 비교를 깊게 하는 성향과 궁합',goodText:'개별 물건 차이가 큰 만큼 주변 거래와 조건을 꼼꼼히 확인하는 성향이 중요하게 작동합니다.',tired:'추천만 믿고 접근하면 피곤해질 수 있음',tiredText:'비교자료가 부족한 상황에서 외부 설명에 많이 의존하면 판단기준이 흔들릴 수 있습니다.'},
  '오피스텔':{good:'관리 단순성을 중시하는 성향과 궁합',goodText:'운영에 많은 시간을 쓰기보다 비교적 단순한 관리구조를 선호한다면 성향상 편하게 느낄 수 있습니다.',tired:'기대수익과 실제비용 차이를 주의',tiredText:'가격 기대만 크게 보면 관리비·공실·세금 등 실제 현금흐름과 차이가 커질 수 있습니다.'},
  '원룸·다가구':{good:'운영 숫자를 자주 보는 타입과 궁합',goodText:'여러 임차인의 흐름과 비용을 꾸준히 관리할 수 있는 성향이라면 현금흐름을 세밀하게 보는 장점이 살아납니다.',tired:'관리 피로가 누적될 수 있음',tiredText:'직접 관리 선호가 낮다면 작은 운영 이슈가 반복되는 구조가 피곤하게 느껴질 수 있습니다.'},
  '상가주택':{good:'현금흐름과 직접 운영을 함께 보는 성향과 궁합',goodText:'주거와 상업 임대의 변수를 함께 비교하고 운영에 관여할 수 있다면 성향상 검토 과정이 잘 맞을 수 있습니다.',tired:'운영 변수가 많으면 체감 피로가 커질 수 있음',tiredText:'관리 참여가 낮거나 공실 대응이 약하다면 숫자보다 실제 운영 스트레스가 크게 느껴질 수 있습니다.'},
  '집합상가':{good:'월세 구조를 꼼꼼히 보는 성향과 궁합',goodText:'현재 임대료뿐 아니라 공실과 상권 변화를 함께 보는 성향이라면 핵심 변수를 비교하는 데 잘 맞습니다.',tired:'공실 스트레스가 크게 느껴질 수 있음',tiredText:'공실 가능성에 민감하면서 대응여력이 낮다면 예상 수익보다 심리적 부담이 커질 수 있습니다.'},
  '꼬마빌딩':{good:'직접 비교하고 개선점을 찾는 성향과 궁합',goodText:'입지·임대·가격을 함께 비교하고 운영 개선 여지를 보는 성향이라면 검토 과정 자체가 잘 맞을 수 있습니다.',tired:'수익보다 관리변수가 피곤할 수 있음',tiredText:'직접 챙길 일이 예상보다 많다면 숫자가 좋아도 체감 만족도가 낮을 수 있습니다.'},
  '중대형빌딩':{good:'재무구조와 관리체계를 함께 보는 성향과 궁합',goodText:'자금구조·공실·관리비용을 한꺼번에 검토하고 전문가를 활용할 수 있는 성향이라면 복합적인 판단과 잘 맞을 수 있습니다.',tired:'규모가 커질수록 작은 가정 차이가 크게 느껴질 수 있음',tiredText:'유동성이나 위험감당 여력이 낮다면 관리·차입·공실 변수가 한꺼번에 부담으로 작용할 수 있습니다.'},
  '오피스':{good:'자료와 임대수요를 깊게 확인하는 성향과 궁합',goodText:'임차수요·공실·계약구조를 자료로 검증하고 관리체계를 활용하는 성향이라면 분석 방식과 잘 맞을 수 있습니다.',tired:'공실 한 번의 체감이 클 수 있음',tiredText:'공실 대응이나 유동성 여력이 낮다면 임차 변동을 예상보다 크게 부담스러워할 수 있습니다.'},
  '토지':{good:'긴 시간을 받아들이는 미래가치형과 궁합',goodText:'현재 현금흐름보다 장기 변화 가능성을 보고 기다릴 수 있는 성향이라면 검토방식과 잘 맞을 수 있습니다.',tired:'현금흐름을 중시하면 답답할 수 있음',tiredText:'보유 중 현금수익을 중요하게 보는 사람에게는 기다리는 시간이 길고 불확실하게 느껴질 수 있습니다.'},
};

export const RISK_RULES = [
  {id:'R01',title:'확인이 끝나지 않을 때',when:a=>hi(a,'정보검증')&&lo(a,'위험선호'),text:'자료를 더 찾을수록 확신은 늘지만 결정 시점은 계속 뒤로 갈 수 있습니다.',strength:'검증력이 강한 사람에게 생기는 역효과입니다.',prescription:"100점을 찾지 말고 '이 정도면 결정한다'는 종료 기준을 먼저 정하세요.",checks:['필수정보 5개','결정 마감조건']},
  {id:'R02',title:'살 수 있다는 계산이 끝났을 때',when:a=>hi(a,'레버리지선호')&&lo(a,'유동성'),text:'대출 가능액이 확인되면 매입 가능성은 커 보이지만 보유 중 변수 대응력은 별개입니다.',strength:'자금조달 방법을 찾는 추진력이 강합니다.',prescription:'대출 한도보다 매입 후 남는 현금을 먼저 숫자로 고정하세요.',checks:['잔여현금','금리+공실 스트레스']},
  {id:'R03',title:"'이번엔 확실하다'고 느낄 때",when:a=>hi(a,'과신')&&lo(a,'정보검증'),text:'확신이 클수록 반대자료를 덜 찾게 될 수 있습니다.',strength:'판단속도와 자신감이 있는 편입니다.',prescription:'확신이 클수록 반대근거 1개를 의무적으로 찾으세요.',checks:['반대자료','최악가정']},
  {id:'R04',title:'조금만 더 기다리고 싶을 때',when:a=>hi(a,'손실회피')&&lo(a,'중단기준'),text:'처음 계획보다 손실을 확정하기 싫은 마음이 커지면 기준이 뒤로 밀릴 수 있습니다.',strength:'버티는 인내력이 있는 편입니다.',prescription:"사기 전에 '이 조건이면 정리한다'를 숫자로 적어두세요.",checks:['중단조건','검토주기']},
  {id:'R05',title:'믿는 사람이 확신할 때',when:a=>hi(a,'외부영향')&&lo(a,'정보검증'),text:'신뢰하는 사람의 확신이 자신의 조건 검토를 건너뛰게 만들 수 있습니다.',strength:'정보를 빨리 접하는 능력이 있습니다.',prescription:'추천은 후보발견까지만, 계약판단은 원자료로 다시 시작하세요.',checks:['원자료','이해관계']},
  {id:'R06',title:'공실 걱정이 커질 때',when:a=>hi(a,'현금흐름선호')&&hi(a,'공실대응'),text:'공실을 신경 쓰지만 실제 대응도 함께 생각하는 조합입니다.',strength:'걱정을 준비로 바꾸는 편입니다.',prescription:'걱정을 줄이려 하지 말고 대응기준을 더 구체화하세요.',checks:['버틸 개월수','임대료 하락 가정']},
  {id:'R07',title:'직접 하면 더 잘할 것 같을 때',when:a=>hi(a,'관리참여')&&lo(a,'유동성'),text:'운영에 관여하고 싶은 의지는 높지만 예상 밖 비용이 겹치면 투자보다 관리업무가 커질 수 있습니다.',strength:'현장 개선 의지가 강합니다.',prescription:'직접할 일 3개와 맡길 일 3개를 매입 전에 나누세요.',checks:['월 투입시간','위임비용']},
  {id:'R08',title:'미래가 너무 좋아 보일 때',when:a=>hi(a,'가격상승선호')&&lo(a,'현금흐름선호')&&lo(a,'유동성'),text:'장기 기대가 큰데 현재 현금흐름과 여유자금이 약하면 기다리는 시간이 부담이 될 수 있습니다.',strength:'변화를 포착하려는 시각이 있습니다.',prescription:'상승이 0이어도 버틸 수 있는지 먼저 계산하세요.',checks:['제로상승 가정','보유비용']},
];

function uniqueByGroup(items, count){
  const out=[]; const groups=new Set();
  for(const x of items){ if(groups.has(x.group)) continue; out.push(x); groups.add(x.group); if(out.length>=count) break; }
  return out;
}

export function buildRichResult(typeId, axes, assets, process){
  const character=CHARACTER_PROFILES[typeId] || CHARACTER_PROFILES.T02;
  let praises=uniqueByGroup(PRAISE_RULES.filter(r=>r.when(axes)),4);
  if(praises.length<2){
    const fallback=PRAISE_RULES.filter(r=>!praises.some(p=>p.id===r.id) && (mid(axes,'정보검증') || mid(axes,'목적명확성')));
    praises=[...praises,...fallback].slice(0,2);
  }
  let behaviors=BEHAVIOR_RULES.filter(r=>r.when(axes)).slice(0,7);
  if(behaviors.length<4){
    const generic=[
      {id:'BG1',title:'숫자와 느낌 중 하나만으로 끝내지는 않는 편',text:'관심이 생긴 뒤에는 자신의 기준에 맞는지 다시 확인하려는 과정이 필요해 보입니다.'},
      {id:'BG2',title:'한 가지 장점보다 전체 조건을 비교하는 편',text:'가격·현금흐름·공실·관리 부담 중 무엇을 우선할지가 실제 결정속도를 좌우할 가능성이 높습니다.'},
      {id:'BG3',title:'계약 직전에는 평소 성향이 더 강하게 드러날 수 있음',text:'마지막 결정 순간에는 평소보다 보수적이거나 반대로 확신이 빨라질 수 있어 사전 기준표가 도움이 됩니다.'},
      {id:'BG4',title:'좋은 물건보다 내 조건에 맞는 물건이 중요',text:'같은 물건도 자금여유와 관리 가능시간에 따라 체감 매력도가 크게 달라질 수 있습니다.'},
    ];
    behaviors=[...behaviors,...generic.filter(g=>!behaviors.some(b=>b.id===g.id))].slice(0,4);
  }
  const contradictions=CONTRADICTION_RULES.filter(r=>r.when(axes)).slice(0,3);
  const risks=RISK_RULES.filter(r=>r.when(axes)).slice(0,3);
  const topAssets=(assets?.top||[]).slice(0,3).map(a=>({...a, insight:ASSET_INSIGHTS[a.asset]}));
  const caution=(assets?.caution?.[0] || (assets?.top||[]).slice().sort((a,b)=>a.score-b.score)[0]);
  const cautionInsight=caution ? ASSET_INSIGHTS[caution.asset] : null;
  const nextActions=[];
  risks.forEach(r=>r.checks?.forEach(c=>{if(!nextActions.includes(c)) nextActions.push(c)}));
  if(lo(axes,'목적명확성')&&!nextActions.includes('매입 목적 1순위')) nextActions.unshift('매입 목적 1순위');
  if(lo(axes,'유동성')&&!nextActions.includes('매입 후 남길 현금')) nextActions.unshift('매입 후 남길 현금');
  if(lo(axes,'중단기준')&&!nextActions.includes('검토 종료·중단 기준')) nextActions.push('검토 종료·중단 기준');
  while(nextActions.length<3){ ['공실을 버틸 기간','금리 상승 시 상환액','반대자료 1개'].some(x=>{if(!nextActions.includes(x)){nextActions.push(x);return true;}return false;}); }
  const leadPraise=praises[0]?.title || '자기 기준을 만들려는 힘';
  const leadRisk=risks[0]?.title || '확신과 검토의 균형이 흔들릴 때';
  const finalLine=`${character.headline} 특히 ${leadPraise}은 강점입니다. 다만 ${leadRisk}에는 평소 기준을 한 번 더 확인하는 편이 좋습니다.`;
  return {character,praises,behaviors,contradictions,risks,topAssets,caution,cautionInsight,nextActions:nextActions.slice(0,3),finalLine,playStyle:process?.comic};
}
