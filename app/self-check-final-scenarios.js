// Hypothetical cross-stage decision situations for the 14 public FINAL pages.
// These are editorial examples, NOT calculated personal results or verified transactions.
export const PUBLIC_FINAL_SCENARIOS = {
  "T01": {
    "ko": {
      "scene": "장기 보유를 계획한 매수자가 임대수입이 일정한 노후 상가와 관리비가 낮은 신축 소형 건물을 비교합니다.",
      "conflict": "오래 보유하고 싶은 마음과 노후 건물의 수선 부담이 충돌합니다. 월세가 유지돼도 예상 밖의 보수비가 현금 여유를 줄일 수 있습니다.",
      "countercheck": "현재 임차인이 오래 있었다는 사실만으로 향후 공실이 없다고 가정하지 않습니다. 임대차 종료 시점과 시설 교체 시기를 따로 확인합니다.",
      "steps": "임대차 현황 확인 → 향후 수선비 추정 → 공실을 가정한 현금흐름 → 장기 보유 가능 기간 판단"
    },
    "en": {
      "scene": "A long-term buyer compares an older retail building with steady rent and a newer small property with lower maintenance costs.",
      "conflict": "The preference for a long holding period conflicts with the repair burden of the older building. Even stable rent may be offset by unexpected maintenance.",
      "countercheck": "A long-standing tenant does not guarantee there will be no future vacancy. Check lease expiry and replacement cycles separately.",
      "steps": "Check leases → estimate future repairs → model vacancy cash flow → assess sustainable holding period"
    },
    "ja": {
      "scene": "長期保有を考える買主が、賃料の安定した築古店舗と、管理費の低い新築小型物件を比較します。",
      "conflict": "長く保有したい意向と築古物件の修繕負担が衝突します。賃料が続いても想定外の修繕費で余裕資金が減る場合があります。",
      "countercheck": "長期入居者がいることだけで将来の空室がないとは判断しません。契約満了時期と設備更新時期を別々に確認します。",
      "steps": "賃貸借状況 → 将来の修繕費 → 空室を想定した資金繰り → 保有可能期間の確認"
    }
  },
  "T02": {
    "ko": {
      "scene": "서로 다른 중개인이 같은 꼬마빌딩의 예상 수익을 다르게 설명합니다. 매수자는 두 계산표를 모두 받았습니다.",
      "conflict": "정보를 충분히 비교하려는 장점이 의사결정 지연으로 이어질 수 있습니다. 숫자 차이의 원인이 공실 가정인지 운영비 정의인지 먼저 나눠야 합니다.",
      "countercheck": "두 자료가 일치한다는 이유만으로 사실이 입증되지는 않습니다. 실제 임대차계약과 공적 장부의 내용은 별도로 확인합니다.",
      "steps": "항목 정의 통일 → 원자료 대조 → 보수적 가정 재계산 → 결정 또는 추가확인 조건 설정"
    },
    "en": {
      "scene": "Two agents present different projected returns for the same small building. The buyer has both worksheets.",
      "conflict": "A strength in cross-checking may turn into indefinite delay. First separate differences in vacancy assumptions from differences in expense definitions.",
      "countercheck": "Agreement between two summaries is not proof. Verify leases and official property records independently.",
      "steps": "Standardize definitions → compare primary records → recalculate conservatively → set a decision or review threshold"
    },
    "ja": {
      "scene": "同じ小規模ビルについて二人の仲介担当者が異なる予想収益を示し、買主は両方の計算表を受け取っています。",
      "conflict": "照合する強みが決定の先延ばしにつながることがあります。空室想定の違いか、運営費の範囲の違いかを先に分けます。",
      "countercheck": "二つの説明が一致しても事実の証明にはなりません。賃貸借契約と公的記録を別途照合します。",
      "steps": "項目定義の統一 → 原資料照合 → 保守的な再計算 → 決定条件の設定"
    }
  },
  "T03": {
    "ko": {
      "scene": "가격 인하 직후 시장에 나온 근린상가가 있습니다. 매수자는 기회를 빨리 포착했지만 실측 자료는 아직 부족합니다.",
      "conflict": "기회를 놓치지 않으려는 속도와 실거래·용도 확인에 필요한 시간이 충돌합니다.",
      "countercheck": "호가 인하가 실제 가치 상승을 의미하지는 않습니다. 유사 거래, 임차 조건, 용도 제한을 각각 확인해야 합니다.",
      "steps": "후보 확보 → 자료 제출 기한 설정 → 임대·권리·가격 교차검증 → 조건 충족 시에만 계약 검토"
    },
    "en": {
      "scene": "A neighborhood retail unit has just been repriced. The buyer notices the opportunity quickly but lacks verified measurements.",
      "conflict": "The urge to act quickly conflicts with the time needed to check transactions and permitted use.",
      "countercheck": "A lower asking price does not establish value. Check comparable transactions, lease terms, and use restrictions separately.",
      "steps": "Shortlist → set a document deadline → cross-check rent, title and price → consider signing only after conditions are met"
    },
    "ja": {
      "scene": "値下げされた近隣商業物件にすぐ気づきましたが、実測資料はまだ不足しています。",
      "conflict": "好機を逃したくない速さと、取引事例や用途を確認する時間が衝突します。",
      "countercheck": "希望価格の引下げだけで価値は確定しません。類似取引、賃貸条件、用途制限を別々に確認します。",
      "steps": "候補確保 → 資料提出期限 → 賃貸・権利・価格の照合 → 条件を満たした時のみ契約検討"
    }
  },
  "T04": {
    "ko": {
      "scene": "대출을 활용해 상가주택을 사려는 매수자가 현재 금리에서는 상환이 가능하다고 계산했습니다.",
      "conflict": "계산 가능한 차입 한도와 실제로 버틸 수 있는 현금 한도가 다를 수 있습니다. 공실과 금리 상승이 겹치면 부담이 커집니다.",
      "countercheck": "은행이 대출을 승인했다는 사실은 투자수익의 안정성을 보장하지 않습니다. 관리비와 수선 적립금도 따로 계산합니다.",
      "steps": "대출 구조 확인 → 금리 상승 시 상환액 → 공실 기간 현금흐름 → 남길 유동성 설정"
    },
    "en": {
      "scene": "A buyer plans to finance a shop-house and can cover repayments at the current rate.",
      "conflict": "The available loan limit can differ from the amount safely supportable with cash. Vacancy combined with higher rates raises the burden.",
      "countercheck": "Loan approval does not guarantee investment income. Include operating costs and reserves for repairs.",
      "steps": "Review financing → stress-test higher rates → model vacancy cash flow → set liquidity reserve"
    },
    "ja": {
      "scene": "融資で店舗併用住宅を買う予定で、現在の金利では返済可能と計算しています。",
      "conflict": "借入可能額と実際に耐えられる資金負担は異なります。空室と金利上昇が重なると負担が増えます。",
      "countercheck": "銀行の融資承認は投資収益の安定を保証しません。管理費や修繕積立も分けて計算します。",
      "steps": "融資条件 → 金利上昇時の返済額 → 空室期間の資金繰り → 手元資金の設定"
    }
  },
  "T05": {
    "ko": {
      "scene": "좋아 보이는 빌딩을 발견하고 매입 자금 조달 방법부터 찾기 시작합니다. 아직 공실 손실을 충분히 검토하지 않았습니다.",
      "conflict": "자금 확보 능력과 위험 감당 능력이 같은 것으로 취급될 수 있습니다. 차입이 가능한 것과 장기간 버틸 수 있는 것은 다릅니다.",
      "countercheck": "자기자본을 늘리거나 가격을 낮출 수 있다는 예상만으로 부족한 현금 완충을 메우지 않습니다.",
      "steps": "공실·수선 비용 먼저 계산 → 상환 여력 재확인 → 계약금 포함 현금 부족분 파악 → 차입 여부 결정"
    },
    "en": {
      "scene": "A promising building appears, and the buyer starts arranging financing before fully testing vacancy losses.",
      "conflict": "The ability to obtain funds may be mistaken for the ability to absorb risk. Borrowing capacity is not the same as staying power.",
      "countercheck": "Do not assume a lower purchase price or extra equity will automatically cover a missing cash buffer.",
      "steps": "Model vacancy and repairs first → check repayment capacity → calculate cash shortfall including deposit → decide financing"
    },
    "ja": {
      "scene": "魅力的なビルを見つけ、空室損失を十分に検証する前に資金調達を考え始めます。",
      "conflict": "資金を集められることとリスクに耐えられることを混同しやすい場面です。借入可能額と長期的な耐久力は別です。",
      "countercheck": "価格交渉や自己資金追加の見込みだけで、足りない予備資金を埋めたことにしません。",
      "steps": "空室・修繕費試算 → 返済余力 → 手付金を含む不足額 → 借入判断"
    }
  },
  "T06": {
    "ko": {
      "scene": "개발 계획이 언급되는 지역의 오래된 상가를 보면서 현재 임대수입보다 장래 가치에 관심을 가집니다.",
      "conflict": "미래 가격 상승 기대와 그때까지 감당해야 할 공실·금융비용이 충돌합니다.",
      "countercheck": "개발 계획 보도만으로 실현 시기나 가치 상승이 확정되지는 않습니다. 현행 도시계획과 사업 진행 단계도 확인해야 합니다.",
      "steps": "현재 수익성만으로 보유 가능성 계산 → 계획의 공식 진행상태 확인 → 지연 시나리오 → 투자 여부 판단"
    },
    "en": {
      "scene": "A buyer favors an older shop in an area with proposed redevelopment, valuing future appreciation over current rent.",
      "conflict": "Future upside conflicts with the vacancy and financing costs that must be covered until it arrives.",
      "countercheck": "Development news does not confirm its timing or price effect. Check the official planning stage and current restrictions.",
      "steps": "Calculate holding viability at current income → verify planning status → test delays → decide"
    },
    "ja": {
      "scene": "開発計画が話題の地域で築古店舗を検討し、現在の賃料より将来価値を重視します。",
      "conflict": "将来の値上がり期待と、それまでに負担する空室・金融費用が衝突します。",
      "countercheck": "開発報道だけで時期や価格上昇は確定しません。公的な計画段階と現行規制を確認します。",
      "steps": "現在収益で保有可能性 → 計画の公式進捗 → 遅延想定 → 投資判断"
    }
  },
  "T07": {
    "ko": {
      "scene": "표면 수익률이 높은 집합상가와 공실이 적은 소형 임대건물을 비교합니다.",
      "conflict": "월 현금흐름을 중시할수록 표면 임대료를 실제 남는 돈으로 오인하기 쉽습니다.",
      "countercheck": "높은 임대료는 보증금 반환 부담, 관리비, 수선비, 재임대 기간을 반영하지 않을 수 있습니다.",
      "steps": "월 임대료 확인 → 미수금·공실 차감 → 운영·금융비용 차감 → 실제 잔여현금 비교"
    },
    "en": {
      "scene": "A buyer compares a high headline-yield retail unit with a smaller building that has fewer vacancies.",
      "conflict": "A cash-flow focus can lead to mistaking quoted rent for cash actually retained.",
      "countercheck": "Headline rent may ignore deposits to repay, operating expenses, repairs, and reletting delays.",
      "steps": "Confirm rent → allow for arrears and vacancy → deduct operating and financing costs → compare residual cash"
    },
    "ja": {
      "scene": "表面利回りの高い区分店舗と空室の少ない小規模賃貸物件を比較します。",
      "conflict": "毎月の資金繰りを重視するほど、表示賃料と手元に残る金額を混同しやすくなります。",
      "countercheck": "賃料には敷金返還負担、管理費、修繕費、再募集期間が反映されないことがあります。",
      "steps": "賃料確認 → 未収・空室控除 → 運営・金融費用控除 → 残余資金比較"
    }
  },
  "T08": {
    "ko": {
      "scene": "주변에서 추천하는 건물을 거절하고 독자적으로 분석한 다른 후보를 우선 검토합니다.",
      "conflict": "독립적인 판단이 강점이지만 반대자료까지 스스로 배제하면 분석의 객관성이 떨어질 수 있습니다.",
      "countercheck": "자신이 만든 수익 추정표라도 임대차 원본과 거래사례를 대조하지 않으면 잘못될 수 있습니다.",
      "steps": "분석 가정 기록 → 원자료 확인 → 반대 시나리오 작성 → 제3자 검토 후 최종 판단"
    },
    "en": {
      "scene": "A buyer prefers a self-researched property over one widely recommended by others.",
      "conflict": "Independent judgment is valuable, but ignoring contrary evidence can undermine objectivity.",
      "countercheck": "A self-made income model still needs checking against leases and transactions.",
      "steps": "Record assumptions → inspect primary records → write an opposing scenario → seek independent review before deciding"
    },
    "ja": {
      "scene": "周囲の推薦物件を見送り、自分で調べた別の候補を優先します。",
      "conflict": "独立判断は強みですが、反対資料まで退けると客観性が下がります。",
      "countercheck": "自作の収益試算も賃貸借の原資料や取引事例との照合が必要です。",
      "steps": "前提の記録 → 原資料確認 → 反対シナリオ → 第三者の確認後に判断"
    }
  },
  "T09": {
    "ko": {
      "scene": "중개사·관리업체·지역 사업자의 의견을 모아 공실 위험을 비교합니다.",
      "conflict": "정보를 넓게 얻는 장점과 이해관계가 있는 사람의 전망을 사실처럼 받아들이는 위험이 공존합니다.",
      "countercheck": "긍정적인 임대 수요 전망도 실제 임차인 계약과 주변 공실 자료를 대신할 수 없습니다.",
      "steps": "정보원·이해관계 구분 → 주장별 증빙 확보 → 수요 가정 비교 → 내 기준표로 최종 평가"
    },
    "en": {
      "scene": "A buyer gathers opinions from agents, managers and local businesses about vacancy risk.",
      "conflict": "Broad information access helps, but forecasts from interested parties can be mistaken for verified facts.",
      "countercheck": "Optimistic leasing forecasts do not replace executed leases or vacancy evidence.",
      "steps": "Identify sources and incentives → request evidence → compare demand assumptions → decide using your own checklist"
    },
    "ja": {
      "scene": "仲介業者・管理会社・地域事業者の意見を集め、空室リスクを比べます。",
      "conflict": "情報収集は強みですが、利害関係者の見通しを事実と混同する危険もあります。",
      "countercheck": "楽観的な賃貸需要予測は実際の契約や周辺空室資料の代わりになりません。",
      "steps": "情報源と利害 → 主張の証拠 → 需要想定比較 → 自分の基準で判断"
    }
  },
  "T10": {
    "ko": {
      "scene": "화제가 된 투자 지역에 대한 추천을 여러 곳에서 듣고 매수를 서두릅니다.",
      "conflict": "반복되는 추천이 독립적인 증거처럼 느껴져 검증 단계가 짧아질 수 있습니다.",
      "countercheck": "여러 채널에서 같은 말이 나왔더라도 최초 정보원이 한 곳이면 독립된 확인으로 볼 수 없습니다.",
      "steps": "추천의 원출처 찾기 → 실거래·임차현황 확인 → 반대 사례 검토 → 검증 전 계약 보류"
    },
    "en": {
      "scene": "Repeated recommendations make a buyer rush toward a popular investment district.",
      "conflict": "Repeated claims can feel like independent proof and shorten verification.",
      "countercheck": "Several channels repeating one original source are not separate confirmations.",
      "steps": "Trace the original claim → verify transactions and occupancy → examine counterexamples → delay signing until checked"
    },
    "ja": {
      "scene": "話題の投資地域を各所から勧められ、購入を急ぎます。",
      "conflict": "繰り返される推薦を独立した証拠と感じ、検証を短縮しがちです。",
      "countercheck": "複数の媒体が同じ情報源を引用しても別々の裏付けにはなりません。",
      "steps": "情報の原典 → 取引・入居状況 → 反例 → 検証完了まで契約を保留"
    }
  },
  "T11": {
    "ko": {
      "scene": "현장에서 분위기가 좋아 보이는 상가를 보고 빠르게 매수 의향이 생깁니다.",
      "conflict": "현장 감각은 후보를 찾는 데 유용하지만 그날의 유동인구와 장기 임대수요가 같지는 않습니다.",
      "countercheck": "주말 한 번 방문한 인상만으로 평일 매출이나 장기간 공실 위험을 판단할 수 없습니다.",
      "steps": "첫인상 기록 → 시간대별 재방문 → 임대차·비용 자료 대조 → 사전 중단기준 확인"
    },
    "en": {
      "scene": "A retail property feels promising during a site visit and quickly becomes a favorite.",
      "conflict": "On-site intuition helps shortlist properties, but one day’s footfall is not long-term tenant demand.",
      "countercheck": "A busy weekend visit cannot establish weekday trade or future vacancy risk.",
      "steps": "Write down first impression → revisit at different hours → compare leases and costs → check pre-set exit rules"
    },
    "ja": {
      "scene": "現地の雰囲気が良い店舗を見て、すぐ購入したくなります。",
      "conflict": "現場感覚は候補選定に役立ちますが、その日の人通りと長期賃貸需要は異なります。",
      "countercheck": "週末一度の訪問で平日の売上や将来の空室リスクは判断できません。",
      "steps": "第一印象 → 時間帯別の再訪 → 契約・費用資料照合 → 事前の撤退基準"
    }
  },
  "T12": {
    "ko": {
      "scene": "임대수익용인지 직접 사용할 건물인지 목적이 정해지지 않은 채 매물을 둘러봅니다.",
      "conflict": "좋아 보이는 물건에 맞춰 매입 목적이 바뀌면 서로 다른 자산을 같은 기준으로 비교하기 어렵습니다.",
      "countercheck": "가격이 저렴하다는 이유만으로 운영·자가사용·장기보유 목적 중 어느 것에도 적합하다고 볼 수 없습니다.",
      "steps": "매입 목적 하나 선정 → 보유기간 설정 → 필수조건 두 가지 → 그 기준에 맞는 매물만 재검토"
    },
    "en": {
      "scene": "A buyer tours properties without deciding whether the aim is rental income or owner occupation.",
      "conflict": "If the purchase goal changes to fit each attractive listing, unlike assets cannot be compared fairly.",
      "countercheck": "A low price alone does not make a property suitable for rental, personal use or long holding.",
      "steps": "Choose one primary goal → set holding period → define two must-haves → re-screen listings using them"
    },
    "ja": {
      "scene": "賃貸収益用か自己使用かを決めずに物件を見て回ります。",
      "conflict": "魅力的な物件ごとに購入目的が変わると、異なる資産を同じ基準で比較できません。",
      "countercheck": "安い価格だけでは賃貸・自己使用・長期保有のどれにも適するとは言えません。",
      "steps": "主目的を一つ選ぶ → 保有期間 → 必須条件を二つ → その基準で物件を再検討"
    }
  },
  "T13": {
    "ko": {
      "scene": "임차인이 여럿인 소형 건물을 직접 운영하면서 공실 관리와 시설 보수까지 맡으려 합니다.",
      "conflict": "관리 참여 의지가 강해도 실제 현장 대응 시간과 예상 수익이 충돌할 수 있습니다. 직접 관리가 항상 비용 절감은 아닙니다.",
      "countercheck": "본인이 처리할 수 없는 야간 민원이나 긴급 수리를 포함하면 외주 비용이 여전히 필요할 수 있습니다.",
      "steps": "월별 투입시간 산정 → 직접·위임 업무 분리 → 공실·긴급수선 예산 → 운영 가능한 경우에만 매입 검토"
    },
    "en": {
      "scene": "A buyer wants to operate a multi-tenant small building personally, including vacancy work and repairs.",
      "conflict": "Willingness to manage may conflict with available time and projected returns. Doing everything personally does not always lower costs.",
      "countercheck": "After-hours emergencies and specialist repairs may still require paid contractors.",
      "steps": "Estimate monthly hours → split self-managed and outsourced work → budget vacancy and emergency repairs → assess purchase"
    },
    "ja": {
      "scene": "複数テナントの小規模ビルで空室対応や修繕を自分で担おうとしています。",
      "conflict": "管理への意欲と実際に使える時間・予想収益が衝突します。自己管理が必ず安くなるわけではありません。",
      "countercheck": "夜間の苦情や緊急工事には外部費用が必要になる場合があります。",
      "steps": "月間作業時間 → 自分と委託業務の区分 → 空室・緊急修繕予算 → 運営可能なら購入検討"
    }
  },
  "T14": {
    "ko": {
      "scene": "멀리 떨어진 건물의 관리를 전문업체에 맡기고 임대수입을 얻으려 합니다.",
      "conflict": "시간을 절약하려는 목표와 위탁 수수료·보고 지연·관리 품질을 감독할 책임이 충돌합니다.",
      "countercheck": "위탁계약이 있다고 해서 공실률이나 건물 하자에 대한 소유주의 확인 의무가 자동으로 사라지지 않습니다.",
      "steps": "업체 업무범위 확인 → 비용·보고주기 정하기 → 사고 대응권한 구분 → 월별 성과 점검 기준 설정"
    },
    "en": {
      "scene": "A buyer considers a distant rental building to be run by a professional manager.",
      "conflict": "The desire to save time conflicts with management fees, delayed reporting and the owner’s duty to monitor quality.",
      "countercheck": "Hiring a manager does not remove the owner’s need to check vacancies and property defects.",
      "steps": "Define management scope → set fees and reporting cycle → clarify emergency authority → monitor monthly indicators"
    },
    "ja": {
      "scene": "遠方の賃貸ビルを専門会社に任せて運営しようとします。",
      "conflict": "時間の節約と委託費・報告の遅れ・管理品質の監督責任が衝突します。",
      "countercheck": "管理委託契約があっても、空室や建物不具合を所有者が確認する必要はなくなりません。",
      "steps": "委託範囲 → 費用・報告周期 → 緊急時の権限 → 月次確認指標の設定"
    }
  }
};

export function getPublicFinalScenario(id,locale="ko") {
  return PUBLIC_FINAL_SCENARIOS[id]?.[locale] || PUBLIC_FINAL_SCENARIOS[id]?.ko || null;
}
