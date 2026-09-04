// Generated from EXIT V010 KO current + V016 EN/JA code-ready localization.
export const EXIT_MAIN_BY_LOCALE={
  "ko": {
    "title": "보유의 끝이 아니라, 자본 회수의 시작",
    "lead": "건물의 EXIT는 매각가격만 정하는 과정이 아닙니다. 왜 매각을 검토하는지부터 건물을 어떻게 정리하고 가격을 설명할지, 실제 얼마를 회수하고 무엇까지 인계해야 하는지 순서대로 확인합니다.",
    "statement": {
      "title": "매각은 하나의 결정이 아니라 여러 판단의 결과입니다",
      "body": "현재 가격보다 보유 이유·매각 준비상태·가격 근거·매수자 확인·실제 회수금액·종료 인계까지 함께 봅니다.",
      "groups": [
        [
          "01",
          "판단",
          "왜 지금 매각을 검토하는지 먼저 정리합니다."
        ],
        [
          "02",
          "준비",
          "건물의 상태와 자료를 매수자가 이해할 수 있게 만듭니다."
        ],
        [
          "03",
          "회수",
          "가격이 아니라 실제로 회수하는 자본까지 확인합니다."
        ]
      ]
    },
    "steps": [
      {
        "id": "decision",
        "num": "01",
        "code": "SELL OR HOLD",
        "name": "매각 판단",
        "prompt": "지금은 보유할 때인가, 매각을 검토할 때인가",
        "desc": "현재 가격보다 앞으로 보유했을 때의 수익·비용·금융조건·자본 목적을 함께 비교합니다.",
        "status": "open"
      },
      {
        "id": "readiness",
        "num": "02",
        "code": "VALUE READY",
        "name": "가치정리",
        "prompt": "매각 전에 이 건물은 설명할 준비가 되어 있는가",
        "desc": "보유 중 쌓은 관리기록을 다시 관리하는 대신, 현재 상태를 설명하는 매각자료 PACK으로 변환합니다.",
        "status": "open"
      },
      {
        "id": "pricing",
        "num": "03",
        "code": "PRICING",
        "name": "가격전략",
        "prompt": "목표가격을 무엇으로 설명할 것인가",
        "desc": "건물 분석에서 확보한 근거를 시장제시가격·목표가격·최소수용가격·협상조건으로 바꿉니다.",
        "status": "open"
      },
      {
        "id": "buyer-readiness",
        "num": "04",
        "code": "BUYER READY",
        "name": "매수자 준비",
        "prompt": "매수자는 무엇을 확인하고 어디에서 의문을 가지는가",
        "desc": "가치정리에서 만든 PACK을 질문→첫 답변자료→근거→추가확인→담당자 구조로 연결합니다.",
        "status": "open"
      },
      {
        "id": "net-proceeds",
        "num": "05",
        "code": "NET PROCEEDS",
        "name": "순회수액",
        "prompt": "매각가격에서 실제로 얼마가 남는가",
        "desc": "실제 계약가격에서 차감항목을 반영하고 CONFIRMED·ESTIMATED·TO CHECK 상태로 회수자본을 구분합니다.",
        "status": "open"
      },
      {
        "id": "closing",
        "num": "06",
        "code": "CLOSING",
        "name": "종료·인계",
        "prompt": "계약 이후 무엇까지 끝내야 EXIT가 완료되는가",
        "desc": "법적 클로징 이후에도 남아 있는 열쇠·계정·업체관계·자동이체·개인정보·잔여업무를 닫습니다.",
        "status": "open"
      }
    ],
    "connected": [
      [
        "01",
        "임대료 기록 → 수익 근거",
        "관리 중 쌓은 임대료 기록은 현재 수익을 설명하는 기초가 됩니다.",
        "기록이 있어야 숫자를 설명할 수 있습니다."
      ],
      [
        "02",
        "공실 기록 → 원인 설명",
        "공실 기간과 대응 기록은 단순 공실률보다 왜 비었는지를 설명하는 자료가 됩니다.",
        "문제보다 설명되지 않는 문제가 더 큰 불확실성을 만듭니다."
      ],
      [
        "03",
        "비용·시설 기록 → 향후 부담",
        "수선·점검·비용 기록은 매수자가 앞으로 부담할 비용을 이해하는 데 연결됩니다.",
        "보유 중 쌓은 관리기록이 매각 단계의 설명자료가 됩니다."
      ]
    ],
    "timeline": [
      [
        "01",
        "판단",
        "보유와 매각을 비교합니다."
      ],
      [
        "02",
        "정리",
        "자료와 상태를 설명 가능한 수준으로 맞춥니다."
      ],
      [
        "03",
        "가격",
        "분석근거를 제시가격·목표·하한·조건으로 바꿉니다."
      ],
      [
        "04",
        "실사",
        "질문과 자료·담당자·확인상태를 연결합니다."
      ],
      [
        "05",
        "회수",
        "실제 남는 자본을 확인합니다."
      ],
      [
        "06",
        "인계",
        "운영권한·업체관계·잔여업무까지 닫습니다."
      ]
    ],
    "experts": [
      [
        "시장가격",
        "공인중개사·감정평가 관련 전문가"
      ],
      [
        "세금",
        "세무 전문가"
      ],
      [
        "권리·법률",
        "법률 전문가"
      ],
      [
        "대출·상환",
        "금융기관"
      ],
      [
        "시설 상태",
        "해당 분야 기술 전문가"
      ]
    ],
    "finalChecks": [
      [
        "왜 지금 매각하는가",
        "현재 가격 하나가 아니라 보유와 회수의 이유를 설명할 수 있는가."
      ],
      [
        "무엇으로 가격을 협상하는가",
        "분석근거를 공개가격·목표가격·최소수용가격·가격 외 조건으로 나눌 수 있는가."
      ],
      [
        "실제로 무엇이 남는가",
        "매각대금이 아니라 대출·세금·비용·정산 이후의 회수자본을 알고 있는가."
      ]
    ]
  },
  "en": {
    "title": "Not the end of ownership, but the start of capital recovery",
    "lead": "A property exit is not just about setting a sale price. Work through why you are considering a sale, how to organize the property and explain its price, how much capital you can actually recover, and what must be handed over before the exit is complete.",
    "statement": {
      "title": "A successful exit is built on a series of decisions.",
      "body": "Look beyond today's price to the reason for holding, sale readiness, pricing evidence, buyer verification, net proceeds, and final handover.",
      "groups": [
        [
          "01",
          "Decision",
          "First clarify why a sale is being considered now."
        ],
        [
          "02",
          "Preparation",
          "Make the property's condition and records easy for a buyer to understand."
        ],
        [
          "03",
          "Recovery",
          "Check the capital you actually recover, not just the sale price."
        ]
      ]
    },
    "steps": [
      {
        "id": "decision",
        "num": "01",
        "code": "SELL OR HOLD",
        "name": "Sell or Hold",
        "prompt": "Is it time to keep holding, or to consider selling?",
        "desc": "Compare future income, costs, financing, and capital goals instead of focusing only on today's price.",
        "status": "open"
      },
      {
        "id": "readiness",
        "num": "02",
        "code": "VALUE READY",
        "name": "Sale Preparation",
        "prompt": "Is this property ready to be explained before it is sold?",
        "desc": "Turn operating records accumulated during ownership into a sale information pack that explains the property's current condition.",
        "status": "open"
      },
      {
        "id": "pricing",
        "num": "03",
        "code": "PRICING",
        "name": "Pricing Strategy",
        "prompt": "What evidence will support the target price?",
        "desc": "Turn analysis evidence into an asking price, target price, minimum acceptable price, and negotiation terms.",
        "status": "open"
      },
      {
        "id": "buyer-readiness",
        "num": "04",
        "code": "BUYER READY",
        "name": "Buyer Due Diligence",
        "prompt": "What will the buyer verify, and where are questions likely to arise?",
        "desc": "Connect the sale pack to a question → first-response material → evidence → further verification → responsible party flow.",
        "status": "open"
      },
      {
        "id": "net-proceeds",
        "num": "05",
        "code": "NET PROCEEDS",
        "name": "Net Proceeds",
        "prompt": "How much is actually left from the sale price?",
        "desc": "Apply deductions to the actual contract price and classify recovered capital as CONFIRMED, ESTIMATED, or TO CHECK.",
        "status": "open"
      },
      {
        "id": "closing",
        "num": "06",
        "code": "CLOSING",
        "name": "Closing & Handover",
        "prompt": "What still needs to be finished after the contract for the exit to be complete?",
        "desc": "Close out keys, accounts, vendor relationships, automatic payments, personal data, and remaining tasks after legal closing.",
        "status": "open"
      }
    ],
    "connected": [
      [
        "01",
        "Rent records → income evidence",
        "Rent records built during management become the foundation for explaining current income.",
        "Numbers can be explained only when the records exist."
      ],
      [
        "02",
        "Vacancy records → cause explanation",
        "Vacancy periods and response records explain why space was vacant more clearly than a vacancy rate alone.",
        "An unexplained issue creates more uncertainty than the issue itself."
      ],
      [
        "03",
        "Cost and facility records → future burden",
        "Repair, inspection, and cost records help a buyer understand expenses they may face after acquisition.",
        "Operating records built during ownership become explanatory material at the sale stage."
      ]
    ],
    "timeline": [
      [
        "01",
        "Decision",
        "Compare holding and selling."
      ],
      [
        "02",
        "Organize",
        "Bring records and current condition to an explainable standard."
      ],
      [
        "03",
        "Price",
        "Turn analysis evidence into asking price, target, floor, and terms."
      ],
      [
        "04",
        "Due Diligence",
        "Connect questions with evidence, owners, and verification status."
      ],
      [
        "05",
        "Recovery",
        "Confirm the capital that will actually remain."
      ],
      [
        "06",
        "Handover",
        "Close operating access, vendor relationships, and remaining tasks."
      ]
    ],
    "experts": [
      [
        "Market Price",
        "Licensed real estate agent / valuation specialist"
      ],
      [
        "Tax",
        "Tax professional"
      ],
      [
        "Rights & Legal",
        "Legal professional"
      ],
      [
        "Loan & Repayment",
        "Financial institution"
      ],
      [
        "Facility Condition",
        "Relevant technical specialist"
      ]
    ],
    "finalChecks": [
      [
        "Why sell now?",
        "Can you explain the reason for holding or recovering capital, rather than relying on today's price alone?"
      ],
      [
        "What supports your negotiation position?",
        "Can you separate the evidence into asking price, target price, minimum acceptable price, and non-price terms?"
      ],
      [
        "What actually remains?",
        "Do you know the recoverable capital after loans, taxes, costs, and final settlements, rather than just the gross sale proceeds?"
      ]
    ]
  },
  "ja": {
    "title": "保有の終わりではなく、資本回収の始まり",
    "lead": "建物のEXITは、売却価格を決めるだけのプロセスではありません。なぜ売却を検討するのか、物件をどう整理し価格をどう説明するのか、実際にいくら回収できるのか、そして何を引き継げば完了なのかを順番に確認します。",
    "statement": {
      "title": "EXITは一つの決断ではなく、複数の判断の積み重ねです",
      "body": "現在の価格だけでなく、保有理由・売却準備・価格根拠・買主確認・実際の回収額・終了後の引継ぎまで一緒に見ます。",
      "groups": [
        [
          "01",
          "判断",
          "まず、なぜ今売却を検討するのかを整理します。"
        ],
        [
          "02",
          "準備",
          "物件の状態と資料を、買主が理解できる形に整えます。"
        ],
        [
          "03",
          "回収",
          "価格だけでなく、実際に回収できる資本まで確認します。"
        ]
      ]
    },
    "steps": [
      {
        "id": "decision",
        "num": "01",
        "code": "SELL OR HOLD",
        "name": "売却判断",
        "prompt": "今は保有を続ける時か、売却を検討する時か",
        "desc": "現在価格だけでなく、今後保有した場合の収益・費用・融資条件・資本目的を比較します。",
        "status": "open"
      },
      {
        "id": "readiness",
        "num": "02",
        "code": "VALUE READY",
        "name": "売却資料の整理",
        "prompt": "売却前に、この物件は説明できる状態になっているか",
        "desc": "保有中に蓄積した管理記録を、現在の状態を説明する売却資料PACKに変換します。",
        "status": "open"
      },
      {
        "id": "pricing",
        "num": "03",
        "code": "PRICING",
        "name": "価格戦略",
        "prompt": "目標価格を何で説明するか",
        "desc": "分析で得た根拠を、売出価格・目標価格・最低受入価格・交渉条件に変えます。",
        "status": "open"
      },
      {
        "id": "buyer-readiness",
        "num": "04",
        "code": "BUYER READY",
        "name": "買主対応",
        "prompt": "買主は何を確認し、どこに疑問を持つか",
        "desc": "売却資料PACKを、質問→最初の回答資料→根拠→追加確認→担当者の流れにつなげます。",
        "status": "open"
      },
      {
        "id": "net-proceeds",
        "num": "05",
        "code": "NET PROCEEDS",
        "name": "手取り額",
        "prompt": "売却価格から実際にいくら残るか",
        "desc": "実際の契約価格から差引項目を反映し、回収資本をCONFIRMED・ESTIMATED・TO CHECKに分けます。",
        "status": "open"
      },
      {
        "id": "closing",
        "num": "06",
        "code": "CLOSING",
        "name": "終了・引継ぎ",
        "prompt": "契約後、何まで終えればEXITが完了するか",
        "desc": "法的なクロージング後も残る鍵・アカウント・取引業者・自動引落し・個人情報・残務を整理します。",
        "status": "open"
      }
    ],
    "connected": [
      [
        "01",
        "賃料記録 → 収益の根拠",
        "管理中に蓄積した賃料記録は、現在の収益を説明する基礎になります。",
        "記録があってこそ、数字を説明できます。"
      ],
      [
        "02",
        "空室記録 → 原因説明",
        "空室期間と対応記録は、単なる空室率よりも、なぜ空いていたのかを説明する資料になります。",
        "問題そのものより、説明できない問題の方が大きな不確実性を生みます。"
      ],
      [
        "03",
        "費用・設備記録 → 将来負担",
        "修繕・点検・費用記録は、買主が今後負担する可能性のある費用を理解する材料になります。",
        "保有中に蓄積した管理記録が、売却段階の説明資料になります。"
      ]
    ],
    "timeline": [
      [
        "01",
        "判断",
        "保有と売却を比較します。"
      ],
      [
        "02",
        "整理",
        "資料と状態を説明できるレベルに整えます。"
      ],
      [
        "03",
        "価格",
        "分析根拠を売出価格・目標・下限・条件に変えます。"
      ],
      [
        "04",
        "実査",
        "質問と資料・担当者・確認状況をつなげます。"
      ],
      [
        "05",
        "回収",
        "実際に残る資本を確認します。"
      ],
      [
        "06",
        "引継ぎ",
        "運用権限・業者関係・残務まで終了させます。"
      ]
    ],
    "experts": [
      [
        "市場価格",
        "不動産仲介会社・不動産鑑定関連専門家"
      ],
      [
        "税務",
        "税務専門家"
      ],
      [
        "権利・法務",
        "法律専門家"
      ],
      [
        "融資・返済",
        "金融機関"
      ],
      [
        "設備状態",
        "該当分野の技術専門家"
      ]
    ],
    "finalChecks": [
      [
        "なぜ今売却するのか",
        "現在価格だけでなく、保有する理由と資本を回収する理由を説明できますか。"
      ],
      [
        "何を根拠に価格交渉するのか",
        "分析根拠を、売出価格・目標価格・最低受入価格・価格以外の条件に分けられますか。"
      ],
      [
        "実際に何が残るのか",
        "売却代金だけでなく、融資・税金・費用・精算後に残る回収資本を把握していますか。"
      ]
    ]
  }
};

