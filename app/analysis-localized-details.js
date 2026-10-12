// Step-specific explanations; the Korean axes remain the source of the examples.
export const ANALYSIS_METHOD_DETAILS = {
  en: {
    price: [
      'Record the seller’s asking price, date, area and sale scope. Keep it separate from any price judgment until comparable evidence is available.',
      'Choose completed transactions with similar use, scale, age, occupancy and location. Record material differences instead of choosing a transaction only because it is nearby.',
      'Compare total prices and prices per unit of area using the same area basis. A lower unit price can still mean a larger total commitment.',
      'Explain each price difference using age, vacancy, location, repairs and other verified conditions. Leave unexplained gaps open rather than inventing an adjustment.',
      'Identify the specific advantage that would justify a premium and the evidence supporting it. A seller’s claim or a higher asking price alone is insufficient.',
      'Compare operating income after vacancy and owner-paid costs with the purchase price. Keep gross rent, operating income and financing costs separate.',
      'Summarize the price position, supported advantages and unresolved gaps. This is a conclusion about price only; review the other axes before deciding to buy.',
    ],
    income: [
      'List rent, lease dates and any concessions for each unit. Separate full-occupancy scheduled rent from the rent due under the current leases.',
      'Match lease amounts to actual receipts for the same period. Record arrears, reductions and rent-free months so promised rent is not mistaken for collected income.',
      'Record the vacant units, their expected rent and the months without receipts. Show the lost income explicitly and avoid deducting a loss already reflected in actual receipts twice.',
      'Identify which recurring costs remain with the owner after tenant-paid charges. Separate recoverable charges from expenses the owner actually absorbs.',
      'Review recurring maintenance using several years of records. Keep one-off major replacements separate so an unusually quiet repair year does not become a zero-cost assumption.',
      'Subtract recurring owner-paid operating costs from income after vacancy. Show loan interest, tax and major capital work separately instead of presenting operating income as final profit.',
      'Review lease expiries, tenant concentration, arrears and likely future vacancy. Distinguish a current-period calculation from evidence that similar income can persist.',
    ],
    rights: [
      'Match the current registered owner with the seller and signing authority. For co-ownership or representation, record the authority needed for this transaction.',
      'Read ownership changes and restrictions in the relevant record section. Identify any unresolved change or restriction that affects the seller’s ability to complete the sale.',
      'List mortgages, creditors and their registered order. Connect each right to the proposed release or agreed treatment at closing.',
      'Record the registered maximum separately from the actual outstanding debt. Obtain current repayment information before calculating release funds.',
      'Check whether attachments or provisional attachments remain effective. Verify the conditions, documents and sequence needed to resolve them before paying.',
      'Identify special rights affecting occupation or use, including rights over land. Verify their scope and transaction treatment rather than treating every right as a mortgage.',
      'Write the expected post-closing state for each right: released, assumed by agreement or requiring further verification. Connect that state to the documents and payment sequence.',
    ],
    building: [
      'Record the building’s registered area, use, structure and completion year. Treat the records as a starting point for comparison with the actual property.',
      'Compare recorded use and area with the building on site. List discrepancies and determine whether they affect use, correction work or the acquisition scope.',
      'Review maintenance and repair records together with age. Identify work already completed and conditions still requiring inspection.',
      'Inspect major systems such as waterproofing, electrical equipment, HVAC and lifts. Record operating condition and obtain specialist inspection where the condition cannot be assessed reliably.',
      'Identify alterations or uses that do not match the records. Verify the applicable requirements and possible correction work before assuming the extra space is an advantage.',
      'Separate immediate repairs, near-term replacements and recurring maintenance. Record timing, inspection findings and estimate uncertainty for each item.',
      'Compare the price advantage with future repairs, replacements and unresolved constraints. Keep one-off cash needs visible alongside the recurring operating figures.',
    ],
    location: [
      'Identify the people and organizations likely to need this type of space. Separate passers-by from potential customers, occupants and tenants.',
      'Walk the actual routes used by the target users. Check visibility, entrances, transport and any barrier between busy streets and the subject property.',
      'Record the residential, employment, school or other demand base relevant to the use. Distinguish a recurring local need from a temporary event.',
      'Identify why people visit nearby facilities and whether those visits can lead to demand for this building. Proximity alone does not prove a usable connection.',
      'Compare alternative spaces by rent, access, size and condition. Assess what would make a tenant choose the subject instead of those substitutes.',
      'Check vacancy history and rents that were actually achieved, not just advertised rents. Use these as signals requiring explanation rather than a final location verdict.',
      'Review whether the sources of demand are stable and relevant to the intended use. Keep uncertain changes separate from confirmed current demand.',
    ],
    operation: [
      'List tenants, rent shares and management needs. Identify both income concentration and the number of separate relationships the owner must manage.',
      'Place renewal and expiry dates on one timeline. Check whether several move-outs, negotiations or new leases could occur together.',
      'Review vacancy and turnover over multiple periods. Record the repeated marketing, reinstatement and contracting work behind the current occupancy figure.',
      'Track arrears, complaints and interventions by date and unit. Separate isolated incidents from recurring patterns requiring owner attention.',
      'List systems, inspection schedules and maintenance vendors. Identify who arranges inspections, responds to faults and keeps the operating records.',
      'Separate work delegated to a manager from work retained by the owner. Include management fees, approval decisions and supervision time.',
      'Summarize the frequency, time and cost of tenant, vacancy and facility work. Compare the burden with the investor’s management capacity without collapsing it into one yield figure.',
    ],
  },
  ja: {
    price: [
      '売主の希望価格、確認日、面積、売買範囲を記録します。比較資料がそろうまで価格の評価と分けます。',
      '用途、規模、築年、稼働率、立地が近い成約事例を選びます。近さだけで選ばず、重要な条件差も記録します。',
      '同じ面積基準で総額と面積当たり価格を比較します。単価が低くても必要総額が大きい場合があります。',
      '築年、空室、立地、修繕など確認できた条件で価格差を説明します。根拠のない補正額を作らず、不明な差を残します。',
      '上乗せ価格を支える具体的な優位性と資料を特定します。売主の説明や高い希望価格だけを根拠にしません。',
      '空室と所有者負担費用を反映した運営収益を購入価格と比較します。総賃料、運営収益、借入費用を区別します。',
      '比較範囲での位置、確認できた優位性、未確認の差をまとめます。価格軸の結論を購入判断全体へ広げません。',
    ],
    income: [
      '区画ごとの賃料、契約期間、免除条件を一覧にします。満室想定額と現在の契約上の請求額を区別します。',
      '同じ期間の契約額と実入金を照合します。滞納、減額、賃料免除を記録し、約束された賃料を実収入と混同しません。',
      '空室区画、想定賃料、収入のない月数を記録します。実入金に既に反映した空室損失を二重に差し引きません。',
      '借主負担分を精算した後も所有者に残る反復費用を確認します。回収できる管理費と所有者の実負担を分けます。',
      '数年分の履歴で反復維持費を確認します。大規模な一時的交換工事は別にし、修繕の少ない一年を費用ゼロの根拠にしません。',
      '空室反映後の収入から所有者の反復運営費を差し引きます。借入利息、税金、大規模工事は別に示します。',
      '満了時期、賃料集中、滞納、将来の空室を確認します。現在の計算と同程度の収入が続く根拠を区別します。',
    ],
    rights: [
      '現在の登記上の所有者と売主・署名権限を照合します。共有や代理の場合は取引に必要な権限を確認します。',
      '該当する記録欄で所有権の変動と制限を読みます。売買の完了に影響する未解決事項を特定します。',
      '担保権、権利者、順位を一覧にします。各権利を決済時の抹消または合意した取扱いへ結び付けます。',
      '登記上の極度額と実際の債務残高を分けます。権利整理資金の計算前に最新の返済情報を確認します。',
      '差押え・仮差押えが現在も有効か確認します。支払い前に解消条件、書類、実行順序を確認します。',
      '占有や利用に影響する特別な権利と土地上の権利を特定します。すべてを担保権と同じ扱いにしません。',
      '決済後に抹消、合意により承継、追加確認となる権利を個別に記録します。書類と支払順序へ結び付けます。',
    ],
    building: [
      '公的記録上の面積、用途、構造、築年を記録します。実物件との比較を始める資料として使います。',
      '記録上の用途・面積を現場と照合します。差異が利用、是正、取得範囲へ及ぼす影響を整理します。',
      '築年と維持管理・修繕履歴を合わせて確認します。実施済み工事と追加点検が必要な状態を分けます。',
      '防水、電気、空調、昇降機など主要設備を点検します。状態を判断できない項目は専門点検で確認します。',
      '記録と異なる改造や利用を特定します。増えた空間を利点とする前に要件と是正の可能性を確認します。',
      '即時修繕、近い将来の交換、反復維持を分けます。時期、点検結果、見積りの不確実性を記録します。',
      '価格の利点と修繕・交換・未解決の制約を比較します。一時的な必要現金は反復運営収支と分けて示します。',
    ],
    location: [
      'この種類の空間を必要とする人や組織を特定します。通行人、顧客、利用者、借主候補を区別します。',
      '対象利用者が使う実際の経路を歩きます。視認性、入口、交通、繁華街と対象物件の間の障壁を確認します。',
      '用途に関係する住宅、雇用、学校などの需要基盤を記録します。継続的な需要と一時的な催しを分けます。',
      '周辺施設を訪れる目的がこの建物の需要につながるか確認します。近さだけで関係があるとは判断しません。',
      '代替物件の賃料、アクセス、広さ、状態を比較します。借主が対象物件を選ぶ理由を確認します。',
      '空室履歴と実際の成約賃料を確認します。募集賃料だけを使わず、市場の説明が必要な兆候として読みます。',
      '需要源の安定性と用途との関係を確認します。不確実な将来変化と現在確認できる需要を分けます。',
    ],
    operation: [
      '借主、賃料比率、管理項目を一覧にします。収入集中と管理する相手の数を両方確認します。',
      '更新・満了日を一つの時間軸に置きます。退去、交渉、新規契約が集中する時期を確認します。',
      '複数期間の空室と入替を確認します。現在の稼働率の裏にある募集、原状回復、契約業務を記録します。',
      '滞納、苦情、対応を日付・区画別に記録します。単発の問題と所有者の反復介入を要する傾向を分けます。',
      '設備、点検予定、業者を一覧にします。点検手配、故障対応、記録保存の担当者を確認します。',
      '委託業務と所有者に残る業務を分けます。管理費、承認判断、監督時間も含めます。',
      '借主、空室、設備業務の頻度、時間、費用をまとめます。一つの利回りへ集約せず管理可能な負担と比較します。',
    ],
  },
};

