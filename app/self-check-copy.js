// FIX BUILDING self-check localization copy.
// Keep analysis/scoring logic out of this file. Only user-facing copy belongs here.
// English/Japanese are intentionally left as locale-ready containers for the next localization step.

const KO = {
  common: {
    start: '진단 시작하기',
    koOnly: '한국어 버전부터 제공',
    previous: '이전',
    next: '다음',
    restart: '처음부터 시작하기',
    restartConfirm: '지금까지 답변을 모두 지우고 처음부터 다시 시작할까요?',
    analysisComplete: '분석 완료',
    resultView: '결과 보기',
    assetResultView: '자산결과 보기',
    currentAnalysis: '현재 분석',
  },
  stages: {
    1: { title: 'STEP 1 · 기본 투자성향', completeNext: '자산 적합성을 확인합니다.' },
    2: { title: 'STEP 2 · 자산 적합성', completeNext: '투자 행동 분석으로 넘어갑니다.' },
    3: { title: 'STEP 3 · 투자 행동', completeNext: '최종 종합결과를 확인합니다.' },
    complete: '분석이 완료되었습니다.',
  },

  journey: {
    aria: '자가진단 전체 진행상황',
    items: [
      { n:'01', key:'BASIC', label:'기본 성향' },
      { n:'02', key:'ASSET', label:'자산 적합성' },
      { n:'03', key:'BEHAVIOR', label:'투자 행동' },
      { n:'FINAL', key:'RESULT', label:'종합 결과' },
    ],
  },
  intro: {
    eyebrow: 'SELF CHECK',
    title: '건물 투자 자가진단',
    lead: '3단계로 확인하는 투자성향과 자산 적합성',
    cards: [
      ['01','기본 투자성향','건물을 보는 기준과 판단 습관을 확인합니다.'],
      ['02','자산 적합성','자금·관리 방식과 맞는 자산 유형을 비교합니다.'],
      ['03','투자 행동분석','실제 계약과 위험상황에서 나타나는 행동 패턴을 연결합니다.'],
    ],
  },
  scale: {
    eyebrow: 'SCALE CHECK',
  },
  question: {
    scaleLabel: 'SCALE ANALYSIS',
    sceneLabel: 'LIVE SCENARIO',
    scaleTitle: '빠르게 답하고, 다음 판단으로 넘어갑니다.',
    scenePrefix: 'SCENE',
  },
  landing: {
    hero: {
      eyebrow: 'FIX BUILDING / SELF CHECK',
      titleLines: ['건물 진단 전에 해보는', '본인 진단'],
      subtitle: '나는 어떤 건물 투자자일까?',
      description: [
        '건물을 고르기 전에, 먼저 나의 판단 기준을 확인합니다.',
        '투자 목적과 위험을 받아들이는 방식, 현금흐름과 대출에 대한 태도를 살펴보고,',
        '관리와 정보 검증 습관까지 단계적으로 확인합니다.',
      ],
      promptLines: ['지금 바로 나의 투자관점이 궁금하시면,', '아래에서 진단을 시작하세요.'],
      factsAria: '자가진단 안내',
      noteLines: ['결과는 투자 판단을 대신하지 않는', '자가점검입니다.'],
    },
    combo: {
      aria: '2,240개 이상의 분석 조합',
      finalLine: '“2,240개 이상의 조합으로 분석하는 건물 투자 자가진단”',
    },
    discover: {
      eyebrow: 'WHAT YOU CAN DISCOVER.',
      titleLines: ['이 테스트로', '무엇을 알 수 있을까요?'],
      paragraphs: [
        '이 자가진단은 하나의 투자 유형을 단순히 붙이는 테스트가 아닙니다. 투자 판단에 영향을 줄 수 있는 여러 요소를 나누어 살펴보고, 응답 전체의 조합을 통해 나의 투자 관점을 확인하도록 설계했습니다.',
        '테스트를 만드는 과정에서는 건물 투자 판단과 관련된 여러 자료를 수집하고 분석해, 실제 의사결정에서 차이가 생길 수 있는 요소들을 중심으로 문항 구조를 구성했습니다.',
      ],
      aria: '자가진단을 통해 확인할 수 있는 네 가지 관점',
      items: [
        ['01','투자 판단 성향','WHAT YOU PRIORITIZE','건물을 볼 때 무엇을 먼저 보고, 어떤 기준에 더 무게를 두는지 확인합니다.'],
        ['02','위험 대응 방식','HOW YOU FACE RISK','불확실성과 손실 가능성을 어느 정도 받아들이며 판단하는지 살펴봅니다.'],
        ['03','자산 판단 관점','HOW YOU VIEW ASSETS','수익, 자금, 관리 부담 등 자산의 조건을 어떤 관점에서 바라보는지 확인합니다.'],
        ['04','투자 행동 특징','HOW YOU DECIDE & ACT','정보를 확인하고 선택하며 관리하는 과정에서 나타나는 행동 경향을 살펴봅니다.'],
      ],
      proof: '여러 자료를 수집·분석해 투자 판단의 차이를 만드는 요소를 구조화한 자가진단입니다.',
    },
    checks: {
      eyebrow: '01 / WHAT WE CHECK',
      title: '무엇을 테스트하나요?',
      lead: '건물 투자 판단에서 사람마다 달라질 수 있는 여섯 가지 기준을 살펴봅니다. 하나의 성격을 단정하기보다 서로 연결된 판단 습관을 함께 확인합니다.',
      items: [
        ['purpose','계획과 목적','PLAN & PURPOSE','왜 매입하려는지, 목표와 기준이 얼마나 선명한지 살펴봅니다.'],
        ['tendency','리스크 태도','RISK TOLERANCE','가격 변동과 손실 가능성을 받아들이는 방식을 확인합니다.'],
        ['resource','현금흐름','CASH FLOW','보유 중 수익과 자금 여유를 얼마나 중요하게 보는지 살펴봅니다.'],
        ['position','레버리지','LEVERAGE','대출과 자기자본을 활용하는 태도와 부담 수준을 확인합니다.'],
        ['readiness','관리 참여','MANAGEMENT','직접 관리와 운영에 투입할 수 있는 시간과 성향을 봅니다.'],
        ['criteria','정보 검증','VERIFICATION','추천이나 분위기보다 스스로 확인하고 중단 기준을 세우는 방식을 봅니다.'],
      ],
    },
    why: {
      eyebrow: '02 / WHY IT MATTERS',
      titleLines: ['좋은 건물과', '나에게 맞는 건물은 다릅니다.'],
      paragraphs: [
        '같은 가격과 같은 예상수익을 보더라도 투자자는 서로 다른 결정을 내립니다. 공실을 버틸 수 있는 기간, 대출을 감당하는 방식, 직접 관리에 쓸 수 있는 시간, 손실이 커질 때 멈추는 기준이 다르기 때문입니다.',
        '자가진단은 특정 건물을 추천하기 전에 내가 어떤 조건에서 판단이 편해지고, 어떤 조건에서는 판단이 흔들릴 수 있는지 먼저 확인하도록 돕습니다.',
      ],
    },
    method: {
      eyebrow: '03 / METHOD',
      titleLines: ['자가진단은', '취향 테스트가 아닙니다.'],
      paragraphs: [
        '건물 투자에서 판단이 달라지는 지점을 찾기 위해 투자자의 의사결정 방식, 위험을 받아들이는 정도, 현금흐름과 자금 운용, 레버리지에 대한 태도, 관리 참여 성향, 정보 확인 방식을 중심으로 자료를 수집하고 구조화했습니다.',
        '단순히 무엇을 좋아하는지를 묻는 것이 아니라, 실제 건물 투자 과정에서 어떤 기준으로 판단하고 어떤 상황에서 선택이 달라질 수 있는지를 문항에 반영하는 데 중점을 두었습니다.',
      ],
      statement: '한 가지 응답보다, 전체 판단의 조합을 봅니다.',
      aria: '자가진단 제작 시 중점적으로 살펴본 여섯 가지 영역',
      items: [
        ['01 / DECISION','의사결정','투자 판단을 내리는 기준과 선택 방식'],
        ['02 / RISK','위험 대응','불확실성과 손실 가능성을 받아들이는 태도'],
        ['03 / CASH FLOW','현금흐름','수익과 자금 여유를 바라보는 관점'],
        ['04 / LEVERAGE','레버리지','대출과 자기자본 활용에 대한 태도'],
        ['05 / MANAGEMENT','관리 참여','직접 관리와 운영에 참여하려는 성향'],
        ['06 / INFORMATION','정보 검증','자료를 탐색하고 스스로 확인하는 방식'],
      ],
    },
    flow: {
      eyebrow: '04 / HOW IT WORKS',
      titleLines: ['진단은', '이렇게 진행됩니다.'],
      lead: '테스트 목적과 기준을 확인한 뒤, 실제 진단에서는 기본 성향부터 자산 적합성과 투자 행동을 거쳐 마지막에 종합 결과를 확인합니다.',
      aria: '자가진단 진행 과정',
      items: [['01','BASIC','기본 성향'],['02','ASSET','자산 적합성'],['03','BEHAVIOR','투자 행동'],['04','RESULT','종합 결과']],
    },
    assetFit: {
      eyebrow: '05 / ASSET FIT',
      titleLines: ['투자 성향과', '자산 적합성은 다릅니다.'],
      paragraphs: [
        '위험을 적극적으로 받아들이는 성향이라고 해서 언제나 규모가 큰 자산이 맞는 것은 아닙니다. 실제 적합성은 가용자본, 현금흐름 필요성, 공실 대응력, 관리 부담, 유동성, 운영 참여도처럼 현실적인 조건과 함께 봐야 합니다.',
        '그래서 이 진단은 성향을 한 번 분류하고 끝내지 않고, 다음 단계에서 자산과 행동 조건을 다시 연결해 확인합니다.',
      ],
    },
    howToRead: {
      eyebrow: '06 / HOW TO READ',
      titleLines: ['결과는 정답이 아니라', '검토의 기준입니다.'],
      paragraphs: ['자가진단 결과는 투자성과를 예측하거나 특정 물건의 매수를 대신하지 않습니다. 나의 판단 성향과 취약한 조건을 확인한 뒤, 실제 물건에서는 지역, 임대료, 공실, 금융조건, 유지보수와 관리 여건을 별도로 검토해야 합니다.'],
      note: '결과는 “무엇을 사라”보다 “무엇부터 확인할 것인가”를 정리하는 데 사용하는 것을 목표로 합니다.',
    },
    bottomCta: {
      eyebrow: 'READY TO CHECK?',
      titleLines: ['건물을 보기 전에,', '내 기준부터 확인해보세요.'],
      facts: '42문항 · 3단계 · 약 5분',
    },
  },
};


