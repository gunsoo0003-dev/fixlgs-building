export const CONTRACT_LOCALES=['ko','en','ja'];

const ko={
  metaTitle:'건물 계약 가이드 | FIX BUILDING',
  metaDescription:'건물 매수 계약에서 계약 상대, 계약 대상, 지급조건, 특약, 잔금 전 재확인, 소유권 이전까지 확인해야 할 흐름을 단계별로 정리합니다.',
  eyebrow:'FIX BUILDING · 03 CONTRACT',
  title:'건물 계약',
  lead:'분석이 끝난 건물을 실제로 계약할 때 무엇을 확인하고, 어떤 조건을 남기고, 언제 다시 확인해야 하는지 순서대로 살펴봅니다.',
  ctas:{flow:'계약 흐름 전체보기',risk:'사기·위험 신호 감별',mistakes:'흔한 계약 실수'},
  quick:{eyebrow:'QUICK ACCESS',title:'계약 과정별로 확인하세요.',lead:'처음부터 보려면 전체 흐름을 따라가고, 필요한 단계만 다시 보려면 아래 항목을 선택하세요.'},
  tutorial:{
    eyebrow:'CONTRACT PRINCIPLES',title:'계약에서 먼저 봐야 할 것은 문장보다 구조입니다.',lead:'상세 페이지의 확인 항목을 외우기 전에, 계약 전체를 보는 기준부터 잡습니다.',
    items:[
      ['계약은 한 장의 문서가 아니라 과정이다','계약 전 확인부터 조건 협의, 문서화, 잔금 전 재확인, 지급과 이전까지 하나의 흐름으로 봅니다. 서명 순간만 떼어 보면 앞뒤 조건이 끊어질 수 있습니다.'],
      ['자료의 존재보다 서로 일치하는지를 본다','상대방의 설명, 확인한 서류, 실제 현황, 계약서에 적힌 내용이 같은 사실을 가리키는지 비교합니다. 자료가 있다는 사실보다 서로 맞는지가 중요합니다.'],
      ['약속보다 조건과 책임을 본다','“처리해 주겠다”는 말보다 누가 무엇을 언제까지 어떤 상태로 만들고, 무엇으로 완료를 확인할 것인지가 분명한지 봅니다.'],
      ['돈은 날짜보다 조건과 함께 본다','계약금·중도금·잔금은 단순 일정이 아니라 각 지급 전에 무엇이 확인되어야 하는지와 함께 봅니다.'],
      ['모든 위험을 특약으로 해결하려 하지 않는다','문제에 따라 추가 확인, 조건 변경, 전문가 검토, 거래 재검토가 필요할 수 있습니다. 특약 한 줄이 모든 불확실성을 없애는 것은 아닙니다.'],
    ]
  },
  takeaway:['확인한 것은 조건으로.','합의한 것은 문서로.','지급하기 전에는 다시 확인합니다.'],
  riskStrip:{title:'계약 흐름 밖에서도 계속 확인해야 할 것',lead:'사기·위험 신호와 흔한 실수는 특정 한 단계가 아니라 계약 전체를 가로지릅니다.'},
  back:'← 계약으로 돌아가기',other:'다른 계약 콘텐츠 보기',caseLabel:'예시 상황',principle:'핵심원칙',notice:'이 콘텐츠는 일반적인 교육·정보 제공을 위한 가이드입니다. 실제 거래의 법률·세무·등기 판단은 거래 구조와 최신 제도에 따라 달라질 수 있습니다.',
  sections:['01 기본개념','02 핵심포인트','03 왜 중요한가','04 확인·계약방법','05 실제사례','06 핵심원칙'],
  pages:[
    {slug:'parties',num:'01',label:'AUTHORITY',title:'계약 상대 확인',question:'지금 계약하려는 사람이 실제로 계약할 권한이 있는가?',icon:'person',hero:'권한은 사람의 인상이 아니라 서류와 관계로 확인합니다.',
     sections:[
      ['기본개념','계약 상대 확인은 신분만 보는 과정이 아닙니다. 등기상 소유자, 공동소유자, 대리인, 법인 대표자처럼 실제로 계약을 체결하거나 대금을 수령할 권한이 누구에게 있는지를 확인하는 과정입니다.'],
      ['핵심포인트','소유자와 계약 상대가 같은지, 공동소유자가 있는지, 대리계약이라면 위임 범위가 어디까지인지, 법인이라면 계약 권한을 가진 사람이 누구인지, 지급계좌가 어떤 근거로 지정됐는지를 서로 연결해서 봅니다.'],
      ['왜 중요한가','계약 내용이 아무리 좋아도 권한 없는 상대와 체결하거나 지급 근거가 불분명하면 거래의 출발점부터 흔들릴 수 있습니다. 특히 “대신 나왔다”, “이 계좌로 보내면 된다” 같은 설명은 확인 가능한 근거와 함께 봐야 합니다.'],
      ['확인·계약방법','신분과 소유관계를 대조하고, 공동소유나 대리계약이면 필요한 동의와 위임 범위를 확인합니다. 법인 소유라면 대표권과 계약 담당자의 권한을 확인하고, 지급계좌도 계약 당사자와의 관계가 설명되는지 확인합니다. 설명과 서류가 다르면 먼저 차이를 해소한 뒤 다음 단계로 넘어갑니다.'],
      ['실제사례','매도인의 가족이 계약 현장에 나와 “모든 권한을 위임받았다”고 설명하는 상황을 가정해 봅니다. 중요한 것은 가족관계가 아니라 매매계약 체결과 대금 수령까지 포함하는 권한이 실제로 확인되는지입니다. 확인되지 않은 부분은 친분이나 신뢰로 대신하지 않습니다.'],
      ['핵심원칙','사람을 믿는 것과 계약 권한을 확인하는 것은 다른 일입니다. 계약 주체·권한·지급 근거가 서로 연결될 때 다음 단계로 넘어갑니다.'] ]},
    {slug:'property',num:'02',label:'PROPERTY',title:'계약 대상·현황 확인',question:'내가 정확히 무엇을 사는가?',icon:'building',hero:'주소 하나가 아니라 서류와 현황이 같은 대상을 가리키는지 봅니다.',
     sections:[
      ['기본개념','계약 대상 확인은 “이 건물을 산다”는 말의 범위를 구체화하는 과정입니다. 토지와 건물, 부속시설, 주차, 집기·설비, 임대차 현황처럼 실제 인수할 범위와 상태를 계약 시점 기준으로 맞춥니다.'],
      ['핵심포인트','등기와 각종 공부, 실제 현장, 계약서의 목적물 표시가 서로 일치하는지 봅니다. 토지와 건물 소유관계, 사용현황, 부속시설, 포함 집기, 임대차와 보증금 등도 “분석”이 아니라 “무엇을 어떤 상태로 인수하는지”에 초점을 맞춥니다.'],
      ['왜 중요한가','분석 단계에서 좋은 건물이라고 판단했더라도 계약 대상의 범위가 불명확하면 실제 인수하는 자산이 예상과 달라질 수 있습니다. 특히 현장에서는 당연히 포함된다고 생각했던 시설이나 공간이 계약서에는 빠지는 일이 생길 수 있습니다.'],
      ['확인·계약방법','계약서의 목적물 표시를 관련 서류와 비교하고 현장에서 실제 사용상태를 다시 봅니다. 포함돼야 하는 시설·집기·부속공간이 있다면 범위를 명확히 남기고, 임대차·보증금 등 승계할 현황은 계약 시점의 숫자로 다시 맞춥니다.'],
      ['실제사례','옥상 창고와 주차설비를 매매에 당연히 포함된다고 생각했지만 계약서에는 별도 표시가 없는 상황을 생각할 수 있습니다. “원래 같이 쓰던 것”이라는 설명보다 계약 대상과 인도 범위를 문서에서 확인하는 편이 안전합니다.'],
      ['핵심원칙','계약 대상은 주소 하나가 아닙니다. 서류, 실제 현황, 포함 범위가 같은 자산을 설명하도록 맞춥니다.'] ]},
    {slug:'payment',num:'03',label:'PAYMENT',title:'가격·지급조건',question:'얼마보다 언제 어떤 조건에서 돈을 지급하는가?',icon:'payment',hero:'돈은 일정표가 아니라 확인 조건을 통과하며 움직입니다.',
     sections:[
      ['기본개념','매매대금은 총액만 확인하면 끝나는 것이 아닙니다. 계약금·중도금·잔금, 승계 보증금, 정산금액, 대출 실행과 같은 돈의 흐름을 각 시점의 확인조건과 연결해서 봅니다.'],
      ['핵심포인트','총 매매대금과 실제 송금액이 왜 다른지, 각 지급일에 무엇이 완료돼 있어야 하는지, 지급계좌가 맞는지, 권리말소·서류 인도와 지급 순서가 어떻게 연결되는지를 봅니다.'],
      ['왜 중요한가','날짜만 정해 놓으면 확인이 끝나지 않았는데도 지급일이 왔다는 이유로 돈이 먼저 움직일 수 있습니다. 거래에서 중요한 것은 일정 준수와 동시에 그 시점에 약속된 조건이 충족됐는지를 확인하는 것입니다.'],
      ['확인·계약방법','각 지급 단계마다 “지급 전 확인할 것”을 붙입니다. 금액·계좌·정산을 다시 계산하고, 특정 권리 정리나 서류 제공이 선행돼야 한다면 그 순서를 계약조건과 실제 실행계획에서 맞춥니다.'],
      ['실제사례','잔금일은 정해졌지만 말소에 필요한 준비가 완료되지 않은 상황을 가정해 봅니다. 단순히 예정일이라는 이유로 송금하기보다 어떤 확인이 끝나야 지급하는지 먼저 정해 두는 것이 핵심입니다.'],
      ['핵심원칙','지급일은 달력의 날짜이고, 지급조건은 거래의 안전장치입니다. 확인 → 조건 충족 → 지급의 순서를 유지합니다.'] ]},
    {slug:'terms',num:'04',label:'TERMS',title:'계약서·특약',question:'확인하고 합의한 내용을 어떻게 계약조건으로 고정하는가?',icon:'document',hero:'발견한 위험은 구두 약속이 아니라 실행 가능한 조건으로 바꿉니다.',
     sections:[
      ['기본개념','계약서는 가격을 적는 문서에 그치지 않습니다. 계약 대상, 지급, 인도, 권리 정리, 임대차 승계, 시설·하자, 자료 제공 등 거래 과정에서 누가 무엇을 해야 하는지를 고정하는 장치입니다.'],
      ['핵심포인트','좋은 특약은 긴 문장보다 책임주체, 해야 할 일, 기한, 완료 상태, 확인방법, 미이행 시 처리 기준이 분명합니다. 인터넷 문구를 그대로 붙이기보다 실제로 발견한 문제와 합의 내용을 기준으로 봅니다.'],
      ['왜 중요한가','구두로는 같은 약속처럼 들려도 사람마다 완료의 기준이 다를 수 있습니다. “잔금 전 처리”, “문제없게 정리”처럼 범위와 확인방법이 모호하면 나중에 서로 다른 해석이 생길 수 있습니다.'],
      ['확인·계약방법','문제가 발견되면 먼저 누가 책임지는지 정하고, 무엇을 어느 시점까지 어떤 상태로 만들어야 하는지 구체화합니다. 그다음 무엇으로 완료를 확인할지와 미이행 시 다음 행동을 검토합니다. 합의된 핵심 내용은 계약서와 특약에 일치하게 남깁니다.'],
      ['실제사례','잔금 전 특정 권리를 정리하기로 합의했다고 가정합니다. “정리한다”는 표현만 둘 것이 아니라 담당자, 완료 시점, 확인 기준, 잔금 지급과의 연결까지 검토해야 실제 실행계획이 됩니다.'],
      ['핵심원칙','누가 → 무엇을 → 언제까지 → 어떤 상태로 → 무엇으로 확인 → 미이행 시 어떻게. 특약은 위험을 이 구조로 바꾸는 과정입니다.'] ]},
    {slug:'recheck',num:'05',label:'VERIFY',title:'계약 후~잔금 전 재확인',question:'계약 당시 정보가 잔금일까지 그대로인가?',icon:'recheck',hero:'한 번 확인한 사실도 시간이 지나면 다시 확인 대상이 됩니다.',
     sections:[
      ['기본개념','계약 체결과 잔금 사이에는 시간이 흐릅니다. 그 사이 권리관계, 임대차, 시설상태, 약속한 조치의 이행 여부가 달라질 수 있으므로 계약 당시의 확인을 잔금 전 다시 연결합니다.'],
      ['핵심포인트','최신 권리관계, 임대차 변동, 특약 이행, 보수·정리 상태, 이전서류 준비, 최종 정산금액을 계약 당시 자료와 비교합니다.'],
      ['왜 중요한가','계약 당일 정확했던 정보가 잔금일까지 자동으로 유지되는 것은 아닙니다. 변화가 없다는 가정으로 잔금을 준비하면 새로 생긴 문제를 지급 직전에서야 발견할 수 있습니다.'],
      ['확인·계약방법','계약 당시 확인자료를 기준점으로 남기고 잔금 직전에 같은 항목을 다시 봅니다. 달라진 내용이 있으면 단순 메모가 아니라 계약조건과 지급계획에 어떤 영향을 주는지 다시 판단합니다.'],
      ['실제사례','계약 후 새로운 임차조건이 생기거나 약속했던 보수가 완료되지 않은 경우를 생각할 수 있습니다. 계약 당시에는 없던 변화이므로 잔금액, 인도조건, 계약 이행 여부를 다시 연결해서 봐야 합니다.'],
      ['핵심원칙','계약 당시의 사실과 잔금일의 사실은 같다고 가정하지 않습니다. 중요한 정보는 지급 전에 다시 확인합니다.'] ]},
    {slug:'closing',num:'06',label:'CLOSE',title:'잔금·권리말소·소유권 이전',question:'거래를 어떻게 실제로 완결하는가?',icon:'transfer',hero:'잔금일은 송금 한 번이 아니라 여러 절차가 동시에 맞는 날입니다.',
     sections:[
      ['기본개념','클로징은 매수인이 잔금을 지급하고 매도인이 권리 정리, 이전서류, 실제 인도를 맞추는 거래의 마무리 단계입니다. 돈, 권리, 서류, 현실의 인도가 서로 연결됩니다.'],
      ['핵심포인트','잔금 직전 최종 권리확인, 말소와 지급 순서, 이전서류 준비, 보증금과 각종 정산, 열쇠·시설·관리자료 인수, 거래신고와 등기·세무 후속절차까지 구분해서 봅니다.'],
      ['왜 중요한가','돈만 송금됐다고 거래가 완결되는 것은 아닙니다. 권리가 정리되지 않거나 필요한 이전서류가 부족하거나 실제 인도가 맞지 않으면 자금 이동과 권리 이전 사이에 틈이 생깁니다.'],
      ['확인·계약방법','잔금 직전 권리와 정산금액을 다시 확인하고, 말소·이전서류·지급·실제 인도의 실행 순서를 미리 맞춥니다. 완료 후에는 거래신고, 소유권이전등기, 취득 관련 세무절차 등 후속업무가 빠지지 않았는지 확인합니다.'],
      ['실제사례','잔금 송금 준비는 끝났지만 말소에 필요한 서류가 아직 도착하지 않은 상황이라면 돈만 먼저 보내는 것이 아니라 거래 당사자와 실무 담당자가 어떤 순서로 동시에 처리할지 확인할 필요가 있습니다.'],
      ['핵심원칙','서류·권리·돈·실제 인도가 함께 맞아야 거래가 끝납니다. 클로징은 네 요소를 동시에 정렬하는 단계입니다.'] ]},
    {slug:'checklist',num:'07',label:'CHECK',title:'계약 체크리스트',question:'배운 내용을 실제 계약에서 어떻게 빠뜨리지 않는가?',icon:'check',hero:'빠른 확인용 필수판과 정밀 확인용 상세판을 구분합니다.',
     sections:[
      ['기본개념','체크리스트는 본문의 내용을 다시 공부하는 페이지가 아니라 실제 계약에서 확인 누락을 줄이기 위한 실행 도구입니다.'],
      ['핵심포인트','필수판은 계약 직전 빠르게 다시 볼 핵심 항목, 상세판은 01~06 흐름에 맞춰 하나씩 점검할 확장 항목으로 설계합니다. 두 버전은 목적과 사용시간이 다릅니다.'],
      ['왜 중요한가','계약 내용을 이해하고 있어도 현장에서는 시간 압박과 여러 사람의 대화 때문에 확인 순서가 흐트러질 수 있습니다. 체크리스트는 지식을 행동 순서로 바꾸는 역할을 합니다.'],
      ['확인·계약방법','필수판은 계약 상대·대상·권리·지급·특약·재확인·클로징의 핵심만 빠르게 확인합니다. 상세판은 각 단계별 세부 항목을 더 촘촘히 검토합니다. 실제 거래에서는 발견된 문제를 단순 체크 완료로 덮지 않고 추가확인 대상으로 분리합니다.'],
      ['실제사례','계약 당일 여러 서류를 확인하느라 잔금 전 재확인 항목을 놓치는 상황을 생각할 수 있습니다. 단계별 체크리스트가 있으면 지금 확인할 것과 이후 다시 볼 것을 분리해 관리하기 쉬워집니다.'],
      ['핵심원칙','체크리스트의 목적은 많이 체크하는 것이 아니라 중요한 확인을 빠뜨리지 않는 것입니다. 필수와 상세를 상황에 맞게 나눠 사용합니다.'] ],
     checklist:{essential:['계약 상대와 소유자 일치','공동소유·대리권 확인','지급계좌 근거 확인','최신 권리관계 확인','서류와 실제 현황 일치','시설·집기 포함범위','임대차·보증금 확인','말소할 권리와 시점','매매대금·지급조건','구두합의의 문서 반영','잔금 전 이행조건','잔금 직전 재확인','말소·이전·지급 순서','실제 인도사항','후속 신고·등기 확인'],detailed:['계약 상대·권한','계약 대상·현황','가격·지급조건','계약서·특약','계약 후 재확인','잔금·이전'] }},
    {slug:'red-flags',num:'08',label:'RED FLAGS',title:'사기·위험 신호 감별',question:'사람의 인상이 아니라 거래 구조에서 어떤 이상신호를 볼 것인가?',icon:'alert',hero:'하나의 행동으로 단정하지 않고 반복되는 불일치와 회피 패턴을 봅니다.',
     sections:[
      ['기본개념','위험 신호는 특정한 얼굴이나 직업을 구별하는 방법이 아닙니다. 계약 과정에서 정보가 맞지 않거나 확인을 어렵게 만들거나 돈의 흐름이 설명되지 않는 패턴을 발견하는 방법입니다.'],
      ['핵심포인트','IDENTITY는 계약 주체 불일치, DOCUMENT는 자료 회피·불일치, MONEY는 설명되지 않는 제3자 지급, PRESSURE는 과도한 재촉, STORY는 설명의 반복 변경, AVOIDANCE는 확인 요청을 피하는 행동을 뜻합니다.'],
      ['왜 중요한가','각 신호는 정상 거래에서도 개별적으로 나타날 수 있습니다. 중요한 것은 신호 하나를 “사기”라고 단정하는 것이 아니라 여러 불일치가 반복될 때 확인 수준을 높이는 것입니다.'],
      ['확인·계약방법','이상신호가 보이면 서두르지 말고 계약 주체·서류·지급근거를 다시 확인합니다. 자료가 계속 제공되지 않거나 중요한 설명이 반복해서 바뀌면 전문가 확인이나 거래 재검토 같은 더 높은 단계의 대응을 고려합니다.'],
      ['실제사례','시세보다 좋은 조건을 강조하면서 오늘 바로 계약금을 요구하고, 소유관계 자료와 지급계좌 설명은 다음에 보여주겠다는 상황을 생각할 수 있습니다. 싸다는 사실보다 “재촉 + 자료 지연 + 돈 흐름 불명확”이 함께 나타난 구조를 먼저 봅니다.'],
      ['핵심원칙','사람을 감별하지 말고 거래의 일관성을 확인합니다. 이상신호가 겹칠수록 속도를 늦추고 확인 수준을 높입니다.'] ]},
    {slug:'mistakes',num:'09',label:'COMMON MISTAKES',title:'흔한 계약 실수',question:'매수자는 어떤 작은 생략을 반복해서 사고를 키우는가?',icon:'mistake',hero:'큰 실수 하나보다 작은 확인 생략이 이어지는 흐름을 봅니다.',
     sections:[
      ['기본개념','흔한 계약 실수는 상대방의 사기 여부와 별개로 매수자 스스로 확인을 생략하거나 추정으로 대신하면서 생기는 문제입니다.'],
      ['핵심포인트','며칠 전 확인한 자료만 믿기, 구두합의를 문서에 남기지 않기, 집기·시설이 당연히 포함된다고 생각하기, 중개인의 확인을 내 확인으로 착각하기, 특약 한 줄이면 모든 문제가 해결된다고 생각하기, 잔금 전 재확인을 생략하기가 대표적입니다.'],
      ['왜 중요한가','각 실수는 당시에는 작아 보이지만 연속되면 큰 빈틈이 됩니다. “대충 확인 → 말로 합의 → 다시 안 봄 → 지급”처럼 여러 생략이 이어질 때 문제가 커집니다.'],
      ['확인·계약방법','추정한 내용은 확인으로 바꾸고, 구두합의는 문서와 대조하며, 한 번 본 정보는 필요한 시점에 다시 봅니다. 누군가 대신 확인했다는 이유로 중요한 확인의 책임까지 사라진다고 생각하지 않습니다.'],
      ['실제사례','계약 전 등기사항을 확인했지만 계약 후 다시 보지 않았고, 시설물 포함은 말로만 합의했으며, 잔금일에는 송금 일정에만 집중한 상황을 가정할 수 있습니다. 각각은 작은 생략이지만 함께 발생하면 대응하기 어려운 문제가 됩니다.'],
      ['핵심원칙','추정 → 구두합의 → 생략 → 지급의 흐름을 끊습니다. 중요한 것은 확인하고, 남기고, 다시 확인합니다.'] ]},
  ]
};