export const EXIT_DECISION_BY_LOCALE={
  "ko": {
    "id": "decision",
    "num": "01",
    "code": "SELL OR HOLD",
    "name": "매각 판단",
    "prompt": "지금은 보유할 때인가, 매각을 검토할 때인가",
    "lead": "매각 판단은 시장의 고점을 맞히는 일이 아닙니다. 계속 보유하는 선택과 지금 자본을 회수하는 선택 중 어느 쪽이 현재 목적에 더 적합한지 비교하는 과정입니다.",
    "why": {
      "title": "매각을 고민한다면 가격보다 먼저 이유를 확인합니다",
      "body": [
        "건물 매각을 생각하게 되는 이유는 하나가 아닙니다. 가격 상승, 공실 증가, 임차인 변화처럼 자산 자체의 조건이 달라질 수 있습니다.",
        "대출 부담이나 큰 시설비처럼 금융조건이 달라질 수도 있습니다. 관리 부담이 커지거나 다른 곳에 자금이 필요해지는 등 보유자의 목적도 달라질 수 있습니다.",
        "한 가지 변화만으로 매각 여부를 결정하면 다른 조건을 놓치기 쉽습니다. 그래서 자산의 변화, 금융조건의 변화, 보유자의 목적 변화를 나누어 봅니다.",
        "매각 판단은 건물만 보는 일이 아닙니다. 세 변화가 지금 어떻게 겹쳐 있는지를 확인하는 것에서 시작합니다."
      ],
      "groups": [
        [
          "01",
          "자산이 달라졌는가",
          "임대수익·공실·임차인·시설비·주변 환경 등 건물 자체의 조건 변화를 봅니다."
        ],
        [
          "02",
          "금융조건이 달라졌는가",
          "대출금리·만기·원금상환·재대출 가능성처럼 실제 현금흐름을 바꾸는 조건을 봅니다."
        ],
        [
          "03",
          "보유자의 목적이 달라졌는가",
          "현금수요·관리시간·다른 투자·자산구성 등 현재 보유 목적의 변화를 봅니다."
        ]
      ]
    },
    "core": [
      {
        "title": "임대료가 아니라 실제로 남는 금액부터 봅니다",
        "desc": "건물 분석에서 확인한 실제 순현금흐름을 매각 판단의 입력값으로 가져옵니다. 여기서는 수익률이나 비용 계산법을 다시 설명하지 않고, 그 현금흐름이 현재 보유 이유를 충분히 설명하는지에 집중합니다.",
        "key": "첫 번째 질문은 단순합니다. “이 건물은 지금 실제로 얼마를 남기고 있는가?”"
      },
      {
        "title": "현재 수익이 앞으로도 유지될 수 있는지 봅니다",
        "desc": "현재 임대수익이 안정적이라고 해서 앞으로도 같은 상태가 유지된다는 보장은 없습니다. 주요 임차인의 계약 만료, 임대료 조정 가능성, 반복되는 공실, 임차인 교체, 주변 신규 공급, 상권 변화, 특정 임차인 의존도 같은 요소는 앞으로의 현금흐름을 바꿀 수 있습니다.",
        "key": "미래를 정확히 맞히는 것이 아니라 앞으로 1~3년 동안 현재 수익을 흔들 수 있는 변수를 확인합니다."
      },
      {
        "title": "앞으로 들어갈 큰 비용을 확인합니다",
        "desc": "보유 중 관리에서 확인한 주요 시설 이력과 향후 CAPEX를 보유 판단의 입력값으로 가져옵니다. 시설 점검·관리방법을 다시 설명하지 않고, 가까운 시기의 큰 자본투입이 보유 이유를 어떻게 바꾸는지만 봅니다.",
        "key": "여기서는 시설 관리법이 아니라 앞으로 예정된 비용이 보유 판단에 미치는 영향만 봅니다."
      },
      {
        "title": "건물이 그대로여도 금융조건이 바뀌면 결과는 달라집니다",
        "desc": "현재 대출잔액, 대출 만기, 고정·변동금리 여부, 앞으로의 원금상환 부담, 재대출 가능성, 금리 변화 시 현금흐름, 중도상환 조건을 확인합니다. 임대수익은 그대로인데 금융비용이 커진다면 보유자가 실제로 가져가는 현금은 줄어듭니다.",
        "key": "매각 판단에서는 건물뿐 아니라 어떤 금융구조로 보유하고 있는지도 함께 봅니다."
      },
      {
        "title": "건물에 묶여 있는 자본도 비교합니다",
        "desc": "건물을 계속 보유하면 임대수익과 향후 가치상승 가능성을 얻을 수 있지만, 동시에 그 건물에 투입된 자기자본은 다른 곳에 사용할 수 없습니다. 다른 부동산, 사업자금, 대출 축소, 현금 확보, 자산분산처럼 매각 후 회수자본을 실제로 어디에 사용할 수 있는지 확인합니다.",
        "key": "다른 투자의 예상수익률을 맞히는 것이 아니라 회수한 자본의 실제 용도가 있는지를 봅니다."
      },
      {
        "title": "건물을 산 이유와 지금 보유하는 이유가 같은지 봅니다",
        "desc": "안정적인 임대수익, 장기 자산보유, 시세차익, 직접 사업장 활용, 자산승계, 자산분산처럼 처음 매입할 당시의 목적이 지금도 유효한지 확인합니다. 처음 예상한 보유기간을 이미 넘겼는지, 앞으로도 직접 관리할 의사가 있는지, 매각 후 자금의 목적이 명확한지도 함께 봅니다.",
        "key": "보유에는 항상 현재의 이유가 있어야 합니다."
      }
    ],
    "method": [
      {
        "title": "매각을 생각하게 된 이유를 분리합니다",
        "paragraphs": [
          "왜 매각을 생각하게 되었는지 먼저 적어봅니다. 관리 피로, 금리 상승, 공실 증가, 가격 상승, 다른 투자계획 같은 이유를 자산요인·금융요인·보유자요인으로 구분합니다.",
          "이렇게 분리하면 하나의 감정이나 사건이 전체 판단을 끌고 가는 것을 줄일 수 있습니다."
        ],
        "checks": [
          "매각을 생각한 직접 계기",
          "일시적 변화인지 지속적 변화인지",
          "자산·금융·보유자 중 어느 요인인지",
          "해결 가능한 문제인지 구조적인 문제인지",
          "1~2년 뒤에도 남을 가능성"
        ],
        "caution": "최근 한 번의 공실이나 일시적인 스트레스만으로 결론 내리지 않습니다. “가격이 올랐다”와 “매각해야 한다”를 같은 의미로 사용하지 않습니다.",
        "done": "매각을 생각한 이유를 자산·금융·보유자 요인으로 분리하고, 각각이 일시적인지 지속적인지 설명할 수 있습니다."
      },
      {
        "title": "앞으로 1~3년 보유 시나리오를 만듭니다",
        "paragraphs": [
          "현재 상태가 그대로 유지된다고 가정하지 않습니다. 앞으로 예상되는 임대수입, 공실, 임차인 변화, 금융비용, 시설비용, 큰 수선, 관리부담을 함께 봅니다.",
          "목표는 미래를 정확하게 맞히는 것이 아니라 어떤 변수가 발생할 수 있는지를 확인하는 것입니다."
        ],
        "checks": [
          "주요 임차인 계약 만료일",
          "예상 공실 가능성과 기간",
          "향후 3년 수선·교체 예정",
          "대출 만기와 금리조건",
          "예상 관리시간과 운영부담",
          "현재 순현금흐름이 유지될 조건"
        ],
        "caution": "현재 수익을 그대로 3년 연장해서 계산하지 않습니다. 낙관적인 예상 하나보다 기준 시나리오와 보수적인 시나리오를 함께 봅니다.",
        "done": "앞으로 1~3년 동안 달라질 임대·공실·금융·시설 변수를 기준 시나리오와 보수 시나리오로 나눠 정리했습니다."
      },
      {
        "title": "지금 매각했을 때 달라지는 것을 정리합니다",
        "paragraphs": [
          "정확한 매각가격을 계산하기 전에 매각 자체가 가져오는 변화를 봅니다. 투자자본 회수, 대출 축소 또는 상환, 관리업무 종료, 시설투자 부담 종료, 현금 확보, 다른 투자 또는 사업의 가능성이 달라질 수 있습니다.",
          "매각은 단순히 자산을 없애는 행위가 아니라 자산에 묶여 있던 자본과 책임을 다시 배치하는 선택입니다."
        ],
        "checks": [
          "대략적인 회수 가능 자본",
          "상환해야 할 대출과 금융비용",
          "사라지는 관리·시설 부담",
          "매각 후 남는 유동성",
          "회수자본의 실제 사용 목적",
          "다른 자산·사업으로 이동할 필요성"
        ],
        "caution": "예상 매각가와 실제 손에 남는 금액을 같게 보지 않습니다. 세금·중도상환·거래비용은 추가 확인 항목으로 분리합니다.",
        "done": "매각하면 사라지는 부담과 회수되는 자본을 구분하고, 아직 확정되지 않은 비용은 추가 확인 항목으로 표시했습니다."
      },
      {
        "title": "보유와 매각을 같은 기준으로 비교합니다",
        "paragraphs": [
          "보유에서는 수익만 보고 매각에서는 매각가격만 보면 제대로 비교할 수 없습니다.",
          "보유에서는 앞으로의 현금흐름, 향후 비용, 가치 변화 가능성, 관리 부담, 금융 위험을 보고, 매각에서는 실제 회수 가능한 자본, 거래비용, 부채정리, 관리 종료 효과, 이후 자본 활용을 봅니다."
        ],
        "checks": [
          "보유 후 향후 순현금흐름",
          "예상 CAPEX",
          "금융비용",
          "관리부담",
          "회수자본",
          "거래비용",
          "부채정리 효과",
          "회수자본 활용 가능성"
        ],
        "caution": "같은 기간과 같은 목적을 기준으로 비교합니다. 결과가 비슷하면 억지로 결론을 내리지 않고 추가 확인으로 넘깁니다.",
        "done": "보유와 매각을 같은 기간·목적·비교기준으로 나란히 놓고 차이를 설명할 수 있습니다."
      },
      {
        "title": "아직 모르는 변수는 따로 표시합니다",
        "paragraphs": [
          "매각 판단에는 지금 바로 알 수 없는 숫자가 반드시 있습니다. 실제 예상 매각가격, 정확한 세금, 중도상환 비용, 법률문제, 예상 시설비 등이 대표적입니다.",
          "이런 항목은 억지로 추정해서 결론을 내리기보다 추가 확인 항목으로 분리합니다. 판단할 수 없는 숫자를 억지로 확정하지 않는 것도 좋은 의사결정의 일부입니다."
        ],
        "checks": [
          "실제 예상 매각가격",
          "정확한 세금",
          "중도상환 비용",
          "법률·권리 문제",
          "대규모 수선 견적",
          "보증금·정산 이슈"
        ],
        "caution": "전문가 확인이 필요한 항목과 내부 기록으로 확인 가능한 항목을 분리합니다. “모름” 자체도 중요한 의사결정 정보입니다.",
        "done": "확정된 값과 추가 확인이 필요한 값을 나누고, 미확인 항목마다 확인할 사람이나 자료를 지정했습니다."
      }
    ],
    "reviewSignals": {
      "title": "이런 변화가 겹친다면 보유 전략을 다시 검토할 시점입니다",
      "lead": "하나의 항목이 발생했다고 바로 매각해야 하는 것은 아닙니다. 여러 변화가 동시에 나타날 때 기존 보유 전략을 다시 확인합니다.",
      "checks": [
        "순현금흐름 감소와 공실이 함께 나타납니다.",
        "핵심 임차인 만기와 재임대 불확실성이 커집니다.",
        "큰 시설비와 금융비용 부담이 가까워집니다.",
        "관리부담이 커지고 기존 보유목적이 약해집니다.",
        "매각 후 회수자본의 사용목적이 명확해집니다."
      ],
      "interpret": "신호의 개수보다 서로 어떤 영향을 주고 있는지 확인하는 것이 중요합니다."
    },
    "holdSignals": {
      "title": "반대로 계속 보유할 이유도 확인합니다",
      "lead": "EXIT를 검토한다고 해서 매각을 전제로 판단하면 안 됩니다. 계속 보유하는 것이 더 합리적인 조건도 함께 봅니다.",
      "checks": [
        "순현금흐름과 임대수익이 안정적으로 유지됩니다.",
        "장기 임차인 비중이 높고 공실 위험이 낮습니다.",
        "가까운 시기에 큰 시설비 부담이 없습니다.",
        "금융조건과 관리부담이 감당 가능한 수준입니다.",
        "장기 보유목적이 유효하고 매각 후 자금용도는 불명확합니다."
      ],
      "interpret": "이런 조건이 유지된다면 가격 상승 하나만으로 매각을 서두를 필요는 낮을 수 있습니다."
    },
    "cases": [
      {
        "title": "CASE A · 현재가 안정적인 경우",
        "desc": [
          "현재 임대수익이 안정적이고 장기 임차인이 있습니다. 대출 부담도 크지 않고 가까운 시기에 큰 시설교체 계획도 없습니다. 관리 부담 역시 낮고 별도의 큰 자금수요도 없습니다.",
          "이 경우 가격이 상당히 올랐다는 사실 하나만으로 매각을 서두를 필요는 낮을 수 있습니다."
        ],
        "checks": [
          "안정적 순현금흐름",
          "장기 임차인",
          "낮은 대출 부담",
          "큰 CAPEX 없음",
          "별도 자금수요 없음"
        ],
        "judge": "현재 자산이 제공하는 안정성과 앞으로 보유했을 때 예상되는 결과를 먼저 확인합니다."
      },
      {
        "title": "CASE B · 앞으로의 조건이 달라지는 경우",
        "desc": [
          "현재 임대수익은 유지되고 있습니다. 하지만 1년 뒤 핵심 임차인의 계약이 종료되고, 2년 안에 큰 시설교체가 예상됩니다. 대출은 변동금리이고 관리 부담도 증가하고 있습니다. 동시에 매각 후 사용할 다른 자본계획도 있습니다.",
          "겉으로는 현재 수익이 유지되는 건물이지만 앞으로 발생할 공실, 시설비, 금융비용, 자본 활용을 함께 보면 매각을 다시 검토할 이유가 커질 수 있습니다."
        ],
        "checks": [
          "핵심 임차인 계약 종료",
          "대규모 시설교체 예정",
          "변동금리 대출",
          "관리부담 증가",
          "명확한 회수자본 계획"
        ],
        "judge": "두 사례의 차이는 현재 가격이 아니라 앞으로의 조건입니다."
      },
      {
        "title": "CASE C · 숫자로 보면 같은 건물도 판단이 달라질 수 있습니다",
        "desc": [
          "교육용 예시입니다. 현재 연 순현금흐름은 4,800만원, 자기자본은 10억원, 대출잔액은 8억원이며 변동금리입니다. 18개월 후 핵심 임차인 계약이 종료되고, 2년 내 예상 시설비는 1억 2,000만원입니다. 최근 공실은 없고 매각 후 회수자본을 사용할 명확한 투자·사업계획이 있다고 가정합니다.",
          "현재 숫자만 보면 매년 4,800만원의 현금흐름이 있어 안정적으로 보일 수 있습니다. 하지만 임차인 계약 종료, 시설비, 변동금리 조건을 함께 보면 앞으로의 보유 성과는 달라질 수 있습니다."
        ],
        "checks": [
          "연 순현금흐름 4,800만원",
          "자기자본 10억원",
          "대출잔액 8억원·변동금리",
          "18개월 후 임차인 계약 종료",
          "2년 내 시설비 1억 2,000만원"
        ],
        "judge": "실제 예상 매각가격, 세금, 거래비용을 아직 모른다면 “매각이 유리하다”고 결론 내릴 수도 없습니다. 이 사례의 목적은 현재 수익과 미래 조건을 함께 보는 방법을 보여주는 것입니다."
      }
    ],
    "questions": [
      [
        "01",
        "현재 이 건물의 실제 연간 순현금흐름을 알고 있는가?",
        "임대료 총액이 아니라 실제 보유 성과를 알아야 보유와 매각을 비교할 수 있습니다.",
        "기준이 없다면 최근 12개월의 실제 입금과 비용을 같은 기간으로 맞춰 순현금흐름을 다시 확인합니다."
      ],
      [
        "02",
        "앞으로 3년 안에 발생할 가능성이 높은 큰 시설비를 알고 있는가?",
        "현재 수익이 유지돼도 CAPEX가 크면 미래 보유성과가 달라질 수 있습니다.",
        "점검기록·수선이력·견적을 모아 큰 수선의 시기와 예상금액을 추가 확인합니다."
      ],
      [
        "03",
        "주요 임차인의 계약 종료 시점과 공실 위험을 알고 있는가?",
        "현재 수익보다 앞으로 유지될 수익을 보기 위한 핵심 확인입니다.",
        "계약서와 최근 공실·모집 기록을 대조해 만기 이후의 공실 가능성을 다시 확인합니다."
      ],
      [
        "04",
        "대출 만기 이후의 금리·상환·재대출 조건을 확인했는가?",
        "자산이 그대로여도 금융조건 변화가 보유 현금흐름을 바꿀 수 있습니다.",
        "대출약정과 금융기관 확인을 통해 만기·금리·상환·재대출 조건을 최신 기준으로 확인합니다."
      ],
      [
        "05",
        "매각 후 회수한 자본을 어디에 사용할지 정해져 있는가?",
        "매각의 가치는 현금화 자체보다 회수자본의 다음 용도와 연결될 수 있습니다.",
        "회수자본의 우선 사용처와 필요한 시점을 적어 매각 목적이 실제 자본계획과 연결되는지 확인합니다."
      ],
      [
        "06",
        "지금 이 건물을 계속 보유해야 하는 이유를 한 문장으로 설명할 수 있는가?",
        "보유가 관성인지 목적 있는 선택인지 확인하는 마지막 질문입니다.",
        "보유 목적을 한 문장으로 적고 현재 수익·위험·자본계획과 맞지 않는 부분을 다시 확인합니다."
      ]
    ],
    "mistakes": [
      [
        "01",
        "가격이 많이 올랐으니 이제 매각해야 한다.",
        "가격 상승만으로 최적 매각시점을 판단할 수는 없습니다. 보유했을 때의 미래 수익과 매각 후 자본 활용까지 함께 봅니다."
      ],
      [
        "02",
        "임대료가 계속 나오니까 보유한다.",
        "현재 임대료만으로 향후 공실·시설비·금융비용을 설명할 수 없습니다."
      ],
      [
        "03",
        "세금이 아까우니 매각하지 않는다.",
        "세금은 중요한 변수지만 전체 자본 판단 중 하나입니다."
      ],
      [
        "04",
        "관리하기 힘드니 그냥 매각한다.",
        "관리 부담은 실제 변수지만 가격·비용·회수 후 계획과 함께 봐야 합니다."
      ],
      [
        "05",
        "주변에서 더 오른다고 하니 계속 보유한다.",
        "시장 전망은 참고자료일 뿐 보유 결정의 유일한 근거가 될 수 없습니다."
      ]
    ],
    "experts": [
      {
        "topic": "예상 매각가격",
        "intro": "주변 매물의 호가와 실제 거래 가능한 가격은 같지 않을 수 있습니다. 특히 입지·임대수익·공실·시설상태가 비교사례와 다르면 단순 호가만으로 목표가격을 정하기 어렵습니다.",
        "check": "현재 시장에서 설명 가능한 가격범위와 그 근거",
        "when": [
          "주변 호가와 실거래 차이가 큰 경우",
          "최근 유사거래가 적은 경우",
          "공실·특수 임차인 구조가 있는 경우",
          "큰 시설비가 예정된 경우"
        ],
        "prepare": [
          "최근 유사 실거래",
          "임대차 현황",
          "현재 임대수입·공실",
          "주요 운영비",
          "시설·수선 이력"
        ],
        "confirm": "공인중개사 / 필요 시 감정평가 관련 전문가",
        "apply": "확인된 가격범위는 가격을 정하는 단계와 실제 회수자본을 계산하는 단계에서 다시 사용합니다."
      },
      {
        "topic": "실제 세금",
        "intro": "매각가격이 높아도 세금과 비용을 반영하면 실제 회수 가능한 자본은 크게 달라질 수 있습니다. 이 페이지에서는 세액을 계산하기보다 매각 판단을 바꿀 만큼 중요한 변수인지 확인합니다.",
        "check": "예상 매각 시 발생 가능한 세금과 주요 비용의 범위",
        "when": [
          "보유기간이 긴 경우",
          "취득 이후 큰 수선·개선비가 있었던 경우",
          "개인·법인 등 보유형태가 다른 경우",
          "세금 때문에 매각 여부가 달라질 가능성이 있는 경우"
        ],
        "prepare": [
          "취득 관련 자료",
          "취득가격·보유기간",
          "자본적 지출 관련 자료",
          "예상 매각가격",
          "기존 세무자료"
        ],
        "confirm": "세무 전문가",
        "apply": "매각가가 아니라 세후 실제 회수자본을 판단하는 데 반영하고, 실제 회수 가능한 자본을 계산하는 단계에서 상세화합니다."
      },
      {
        "topic": "대출상환·중도상환 조건",
        "intro": "건물 매각가격만 알고 대출잔액만 빼서는 실제 회수금액을 정확하게 알 수 없습니다. 중도상환 비용과 잔금·담보정리 일정 같은 조건이 추가될 수 있습니다.",
        "check": "매각 시점에 실제로 상환해야 할 금액과 일정",
        "when": [
          "대출잔액이 큰 경우",
          "변동금리 또는 만기가 가까운 경우",
          "중도상환 비용이 있을 수 있는 경우",
          "여러 금융기관 대출이나 복잡한 담보가 있는 경우"
        ],
        "prepare": [
          "대출잔액",
          "대출약정",
          "만기일",
          "금리형태",
          "중도상환 조건",
          "담보 관련 자료"
        ],
        "confirm": "금융기관",
        "apply": "매각가격에서 실제 상환금액을 차감해 회수 가능한 자본과 잔금 일정을 판단하는 데 반영합니다."
      },
      {
        "topic": "권리·법률 문제",
        "intro": "등기, 임대차, 권리관계, 인허가 등에서 확인되지 않은 문제가 있다면 가격이나 거래일정보다 먼저 점검해야 할 수 있습니다.",
        "check": "거래조건이나 소유권 이전에 영향을 줄 수 있는 문제의 존재 여부",
        "when": [
          "등기상 권리가 복잡한 경우",
          "임대차 분쟁이나 불명확한 계약이 있는 경우",
          "건물 사용현황과 서류가 다른 경우",
          "인허가 또는 공유·담보 구조에 의문이 있는 경우"
        ],
        "prepare": [
          "등기 관련 자료",
          "임대차계약",
          "주요 계약서",
          "인허가 자료",
          "도면",
          "관련 분쟁·통지자료"
        ],
        "confirm": "법률 전문가 / 필요한 관계기관",
        "apply": "단순 비용이 아니라 거래 가능성·일정·조건 자체를 바꿀 수 있는 변수로 판단에 반영합니다."
      },
      {
        "topic": "대규모 시설수선 비용",
        "intro": "현재 건물 수익이 안정적이어도 가까운 시기에 큰 시설비가 발생한다면 앞으로의 보유성과는 달라질 수 있습니다. 의사결정에 중요하다면 대략적인 예상보다 실제 규모와 시기를 확인합니다.",
        "check": "향후 1~3년 안에 예상되는 주요 시설비의 규모와 시기",
        "when": [
          "엘리베이터·외벽·옥상 노후가 있는 경우",
          "전기·소방·급배수 설비 교체 가능성이 있는 경우",
          "냉난방·주차설비가 노후한 경우",
          "대규모 리뉴얼 필요성이 있는 경우"
        ],
        "prepare": [
          "최근 점검기록",
          "수선이력",
          "시설연식",
          "기존 견적",
          "사진·상태자료",
          "보유 중 관리기록"
        ],
        "confirm": "해당 분야 기술 전문가",
        "apply": "현재 수익을 그대로 보는 대신 향후 CAPEX를 반영한 보유 성과로 판단 기준을 바꿉니다."
      }
    ],
    "expertStatus": {
      "title": "지금 모르는 값은 무엇입니까?",
      "body": "모든 값을 알고 있어야 매각을 검토할 수 있는 것은 아닙니다. 다만 어떤 값을 아직 모르는지는 알고 있어야 합니다.",
      "items": [
        "예상 매각가격",
        "실제 세금",
        "대출상환 조건",
        "권리·법률 문제",
        "대규모 시설수선 비용"
      ]
    },
    "summary": [
      [
        "01",
        "앞으로 계속 보유하면 무엇을 얻고 무엇을 부담하는가"
      ],
      [
        "02",
        "지금 매각하면 무엇을 회수하고 무엇을 포기하는가"
      ],
      [
        "03",
        "어느 선택이 현재의 자본 목적에 더 적합한가"
      ]
    ],
    "final": "매각 여부보다 먼저, 지금 이 건물을 계속 보유해야 하는 이유를 설명할 수 있어야 합니다.",
    "next": {
      "title": "02 가치정리",
      "body": "매각을 검토하기로 했다면 다음 질문은 가격이 아닙니다. 먼저 현재의 임대현황, 시설상태, 비용과 기록을 정리해 매수자가 이 건물을 이해할 수 있는 상태로 만들어야 합니다.",
      "status": "02 가치정리로 이동"
    }
  },
  "en": {
    "id": "decision",
    "num": "01",
    "code": "SELL OR HOLD",
    "name": "Sell or Hold",
    "prompt": "Is it time to keep holding, or to consider selling?",
    "lead": "A sell-or-hold decision is not about calling the top of the market. It is about comparing whether continuing to hold or recovering capital now better fits your current objectives.",
    "why": {
      "title": "Before looking at price, clarify why you are considering a sale.",
      "body": [
        "There is rarely only one reason to consider selling a property. The asset itself may have changed through higher prices, more vacancy, or changes in tenants.",
        "Financing conditions may also change through heavier debt service or major capital needs. The owner's priorities can change as management becomes more demanding or capital is needed elsewhere.",
        "If you decide based on one change alone, it is easy to miss the rest. Separate changes in the asset, financing, and the owner's objectives.",
        "The decision is not about the building alone. Start by seeing how these three changes overlap today."
      ],
      "groups": [
        [
          "01",
          "Has the asset changed?",
          "Review changes in the property itself, including rental income, vacancy, tenants, capital needs, and the surrounding market."
        ],
        [
          "02",
          "Have financing conditions changed?",
          "Review conditions that change actual cash flow, such as loan rates, maturity, principal repayment, and refinancing options."
        ],
        [
          "03",
          "Have the owner's objectives changed?",
          "Review changes in current ownership goals, such as liquidity needs, management time, other investments, and portfolio structure."
        ]
      ]
    },
    "core": [
      {
        "title": "Start with what the property actually leaves you, not gross rent.",
        "desc": "Bring the property's actual net cash flow from the analysis stage into the sell-or-hold decision. Do not re-teach yield or cost calculations here; focus on whether that cash flow still justifies holding the property.",
        "key": "The first question is simple: “How much does this property actually leave you today?”"
      },
      {
        "title": "Check whether today's income can continue.",
        "desc": "Stable rental income today does not guarantee the same result going forward. Major tenant expirations, rent resets, recurring vacancy, tenant turnover, new supply, changes in the local market, and dependence on a single tenant can all change future cash flow.",
        "key": "The goal is not to predict the future exactly, but to identify what could disrupt current income over the next one to three years."
      },
      {
        "title": "Identify major costs that are coming.",
        "desc": "Bring major facility history and expected CAPEX identified during ownership into the hold decision. Do not repeat maintenance instructions; focus only on how near-term capital spending changes the reason to keep holding.",
        "key": "This section is about the effect of expected costs on the hold decision, not how to maintain the facilities."
      },
      {
        "title": "Even if the property is unchanged, financing can change the outcome.",
        "desc": "Check the current loan balance, maturity, fixed or floating rate, future principal burden, refinancing options, cash-flow sensitivity to rates, and prepayment terms. If financing costs rise while rental income stays flat, the owner's actual cash return falls.",
        "key": "A sell-or-hold decision looks at both the building and the financing structure used to hold it."
      },
      {
        "title": "Compare the capital tied up in the property.",
        "desc": "Holding the property may provide rental income and future appreciation, but the equity invested in it cannot be used elsewhere at the same time. Identify the real use for recovered capital after a sale—another property, business funding, debt reduction, liquidity, or diversification.",
        "key": "Do not try to forecast another investment's return. Check whether the recovered capital has a real use."
      },
      {
        "title": "Ask whether the reason you bought still matches the reason you hold.",
        "desc": "Check whether the original purpose—stable rental income, long-term ownership, capital gains, owner-occupation, succession, or diversification—still applies. Also ask whether you have exceeded the original holding period, still want to manage the property directly, and have a clear purpose for sale proceeds.",
        "key": "Holding should always have a reason that is valid today."
      }
    ],
    "method": [
      {
        "title": "Separate the reasons you started considering a sale.",
        "paragraphs": [
          "Write down what triggered the sale discussion. Sort reasons such as management fatigue, higher interest rates, rising vacancy, price appreciation, or another investment plan into asset, financing, and owner-related factors.",
          "This prevents one emotion or one event from driving the entire decision."
        ],
        "checks": [
          "Immediate trigger for considering a sale",
          "Temporary or persistent change",
          "Asset, financing, or owner factor",
          "Solvable issue or structural issue",
          "Likelihood it will still matter in one to two years"
        ],
        "caution": "Do not conclude based on one recent vacancy or temporary stress. Do not treat “the price went up” and “we should sell” as the same statement.",
        "done": "You can separate the reasons for considering a sale into asset, financing, and owner factors, and explain whether each is temporary or persistent."
      },
      {
        "title": "Build a one-to-three-year hold scenario.",
        "paragraphs": [
          "Do not assume today's conditions remain unchanged. Review expected rent, vacancy, tenant changes, financing costs, facility costs, major repairs, and management burden together.",
          "The objective is not to forecast perfectly, but to identify the variables that could occur."
        ],
        "checks": [
          "Major tenant lease expirations",
          "Expected vacancy risk and duration",
          "Repairs and replacements expected within three years",
          "Loan maturity and rate terms",
          "Expected management time and operating burden",
          "Conditions required to maintain current net cash flow"
        ],
        "caution": "Do not simply extend current income for three years. Use both a base case and a conservative case instead of one optimistic forecast.",
        "done": "You have organized the rent, vacancy, financing, and facility variables that may change over the next one to three years into base and conservative scenarios."
      },
      {
        "title": "List what changes if you sell now.",
        "paragraphs": [
          "Before calculating an exact sale price, look at what the sale itself changes: recovering invested capital, reducing or repaying debt, ending management work and future capital spending, creating liquidity, or opening room for another investment or business.",
          "A sale is not simply removing an asset; it is reallocating the capital and responsibilities tied to it."
        ],
        "checks": [
          "Approximate recoverable capital",
          "Loans and financing costs to be repaid",
          "Management and facility burden that disappears",
          "Liquidity remaining after the sale",
          "Actual use for recovered capital",
          "Need to move capital into another asset or business"
        ],
        "caution": "Do not equate the expected sale price with the cash that will remain. Separate taxes, prepayment costs, and transaction costs as items requiring further confirmation.",
        "done": "You have separated the burdens that disappear from the capital that is recovered, and marked unconfirmed costs for further verification."
      },
      {
        "title": "Compare holding and selling on the same basis.",
        "paragraphs": [
          "You cannot compare fairly if you look only at income when holding and only at sale price when selling.",
          "For holding, compare future cash flow, expected costs, potential value changes, management burden, and financing risk. For selling, compare recoverable capital, transaction costs, debt cleanup, relief from management, and how the capital can be used afterward."
        ],
        "checks": [
          "Future net cash flow if held",
          "Expected CAPEX",
          "Financing costs",
          "Management burden",
          "Recovered capital",
          "Transaction costs",
          "Effect of debt reduction",
          "Ability to redeploy recovered capital"
        ],
        "caution": "Compare using the same time horizon and objective. If the outcomes are similar, do not force a conclusion; move the unresolved items to further verification.",
        "done": "You can place holding and selling side by side using the same period, objective, and comparison criteria and explain the difference."
      },
      {
        "title": "Separate the variables you still do not know.",
        "paragraphs": [
          "A sell-or-hold decision always includes figures you cannot know immediately, such as the realistic sale price, exact taxes, prepayment costs, legal issues, and expected major repairs.",
          "Do not force estimates into a conclusion. Separate them as items to confirm. Refusing to treat an unknown number as certain is part of good decision-making."
        ],
        "checks": [
          "Realistic expected sale price",
          "Exact taxes",
          "Prepayment costs",
          "Legal and title issues",
          "Major repair estimates",
          "Deposits and settlement issues"
        ],
        "caution": "Separate items requiring professional confirmation from items you can verify from internal records. “Unknown” is itself useful decision information.",
        "done": "You have separated confirmed values from items requiring further verification and assigned a person or source for each unresolved item."
      }
    ],
    "reviewSignals": {
      "title": "When these changes overlap, it is time to review the hold strategy.",
      "lead": "One signal alone does not mean you should sell. Revisit the existing hold strategy when several changes appear together.",
      "checks": [
        "Net cash flow is falling while vacancy is increasing.",
        "A key tenant is nearing expiry and re-leasing uncertainty is rising.",
        "Major capital spending and financing costs are both approaching.",
        "Management burden is rising while the original holding purpose is weakening.",
        "The intended use of recovered capital after a sale is clear."
      ],
      "interpret": "What matters is not how many signals you see, but how they affect one another."
    },
    "holdSignals": {
      "title": "Also confirm the reasons to keep holding.",
      "lead": "Considering an exit does not mean assuming a sale. Review the conditions under which continued ownership may still be more rational.",
      "checks": [
        "Net cash flow and rental income remain stable.",
        "Long-term tenants make up a high share and vacancy risk is low.",
        "No major capital expense is expected in the near term.",
        "Financing terms and management burden remain manageable.",
        "The long-term holding purpose is still valid and the use of sale proceeds is unclear."
      ],
      "interpret": "If these conditions continue, price appreciation alone may not be enough reason to rush a sale."
    },
    "cases": [
      {
        "title": "CASE A · Current conditions are stable",
        "desc": [
          "Rental income is stable and the property has long-term tenants. Debt burden is modest, no major facility replacement is expected soon, management burden is low, and there is no large separate need for capital.",
          "In this case, a substantial increase in market value alone may not be enough reason to rush a sale."
        ],
        "checks": [
          "Stable net cash flow",
          "Long-term tenants",
          "Low debt burden",
          "No major CAPEX",
          "No separate capital need"
        ],
        "judge": "First assess the stability the asset provides and the expected result of continuing to hold it."
      },
      {
        "title": "CASE B · Future conditions are changing",
        "desc": [
          "Current rental income is holding up, but a key tenant expires in one year, a major facility replacement is expected within two years, the loan carries a floating rate, and management burden is increasing. There is also a clear plan for capital after a sale.",
          "The property may look stable today, but when future vacancy, capital spending, financing costs, and alternative uses of capital are considered together, the case for revisiting a sale can become stronger."
        ],
        "checks": [
          "Key tenant lease expiry",
          "Major facility replacement expected",
          "Floating-rate debt",
          "Rising management burden",
          "Clear plan for recovered capital"
        ],
        "judge": "The difference between the two cases is not today's price, but the conditions ahead."
      },
      {
        "title": "CASE C · The same property can lead to a different decision when you look at the numbers",
        "desc": [
          "Educational example: annual net cash flow is KRW 48 million, equity is KRW 1.0 billion, and the outstanding loan is KRW 800 million at a floating rate. A key tenant expires in 18 months, and expected facility costs within two years are KRW 120 million. Assume there has been no recent vacancy and there is a clear investment or business plan for the capital recovered after a sale.",
          "Looking only at today's figures, annual cash flow of KRW 48 million may appear stable. But tenant expiry, capital spending, and floating-rate financing can change future holding performance."
        ],
        "checks": [
          "Annual net cash flow: KRW 48 million",
          "Equity: KRW 1.0 billion",
          "Loan balance: KRW 800 million · floating rate",
          "Key tenant expiry in 18 months",
          "Facility costs of KRW 120 million within two years"
        ],
        "judge": "If the realistic sale price, taxes, and transaction costs are still unknown, you cannot yet conclude that selling is better. The purpose of this case is to show how to look at current income together with future conditions."
      }
    ],
    "questions": [
      [
        "01",
        "Do you know this property's actual annual net cash flow?",
        "You need actual ownership performance—not gross rent—to compare holding with selling.",
        "If you do not have a baseline, align actual receipts and expenses for the latest 12 months and recalculate net cash flow."
      ],
      [
        "02",
        "Do you know the major facility costs likely to arise within the next three years?",
        "Even if current income holds, large CAPEX can change future holding performance.",
        "Gather inspection records, repair history, and estimates to confirm the timing and expected amount of major repairs."
      ],
      [
        "03",
        "Do you know when major tenant leases expire and the associated vacancy risk?",
        "This is a key check for future sustainable income, not just today's income.",
        "Compare lease agreements with recent vacancy and marketing records to reassess vacancy risk after expiry."
      ],
      [
        "04",
        "Have you confirmed the interest-rate, repayment, and refinancing terms after the loan matures?",
        "Even when the asset is unchanged, financing changes can alter holding cash flow.",
        "Use the loan agreement and confirmation from the financial institution to update maturity, interest, repayment, and refinancing terms."
      ],
      [
        "05",
        "Have you decided how recovered capital would be used after a sale?",
        "The value of a sale may depend less on converting the asset to cash than on the next use of that capital.",
        "Write down the priority use and required timing for the recovered capital to see whether the sale objective is tied to a real capital plan."
      ],
      [
        "06",
        "Can you explain in one sentence why this property should still be held today?",
        "This final question tests whether holding is inertia or an intentional choice.",
        "Write the holding purpose in one sentence and revisit any mismatch with current income, risk, or capital plans."
      ]
    ],
    "mistakes": [
      [
        "01",
        "The price has risen a lot, so it must be time to sell.",
        "Price appreciation alone does not determine the best time to sell. Consider future performance if held and the use of capital after a sale."
      ],
      [
        "02",
        "Rent is still coming in, so I should keep holding.",
        "Current rent alone cannot explain future vacancy, facility costs, or financing costs."
      ],
      [
        "03",
        "I do not want to pay the tax, so I will not sell.",
        "Tax is important, but it is only one variable in the overall capital decision."
      ],
      [
        "04",
        "Managing it is difficult, so I will just sell.",
        "Management burden is a real factor, but it must be considered alongside price, costs, and the post-sale capital plan."
      ],
      [
        "05",
        "People say prices will rise more, so I will keep holding.",
        "Market forecasts are reference material, not the sole basis for a hold decision."
      ]
    ],
    "experts": [
      {
        "topic": "Expected sale price",
        "intro": "Asking prices for nearby properties and prices that can actually transact may differ. When location, rental income, vacancy, or facility condition differ from comparables, it is difficult to set a target price from asking prices alone.",
        "check": "A market-supported price range and the evidence behind it",
        "when": [
          "When nearby asking prices and actual transaction prices differ significantly",
          "When there are few recent comparable transactions",
          "When the property has vacancy or an unusual tenant structure",
          "When major capital spending is expected"
        ],
        "prepare": [
          "Recent comparable transactions",
          "Current lease status",
          "Current rental income and vacancy",
          "Major operating expenses",
          "Facility and repair history"
        ],
        "confirm": "Licensed real estate agent / valuation specialist if needed",
        "apply": "Use the confirmed price range again in the pricing stage and when calculating actual recoverable capital."
      },
      {
        "topic": "Actual taxes",
        "intro": "Even with a high sale price, taxes and costs can materially change the capital actually recovered. This page does not calculate tax; it checks whether tax could be large enough to change the sell-or-hold decision.",
        "check": "Range of taxes and major costs that may arise on a sale",
        "when": [
          "When the holding period is long",
          "When there have been major repairs or improvements since acquisition",
          "When the ownership structure differs, such as individual or corporate ownership",
          "When tax could change whether the property is sold"
        ],
        "prepare": [
          "Acquisition records",
          "Acquisition price and holding period",
          "Capital expenditure records",
          "Expected sale price",
          "Existing tax records"
        ],
        "confirm": "Tax professional",
        "apply": "Use the result to judge after-tax recoverable capital rather than headline sale price, then refine it in the net-proceeds stage."
      },
      {
        "topic": "Loan repayment and prepayment terms",
        "intro": "Knowing the sale price and subtracting only the loan balance is not enough to know actual proceeds. Prepayment costs and the timing of final payment and collateral release may also matter.",
        "check": "Actual amount and timing required to repay debt at the sale date",
        "when": [
          "When the loan balance is large",
          "When the loan is floating-rate or close to maturity",
          "When prepayment costs may apply",
          "When there are loans from multiple financial institutions or complex collateral"
        ],
        "prepare": [
          "Loan balance",
          "Loan agreement",
          "Maturity date",
          "Rate type",
          "Prepayment terms",
          "Collateral documents"
        ],
        "confirm": "Financial institution",
        "apply": "Subtract the actual repayment amount from the sale price when assessing recoverable capital and the timing of final settlement."
      },
      {
        "topic": "Title and legal issues",
        "intro": "Unresolved issues involving registration, leases, rights, or permits may need to be checked before price or transaction timing.",
        "check": "Whether any issue could affect transaction terms or transfer of ownership",
        "when": [
          "When registered rights are complex",
          "When there is a lease dispute or unclear contract",
          "When actual building use differs from the documents",
          "When there are questions about permits, shared ownership, or collateral structure"
        ],
        "prepare": [
          "Registration and title records",
          "Lease agreements",
          "Key contracts",
          "Permit and approval records",
          "Drawings",
          "Related dispute and notice records"
        ],
        "confirm": "Legal professional / relevant authority as needed",
        "apply": "Treat it not simply as a cost, but as a variable that can change whether the transaction can proceed, its timing, and its terms."
      },
      {
        "topic": "Major facility repair costs",
        "intro": "Even if current income is stable, major facility costs in the near term can change future holding performance. If the amount matters to the decision, confirm the likely scale and timing rather than relying on a rough assumption.",
        "check": "Scale and timing of major facility costs expected within one to three years",
        "when": [
          "When elevators, facade, or roof are aging",
          "When electrical, fire-safety, or plumbing systems may need replacement",
          "When HVAC or parking equipment is aging",
          "When a major renovation may be required"
        ],
        "prepare": [
          "Recent inspection records",
          "Repair history",
          "Age of major equipment",
          "Existing estimates",
          "Photos and condition records",
          "Operating records from the holding period"
        ],
        "confirm": "Relevant technical specialist",
        "apply": "Use future CAPEX to adjust the hold-performance view instead of assuming current income continues unchanged."
      }
    ],
    "expertStatus": {
      "title": "What values are still unknown?",
      "body": "You do not need to know every value before considering a sale. You do need to know which values are still unknown.",
      "items": [
        "Expected sale price",
        "Actual taxes",
        "Loan repayment terms",
        "Title and legal issues",
        "Major facility repair costs"
      ]
    },
    "summary": [
      [
        "01",
        "What do you gain and what do you carry if you keep holding?"
      ],
      [
        "02",
        "What do you recover and what do you give up if you sell now?"
      ],
      [
        "03",
        "Which choice better fits your current capital objective?"
      ]
    ],
    "final": "Before deciding whether to sell, you should be able to explain why this property should still be held today.",
    "next": {
      "title": "02 Sale Preparation",
      "body": "If you decide to explore a sale, the next question is not price. First organize current leasing, facility condition, costs, and records so a buyer can understand the property.",
      "status": "Go to 02 Sale Preparation"
    }
  },
  "ja": {
    "id": "decision",
    "num": "01",
    "code": "SELL OR HOLD",
    "name": "売却判断",
    "prompt": "今は保有を続ける時か、売却を検討する時か",
    "lead": "売却判断は、市場の高値を当てることではありません。保有を続ける選択と、今資本を回収する選択のどちらが現在の目的に合うかを比較するプロセスです。",
    "why": {
      "title": "売却を考えるなら、価格より先に理由を確認します",
      "body": [
        "建物の売却を考える理由は一つではありません。価格上昇、空室増加、テナント変化など、物件自体の条件が変わることがあります。",
        "融資負担や大きな設備費など、金融条件が変わることもあります。管理負担が増えたり、別の用途に資金が必要になったりして、保有者の目的が変わることもあります。",
        "一つの変化だけで売却可否を決めると、他の条件を見落としやすくなります。物件の変化、金融条件の変化、保有者の目的の変化を分けて見ます。",
        "売却判断は建物だけを見る作業ではありません。この3つの変化が今どう重なっているかを確認することから始めます。"
      ],
      "groups": [
        [
          "01",
          "物件は変わったか",
          "賃料収入・空室・テナント・設備費・周辺環境など、物件自体の条件変化を見ます。"
        ],
        [
          "02",
          "金融条件は変わったか",
          "金利・満期・元本返済・借換え可能性など、実際のキャッシュフローを変える条件を見ます。"
        ],
        [
          "03",
          "保有目的は変わったか",
          "資金需要・管理時間・他の投資・資産構成など、現在の保有目的の変化を見ます。"
        ]
      ]
    },
    "core": [
      {
        "title": "賃料総額ではなく、実際に残る金額から見ます",
        "desc": "分析段階で確認した実際のネットキャッシュフローを売却判断の入力値にします。ここでは利回りや費用計算を繰り返さず、そのキャッシュフローが今の保有理由を十分に説明できるかに集中します。",
        "key": "最初の質問はシンプルです。「この物件は今、実際にいくら残しているか？」"
      },
      {
        "title": "現在の収益が今後も続くかを見ます",
        "desc": "現在の賃料収入が安定していても、今後も同じ状態が続く保証はありません。主要テナントの契約満了、賃料改定、繰り返す空室、テナント入替え、周辺の新規供給、商圏変化、特定テナントへの依存は、将来のキャッシュフローを変える可能性があります。",
        "key": "未来を正確に当てるのではなく、今後1〜3年で現在の収益を揺らす可能性のある要因を確認します。"
      },
      {
        "title": "今後発生する大きな費用を確認します",
        "desc": "保有中の管理で把握した主要設備の履歴と今後のCAPEXを保有判断の入力値にします。設備点検や管理方法は繰り返さず、近い将来の大きな資本支出が保有理由をどう変えるかだけを見ます。",
        "key": "ここでは設備管理の方法ではなく、予定される費用が保有判断に与える影響だけを見ます。"
      },
      {
        "title": "建物が同じでも、金融条件が変われば結果は変わります",
        "desc": "現在の融資残高、満期、固定・変動金利、今後の元本返済負担、借換え可能性、金利変化時のキャッシュフロー、中途返済条件を確認します。賃料収入が同じでも金融費用が増えれば、保有者に実際に残る現金は減ります。",
        "key": "売却判断では、建物だけでなく、どのような金融構造で保有しているかも一緒に見ます。"
      },
      {
        "title": "物件に固定されている資本も比較します",
        "desc": "保有を続ければ賃料収入や将来の値上がり可能性を得られますが、物件に投入した自己資本は同時に別の用途へ使えません。売却後の回収資本を、別の不動産、事業資金、借入削減、現金確保、資産分散など、実際に何へ使うのかを確認します。",
        "key": "他の投資の予想利回りを当てるのではなく、回収した資本に実際の使い道があるかを見ます。"
      },
      {
        "title": "買った理由と、今保有している理由が同じかを見ます",
        "desc": "安定賃料、長期保有、値上がり益、自社利用、資産承継、分散など、購入時の目的が今も有効か確認します。当初想定した保有期間を過ぎていないか、今後も直接管理する意思があるか、売却後の資金目的が明確かも一緒に見ます。",
        "key": "保有には、今の時点で有効な理由が必要です。"
      }
    ],
    "method": [
      {
        "title": "売却を考え始めた理由を分けます",
        "paragraphs": [
          "なぜ売却を考えたのかを書き出します。管理疲れ、金利上昇、空室増加、価格上昇、別の投資計画などを、物件要因・金融要因・保有者要因に分けます。",
          "こうして分けることで、一つの感情や出来事が判断全体を引っ張るのを防げます。"
        ],
        "checks": [
          "売却を考えた直接のきっかけ",
          "一時的な変化か、継続的な変化か",
          "物件・金融・保有者のどの要因か",
          "解決可能な問題か、構造的な問題か",
          "1〜2年後にも残る可能性"
        ],
        "caution": "直近一度の空室や一時的なストレスだけで結論を出しません。「価格が上がった」と「売却すべきだ」を同じ意味で使わないようにします。",
        "done": "売却を考えた理由を物件・金融・保有者の要因に分け、それぞれが一時的か継続的かを説明できます。"
      },
      {
        "title": "今後1〜3年の保有シナリオを作ります",
        "paragraphs": [
          "現在の状態がそのまま続くとは考えません。今後の賃料収入、空室、テナント変化、金融費用、設備費、大規模修繕、管理負担を一緒に見ます。",
          "目的は未来を正確に当てることではなく、どのような変数が起こり得るかを確認することです。"
        ],
        "checks": [
          "主要テナントの契約満了日",
          "予想される空室リスクと期間",
          "今後3年の修繕・交換予定",
          "融資満期と金利条件",
          "予想される管理時間と運用負担",
          "現在のネットキャッシュフローを維持する条件"
        ],
        "caution": "現在の収益をそのまま3年間延長して計算しません。楽観的な予想一つではなく、基準シナリオと保守的シナリオを一緒に見ます。",
        "done": "今後1〜3年で変化し得る賃料・空室・金融・設備の要因を、基準シナリオと保守的シナリオに分けて整理できています。"
      },
      {
        "title": "今売却した場合に何が変わるかを整理します",
        "paragraphs": [
          "正確な売却価格を計算する前に、売却そのものが何を変えるかを見ます。投下資本の回収、借入の削減・返済、管理業務や設備投資負担の終了、現金確保、別の投資や事業の可能性が変わります。",
          "売却は単に資産を手放すことではなく、その資産に縛られていた資本と責任を再配置する選択です。"
        ],
        "checks": [
          "概算の回収可能資本",
          "返済する融資と金融費用",
          "なくなる管理・設備負担",
          "売却後に残る流動性",
          "回収資本の実際の用途",
          "他の資産・事業へ資本を移す必要性"
        ],
        "caution": "予想売却価格と実際に手元へ残る金額を同じものと考えません。税金・中途返済費用・取引費用は追加確認項目として分けます。",
        "done": "売却でなくなる負担と回収される資本を分け、未確定の費用は追加確認項目として表示できています。"
      },
      {
        "title": "保有と売却を同じ基準で比較します",
        "paragraphs": [
          "保有では収益だけ、売却では売却価格だけを見ると、正しく比較できません。",
          "保有では今後のキャッシュフロー、将来費用、価値変化の可能性、管理負担、金融リスクを見ます。売却では実際に回収できる資本、取引費用、負債整理、管理終了の効果、その後の資本活用を見ます。"
        ],
        "checks": [
          "保有した場合の今後のネットキャッシュフロー",
          "予想CAPEX",
          "金融費用",
          "管理負担",
          "回収資本",
          "取引費用",
          "負債整理の効果",
          "回収資本の活用可能性"
        ],
        "caution": "同じ期間と同じ目的を基準に比較します。結果が近い場合は無理に結論を出さず、追加確認へ回します。",
        "done": "保有と売却を同じ期間・目的・比較基準で並べ、違いを説明できます。"
      },
      {
        "title": "まだ分からない変数は別に表示します",
        "paragraphs": [
          "売却判断には、すぐには分からない数字が必ずあります。実際の予想売却価格、正確な税金、中途返済費用、法的問題、予想設備費などが代表例です。",
          "無理に推定して結論を出さず、追加確認項目として分けます。判断できない数字を無理に確定しないことも、良い意思決定の一部です。"
        ],
        "checks": [
          "実際の予想売却価格",
          "正確な税金",
          "中途返済費用",
          "法務・権利関係の問題",
          "大規模修繕の見積り",
          "保証金・精算の問題"
        ],
        "caution": "専門家確認が必要な項目と、内部記録で確認できる項目を分けます。「不明」であること自体も重要な判断情報です。",
        "done": "確定値と追加確認が必要な値を分け、未確認項目ごとに確認する人や資料を指定できています。"
      }
    ],
    "reviewSignals": {
      "title": "こうした変化が重なるなら、保有戦略を見直すタイミングです",
      "lead": "一つの項目が起きただけで、すぐ売却する必要はありません。複数の変化が同時に現れたときに、現在の保有戦略を見直します。",
      "checks": [
        "ネットキャッシュフローの低下と空室が同時に見られます。",
        "主要テナントの満了が近づき、再賃貸の不確実性が高まっています。",
        "大きな設備費と金融費用の負担が近づいています。",
        "管理負担が増え、従来の保有目的が弱くなっています。",
        "売却後に回収する資本の使い道が明確です。"
      ],
      "interpret": "サインの数より、それぞれがどう影響し合っているかを確認することが重要です。"
    },
    "holdSignals": {
      "title": "反対に、保有を続ける理由も確認します",
      "lead": "EXITを検討しているからといって、売却を前提に判断してはいけません。保有を続ける方が合理的な条件も一緒に見ます。",
      "checks": [
        "ネットキャッシュフローと賃料収入が安定しています。",
        "長期テナントの比率が高く、空室リスクが低い状態です。",
        "近い時期に大きな設備費負担がありません。",
        "金融条件と管理負担が対応可能な水準です。",
        "長期保有の目的が有効で、売却後の資金用途はまだ明確ではありません。"
      ],
      "interpret": "こうした条件が続くなら、価格上昇だけを理由に売却を急ぐ必要性は低いかもしれません。"
    },
    "cases": [
      {
        "title": "CASE A · 現在が安定している場合",
        "desc": [
          "現在の賃料収入は安定しており、長期テナントがいます。借入負担も大きくなく、近い時期に大規模な設備交換予定もありません。管理負担も低く、別途大きな資金需要もありません。",
          "この場合、価格が大きく上昇したという事実だけで売却を急ぐ必要性は低いかもしれません。"
        ],
        "checks": [
          "安定したネットキャッシュフロー",
          "長期テナント",
          "低い借入負担",
          "大きなCAPEXなし",
          "別途の資金需要なし"
        ],
        "judge": "まず、現在の資産が提供する安定性と、今後保有した場合に想定される結果を確認します。"
      },
      {
        "title": "CASE B · 今後の条件が変わる場合",
        "desc": [
          "現在の賃料収入は維持されていますが、1年後に主要テナントの契約が終了し、2年以内に大規模な設備交換が見込まれます。融資は変動金利で、管理負担も増えています。同時に、売却後の資本活用計画もあります。",
          "表面上は現在の収益が維持されている物件でも、今後の空室、設備費、金融費用、資本活用を合わせて見ると、売却を再検討する理由が強くなることがあります。"
        ],
        "checks": [
          "主要テナントの契約終了",
          "大規模な設備交換予定",
          "変動金利の融資",
          "管理負担の増加",
          "明確な回収資本の活用計画"
        ],
        "judge": "二つのケースの違いは現在価格ではなく、今後の条件です。"
      },
      {
        "title": "CASE C · 数字で見ると同じ物件でも判断が変わることがあります",
        "desc": [
          "学習用の例です。現在の年間ネットキャッシュフローは4,800万ウォン、自己資本は10億ウォン、融資残高は8億ウォンで変動金利です。18か月後に主要テナントの契約が終了し、2年以内の予想設備費は1億2,000万ウォンです。直近の空室はなく、売却後に回収した資本を使う明確な投資・事業計画があると仮定します。",
          "現在の数字だけを見ると、年間4,800万ウォンのキャッシュフローがあり安定して見えます。しかし、テナント契約終了、設備費、変動金利を合わせて見ると、今後の保有成果は変わる可能性があります。"
        ],
        "checks": [
          "年間ネットキャッシュフロー4,800万ウォン",
          "自己資本10億ウォン",
          "融資残高8億ウォン・変動金利",
          "18か月後にテナント契約終了",
          "2年以内の設備費1億2,000万ウォン"
        ],
        "judge": "実際の予想売却価格、税金、取引費用がまだ分からないなら、「売却が有利」と結論づけることもできません。このケースの目的は、現在の収益と将来条件を一緒に見る方法を示すことです。"
      }
    ],
    "questions": [
      [
        "01",
        "この物件の実際の年間ネットキャッシュフローを把握していますか？",
        "保有と売却を比較するには、賃料総額ではなく実際の保有成果を把握する必要があります。",
        "基準がない場合は、直近12か月の実際の入金と費用を同じ期間にそろえて、ネットキャッシュフローを再確認します。"
      ],
      [
        "02",
        "今後3年以内に発生する可能性が高い大きな設備費を把握していますか？",
        "現在の収益が維持されても、CAPEXが大きければ将来の保有成果は変わる可能性があります。",
        "点検記録・修繕履歴・見積りを集め、大きな修繕の時期と予想金額を追加確認します。"
      ],
      [
        "03",
        "主要テナントの契約終了時期と空室リスクを把握していますか？",
        "現在の収益ではなく、今後維持できる収益を見るための重要な確認です。",
        "契約書と直近の空室・募集記録を照合し、満了後の空室可能性を再確認します。"
      ],
      [
        "04",
        "融資満期後の金利・返済・借換え条件を確認しましたか？",
        "物件が同じでも、金融条件の変化で保有キャッシュフローは変わります。",
        "融資契約と金融機関への確認により、満期・金利・返済・借換え条件を最新基準で確認します。"
      ],
      [
        "05",
        "売却後に回収した資本をどこに使うか決まっていますか？",
        "売却の価値は、現金化そのものよりも、回収資本の次の使い道と結びつく場合があります。",
        "回収資本の優先用途と必要時期を書き出し、売却目的が実際の資本計画とつながっているか確認します。"
      ],
      [
        "06",
        "今この物件を保有し続ける理由を一文で説明できますか？",
        "保有が惰性なのか、目的のある選択なのかを確認する最後の質問です。",
        "保有目的を一文で書き、現在の収益・リスク・資本計画と合わない部分を再確認します。"
      ]
    ],
    "mistakes": [
      [
        "01",
        "価格が大きく上がったから、もう売却すべきだ。",
        "価格上昇だけで最適な売却時期は判断できません。保有した場合の将来収益と、売却後の資本活用まで一緒に見ます。"
      ],
      [
        "02",
        "賃料が入っているから保有を続ける。",
        "現在の賃料だけでは、今後の空室・設備費・金融費用を説明できません。"
      ],
      [
        "03",
        "税金がもったいないから売却しない。",
        "税金は重要な変数ですが、資本判断全体の一要素です。"
      ],
      [
        "04",
        "管理が大変だから、そのまま売却する。",
        "管理負担は実際の変数ですが、価格・費用・回収後の計画と合わせて見る必要があります。"
      ],
      [
        "05",
        "周囲がもっと上がると言っているから保有を続ける。",
        "市場予測は参考資料であり、保有判断の唯一の根拠にはなりません。"
      ]
    ],
    "experts": [
      {
        "topic": "予想売却価格",
        "intro": "周辺物件の売出価格と実際に成約可能な価格は同じとは限りません。立地・賃料収入・空室・設備状態が比較事例と異なる場合、単純な売出価格だけで目標価格を決めるのは難しくなります。",
        "check": "現在の市場で説明可能な価格帯とその根拠",
        "when": [
          "周辺の売出価格と実取引価格の差が大きい場合",
          "最近の類似取引が少ない場合",
          "空室や特殊なテナント構成がある場合",
          "大きな設備費が予定されている場合"
        ],
        "prepare": [
          "最近の類似実取引",
          "賃貸借の現況",
          "現在の賃料収入・空室",
          "主要運営費",
          "設備・修繕履歴"
        ],
        "confirm": "不動産仲介会社 / 必要に応じて不動産鑑定関連専門家",
        "apply": "確認した価格帯は、価格戦略と実際の回収資本を計算する段階で再利用します。"
      },
      {
        "topic": "実際の税金",
        "intro": "売却価格が高くても、税金や費用を反映すると実際に回収できる資本は大きく変わります。このページでは税額を計算するのではなく、売却判断を変えるほど重要な変数かを確認します。",
        "check": "売却時に発生し得る税金と主要費用の範囲",
        "when": [
          "保有期間が長い場合",
          "取得後に大きな修繕・改良費があった場合",
          "個人・法人など保有形態が異なる場合",
          "税金によって売却判断が変わる可能性がある場合"
        ],
        "prepare": [
          "取得関連資料",
          "取得価格・保有期間",
          "資本的支出に関する資料",
          "予想売却価格",
          "既存の税務資料"
        ],
        "confirm": "税務専門家",
        "apply": "売却価格ではなく税引後の実際の回収資本を判断する材料にし、手取り額の段階で詳細化します。"
      },
      {
        "topic": "融資返済・中途返済条件",
        "intro": "売却価格から融資残高だけを引いても、実際の回収額は正確には分かりません。中途返済費用や、残金・担保解除のスケジュールなどの条件が加わることがあります。",
        "check": "売却時点で実際に返済する金額とスケジュール",
        "when": [
          "融資残高が大きい場合",
          "変動金利または満期が近い場合",
          "中途返済費用が発生する可能性がある場合",
          "複数金融機関の融資や複雑な担保がある場合"
        ],
        "prepare": [
          "融資残高",
          "融資契約",
          "満期日",
          "金利タイプ",
          "中途返済条件",
          "担保関連資料"
        ],
        "confirm": "金融機関",
        "apply": "売却価格から実際の返済額を差し引き、回収可能資本と残金決済のスケジュールを判断する材料にします。"
      },
      {
        "topic": "権利・法務上の問題",
        "intro": "登記、賃貸借、権利関係、許認可などに未確認の問題がある場合、価格や取引日程より先に確認が必要なことがあります。",
        "check": "取引条件や所有権移転に影響する問題があるか",
        "when": [
          "登記上の権利関係が複雑な場合",
          "賃貸借紛争や不明確な契約がある場合",
          "建物の使用状況と書類が異なる場合",
          "許認可・共有・担保構造に疑問がある場合"
        ],
        "prepare": [
          "登記関連資料",
          "賃貸借契約",
          "主要契約書",
          "許認可資料",
          "図面",
          "関連する紛争・通知資料"
        ],
        "confirm": "法律専門家 / 必要な関係機関",
        "apply": "単なる費用ではなく、取引の可否・日程・条件自体を変え得る変数として判断に反映します。"
      },
      {
        "topic": "大規模な設備修繕費",
        "intro": "現在の収益が安定していても、近い時期に大きな設備費が発生すれば将来の保有成果は変わります。判断に重要なら、概算だけでなく実際の規模と時期を確認します。",
        "check": "今後1〜3年以内に予想される主要設備費の規模と時期",
        "when": [
          "エレベーター・外壁・屋上が老朽化している場合",
          "電気・消防・給排水設備の交換可能性がある場合",
          "空調・駐車設備が老朽化している場合",
          "大規模リニューアルが必要な場合"
        ],
        "prepare": [
          "最近の点検記録",
          "修繕履歴",
          "設備年数",
          "既存見積り",
          "写真・状態資料",
          "保有中の管理記録"
        ],
        "confirm": "該当分野の技術専門家",
        "apply": "現在の収益をそのまま見るのではなく、将来CAPEXを反映した保有成果へ判断基準を切り替えます。"
      }
    ],
    "expertStatus": {
      "title": "今まだ分からない値は何ですか？",
      "body": "すべての値が分かっていなければ売却を検討できないわけではありません。ただし、何がまだ分からないのかは把握しておく必要があります。",
      "items": [
        "予想売却価格",
        "実際の税金",
        "融資返済条件",
        "権利・法務上の問題",
        "大規模な設備修繕費"
      ]
    },
    "summary": [
      [
        "01",
        "保有を続けると、何を得て何を負担するのか"
      ],
      [
        "02",
        "今売却すると、何を回収し何を手放すのか"
      ],
      [
        "03",
        "どちらの選択が現在の資本目的により合っているか"
      ]
    ],
    "final": "売却するかどうかを決める前に、今この物件を保有し続ける理由を説明できる状態にしておく必要があります。",
    "next": {
      "title": "02 売却資料の整理",
      "body": "売却を検討するなら、次の質問は価格ではありません。まず現在の賃貸状況、設備状態、費用、記録を整理し、買主がこの物件を理解できる状態にします。",
      "status": "02 売却資料の整理へ"
    }
  }
};