const EN = {
  common: {
    start: 'Start the self-check',
    koOnly: 'Korean version available for now',
    previous: 'Back',
    next: 'Next',
    restart: 'Start over',
    restartConfirm: 'Delete all of your answers and start over?',
    analysisComplete: 'Complete analysis',
    resultView: 'View results',
    assetResultView: 'View asset results',
    currentAnalysis: 'Current analysis',
  },
  stages: {
    1: { title: 'STEP 1 · Core investment profile', completeNext: 'Now checking asset fit.' },
    2: { title: 'STEP 2 · Asset fit', completeNext: 'Moving to investment behavior.' },
    3: { title: 'STEP 3 · Investment behavior', completeNext: 'Preparing your final profile.' },
    complete: 'Analysis complete.',
  },
  journey: {
    aria: 'Overall self-check progress',
    items: [
      { n:'01', key:'BASIC', label:'Core profile' },
      { n:'02', key:'ASSET', label:'Asset fit' },
      { n:'03', key:'BEHAVIOR', label:'Behavior' },
      { n:'FINAL', key:'RESULT', label:'Final profile' },
    ],
  },
  intro: {
    eyebrow: 'SELF CHECK',
    title: 'Property Investment Self-Check',
    lead: 'Three stages to explore your investment profile and asset fit',
    cards: [
      ['01','Core investment profile','Explore the standards and habits behind how you evaluate a building.'],
      ['02','Asset fit','Compare asset types against your capital and management preferences.'],
      ['03','Investment behavior','Connect your tendencies to real contract and risk situations.'],
    ],
  },
  scale: { eyebrow: 'SCALE CHECK' },
  question: {
    scaleLabel: 'SCALE ANALYSIS',
    sceneLabel: 'LIVE SCENARIO',
    scaleTitle: 'Answer quickly and move to the next judgment.',
    scenePrefix: 'SCENE',
  },
  landing: {
    hero: {
      eyebrow: 'FIX BUILDING / SELF CHECK',
      titleLines: ['Before you evaluate a property,', 'evaluate yourself'],
      subtitle: 'What kind of property investor are you?',
      description: [
        'Before choosing a building, first check the standards behind your decisions.',
        'See how you approach investment goals, risk, cash flow and borrowing,',
        'then examine your management style and information-verification habits step by step.',
      ],
      promptLines: ['Curious about your investment perspective?', 'Start the self-check below.'],
      factsAria: 'Self-check overview',
      noteLines: ['This self-check is designed to support reflection,', 'not to replace an investment decision.'],
    },
    combo: {
      aria: 'More than 2,240 analysis combinations',
      finalLine: '“2,240+ combinations for a sharper property-investment self-check”',
    },
    discover: {
      eyebrow: 'WHAT YOU CAN DISCOVER.',
      titleLines: ['What can you learn', 'from this self-check?'],
      paragraphs: [
        'This self-check does more than assign you a single investor type. It looks at several factors that can shape property-investment decisions and interprets the overall pattern across your responses.',
        'To design the questions, we collected and reviewed a range of materials related to property-investment decision-making, then structured the assessment around factors that can meaningfully change real-world choices.',
      ],
      aria: 'Four perspectives you can explore through the self-check',
      items: [
        ['01','Decision priorities','WHAT YOU PRIORITIZE','See what you look at first when evaluating a property and which criteria carry the most weight.'],
        ['02','Risk response','HOW YOU FACE RISK','Explore how much uncertainty and potential loss you are willing to accept when making a decision.'],
        ['03','Asset perspective','HOW YOU VIEW ASSETS','See how you weigh income, capital requirements, management burden and other asset conditions.'],
        ['04','Investment behavior','HOW YOU DECIDE & ACT','Identify behavioral tendencies in how you verify information, choose, and manage an investment.'],
      ],
      proof: 'A structured self-check built by collecting and analyzing factors that can lead investors to make different decisions.',
    },
    checks: {
      eyebrow: '01 / WHAT WE CHECK',
      title: 'What does the self-check examine?',
      lead: 'We look at six areas that can vary from one property investor to another. Rather than defining you with a single trait, the self-check considers how several decision habits interact.',
      items: [
        ['purpose','Plan & purpose','PLAN & PURPOSE','How clearly you know why you want to buy and how well defined your goals and criteria are.'],
        ['tendency','Risk tolerance','RISK TOLERANCE','How you respond to price volatility, uncertainty and the possibility of loss.'],
        ['resource','Cash flow','CASH FLOW','How much you value ongoing income and financial flexibility while holding an asset.'],
        ['position','Leverage','LEVERAGE','How you approach debt, equity and the level of financing burden you are willing to carry.'],
        ['readiness','Management involvement','MANAGEMENT','How much time and attention you are prepared to devote to hands-on management and operations.'],
        ['criteria','Information verification','VERIFICATION','How strongly you rely on your own checks and stop criteria rather than recommendations or market mood.'],
      ],
    },
    why: {
      eyebrow: '02 / WHY IT MATTERS',
      titleLines: ['A good property and', 'the right property for you are not the same.'],
      paragraphs: [
        'Two investors can see the same price and projected return and still make different choices. Their vacancy tolerance, approach to debt, available management time and thresholds for stopping a loss may all be different.',
        'Before suggesting any specific property, this self-check helps you identify the conditions in which your judgment tends to feel comfortable—and the conditions in which it may become less reliable.',
      ],
    },
    method: {
      eyebrow: '03 / METHOD',
      titleLines: ['This is not', 'a preference quiz.'],
      paragraphs: [
        'To identify where property-investment decisions can diverge, we organized the assessment around decision style, risk acceptance, cash flow and capital use, leverage, management involvement and information verification.',
        'The questions are not designed simply to ask what you like. They focus on the standards you use in real investment situations and on the conditions that can change your choices.',
      ],
      statement: 'We look at the pattern across your decisions, not a single answer.',
      aria: 'Six areas emphasized in the design of the self-check',
      items: [
        ['01 / DECISION','Decision-making','The standards and process you use to make an investment decision'],
        ['02 / RISK','Risk response','How you accept uncertainty and the possibility of loss'],
        ['03 / CASH FLOW','Cash flow','How you view income and financial flexibility'],
        ['04 / LEVERAGE','Leverage','How you approach debt and the use of your own capital'],
        ['05 / MANAGEMENT','Management','How willing you are to participate directly in management and operations'],
        ['06 / INFORMATION','Verification','How you search for information and verify it independently'],
      ],
    },
    flow: {
      eyebrow: '04 / HOW IT WORKS',
      titleLines: ['How the', 'self-check works'],
      lead: 'After reviewing the purpose and framework, the assessment moves from your basic investment tendencies to asset fit and investment behavior, then combines them in a final result.',
      aria: 'Self-check process',
      items: [['01','BASIC','Core tendencies'],['02','ASSET','Asset fit'],['03','BEHAVIOR','Investment behavior'],['04','RESULT','Final profile']],
    },
    assetFit: {
      eyebrow: '05 / ASSET FIT',
      titleLines: ['Investor profile and', 'asset fit are different.'],
      paragraphs: [
        'Being comfortable with risk does not automatically mean a larger asset is right for you. Real-world fit also depends on available capital, cash-flow needs, vacancy resilience, management burden, liquidity and how involved you want to be in operations.',
        'That is why the self-check does not stop after identifying a tendency. The next stages connect that profile with asset conditions and behavioral patterns.',
      ],
    },
    howToRead: {
      eyebrow: '06 / HOW TO READ',
      titleLines: ['The result is a framework,', 'not an answer.'],
      paragraphs: ['The self-check does not predict investment performance or replace a decision on a specific property. After identifying your tendencies and vulnerable conditions, you still need to review location, rent, vacancy, financing terms, maintenance and management conditions for the actual asset.'],
      note: 'Use the result less as “what should I buy?” and more as “what should I check first?”',
    },
    bottomCta: {
      eyebrow: 'READY TO CHECK?',
      titleLines: ['Before you evaluate a property,', 'check your own criteria first.'],
      facts: '42 questions · 3 stages · about 5 minutes',
    },
  },
};