const en={...ko,
  metaTitle:'Building Contract Guide | Verification, Terms & Closing | FIX BUILDING',metaDescription:'Learn how to verify the contracting party, define the property scope, structure payment terms, document agreements, recheck changes, and close a building transaction.',
  eyebrow:'FIX BUILDING · 03 CONTRACT',title:'Building Contract',lead:'Learn what to verify before signing, how to turn agreements into clear conditions, and what to check again before closing.',
  ctas:{flow:'View the full contract process',risk:'Fraud & transaction red flags',mistakes:'Common contract mistakes'},
  quick:{eyebrow:'QUICK ACCESS',title:'Choose a contract stage.',lead:'Follow the full process the first time, or jump directly to the stage you need to review again.'},
  tutorial:{eyebrow:'CONTRACT PRINCIPLES',title:'Read the structure before the wording.',lead:'Before memorizing individual checks, build a framework for how to read the transaction.',items:[
    ['A contract is a process, not a single document.','Connect pre-contract verification, negotiation, documentation, pre-closing rechecks, payment and transfer as one workflow.'],
    ['Look for consistency, not just documents.','Compare what people say, what the documents show, the actual condition and what the contract records.'],
    ['Look for conditions and responsibility, not promises.','Clarify who must do what, by when, to what standard and how completion will be verified.'],
    ['Link money to conditions, not only dates.','Treat each payment stage as a point where defined conditions should be confirmed before funds move.'],
    ['Do not try to solve every risk with a clause.','Some issues call for more verification, changed terms, professional review or reconsidering the transaction itself.']]},
  takeaway:['Turn verified facts into conditions.','Turn agreements into writing.','Recheck before payment.'],
  riskStrip:{title:'Risks that cut across the whole process',lead:'Red flags and common mistakes are not single stages. They can appear throughout the transaction.'},
  back:'← Back to Contract',other:'Explore other contract topics',caseLabel:'Example',principle:'Key principle',notice:'This guide provides general educational information. Legal, tax, registration and transaction decisions can vary by jurisdiction and deal structure.',
  sections:['01 Basics','02 Key points','03 Why it matters','04 How to check','05 Example','06 Key principle'],
  pages: ko.pages.map((p,i)=>({ ...p,
    title:['Parties & authority','Property & current condition','Price & payment terms','Contract terms & special clauses','Pre-closing recheck','Closing & title transfer','Contract checklist','Fraud & transaction red flags','Common contract mistakes'][i],
    question:['Does the person across the table actually have authority to contract?','What exactly are you buying?','When should money move, and under what conditions?','How do you turn findings and agreements into enforceable deal terms?','Is the information still the same before closing?','How do the money, rights, documents and handover line up at closing?','How do you avoid missing key checks in a real transaction?','What transaction patterns should make you slow down and verify more?','Which small shortcuts by buyers tend to compound into bigger problems?'][i],
    hero:['Verify authority through documents and relationships, not impressions.','Make sure documents and reality point to the same asset.','Money should move through verification gates, not just calendar dates.','Convert identified risk into clear, executable terms.','Important facts can change between signing and closing.','Closing is a synchronized process, not a single transfer.','Use a short essential list and a deeper detailed list for different situations.','Watch recurring inconsistencies and avoidance patterns rather than judging appearances.','Small omissions can compound into major gaps.'][i]
  }))
};
const ja={...ko,
  metaTitle:'建物契約ガイド | 契約確認・条件・決済 | FIX BUILDING',metaDescription:'建物契約で確認すべき相手、契約対象、支払条件、特約、決済前の再確認、引渡しまでの流れを整理します。',
  eyebrow:'FIX BUILDING · 03 CONTRACT',title:'建物契約',lead:'購入を決めた建物について、契約時に何を確認し、何を条件として残し、決済前に何を再確認するかを順番に整理します。',
  ctas:{flow:'契約の流れをすべて見る',risk:'詐欺・取引リスクの兆候',mistakes:'よくある契約ミス'},
  quick:{eyebrow:'QUICK ACCESS',title:'契約プロセスごとに確認する',lead:'初めてなら全体の流れを、見直したい項目がある場合は必要な段階を選択してください。'},
  tutorial:{eyebrow:'CONTRACT PRINCIPLES',title:'文言の前に、契約の構造を見る。',lead:'個別の確認事項を覚える前に、契約全体を見る基準を整理します。',items:[
    ['契約は一枚の書類ではなくプロセス','事前確認、条件調整、文書化、決済前の再確認、支払、移転までを一つの流れとして見ます。'],
    ['資料があることより整合しているかを見る','説明、書類、現況、契約書の内容が同じ事実を示しているか比較します。'],
    ['約束より条件と責任を見る','誰が何をいつまでにどの状態にし、何で完了を確認するかを明確にします。'],
    ['支払は日付だけでなく条件と見る','各支払前に何が確認されるべきかを決め、条件と資金移動を結びつけます。'],
    ['すべてのリスクを特約で解決しようとしない','追加確認、条件変更、専門家確認、取引自体の再検討が必要な場合があります。']]},
  takeaway:['確認したことは条件へ。','合意したことは文書へ。','支払前にはもう一度確認。'],
  riskStrip:{title:'契約全体を通して確認するリスク',lead:'リスクの兆候とよくあるミスは、特定の一段階ではなく取引全体に現れます。'},
  back:'← 契約へ戻る',other:'他の契約コンテンツを見る',caseLabel:'例',principle:'重要原則',notice:'本コンテンツは一般的な学習・情報提供を目的としています。実際の法務・税務・登記判断は取引内容や最新制度により異なる場合があります。',
  sections:['01 基本概念','02 重要ポイント','03 なぜ重要か','04 確認・契約方法','05 事例','06 重要原則'],
  pages: ko.pages.map((p,i)=>({...p,
    title:['契約当事者・権限確認','契約対象・現況確認','価格・支払条件','契約書・特約','決済前の再確認','決済・権利整理・所有権移転','契約チェックリスト','詐欺・取引リスクの兆候','よくある契約ミス'][i],
    question:['契約相手に実際の契約権限があるか','何をどの状態で購入するのか','いつ、どの条件で資金を支払うのか','確認・合意した内容をどう契約条件にするか','契約時の情報は決済前も同じか','決済日に複数の手続きをどう合わせるか','実際の契約で確認漏れをどう減らすか','取引構造のどんな兆候に注意するか','買主が繰り返しやすい小さな省略は何か'][i],
    hero:['印象ではなく書類と関係から権限を確認します。','書類と現況が同じ資産を示しているか確認します。','資金は日付だけでなく確認条件を通って動きます。','発見したリスクを実行可能な契約条件へ変えます。','一度確認した事実も決済前には再確認します。','決済は送金だけでなく複数手続きの同期です。','必須版と詳細版を状況に応じて使い分けます。','人の印象ではなく取引上の不整合と回避行動を見ます。','小さな確認省略が重なる流れを止めます。'][i]
  }))
};