const REASON_STEP = {
  price: [0,1,2,3,4,5,6], income: [1,2,3,4,6,5,6],
  rights: [0,1,2,3,4,5,6], building: [2,1,3,4,2,5,6],
  location: [0,2,1,3,4,5,6], operation: [6,0,1,2,3,4,5],
};
export function reasonDetail(locale,id,index) {
  const overrides = {
    en: {
      'income:4': 'Compare the reasons behind the yield difference. A low price can raise the quoted yield while vacancy, uncertain receipts or intensive management increase the burden.',
      'income:6': 'A useful conclusion identifies both the operating amount that remains and the assumptions needed for it to recur. Record those assumptions instead of promising a future return.',
      'rights:1': 'In the Korean registry framework used by this guide, Section A records ownership-related matters and Section B records other rights. Reading them separately helps distinguish ownership restrictions from security and use rights.',
      'building:4': 'Repair records can show preventive maintenance rather than deterioration alone. Check what was repaired, whether the cause was resolved and whether the same fault returned.',
    },
    ja: {
      'income:4': '利回り差の理由を比較します。低価格で表面利回りが上がっても、空室、収入の不確実性、管理負担が大きい場合があります。',
      'income:6': '残る運営収益と、それが反復するための前提を示します。前提を記録し、将来収益を保証しません。',
      'rights:1': 'このガイドが対象とする韓国の登記では、甲区は所有権関係、乙区は所有権以外の権利を扱います。区別して読むことで所有制限と担保・利用権を分けられます。',
      'building:4': '修繕履歴は劣化だけでなく予防的管理の証拠にもなります。工事内容、原因の解消、同じ不具合の再発を確認します。',
    },
  };
  return overrides[locale][`${id}:${index}`] || ANALYSIS_METHOD_DETAILS[locale][id][REASON_STEP[id][index]];
}