export const EXIT_PROTO_BY_LOCALE={
  "ko": [
    {
      "id": "readiness",
      "num": "02",
      "code": "VALUE READY",
      "name": "가치정리",
      "prompt": "매각 전에, 이 건물은 설명할 준비가 되어 있는가",
      "lead": "가치정리는 건물을 다시 관리하는 단계가 아닙니다. 보유 중 쌓아둔 기록을 매수자가 한 번에 읽을 수 있는 매각자료 PACK으로 바꾸는 과정입니다.",
      "whyDetails": [
        "보유 중에는 기록을 계속 갱신하는 것이 중요합니다. EXIT에서는 그 관리방법을 다시 설명하지 않습니다.",
        "같은 기준일의 임대차 요약, 최근 12개월 수입·비용, 시설이력, 추가확인 항목을 하나의 설명 구조로 묶습니다.",
        "계약서나 행정자료도 여기서 법률적으로 해석하지 않습니다. 최신본인지, 요약표와 근거자료가 서로 맞는지만 확인합니다.",
        "판단이 필요한 차이는 추가확인으로 표시합니다. 법률 판단은 계약 확인 단계 또는 전문가 확인으로 넘깁니다.",
        "완료 기준은 자료의 양이 아닙니다. ‘요약표 → 근거자료 → 추가확인’ 순서로 현재 상태를 따라갈 수 있어야 합니다."
      ],
      "core": [
        [
          "임대차 기록을 매각용 요약표로 변환합니다",
          "보유 중 관리해 온 임대차 기록을 다시 분석하지 않고, 기준일·임차인·보증금·임대료·계약종료일·공실을 한 장의 매각용 요약표로 옮깁니다. 계약서는 근거자료로 연결하고, 요약표와 다르면 어느 쪽이 최신인지 확인대상으로 표시합니다."
        ],
        [
          "공실·미수 기록을 ‘현재 상태 설명’으로 바꿉니다",
          "공실을 줄이는 방법이나 모집전략은 여기서 다루지 않습니다. 기존 관리기록에서 발생일, 현재 상태, 확인된 원인, 진행 중인 조치만 추출해 매수자가 지금 무엇이 남아 있는지 이해할 수 있게 정리합니다."
        ],
        [
          "시설기록을 향후 부담 설명자료로 묶습니다",
          "점검주기나 유지관리법을 다시 설명하지 않습니다. 최근 점검, 수선이력, 반복고장, 향후 1~3년 CAPEX와 근거자료만 매각용 시설 요약에 넣습니다. 기술적 적합성은 판단하지 않고 추가확인 여부만 표시합니다."
        ],
        [
          "계약·도면·행정자료는 해석하지 않고 연결상태를 봅니다",
          "계약조항이나 인허가의 법률효력을 설명하는 대신 보유/미보유, 최신/구버전, 요약표와 일치/불일치, 추가확인 필요의 상태만 표시합니다. 해석이 필요한 항목은 계약 확인 단계 또는 관계기관 확인으로 넘깁니다."
        ],
        [
          "수입·비용은 분석이 아니라 ‘설명 가능한 숫자’로 정리합니다",
          "수익률이나 적정비용을 다시 분석하지 않습니다. 최근 12개월 등 동일한 기간으로 맞춘 수입·비용 숫자에 근거자료를 연결하고, 일회성·반복성·추정값을 구분해 가격을 정하는 단계에 넘길 준비만 합니다."
        ],
        [
          "마지막에는 하나의 매각자료 PACK으로 묶습니다",
          "1페이지 요약, 임대차 근거, 수입·비용 근거, 시설자료, 추가확인 목록 순서로 묶습니다. 자료마다 상태와 위치를 표시해 매수자가 질문했을 때 같은 자료를 반복해서 찾지 않게 만드는 것이 이 단계의 결과물입니다."
        ]
      ],
      "method": [
        [
          "관리기록에서 매각자료만 추출합니다",
          "새로 관리기록을 만드는 것이 아니라 기존 기록 중 현재 상태를 설명하는 데 필요한 자료만 골라냅니다.",
          [
            "임대차 최신본",
            "최근 12개월 수입·비용",
            "시설·수선 이력",
            "공실·미수 현황"
          ],
          "관리기록 전체를 그대로 넘기지 않습니다. 매각 설명에 필요한 범위만 추출합니다.",
          "매각용 요약에 들어갈 자료 목록이 확정됩니다."
        ],
        [
          "모든 요약자료의 기준일을 맞춥니다",
          "임대차, 공실, 보증금, 수입·비용, 시설상태의 기준일을 맞춰 현재상태를 한 시점에서 설명합니다.",
          [
            "임대차 기준일",
            "수입·비용 기간",
            "공실 기준일",
            "시설 점검일"
          ],
          "기준일이 다른 숫자를 같은 시점의 값처럼 묶지 않습니다.",
          "각 요약표에 기준일이 표시되고 서로 비교 가능한 상태가 됩니다."
        ],
        [
          "요약표와 근거자료의 연결을 확인합니다",
          "계약서·입금기록·점검자료처럼 요약값의 근거가 되는 자료를 연결하고 차이는 추가확인으로 표시합니다.",
          [
            "보증금 합계",
            "월 임대료",
            "계약 만기",
            "시설·수선비"
          ],
          "불일치를 임의로 수정해 맞추지 않습니다.",
          "모든 핵심 숫자에 근거자료 또는 추가확인 상태가 붙습니다."
        ],
        [
          "문제항목을 ‘설명 + 확인경로’로 바꿉니다",
          "공실·미수·자료누락·미완료 수선은 문제를 숨기는 대신 현재 상태와 다음 확인경로를 함께 기록합니다.",
          [
            "현재 상태",
            "확인된 원인",
            "추가자료",
            "담당자·확인처"
          ],
          "해결되지 않은 항목을 정상으로 표현하지 않습니다.",
          "각 문제항목에 현재상태와 다음 확인이 함께 표시됩니다."
        ],
        [
          "PACK 순서를 고정합니다",
          "요약표 → 근거자료 → 추가확인 목록의 순서로 공유용 자료를 묶습니다.",
          [
            "1페이지 요약",
            "근거자료 폴더",
            "추가확인 목록",
            "민감정보 분리"
          ],
          "개인정보나 불필요한 내부기록을 통째로 공유하지 않습니다.",
          "처음 보는 사람이 같은 순서로 현재상태를 따라갈 수 있습니다."
        ]
      ],
      "signals": [
        "계약서와 임대차표의 핵심 숫자가 일치하지 않습니다.",
        "공실의 발생 원인과 현재 상태를 설명하기 어렵습니다.",
        "큰 수선의 비용·점검 근거가 연결돼 있지 않습니다.",
        "사용현황과 행정자료의 차이가 아직 확인되지 않았습니다.",
        "수입·비용 자료의 기준기간이 서로 다릅니다."
      ],
      "readySignals": [
        "임대차표와 계약서가 같은 기준일로 정리돼 있습니다.",
        "공실·미수의 원인과 현재 상태를 설명할 수 있습니다.",
        "향후 주요 CAPEX와 근거자료가 연결돼 있습니다.",
        "자료 누락·불일치가 추가확인 항목으로 분리돼 있습니다.",
        "수입·비용 숫자에 기간과 근거자료가 연결돼 있습니다."
      ],
      "cases": [
        {
          "label": "CASE A",
          "title": "자료가 정리된 건물",
          "situation": "임차인 7명, 최근 12개월 수입·비용표, 최근 2년 수선이력, 주요 시설점검자료가 하나의 기준일로 정리되어 있습니다.",
          "observe": "임대차 요약표의 보증금·임대료가 계약서와 일치하고, 공실 1개도 발생시점과 현재 모집조건이 기록돼 있습니다.",
          "judge": "문제가 전혀 없다는 뜻이 아니라 질문이 생겼을 때 어떤 자료로 확인할지 바로 설명할 수 있는 상태입니다.",
          "next": "이 상태라면 정리된 자료를 가격을 정하는 단계의 근거로 넘길 수 있습니다."
        },
        {
          "label": "CASE B",
          "title": "자료는 있지만 버전이 섞인 건물",
          "situation": "계약서, 엑셀, 메신저, 수기장부에 정보는 있지만 최신 임대차표가 무엇인지 명확하지 않습니다.",
          "observe": "임대료와 실제 입금액이 다르고 최근 수선 2건의 비용증빙도 연결되지 않습니다.",
          "judge": "자료의 양보다 최신성과 정합성이 먼저입니다. 이 상태에서 가격설명을 시작하면 같은 질문을 반복해서 확인하게 됩니다.",
          "next": "최신본 결정과 불일치 원인 확인부터 다시 진행합니다."
        },
        {
          "label": "CASE C",
          "title": "숫자가 맞지 않는 경우",
          "situation": "교육용 예시: 임차인 8명, 계약서 기준 보증금 합계 4.2억원, 임대차표에는 3.9억원, 공실 2호는 7개월째이며 2년 내 엘리베이터 수선비 6,000만원이 예상됩니다.",
          "observe": "보증금 3,000만원 차이는 거래 종료 정산에 직접 연결되고, 장기 공실과 CAPEX는 가격·실사 질문에도 영향을 줍니다.",
          "judge": "이 사례의 핵심은 가격을 깎아야 한다는 결론이 아니라 현재 숫자와 미래비용의 근거를 먼저 맞추는 것입니다.",
          "next": "보증금 차이 원인, 공실 모집현황, CAPEX 근거를 확인한 뒤 가격전략으로 이동합니다."
        }
      ],
      "questions": [
        {
          "q": "현재 임대차표의 기준일은 언제인가?",
          "why": "현재상태인지 과거상태인지 구분하는 출발점입니다.",
          "next": "기준일이 없다면 최신 계약서를 기준으로 새 요약표를 만듭니다."
        },
        {
          "q": "보증금 총액이 계약서·장부·입금기록과 일치하는가?",
          "why": "보증금은 거래 종료 정산과 직접 연결되는 숫자입니다.",
          "next": "다르면 임차인별 차이표를 만들어 최신 근거를 확인합니다."
        },
        {
          "q": "공실마다 발생시점과 원인을 설명할 수 있는가?",
          "why": "공실률 하나보다 재임대 가능성을 이해하는 데 도움이 됩니다.",
          "next": "원인을 모르면 직전 임대조건과 최근 모집내역부터 확인합니다."
        },
        {
          "q": "앞으로 3년 내 큰 수선항목과 예상비용이 정리돼 있는가?",
          "why": "향후 CAPEX는 가격과 실사의 공통 질문이 됩니다.",
          "next": "금액이 불명확하면 점검·견적을 추가확인으로 표시합니다."
        },
        {
          "q": "수입·비용 숫자마다 근거자료가 연결되는가?",
          "why": "설명 가능한 숫자인지 판단하기 위한 질문입니다.",
          "next": "근거가 없다면 추정값으로 낮춰 표시하고 확인경로를 정합니다."
        },
        {
          "q": "지금 스스로 설명하기 어려운 항목이 무엇인지 알고 있는가?",
          "why": "모르는 것을 알고 있어야 전문가 확인과 추가자료 요청을 준비할 수 있습니다.",
          "next": "미확인 목록을 별도로 만들고 담당자·확인처를 지정합니다."
        }
      ],
      "experts": [
        {
          "topic": "권리·임대차·계약",
          "intro": "계약내용이나 권리관계의 법률적 의미를 스스로 확정하지 않습니다.",
          "check": "분쟁·권리관계·계약해석이 실제 거래조건에 영향을 주는지",
          "when": [
            "임대차 분쟁이 진행 중인 경우",
            "등기·권리관계가 복잡한 경우",
            "계약서와 실제 운영내용이 다른 경우"
          ],
          "prepare": [
            "등기 관련 자료",
            "임대차계약서·특약",
            "통지·분쟁 관련 기록"
          ],
          "confirm": "법률 전문가",
          "apply": "확인 결과를 추가확인 목록과 매수자 대응자료에 반영합니다."
        },
        {
          "topic": "세무·회계 자료",
          "intro": "비용증빙이나 자본적지출처럼 세무판단이 필요한 자료는 단순 운영비와 구분합니다.",
          "check": "어떤 비용자료가 세금·순회수액 근거로 인정·활용될 수 있는지",
          "when": [
            "큰 수선·개선비가 있었던 경우",
            "비용증빙이 불완전한 경우",
            "개인·법인 등 보유구조가 복잡한 경우"
          ],
          "prepare": [
            "장부·증빙",
            "취득·수선 관련 자료",
            "최근 세무자료"
          ],
          "confirm": "세무 전문가",
          "apply": "확인된 자료만 가격을 정하는 단계와 실제 회수자본을 계산하는 단계의 근거로 넘깁니다."
        },
        {
          "topic": "시설·기술 상태",
          "intro": "향후 수선비가 매각판단이나 가격에 영향을 줄 만큼 크다면 기술적 확인이 필요합니다.",
          "check": "주요 설비의 현재 상태와 향후 1~3년 예상 CAPEX",
          "when": [
            "엘리베이터·외벽·옥상 등 큰 비용이 예상될 때",
            "반복고장이 있는 경우",
            "기존 점검기록만으로 상태가 불명확한 경우"
          ],
          "prepare": [
            "최근 점검기록",
            "수선이력",
            "사진·기존 견적"
          ],
          "confirm": "해당 기술 전문가",
          "apply": "확인된 시기와 비용범위를 시설 요약과 CAPEX 목록에 반영합니다."
        },
        {
          "topic": "인허가·행정 확인",
          "intro": "사용현황과 행정자료가 다르다고 의심되면 적합 여부를 사이트가 판정하지 않습니다.",
          "check": "현재 사용현황과 보유 행정자료 사이에 추가확인이 필요한 부분",
          "when": [
            "도면과 실제 사용이 다른 경우",
            "변경 이력이 불명확한 경우",
            "필수 자료를 보유하지 못한 경우"
          ],
          "prepare": [
            "건축물 관련 자료",
            "도면",
            "사용승인·변경자료"
          ],
          "confirm": "관계기관 또는 관련 전문가",
          "apply": "확인 전에는 문제없음으로 표시하지 않고 추가확인 상태를 유지합니다."
        }
      ],
      "expertStatus": {
        "title": "어떤 값이 아직 확인되지 않았습니까?",
        "body": "자료가 완벽해야 다음 단계로 갈 수 있는 것은 아닙니다. 다만 어떤 항목이 확인됐고 무엇이 추가 확인인지 구분할 수 있어야 합니다.",
        "items": [
          "임대차 정합성",
          "공실·미수 원인",
          "향후 CAPEX",
          "권리·인허가",
          "수입·비용 근거"
        ]
      },
      "summary": [
        "가치정리는 관리법을 다시 배우는 단계가 아니라 기존 기록을 매각자료 PACK으로 바꾸는 단계입니다.",
        "계약·행정자료는 해석하지 않고 최신성·정합성·추가확인 상태까지만 표시합니다.",
        "완료된 PACK은 가격을 정하고 매수자 질문에 대응하는 단계의 입력자료가 됩니다."
      ],
      "conclusion": "좋은 가치정리는 건물을 더 좋아 보이게 만드는 일이 아니라, 이미 존재하는 사실과 기록을 매수자가 한 번에 따라갈 수 있게 연결하는 일입니다.",
      "nextId": "pricing",
      "nextName": "03 가격전략",
      "nextPrompt": "정리된 현재 상태를 근거로 목표가격의 설명 범위를 만듭니다."
    },
    {
      "id": "pricing",
      "num": "03",
      "code": "PRICING",
      "name": "가격전략",
      "prompt": "목표가격을 무엇으로 설명할 것인가",
      "lead": "가격전략은 건물의 적정가치를 처음부터 다시 분석하는 페이지가 아닙니다. 이미 확보한 분석근거로 어떤 가격을 제시하고 어디까지 협상할지 정하는 단계입니다.",
      "whyDetails": [
        "건물 분석과 가치정리에서 실거래·수익·공실·CAPEX 근거는 이미 확보했습니다. 여기서는 그 근거를 다시 계산하지 않습니다.",
        "시장에 제시할 가격, 실제로 기대하는 목표가격, 이 아래로는 받지 않겠다는 최소수용가격은 서로 다를 수 있습니다.",
        "세 숫자를 섞으면 문의가 들어올 때마다 기준이 바뀝니다. 공개할 가격과 내부에서 지킬 기준을 분리해야 합니다.",
        "가격만 조정하는 것도 협상의 전부는 아닙니다. 잔금일, 인도시점, 수선범위, 자료제공 범위 같은 가격 외 조건도 함께 정합니다.",
        "핵심은 분석근거 중 무엇을 가격설명에 사용할지 선택하는 것입니다. 그 근거로 제시·하한·조건 전략을 만듭니다."
      ],
      "core": [
        [
          "ANALYSIS에서 확보한 가격근거 중 무엇을 쓸지 선택합니다",
          "유사 실거래, 현재 현금흐름, 공실, 임차인 구조, CAPEX를 새로 분석하지 않습니다. 기존 분석에서 확인된 근거 중 매수자에게 가격을 설명할 때 직접 연결할 항목과 보조자료로 둘 항목을 구분합니다."
        ],
        [
          "시장제시가격을 정합니다",
          "시장에 처음 보여주는 가격은 매수자에게 공개되는 숫자입니다. 비교근거와 자산상태로 설명 가능해야 하며, 단순히 주변 호가보다 높거나 낮게 잡았다는 이유만으로 정하지 않습니다."
        ],
        [
          "목표가격을 따로 둡니다",
          "목표가격은 실제 협상을 통해 기대하는 내부 목표값입니다. 시장제시가격과 같을 수도 있지만 반드시 같을 필요는 없습니다. 문의 반응과 조건을 보더라도 내부 목표를 별도로 관리합니다."
        ],
        [
          "최소수용가격은 내부 의사결정 값으로 관리합니다",
          "최소수용가격은 공개용 숫자가 아니라 매각 목적, 예상 순회수액, 세금·부채, 대체 자본계획을 고려한 내부 하한입니다. 협상 과정에서 감정적으로 바뀌지 않도록 사전에 근거를 적습니다."
        ],
        [
          "가격 외 양보할 조건을 미리 구분합니다",
          "잔금일, 인도시점, 경미한 수선, 자료제공 범위, 일정 조정처럼 가격을 내리지 않고 바꿀 수 있는 조건과 바꾸기 어려운 조건을 미리 구분합니다."
        ],
        [
          "가격을 조정할 때는 ‘근거가 바뀌었는지’ 먼저 봅니다",
          "문의가 적다는 이유 하나로 가격을 즉시 낮추지 않습니다. 시장반응, 새 실거래, 공실 변화, CAPEX 확정, 실사 결과처럼 가격근거가 실제로 달라졌는지 확인한 뒤 제시가격·목표가격·조건을 다시 봅니다."
        ]
      ],
      "method": [
        [
          "가격설명에 쓸 근거를 고릅니다",
          "건물 분석과 가치정리에서 확인된 자료 중 가격설명에 직접 쓸 근거를 추립니다.",
          [
            "유사거래 요약",
            "현재 현금흐름",
            "공실·임차인 핵심",
            "확정된 CAPEX"
          ],
          "분석을 다시 하지 않습니다. 이미 확인된 근거만 사용합니다.",
          "가격설명에 쓸 3~5개 핵심 근거가 정해집니다."
        ],
        [
          "시장제시가격과 목표가격을 분리합니다",
          "공개할 가격과 실제 목표를 따로 기록하고 각각의 근거를 적습니다.",
          [
            "시장제시가격",
            "목표가격",
            "각 가격의 근거",
            "공개/내부 구분"
          ],
          "두 숫자를 같은 의미로 사용하지 않습니다.",
          "시장에 보일 숫자와 내부 목표가 명확히 구분됩니다."
        ],
        [
          "최소수용가격을 내부에서 정합니다",
          "예상 순회수액과 매각 목적을 고려해 이 아래로는 별도 재검토가 필요한 내부 하한을 정합니다.",
          [
            "최소수용가격",
            "세후·부채 영향",
            "매각 목적",
            "재검토 조건"
          ],
          "최소수용가격을 외부 홍보문구처럼 사용하지 않습니다.",
          "협상 중 반드시 다시 판단해야 하는 내부 하한이 정해집니다."
        ],
        [
          "가격 외 조건의 우선순위를 정합니다",
          "가격 대신 조정할 수 있는 조건과 양보하기 어려운 조건을 미리 나눕니다.",
          [
            "잔금일",
            "인도시점",
            "수선범위",
            "자료제공 범위"
          ],
          "모든 조건을 가격 하나로 환산하려 하지 않습니다.",
          "가격 외 협상카드와 금지선이 정리됩니다."
        ],
        [
          "조정 규칙을 정합니다",
          "가격을 바꿀 때 무엇이 바뀌어야 하는지 사전에 정합니다.",
          [
            "시장반응 기간",
            "새 실거래",
            "실사 결과",
            "CAPEX 확정"
          ],
          "문의 몇 건만으로 즉시 가격을 낮추지 않습니다.",
          "가격조정의 근거와 재검토 시점이 기록됩니다."
        ]
      ],
      "signals": [
        "시장제시가격과 목표가격이 구분돼 있지 않습니다.",
        "최소수용가격이 매각 목적과 연결되지 않습니다.",
        "가격을 설명할 핵심 근거가 정리돼 있지 않습니다.",
        "가격 외 양보조건과 비양보조건이 없습니다.",
        "문의 반응만으로 가격을 즉시 바꾸고 있습니다."
      ],
      "readySignals": [
        "시장제시가격·목표가격·최소수용가격이 구분돼 있습니다.",
        "각 가격에 사용할 핵심 근거가 정리돼 있습니다.",
        "가격 외 양보조건과 비양보조건이 구분돼 있습니다.",
        "가격조정의 확인조건과 검토기간이 정해져 있습니다.",
        "최소수용가격 아래에서는 다시 검토하도록 정해져 있습니다."
      ],
      "cases": [
        {
          "label": "CASE A",
          "title": "같은 분석값, 다른 제시전략",
          "situation": "교육용 예시: ANALYSIS에서 유사거래 26~28억원, 현재 현금흐름과 공실, CAPEX가 이미 정리됐다고 가정합니다.",
          "observe": "매도자는 시장제시가격 28.5억원, 목표가격 28억원, 내부 최소수용가격 26.5억원으로 서로 다른 역할의 숫자를 둘 수 있습니다.",
          "judge": "이 사례는 28억원이 적정가라는 결론이 아니라, 같은 분석근거를 공개가격·목표·하한으로 나눠 관리하는 방법을 보여줍니다.",
          "next": "각 가격을 왜 그렇게 두었는지 내부 근거를 기록하고 실제 회수자본 계산과 연결합니다."
        },
        {
          "label": "CASE B",
          "title": "가격 대신 조건을 조정하는 경우",
          "situation": "매수자가 가격 1억원 인하를 요구하지만 매도자는 잔금일을 앞당기거나 경미한 수선범위를 조정할 여지가 있습니다.",
          "observe": "가격만 협상카드로 보면 바로 가격인하로 이어질 수 있지만, 조건을 분리해 두면 다른 조정안을 비교할 수 있습니다.",
          "judge": "가격전략은 숫자 하나가 아니라 가격과 조건의 조합입니다.",
          "next": "바꿀 수 있는 조건과 바꾸지 않을 조건을 다시 확인합니다."
        },
        {
          "label": "CASE C",
          "title": "시장반응이 약할 때 가격을 바로 낮추지 않는 사례",
          "situation": "교육용 예시: 제시가격 28.5억원, 목표 28억원, 최소수용 26.5억원. 4주 동안 문의 3건, 현장방문 1건이 있었고 새 실거래나 CAPEX 변화는 없습니다.",
          "observe": "문의가 적다는 사실은 중요하지만 가격근거 자체가 바뀌었다는 뜻은 아닙니다.",
          "judge": "먼저 노출·타깃·조건·설명자료를 점검한 뒤, 시장근거가 실제로 달라졌을 때 가격조정을 검토합니다.",
          "next": "조정 규칙에 따라 재검토 시점과 변경근거를 기록합니다."
        }
      ],
      "questions": [
        {
          "q": "시장에 보여줄 가격과 실제 목표가격을 구분했는가?",
          "why": "공개값과 내부 목표를 섞으면 협상기준이 흔들립니다.",
          "next": "두 숫자를 따로 기록하고 각각의 근거를 한 줄로 적습니다."
        },
        {
          "q": "최소수용가격은 어떤 자본목적과 연결돼 있는가?",
          "why": "하한은 감정이 아니라 매각 목적과 순회수액에 연결돼야 합니다.",
          "next": "실제 회수자본의 예상 범위와 매각 후 자본계획을 다시 확인합니다."
        },
        {
          "q": "가격을 설명할 핵심 근거를 3~5개로 줄였는가?",
          "why": "모든 분석자료를 다시 설명하는 대신 핵심 근거만 제시해야 합니다.",
          "next": "건물 분석과 가치정리 자료에서 직접 가격과 연결되는 근거만 고릅니다."
        },
        {
          "q": "가격 대신 조정할 수 있는 조건이 무엇인가?",
          "why": "협상카드가 가격 하나뿐이면 불필요한 가격인하로 이어질 수 있습니다.",
          "next": "잔금일·인도·수선·자료범위를 나눠 양보 가능 여부를 표시합니다."
        },
        {
          "q": "최소수용가격 아래 제안이 들어오면 무엇을 다시 확인할 것인가?",
          "why": "내부 하한은 자동 거절값이 아니라 재검토를 시작하는 기준입니다.",
          "next": "순회수액·매각목적·대체자본계획을 다시 비교합니다."
        },
        {
          "q": "가격을 조정할 조건과 시점을 미리 정했는가?",
          "why": "문의 몇 건에 따라 즉흥적으로 가격을 바꾸는 것을 줄입니다.",
          "next": "시장반응 기간과 근거 변화 조건을 기록합니다."
        }
      ],
      "experts": [
        {
          "topic": "시장 설명 가능성",
          "intro": "중개사에게 가격을 대신 정해 달라는 것이 아니라 현재 제시가격이 시장에서 어떤 근거로 설명되는지 확인합니다.",
          "check": "현재 제시가격과 비교근거가 실제 매수자에게 설명 가능한지",
          "when": [
            "유사거래가 적을 때",
            "문의 반응과 분석근거가 크게 다를 때",
            "특수한 임차·용도 구조가 있을 때"
          ],
          "prepare": [
            "ANALYSIS 비교근거",
            "임대·공실 요약",
            "CAPEX 요약"
          ],
          "confirm": "공인중개사 등 시장 실무자",
          "apply": "시장반응은 가격조정의 단독 근거가 아니라 재검토 자료로 사용합니다."
        },
        {
          "topic": "객관적 가치 의견",
          "intro": "특수자산이나 객관적 평가의견이 필요한 경우에 한해 별도 확인합니다.",
          "check": "내부 가격근거와 객관적 평가 사이의 차이",
          "when": [
            "유사거래가 매우 적을 때",
            "담보·평가 목적이 함께 있을 때",
            "가격근거를 객관적으로 보강할 필요가 있을 때"
          ],
          "prepare": [
            "자산자료",
            "수익자료",
            "권리자료"
          ],
          "confirm": "필요 시 감정평가 관련 전문가",
          "apply": "평가의견은 시장제시가격을 자동 확정하는 값이 아니라 근거 중 하나로 반영합니다."
        },
        {
          "topic": "세후 하한 확인",
          "intro": "최소수용가격이 실제 회수자본과 맞는지 세후 관점에서 확인할 필요가 있습니다.",
          "check": "특정 가격에서 예상 순회수액이 내부 하한과 맞는지",
          "when": [
            "세금 영향이 큰 경우",
            "보유구조가 복잡한 경우",
            "최소수용가격이 촘촘한 경우"
          ],
          "prepare": [
            "취득·보유자료",
            "예상 가격범위",
            "부채자료"
          ],
          "confirm": "세무 전문가",
          "apply": "확인 결과는 실제 회수자본과 최소수용가격 재검토에 사용합니다."
        },
        {
          "topic": "조건의 법률적 영향",
          "intro": "가격 외 조건이 법률적 의무나 위험을 바꿀 수 있다면 그 의미를 스스로 확정하지 않습니다.",
          "check": "잔금일·인도·수선·자료제공 등 조건 변경의 법률적 영향",
          "when": [
            "조건 협상이 복잡해질 때",
            "계약문구 변경이 필요한 경우",
            "권리·임대차 이슈와 조건이 연결될 때"
          ],
          "prepare": [
            "협상조건 목록",
            "계약초안·관련자료"
          ],
          "confirm": "법률 전문가",
          "apply": "법률 확인이 필요한 조건은 가격협상 카드와 별도로 표시합니다."
        }
      ],
      "expertStatus": {
        "title": "가격전략에서 아직 확인이 필요한 것은 무엇입니까?",
        "body": "가격을 정답처럼 확정하는 것이 목적이 아닙니다. 공개가격·내부목표·하한·조건 중 무엇이 근거가 충분하고 무엇이 추가확인인지 구분합니다.",
        "items": [
          "시장제시가격 근거",
          "목표가격",
          "최소수용가격",
          "가격 외 조건",
          "조정 규칙"
        ]
      },
      "summary": [
        "가격전략은 가격을 다시 분석하는 페이지가 아니라 기존 분석근거를 매도전략으로 바꾸는 단계입니다.",
        "시장제시가격·목표가격·최소수용가격은 서로 다른 역할의 숫자입니다.",
        "가격 외 조건과 가격조정 규칙까지 정해야 협상기준이 흔들리지 않습니다."
      ],
      "conclusion": "분석값을 다시 계산하는 것보다 중요한 것은, 어떤 가격을 왜 제시하고 어디까지 어떤 조건으로 협상할지 미리 정하는 것입니다.",
      "nextId": "buyer-readiness",
      "nextName": "04 매수자 준비",
      "nextPrompt": "가격근거와 정리된 자료를 매수자의 실제 질문에 연결합니다."
    },
    {
      "id": "buyer-readiness",
      "num": "04",
      "code": "BUYER READY",
      "name": "매수자 준비",
      "prompt": "매수자는 무엇을 확인하고 어디에서 의문을 가지는가",
      "lead": "매수자 준비는 가치정리 자료를 다시 설명하는 단계가 아닙니다. 질문이 들어왔을 때 어떤 자료로 답하고 무엇을 추가확인으로 넘길지 정하는 실사 Q&A 단계입니다.",
      "whyDetails": [
        "자료가 잘 정리돼 있어도 질문과 자료가 연결되지 않으면 같은 설명을 반복하게 됩니다.",
        "보증금 총액이나 향후 수선비를 물었을 때 첫 답변자료와 근거자료가 바로 연결돼야 합니다.",
        "권리·계약·인허가처럼 법률 판단이 필요한 질문은 직접 답하지 않습니다. 확인된 사실까지만 답합니다.",
        "판단이 필요한 질문은 계약 확인 단계나 전문가 확인 경로로 넘깁니다. 누가 확인할지도 함께 정합니다.",
        "이 단계의 결과물은 자료 PACK이 아니라 질문별 응답표입니다. 질문·자료·추가확인·담당자·상태가 한 줄로 연결돼야 합니다."
      ],
      "core": [
        [
          "매수자의 질문을 먼저 목록으로 만듭니다",
          "임대차·수익·공실·시설·CAPEX·권리·인허가·정산처럼 자주 나올 질문을 먼저 작성합니다. 자료가 무엇인지 다시 배우는 것이 아니라 어떤 질문이 들어올지를 기준으로 준비합니다."
        ],
        [
          "질문마다 ‘첫 답변자료’를 하나 지정합니다",
          "보증금 질문에는 최신 임대차 요약표, 최근 수익 질문에는 12개월 수입·비용 요약처럼 처음 보여줄 자료를 하나 정합니다. 여러 파일을 한꺼번에 보내지 않고 질문에 맞는 첫 자료를 고릅니다."
        ],
        [
          "첫 답변자료에 근거자료를 연결합니다",
          "요약표 숫자를 계약서·입금기록·점검자료·견적 같은 근거에 연결합니다. 매수자가 더 확인하고 싶을 때 바로 다음 근거로 이어질 수 있어야 합니다."
        ],
        [
          "직접 답할 사실과 전문가 확인이 필요한 질문을 분리합니다",
          "현재 보증금 합계처럼 자료로 확인된 사실은 직접 설명할 수 있지만, 권리의 법률효과·인허가 적합성처럼 판단이 필요한 질문은 스스로 결론 내리지 않습니다."
        ],
        [
          "미확인 질문은 담당자와 기한을 붙입니다",
          "모르는 질문을 임의로 답하는 대신 추가확인으로 표시하고 누가 언제 확인할지 지정합니다. 미확인 상태를 관리하는 것이 실사 속도를 좌우합니다."
        ],
        [
          "질문과 답변의 버전을 관리합니다",
          "같은 질문에 답변이 바뀌지 않도록 요청일, 답변일, 사용자료, 추가자료, 완료상태를 기록합니다. 실사 대응의 핵심은 답변의 일관성과 추적 가능성입니다."
        ]
      ],
      "method": [
        [
          "예상 질문을 만듭니다",
          "가치정리에서 만든 PACK을 보면서 매수자가 물을 질문을 먼저 적습니다.",
          [
            "임대차 질문",
            "수익·공실 질문",
            "시설·CAPEX 질문",
            "권리·인허가 질문"
          ],
          "자료목록을 다시 만드는 단계가 아닙니다. 질문 중심으로 시작합니다.",
          "핵심 질문 목록이 완성됩니다."
        ],
        [
          "첫 답변자료와 근거를 연결합니다",
          "각 질문 옆에 처음 보여줄 요약자료와 그 근거자료를 붙입니다.",
          [
            "첫 답변자료",
            "근거자료",
            "기준일",
            "자료위치"
          ],
          "한 질문에 파일 여러 개를 무작정 연결하지 않습니다.",
          "질문마다 첫 자료와 근거가 지정됩니다."
        ],
        [
          "미확인·불일치를 표시합니다",
          "자료가 서로 다르거나 바로 답할 수 없는 질문은 추가확인 상태로 분리합니다.",
          [
            "불일치 내용",
            "추가자료",
            "확인 필요 여부",
            "우선순위"
          ],
          "모르는 내용을 추측해 답하지 않습니다.",
          "미확인 질문이 별도 목록으로 관리됩니다."
        ],
        [
          "담당자와 확인경로를 지정합니다",
          "법률·세무·기술·내부관리 등 누가 답할지 정합니다.",
          [
            "담당자",
            "전문가/기관",
            "필요자료",
            "목표 확인일"
          ],
          "모든 질문을 소유자가 직접 답하려 하지 않습니다.",
          "각 미확인 질문에 담당자와 경로가 붙습니다."
        ],
        [
          "답변 이력을 관리합니다",
          "질문·답변·추가자료·완료상태를 기록해 같은 질문에 다른 답이 나오지 않게 합니다.",
          [
            "요청일",
            "답변일",
            "답변내용",
            "상태"
          ],
          "구두답변만 남기지 않습니다.",
          "질문별 최신 답변과 상태를 한눈에 볼 수 있습니다."
        ]
      ],
      "signals": [
        "같은 질문에 담당자마다 답변이 다릅니다.",
        "첫 답변자료가 정해져 있지 않습니다.",
        "요약 숫자와 근거자료가 일치하지 않습니다.",
        "전문가 확인이 필요한 질문에 즉답하고 있습니다.",
        "추가확인의 담당자와 일정이 정해져 있지 않습니다."
      ],
      "readySignals": [
        "핵심 질문마다 첫 답변자료가 정해져 있습니다.",
        "요약 숫자에서 근거자료까지 바로 연결할 수 있습니다.",
        "직접 답할 사실과 전문가 확인 질문이 구분돼 있습니다.",
        "미확인 질문마다 담당자와 확인경로가 있습니다.",
        "질문·답변·추가자료의 최신 상태를 추적할 수 있습니다."
      ],
      "cases": [
        {
          "label": "CASE A",
          "title": "질문과 자료가 바로 연결된 경우",
          "situation": "매수자가 ‘현재 보증금 총액이 얼마인가’라고 질문합니다.",
          "observe": "첫 답변자료로 최신 임대차 요약표를 보여주고, 필요하면 임차인별 계약서 근거까지 바로 연결합니다.",
          "judge": "자료가 많아서 좋은 것이 아니라 질문의 답과 근거가 한 경로로 연결돼 있어 실사가 끊기지 않습니다.",
          "next": "다음 질문도 같은 방식으로 Q&A 표에 기록합니다."
        },
        {
          "label": "CASE B",
          "title": "답변이 계속 바뀌는 경우",
          "situation": "시설비 질문에 소유자는 ‘큰 비용 없음’, 관리자는 ‘엘리베이터 견적 있음’이라고 답합니다.",
          "observe": "같은 질문에 다른 답이 나오면 매수자는 추가 확인을 반복하고 다른 자료까지 의심할 수 있습니다.",
          "judge": "중요한 것은 좋은 답을 만드는 것이 아니라 확인된 사실과 미확인 상태를 하나로 통일하는 것입니다.",
          "next": "점검자료와 견적을 확인하고 Q&A의 최신답변을 한 버전으로 갱신합니다."
        },
        {
          "label": "CASE C",
          "title": "미확인 질문을 관리하는 경우",
          "situation": "교육용 예시: 예상 질문 24개 중 18개는 답변 완료, 법률 2개·시설 3개·세무 1개 등 6개가 추가확인 상태입니다.",
          "observe": "미확인 6개가 있다는 사실보다 각각 담당자·필요자료·목표 확인일이 붙어 있는지가 중요합니다.",
          "judge": "실사 준비의 완료는 모든 질문을 즉답하는 상태가 아니라 미확인 질문까지 관리되는 상태입니다.",
          "next": "확인 완료 시 답변버전과 근거자료를 갱신합니다."
        }
      ],
      "questions": [
        {
          "q": "핵심 질문마다 첫 답변자료가 하나씩 정해져 있는가?",
          "why": "자료가 있어도 질문과 연결되지 않으면 실사 때 다시 찾아야 합니다.",
          "next": "질문별 첫 자료를 하나씩 지정합니다."
        },
        {
          "q": "첫 답변자료의 숫자에서 근거자료까지 바로 갈 수 있는가?",
          "why": "요약만 있고 근거가 없으면 추가 질문이 반복됩니다.",
          "next": "계약서·입금·점검자료 위치를 연결합니다."
        },
        {
          "q": "직접 답할 사실과 전문가가 답해야 할 판단을 구분했는가?",
          "why": "법률·세무·기술 판단을 임의로 답하는 위험을 줄입니다.",
          "next": "판단질문은 담당 전문가와 필요자료를 지정합니다."
        },
        {
          "q": "현재 추가확인 상태인 질문이 몇 개인가?",
          "why": "미확인 항목을 숫자로 알아야 실사를 관리할 수 있습니다.",
          "next": "미확인 목록을 별도로 만들고 우선순위를 붙입니다."
        },
        {
          "q": "각 미확인 질문의 담당자와 목표 확인일이 있는가?",
          "why": "담당자가 없으면 같은 질문이 계속 미뤄집니다.",
          "next": "내부담당·전문가·관계기관 중 확인경로를 지정합니다."
        },
        {
          "q": "같은 질문의 최신 답변이 하나로 관리되는가?",
          "why": "답변 버전이 여러 개면 신뢰가 떨어집니다.",
          "next": "Q&A 표에 최신답변과 이전변경 이력을 기록합니다."
        }
      ],
      "experts": [
        {
          "topic": "법률·인허가 질문 담당",
          "intro": "권리·계약·인허가의 의미를 여기서 설명하지 않고 어떤 질문을 전문가에게 넘길지만 정합니다.",
          "check": "직접 답하면 안 되는 법률·행정 판단 질문",
          "when": [
            "권리효과를 묻는 질문",
            "계약문구 해석 질문",
            "인허가 적합성 질문"
          ],
          "prepare": [
            "관련 계약·등기·행정자료",
            "매수자 질문 원문"
          ],
          "confirm": "법률 전문가 / 관계기관",
          "apply": "Q&A 표에 담당자와 확인상태만 반영합니다."
        },
        {
          "topic": "세무·재무 질문 담당",
          "intro": "수입·비용·세금 숫자의 해석이 필요한 질문은 자료와 함께 담당 전문가에게 넘깁니다.",
          "check": "세무적 해석이 필요한 질문의 범위",
          "when": [
            "세금 영향 질문",
            "비용처리 질문",
            "자본적 지출 해석 질문"
          ],
          "prepare": [
            "장부·증빙",
            "질문과 관련된 요약표"
          ],
          "confirm": "세무 전문가",
          "apply": "확인된 답변과 근거자료 위치를 Q&A 표에 기록합니다."
        },
        {
          "topic": "시설 질문 담당",
          "intro": "시설상태를 단정하지 않고 기술판단이 필요한 질문을 구분합니다.",
          "check": "현장 확인이나 기술 판단이 필요한 시설 질문",
          "when": [
            "하자 여부 질문",
            "CAPEX 규모 확인",
            "점검자료만으로 결론이 어려운 경우"
          ],
          "prepare": [
            "점검자료",
            "수선이력",
            "사진·견적"
          ],
          "confirm": "해당 기술 전문가",
          "apply": "기술답변을 최신 Q&A 버전에 연결합니다."
        },
        {
          "topic": "가격 질문 담당",
          "intro": "매수자가 가격근거의 객관성을 묻는 경우 가격전략 자료와 시장확인 경로를 연결합니다.",
          "check": "가격근거에 대한 추가 확인이 필요한 질문",
          "when": [
            "비교사례 근거를 요구할 때",
            "제시가격 산정근거를 묻는 경우",
            "특수자산 가격질문"
          ],
          "prepare": [
            "가격전략 요약",
            "비교근거 자료"
          ],
          "confirm": "시장 실무자 / 필요 시 가치평가 전문가",
          "apply": "가격을 재분석하지 않고 질문에 필요한 근거만 연결합니다."
        }
      ],
      "expertStatus": {
        "title": "누가 답해야 하는 질문인지 정했습니까?",
        "body": "모든 질문을 소유자가 직접 답할 필요는 없습니다. 확인된 사실은 직접 답하고, 판단이 필요한 질문은 담당 전문가와 확인경로를 지정합니다.",
        "items": [
          "직접 답변 가능",
          "법률·인허가",
          "세무·재무",
          "시설·기술",
          "가격·가치"
        ]
      },
      "summary": [
        "매수자 준비는 자료를 다시 설명하는 단계가 아니라 질문과 자료를 연결하는 실사 Q&A 시스템입니다.",
        "확인된 사실과 전문가가 판단해야 할 질문을 분리합니다.",
        "미확인 질문도 담당자·확인경로·상태가 있으면 관리할 수 있습니다."
      ],
      "conclusion": "좋은 실사 준비는 모든 질문에 즉답하는 것이 아니라, 질문마다 근거와 확인경로가 끊기지 않게 연결된 상태입니다.",
      "nextId": "net-proceeds",
      "nextName": "05 순회수액",
      "nextPrompt": "거래가격에서 실제로 회수 가능한 자본을 계산합니다."
    },
    {
      "id": "net-proceeds",
      "num": "05",
      "code": "NET PROCEEDS",
      "name": "순회수액",
      "prompt": "매각가격에서 실제로 얼마가 남는가",
      "lead": "순회수액은 지급절차를 다시 설명하는 단계가 아닙니다. 실제 계약가격에서 차감항목을 빼고, 확정값과 추정값을 나눠 실제 회수자본의 범위를 보는 단계입니다.",
      "whyDetails": [
        "가격전략에서 정한 목표가격은 여기서 다시 다루지 않습니다. 실제 계약가격이나 현실적인 매각대금 범위를 시작값으로 둡니다.",
        "대출상환, 세금, 거래비용, 보증금·관리비 정산은 거래절차가 아니라 차감항목으로 봅니다.",
        "누가 언제 지급하는지 같은 상세 계약절차는 계약 확인과 최종 종료·인계 단계로 넘깁니다.",
        "모든 숫자에는 CONFIRMED, ESTIMATED, TO CHECK 상태를 붙입니다. 서로 다른 확정수준을 한 숫자처럼 섞지 않습니다.",
        "현재 확인된 최소 회수액과 예상범위를 나누어 봅니다. 아직 모르는 값은 별도의 확인항목으로 남깁니다."
      ],
      "core": [
        [
          "실제 계약가격을 시작값으로 둡니다",
          "가격전략에서 정한 목표가격을 다시 설명하지 않습니다. 계약이 확정됐다면 실제 매각대금을, 확정 전이라면 현실적인 가격범위를 시작값으로 두고 상태를 표시합니다."
        ],
        [
          "부채는 ‘실제 상환예정액’만 차감합니다",
          "대출잔액만 보는 대신 금융기관 확인이 필요한 중도상환비용·이자정산 등을 포함한 실제 상환예정액을 차감항목으로 둡니다. 상환절차 자체는 여기서 다루지 않습니다."
        ],
        [
          "세금은 ESTIMATED와 CONFIRMED를 구분합니다",
          "전문가 확인 전 예상세금은 추정값으로 두고, 확인된 세액·비용과 섞지 않습니다. 세금 계산법을 가르치지 않고 회수자본에 미치는 영향만 봅니다."
        ],
        [
          "거래비용은 항목별 차감값으로 분리합니다",
          "중개·법무 등 거래비용은 기타 한 줄로 묶지 않고 각각 금액과 확인상태를 둡니다. 법적 지급절차나 수수료 규정 설명은 별도 확인으로 넘깁니다."
        ],
        [
          "보증금·관리비·미수/선수는 최종 정산예정액만 반영합니다",
          "정산 방법을 다시 설명하지 않고 잔금 기준으로 실제 차감·승계될 금액과 미확정 금액만 계산에 넣습니다. 최종 확정은 종료·인계 단계에서 완료상태로 확인합니다."
        ],
        [
          "모든 숫자에 상태를 붙여 회수범위를 만듭니다",
          "CONFIRMED는 확인된 값, ESTIMATED는 현재 추정값, TO CHECK는 아직 확인이 필요한 값입니다. 상태별로 분리하면 현재 확인된 회수액과 예상 회수액을 동시에 볼 수 있습니다."
        ]
      ],
      "method": [
        [
          "시작값을 정합니다",
          "실제 계약가격 또는 현실적인 가격범위를 입력하고 상태를 표시합니다.",
          [
            "매각대금",
            "확정/추정 상태",
            "수령예정 총액",
            "기준일"
          ],
          "목표가격을 그대로 확정값처럼 사용하지 않습니다.",
          "회수액 계산의 시작값과 상태가 정해집니다."
        ],
        [
          "부채 차감값을 확인합니다",
          "금융기관 기준 실제 상환예정액을 입력합니다.",
          [
            "대출잔액",
            "중도상환비용",
            "이자정산",
            "확인처"
          ],
          "대출잔액만 빼고 끝내지 않습니다.",
          "부채 차감값이 CONFIRMED 또는 TO CHECK로 구분됩니다."
        ],
        [
          "세금·거래비용을 상태별로 넣습니다",
          "세금과 중개·법무 등 비용을 항목별로 입력합니다.",
          [
            "예상세금",
            "중개비용",
            "법무비용",
            "확정상태"
          ],
          "추정세금을 확정값처럼 더하지 않습니다.",
          "각 비용의 금액과 상태가 표시됩니다."
        ],
        [
          "정산예정액을 반영합니다",
          "보증금·관리비·미수·선수 등 종료 시 차감·승계될 금액을 넣습니다.",
          [
            "보증금",
            "관리비",
            "미수·선수",
            "기준일"
          ],
          "정산 절차를 여기서 재교육하지 않습니다.",
          "정산예정액과 미확정 항목이 구분됩니다."
        ],
        [
          "최소 확인치와 예상범위를 나눕니다",
          "CONFIRMED 값만 반영한 현재 확인치와 ESTIMATED까지 반영한 예상범위를 따로 계산합니다.",
          [
            "확정 차감합계",
            "추정 차감합계",
            "TO CHECK 목록",
            "예상 순회수액"
          ],
          "하나의 숫자로 확정됐다고 표현하지 않습니다.",
          "현재 확인치·예상범위·미확인 목록이 동시에 보입니다."
        ]
      ],
      "signals": [
        "매각가격을 그대로 회수자본으로 보고 있습니다.",
        "실제 대출상환액이 아직 확인되지 않았습니다.",
        "예상 세금을 확정값처럼 사용하고 있습니다.",
        "보증금·관리비 등 정산항목이 빠져 있습니다.",
        "확정값·추정값·미확인값이 섞여 있습니다."
      ],
      "readySignals": [
        "계약상 매각대금과 지급일정이 확인돼 있습니다.",
        "실제 대출상환액의 확인상태가 표시돼 있습니다.",
        "세금·거래비용이 항목별로 분리돼 있습니다.",
        "정산항목마다 기준일과 확인상태가 있습니다.",
        "최소 회수액·예상범위·미확인값을 따로 볼 수 있습니다."
      ],
      "cases": [
        {
          "label": "CASE A",
          "title": "같은 매각가, 다른 대출",
          "situation": "두 건물 모두 20억원에 매각되지만 A의 실제 대출상환액은 5억원, B는 11억원입니다.",
          "observe": "세금과 거래비용이 같아도 대출만으로 회수자본 차이가 6억원 발생합니다.",
          "judge": "매각가격이 같다는 사실만으로 거래결과를 비교할 수 없습니다.",
          "next": "대출상환액을 금융기관 확인값으로 바꾸고 나머지 차감항목을 이어서 반영합니다."
        },
        {
          "label": "CASE B",
          "title": "세금과 정산이 큰 경우",
          "situation": "매각가격은 높지만 예상세금과 임차인 보증금·기타 정산 규모가 큽니다.",
          "observe": "호가나 계약가격이 높아도 실제 다음 투자에 사용할 수 있는 자본은 예상보다 작을 수 있습니다.",
          "judge": "가격전략의 성공과 회수자본의 규모는 같은 지표가 아닙니다.",
          "next": "세금과 정산의 확정상태를 분리해 최소 회수액과 예상범위를 다시 봅니다."
        },
        {
          "label": "CASE C",
          "title": "확정값과 추정값을 나누는 숫자 예시",
          "situation": "교육용 예시: 매각 25억 - 금융기관 확인 대출상환 8억 - 거래비용 0.3억 - 보증금·기타정산 3.5억 = 세금 반영 전 13.2억원입니다. 예상세금 2.2억원을 반영하면 약 11억원입니다.",
          "observe": "25억, 8억, 0.3억, 3.5억이 확인됐더라도 세금 2.2억이 아직 추정이라면 11억원 전체를 최종 확정액으로 부르면 안 됩니다.",
          "judge": "이 예시는 확정된 구조와 아직 바뀔 수 있는 값을 분리해서 보는 방법을 보여줍니다.",
          "next": "세무확인 후 예상세금을 업데이트하고 종료·인계 단계에서 잔금일 실제 정산값을 최종 반영합니다."
        }
      ],
      "questions": [
        {
          "q": "실제 계약상 매각대금과 지급일정을 알고 있는가?",
          "why": "현금유입의 기준점을 확인합니다.",
          "next": "계약조건이 미확정이면 가격전략의 목표가와 구분해 대기상태로 둡니다."
        },
        {
          "q": "금융기관이 확인한 실제 상환액은 얼마인가?",
          "why": "대출잔액만으로는 실제 차감액을 알 수 없습니다.",
          "next": "중도상환·이자정산까지 금융기관에 확인합니다."
        },
        {
          "q": "세금은 확인값인가 추정값인가?",
          "why": "회수자본의 불확실성을 구분하기 위한 질문입니다.",
          "next": "추정이면 세무확인 전까지 예상범위로 표시합니다."
        },
        {
          "q": "중개·법무 등 거래비용을 항목별로 적었는가?",
          "why": "기타비용 한 줄에 숨어 있는 누락을 줄입니다.",
          "next": "비용항목마다 금액과 확인처를 붙입니다."
        },
        {
          "q": "보증금·관리비·미수/선수의 정산 기준일을 알고 있는가?",
          "why": "잔금일 전후로 바뀔 수 있는 숫자를 구분합니다.",
          "next": "정산표에 기준일과 부담주체를 기록합니다."
        },
        {
          "q": "최소 확인 회수액과 예상 회수범위를 구분했는가?",
          "why": "다음 자본계획을 과대추정하지 않기 위한 질문입니다.",
          "next": "확정값만으로 최소치를 계산하고 추정값은 별도 시나리오로 둡니다."
        }
      ],
      "experts": [
        {
          "topic": "세금 숫자 확인",
          "intro": "세금 계산법을 다시 배우지 않고 현재 추정값을 실제 회수자본에 쓸 수 있는 수준으로 확인합니다.",
          "check": "예상세금의 범위와 확정 여부",
          "when": [
            "세금 영향이 큰 경우",
            "보유구조가 복잡한 경우",
            "추정치 변동폭이 큰 경우"
          ],
          "prepare": [
            "취득·보유·매각자료",
            "현재 순회수액표"
          ],
          "confirm": "세무 전문가",
          "apply": "ESTIMATED 또는 CONFIRMED 상태와 금액을 갱신합니다."
        },
        {
          "topic": "실제 상환액 확인",
          "intro": "대출상환 절차가 아니라 실제 차감될 금융금액을 확인합니다.",
          "check": "잔액·중도상환·이자정산을 포함한 실제 상환예정액",
          "when": [
            "대출이 있는 경우",
            "중도상환 비용이 있는 경우",
            "잔금일 이자정산이 필요한 경우"
          ],
          "prepare": [
            "대출약정",
            "잔액자료",
            "예상 잔금일"
          ],
          "confirm": "금융기관",
          "apply": "부채 항목의 상태를 CONFIRMED 또는 TO CHECK로 갱신합니다."
        },
        {
          "topic": "거래비용 확인",
          "intro": "중개·법무 등 거래비용의 절차가 아니라 실제 차감액을 확인합니다.",
          "check": "각 거래비용의 실제 금액과 확정상태",
          "when": [
            "비용견적이 아직 없을 때",
            "계약조건에 따라 비용이 달라질 때"
          ],
          "prepare": [
            "거래조건",
            "견적·계약자료"
          ],
          "confirm": "해당 중개·법무 담당",
          "apply": "비용을 항목별로 순회수액표에 반영합니다."
        },
        {
          "topic": "내부 정산 숫자 확인",
          "intro": "보증금·미수·선수·관리비 계산방법이 아니라 최종 차감 또는 승계 예정액을 확인합니다.",
          "check": "정산예정액과 미확정 차이",
          "when": [
            "내부기록이 서로 다를 때",
            "기준일이 바뀔 때",
            "보증금 합계가 불일치할 때"
          ],
          "prepare": [
            "임대차표",
            "입금기록",
            "정산초안"
          ],
          "confirm": "내부 회계·관리 담당 / 필요 시 전문가",
          "apply": "정산항목을 CONFIRMED / ESTIMATED / TO CHECK로 구분합니다."
        }
      ],
      "expertStatus": {
        "title": "어떤 숫자가 확정이고 어떤 숫자가 추정입니까?",
        "body": "순회수액을 하나의 확정값처럼 보지 않습니다. 각 차감항목의 금액과 확인상태를 따로 관리합니다.",
        "items": [
          "매각대금",
          "실제 상환액",
          "세금",
          "거래비용",
          "정산예정액"
        ]
      },
      "summary": [
        "순회수액은 거래절차가 아니라 실제 회수자본을 계산하는 단계입니다.",
        "각 숫자는 CONFIRMED / ESTIMATED / TO CHECK로 구분합니다.",
        "최종 정산·인계가 끝나기 전까지는 현재 확인치와 예상범위를 함께 봅니다."
      ],
      "conclusion": "매각가격보다 중요한 것은 모든 차감항목의 상태를 구분한 뒤 실제로 다음 의사결정에 사용할 수 있는 자본이 얼마인지 아는 것입니다.",
      "nextId": "closing",
      "nextName": "06 종료·인계",
      "nextPrompt": "예상 회수액을 실제 잔금·정산·인계의 완료상태로 바꿉니다."
    },
    {
      "id": "closing",
      "num": "06",
      "code": "CLOSING",
      "name": "종료·인계",
      "prompt": "계약 이후 무엇까지 끝내야 EXIT가 완료되는가",
      "lead": "종료·인계는 잔금과 소유권이전 절차를 다시 배우는 단계가 아닙니다. 거래 이후에도 소유자에게 남은 운영 책임과 접근권한을 완전히 닫는 마지막 단계입니다.",
      "whyDetails": [
        "잔금이 끝나도 이전 소유자에게 CCTV 계정이나 열쇠·카드가 남아 있다면 운영관계는 끝난 것이 아닙니다.",
        "관리업체가 계속 이전 소유자에게 연락하거나 자동이체가 유지되는 경우도 같습니다. 법적 종료와 운영 종료를 따로 확인해야 합니다.",
        "보증금·관리비·대출 같은 숫자의 계산은 실제 회수자본을 계산하는 단계에서 끝냅니다.",
        "여기서는 그 값이 최종 확정됐는지와 인계받을 사람, 완료상태가 기록됐는지만 확인합니다.",
        "완료 기준은 잔금 자체가 아니라 잔여 책임이 없는 상태입니다. 운영·접근·기록 관계를 끝까지 닫습니다."
      ],
      "core": [
        [
          "법적 클로징은 ‘완료 여부’만 확인합니다",
          "잔금·소유권이전·담보정리의 절차를 다시 설명하지 않습니다. 계약 확인 단계와 관계기관을 통해 확인해야 할 항목으로 두고, 이 페이지에서는 완료/미완료 상태와 담당자만 확인합니다."
        ],
        [
          "정산도 계산이 아니라 최종 확정상태를 봅니다",
          "순회수액에서 예상한 대출·세금·보증금·관리비 정산이 실제로 어떤 값으로 확정됐는지 확인합니다. 금액 계산보다 미확정 정산이 남아 있는가를 보는 단계입니다."
        ],
        [
          "열쇠·카드·설비 접근권한이 남아 있는지 확인합니다",
          "열쇠, 출입카드, 주차리모컨, 계량기·설비 접근수단 등 이전 소유자가 물리적으로 갖고 있는 항목을 목록으로 만들어 수령자와 완료상태를 기록합니다."
        ],
        [
          "디지털 계정과 관리권한을 이전·해제합니다",
          "CCTV, 출입통제, IoT, 관리앱, 원격설비, 업체포털 등 이전 소유자에게 남아 있는 계정·권한을 확인해 이전·해제하고 개인계정과 공용계정을 분리합니다."
        ],
        [
          "관리업체·자동이체·연락관계를 종료합니다",
          "청소·경비·승강기·소방·통신·보험·공과금·관리업체 등 기존 소유자 명의의 자동이체와 연락관계를 확인해 변경·해지·인계 상태를 기록합니다."
        ],
        [
          "개인정보와 보관자료, 잔여업무를 마지막으로 정리합니다",
          "임차인 연락처·신분자료 등 불필요한 개인정보를 남기지 않고, 세금·계약·정산·인계 확인자료 중 보관할 것과 삭제할 것을 분리합니다. 마지막에는 미완료 업무가 0건인지 확인합니다."
        ]
      ],
      "method": [
        [
          "법적·금융 완료상태를 확인합니다",
          "세부절차를 다시 수행하는 것이 아니라 관계기관·담당자를 통해 완료 여부만 확인합니다.",
          [
            "잔금 완료",
            "금융상환 확인",
            "권리·서류 처리상태",
            "담당자"
          ],
          "법률적 완료 여부를 사이트 내용만으로 판단하지 않습니다.",
          "법적·금융 항목이 완료 또는 추가확인으로 표시됩니다."
        ],
        [
          "최종 정산값을 잠급니다",
          "순회수액에서 추정했던 금액이 실제로 확정됐는지 확인하고 미확정 항목을 남깁니다.",
          [
            "보증금",
            "관리비",
            "미수·선수",
            "기타 정산"
          ],
          "정산 계산법을 다시 하지 않습니다.",
          "모든 정산항목이 확정 또는 추가확인 상태가 됩니다."
        ],
        [
          "물리적 인계를 끝냅니다",
          "열쇠·카드·리모컨·설비 접근수단과 필요한 운영자료를 수령자 기준으로 인계합니다.",
          [
            "열쇠",
            "출입카드",
            "주차·설비 접근",
            "수령확인"
          ],
          "전달했다가 아니라 누가 수령했는지 기록합니다.",
          "물리 인계 목록의 미완료가 0건입니다."
        ],
        [
          "디지털·업체관계를 종료합니다",
          "계정·권한·자동이체·업체연락을 이전·해지·변경합니다.",
          [
            "CCTV/IoT",
            "관리앱",
            "자동이체",
            "업체 연락처"
          ],
          "개인 로그인정보를 그대로 넘기지 않습니다.",
          "이전 소유자 명의의 운영권한·연락관계가 남지 않습니다."
        ],
        [
          "기록을 보관하고 잔여업무 0건을 확인합니다",
          "보관자료와 삭제자료를 분리하고, 마지막 미완료 항목을 하나씩 닫습니다.",
          [
            "보관자료",
            "삭제할 개인정보",
            "미완료 업무",
            "최종 회수자본"
          ],
          "법정 보관기간은 국가·거래조건에 따라 별도 확인합니다.",
          "잔여 책임·권한·업무 목록이 0건이거나 명확한 후속담당자에게 이관됩니다."
        ]
      ],
      "signals": [
        "이전 소유자 계정으로 아직 시스템에 접속할 수 있습니다.",
        "열쇠·카드의 수령자와 완료상태가 기록돼 있지 않습니다.",
        "관리업체·임차인이 이전 소유자에게 계속 연락합니다.",
        "자동이체·보험·공과금의 변경상태가 확인되지 않았습니다.",
        "보관자료와 삭제할 개인정보가 분리돼 있지 않습니다."
      ],
      "readySignals": [
        "법적·금융 항목의 완료상태가 확인돼 있습니다.",
        "정산값이 확정 또는 추가확인 상태로 닫혀 있습니다.",
        "물리적 인계의 수령자와 완료상태가 기록돼 있습니다.",
        "계정·업체관계·자동이체가 이전 또는 해제돼 있습니다.",
        "보관자료·삭제자료가 분리되고 잔여업무가 없습니다."
      ],
      "cases": [
        {
          "label": "CASE A",
          "title": "잔금은 끝났지만 운영관계가 남은 경우",
          "situation": "잔금과 법적 절차는 완료됐지만 이전 소유자의 휴대폰에서 CCTV와 출입통제 앱이 계속 작동합니다.",
          "observe": "법적 소유관계와 별개로 디지털 접근권한이 남아 있어 운영책임과 개인정보 문제가 이어질 수 있습니다.",
          "judge": "종료·인계의 핵심은 거래를 다시 닫는 것이 아니라 이전 소유자에게 남은 운영권한을 0으로 만드는 것입니다.",
          "next": "계정 소유자·관리업체를 확인해 이전·해제 완료상태를 기록합니다."
        },
        {
          "label": "CASE B",
          "title": "업체·자동이체 관계가 남은 경우",
          "situation": "승강기·청소·인터넷·공과금 일부가 이전 소유자 명의로 계속 청구되고 관리업체도 기존 번호로 연락합니다.",
          "observe": "시설은 인계됐지만 계약·결제·연락관계가 끝나지 않아 거래 후에도 업무가 남습니다.",
          "judge": "운영관계 종료는 열쇠 전달만으로 완료되지 않습니다.",
          "next": "업체별 변경·해지·인계 담당과 완료일을 확인합니다."
        },
        {
          "label": "CASE C",
          "title": "잔여업무를 숫자로 닫는 경우",
          "situation": "교육용 예시: 열쇠 12개, 카드 8개, 관리계정 5개, 자동이체 7건, 업체관계 6곳, 보관자료 9종을 종료목록으로 관리합니다.",
          "observe": "1차 점검에서 계정 2개, 자동이체 1건, 업체연락 1곳 등 4건이 미완료로 남았습니다.",
          "judge": "잔금완료와 EXIT 완료를 분리하면 미완료 4건을 명확히 추적할 수 있습니다.",
          "next": "4건의 담당자와 완료예정일을 지정하고 잔여업무 0건까지 확인합니다."
        }
      ],
      "questions": [
        {
          "q": "법적·금융 완료 여부를 담당기관 또는 담당자를 통해 확인했는가?",
          "why": "절차를 다시 해설하지 않고 완료상태만 확인하기 위한 질문입니다.",
          "next": "미확정이면 담당자와 확인예정일을 기록합니다."
        },
        {
          "q": "순회수액에서 추정했던 정산값이 실제 최종값으로 확정됐는가?",
          "why": "예상 회수자본과 실제 종료값의 차이를 닫아야 합니다.",
          "next": "미확정 정산항목을 별도로 남기고 담당자를 지정합니다."
        },
        {
          "q": "내 손에 남아 있는 열쇠·카드·리모컨·접근수단은 없는가?",
          "why": "물리적 접근권한이 남으면 운영관계가 끝나지 않습니다.",
          "next": "수령자와 인계확인 상태를 기록합니다."
        },
        {
          "q": "CCTV·IoT·관리앱 등 내 계정으로 남은 접근권한은 없는가?",
          "why": "디지털 권한과 개인정보 문제를 막기 위한 확인입니다.",
          "next": "공용계정으로 이전하거나 개인권한을 해제합니다."
        },
        {
          "q": "자동이체·보험·공과금·관리업체 연락이 모두 이전됐는가?",
          "why": "거래 후 계속 업무·청구가 발생하는 것을 막습니다.",
          "next": "업체별 변경·해지 완료일을 기록합니다."
        },
        {
          "q": "보관할 자료와 삭제할 개인정보를 분리했고 잔여업무가 0건인가?",
          "why": "EXIT의 마지막 완료상태를 확인하는 질문입니다.",
          "next": "남은 항목마다 후속담당자와 완료일을 지정합니다."
        }
      ],
      "experts": [
        {
          "topic": "법적 클로징 완료 확인",
          "intro": "잔금·소유권이전·권리정리 절차를 사이트에서 확정하지 않습니다.",
          "check": "법적·서류상 거래완료 상태와 남은 조치",
          "when": [
            "권리·서류 처리가 남아 있을 때",
            "변경조건 반영이 불명확할 때",
            "인도 조건과 법적 책임이 연결될 때"
          ],
          "prepare": [
            "최종 계약·변경자료",
            "등기·권리 관련 자료",
            "완료확인 자료"
          ],
          "confirm": "법률 전문가 / 관계기관",
          "apply": "완료/추가확인 상태만 종료 체크리스트에 반영합니다."
        },
        {
          "topic": "세무·최종 정산 확인",
          "intro": "순회수액에서 추정한 세금과 정산이 실제 종료값으로 확정되는지 확인합니다.",
          "check": "최종 세무·정산값과 후속 신고·보관 필요사항",
          "when": [
            "예상값과 실제값 차이가 클 때",
            "신고·증빙 확인이 필요할 때",
            "보관자료가 불명확할 때"
          ],
          "prepare": [
            "매각·비용·정산자료",
            "순회수액 계산 기록",
            "증빙"
          ],
          "confirm": "세무 전문가",
          "apply": "확정값을 최종 회수자본과 보관자료에 반영합니다."
        },
        {
          "topic": "금융 완료 확인",
          "intro": "대출상환과 담보 관련 세부절차를 다시 설명하지 않고 실제 완료상태를 확인합니다.",
          "check": "상환·이자정산·담보 관련 남은 금융조치",
          "when": [
            "금융기관 확인이 아직 안 된 경우",
            "상환금액과 실제 출금액이 다른 경우",
            "담보관련 확인이 필요한 경우"
          ],
          "prepare": [
            "대출약정",
            "상환내역",
            "잔금자료"
          ],
          "confirm": "금융기관",
          "apply": "완료 또는 추가확인 상태를 종료 체크리스트에 반영합니다."
        },
        {
          "topic": "운영·계정 인계",
          "intro": "시설기술 판단보다 실제 운영권한과 관계가 남지 않았는지 확인합니다.",
          "check": "시설 접근수단, 디지털 계정, 업체관계의 실제 인계범위",
          "when": [
            "계정이 여러 개일 때",
            "관리업체가 많은 경우",
            "누가 무엇을 인계받는지 불명확할 때"
          ],
          "prepare": [
            "열쇠·카드 목록",
            "계정목록",
            "업체·자동이체 목록"
          ],
          "confirm": "해당 관리·기술 담당",
          "apply": "수령자와 완료상태를 기록해 이전 소유자의 잔여 운영관계를 닫습니다."
        }
      ],
      "expertStatus": {
        "title": "이전 소유자에게 남은 책임은 무엇입니까?",
        "body": "잔금이 끝났다는 사실과 EXIT 완료는 다릅니다. 법적·금융 완료와 별개로 물리적 접근, 디지털 권한, 업체·결제 관계, 개인정보, 잔여업무가 남아 있는지 확인합니다.",
        "items": [
          "법적·금융 완료상태",
          "최종 정산",
          "물리적 접근권한",
          "디지털·업체 관계",
          "보관자료·잔여업무"
        ]
      },
      "summary": [
        "06은 법적 클로징 절차를 다시 배우는 페이지가 아니라 소유자의 운영책임을 닫는 단계입니다.",
        "정산은 계산보다 최종 확정상태를, 인계는 전달보다 수령·권한해제를 확인합니다.",
        "열쇠·계정·업체·자동이체·개인정보·잔여업무가 남지 않아야 EXIT가 끝납니다."
      ],
      "conclusion": "EXIT의 마지막 기준은 잔금완료가 아니라, 이전 소유자에게 남은 책임·접근권한·운영관계·미완료업무가 더 이상 없는 상태입니다.",
      "nextId": null,
      "nextName": "EXIT 메인으로",
      "nextPrompt": "매각 판단부터 종료·인계까지 여섯 단계를 다시 확인합니다."
    }
  ],
  "en": [
    {
      "id": "readiness",
      "num": "02",
      "code": "VALUE READY",
      "name": "Sale Preparation",
      "prompt": "Before selling, is this property ready to be explained?",
      "lead": "Sale Preparation is not about managing the property again. It is about turning records built during ownership into a sale information pack that a buyer can understand at a glance.",
      "whyDetails": [
        "During ownership, records need to be updated continuously. EXIT does not repeat those management methods.",
        "Combine the lease summary as of one reference date, the latest 12 months of income and expenses, facility history, and items requiring further verification into one explanation structure.",
        "Do not interpret contracts or administrative documents legally here. Confirm only whether they are current and whether summaries match their supporting records.",
        "Mark differences requiring judgment as items to verify. Leave legal interpretation to the contract-check stage or a qualified professional.",
        "Completion is not measured by the volume of documents. A reader should be able to follow the current condition in the order: summary → evidence → further verification."
      ],
      "core": [
        [
          "Convert lease records into a sale summary.",
          "Without re-analyzing lease records maintained during ownership, move the reference date, tenant, deposit, rent, lease expiry, and vacancy into a single sale summary. Link contracts as evidence and flag any mismatch so the current version can be confirmed."
        ],
        [
          "Turn vacancy and arrears records into a current-status explanation.",
          "This page does not cover how to reduce vacancy or market space. Extract only the occurrence date, current status, confirmed cause, and ongoing action from existing records so the buyer can understand what remains unresolved today."
        ],
        [
          "Bundle facility records into an explanation of future burden.",
          "Do not repeat inspection cycles or maintenance methods. Put only recent inspections, repair history, recurring failures, expected one-to-three-year CAPEX, and supporting evidence into the sale facility summary. Do not judge technical adequacy here; only mark whether further verification is required."
        ],
        [
          "Check how contracts, drawings, and administrative records connect—without interpreting them.",
          "Instead of explaining the legal effect of clauses or permits, mark only whether records exist, whether they are current, whether they match the summary, and whether further verification is needed. Send interpretation questions to contract review or the relevant authority."
        ],
        [
          "Organize income and expenses as explainable numbers, not a new analysis.",
          "Do not re-analyze yield or appropriate expenses. Align income and expense figures to the same period, such as the latest 12 months, connect them to evidence, distinguish one-off, recurring, and estimated values, and prepare them for the pricing stage."
        ],
        [
          "Finish by combining everything into one sale information pack.",
          "Organize the pack as a one-page summary, lease evidence, income and expense evidence, facility materials, and a further-verification list. Mark the status and location of each item so the same documents do not have to be searched for repeatedly when a buyer asks questions."
        ]
      ],
      "method": [
        [
          "Extract only sale-relevant materials from operating records.",
          "Do not create a new management record. Select only the existing records needed to explain the property's current condition.",
          [
            "Latest lease records",
            "Latest 12 months of income and expenses",
            "Facility and repair history",
            "Vacancy and arrears status"
          ],
          "Do not hand over the entire management archive as-is. Extract only what is needed to explain the sale.",
          "The list of materials included in the sale summary is fixed."
        ],
        [
          "Align the reference date across all summaries.",
          "Align the reference dates for leases, vacancy, deposits, income and expenses, and facility condition so the current property can be explained at one point in time.",
          [
            "Lease reference date",
            "Income and expense period",
            "Vacancy reference date",
            "Facility inspection date"
          ],
          "Do not combine figures from different dates as though they describe the same point in time.",
          "Each summary shows its reference date and can be compared consistently with the others."
        ],
        [
          "Check the link between summaries and supporting evidence.",
          "Connect summary values to evidence such as contracts, payment records, and inspection materials, and flag differences for further verification.",
          [
            "Total deposits",
            "Monthly rent",
            "Lease expiry",
            "Facility and repair costs"
          ],
          "Do not edit discrepancies just to make the numbers match.",
          "Every key figure has either supporting evidence or a further-verification status."
        ],
        [
          "Turn problem items into “explanation + verification path.”",
          "For vacancy, arrears, missing documents, and unfinished repairs, record the current status and next verification path rather than hiding the issue.",
          [
            "Current status",
            "Confirmed cause",
            "Additional documents",
            "Owner / confirmation source"
          ],
          "Do not present unresolved items as normal.",
          "Each problem item shows both its current status and the next verification step."
        ],
        [
          "Fix the order of the PACK.",
          "Bundle shared materials in the order: summary → supporting evidence → further-verification list.",
          [
            "One-page summary",
            "Evidence folder",
            "Further-verification list",
            "Separate sensitive information"
          ],
          "Do not share personal information or unnecessary internal records in bulk.",
          "A first-time reader can follow the current condition in the same sequence."
        ]
      ],
      "signals": [
        "Key figures in the contracts and lease summary do not match.",
        "It is difficult to explain when vacancies began and their current status.",
        "Major repair costs are not linked to inspection evidence.",
        "Differences between actual use and administrative records remain unverified.",
        "Income and expense records use different reference periods."
      ],
      "readySignals": [
        "The lease summary and contracts are organized to the same reference date.",
        "You can explain the cause and current status of vacancy and arrears.",
        "Major future CAPEX is connected to supporting evidence.",
        "Missing or inconsistent records are separated as items requiring further verification.",
        "Income and expense figures are linked to both a period and supporting evidence."
      ],
      "cases": [
        {
          "label": "CASE A",
          "title": "A property with organized records",
          "situation": "Seven tenants, the latest 12 months of income and expenses, two years of repair history, and major facility inspection records are all organized to one reference date.",
          "observe": "Deposits and rents in the lease summary match the contracts, and the start date and current marketing terms are recorded for one vacant unit.",
          "judge": "This does not mean there are no issues. It means that when a question arises, you can immediately identify the material used to verify it.",
          "next": "In this state, the organized materials can move forward as evidence for the pricing stage."
        },
        {
          "label": "CASE B",
          "title": "A property with mixed document versions",
          "situation": "Information exists across contracts, spreadsheets, messages, and handwritten records, but it is unclear which lease summary is the latest.",
          "observe": "Stated rent differs from actual receipts, and supporting evidence is missing for two recent repairs.",
          "judge": "Currency and consistency matter before document volume. Starting price discussions now would lead to the same questions being checked repeatedly.",
          "next": "First identify the current version and confirm the reason for each discrepancy."
        },
        {
          "label": "CASE C",
          "title": "When the numbers do not match",
          "situation": "Educational example: eight tenants; total deposits of KRW 420 million in contracts but KRW 390 million in the lease summary; two units vacant for seven months; and an expected elevator repair of KRW 60 million within two years.",
          "observe": "The KRW 30 million deposit gap directly affects final settlement, while long-term vacancy and CAPEX affect both pricing and due-diligence questions.",
          "judge": "The point is not that the price must be reduced. It is to align the evidence behind current figures and future costs first.",
          "next": "Confirm the cause of the deposit gap, vacancy marketing status, and CAPEX evidence before moving to pricing strategy."
        }
      ],
      "questions": [
        {
          "q": "What is the reference date of the current lease summary?",
          "why": "This is the starting point for distinguishing the current condition from a past condition.",
          "next": "If there is no reference date, build a new summary from the latest lease agreements."
        },
        {
          "q": "Does the total deposit match the contracts, ledger, and payment records?",
          "why": "Deposits are directly connected to settlement at the end of the transaction.",
          "next": "If not, create a tenant-by-tenant difference table and confirm the latest evidence."
        },
        {
          "q": "Can you explain when each vacancy began and why?",
          "why": "This helps a buyer understand re-leasing potential better than one vacancy-rate figure.",
          "next": "If the cause is unknown, first review the previous lease terms and recent marketing activity."
        },
        {
          "q": "Are major repairs and expected costs within the next three years organized?",
          "why": "Future CAPEX is a common question in both pricing and due diligence.",
          "next": "If the amount is unclear, mark inspections and estimates as items requiring further verification."
        },
        {
          "q": "Is every income and expense figure connected to supporting evidence?",
          "why": "This determines whether the number can be explained and defended.",
          "next": "If evidence is missing, mark it as an estimate and define the verification path."
        },
        {
          "q": "Do you know which items are still difficult for you to explain?",
          "why": "Knowing what you do not know lets you prepare professional review and requests for additional materials.",
          "next": "Create a separate unresolved-items list and assign an owner and confirmation source to each item."
        }
      ],
      "experts": [
        {
          "topic": "Rights, leases, and contracts",
          "intro": "Do not decide the legal meaning of contract terms or property rights on your own.",
          "check": "Whether disputes, rights, or contract interpretation could affect actual transaction terms",
          "when": [
            "When a lease dispute is ongoing",
            "When registration or title relationships are complex",
            "When contracts differ from actual operations"
          ],
          "prepare": [
            "Registration and title records",
            "Lease agreements and special clauses",
            "Notices and dispute records"
          ],
          "confirm": "Legal professional",
          "apply": "Reflect the result in the further-verification list and buyer-response materials."
        },
        {
          "topic": "Tax and accounting records",
          "intro": "Separate records requiring tax judgment, such as expense evidence or capital expenditures, from ordinary operating expenses.",
          "check": "Which cost records can be recognized or used as evidence for tax and net proceeds",
          "when": [
            "When major repairs or improvements were made",
            "When expense evidence is incomplete",
            "When ownership is complex, such as individual and corporate structures"
          ],
          "prepare": [
            "Ledgers and supporting evidence",
            "Acquisition and repair records",
            "Recent tax records"
          ],
          "confirm": "Tax professional",
          "apply": "Pass only confirmed records forward as evidence for pricing and net-proceeds calculation."
        },
        {
          "topic": "Facility and technical condition",
          "intro": "If future repair costs are large enough to affect the sell-or-hold decision or price, technical confirmation is needed.",
          "check": "Current condition of major equipment and expected CAPEX over the next one to three years",
          "when": [
            "When large costs are expected for elevators, facade, roof, or similar systems",
            "When failures recur",
            "When existing inspection records do not clearly show the condition"
          ],
          "prepare": [
            "Recent inspection records",
            "Repair history",
            "Photos and existing estimates"
          ],
          "confirm": "Relevant technical specialist",
          "apply": "Reflect the confirmed timing and cost range in the facility summary and CAPEX list."
        },
        {
          "topic": "Permits and administrative records",
          "intro": "If actual use appears to differ from administrative records, the site should not decide compliance on its own.",
          "check": "Areas requiring further verification between current use and the administrative records you hold",
          "when": [
            "When drawings differ from actual use",
            "When change history is unclear",
            "When required documents are missing"
          ],
          "prepare": [
            "Building-related records",
            "Drawings",
            "Approval and change records"
          ],
          "confirm": "Relevant authority or professional",
          "apply": "Until verified, do not mark the issue as clear; keep it in further-verification status."
        }
      ],
      "expertStatus": {
        "title": "Which items are still unverified?",
        "body": "The records do not have to be perfect before moving on. But you must be able to distinguish what has been confirmed from what still requires verification.",
        "items": [
          "Lease consistency",
          "Causes of vacancy and arrears",
          "Future CAPEX",
          "Rights and permits",
          "Evidence for income and expenses"
        ]
      },
      "summary": [
        "Sale Preparation is not about relearning management; it turns existing records into a sale information pack.",
        "Contracts and administrative records are not interpreted here; only currency, consistency, and verification status are shown.",
        "The completed pack becomes the input for pricing and for responding to buyer questions."
      ],
      "conclusion": "Good sale preparation is not about making the property look better. It is about connecting existing facts and records so a buyer can follow them without gaps.",
      "nextId": "pricing",
      "nextName": "03 Pricing Strategy",
      "nextPrompt": "Use the organized current condition to define the price range you can explain and defend."
    },
    {
      "id": "pricing",
      "num": "03",
      "code": "PRICING",
      "name": "Pricing Strategy",
      "prompt": "What evidence will support the target price?",
      "lead": "Pricing Strategy is not a page for re-analyzing the property's fair value from scratch. It is the stage where existing analysis evidence is turned into an asking price and clear negotiation boundaries.",
      "whyDetails": [
        "Comparable transactions, income, vacancy, and CAPEX evidence have already been gathered through ANALYSIS and Sale Preparation. Do not calculate them again here.",
        "The asking price shown to the market, the target price you actually expect, and the minimum acceptable price can be different numbers.",
        "If those three numbers are mixed together, the standard changes every time an inquiry arrives. Separate the public price from the internal decision limits.",
        "Price is not the only negotiation lever. Define non-price terms too, such as closing date, handover timing, repair scope, and the range of documents to be provided.",
        "The key is choosing which analysis evidence will be used to explain the price. From that evidence, build the asking-price, floor-price, and terms strategy."
      ],
      "core": [
        [
          "Choose which pricing evidence from ANALYSIS to use.",
          "Do not re-analyze comparable sales, current cash flow, vacancy, tenant structure, or CAPEX. Separate the evidence already confirmed in ANALYSIS into items used directly in price explanation and items kept as supporting material."
        ],
        [
          "Set the market asking price.",
          "The asking price is the number first shown to buyers. It should be explainable from comparables and the property's condition, not set merely above or below nearby asking prices."
        ],
        [
          "Keep a separate target price.",
          "The target price is the internal outcome you hope to achieve through negotiation. It may equal the asking price, but does not have to. Keep the target separate even as inquiry response and deal terms change."
        ],
        [
          "Manage the minimum acceptable price as an internal decision value.",
          "The minimum acceptable price is not for public display. It is an internal floor based on the sale objective, expected net proceeds, taxes and debt, and alternative capital plans. Record the rationale in advance so it does not shift emotionally during negotiation."
        ],
        [
          "Separate negotiable non-price terms in advance.",
          "Identify terms that can change without reducing price—such as closing date, handover timing, minor repair scope, document scope, and scheduling—and terms that are difficult to change."
        ],
        [
          "Before changing price, ask whether the evidence changed.",
          "Do not cut the price immediately just because inquiries are low. First check whether the underlying evidence actually changed through market response, new comparable transactions, vacancy changes, confirmed CAPEX, or due-diligence findings, then revisit the asking price, target, and terms."
        ]
      ],
      "method": [
        [
          "Select the evidence you will use to explain price.",
          "From the materials confirmed in ANALYSIS and Sale Preparation, select only the evidence directly used to explain price.",
          [
            "Comparable transaction summary",
            "Current cash flow",
            "Key vacancy and tenant points",
            "Confirmed CAPEX"
          ],
          "Do not re-run the analysis. Use only evidence that has already been confirmed.",
          "Three to five core points for explaining price are fixed."
        ],
        [
          "Separate the asking price from the target price.",
          "Record the public price and the internal target separately, along with the rationale for each.",
          [
            "Market asking price",
            "Target price",
            "Rationale for each price",
            "Public / internal classification"
          ],
          "Do not use the two numbers as if they mean the same thing.",
          "The number shown to the market and the internal target are clearly separated."
        ],
        [
          "Set the internal minimum acceptable price.",
          "Based on expected net proceeds and the purpose of the sale, set an internal floor below which the deal requires a fresh review.",
          [
            "Minimum acceptable price",
            "After-tax and debt impact",
            "Sale objective",
            "Review trigger"
          ],
          "Do not use the minimum acceptable price as external marketing copy.",
          "An internal floor is set that requires a fresh decision during negotiation."
        ],
        [
          "Prioritize non-price terms.",
          "Separate terms that can be adjusted instead of price from terms that are difficult to concede.",
          [
            "Closing date",
            "Handover timing",
            "Repair scope",
            "Document scope"
          ],
          "Do not try to convert every term into a single price adjustment.",
          "Non-price negotiation cards and hard limits are organized."
        ],
        [
          "Set adjustment rules.",
          "Decide in advance what must change before the price changes.",
          [
            "Market-response period",
            "New comparable transactions",
            "Due-diligence findings",
            "Confirmed CAPEX"
          ],
          "Do not cut price immediately based on only a few inquiries.",
          "The rationale and review timing for price changes are recorded."
        ]
      ],
      "signals": [
        "The asking price and target price are not separated.",
        "The minimum acceptable price is not tied to the sale objective.",
        "The core evidence supporting the price is not organized.",
        "There is no distinction between negotiable and non-negotiable non-price terms.",
        "The price is being changed immediately in response to inquiries."
      ],
      "readySignals": [
        "The asking price, target price, and minimum acceptable price are clearly separated.",
        "Core evidence for each price is organized.",
        "Negotiable and non-negotiable non-price terms are separated.",
        "Price-adjustment triggers and review periods are set.",
        "Offers below the minimum acceptable price trigger a fresh review."
      ],
      "cases": [
        {
          "label": "CASE A",
          "title": "Same analysis, different asking strategy",
          "situation": "Educational example: assume ANALYSIS already indicates comparable transactions of KRW 2.6–2.8 billion, along with current cash flow, vacancy, and CAPEX.",
          "observe": "The seller may use three different numbers with different roles: a market asking price of KRW 2.85 billion, a target price of KRW 2.8 billion, and an internal minimum acceptable price of KRW 2.65 billion.",
          "judge": "This example does not conclude that KRW 2.8 billion is fair value. It shows how the same analysis evidence can be managed separately as public price, target, and floor.",
          "next": "Record the internal rationale for each price and connect it to the net-proceeds calculation."
        },
        {
          "label": "CASE B",
          "title": "Adjusting terms instead of price",
          "situation": "A buyer asks for a KRW 100 million price reduction, but the seller has room to move the closing date forward or adjust the scope of minor repairs.",
          "observe": "If price is the only negotiation lever, the discussion may move straight to a discount. Separating terms creates other options to compare.",
          "judge": "Pricing strategy is a combination of price and terms, not one number.",
          "next": "Reconfirm which terms can change and which cannot."
        },
        {
          "label": "CASE C",
          "title": "A case where weak market response does not trigger an immediate price cut",
          "situation": "Educational example: asking price KRW 2.85 billion, target KRW 2.8 billion, minimum acceptable KRW 2.65 billion. Over four weeks there were three inquiries and one site visit, with no new comparable transactions or CAPEX changes.",
          "observe": "Low inquiry volume matters, but it does not necessarily mean the pricing evidence itself has changed.",
          "judge": "First review exposure, target buyers, terms, and explanation materials. Consider a price change when the market evidence itself has actually changed.",
          "next": "Record the review timing and reason for any change according to the adjustment rules."
        }
      ],
      "questions": [
        {
          "q": "Have you separated the price shown to the market from the actual target price?",
          "why": "Mixing the public figure with the internal target destabilizes the negotiation standard.",
          "next": "Record the two numbers separately and write one line of rationale for each."
        },
        {
          "q": "What capital objective is the minimum acceptable price tied to?",
          "why": "The floor should be tied to the sale objective and net proceeds, not emotion.",
          "next": "Recheck the expected net-proceeds range and the capital plan after the sale."
        },
        {
          "q": "Have you narrowed the key pricing evidence to three to five points?",
          "why": "Present only the core evidence instead of re-explaining the entire analysis.",
          "next": "From ANALYSIS and Sale Preparation, select only the evidence directly connected to price."
        },
        {
          "q": "Which terms can be adjusted instead of price?",
          "why": "If price is the only negotiation lever, unnecessary discounts become more likely.",
          "next": "Separate closing date, handover, repairs, and document scope, then mark which can be conceded."
        },
        {
          "q": "If an offer falls below the minimum acceptable price, what will you review again?",
          "why": "The internal floor is not an automatic rejection number; it is a trigger for a fresh review.",
          "next": "Recompare net proceeds, the sale objective, and the alternative capital plan."
        },
        {
          "q": "Have you set the conditions and timing for changing price?",
          "why": "This reduces impulsive price changes based on only a few inquiries.",
          "next": "Record the market-response period and the evidence changes that would trigger a review."
        }
      ],
      "experts": [
        {
          "topic": "Market explainability",
          "intro": "The goal is not to ask an agent to set the price for you, but to confirm how the current asking price can be explained in the market.",
          "check": "Whether the current asking price and comparables can be explained credibly to actual buyers",
          "when": [
            "When there are few comparable transactions",
            "When inquiry response differs sharply from the analysis evidence",
            "When the property has an unusual tenant or use structure"
          ],
          "prepare": [
            "ANALYSIS comparison evidence",
            "Lease and vacancy summary",
            "CAPEX summary"
          ],
          "confirm": "Market practitioner such as a licensed real estate agent",
          "apply": "Use market response as review material, not as the sole reason for changing price."
        },
        {
          "topic": "Independent value opinion",
          "intro": "Seek a separate opinion only when the asset is unusual or an objective valuation view is needed.",
          "check": "Difference between internal pricing evidence and an independent valuation view",
          "when": [
            "When comparable transactions are very limited",
            "When collateral or valuation purposes also matter",
            "When pricing evidence needs objective reinforcement"
          ],
          "prepare": [
            "Asset information",
            "Income information",
            "Title and rights information"
          ],
          "confirm": "Valuation specialist if needed",
          "apply": "Treat the valuation opinion as one piece of evidence, not as an automatic asking-price decision."
        },
        {
          "topic": "After-tax floor check",
          "intro": "Check whether the minimum acceptable price is consistent with actual recoverable capital on an after-tax basis.",
          "check": "Whether expected net proceeds at a given price align with the internal floor",
          "when": [
            "When tax impact is significant",
            "When the ownership structure is complex",
            "When the minimum acceptable price is set narrowly"
          ],
          "prepare": [
            "Acquisition and holding records",
            "Expected price range",
            "Debt records"
          ],
          "confirm": "Tax professional",
          "apply": "Use the result to review both net proceeds and the minimum acceptable price."
        },
        {
          "topic": "Legal impact of deal terms",
          "intro": "If non-price terms can change legal obligations or risk, do not determine their effect on your own.",
          "check": "Legal impact of changes to closing date, handover, repairs, document provision, and similar terms",
          "when": [
            "When negotiations over terms become complex",
            "When contract wording needs to change",
            "When terms interact with title or lease issues"
          ],
          "prepare": [
            "Negotiated-terms list",
            "Draft contract and related materials"
          ],
          "confirm": "Legal professional",
          "apply": "Mark terms requiring legal confirmation separately from ordinary pricing negotiation cards."
        }
      ],
      "expertStatus": {
        "title": "What still needs to be confirmed in the pricing strategy?",
        "body": "The objective is not to declare one correct price. Distinguish which parts of the asking price, internal target, floor, and terms are well-supported and which still require verification.",
        "items": [
          "Evidence for the asking price",
          "Target price",
          "Minimum acceptable price",
          "Non-price terms",
          "Adjustment rules"
        ]
      },
      "summary": [
        "Pricing Strategy does not re-analyze price; it converts existing analysis evidence into a seller strategy.",
        "The asking price, target price, and minimum acceptable price serve different roles.",
        "Negotiation remains consistent only when non-price terms and price-adjustment rules are defined too."
      ],
      "conclusion": "More important than recalculating value is deciding in advance what price you will ask, why you can support it, and how far you will negotiate under what terms.",
      "nextId": "buyer-readiness",
      "nextName": "04 Buyer Due Diligence",
      "nextPrompt": "Connect the pricing evidence and organized records to the buyer's actual questions."
    },
    {
      "id": "buyer-readiness",
      "num": "04",
      "code": "BUYER READY",
      "name": "Buyer Due Diligence",
      "prompt": "What will the buyer verify, and where are questions likely to arise?",
      "lead": "Buyer Due Diligence is not about re-explaining the Sale Preparation pack. It is the Q&A stage where you decide what material answers each question and which questions must be sent for further verification.",
      "whyDetails": [
        "Even well-organized records create repeated explanations if questions are not connected to the right materials.",
        "When a buyer asks about total deposits or future repair costs, the first-response material and supporting evidence should be immediately connected.",
        "Do not answer questions that require legal judgment—such as title, contracts, or permits—on your own. Answer only confirmed facts.",
        "Questions requiring judgment move to contract review or the appropriate professional. Decide who will confirm each one as well.",
        "The output here is not another document pack; it is a response table by question. Each line should connect the question, material, further verification, owner, and status."
      ],
      "core": [
        [
          "Start by listing the buyer's likely questions.",
          "List common questions about leases, income, vacancy, facilities, CAPEX, rights, permits, and settlement. The goal is not to relearn what documents exist, but to prepare around the questions buyers are likely to ask."
        ],
        [
          "Assign one first-response document to each question.",
          "For a deposit question, use the latest lease summary; for recent income, use the latest 12-month income and expense summary. Do not send a bundle of files at once—choose the first document that fits the question."
        ],
        [
          "Connect each first-response document to its evidence.",
          "Link summary figures to contracts, payment records, inspections, estimates, or other evidence. If the buyer wants to go deeper, the next source should be immediately available."
        ],
        [
          "Separate facts you can answer directly from questions requiring professional judgment.",
          "Confirmed facts such as the current total deposit can be explained directly. Questions requiring judgment—such as the legal effect of a right or permit compliance—should not be concluded by the owner."
        ],
        [
          "Give every unresolved question an owner and due date.",
          "Instead of guessing, mark the question for further verification and assign who will confirm it and by when. How well unresolved items are managed largely determines due-diligence speed."
        ],
        [
          "Control the version history of questions and answers.",
          "Record request date, response date, materials used, additional materials, and completion status so the same question does not receive different answers. Consistency and traceability are the core of due-diligence response."
        ]
      ],
      "method": [
        [
          "Build the expected-question list.",
          "Review the Sale Preparation pack and write down the questions a buyer is likely to ask.",
          [
            "Lease questions",
            "Income and vacancy questions",
            "Facility and CAPEX questions",
            "Rights and permit questions"
          ],
          "This is not the stage for rebuilding the document list. Start from questions.",
          "The core question list is complete."
        ],
        [
          "Connect the first-response document and its evidence.",
          "For every question, attach the summary document shown first and the evidence behind it.",
          [
            "First-response document",
            "Supporting evidence",
            "Reference date",
            "Document location"
          ],
          "Do not attach a random pile of files to one question.",
          "Each question has one first document and linked evidence."
        ],
        [
          "Mark unresolved items and discrepancies.",
          "When records conflict or a question cannot be answered immediately, separate it into further-verification status.",
          [
            "Discrepancy",
            "Additional documents",
            "Verification required",
            "Priority"
          ],
          "Do not guess at something you do not know.",
          "Unresolved questions are managed in a separate list."
        ],
        [
          "Assign the owner and verification path.",
          "Decide who answers each question—legal, tax, technical, or internal management.",
          [
            "Owner",
            "Professional / authority",
            "Required materials",
            "Target confirmation date"
          ],
          "Do not try to answer every question personally.",
          "Every unresolved question has an owner and a verification path."
        ],
        [
          "Maintain response history.",
          "Record questions, answers, added materials, and completion status so the same question does not receive different answers.",
          [
            "Request date",
            "Response date",
            "Response",
            "Status"
          ],
          "Do not leave only verbal answers.",
          "You can see the latest answer and status for every question at a glance."
        ]
      ],
      "signals": [
        "Different people give different answers to the same question.",
        "The first-response document has not been designated.",
        "Summary figures do not match the supporting evidence.",
        "Questions requiring professional review are being answered immediately without verification.",
        "Unresolved questions have no owner or target date."
      ],
      "readySignals": [
        "Every core question has a designated first-response document.",
        "You can move directly from a summary figure to the supporting evidence.",
        "Confirmed facts are separated from questions requiring professional judgment.",
        "Every unresolved question has an owner and verification path.",
        "The current status of questions, answers, and added materials can be tracked."
      ],
      "cases": [
        {
          "label": "CASE A",
          "title": "When questions connect directly to evidence",
          "situation": "A buyer asks, “What is the current total tenant deposit?”",
          "observe": "Show the latest lease summary as the first response and, if needed, connect immediately to each tenant's contract.",
          "judge": "The strength is not the volume of documents. Due diligence continues without interruption because the answer and evidence follow one clear path.",
          "next": "Record the next question in the Q&A table using the same structure."
        },
        {
          "label": "CASE B",
          "title": "When answers keep changing",
          "situation": "Asked about facility costs, the owner says “no major cost,” while the manager says “there is an elevator estimate.”",
          "observe": "When the same question receives different answers, the buyer may repeat verification and begin to doubt unrelated materials as well.",
          "judge": "The goal is not to craft a better answer. It is to unify confirmed facts and unresolved status into one current version.",
          "next": "Confirm the inspection material and estimate, then update the Q&A to one current answer."
        },
        {
          "label": "CASE C",
          "title": "Managing unresolved questions",
          "situation": "Educational example: of 24 expected questions, 18 are answered and 6 remain for further verification—2 legal, 3 facility-related, and 1 tax-related.",
          "observe": "More important than the fact that six remain unresolved is whether each has an owner, required material, and target confirmation date.",
          "judge": "Due-diligence readiness does not mean every question can be answered instantly. It means even unresolved questions are controlled.",
          "next": "When confirmation is complete, update the response version and supporting evidence."
        }
      ],
      "questions": [
        {
          "q": "Does every core question have one first-response document?",
          "why": "Even when the records exist, you will have to search again during due diligence if they are not connected to questions.",
          "next": "Assign one first document to each question."
        },
        {
          "q": "Can you move directly from the figure in the first-response document to its evidence?",
          "why": "A summary without evidence leads to repeated follow-up questions.",
          "next": "Link the locations of contracts, payment records, and inspection materials."
        },
        {
          "q": "Have you separated facts you can answer directly from judgments that require a professional?",
          "why": "This reduces the risk of giving unsupported legal, tax, or technical judgments.",
          "next": "Assign the appropriate professional and required materials to each judgment question."
        },
        {
          "q": "How many questions are currently in further-verification status?",
          "why": "You need a count of unresolved items to manage due diligence.",
          "next": "Create a separate unresolved-question list and assign priorities."
        },
        {
          "q": "Does every unresolved question have an owner and target confirmation date?",
          "why": "Without an owner, the same question keeps being deferred.",
          "next": "Assign a verification path: internal owner, professional, or relevant authority."
        },
        {
          "q": "Is there one current answer for each question?",
          "why": "Multiple answer versions reduce trust.",
          "next": "Record the current answer and its revision history in the Q&A table."
        }
      ],
      "experts": [
        {
          "topic": "Legal and permit questions",
          "intro": "Do not explain the meaning of rights, contracts, or permits here. Decide which questions should be sent to a professional.",
          "check": "Legal or administrative judgment questions that should not be answered directly",
          "when": [
            "Questions about the legal effect of rights",
            "Questions about interpreting contract wording",
            "Questions about permit compliance"
          ],
          "prepare": [
            "Related contracts, registration, and administrative records",
            "Buyer's original question"
          ],
          "confirm": "Legal professional / relevant authority",
          "apply": "Record only the assigned owner and confirmation status in the Q&A table."
        },
        {
          "topic": "Tax and financial questions",
          "intro": "Questions requiring interpretation of income, expenses, or tax figures should be sent to the responsible professional with the supporting records.",
          "check": "Scope of questions requiring tax interpretation",
          "when": [
            "Questions about tax impact",
            "Questions about expense treatment",
            "Questions about capital-expenditure classification"
          ],
          "prepare": [
            "Ledgers and evidence",
            "Summary related to the question"
          ],
          "confirm": "Tax professional",
          "apply": "Record the confirmed answer and the location of supporting evidence in the Q&A table."
        },
        {
          "topic": "Facility questions",
          "intro": "Do not make unsupported conclusions about facility condition. Separate questions that require technical judgment.",
          "check": "Facility questions requiring site inspection or technical judgment",
          "when": [
            "Questions about whether a defect exists",
            "Confirmation of CAPEX scale",
            "When inspection records alone are not enough to conclude"
          ],
          "prepare": [
            "Inspection materials",
            "Repair history",
            "Photos and estimates"
          ],
          "confirm": "Relevant technical specialist",
          "apply": "Link the technical response to the current Q&A version."
        },
        {
          "topic": "Pricing questions",
          "intro": "When a buyer asks whether the pricing basis is objective, connect the question to the Pricing Strategy evidence and the appropriate market-verification path.",
          "check": "Questions requiring additional confirmation of pricing evidence",
          "when": [
            "When evidence for comparable transactions is requested",
            "When the buyer asks how the asking price was determined",
            "Pricing questions involving unusual assets"
          ],
          "prepare": [
            "Pricing Strategy summary",
            "Comparison evidence"
          ],
          "confirm": "Market practitioner / valuation specialist if needed",
          "apply": "Do not re-analyze the price; connect only the evidence needed to answer the question."
        }
      ],
      "expertStatus": {
        "title": "Have you decided who should answer each type of question?",
        "body": "The owner does not need to answer every question personally. Answer confirmed facts directly and assign judgment questions to the appropriate professional and verification path.",
        "items": [
          "Can answer directly",
          "Legal and permits",
          "Tax and finance",
          "Facilities and technical",
          "Price and value"
        ]
      },
      "summary": [
        "Buyer Due Diligence is not another explanation of the records; it is a Q&A system that connects questions to evidence.",
        "Separate confirmed facts from questions that require professional judgment.",
        "Even unresolved questions can be managed when they have an owner, verification path, and status."
      ],
      "conclusion": "Good due-diligence readiness does not mean answering every question instantly. It means every question remains connected to evidence and a clear verification path.",
      "nextId": "net-proceeds",
      "nextName": "05 Net Proceeds",
      "nextPrompt": "Calculate the capital that can actually be recovered from the transaction price."
    },
    {
      "id": "net-proceeds",
      "num": "05",
      "code": "NET PROCEEDS",
      "name": "Net Proceeds",
      "prompt": "How much actually remains from the sale price?",
      "lead": "Net Proceeds is not a stage for re-explaining payment procedures. It starts with the actual contract price, subtracts the relevant deductions, and separates confirmed figures from estimates to show the realistic range of recoverable capital.",
      "whyDetails": [
        "Do not revisit the target price from Pricing Strategy here. Use the actual contract price, or a realistic sale-price range if the deal is not yet fixed, as the starting value.",
        "Treat loan repayment, taxes, transaction costs, and deposit or service-charge settlements as deductions—not as transaction-procedure lessons.",
        "Detailed contract procedures such as who pays what and when belong in contract review and final Closing & Handover.",
        "Label every figure as CONFIRMED, ESTIMATED, or TO CHECK. Do not mix different levels of certainty into one number.",
        "Separate the minimum amount currently confirmed from the expected range. Keep unknown values as explicit items to verify."
      ],
      "core": [
        [
          "Start with the actual contract price.",
          "Do not restate the target price from Pricing Strategy. If the contract is signed, use the actual sale proceeds; if not, use a realistic price range and mark its status."
        ],
        [
          "Deduct only the actual expected debt repayment.",
          "Instead of using only the loan balance, deduct the actual expected repayment including any prepayment cost and interest settlement that require confirmation from the financial institution. This page does not cover the repayment procedure itself."
        ],
        [
          "Separate ESTIMATED tax from CONFIRMED tax.",
          "Keep expected tax as an estimate until professional confirmation and do not mix it with confirmed taxes or costs. This page does not teach tax calculation; it focuses only on the impact on recoverable capital."
        ],
        [
          "Separate transaction costs into individual deductions.",
          "Do not group brokerage, legal, and similar transaction costs into one miscellaneous line. Record each amount and verification status separately. Detailed payment procedures or fee rules should be confirmed elsewhere."
        ],
        [
          "Include only the expected final settlement for deposits, service charges, receivables, and advances.",
          "Do not re-teach the settlement method. Include only amounts expected to be deducted or transferred as of closing, plus any unresolved amount. Final confirmation occurs in Closing & Handover."
        ],
        [
          "Build a proceeds range by assigning a status to every number.",
          "CONFIRMED means verified, ESTIMATED means the current estimate, and TO CHECK means still unresolved. Separating them lets you see both currently confirmed proceeds and the expected proceeds range."
        ]
      ],
      "method": [
        [
          "Set the starting value.",
          "Enter the actual contract price or a realistic price range and mark its status.",
          [
            "Sale proceeds",
            "Confirmed / estimated status",
            "Expected gross receipts",
            "Reference date"
          ],
          "Do not use the target price as if it were already confirmed.",
          "The starting amount and its status are defined."
        ],
        [
          "Confirm debt deductions.",
          "Enter the actual expected repayment amount based on confirmation from the financial institution.",
          [
            "Loan balance",
            "Prepayment cost",
            "Interest settlement",
            "Confirmation source"
          ],
          "Do not stop after subtracting only the loan balance.",
          "Debt deductions are classified as CONFIRMED or TO CHECK."
        ],
        [
          "Enter taxes and transaction costs by status.",
          "Enter taxes, brokerage, legal, and other transaction costs as separate items.",
          [
            "Estimated tax",
            "Brokerage cost",
            "Legal cost",
            "Confirmation status"
          ],
          "Do not treat estimated tax as a confirmed figure.",
          "Each cost has an amount and a status."
        ],
        [
          "Reflect expected settlement amounts.",
          "Include deposits, service charges, receivables, advances, and other amounts expected to be deducted or transferred at closing.",
          [
            "Deposits",
            "Service charges",
            "Receivables and advances",
            "Reference date"
          ],
          "Do not re-teach the settlement procedure here.",
          "Expected settlement amounts and unresolved items are clearly separated."
        ],
        [
          "Separate the confirmed minimum from the expected range.",
          "Calculate one current confirmed amount using only CONFIRMED values, and a separate expected range that also includes ESTIMATED values.",
          [
            "Confirmed deductions total",
            "Estimated deductions total",
            "TO CHECK list",
            "Expected net proceeds"
          ],
          "Do not present one number as fully final.",
          "The currently confirmed amount, expected range, and unresolved list are visible at the same time."
        ]
      ],
      "signals": [
        "You are treating the sale price as the same thing as recoverable capital.",
        "The actual loan repayment amount has not yet been confirmed.",
        "Estimated tax is being used as if it were confirmed.",
        "Settlement items such as deposits and service charges are missing.",
        "Confirmed, estimated, and unresolved figures are mixed together."
      ],
      "readySignals": [
        "The contract sale price and payment schedule are confirmed.",
        "The verification status of the actual loan repayment amount is shown.",
        "Taxes and transaction costs are separated by item.",
        "Every settlement item has a reference date and confirmation status.",
        "You can view the minimum proceeds, expected range, and unresolved figures separately."
      ],
      "cases": [
        {
          "label": "CASE A",
          "title": "Same sale price, different debt",
          "situation": "Both properties sell for KRW 2.0 billion, but Property A must repay KRW 500 million of debt while Property B must repay KRW 1.1 billion.",
          "observe": "Even with identical taxes and transaction costs, debt alone creates a KRW 600 million difference in recoverable capital.",
          "judge": "You cannot compare transaction outcomes from the sale price alone.",
          "next": "Replace the loan repayment figure with the amount confirmed by the financial institution and continue adding the remaining deductions."
        },
        {
          "label": "CASE B",
          "title": "When tax and settlement are large",
          "situation": "The sale price is high, but expected taxes, tenant deposits, and other settlement items are also large.",
          "observe": "Even with a high asking or contract price, the capital available for the next investment may be smaller than expected.",
          "judge": "A successful pricing outcome and the amount of capital recovered are not the same measure.",
          "next": "Separate the tax and settlement items by confirmation status and recalculate the minimum proceeds and expected range."
        },
        {
          "label": "CASE C",
          "title": "Numeric example separating confirmed and estimated values",
          "situation": "Educational example: KRW 2.5 billion sale price − KRW 800 million loan repayment confirmed by the financial institution − KRW 30 million transaction costs − KRW 350 million deposits and other settlements = KRW 1.32 billion before tax. After an estimated KRW 220 million tax, expected net proceeds are about KRW 1.10 billion.",
          "observe": "Even if KRW 2.5 billion, 800 million, 30 million, and 350 million are confirmed, the full KRW 1.10 billion should not be called final if the KRW 220 million tax is still only an estimate.",
          "judge": "This example shows how to separate the confirmed structure from figures that can still change.",
          "next": "Update estimated tax after tax review, then replace settlement estimates with actual closing figures during Closing & Handover."
        }
      ],
      "questions": [
        {
          "q": "Do you know the actual contract sale price and payment schedule?",
          "why": "This establishes the starting point for cash inflows.",
          "next": "If the contract terms are not final, keep this separate from the Pricing Strategy target and mark it pending."
        },
        {
          "q": "What is the actual repayment amount confirmed by the financial institution?",
          "why": "The loan balance alone does not show the full amount that will be deducted.",
          "next": "Confirm prepayment costs and interest settlement with the financial institution as well."
        },
        {
          "q": "Is the tax figure confirmed or estimated?",
          "why": "This separates uncertainty in the amount of capital you can recover.",
          "next": "If it is estimated, show it as an expected range until tax review is complete."
        },
        {
          "q": "Have brokerage, legal, and other transaction costs been listed separately?",
          "why": "This reduces omissions hidden inside one miscellaneous-cost line.",
          "next": "Attach an amount and confirmation source to each cost item."
        },
        {
          "q": "Do you know the reference date for settlement of deposits, service charges, receivables, and advances?",
          "why": "This separates figures that may change before or after the final payment date.",
          "next": "Record the reference date and responsible party in the settlement table."
        },
        {
          "q": "Have you separated the confirmed minimum proceeds from the expected proceeds range?",
          "why": "This prevents overestimating the capital available for the next decision.",
          "next": "Calculate a minimum using confirmed figures only and keep estimates in a separate scenario."
        }
      ],
      "experts": [
        {
          "topic": "Tax figure confirmation",
          "intro": "Do not relearn tax calculation here. Confirm whether the current estimate is reliable enough to use in the recoverable-capital calculation.",
          "check": "Expected tax range and whether it is confirmed",
          "when": [
            "When tax has a large impact",
            "When the ownership structure is complex",
            "When the estimate has a wide range"
          ],
          "prepare": [
            "Acquisition, holding, and sale records",
            "Current net-proceeds table"
          ],
          "confirm": "Tax professional",
          "apply": "Update both the amount and its ESTIMATED or CONFIRMED status."
        },
        {
          "topic": "Actual repayment confirmation",
          "intro": "Confirm the financial amount that will actually be deducted, not the mechanics of loan repayment.",
          "check": "Expected actual repayment including balance, prepayment cost, and interest settlement",
          "when": [
            "When there is outstanding debt",
            "When prepayment costs apply",
            "When interest must be settled on the final payment date"
          ],
          "prepare": [
            "Loan agreement",
            "Balance records",
            "Expected final payment date"
          ],
          "confirm": "Financial institution",
          "apply": "Update the debt item's status to CONFIRMED or TO CHECK."
        },
        {
          "topic": "Transaction-cost confirmation",
          "intro": "Confirm the actual amount of brokerage, legal, and similar transaction costs—not the procedure for paying them.",
          "check": "Actual amount and confirmation status of each transaction cost",
          "when": [
            "When cost estimates are not yet available",
            "When costs change depending on contract terms"
          ],
          "prepare": [
            "Transaction terms",
            "Estimates and contract materials"
          ],
          "confirm": "Relevant brokerage or legal professional",
          "apply": "Reflect each cost as a separate item in the net-proceeds table."
        },
        {
          "topic": "Internal settlement figures",
          "intro": "Confirm the final amount expected to be deducted or transferred for deposits, receivables, advances, and service charges—not how those amounts are calculated.",
          "check": "Expected settlement amount and unresolved differences",
          "when": [
            "When internal records do not match",
            "When the reference date changes",
            "When total deposits do not match"
          ],
          "prepare": [
            "Lease summary",
            "Payment records",
            "Draft settlement statement"
          ],
          "confirm": "Internal accounting / property management staff; professional review if needed",
          "apply": "Classify settlement items as CONFIRMED, ESTIMATED, or TO CHECK."
        }
      ],
      "expertStatus": {
        "title": "Which figures are confirmed, and which are estimated?",
        "body": "Do not treat net proceeds as one final number. Manage the amount and verification status of each deduction separately.",
        "items": [
          "Sale proceeds",
          "Actual repayment amount",
          "Taxes",
          "Transaction costs",
          "Expected settlement amount"
        ]
      },
      "summary": [
        "Net Proceeds is not a transaction-procedure stage; it calculates the capital you can actually recover.",
        "Classify every figure as CONFIRMED, ESTIMATED, or TO CHECK.",
        "Until final settlement and handover are complete, review both the currently confirmed amount and the expected range."
      ],
      "conclusion": "More important than the sale price is knowing how much capital will actually be available for the next decision after every deduction is classified by status.",
      "nextId": "closing",
      "nextName": "06 Closing & Handover",
      "nextPrompt": "Turn expected proceeds into completed final payment, settlement, and handover status."
    },
    {
      "id": "closing",
      "num": "06",
      "code": "CLOSING",
      "name": "Closing & Handover",
      "prompt": "What still needs to be finished after the contract for the exit to be complete?",
      "lead": "Closing & Handover is not a stage for relearning final payment or title-transfer procedures. It is the final stage for fully closing the operating responsibilities and access rights that may remain with the former owner after the transaction.",
      "whyDetails": [
        "Even after final payment, the operating relationship has not ended if CCTV accounts, keys, or access cards remain with the former owner.",
        "The same applies if vendors still contact the former owner or automatic payments remain active. Legal closing and operational closing must be checked separately.",
        "The calculation of figures such as deposits, service charges, and loan amounts should already be completed in Net Proceeds.",
        "Here, confirm only whether those values are final, who receives the handover, and whether completion status has been recorded.",
        "Completion is not the final payment itself. It is the absence of remaining responsibility. Close operating, access, and record relationships all the way through."
      ],
      "core": [
        [
          "Check only whether legal closing is complete.",
          "Do not re-explain final payment, title transfer, or collateral release. Treat them as items to be confirmed through contract review and the relevant parties; on this page, track only complete/incomplete status and the responsible person."
        ],
        [
          "For settlement, check final status rather than recalculating.",
          "Confirm the actual final values for the loan, tax, deposits, and service-charge settlements estimated in Net Proceeds. The focus is not recalculation, but whether any unresolved settlement remains."
        ],
        [
          "Check whether any keys, cards, or facility access remain.",
          "List every physical item still held by the former owner—keys, access cards, parking remotes, meter and facility access tools—and record the recipient and completion status."
        ],
        [
          "Transfer or revoke digital accounts and management permissions.",
          "Identify accounts and permissions still tied to the former owner—CCTV, access control, IoT, management apps, remote equipment, vendor portals—then transfer or revoke them, separating personal accounts from shared accounts."
        ],
        [
          "End vendor relationships, automatic payments, and contact routes.",
          "For cleaning, security, elevator, fire safety, telecom, insurance, utilities, and property management, confirm and record whether automatic payments and contact relationships under the former owner's name have been changed, terminated, or handed over."
        ],
        [
          "Finish by organizing personal data, retained records, and remaining tasks.",
          "Do not retain unnecessary personal data such as tenant contact or identity records. Separate sale, tax, settlement, and handover records into what must be retained and what should be deleted. Finish by confirming that unfinished tasks are zero."
        ]
      ],
      "method": [
        [
          "Confirm legal and financial completion status.",
          "Do not repeat the detailed procedures; confirm completion only through the relevant institution or responsible person.",
          [
            "Final payment complete",
            "Debt repayment confirmed",
            "Rights and document-processing status",
            "Responsible person"
          ],
          "Do not determine legal completion from this site's content alone.",
          "Legal and financial items are marked complete or requiring further verification."
        ],
        [
          "Lock the final settlement values.",
          "Confirm whether figures estimated in Net Proceeds are now final and leave any unresolved items clearly open.",
          [
            "Deposits",
            "Service charges",
            "Receivables and advances",
            "Other settlement items"
          ],
          "Do not repeat the settlement calculation method.",
          "Every settlement item is either final or marked for further verification."
        ],
        [
          "Complete the physical handover.",
          "Hand over keys, cards, remotes, facility access tools, and required operating materials to the designated recipient.",
          [
            "Keys",
            "Access cards",
            "Parking and facility access",
            "Receipt confirmation"
          ],
          "Record who received each item, not merely that it was handed over.",
          "There are zero incomplete items on the physical-handover list."
        ],
        [
          "Close digital and vendor relationships.",
          "Transfer, terminate, or change accounts, permissions, automatic payments, and vendor contact routes.",
          [
            "CCTV/IoT",
            "Management apps",
            "Automatic payments",
            "Vendor contacts"
          ],
          "Do not hand over personal login credentials as-is.",
          "No operating permissions or contact relationships remain under the former owner's name."
        ],
        [
          "Archive required records and confirm zero remaining tasks.",
          "Separate records to retain from data to delete, then close each remaining task one by one.",
          [
            "Records to retain",
            "Personal data to delete",
            "Incomplete tasks",
            "Final recovered capital"
          ],
          "Confirm statutory retention periods separately according to the country and transaction terms.",
          "Remaining responsibilities, permissions, and tasks are either zero or clearly transferred to a named follow-up owner."
        ]
      ],
      "signals": [
        "The former owner's account can still access the system.",
        "The recipient and completion status for keys and cards are not recorded.",
        "Vendors or tenants are still contacting the former owner.",
        "The change status for automatic payments, insurance, or utilities is not confirmed.",
        "Retained records and personal data to be deleted are not separated."
      ],
      "readySignals": [
        "Legal and financial completion status has been confirmed.",
        "Settlement values are closed as either final or requiring further verification.",
        "The recipient and completion status of physical handover are recorded.",
        "Accounts, vendor relationships, and automatic payments have been transferred or terminated.",
        "Retained and deleted records are separated, with no remaining tasks."
      ],
      "cases": [
        {
          "label": "CASE A",
          "title": "Final payment is complete, but operating access remains",
          "situation": "Final payment and legal procedures are complete, but CCTV and access-control apps still work on the former owner's phone.",
          "observe": "Digital access remains even though legal ownership has changed, so operating responsibility and personal-data risks can continue.",
          "judge": "Closing & Handover is not about closing the transaction again; it is about reducing the former owner's remaining operating access to zero.",
          "next": "Confirm the account owner and management provider, then record completion of the transfer or revocation."
        },
        {
          "label": "CASE B",
          "title": "Vendor and automatic-payment relationships remain",
          "situation": "Elevator, cleaning, internet, and some utility charges continue under the former owner's name, and management vendors still call the old contact number.",
          "observe": "The facilities have been handed over, but contracts, payments, and contact relationships remain, leaving post-transaction work unfinished.",
          "judge": "Operational handover is not complete just because the keys were transferred.",
          "next": "For each vendor, confirm the person responsible for change, cancellation, or handover and the completion date."
        },
        {
          "label": "CASE C",
          "title": "Closing remaining tasks by count",
          "situation": "Educational example: manage 12 keys, 8 access cards, 5 management accounts, 7 automatic payments, 6 vendor relationships, and 9 categories of retained records on one closing list.",
          "observe": "The first review finds four incomplete items: two accounts, one automatic payment, and one vendor contact.",
          "judge": "Separating final-payment completion from EXIT completion makes the four unfinished items visible and trackable.",
          "next": "Assign an owner and expected completion date to all four and continue until the remaining-task count reaches zero."
        }
      ],
      "questions": [
        {
          "q": "Have legal and financial completion been confirmed through the responsible institution or person?",
          "why": "This question checks completion status without re-explaining the procedure.",
          "next": "If not confirmed, record the responsible person and planned confirmation date."
        },
        {
          "q": "Have the settlement figures estimated in Net Proceeds been replaced by actual final values?",
          "why": "The gap between expected recovered capital and the actual final result must be closed.",
          "next": "Leave unresolved settlement items separately and assign an owner."
        },
        {
          "q": "Are there any keys, cards, remotes, or access tools still in your possession?",
          "why": "If physical access remains, the operating relationship has not fully ended.",
          "next": "Record the recipient and handover-confirmation status."
        },
        {
          "q": "Do any CCTV, IoT, management-app, or other access rights still remain under your account?",
          "why": "This prevents lingering digital permissions and personal-data issues.",
          "next": "Transfer access to a shared account or revoke the personal permission."
        },
        {
          "q": "Have all automatic payments, insurance, utilities, and vendor contacts been transferred?",
          "why": "This prevents continued work or charges after the transaction.",
          "next": "Record the completion date for each vendor change or cancellation."
        },
        {
          "q": "Have you separated records to retain from personal data to delete, and are remaining tasks at zero?",
          "why": "This is the final completion check for the EXIT.",
          "next": "Assign a follow-up owner and completion date to every remaining item."
        }
      ],
      "experts": [
        {
          "topic": "Legal closing completion",
          "intro": "Do not determine final payment, title transfer, or rights-clearing procedures from the site alone.",
          "check": "Legal and documentary completion status and any remaining action",
          "when": [
            "When rights or document processing remains incomplete",
            "When it is unclear whether amended terms were reflected",
            "When handover conditions are tied to legal responsibility"
          ],
          "prepare": [
            "Final contract and amendment records",
            "Registration and rights records",
            "Completion-confirmation records"
          ],
          "confirm": "Legal professional / relevant authority",
          "apply": "Reflect only complete or further-verification status in the closing checklist."
        },
        {
          "topic": "Tax and final-settlement confirmation",
          "intro": "Confirm whether taxes and settlements estimated in Net Proceeds have become actual final figures.",
          "check": "Final tax and settlement figures, plus any follow-up filing or retention requirements",
          "when": [
            "When expected and actual figures differ significantly",
            "When filing or evidence confirmation is required",
            "When retention requirements are unclear"
          ],
          "prepare": [
            "Sale, cost, and settlement records",
            "Net-proceeds calculation records",
            "Supporting evidence"
          ],
          "confirm": "Tax professional",
          "apply": "Reflect confirmed values in final recovered capital and retained records."
        },
        {
          "topic": "Financial completion",
          "intro": "Do not re-explain detailed loan repayment or collateral procedures. Confirm the actual completion status.",
          "check": "Any remaining action related to repayment, interest settlement, or collateral",
          "when": [
            "When confirmation from the financial institution is still pending",
            "When the repayment amount differs from the actual withdrawal",
            "When collateral-related confirmation is required"
          ],
          "prepare": [
            "Loan agreement",
            "Repayment records",
            "Final-payment records"
          ],
          "confirm": "Financial institution",
          "apply": "Reflect complete or further-verification status in the closing checklist."
        },
        {
          "topic": "Operational and account handover",
          "intro": "Rather than judging facility technology, confirm that no operating authority or relationship remains with the former owner.",
          "check": "Actual handover scope for facility access, digital accounts, and vendor relationships",
          "when": [
            "When there are multiple accounts",
            "When there are many management vendors",
            "When it is unclear who receives what"
          ],
          "prepare": [
            "Key and card list",
            "Account list",
            "Vendor and automatic-payment list"
          ],
          "confirm": "Relevant management or technical staff",
          "apply": "Record the recipient and completion status to close any remaining operating relationship of the former owner."
        }
      ],
      "expertStatus": {
        "title": "What responsibilities still remain with the former owner?",
        "body": "Final payment and EXIT completion are not the same thing. In addition to legal and financial completion, check for remaining physical access, digital permissions, vendor and payment relationships, personal data, and unfinished tasks.",
        "items": [
          "Legal and financial completion",
          "Final settlement",
          "Physical access rights",
          "Digital and vendor relationships",
          "Retained records and remaining tasks"
        ]
      },
      "summary": [
        "Step 06 is not about relearning legal closing procedures; it is about ending the owner's operating responsibility.",
        "For settlement, confirm final status rather than recalculate; for handover, confirm receipt and permission removal rather than mere delivery.",
        "The EXIT is not complete until keys, accounts, vendors, automatic payments, personal data, and remaining tasks are fully cleared."
      ],
      "conclusion": "The final standard for EXIT is not completion of final payment. It is the point at which the former owner has no remaining responsibility, access, operating relationship, or unfinished task.",
      "nextId": null,
      "nextName": "Back to EXIT",
      "nextPrompt": "Review all six stages again, from Sell or Hold through Closing & Handover."
    }
  ],
  "ja": [
    {
      "id": "readiness",
      "num": "02",
      "code": "VALUE READY",
      "name": "売却資料の整理",
      "prompt": "売却前に、この物件は説明できる状態になっているか",
      "lead": "売却資料の整理は、物件をもう一度管理する段階ではありません。保有中に蓄積した記録を、買主が一度で理解できる売却資料PACKに変えるプロセスです。",
      "whyDetails": [
        "保有中は記録を継続して更新することが重要です。EXITでは、その管理方法を繰り返し説明しません。",
        "同じ基準日の賃貸借要約、直近12か月の収入・費用、設備履歴、追加確認項目を一つの説明構造にまとめます。",
        "契約書や行政資料をここで法的に解釈しません。最新版か、要約表と根拠資料が一致しているかだけを確認します。",
        "判断が必要な差異は追加確認として表示します。法的判断は契約確認の段階または専門家確認に回します。",
        "完了基準は資料の量ではありません。「要約表 → 根拠資料 → 追加確認」の順に現在の状態をたどれる必要があります。"
      ],
      "core": [
        [
          "賃貸借記録を売却用の要約表に変換します",
          "保有中に管理してきた賃貸借記録を再分析せず、基準日・テナント・保証金・賃料・契約終了日・空室を1枚の売却用要約表に移します。契約書は根拠資料としてつなぎ、要約表と異なる場合はどちらが最新か確認対象にします。"
        ],
        [
          "空室・未収記録を「現在の状態説明」に変えます",
          "ここでは空室対策や募集戦略は扱いません。既存の管理記録から、発生日・現在状態・確認済みの原因・進行中の対応だけを抜き出し、買主が今何が残っているか理解できるように整理します。"
        ],
        [
          "設備記録を将来負担の説明資料にまとめます",
          "点検周期や維持管理方法は繰り返しません。最近の点検、修繕履歴、繰り返し故障、今後1〜3年のCAPEXと根拠資料だけを売却用設備要約に入れます。技術的な適否は判断せず、追加確認の要否だけを表示します。"
        ],
        [
          "契約・図面・行政資料は解釈せず、つながり方を確認します",
          "契約条項や許認可の法的効力を説明する代わりに、保有/未保有、最新版/旧版、要約表との一致/不一致、追加確認の要否だけを表示します。解釈が必要な項目は契約確認または関係機関へ回します。"
        ],
        [
          "収入・費用は分析ではなく「説明できる数字」に整理します",
          "利回りや適正費用を再分析しません。直近12か月など同じ期間にそろえた収入・費用の数字に根拠資料をつなぎ、一時的・反復的・推定値を分けて、価格戦略へ渡せる状態にします。"
        ],
        [
          "最後に一つの売却資料PACKへまとめます",
          "1ページ要約、賃貸借根拠、収入・費用根拠、設備資料、追加確認リストの順にまとめます。各資料の状態と場所を表示し、買主から質問があったときに同じ資料を何度も探さなくて済む状態にします。"
        ]
      ],
      "method": [
        [
          "管理記録から売却資料だけを抽出します",
          "新しい管理記録を作るのではなく、既存記録の中から現在の状態を説明するために必要な資料だけを選びます。",
          [
            "最新の賃貸借資料",
            "直近12か月の収入・費用",
            "設備・修繕履歴",
            "空室・未収状況"
          ],
          "管理記録全体をそのまま渡しません。売却説明に必要な範囲だけを抽出します。",
          "売却用要約に入れる資料一覧が確定しています。"
        ],
        [
          "すべての要約資料の基準日をそろえます",
          "賃貸借、空室、保証金、収入・費用、設備状態の基準日をそろえ、現在の状態を同じ時点で説明します。",
          [
            "賃貸借の基準日",
            "収入・費用の対象期間",
            "空室の基準日",
            "設備点検日"
          ],
          "基準日が異なる数字を、同じ時点の値のようにまとめません。",
          "各要約表に基準日が表示され、相互に比較できる状態になっています。"
        ],
        [
          "要約表と根拠資料のつながりを確認します",
          "契約書・入金記録・点検資料など、要約値の根拠となる資料をつなぎ、差異は追加確認として表示します。",
          [
            "保証金合計",
            "月額賃料",
            "契約満了",
            "設備・修繕費"
          ],
          "不一致を任意に修正して数字を合わせません。",
          "すべての主要数値に根拠資料または追加確認の状態が付いています。"
        ],
        [
          "問題項目を「説明 + 確認経路」に変えます",
          "空室・未収・資料不足・未完了修繕は、問題を隠すのではなく、現在状態と次の確認経路を一緒に記録します。",
          [
            "現在状態",
            "確認済みの原因",
            "追加資料",
            "担当者・確認先"
          ],
          "未解決の項目を問題なしとして表示しません。",
          "各問題項目に現在状態と次の確認が一緒に表示されています。"
        ],
        [
          "PACKの順序を固定します",
          "共有資料は、要約表 → 根拠資料 → 追加確認リストの順にまとめます。",
          [
            "1ページ要約",
            "根拠資料フォルダ",
            "追加確認リスト",
            "機密情報の分離"
          ],
          "個人情報や不要な内部記録をまとめて共有しません。",
          "初めて見る人でも同じ順序で現在の状態を追えます。"
        ]
      ],
      "signals": [
        "契約書と賃貸借表の主要数値が一致していません。",
        "空室の発生原因と現在状態を説明しにくい状態です。",
        "大きな修繕費が点検根拠とつながっていません。",
        "実際の使用状況と行政資料の差がまだ確認されていません。",
        "収入・費用資料の基準期間がそろっていません。"
      ],
      "readySignals": [
        "賃貸借表と契約書が同じ基準日で整理されています。",
        "空室・未収の原因と現在状態を説明できます。",
        "今後の主要CAPEXと根拠資料がつながっています。",
        "資料不足・不一致が追加確認項目として分けられています。",
        "収入・費用の数字に対象期間と根拠資料がつながっています。"
      ],
      "cases": [
        {
          "label": "CASE A",
          "title": "資料が整理された物件",
          "situation": "テナント7名、直近12か月の収入・費用表、直近2年の修繕履歴、主要設備の点検資料が一つの基準日で整理されています。",
          "observe": "賃貸借要約表の保証金・賃料が契約書と一致し、空室1室についても発生時点と現在の募集条件が記録されています。",
          "judge": "問題が全くないという意味ではなく、質問が出たときにどの資料で確認するかをすぐ説明できる状態です。",
          "next": "この状態なら、整理した資料を価格戦略の根拠として次へ渡せます。"
        },
        {
          "label": "CASE B",
          "title": "資料はあるが版が混在している物件",
          "situation": "契約書、表計算、メッセージ、手書き台帳に情報はありますが、どの賃貸借表が最新版か明確ではありません。",
          "observe": "賃料と実際の入金額が異なり、最近の修繕2件の費用証憑もつながっていません。",
          "judge": "資料の量より、最新版かどうかと整合性が先です。この状態で価格説明を始めると、同じ質問を何度も確認することになります。",
          "next": "まず最新版を決め、不一致の原因確認からやり直します。"
        },
        {
          "label": "CASE C",
          "title": "数字が一致しない場合",
          "situation": "学習用の例：テナント8名、契約書上の保証金合計4.2億ウォン、賃貸借表では3.9億ウォン、2室が7か月空室、2年以内にエレベーター修繕費6,000万ウォンを見込んでいます。",
          "observe": "保証金3,000万ウォンの差は取引終了時の精算に直接つながり、長期空室とCAPEXは価格や実査の質問にも影響します。",
          "judge": "このケースの要点は値下げすべきという結論ではなく、現在の数字と将来費用の根拠を先にそろえることです。",
          "next": "保証金差の原因、空室募集状況、CAPEXの根拠を確認してから価格戦略へ進みます。"
        }
      ],
      "questions": [
        {
          "q": "現在の賃貸借表の基準日はいつですか？",
          "why": "現在の状態か過去の状態かを区別する出発点です。",
          "next": "基準日がない場合は、最新の契約書を基準に新しい要約表を作ります。"
        },
        {
          "q": "保証金の総額は契約書・台帳・入金記録と一致していますか？",
          "why": "保証金は取引終了時の精算に直接つながる数字です。",
          "next": "一致しない場合は、テナント別の差異表を作り、最新の根拠を確認します。"
        },
        {
          "q": "各空室について、発生時期と原因を説明できますか？",
          "why": "空室率一つよりも、再賃貸の可能性を理解する助けになります。",
          "next": "原因が分からない場合は、直前の賃貸条件と最近の募集履歴から確認します。"
        },
        {
          "q": "今後3年以内の大きな修繕項目と予想費用は整理されていますか？",
          "why": "今後のCAPEXは、価格と実査の両方で共通の質問になります。",
          "next": "金額が不明確なら、点検や見積りを追加確認項目として表示します。"
        },
        {
          "q": "収入・費用の各数字に根拠資料がつながっていますか？",
          "why": "その数字を説明できるかを判断するための質問です。",
          "next": "根拠がない場合は推定値として表示し、確認経路を決めます。"
        },
        {
          "q": "今、自分で説明しにくい項目が何か把握していますか？",
          "why": "分からないことを把握していれば、専門家確認や追加資料の依頼を準備できます。",
          "next": "未確認項目を別リストにし、担当者と確認先を指定します。"
        }
      ],
      "experts": [
        {
          "topic": "権利・賃貸借・契約",
          "intro": "契約内容や権利関係の法的意味を自分だけで確定しません。",
          "check": "紛争・権利関係・契約解釈が実際の取引条件に影響するか",
          "when": [
            "賃貸借紛争が進行中の場合",
            "登記・権利関係が複雑な場合",
            "契約書と実際の運用内容が異なる場合"
          ],
          "prepare": [
            "登記関連資料",
            "賃貸借契約書・特約",
            "通知・紛争関連記録"
          ],
          "confirm": "法律専門家",
          "apply": "確認結果を追加確認リストと買主対応資料に反映します。"
        },
        {
          "topic": "税務・会計資料",
          "intro": "費用証憑や資本的支出など税務判断が必要な資料は、通常の運営費と分けます。",
          "check": "どの費用資料が税金・手取り額の根拠として認められ、活用できるか",
          "when": [
            "大きな修繕・改良費があった場合",
            "費用証憑が不完全な場合",
            "個人・法人など保有構造が複雑な場合"
          ],
          "prepare": [
            "帳簿・証憑",
            "取得・修繕関連資料",
            "最近の税務資料"
          ],
          "confirm": "税務専門家",
          "apply": "確認済みの資料だけを、価格戦略と手取り額計算の根拠として次へ渡します。"
        },
        {
          "topic": "設備・技術状態",
          "intro": "今後の修繕費が売却判断や価格に影響するほど大きい場合は、技術的な確認が必要です。",
          "check": "主要設備の現在状態と今後1〜3年の予想CAPEX",
          "when": [
            "エレベーター・外壁・屋上などで大きな費用が予想される場合",
            "故障が繰り返している場合",
            "既存の点検記録だけでは状態が明確でない場合"
          ],
          "prepare": [
            "最近の点検記録",
            "修繕履歴",
            "写真・既存見積り"
          ],
          "confirm": "該当分野の技術専門家",
          "apply": "確認した時期と費用範囲を設備要約とCAPEXリストに反映します。"
        },
        {
          "topic": "許認可・行政確認",
          "intro": "使用状況と行政資料が異なる疑いがある場合、適否をサイト側で判断しません。",
          "check": "現在の使用状況と保有している行政資料の間で追加確認が必要な部分",
          "when": [
            "図面と実際の使用が異なる場合",
            "変更履歴が不明確な場合",
            "必要資料を保有していない場合"
          ],
          "prepare": [
            "建物関連資料",
            "図面",
            "使用承認・変更資料"
          ],
          "confirm": "関係機関または関連専門家",
          "apply": "確認前に問題なしとは表示せず、追加確認の状態を維持します。"
        }
      ],
      "expertStatus": {
        "title": "まだ確認できていない項目は何ですか？",
        "body": "資料が完璧でなければ次へ進めないわけではありません。ただし、何が確認済みで何が追加確認なのかを区別できる必要があります。",
        "items": [
          "賃貸借の整合性",
          "空室・未収の原因",
          "今後のCAPEX",
          "権利・許認可",
          "収入・費用の根拠"
        ]
      },
      "summary": [
        "売却資料の整理は管理方法を学び直す段階ではなく、既存記録を売却資料PACKへ変える段階です。",
        "契約・行政資料は解釈せず、最新版か、整合しているか、追加確認が必要かだけを表示します。",
        "完成したPACKは、価格戦略と買主からの質問対応に使う入力資料になります。"
      ],
      "conclusion": "良い売却資料の整理は、物件をより良く見せることではありません。すでに存在する事実と記録を、買主が途切れずにたどれるようにつなぐことです。",
      "nextId": "pricing",
      "nextName": "03 価格戦略",
      "nextPrompt": "整理した現在状態を根拠に、説明できる目標価格の範囲を作ります。"
    },
    {
      "id": "pricing",
      "num": "03",
      "code": "PRICING",
      "name": "価格戦略",
      "prompt": "目標価格を何で説明するか",
      "lead": "価格戦略は、物件の適正価値を最初から再分析するページではありません。すでに得た分析根拠を使い、どの価格を提示し、どこまで交渉するかを決める段階です。",
      "whyDetails": [
        "ANALYSISと売却資料の整理で、実取引・収益・空室・CAPEXの根拠はすでに集めています。ここでは再計算しません。",
        "市場に提示する価格、実際に期待する目標価格、これ以下では受けない最低受入価格は、それぞれ異なる数字でも構いません。",
        "この3つを混同すると、問い合わせのたびに基準が変わります。公開する価格と、内部で守る基準を分けます。",
        "価格調整だけが交渉ではありません。残金日、引渡し時期、修繕範囲、資料提供範囲など、価格以外の条件も一緒に決めます。",
        "重要なのは、分析根拠のうち何を価格説明に使うかを選ぶことです。その根拠から、提示価格・下限・条件の戦略を作ります。"
      ],
      "core": [
        [
          "ANALYSISで得た価格根拠のうち何を使うか選びます",
          "類似実取引、現在のキャッシュフロー、空室、テナント構成、CAPEXを再分析しません。ANALYSISで確認済みの根拠から、買主への価格説明に直接使うものと補助資料にするものを分けます。"
        ],
        [
          "市場への売出価格を決めます",
          "売出価格は、最初に買主へ公開する数字です。比較根拠と物件状態で説明できる必要があり、周辺の売出価格より高い・低いという理由だけで決めません。"
        ],
        [
          "目標価格を別に設定します",
          "目標価格は、実際の交渉で目指す内部目標値です。売出価格と同じでも構いませんが、必ず同じである必要はありません。問い合わせ反応や条件が変わっても、内部目標は別に管理します。"
        ],
        [
          "最低受入価格は内部の意思決定値として管理します",
          "最低受入価格は公開用の数字ではなく、売却目的、予想手取り額、税金・負債、代替資本計画を踏まえた内部下限です。交渉中に感情で変わらないよう、事前に根拠を記録します。"
        ],
        [
          "価格以外で譲歩できる条件を先に分けます",
          "残金日、引渡し時期、軽微な修繕、資料提供範囲、日程調整など、価格を下げずに変えられる条件と、変えにくい条件を先に分けます。"
        ],
        [
          "価格を調整する前に「根拠が変わったか」を確認します",
          "問い合わせが少ないという理由だけですぐ値下げしません。市場反応、新しい実取引、空室変化、CAPEX確定、実査結果などで価格根拠が実際に変わったかを確認し、その後に売出価格・目標価格・条件を見直します。"
        ]
      ],
      "method": [
        [
          "価格説明に使う根拠を選びます",
          "ANALYSISと売却資料の整理で確認した資料から、価格説明に直接使う根拠だけを選びます。",
          [
            "類似取引の要約",
            "現在のキャッシュフロー",
            "空室・テナントの要点",
            "確定済みCAPEX"
          ],
          "分析をやり直しません。確認済みの根拠だけを使います。",
          "価格説明に使う3〜5個の主要根拠が決まっています。"
        ],
        [
          "市場売出価格と目標価格を分けます",
          "公開する価格と実際の目標を別々に記録し、それぞれの根拠を書きます。",
          [
            "市場売出価格",
            "目標価格",
            "各価格の根拠",
            "公開 / 内部の区分"
          ],
          "二つの数字を同じ意味で使いません。",
          "市場に見せる数字と内部目標が明確に分かれています。"
        ],
        [
          "内部で最低受入価格を決めます",
          "予想手取り額と売却目的を踏まえ、この価格を下回る提案では再検討が必要になる内部下限を決めます。",
          [
            "最低受入価格",
            "税引後・負債の影響",
            "売却目的",
            "再検討条件"
          ],
          "最低受入価格を外部向けの宣伝文句として使いません。",
          "交渉中に必ず再判断する内部下限が決まっています。"
        ],
        [
          "価格以外の条件に優先順位を付けます",
          "価格の代わりに調整できる条件と、譲歩しにくい条件を先に分けます。",
          [
            "残金日",
            "引渡し時期",
            "修繕範囲",
            "資料提供範囲"
          ],
          "すべての条件を価格一つに換算しようとしません。",
          "価格以外の交渉カードと譲れない線が整理されています。"
        ],
        [
          "調整ルールを決めます",
          "価格を変える前に、何が変わっている必要があるかを先に決めます。",
          [
            "市場反応を見る期間",
            "新しい実取引",
            "実査結果",
            "CAPEXの確定"
          ],
          "問い合わせ数件だけで、すぐ値下げしません。",
          "価格調整の根拠と再検討時点が記録されています。"
        ]
      ],
      "signals": [
        "市場売出価格と目標価格が分かれていません。",
        "最低受入価格が売却目的とつながっていません。",
        "価格を説明する主要根拠が整理されていません。",
        "価格以外の譲歩条件と非譲歩条件がありません。",
        "問い合わせ反応だけで価格をすぐ変更しています。"
      ],
      "readySignals": [
        "市場売出価格・目標価格・最低受入価格が分かれています。",
        "各価格に使う主要根拠が整理されています。",
        "価格以外の譲歩条件と非譲歩条件が分かれています。",
        "価格調整の確認条件と検討期間が決まっています。",
        "最低受入価格を下回る提案では再検討するルールがあります。"
      ],
      "cases": [
        {
          "label": "CASE A",
          "title": "同じ分析値でも提示戦略は変わります",
          "situation": "学習用の例：ANALYSISで類似取引26〜28億ウォン、現在のキャッシュフロー、空室、CAPEXがすでに整理されていると仮定します。",
          "observe": "売主は、市場売出価格28.5億ウォン、目標価格28億ウォン、内部の最低受入価格26.5億ウォンという、役割の異なる数字を持つことができます。",
          "judge": "この例は28億ウォンが適正価格だという結論ではありません。同じ分析根拠を公開価格・目標・下限に分けて管理する方法を示します。",
          "next": "各価格をその水準にした理由を内部で記録し、実際の手取り額計算につなげます。"
        },
        {
          "label": "CASE B",
          "title": "価格ではなく条件を調整する場合",
          "situation": "買主が1億ウォンの値下げを求めていますが、売主には残金日を早めたり、軽微な修繕範囲を調整したりする余地があります。",
          "observe": "価格だけを交渉カードにすると、すぐ値下げにつながることがあります。条件を分けておけば、別の調整案を比較できます。",
          "judge": "価格戦略は一つの数字ではなく、価格と条件の組み合わせです。",
          "next": "変えられる条件と変えない条件をもう一度確認します。"
        },
        {
          "label": "CASE C",
          "title": "市場反応が弱くてもすぐ値下げしないケース",
          "situation": "学習用の例：売出価格28.5億ウォン、目標28億ウォン、最低受入26.5億ウォン。4週間で問い合わせ3件、現地訪問1件がありましたが、新しい実取引やCAPEXの変化はありません。",
          "observe": "問い合わせが少ないことは重要ですが、価格根拠そのものが変わったとは限りません。",
          "judge": "まず露出、ターゲット、条件、説明資料を点検し、市場根拠そのものが実際に変わったときに価格調整を検討します。",
          "next": "調整ルールに従い、再検討時点と変更根拠を記録します。"
        }
      ],
      "questions": [
        {
          "q": "市場に見せる価格と実際の目標価格を分けましたか？",
          "why": "公開値と内部目標を混ぜると、交渉基準が揺れます。",
          "next": "二つの数字を別々に記録し、それぞれの根拠を一行で書きます。"
        },
        {
          "q": "最低受入価格はどの資本目的とつながっていますか？",
          "why": "下限は感情ではなく、売却目的と手取り額につながっている必要があります。",
          "next": "予想手取り額の範囲と、売却後の資本計画を再確認します。"
        },
        {
          "q": "価格を説明する主要根拠を3〜5個に絞りましたか？",
          "why": "分析資料をすべて説明し直すのではなく、主要な根拠だけを示す必要があります。",
          "next": "ANALYSISと売却資料の整理から、価格に直接つながる根拠だけを選びます。"
        },
        {
          "q": "価格の代わりに調整できる条件は何ですか？",
          "why": "交渉カードが価格だけだと、不要な値下げにつながる可能性があります。",
          "next": "残金日・引渡し・修繕・資料範囲を分け、譲歩できるか表示します。"
        },
        {
          "q": "最低受入価格を下回る提案が来たら、何を再確認しますか？",
          "why": "内部下限は自動的な拒否価格ではなく、再検討を始める基準です。",
          "next": "手取り額・売却目的・代替資本計画をもう一度比較します。"
        },
        {
          "q": "価格を調整する条件と時期を事前に決めていますか？",
          "why": "問い合わせ数件だけで場当たり的に価格を変えることを減らします。",
          "next": "市場反応を見る期間と、根拠変化の条件を記録します。"
        }
      ],
      "experts": [
        {
          "topic": "市場での説明可能性",
          "intro": "仲介会社に価格を決めてもらうのではなく、現在の売出価格が市場でどのような根拠で説明できるかを確認します。",
          "check": "現在の売出価格と比較根拠が実際の買主に説明できるか",
          "when": [
            "類似取引が少ない場合",
            "問い合わせ反応と分析根拠が大きく異なる場合",
            "特殊なテナント・用途構成がある場合"
          ],
          "prepare": [
            "ANALYSISの比較根拠",
            "賃貸・空室要約",
            "CAPEX要約"
          ],
          "confirm": "不動産仲介会社など市場実務者",
          "apply": "市場反応は価格調整の単独根拠ではなく、再検討材料として使います。"
        },
        {
          "topic": "客観的な価値意見",
          "intro": "特殊な資産、または客観的な評価意見が必要な場合に限って別途確認します。",
          "check": "内部の価格根拠と客観的評価との違い",
          "when": [
            "類似取引が非常に少ない場合",
            "担保・評価目的もある場合",
            "価格根拠を客観的に補強する必要がある場合"
          ],
          "prepare": [
            "資産資料",
            "収益資料",
            "権利資料"
          ],
          "confirm": "必要に応じて不動産鑑定関連専門家",
          "apply": "評価意見は市場売出価格を自動的に確定する数字ではなく、根拠の一つとして反映します。"
        },
        {
          "topic": "税引後の下限確認",
          "intro": "最低受入価格が、税引後の実際の回収資本と合っているか確認する必要があります。",
          "check": "特定価格での予想手取り額が内部下限と合うか",
          "when": [
            "税金の影響が大きい場合",
            "保有構造が複雑な場合",
            "最低受入価格の余裕が小さい場合"
          ],
          "prepare": [
            "取得・保有資料",
            "予想価格帯",
            "負債資料"
          ],
          "confirm": "税務専門家",
          "apply": "確認結果を、手取り額と最低受入価格の再検討に使います。"
        },
        {
          "topic": "条件の法的影響",
          "intro": "価格以外の条件が法的義務やリスクを変える可能性がある場合、その意味を自分だけで確定しません。",
          "check": "残金日・引渡し・修繕・資料提供など条件変更の法的影響",
          "when": [
            "条件交渉が複雑になった場合",
            "契約文言の変更が必要な場合",
            "権利・賃貸借の問題と条件がつながる場合"
          ],
          "prepare": [
            "交渉条件リスト",
            "契約案・関連資料"
          ],
          "confirm": "法律専門家",
          "apply": "法的確認が必要な条件は、価格交渉カードとは別に表示します。"
        }
      ],
      "expertStatus": {
        "title": "価格戦略でまだ確認が必要なものは何ですか？",
        "body": "価格を唯一の正解として確定することが目的ではありません。公開価格・内部目標・下限・条件のうち、根拠が十分なものと追加確認が必要なものを分けます。",
        "items": [
          "市場売出価格の根拠",
          "目標価格",
          "最低受入価格",
          "価格以外の条件",
          "調整ルール"
        ]
      },
      "summary": [
        "価格戦略は価格を再分析するページではなく、既存の分析根拠を売却戦略へ変える段階です。",
        "市場売出価格・目標価格・最低受入価格は、それぞれ役割の異なる数字です。",
        "価格以外の条件と価格調整ルールまで決めてこそ、交渉基準がぶれません。"
      ],
      "conclusion": "分析値を再計算するより重要なのは、どの価格をなぜ提示し、どこまでどの条件で交渉するかを事前に決めることです。",
      "nextId": "buyer-readiness",
      "nextName": "04 買主対応",
      "nextPrompt": "価格根拠と整理した資料を、買主の実際の質問につなげます。"
    },
    {
      "id": "buyer-readiness",
      "num": "04",
      "code": "BUYER READY",
      "name": "買主対応",
      "prompt": "買主は何を確認し、どこに疑問を持つか",
      "lead": "買主対応は、売却資料PACKをもう一度説明する段階ではありません。質問が来たときに、どの資料で答え、何を追加確認へ回すかを決める実査Q&Aの段階です。",
      "whyDetails": [
        "資料が整理されていても、質問と資料がつながっていなければ同じ説明を繰り返すことになります。",
        "保証金総額や今後の修繕費を聞かれたとき、最初の回答資料と根拠資料がすぐにつながる必要があります。",
        "権利・契約・許認可など法的判断が必要な質問には、自分だけで答えません。確認済みの事実までを回答します。",
        "判断が必要な質問は、契約確認または専門家確認の経路へ回します。誰が確認するかも一緒に決めます。",
        "この段階の成果物は資料PACKではなく、質問別の回答表です。質問・資料・追加確認・担当者・状態が一行でつながる必要があります。"
      ],
      "core": [
        [
          "まず買主の質問をリスト化します",
          "賃貸借・収益・空室・設備・CAPEX・権利・許認可・精算など、よく出る質問を先に書き出します。資料の種類を学び直すのではなく、どんな質問が来るかを基準に準備します。"
        ],
        [
          "質問ごとに「最初の回答資料」を一つ決めます",
          "保証金の質問には最新の賃貸借要約、最近の収益には12か月の収入・費用要約など、最初に見せる資料を一つ決めます。複数ファイルを一度に送らず、質問に合う最初の資料を選びます。"
        ],
        [
          "最初の回答資料に根拠資料をつなげます",
          "要約表の数字を、契約書・入金記録・点検資料・見積りなどの根拠につなげます。買主がさらに確認したい場合、すぐ次の根拠へ進める状態にします。"
        ],
        [
          "直接答えられる事実と、専門家確認が必要な質問を分けます",
          "現在の保証金合計のように資料で確認できる事実は直接説明できます。一方、権利の法的効果や許認可適合性のように判断が必要な質問は、保有者自身で結論づけません。"
        ],
        [
          "未確認の質問には担当者と期限を付けます",
          "分からない質問を推測で答えず、追加確認として表示し、誰がいつ確認するかを決めます。未確認状態の管理が実査のスピードを左右します。"
        ],
        [
          "質問と回答のバージョンを管理します",
          "同じ質問への回答が変わらないよう、依頼日、回答日、使用資料、追加資料、完了状態を記録します。実査対応の要点は、回答の一貫性と追跡可能性です。"
        ]
      ],
      "method": [
        [
          "想定質問を作ります",
          "売却資料の整理で作ったPACKを見ながら、買主が聞きそうな質問を先に書き出します。",
          [
            "賃貸借の質問",
            "収益・空室の質問",
            "設備・CAPEXの質問",
            "権利・許認可の質問"
          ],
          "資料一覧を作り直す段階ではありません。質問を起点にします。",
          "主要質問リストが完成しています。"
        ],
        [
          "最初の回答資料と根拠をつなげます",
          "各質問の横に、最初に見せる要約資料と、その根拠資料をつけます。",
          [
            "最初の回答資料",
            "根拠資料",
            "基準日",
            "資料の場所"
          ],
          "一つの質問に複数ファイルを無造作につなげません。",
          "質問ごとに最初の資料と根拠が指定されています。"
        ],
        [
          "未確認・不一致を表示します",
          "資料が一致しない場合や、すぐ答えられない質問は追加確認の状態に分けます。",
          [
            "不一致内容",
            "追加資料",
            "確認の要否",
            "優先度"
          ],
          "分からない内容を推測で答えません。",
          "未確認の質問が別リストで管理されています。"
        ],
        [
          "担当者と確認経路を指定します",
          "法務・税務・技術・内部管理など、誰が答えるかを決めます。",
          [
            "担当者",
            "専門家 / 関係機関",
            "必要資料",
            "確認目標日"
          ],
          "すべての質問を保有者自身で答えようとしません。",
          "各未確認質問に担当者と確認経路が付いています。"
        ],
        [
          "回答履歴を管理します",
          "質問・回答・追加資料・完了状態を記録し、同じ質問に違う答えが出ないようにします。",
          [
            "依頼日",
            "回答日",
            "回答内容",
            "状態"
          ],
          "口頭回答だけを残しません。",
          "質問ごとの最新回答と状態を一目で確認できます。"
        ]
      ],
      "signals": [
        "同じ質問に担当者ごとに違う回答が出ています。",
        "最初の回答資料が決まっていません。",
        "要約数値と根拠資料が一致していません。",
        "専門家確認が必要な質問に、その場で回答しています。",
        "追加確認の担当者と日程が決まっていません。"
      ],
      "readySignals": [
        "主要質問ごとに最初の回答資料が決まっています。",
        "要約数値から根拠資料へすぐつながります。",
        "直接答えられる事実と専門家確認が必要な質問が分かれています。",
        "未確認質問ごとに担当者と確認経路があります。",
        "質問・回答・追加資料の最新状態を追跡できます。"
      ],
      "cases": [
        {
          "label": "CASE A",
          "title": "質問と資料がすぐつながる場合",
          "situation": "買主が「現在の保証金総額はいくらですか」と質問します。",
          "observe": "最初の回答資料として最新の賃貸借要約表を示し、必要ならテナント別の契約書根拠へすぐつなげます。",
          "judge": "資料が多いことが良いのではありません。質問への答えと根拠が一つの経路でつながっているため、実査が途切れません。",
          "next": "次の質問も同じ方法でQ&A表に記録します。"
        },
        {
          "label": "CASE B",
          "title": "回答が何度も変わる場合",
          "situation": "設備費について、保有者は「大きな費用なし」、管理者は「エレベーターの見積りあり」と答えています。",
          "observe": "同じ質問に違う答えが出ると、買主は追加確認を繰り返し、他の資料まで疑う可能性があります。",
          "judge": "重要なのは良い答えを作ることではなく、確認済みの事実と未確認状態を一つの最新版に統一することです。",
          "next": "点検資料と見積りを確認し、Q&Aの最新回答を一つの版に更新します。"
        },
        {
          "label": "CASE C",
          "title": "未確認の質問を管理する場合",
          "situation": "学習用の例：想定質問24件のうち18件は回答済みで、法務2件・設備3件・税務1件の計6件が追加確認状態です。",
          "observe": "未確認が6件あることより、それぞれに担当者・必要資料・確認目標日が付いているかが重要です。",
          "judge": "実査準備の完了は、すべての質問へ即答できる状態ではなく、未確認質問まで管理されている状態です。",
          "next": "確認が終わったら、回答バージョンと根拠資料を更新します。"
        }
      ],
      "questions": [
        {
          "q": "主要質問ごとに最初の回答資料が一つ決まっていますか？",
          "why": "資料があっても質問とつながっていなければ、実査のたびに探し直すことになります。",
          "next": "質問ごとに最初の資料を一つ指定します。"
        },
        {
          "q": "最初の回答資料の数字から根拠資料へすぐ進めますか？",
          "why": "要約だけで根拠がなければ、追加質問が繰り返されます。",
          "next": "契約書・入金記録・点検資料の場所をつなげます。"
        },
        {
          "q": "直接答えられる事実と、専門家が判断すべき内容を分けていますか？",
          "why": "法務・税務・技術判断を根拠なく答えるリスクを減らします。",
          "next": "判断が必要な質問には、担当専門家と必要資料を指定します。"
        },
        {
          "q": "現在、追加確認中の質問はいくつありますか？",
          "why": "未確認項目を数で把握してこそ、実査を管理できます。",
          "next": "未確認リストを別に作り、優先順位を付けます。"
        },
        {
          "q": "各未確認質問に担当者と確認目標日がありますか？",
          "why": "担当者がいなければ、同じ質問が先延ばしになります。",
          "next": "内部担当者・専門家・関係機関のいずれかを確認経路として指定します。"
        },
        {
          "q": "同じ質問の最新回答が一つに管理されていますか？",
          "why": "回答の版が複数あると信頼性が下がります。",
          "next": "Q&A表に最新回答と変更履歴を記録します。"
        }
      ],
      "experts": [
        {
          "topic": "法務・許認可の質問担当",
          "intro": "権利・契約・許認可の意味をここで説明せず、どの質問を専門家へ回すかを決めます。",
          "check": "直接答えるべきでない法務・行政判断の質問",
          "when": [
            "権利の法的効果を問う質問",
            "契約文言の解釈に関する質問",
            "許認可の適合性に関する質問"
          ],
          "prepare": [
            "関連する契約・登記・行政資料",
            "買主からの質問原文"
          ],
          "confirm": "法律専門家 / 関係機関",
          "apply": "Q&A表には担当者と確認状態のみを反映します。"
        },
        {
          "topic": "税務・財務の質問担当",
          "intro": "収入・費用・税金の数字に解釈が必要な質問は、資料と一緒に担当専門家へ回します。",
          "check": "税務的な解釈が必要な質問の範囲",
          "when": [
            "税金の影響に関する質問",
            "費用処理に関する質問",
            "資本的支出の扱いに関する質問"
          ],
          "prepare": [
            "帳簿・証憑",
            "質問に関連する要約表"
          ],
          "confirm": "税務専門家",
          "apply": "確認済みの回答と根拠資料の場所をQ&A表に記録します。"
        },
        {
          "topic": "設備質問の担当",
          "intro": "設備状態を断定せず、技術判断が必要な質問を分けます。",
          "check": "現場確認または技術判断が必要な設備質問",
          "when": [
            "不具合・欠陥の有無に関する質問",
            "CAPEX規模の確認",
            "点検資料だけでは結論が出しにくい場合"
          ],
          "prepare": [
            "点検資料",
            "修繕履歴",
            "写真・見積り"
          ],
          "confirm": "該当分野の技術専門家",
          "apply": "技術回答を最新のQ&Aバージョンにつなげます。"
        },
        {
          "topic": "価格質問の担当",
          "intro": "買主が価格根拠の客観性を問う場合、価格戦略資料と市場確認の経路をつなげます。",
          "check": "価格根拠について追加確認が必要な質問",
          "when": [
            "比較事例の根拠を求められた場合",
            "売出価格の算定根拠を聞かれた場合",
            "特殊資産の価格に関する質問"
          ],
          "prepare": [
            "価格戦略の要約",
            "比較根拠資料"
          ],
          "confirm": "市場実務者 / 必要に応じて価値評価の専門家",
          "apply": "価格を再分析せず、質問への回答に必要な根拠だけをつなげます。"
        }
      ],
      "expertStatus": {
        "title": "誰が答えるべき質問か決めていますか？",
        "body": "すべての質問を保有者自身で答える必要はありません。確認済みの事実は直接答え、判断が必要な質問には担当専門家と確認経路を指定します。",
        "items": [
          "直接回答可能",
          "法務・許認可",
          "税務・財務",
          "設備・技術",
          "価格・価値"
        ]
      },
      "summary": [
        "買主対応は資料をもう一度説明する段階ではなく、質問と資料をつなぐ実査Q&Aシステムです。",
        "確認済みの事実と、専門家判断が必要な質問を分けます。",
        "未確認の質問でも、担当者・確認経路・状態があれば管理できます。"
      ],
      "conclusion": "良い実査準備とは、すべての質問に即答することではありません。質問ごとに根拠と確認経路が途切れずにつながっている状態です。",
      "nextId": "net-proceeds",
      "nextName": "05 手取り額",
      "nextPrompt": "取引価格から実際に回収できる資本を計算します。"
    },
    {
      "id": "net-proceeds",
      "num": "05",
      "code": "NET PROCEEDS",
      "name": "手取り額",
      "prompt": "売却価格から実際にいくら残るか",
      "lead": "手取り額は、支払手続きをもう一度説明する段階ではありません。実際の契約価格から差引項目を引き、確定値と推定値を分けて、実際に回収できる資本の範囲を見る段階です。",
      "whyDetails": [
        "価格戦略で決めた目標価格はここでは扱い直しません。契約が確定していれば実際の契約価格、未確定なら現実的な売却価格帯を開始値にします。",
        "融資返済、税金、取引費用、保証金・管理費の精算は、取引手続きではなく差引項目として扱います。",
        "誰がいつ支払うかといった詳細な契約手続きは、契約確認と最終の終了・引継ぎへ回します。",
        "すべての数字にCONFIRMED、ESTIMATED、TO CHECKの状態を付けます。確定度の異なる数字を一つの数字として混ぜません。",
        "現在確認できている最低回収額と予想範囲を分けて見ます。まだ分からない値は別の確認項目として残します。"
      ],
      "core": [
        [
          "実際の契約価格を開始値にします",
          "価格戦略の目標価格を再説明しません。契約済みなら実際の売却代金を、未確定なら現実的な価格帯を開始値にし、状態を表示します。"
        ],
        [
          "負債は「実際の返済予定額」だけを差し引きます",
          "融資残高だけではなく、金融機関への確認が必要な中途返済費用や利息精算を含む実際の返済予定額を差引項目にします。返済手続きそのものはここでは扱いません。"
        ],
        [
          "税金はESTIMATEDとCONFIRMEDを分けます",
          "専門家確認前の予想税額は推定値として扱い、確認済みの税額・費用と混ぜません。税金の計算方法は扱わず、回収資本への影響だけを見ます。"
        ],
        [
          "取引費用は項目別の差引値に分けます",
          "仲介・法務などの取引費用を「その他費用」一行にまとめず、各項目の金額と確認状態を分けます。法的な支払手続きや手数料ルールの説明は別途確認します。"
        ],
        [
          "保証金・管理費・未収/前受は最終精算予定額だけを反映します",
          "精算方法を再説明せず、残金基準で実際に差し引かれる・引き継がれる予定額と未確定額だけを計算に入れます。最終確定は終了・引継ぎで完了状態として確認します。"
        ],
        [
          "すべての数字に状態を付けて回収範囲を作ります",
          "CONFIRMEDは確認済み、ESTIMATEDは現在の推定値、TO CHECKは追加確認が必要な値です。分けて管理すると、現在確認できている回収額と予想回収額を同時に見られます。"
        ]
      ],
      "method": [
        [
          "開始値を決めます",
          "実際の契約価格または現実的な価格帯を入力し、状態を表示します。",
          [
            "売却代金",
            "確定 / 推定の状態",
            "受取予定総額",
            "基準日"
          ],
          "目標価格をそのまま確定値として使いません。",
          "回収額計算の開始値と状態が決まっています。"
        ],
        [
          "負債の差引額を確認します",
          "金融機関基準の実際の返済予定額を入力します。",
          [
            "融資残高",
            "中途返済費用",
            "利息精算",
            "確認先"
          ],
          "融資残高だけを引いて終わりにしません。",
          "負債の差引額がCONFIRMEDまたはTO CHECKに分かれています。"
        ],
        [
          "税金・取引費用を状態別に入れます",
          "税金、仲介、法務などの費用を項目別に入力します。",
          [
            "予想税額",
            "仲介費用",
            "法務費用",
            "確認状態"
          ],
          "推定税額を確定値として扱いません。",
          "各費用に金額と状態が表示されています。"
        ],
        [
          "精算予定額を反映します",
          "保証金・管理費・未収・前受など、終了時に差し引き・引継ぎされる予定額を入れます。",
          [
            "保証金",
            "管理費",
            "未収・前受",
            "基準日"
          ],
          "ここで精算手続きを再説明しません。",
          "精算予定額と未確認項目が分かれています。"
        ],
        [
          "確認済みの最低額と予想範囲を分けます",
          "CONFIRMEDだけを反映した現在確認額と、ESTIMATEDまで反映した予想範囲を別々に計算します。",
          [
            "確定差引合計",
            "推定差引合計",
            "TO CHECKリスト",
            "予想手取り額"
          ],
          "一つの数字が完全に確定したように表現しません。",
          "現在確認額・予想範囲・未確認リストを同時に確認できます。"
        ]
      ],
      "signals": [
        "売却価格をそのまま回収資本と見ています。",
        "実際の融資返済額がまだ確認されていません。",
        "予想税額を確定値のように使っています。",
        "保証金・管理費などの精算項目が抜けています。",
        "確定値・推定値・未確認値が混在しています。"
      ],
      "readySignals": [
        "契約上の売却代金と支払日程が確認されています。",
        "実際の融資返済額の確認状態が表示されています。",
        "税金・取引費用が項目別に分かれています。",
        "各精算項目に基準日と確認状態があります。",
        "最低回収額・予想範囲・未確認値を別々に確認できます。"
      ],
      "cases": [
        {
          "label": "CASE A",
          "title": "同じ売却価格でも融資が違うケース",
          "situation": "どちらの物件も20億ウォンで売却されますが、Aの実際の融資返済額は5億ウォン、Bは11億ウォンです。",
          "observe": "税金と取引費用が同じでも、融資だけで回収資本に6億ウォンの差が生まれます。",
          "judge": "売却価格が同じという事実だけでは取引結果を比較できません。",
          "next": "融資返済額を金融機関の確認値に置き換え、残りの差引項目を続けて反映します。"
        },
        {
          "label": "CASE B",
          "title": "税金と精算が大きい場合",
          "situation": "売却価格は高いものの、予想税額、テナント保証金、その他の精算額も大きいケースです。",
          "observe": "売出価格や契約価格が高くても、次の投資に使える資本は予想より小さくなることがあります。",
          "judge": "価格戦略の成功と回収資本の規模は同じ指標ではありません。",
          "next": "税金と精算の確認状態を分け、最低回収額と予想範囲を見直します。"
        },
        {
          "label": "CASE C",
          "title": "確定値と推定値を分ける数字の例",
          "situation": "学習用の例：売却25億ウォン − 金融機関確認済み融資返済8億ウォン − 取引費用0.3億ウォン − 保証金・その他精算3.5億ウォン = 税引前13.2億ウォンです。予想税額2.2億ウォンを反映すると、手取り額は約11億ウォンです。",
          "observe": "25億、8億、0.3億、3.5億ウォンが確認済みでも、税金2.2億ウォンがまだ推定なら、11億ウォン全体を最終確定額とは呼べません。",
          "judge": "この例は、確定した構造とまだ変わる可能性がある数字を分けて見る方法を示します。",
          "next": "税務確認後に予想税額を更新し、終了・引継ぎで残金日の実際の精算値を最終反映します。"
        }
      ],
      "questions": [
        {
          "q": "実際の契約上の売却代金と支払日程を把握していますか？",
          "why": "現金流入の基準点を確認します。",
          "next": "契約条件が未確定なら、価格戦略の目標価格とは分けて保留状態にします。"
        },
        {
          "q": "金融機関が確認した実際の返済額はいくらですか？",
          "why": "融資残高だけでは、実際の差引額は分かりません。",
          "next": "中途返済費用と利息精算まで金融機関に確認します。"
        },
        {
          "q": "税金は確認済みですか、それとも推定ですか？",
          "why": "回収資本の不確実性を分けるための質問です。",
          "next": "推定値なら、税務確認が終わるまで予想範囲として表示します。"
        },
        {
          "q": "仲介・法務などの取引費用を項目別に記載していますか？",
          "why": "「その他費用」一行に隠れた漏れを減らします。",
          "next": "各費用項目に金額と確認先を付けます。"
        },
        {
          "q": "保証金・管理費・未収/前受の精算基準日を把握していますか？",
          "why": "残金日前後で変わる可能性がある数字を分けます。",
          "next": "精算表に基準日と負担主体を記録します。"
        },
        {
          "q": "確認済みの最低回収額と予想回収範囲を分けていますか？",
          "why": "次の資本計画を過大に見積もらないための質問です。",
          "next": "確定値だけで最低額を計算し、推定値は別シナリオにします。"
        }
      ],
      "experts": [
        {
          "topic": "税額の確認",
          "intro": "ここでは税金計算を学び直しません。現在の推定値が、実際の回収資本に使える水準かを確認します。",
          "check": "予想税額の範囲と確定状況",
          "when": [
            "税金の影響が大きい場合",
            "保有構造が複雑な場合",
            "推定値の変動幅が大きい場合"
          ],
          "prepare": [
            "取得・保有・売却資料",
            "現在の手取り額表"
          ],
          "confirm": "税務専門家",
          "apply": "金額とESTIMATEDまたはCONFIRMEDの状態を更新します。"
        },
        {
          "topic": "実際の返済額の確認",
          "intro": "融資返済の手続きではなく、実際に差し引かれる金融金額を確認します。",
          "check": "残高・中途返済・利息精算を含む実際の返済予定額",
          "when": [
            "融資がある場合",
            "中途返済費用がある場合",
            "残金日に利息精算が必要な場合"
          ],
          "prepare": [
            "融資契約",
            "残高資料",
            "予想残金日"
          ],
          "confirm": "金融機関",
          "apply": "負債項目の状態をCONFIRMEDまたはTO CHECKに更新します。"
        },
        {
          "topic": "取引費用の確認",
          "intro": "仲介・法務などの取引費用について、支払手続きではなく実際の差引額を確認します。",
          "check": "各取引費用の実際の金額と確認状態",
          "when": [
            "費用見積りがまだない場合",
            "契約条件によって費用が変わる場合"
          ],
          "prepare": [
            "取引条件",
            "見積り・契約資料"
          ],
          "confirm": "該当する仲介・法務担当",
          "apply": "費用を項目別に手取り額表へ反映します。"
        },
        {
          "topic": "内部精算額の確認",
          "intro": "保証金・未収・前受・管理費の計算方法ではなく、最終的に差し引きまたは引き継ぐ予定額を確認します。",
          "check": "精算予定額と未確認の差異",
          "when": [
            "内部記録が一致しない場合",
            "基準日が変わる場合",
            "保証金合計が一致しない場合"
          ],
          "prepare": [
            "賃貸借表",
            "入金記録",
            "精算案"
          ],
          "confirm": "内部の会計・管理担当 / 必要に応じて専門家",
          "apply": "精算項目をCONFIRMED / ESTIMATED / TO CHECKに分けます。"
        }
      ],
      "expertStatus": {
        "title": "どの数字が確定で、どの数字が推定ですか？",
        "body": "手取り額を一つの確定値として扱いません。各差引項目の金額と確認状態を個別に管理します。",
        "items": [
          "売却代金",
          "実際の返済額",
          "税金",
          "取引費用",
          "精算予定額"
        ]
      },
      "summary": [
        "手取り額は取引手続きを扱う段階ではなく、実際に回収できる資本を計算する段階です。",
        "各数字をCONFIRMED / ESTIMATED / TO CHECKに分けます。",
        "最終精算と引継ぎが終わるまでは、現在確認できている金額と予想範囲を一緒に見ます。"
      ],
      "conclusion": "売却価格より重要なのは、すべての差引項目を状態別に分けたうえで、次の意思決定に実際に使える資本がいくら残るかを把握することです。",
      "nextId": "closing",
      "nextName": "06 終了・引継ぎ",
      "nextPrompt": "予想回収額を、実際の残金・精算・引継ぎの完了状態へ変えます。"
    },
    {
      "id": "closing",
      "num": "06",
      "code": "CLOSING",
      "name": "終了・引継ぎ",
      "prompt": "契約後、何まで終えればEXITが完了するか",
      "lead": "終了・引継ぎは、残金や所有権移転の手続きを学び直す段階ではありません。取引後も旧所有者に残る運用責任とアクセス権限を完全に閉じる最後の段階です。",
      "whyDetails": [
        "残金が終わっても、旧所有者にCCTVアカウントや鍵・カードが残っていれば、運用関係は終わっていません。",
        "管理業者が引き続き旧所有者へ連絡したり、自動引落しが残っていたりする場合も同じです。法的終了と運用終了を分けて確認します。",
        "保証金・管理費・融資などの数字計算は、手取り額の段階で終えます。",
        "ここでは、その値が最終確定したか、誰が引き継ぐか、完了状態が記録されているかだけを確認します。",
        "完了基準は残金そのものではなく、残る責任がない状態です。運用・アクセス・記録の関係を最後まで閉じます。"
      ],
      "core": [
        [
          "法的クロージングは「完了したか」だけを確認します",
          "残金・所有権移転・担保整理の手続きを繰り返し説明しません。契約確認や関係機関で確認する項目として扱い、このページでは完了/未完了の状態と担当者だけを確認します。"
        ],
        [
          "精算も再計算ではなく、最終確定状態を見ます",
          "手取り額で予想した融資・税金・保証金・管理費の精算が、実際にどの値で確定したかを確認します。金額計算ではなく、未確定の精算が残っているかを見る段階です。"
        ],
        [
          "鍵・カード・設備アクセス権が残っていないか確認します",
          "鍵、入館カード、駐車リモコン、メーター・設備へのアクセス手段など、旧所有者が物理的に持っている項目を一覧にし、受領者と完了状態を記録します。"
        ],
        [
          "デジタルアカウントと管理権限を移管・解除します",
          "CCTV、入退室管理、IoT、管理アプリ、遠隔設備、業者ポータルなど旧所有者に残るアカウント・権限を確認し、移管・解除します。個人アカウントと共用アカウントも分けます。"
        ],
        [
          "管理業者・自動引落し・連絡関係を終了します",
          "清掃・警備・エレベーター・消防・通信・保険・公共料金・管理業者など、旧所有者名義の自動引落しや連絡関係が変更・解約・引継ぎされたかを確認して記録します。"
        ],
        [
          "個人情報・保管資料・残務を最後に整理します",
          "テナントの連絡先・本人確認資料など不要な個人情報を残さず、税務・契約・精算・引継ぎの確認資料は、保管するものと削除するものに分けます。最後に未完了業務が0件か確認します。"
        ]
      ],
      "method": [
        [
          "法務・金融の完了状態を確認します",
          "詳細手続きをもう一度行うのではなく、関係機関・担当者を通じて完了したかだけを確認します。",
          [
            "残金完了",
            "融資返済の確認",
            "権利・書類処理の状態",
            "担当者"
          ],
          "法的完了の有無をサイト内容だけで判断しません。",
          "法務・金融項目が、完了または追加確認として表示されています。"
        ],
        [
          "最終精算額を確定します",
          "手取り額で推定していた金額が実際に確定したか確認し、未確定項目は明確に残します。",
          [
            "保証金",
            "管理費",
            "未収・前受",
            "その他精算"
          ],
          "精算の計算方法を繰り返しません。",
          "すべての精算項目が、確定または追加確認の状態になっています。"
        ],
        [
          "物理的な引継ぎを完了します",
          "鍵・カード・リモコン・設備アクセス手段と必要な運用資料を、受領者を基準に引き継ぎます。",
          [
            "鍵",
            "入館カード",
            "駐車・設備アクセス",
            "受領確認"
          ],
          "「渡した」ではなく、誰が受け取ったかを記録します。",
          "物理的な引継ぎリストの未完了項目が0件です。"
        ],
        [
          "デジタル・業者関係を終了します",
          "アカウント・権限・自動引落し・業者連絡先を移管・解約・変更します。",
          [
            "CCTV/IoT",
            "管理アプリ",
            "自動引落し",
            "業者連絡先"
          ],
          "個人のログイン情報をそのまま渡しません。",
          "旧所有者名義の運用権限・連絡関係が残っていません。"
        ],
        [
          "必要資料を保管し、残務0件を確認します",
          "保管資料と削除資料を分け、最後の未完了項目を一つずつ閉じます。",
          [
            "保管資料",
            "削除する個人情報",
            "未完了業務",
            "最終回収資本"
          ],
          "法定保管期間は、国や取引条件に応じて別途確認します。",
          "残る責任・権限・業務が0件、または明確な後続担当者へ移管されています。"
        ]
      ],
      "signals": [
        "旧所有者のアカウントでまだシステムへアクセスできます。",
        "鍵・カードの受領者と完了状態が記録されていません。",
        "管理業者・テナントが旧所有者へ連絡を続けています。",
        "自動引落し・保険・公共料金の変更状態が確認されていません。",
        "保管資料と削除する個人情報が分かれていません。"
      ],
      "readySignals": [
        "法務・金融項目の完了状態が確認されています。",
        "精算額が、確定または追加確認の状態で整理されています。",
        "物理的な引継ぎの受領者と完了状態が記録されています。",
        "アカウント・業者関係・自動引落しが移管または解除されています。",
        "保管資料・削除資料が分かれ、残務がありません。"
      ],
      "cases": [
        {
          "label": "CASE A",
          "title": "残金は終わったが運用関係が残っている場合",
          "situation": "残金と法的手続きは完了していますが、旧所有者のスマートフォンでCCTVと入退室管理アプリが引き続き動作しています。",
          "observe": "法的な所有関係とは別にデジタルアクセス権が残っており、運用責任や個人情報の問題が続く可能性があります。",
          "judge": "終了・引継ぎの要点は、取引をもう一度終わらせることではなく、旧所有者に残る運用権限を0にすることです。",
          "next": "アカウント所有者と管理業者を確認し、移管・解除の完了状態を記録します。"
        },
        {
          "label": "CASE B",
          "title": "業者・自動引落し関係が残っている場合",
          "situation": "エレベーター・清掃・インターネット・一部公共料金が旧所有者名義で請求され続け、管理業者も旧連絡先へ連絡しています。",
          "observe": "設備は引き継がれていても、契約・決済・連絡関係が終わっておらず、取引後も業務が残ります。",
          "judge": "運用関係の終了は、鍵を渡しただけでは完了しません。",
          "next": "業者ごとに、変更・解約・引継ぎの担当者と完了日を確認します。"
        },
        {
          "label": "CASE C",
          "title": "残務を数字で閉じるケース",
          "situation": "学習用の例：鍵12個、カード8枚、管理アカウント5件、自動引落し7件、業者関係6社、保管資料9種類を終了リストで管理します。",
          "observe": "初回確認では、アカウント2件、自動引落し1件、業者連絡1件の計4件が未完了で残りました。",
          "judge": "残金完了とEXIT完了を分けることで、未完了4件を明確に追跡できます。",
          "next": "4件それぞれに担当者と完了予定日を設定し、残務0件まで確認します。"
        }
      ],
      "questions": [
        {
          "q": "法務・金融の完了状態を担当機関または担当者を通じて確認しましたか？",
          "why": "手続きを説明し直すのではなく、完了状態だけを確認するための質問です。",
          "next": "未確定なら、担当者と確認予定日を記録します。"
        },
        {
          "q": "手取り額で推定していた精算値は、実際の最終値で確定しましたか？",
          "why": "予想回収資本と実際の終了値の差を閉じる必要があります。",
          "next": "未確定の精算項目は別に残し、担当者を指定します。"
        },
        {
          "q": "手元に残っている鍵・カード・リモコン・アクセス手段はありませんか？",
          "why": "物理的なアクセス権が残っていれば、運用関係は完全に終わっていません。",
          "next": "受領者と引継ぎ確認の状態を記録します。"
        },
        {
          "q": "CCTV・IoT・管理アプリなど、あなたのアカウントに残るアクセス権はありませんか？",
          "why": "デジタル権限や個人情報の問題を残さないための確認です。",
          "next": "共用アカウントへ移管するか、個人権限を解除します。"
        },
        {
          "q": "自動引落し・保険・公共料金・管理業者の連絡先はすべて移管されましたか？",
          "why": "取引後も業務や請求が続くことを防ぎます。",
          "next": "業者ごとに変更・解約の完了日を記録します。"
        },
        {
          "q": "保管する資料と削除する個人情報を分け、残務は0件になっていますか？",
          "why": "EXITの最後の完了状態を確認する質問です。",
          "next": "残っている項目ごとに後続担当者と完了日を指定します。"
        }
      ],
      "experts": [
        {
          "topic": "法的クロージングの完了確認",
          "intro": "残金・所有権移転・権利整理の手続きをサイトだけで確定しません。",
          "check": "法務・書類上の取引完了状態と残る対応",
          "when": [
            "権利・書類処理が残っている場合",
            "変更条件が反映されているか不明確な場合",
            "引渡し条件と法的責任がつながる場合"
          ],
          "prepare": [
            "最終契約・変更資料",
            "登記・権利関連資料",
            "完了確認資料"
          ],
          "confirm": "法律専門家 / 関係機関",
          "apply": "完了 / 追加確認の状態だけを終了チェックリストに反映します。"
        },
        {
          "topic": "税務・最終精算の確認",
          "intro": "手取り額で推定した税金と精算が、実際の終了値として確定したか確認します。",
          "check": "最終の税務・精算額と、後続の申告・保管に必要な事項",
          "when": [
            "予想値と実際値の差が大きい場合",
            "申告・証憑の確認が必要な場合",
            "保管資料が不明確な場合"
          ],
          "prepare": [
            "売却・費用・精算資料",
            "手取り額の計算記録",
            "証憑"
          ],
          "confirm": "税務専門家",
          "apply": "確定値を最終回収資本と保管資料に反映します。"
        },
        {
          "topic": "金融完了の確認",
          "intro": "融資返済や担保関連の詳細手続きを繰り返し説明せず、実際の完了状態を確認します。",
          "check": "返済・利息精算・担保に関して残っている金融対応",
          "when": [
            "金融機関の確認がまだ終わっていない場合",
            "返済額と実際の出金額が異なる場合",
            "担保関連の確認が必要な場合"
          ],
          "prepare": [
            "融資契約",
            "返済記録",
            "残金資料"
          ],
          "confirm": "金融機関",
          "apply": "完了または追加確認の状態を終了チェックリストに反映します。"
        },
        {
          "topic": "運用・アカウントの引継ぎ",
          "intro": "設備の技術判断よりも、旧所有者に運用権限や関係が残っていないかを確認します。",
          "check": "設備アクセス手段、デジタルアカウント、業者関係の実際の引継ぎ範囲",
          "when": [
            "アカウントが複数ある場合",
            "管理業者が多い場合",
            "誰が何を引き継ぐか不明確な場合"
          ],
          "prepare": [
            "鍵・カード一覧",
            "アカウント一覧",
            "業者・自動引落し一覧"
          ],
          "confirm": "該当する管理・技術担当",
          "apply": "受領者と完了状態を記録し、旧所有者に残る運用関係を閉じます。"
        }
      ],
      "expertStatus": {
        "title": "旧所有者に残っている責任は何ですか？",
        "body": "残金完了とEXIT完了は同じではありません。法務・金融の完了とは別に、物理的アクセス、デジタル権限、業者・決済関係、個人情報、残務が残っていないか確認します。",
        "items": [
          "法務・金融の完了状態",
          "最終精算",
          "物理的アクセス権",
          "デジタル・業者関係",
          "保管資料・残務"
        ]
      },
      "summary": [
        "06は法的クロージング手続きを学び直すページではなく、所有者の運用責任を閉じる段階です。",
        "精算は計算より最終確定状態を、引継ぎは「渡した」ことより受領と権限解除を確認します。",
        "鍵・アカウント・業者・自動引落し・個人情報・残務が残らない状態になって、EXITが完了します。"
      ],
      "conclusion": "EXITの最後の基準は残金完了ではなく、旧所有者に責任・アクセス権・運用関係・未完了業務が一切残っていない状態です。",
      "nextId": null,
      "nextName": "EXITメインへ",
      "nextPrompt": "売却判断から終了・引継ぎまで、6段階をもう一度確認します。"
    }
  ]
};