const JA = {
  common: {
    start: 'セルフチェックを始める',
    koOnly: '現在は韓国語版のみ利用できます',
    previous: '戻る',
    next: '次へ',
    restart: '最初からやり直す',
    restartConfirm: 'これまでの回答をすべて削除して最初からやり直しますか？',
    analysisComplete: '分析完了',
    resultView: '結果を見る',
    assetResultView: '資産結果を見る',
    currentAnalysis: '現在の分析',
  },
  stages: {
    1: { title: 'STEP 1 · 基本投資タイプ', completeNext: '資産適合性を確認します。' },
    2: { title: 'STEP 2 · 資産適合性', completeNext: '投資行動の分析へ進みます。' },
    3: { title: 'STEP 3 · 投資行動', completeNext: '最終総合結果を確認します。' },
    complete: '分析が完了しました。',
  },
  journey: {
    aria: 'セルフチェック全体の進行状況',
    items: [
      { n:'01', key:'BASIC', label:'基本タイプ' },
      { n:'02', key:'ASSET', label:'資産適合性' },
      { n:'03', key:'BEHAVIOR', label:'投資行動' },
      { n:'FINAL', key:'RESULT', label:'総合結果' },
    ],
  },
  intro: {
    eyebrow: 'SELF CHECK',
    title: '不動産投資セルフチェック',
    lead: '3ステップで確認する投資傾向と資産適合性',
    cards: [
      ['01','基本投資タイプ','建物を見る基準と判断習慣を確認します。'],
      ['02','資産適合性','資金や管理スタイルに合う資産タイプを比較します。'],
      ['03','投資行動分析','実際の契約やリスク場面で表れやすい行動パターンを確認します。'],
    ],
  },
  scale: { eyebrow: 'SCALE CHECK' },
  question: {
    scaleLabel: 'SCALE ANALYSIS',
    sceneLabel: 'LIVE SCENARIO',
    scaleTitle: '直感的に答えて、次の判断へ進みます。',
    scenePrefix: 'SCENE',
  },
  landing: {
    hero: {
      eyebrow: 'FIX BUILDING / SELF CHECK',
      titleLines: ['物件を診断する前に、', 'まず自分を診断する'],
      subtitle: '私はどんな不動産投資家だろう？',
      description: [
        '物件を選ぶ前に、まず自分の判断基準を確認します。',
        '投資目的、リスクの受け止め方、キャッシュフローや借入への考え方を整理し、',
        '管理への関わり方や情報を検証する習慣まで段階的に見ていきます。',
      ],
      promptLines: ['自分の投資の見方を知りたい方は、', '下からセルフチェックを始めてください。'],
      factsAria: 'セルフチェック概要',
      noteLines: ['この結果は投資判断そのものに代わるものではなく、', '自分の判断基準を見直すためのセルフチェックです。'],
    },
    combo: {
      aria: '2,240通り以上の分析組み合わせ',
      finalLine: '「2,240通り以上の組み合わせで読み解く不動産投資セルフチェック」',
    },
    discover: {
      eyebrow: 'WHAT YOU CAN DISCOVER.',
      titleLines: ['このセルフチェックで', '何がわかるのか？'],
      paragraphs: [
        'このセルフチェックは、単純にひとつの投資家タイプを当てはめるものではありません。不動産投資の判断に影響する複数の要素を分けて確認し、回答全体の組み合わせから自分の投資視点を読み解くように設計しています。',
        '設計にあたっては、不動産投資の意思決定に関するさまざまな資料を収集・分析し、実際の判断に差が生まれやすい要素を中心に質問構造を組み立てました。',
      ],
      aria: 'セルフチェックで確認できる4つの視点',
      items: [
        ['01','投資判断の優先順位','WHAT YOU PRIORITIZE','物件を見るときに何を最初に確認し、どの基準をより重視するのかを見ます。'],
        ['02','リスクへの対応','HOW YOU FACE RISK','不確実性や損失の可能性をどの程度受け入れて判断するのかを確認します。'],
        ['03','資産を見る視点','HOW YOU VIEW ASSETS','収益、必要資金、管理負担などの条件をどのような視点で捉えるのかを見ます。'],
        ['04','投資行動の特徴','HOW YOU DECIDE & ACT','情報確認、選択、管理の過程で現れやすい行動傾向を確認します。'],
      ],
      proof: '投資判断の違いを生む要素を複数の資料から収集・分析し、構造化したセルフチェックです。',
    },
    checks: {
      eyebrow: '01 / WHAT WE CHECK',
      title: '何をチェックするのか？',
      lead: '不動産投資の判断で人によって差が出やすい6つの領域を確認します。ひとつの性格で決めつけるのではなく、互いに関連する判断習慣をまとめて見ていきます。',
      items: [
        ['purpose','計画と目的','PLAN & PURPOSE','なぜ購入したいのか、目標や判断基準がどの程度明確かを確認します。'],
        ['tendency','リスク許容度','RISK TOLERANCE','価格変動や損失の可能性をどのように受け止めるのかを見ます。'],
        ['resource','キャッシュフロー','CASH FLOW','保有中の収益と資金余力をどの程度重視するのかを確認します。'],
        ['position','レバレッジ','LEVERAGE','借入と自己資金の使い方、許容できる負担水準を見ます。'],
        ['readiness','管理への関与','MANAGEMENT','自ら管理・運営に使える時間と関与意欲を確認します。'],
        ['criteria','情報の検証','VERIFICATION','周囲の勧めや雰囲気より、自分で確認し撤退基準を持つ傾向を見ます。'],
      ],
    },
    why: {
      eyebrow: '02 / WHY IT MATTERS',
      titleLines: ['良い物件と', '自分に合う物件は同じではありません。'],
      paragraphs: [
        '同じ価格と想定利回りを見ても、投資家によって判断は変わります。空室に耐えられる期間、借入への向き合い方、管理に使える時間、損失が大きくなったときの撤退基準がそれぞれ異なるからです。',
        'このセルフチェックは、特定の物件を勧める前に、自分がどんな条件では判断しやすく、どんな条件では判断が揺れやすいのかを確認するためのものです。',
      ],
    },
    method: {
      eyebrow: '03 / METHOD',
      titleLines: ['このセルフチェックは', '好みを当てるテストではありません。'],
      paragraphs: [
        '不動産投資で判断が分かれるポイントを捉えるため、意思決定の仕方、リスクの受け止め方、キャッシュフローと資金運用、レバレッジ、管理への関与、情報確認の方法を中心に整理しました。',
        '単に何が好きかを尋ねるのではなく、実際の投資場面でどんな基準を使い、どんな状況で選択が変わるのかを質問に反映することを重視しています。',
      ],
      statement: 'ひとつの回答ではなく、判断全体の組み合わせを見ます。',
      aria: 'セルフチェック設計で重視した6つの領域',
      items: [
        ['01 / DECISION','意思決定','投資判断を下す基準と選択のプロセス'],
        ['02 / RISK','リスク対応','不確実性と損失可能性の受け止め方'],
        ['03 / CASH FLOW','キャッシュフロー','収益と資金余力に対する考え方'],
        ['04 / LEVERAGE','レバレッジ','借入と自己資金の活用に対する姿勢'],
        ['05 / MANAGEMENT','管理への関与','管理・運営に自ら関わろうとする度合い'],
        ['06 / INFORMATION','情報検証','情報を探し、自分で確かめる方法'],
      ],
    },
    flow: {
      eyebrow: '04 / HOW IT WORKS',
      titleLines: ['セルフチェックは', 'この順序で進みます。'],
      lead: '目的と基準を確認したあと、基本的な投資傾向、資産適合性、投資行動へと進み、最後にそれらを組み合わせた総合結果を確認します。',
      aria: 'セルフチェックの進行プロセス',
      items: [['01','BASIC','基本傾向'],['02','ASSET','資産適合性'],['03','BEHAVIOR','投資行動'],['04','RESULT','総合結果']],
    },
    assetFit: {
      eyebrow: '05 / ASSET FIT',
      titleLines: ['投資傾向と', '資産の適合性は別ものです。'],
      paragraphs: [
        'リスクを積極的に取れるからといって、必ずしも規模の大きい物件が合うとは限りません。実際の適合性は、使える自己資金、必要なキャッシュフロー、空室への耐性、管理負担、流動性、運営への関与度といった現実的な条件も含めて判断する必要があります。',
        'そのため、この診断は投資傾向を一度分類して終わるのではなく、次の段階で資産条件と行動傾向をもう一度つなげて確認します。',
      ],
    },
    howToRead: {
      eyebrow: '06 / HOW TO READ',
      titleLines: ['結果は正解ではなく、', '検討のための基準です。'],
      paragraphs: ['セルフチェックの結果は、投資成果を予測したり特定の物件購入を代わりに判断したりするものではありません。自分の判断傾向や弱くなりやすい条件を確認したうえで、実際の物件では立地、賃料、空室、融資条件、維持管理、運営条件を別途確認する必要があります。'],
      note: '結果は「何を買うべきか」よりも、「何から確認するべきか」を整理するために使うことを目的としています。',
    },
    bottomCta: {
      eyebrow: 'READY TO CHECK?',
      titleLines: ['物件を見る前に、', 'まず自分の基準を確認してみましょう。'],
      facts: '42問 · 3ステップ · 約5分',
    },
  },
};


// Locale containers are separated now so EN/JA copy can be filled without touching components.
export const SELF_CHECK_COPY = {
  ko: KO,
  en: EN,
  ja: JA,
};

function mergeDeep(base, override) {
  if (!override || typeof override !== 'object' || Array.isArray(override)) return override ?? base;
  const out = { ...base };
  Object.entries(override).forEach(([key, value]) => {
    out[key] = value && typeof value === 'object' && !Array.isArray(value)
      ? mergeDeep(base?.[key] || {}, value)
      : value;
  });
  return out;
}

export function getSelfCheckCopy(locale='ko') {
  return locale === 'ko' ? KO : mergeDeep(KO, SELF_CHECK_COPY[locale] || {});
}