const EN_SECTIONS=[
[
['Basics','Checking the other party means verifying more than identity. Confirm who owns the property, whether there are co-owners, whether an agent has authority, and who is actually authorized to sign or receive funds.'],
['Key points','Compare the registered owner with the contracting party, identify co-ownership, verify the scope of any power of attorney, confirm corporate authority when a company owns the property, and understand why a particular payment account is being used.'],
['Why it matters','Even a well-priced deal can become unstable if the person signing lacks authority or the payment route cannot be explained. Statements such as “I am handling this for the owner” should be matched with verifiable authority.'],
['How to check','Match identity and ownership records. Where an agent or co-owner is involved, confirm the necessary authority and consent. For corporate ownership, verify representative authority. Resolve any mismatch between the explanation and documents before moving forward.'],
['Example','Suppose a family member of the owner attends signing and says they have full authority. The important issue is not the family relationship but whether authority to sign and receive funds can actually be verified.'],
['Key principle','Trust and contractual authority are different questions. Move forward when the contracting party, authority and payment basis line up.']],
[
['Basics','Defining the property means turning “this building” into a precise scope: land, building, ancillary areas, parking, fixtures, equipment and the tenancy position you will actually take over.'],
['Key points','Compare registration and public records, the actual site and the contract description. Focus on what is included and in what condition, rather than repeating the investment analysis.'],
['Why it matters','A property may have passed your analysis but the asset you finally receive can differ from what you expected if boundaries, facilities or occupancy details are unclear.'],
['How to check','Match the contract description against records and the site. Identify included fixtures and ancillary spaces, and refresh tenancy and deposit figures as of the contracting date.'],
['Example','A rooftop storage area and parking equipment may have been treated as part of normal use, but that does not automatically mean they are included in the sale. Define the scope in the deal documents.'],
['Key principle','A property is more than an address. Make the documents, physical condition and included scope describe the same asset.']],
[
['Basics','The purchase price is not only a total. Review the deposit, interim payments, closing balance, assumed deposits, adjustments and financing as a sequence tied to verification points.'],
['Key points','Understand why the cash amount differs from the headline price, what must be confirmed before each payment, whether the account is correct, and how payment lines up with releases and document delivery.'],
['Why it matters','If dates are treated as automatic triggers, money can move simply because the calendar says so even when an agreed condition has not been completed.'],
['How to check','Attach a pre-payment check to each payment stage. Recalculate amounts and accounts, and align any release of rights or delivery of documents with the actual payment sequence.'],
['Example','If closing day arrives but the documents needed to release a security interest are not ready, the key question is not only the date but what must be completed before funds move.'],
['Key principle','A payment date is a calendar point. A payment condition is a transaction control. Keep the order: verify → satisfy condition → pay.']],
[
['Basics','A contract records more than price. It allocates responsibility for the property, payments, handover, rights, tenancy, repairs, facilities and document delivery.'],
['Key points','A useful special clause identifies the responsible party, required action, deadline, completion standard, verification method and what happens if the requirement is not met.'],
['Why it matters','Vague promises can sound identical during negotiation but leave room for different interpretations later. “Resolve before closing” can mean different things unless completion is defined.'],
['How to check','Start with the risk or unresolved issue. Define who handles it, what must be done, by when, how completion is confirmed and how the transaction responds if it is not completed. Make sure the written contract matches the actual agreement.'],
['Example','If a right must be cleared before closing, “the seller will handle it” is only a starting point. The closing condition, evidence of completion and relationship to payment should also be considered.'],
['Key principle','Who → what → by when → completion standard → verification → if not completed. Turn risk into an executable term.']],
[
['Basics','Time passes between signing and closing. Rights, tenancies, the property condition and promised actions may change, so the original verification should be refreshed before payment.'],
['Key points','Recheck current rights, tenancy changes, performance of agreed actions, physical condition, closing documents and the final adjusted amount against the signing baseline.'],
['Why it matters','Information that was accurate at signing does not remain accurate automatically. New issues can appear during the gap before closing.'],
['How to check','Keep the signing information as a baseline and compare the same key items again shortly before closing. If something changed, reassess its effect on the deal terms and payment plan.'],
['Example','A tenancy changes after signing or promised repair work remains incomplete. Those changes should be connected back to handover conditions and the closing decision.'],
['Key principle','Do not assume signing-day facts are still true at closing. Recheck important information before funds move.']],
[
['Basics','Closing is the stage where funds, release of rights, transfer documents and physical handover must line up. It is a coordinated completion process, not merely a bank transfer.'],
['Key points','Review final rights, the sequence for releases and payment, transfer documents, deposits and adjustments, keys and operational records, and the required reporting, registration and tax follow-up.'],
['Why it matters','Money moving does not by itself complete the transaction. Gaps between payment, release, documents and actual handover can create unnecessary exposure.'],
['How to check','Refresh rights and final figures immediately before closing. Agree the execution sequence for releases, transfer documents, payment and handover, then confirm post-closing reporting and registration tasks.'],
['Example','If funds are ready but release documents have not arrived, the parties and closing professionals need to align the sequence rather than treating the transfer alone as completion.'],
['Key principle','The transaction is complete when documents, rights, money and physical handover line up.']],
[
['Basics','The checklist is an execution tool, not another textbook. It converts the contract process into a sequence that helps reduce missed checks.'],
['Key points','The Essential version is a fast final review. The Detailed version follows stages 01–06 and provides a deeper review. They are designed for different levels of time and detail.'],
['Why it matters','Even people who understand the process can miss items when several people, documents and deadlines converge at signing or closing.'],
['How to check','Use the Essential list for core parties, property, rights, payment, terms, rechecks and closing. Use the Detailed list when you need to work through each stage more carefully.'],
['Example','A stage-based checklist can separate what must be checked on signing day from what must be rechecked before closing, reducing the chance of treating everything as a one-time task.'],
['Key principle','The goal is not to tick more boxes. It is to avoid missing important verification.']],
[
['Basics','Red flags are not a way to judge someone by appearance. They are transaction patterns such as inconsistent identity, delayed documents, unexplained money flows, pressure and avoidance.'],
['Key points','IDENTITY covers party mismatches, DOCUMENT covers missing or inconsistent records, MONEY covers unexplained third-party payments, PRESSURE covers unusual urgency, STORY covers changing explanations and AVOIDANCE covers resistance to verification.'],
['Why it matters','Any one signal may occur in a legitimate transaction. The value comes from recognizing repeated inconsistencies and increasing the level of verification rather than making instant accusations.'],
['How to check','Slow the process down and refresh party, document and payment checks. When important records remain unavailable or explanations keep changing, consider professional review or reconsidering the transaction.'],
['Example','An unusually attractive price is paired with pressure to send a deposit today, while ownership documents and the payment-account explanation are postponed. The combined pattern matters more than the low price alone.'],
['Key principle','Do not try to identify a “scammer.” Test whether the transaction remains consistent. More overlapping red flags should mean more verification, not more speed.']],
[
['Basics','Common mistakes can happen even without fraud. They occur when a buyer replaces verification with assumptions or skips a step under time pressure.'],
['Key points','Examples include relying on an old record, leaving verbal agreements unwritten, assuming fixtures are included, treating an intermediary’s check as your own, believing a clause solves every risk and skipping pre-closing rechecks.'],
['Why it matters','Each shortcut may look small. The problem grows when they stack: assume → agree verbally → skip recheck → pay.'],
['How to check','Turn assumptions into verification, verbal agreements into written terms, and one-time checks into timed rechecks where needed. Do not assume another person’s work removes the need to understand a critical issue yourself.'],
['Example','A buyer checks rights before signing, relies on a verbal agreement about equipment, never refreshes the information and focuses only on the payment deadline at closing. Several small omissions have now combined.'],
['Key principle','Break the chain of assumption → verbal agreement → omission → payment. Verify, record and recheck what matters.']]
];
const JA_SECTIONS=[
[
['基本概念','契約相手の確認は身分証だけを見ることではありません。登記上の所有者、共有者、代理人、法人の代表者など、実際に契約を締結し代金を受領する権限が誰にあるかを確認します。'],
['重要ポイント','所有者と契約相手の一致、共有の有無、代理権の範囲、法人の場合の代表権、振込先口座の根拠を相互に確認します。'],
['なぜ重要か','契約条件が良くても権限のない相手との契約や説明できない支払経路があれば、取引の前提が不安定になります。'],
['確認・契約方法','本人確認と所有関係を照合し、共有や代理契約では必要な同意と委任範囲を確認します。法人所有では代表権を確認し、説明と書類の不一致を解消してから進みます。'],
['事例','所有者の家族が「すべて任されている」と説明して契約に来た場合でも、家族関係ではなく契約締結や代金受領までの権限が確認できるかを見る必要があります。'],
['重要原則','信頼と契約権限の確認は別です。契約主体、権限、支払根拠が一致してから次へ進みます。']],
[
['基本概念','契約対象の確認は「この建物を買う」という表現を、土地・建物・付属設備・駐車場・什器・賃貸状況など具体的な引渡し範囲に変える作業です。'],
['重要ポイント','登記や各種公的資料、現地の状態、契約書の目的物表示が一致しているか確認します。分析ではなく「何をどの状態で引き継ぐか」に集中します。'],
['なぜ重要か','分析上は良い物件でも、引渡し範囲が曖昧なら実際に取得する資産が想定と異なる可能性があります。'],
['確認・契約方法','契約書の目的物表示を資料と現地で照合し、含まれる設備や付属部分を明確にします。賃貸状況や保証金などは契約時点の内容に更新します。'],
['事例','屋上倉庫や駐車設備を当然に含まれると考えていても、契約上の範囲が明確でなければ認識がずれることがあります。'],
['重要原則','契約対象は住所だけではありません。書類、現況、含まれる範囲が同じ資産を示すように整えます。']],
[
['基本概念','売買代金は総額だけではありません。手付金、中間金、残代金、承継保証金、精算、融資実行などを確認条件と結びつけて見ます。'],
['重要ポイント','各支払前に何が完了している必要があるか、振込先が正しいか、権利整理や書類引渡しと支払順序がどうつながるかを確認します。'],
['なぜ重要か','日付だけを基準にすると、確認が終わっていないのに予定日だからという理由で資金が先に動く可能性があります。'],
['確認・契約方法','各支払段階に「支払前の確認」を設定し、金額・口座・精算を再計算します。権利整理や書類提供が先行条件なら実行順序を合わせます。'],
['事例','決済日が来ても担保権抹消の準備が完了していない場合、予定日だけで送金するのではなく何が完了したら支払うかを確認します。'],
['重要原則','支払日は日程、支払条件は安全装置です。確認 → 条件充足 → 支払の順序を保ちます。']],
[
['基本概念','契約書は価格だけを記載する書類ではありません。対象、支払、引渡し、権利整理、賃貸承継、設備、資料提供などの責任を固定する役割があります。'],
['重要ポイント','特約では責任者、実施内容、期限、完了状態、確認方法、不履行時の対応が明確かを見ます。'],
['なぜ重要か','「決済前に処理する」など曖昧な表現は、完了の意味を当事者ごとに違って解釈する余地があります。'],
['確認・契約方法','未解決の問題から出発し、誰が、何を、いつまでに、どの状態にし、何で確認し、できなかった場合にどうするかを整理します。'],
['事例','決済前に特定の権利を整理する合意がある場合、単に「整理する」と書くだけでなく完了条件と支払との関係まで確認します。'],
['重要原則','誰が → 何を → いつまでに → 完了状態 → 確認方法 → 未履行時。リスクを実行可能な条件へ変えます。']],
[
['基本概念','契約締結から決済まで時間が経過します。その間に権利、賃貸状況、建物状態、約束した措置が変化する可能性があります。'],
['重要ポイント','最新の権利関係、賃貸状況、特約履行、修繕状態、移転書類、最終精算額を契約時の基準と比較します。'],
['なぜ重要か','契約日に正しかった情報が決済日まで自動的に維持されるわけではありません。'],
['確認・契約方法','契約時の確認内容を基準として残し、決済直前に同じ重要項目を再確認します。変化があれば契約条件や支払計画への影響を再判断します。'],
['事例','契約後に賃貸条件が変わったり、約束した修繕が未完了の場合は、引渡し条件と決済判断を改めて確認します。'],
['重要原則','契約時の事実と決済時の事実が同じだと仮定しません。重要情報は支払前に再確認します。']],
[
['基本概念','決済は資金、権利整理、移転書類、現実の引渡しを合わせる完了段階です。単なる送金ではありません。'],
['重要ポイント','最終権利確認、抹消と支払の順序、移転書類、保証金・各種精算、鍵や管理資料の引渡し、取引後の申告・登記・税務手続きを確認します。'],
['なぜ重要か','送金だけ完了しても、権利や書類、現実の引渡しに不足があれば取引完了とは言えません。'],
['確認・契約方法','決済直前に権利と最終金額を再確認し、抹消、移転書類、支払、引渡しの実行順序を合わせます。'],
['事例','送金準備はできていても抹消に必要な書類が揃っていない場合、送金だけを先行させず実行順序を確認します。'],
['重要原則','書類・権利・資金・現実の引渡しが揃って取引が完了します。']],
[
['基本概念','チェックリストは本文をもう一度読むためではなく、実際の取引で確認漏れを減らすための実行ツールです。必須版と詳細版を目的に応じて使い分けます。'],
['重要ポイント','必須版は短時間の最終確認、詳細版は01〜06の流れに沿った精密確認として使い分けます。'],
['なぜ重要か','契約当日は複数の書類、人、期限が重なり、理解している内容でも確認順序が崩れることがあります。'],
['確認・契約方法','必須版で主体・対象・権利・支払・特約・再確認・決済の中核を確認し、必要に応じて詳細版で段階ごとに深く確認します。'],
['事例','契約日と決済前で確認すべき内容を分けておけば、一度確認したから終わりという思い込みを減らせます。'],
['重要原則','多くチェックすることではなく、重要な確認を抜かさないことが目的です。']],
[
['基本概念','リスクの兆候は外見で人を判断する方法ではありません。取引の不整合、資料遅延、説明できない資金経路、過度な催促、確認回避などのパターンを見ます。'],
['重要ポイント','IDENTITY、DOCUMENT、MONEY、PRESSURE、STORY、AVOIDANCEの6つの観点で取引の一貫性を確認します。'],
['なぜ重要か','一つの兆候だけなら正常な取引でも起こり得ます。複数の不整合が繰り返されるときに確認レベルを上げることが重要です。'],
['確認・契約方法','取引速度を落とし、当事者・資料・支払根拠を再確認します。重要資料が出ない、説明が変わり続ける場合は専門家確認や取引再検討を考えます。'],
['事例','好条件を強調して今日の入金を求める一方、所有資料や振込先の説明は後回しにする場合、価格より「催促＋資料遅延＋資金経路不明」の組み合わせを見ます。'],
['重要原則','人を「詐欺師」と判定するのではなく、取引の一貫性を検証します。兆候が重なるほど確認を増やします。']],
[
['基本概念','よくある契約ミスは相手の悪意がなくても起こります。買主が確認を推測に置き換えたり、時間に追われて手順を省略することで生じます。'],
['重要ポイント','古い資料だけを信じる、口頭合意を書面化しない、設備が当然含まれると思う、仲介者の確認を自分の確認と同一視する、特約を万能と考える、決済前再確認を省くなどがあります。'],
['なぜ重要か','一つ一つは小さく見えても「推測 → 口頭 → 再確認省略 → 支払」と連続すると大きな空白になります。'],
['確認・契約方法','推測を確認に、口頭合意を書面に変え、必要な情報は適切な時点で再確認します。'],
['事例','契約前に権利を見たがその後更新せず、設備の含有は口頭だけで合意し、決済日は送金だけに集中した場合、小さな省略が重なっています。'],
['重要原則','推測 → 口頭合意 → 省略 → 支払の流れを断ちます。重要事項は確認し、残し、再確認します。']]
];
en.pages=en.pages.map((p,i)=>({...p,sections:EN_SECTIONS[i],checklist:i===6?{essential:['Party and owner match','Co-owner or agency authority','Payment-account basis','Current rights','Documents match actual condition','Included fixtures and facilities','Tenancy and deposits','Rights to be released and timing','Price and payment conditions','Written record of key agreements','Conditions due before closing','Pre-closing recheck','Release-transfer-payment sequence','Physical handover','Post-closing reporting and registration'],detailed:['Parties & authority','Property & condition','Price & payment','Terms & clauses','Pre-closing recheck','Closing & transfer']}:undefined}));
ja.pages=ja.pages.map((p,i)=>({...p,sections:JA_SECTIONS[i],checklist:i===6?{essential:['契約相手と所有者の一致','共有・代理権の確認','振込先口座の根拠','最新の権利関係','書類と現況の一致','設備・什器の範囲','賃貸・保証金','抹消する権利と時期','代金・支払条件','重要合意の書面化','決済前の履行条件','決済直前の再確認','抹消・移転・支払の順序','現実の引渡し','取引後の申告・登記'],detailed:['契約当事者・権限','契約対象・現況','価格・支払条件','契約書・特約','決済前再確認','決済・移転']}:undefined}));
en.checklistLabels={essential:'Essential checklist',detailed:'Detailed checklist',essentialLead:'Fast review of core items before signing or closing',detailedLead:'A deeper stage-by-stage review'};
ja.checklistLabels={essential:'必須チェックリスト',detailed:'詳細チェックリスト',essentialLead:'契約・決済前に短時間で確認する中核版',detailedLead:'段階ごとにより細かく確認する詳細版'};
ko.checklistLabels={essential:'필수 체크리스트',detailed:'상세 체크리스트',essentialLead:'계약 직전 빠르게 다시 확인하는 핵심판',detailedLead:'01~06 흐름별로 더 촘촘하게 확인하는 확장판'};

export const CONTRACT_COPY={ko,en,ja};
export const CONTRACT_SLUGS=ko.pages.map(p=>p.slug);