export const EXIT_UI_COPY={
  "ko": {
    "viewSuffix": "보기",
    "exitNavAria": "EXIT 단계",
    "sixTitle": "EXIT를 여섯 단계로 나눕니다",
    "sixLead": "메인에서는 각 단계가 왜 필요한지만 봅니다. 실제 판단 방법은 상세에서 확인합니다.",
    "connectedTitle": "관리한 기록이 EXIT의 자료가 됩니다",
    "connectedLead": "보유 중 관리에서 쌓은 기록은 매각을 준비할 때 건물의 상태와 운영 결과를 설명하는 자료로 이어집니다.",
    "netTitle": "매도가와 회수금액은 다릅니다",
    "netLead": "매각가격에서 대출상환, 세금, 거래비용, 보증금과 각종 정산을 반영한 뒤 실제로 회수 가능한 자본을 봐야 합니다. 메인에서는 개념만 이해하고, 실제 비교는 회수 가능한 자본을 계산하는 상세 단계에서 확인합니다.",
    "netFormula": [
      "매각가격",
      "대출·비용·세금·정산",
      "실제 회수자본"
    ],
    "timelineTitle": "EXIT는 시간순서가 중요합니다",
    "timelineLead": "판단부터 인계까지 순서대로 준비할수록 뒤늦게 발견되는 문제와 협상 지연을 줄일 수 있습니다.",
    "expertTitle": "어디까지 직접 보고, 어디서 전문가를 만날 것인가",
    "expertLead": "EXIT는 판단 프레임을 제공하지만 개별 가격·세금·법률·대출·시설 판정을 대신하지 않습니다.",
    "finalTitle": "좋은 EXIT는 가장 높은 가격에 매각하는 것만을 의미하지 않습니다",
    "finalLead": "매각 이유·건물 상태·가격 근거·실제 회수금액·거래 이후 정리까지 설명할 수 있어야 합니다.",
    "finalStrong": "그때 비로소 보유가 하나의 투자 결과로 끝납니다.",
    "finalBody": "매각 판단에서 종료·인계까지는 하나의 흐름으로 연결됩니다. 각 단계에서 확인한 자료와 판단은 다음 단계의 근거가 됩니다.",
    "startDecision": "01 매각 판단 시작 →",
    "check": "확인할 것",
    "watchOut": "주의",
    "readyWhen": "완료 기준",
    "key": "핵심",
    "interpret": "해석",
    "reviewSignal": "다시 확인할 신호",
    "holdSignal": "계속 보유할 근거",
    "decisionPoint": "판단 포인트",
    "ifNot": "답이 없다면",
    "apply": "판단에 반영",
    "confirmedCheck": "확인됨 / 추가 확인 필요",
    "currentStep": "현재 단계",
    "nextStep": "다음 단계",
    "exploreNext": "다른 EXIT 단계 보기",
    "exitNav": "EXIT 탐색",
    "whatToCheck": "무엇을 확인",
    "checkWhen": "언제 확인",
    "prepare": "준비자료",
    "confirmWith": "확인처",
    "confirmationStatus": "확인 상태",
    "exploreNextLabel": "다음 단계 탐색",
    "decisionCoreTitle": "보유와 매각을 비교하기 전에 여섯 가지를 다시 봅니다",
    "decisionCoreLead": "현재 가격 하나가 아니라 현재 수익, 미래 수익, 큰 비용, 금융조건, 묶여 있는 자본, 보유 목적을 함께 확인합니다.",
    "decisionMethodTitle": "실제 매각 판단은 다섯 단계로 정리합니다",
    "decisionMethodLead": "결론부터 내리지 않고 이유를 분리하고, 보유 시나리오와 매각 시나리오를 같은 기준에서 비교합니다.",
    "decisionFlowAria": "매각 판단 흐름",
    "decisionSignalsTitle": "다시 볼 신호와 계속 보유할 신호를 함께 봅니다",
    "decisionSignalsLead": "하나의 신호로 결론을 내리지 않고, 여러 조건이 같은 방향으로 겹치는지를 확인합니다.",
    "decisionCasesTitle": "현재가 비슷해 보여도 앞으로의 조건이 다르면 판단은 달라질 수 있습니다",
    "decisionCasesLead": "사례는 매각 여부의 정답을 주기 위한 것이 아니라 어떤 조건을 함께 봐야 하는지 확인하기 위한 교육용 예시입니다.",
    "decisionQuestionsTitle": "매각 판단 전에 이 여섯 질문에는 답할 수 있어야 합니다",
    "decisionQuestionsLead": "답이 없는 질문은 결론을 내릴 항목이 아니라 추가로 확인할 항목입니다.",
    "mistakesTitle": "한 가지 이유만으로 결정하지 않습니다",
    "mistakesLead": "매각과 보유 모두 하나의 숫자나 하나의 감정만으로 결정하면 다른 조건을 놓칠 수 있습니다.",
    "professionalTitle": "여기부터는 직접 확인이 필요합니다",
    "professionalDecisionLead": "모든 숫자를 혼자 확정할 필요는 없습니다. 직접 확인할 수 있는 정보와 전문가·관계기관의 확인이 필요한 항목을 구분하고, 필요한 자료를 준비해 정확한 확인으로 넘기는 것이 중요합니다.",
    "decisionSummaryTitle": "매각 판단에서 결국 확인해야 할 세 가지",
    "decisionDisclaimer": "이 콘텐츠는 건물 보유·매각 판단을 위한 교육용 가이드입니다. 실제 예상 매각가격, 세금, 대출상환, 권리관계, 시설안전 등은 해당 거래와 지역에 적용되는 기준을 확인하고 필요한 경우 전문가의 검토를 받으세요.",
    "protoCoreTitle": "이 단계에서 먼저 확인할 핵심",
    "protoCoreLead": "무엇을 보는지에서 끝내지 않고, 어떤 자료를 확인하고 다음 판단에 어떻게 연결할지까지 봅니다.",
    "protoMethodTitle": "실제 확인은 다섯 단계로 진행합니다",
    "protoMethodLead": "각 단계에는 할 일, 확인할 것, 주의할 점, 완료상태가 모두 있어야 합니다.",
    "protoSignalsTitle": "문제신호와 준비완료 신호를 함께 봅니다",
    "protoSignalsLead": "하나의 신호로 결론을 내리지 않고, 무엇이 미확인인지와 무엇이 준비됐는지를 동시에 확인합니다.",
    "readySignal": "다음 단계로 갈 준비 신호",
    "protoCasesTitle": "상황에서 판단 흐름을 확인합니다",
    "protoCasesLead": "사례의 목적은 정답을 주는 것이 아니라 어떤 사실을 보고 무엇을 추가 확인하는지 보여주는 것입니다.",
    "observe": "관찰",
    "nextCheck": "다음 확인",
    "protoQuestionsTitle": "이 단계에서 스스로 답할 여섯 질문",
    "protoQuestionsLead": "답을 모르는 질문은 실패가 아니라 다음 확인이 필요한 위치를 알려줍니다.",
    "professionalProtoLead": "모든 판단을 혼자 확정할 필요는 없습니다. 무엇을 확인해야 하는지, 언제 전문가에게 넘길지, 어떤 자료를 준비할지를 구분합니다.",
    "summarySuffix": "에서 기억할 세 가지",
    "protoDisclaimer": "이 페이지는 일반적인 교육·점검 가이드입니다. 실제 개별 거래의 가격·세금·권리·금융·시설 판단은 거래조건과 지역 기준에 따라 관계기관 및 전문가 확인이 필요합니다.",
    "guideImage": "가이드 이미지"
  },
  "en": {
    "viewSuffix": "View",
    "exitNavAria": "EXIT steps",
    "sixTitle": "Break the exit into six steps",
    "sixLead": "The main page shows why each step matters. Open each detail page for the actual decision process.",
    "connectedTitle": "Management records become exit evidence",
    "connectedLead": "Records built during ownership become evidence that explains the property condition and operating results when preparing for a sale.",
    "netTitle": "Sale price and net proceeds are not the same",
    "netLead": "Start with the sale price, then account for debt repayment, taxes, transaction costs, deposits, and settlements to see the capital you can actually recover.",
    "netFormula": [
      "Sale price",
      "Debt · costs · taxes · settlements",
      "Net recoverable capital"
    ],
    "timelineTitle": "Sequence matters in an exit",
    "timelineLead": "Preparing in order from the initial decision through handover reduces late discoveries and negotiation delays.",
    "expertTitle": "Know what to check yourself and when to involve a professional",
    "expertLead": "EXIT provides a decision framework, not individual determinations on price, tax, law, financing, or building condition.",
    "finalTitle": "A good exit is more than selling at the highest price",
    "finalLead": "You should be able to explain the reason for selling, the property condition, the pricing evidence, the actual net proceeds, and what remains after the transaction.",
    "finalStrong": "Only then does ownership close as a completed investment outcome.",
    "finalBody": "Sell-or-hold, preparation, pricing, buyer review, net proceeds, and handover are one connected process. Each step becomes evidence for the next.",
    "startDecision": "Start 01 Sell or Hold →",
    "check": "Check",
    "watchOut": "Watch Out",
    "readyWhen": "Ready When",
    "key": "Key Point",
    "interpret": "Interpretation",
    "reviewSignal": "Review Signal",
    "holdSignal": "Reasons to Hold",
    "decisionPoint": "Decision Point",
    "ifNot": "If not",
    "apply": "Use it for",
    "confirmedCheck": "Confirmed / To Check",
    "currentStep": "Current Step",
    "nextStep": "Next Step",
    "exploreNext": "Explore other EXIT steps",
    "exitNav": "EXIT navigation",
    "whatToCheck": "What to confirm",
    "checkWhen": "Check when",
    "prepare": "Prepare",
    "confirmWith": "Confirm with",
    "confirmationStatus": "Confirmation Status",
    "exploreNextLabel": "Explore Next",
    "decisionCoreTitle": "Review six factors before comparing hold versus sell",
    "decisionCoreLead": "Look beyond today’s price to current income, future income, major costs, financing, tied-up capital, and your ownership objective.",
    "decisionMethodTitle": "Use five steps for the actual sell-or-hold decision",
    "decisionMethodLead": "Separate the reasons first, then compare the hold and sell scenarios on the same basis.",
    "decisionFlowAria": "Sell or hold decision flow",
    "decisionSignalsTitle": "Review both warning signals and reasons to keep holding",
    "decisionSignalsLead": "Do not decide from one signal. Check whether several conditions are moving in the same direction.",
    "decisionCasesTitle": "Similar conditions today can lead to different decisions when the future changes",
    "decisionCasesLead": "These cases are not answers. They show which conditions should be considered together.",
    "decisionQuestionsTitle": "Answer these six questions before making a sell-or-hold decision",
    "decisionQuestionsLead": "An unanswered question is something to verify, not something to force into a conclusion.",
    "mistakesTitle": "Do not decide from a single reason",
    "mistakesLead": "Whether you sell or hold, relying on one number or one emotion can hide other important conditions.",
    "professionalTitle": "From here, verify the unresolved items",
    "professionalDecisionLead": "You do not need to finalize every number alone. Separate what you can verify directly from what needs confirmation by a professional or relevant institution, and prepare the evidence they need.",
    "decisionSummaryTitle": "Three things to confirm before the decision is complete",
    "decisionDisclaimer": "This content is an educational guide for commercial-property hold and sale decisions. Actual sale price, taxes, debt repayment, rights, and building safety depend on the transaction and local rules and may require professional review.",
    "protoCoreTitle": "What to confirm first in this step",
    "protoCoreLead": "Do not stop at what to look at. Connect each item to the evidence you will check and the next decision it supports.",
    "protoMethodTitle": "Work through five practical steps",
    "protoMethodLead": "Each step should define the task, what to check, what to watch out for, and what completion looks like.",
    "protoSignalsTitle": "Review both problem signals and readiness signals",
    "protoSignalsLead": "Do not decide from one signal. Check what is still unresolved and what is ready at the same time.",
    "readySignal": "Ready Signal",
    "protoCasesTitle": "Use situations to follow the decision flow",
    "protoCasesLead": "The cases do not give a single right answer. They show what facts to observe and what to verify next.",
    "observe": "Observe",
    "nextCheck": "Next Check",
    "protoQuestionsTitle": "Six questions you should be able to answer in this step",
    "protoQuestionsLead": "Not knowing an answer is not failure. It shows where further verification is needed.",
    "professionalProtoLead": "You do not need to finalize every judgment alone. Separate what needs confirmation, when to involve a professional, and what materials to prepare.",
    "summarySuffix": ": three things to remember",
    "protoDisclaimer": "This page is a general educational checklist. Actual price, tax, rights, financing, and building-condition decisions depend on transaction terms and local rules and may require confirmation from relevant institutions or professionals.",
    "guideImage": "guide image"
  },
  "ja": {
    "viewSuffix": "見る",
    "exitNavAria": "EXITの各段階",
    "sixTitle": "EXITを6つの段階に分けて確認します",
    "sixLead": "メインでは各段階が必要な理由を確認し、具体的な判断方法は詳細ページで確認します。",
    "connectedTitle": "管理記録がEXITの説明資料になります",
    "connectedLead": "保有中に蓄積した管理記録は、売却準備の際に物件状態と運営結果を説明する根拠資料になります。",
    "netTitle": "売却価格と手取り額は同じではありません",
    "netLead": "売却価格から融資返済、税金、取引費用、保証金、各種精算を反映し、実際に回収できる資本を確認します。",
    "netFormula": [
      "売却価格",
      "融資・費用・税金・精算",
      "実際の回収資本"
    ],
    "timelineTitle": "EXITは進める順番が重要です",
    "timelineLead": "判断から引継ぎまで順番に準備するほど、後から判明する問題や交渉の遅れを減らせます。",
    "expertTitle": "どこまで自分で確認し、どこから専門家に確認するか",
    "expertLead": "EXITは判断の枠組みを提供しますが、個別の価格・税務・法律・融資・設備判断を代替するものではありません。",
    "finalTitle": "良いEXITは、最も高い価格で売ることだけではありません",
    "finalLead": "売却理由、物件状態、価格根拠、実際の手取り額、取引後の整理まで説明できる状態が必要です。",
    "finalStrong": "そこまで確認して、初めて保有が一つの投資結果として完了します。",
    "finalBody": "売却判断から終了・引継ぎまで、各段階は一つの流れでつながります。各段階の資料と判断が次の根拠になります。",
    "startDecision": "01 売却判断を始める →",
    "check": "確認項目",
    "watchOut": "注意",
    "readyWhen": "完了基準",
    "key": "要点",
    "interpret": "解釈",
    "reviewSignal": "再確認のサイン",
    "holdSignal": "保有継続の根拠",
    "decisionPoint": "判断ポイント",
    "ifNot": "答えられない場合",
    "apply": "判断への反映",
    "confirmedCheck": "確認済み / 追加確認",
    "currentStep": "現在のステップ",
    "nextStep": "次のステップ",
    "exploreNext": "他のEXIT段階を見る",
    "exitNav": "EXITナビゲーション",
    "whatToCheck": "確認すること",
    "checkWhen": "確認が必要な場合",
    "prepare": "準備する資料",
    "confirmWith": "確認先",
    "confirmationStatus": "確認状態",
    "exploreNextLabel": "他のEXITを見る",
    "decisionCoreTitle": "保有と売却を比較する前に6つの要素を見直します",
    "decisionCoreLead": "現在価格だけでなく、現在の収益、将来収益、大きな費用、融資条件、拘束されている資本、保有目的を確認します。",
    "decisionMethodTitle": "実際の売却判断は5段階で整理します",
    "decisionMethodLead": "先に結論を出さず理由を分け、保有シナリオと売却シナリオを同じ基準で比較します。",
    "decisionFlowAria": "売却判断の流れ",
    "decisionSignalsTitle": "再確認のサインと保有継続の根拠を両方見ます",
    "decisionSignalsLead": "一つのサインだけで結論を出さず、複数の条件が同じ方向に重なっているか確認します。",
    "decisionCasesTitle": "現在が似ていても将来条件が違えば判断は変わります",
    "decisionCasesLead": "事例は売却の正解を示すものではなく、どの条件を一緒に見るべきかを確認するための例です。",
    "decisionQuestionsTitle": "売却判断の前に、この6つの質問に答えられる状態にします",
    "decisionQuestionsLead": "答えられない質問は結論を出す項目ではなく、追加確認が必要な項目です。",
    "mistakesTitle": "一つの理由だけで決めません",
    "mistakesLead": "売却でも保有でも、一つの数字や一つの感情だけで決めると他の条件を見落としやすくなります。",
    "professionalTitle": "ここからは追加確認が必要です",
    "professionalDecisionLead": "すべての数字を一人で確定する必要はありません。自分で確認できる情報と、専門家・関係機関の確認が必要な項目を分け、必要資料を準備して正確な確認につなげます。",
    "decisionSummaryTitle": "売却判断で最終的に確認する3つ",
    "decisionDisclaimer": "このコンテンツは、建物の保有・売却判断のための一般的な教育ガイドです。実際の売却価格、税金、融資返済、権利関係、設備安全などは取引条件や地域基準を確認し、必要に応じて専門家の確認を受けてください。",
    "protoCoreTitle": "この段階で最初に確認するポイント",
    "protoCoreLead": "何を見るかだけで終わらず、どの資料を確認し、次の判断にどうつなげるかまで確認します。",
    "protoMethodTitle": "実際の確認は5段階で進めます",
    "protoMethodLead": "各段階に、やること、確認項目、注意点、完了状態がそろっている必要があります。",
    "protoSignalsTitle": "問題のサインと準備完了のサインを両方確認します",
    "protoSignalsLead": "一つのサインだけで結論を出さず、何が未確認で何が準備できているかを同時に確認します。",
    "readySignal": "次へ進めるサイン",
    "protoCasesTitle": "状況から判断の流れを確認します",
    "protoCasesLead": "事例の目的は正解を出すことではなく、どの事実を見て何を追加確認するかを示すことです。",
    "observe": "確認した事実",
    "nextCheck": "次に確認",
    "protoQuestionsTitle": "この段階で答えられるようにしたい6つの質問",
    "protoQuestionsLead": "答えが分からないことは失敗ではなく、次に確認すべき位置を示します。",
    "professionalProtoLead": "すべての判断を一人で確定する必要はありません。何を確認し、いつ専門家に確認し、どの資料を準備するかを分けます。",
    "summarySuffix": "で覚えておく3つ",
    "protoDisclaimer": "このページは一般的な教育・点検ガイドです。実際の個別取引における価格・税金・権利・融資・設備判断は、取引条件と地域基準に応じて関係機関や専門家への確認が必要です。",
    "guideImage": "ガイド画像"
  }
};

export const EXIT_LOCALES=['ko','en','ja'];
export function normalizeExitLocale(locale){return EXIT_LOCALES.includes(locale)?locale:'ko';}
export function getExitMain(locale='ko'){return EXIT_MAIN_BY_LOCALE[normalizeExitLocale(locale)];}
export function getExitDecision(locale='ko'){return EXIT_DECISION_BY_LOCALE[normalizeExitLocale(locale)];}
export function getExitSections(locale='ko'){return EXIT_PROTO_BY_LOCALE[normalizeExitLocale(locale)];}
export function getExitSection(locale='ko',id){return getExitSections(locale).find(x=>x.id===id);}
export function getExitUi(locale='ko'){return EXIT_UI_COPY[normalizeExitLocale(locale)];}