// Values and assumptions match the existing Korean educational price case.
export const PRICE_CASE = {
  en: {
    subject: {label:'Subject property',price:'KRW 1.50 billion',note:'Seller’s asking price · hypothetical educational case'},
    snapshot: [['Comparable 1','KRW 1.42 billion','Older · partly vacant'],['Comparable 2','KRW 1.51 billion','Newer · fully occupied'],['Comparable 3','KRW 1.38 billion','Inferior location'],['Income yield','6.4% → about 4.7%','Full-occupancy rent → after vacancy and operating costs']],
    report: [
      {label:'Price position',state:'Near the upper end of the comparison range',body:'The subject’s KRW 1.50 billion price sits toward the upper end of these transactions. Position alone does not establish overpricing.'},
      {label:'Comparable conditions',state:'Condition differences must explain the price',body:'The KRW 1.42 billion property is older and partly vacant. The KRW 1.51 billion property is newer and fully occupied. These differences matter more than a simple average.'},
      {label:'Premium support',state:'No clear additional advantage established',body:'The supplied assumptions do not establish a stronger location, tenancy or physical-condition advantage that explains the subject’s upper-range price.'},
      {label:'Income support',state:'The gross figure overstates the operating yield',body:'Annual full-occupancy rent is KRW 96 million. Deduct KRW 12 million of vacancy loss and KRW 14 million of owner operating costs: KRW 70 million ÷ KRW 1.50 billion ≈ 4.7%, before financing, tax and major capital work.'},
    ],
    graphic: {title:'Bring the price evidence together.',inputs:[['Price position','Upper range'],['Extra advantage','Not established'],['Income support','Limited']],result:'Somewhat unfavorable on price'},
    conclusion: {state:'Somewhat unfavorable on the PRICE axis.',body:'Under these educational assumptions, the upper-range price is not sufficiently explained by the known conditions and operating income.',note:'This is a price-axis conclusion only. Review income, rights, building, location and operation before making a purchase decision.'},
  },
  ja: {
    subject: {label:'分析対象',price:'15億ウォン',note:'売主の希望価格 · 仮想の教育用事例'},
    snapshot: [['比較1','14.2億ウォン','築年が古い · 一部空室'],['比較2','15.1億ウォン','より新しい · 満室'],['比較3','13.8億ウォン','立地が劣る'],['収益率','6.4% → 約4.7%','満室賃料 → 空室・運営費反映']],
    report: [
      {label:'価格位置',state:'比較範囲の上側',body:'15億ウォンは比較事例の上側にあります。ただし、位置だけで割高とは断定しません。'},
      {label:'比較条件',state:'条件差で価格を説明する必要があります',body:'14.2億ウォンの物件は古く一部空室、15.1億ウォンの物件は新しく満室です。単純平均より条件差が重要です。'},
      {label:'上乗せの根拠',state:'明確な追加優位性は未確認',body:'この前提では、対象の上側価格を支える立地、賃貸安定性、建物状態の追加優位性が確認できていません。'},
      {label:'収益の裏付け',state:'表面数値と運営収益率は異なります',body:'満室年賃料9,600万ウォンから空室損失1,200万、所有者運営費1,400万を控除すると7,000万ウォンです。15億で割ると約4.7%で、借入費用・税金・大規模工事は別です。'},
    ],
    graphic: {title:'価格の判断根拠をまとめます。',inputs:[['価格位置','上側'],['追加優位','未確認'],['収益裏付け','限定的']],result:'価格軸ではやや不利'},
    conclusion: {state:'価格軸ではやや不利です。',body:'教育用の前提では、確認できた条件と運営収益だけで比較範囲の上側価格を十分に説明できません。',note:'価格軸だけの結論です。購入判断は収益・権利・建物・立地・運営と合わせて行います。'},
  },
};
