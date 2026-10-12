// Educational examples translated from the Korean analysis-v019-data.js scenarios.
// South Korean law, KRW figures, case premises, and the Korean analysis decisions remain authoritative.
// Never replace a Korean hypothetical with a locale-specific jurisdiction or market assumption.
export const LOCALIZED_ANALYSIS_CASES = {
  en: {
    income: {
      subject: {label:'Subject property',price:'KRW 1.50 billion building',note:'The same hypothetical Korean building, assessed through its rental-income assumptions.'},
      snapshot:[
        ['Annual rent at full occupancy','KRW 96 million','Starting assumption: all units are leased'],
        ['Vacancy impact','− KRW 12 million','Rent not received during vacancy'],
        ['Rent after vacancy','KRW 84 million','Income after the assumed vacancy loss'],
        ['Owner-paid operating costs','− KRW 14 million','Recurring costs borne by the owner'],
        ['Simplified operating income','About KRW 70 million','Educational calculation after vacancy and operating costs'],
      ],
      report:[
        {label:'Income basis',state:'Full-occupancy rent is not current rental income',body:'Annual rent would be KRW 96 million at full occupancy. After the assumed KRW 12 million vacancy loss, estimated rental income is KRW 84 million. Do not treat potential rent as money already collected.'},
        {label:'Vacancy',state:'Vacancy removes KRW 12 million a year',body:'An empty unit represents rent not received, not just a vacant-space label. This hypothetical loss prevents part of the full-occupancy rent from becoming actual income.'},
        {label:'Operating costs',state:'Receiving rent does not mean keeping all of it',body:'The assumed KRW 84 million after vacancy is not final profit. Subtracting KRW 14 million in recurring owner-paid operating costs leaves simplified operating income of about KRW 70 million.'},
        {label:'Yield comparison',state:'6.4% and about 4.7% use different income bases',body:'KRW 96 million divided by KRW 1.50 billion is a simple 6.4% full-occupancy ratio. Using KRW 70 million after vacancy and operating costs gives about 4.7%; the deductions must be disclosed.'},
        {label:'Continuity',state:'Whether this income can recur is still unknown',body:'This is a one-period illustration. Lease expiries, tenant stability, repeated vacancy and maintenance requirements still need evidence before a similar future income can be assumed.'},
      ],
      graphic:{type:'incomeWaterfall',title:'How rental income is reduced',stages:[['Full occupancy','KRW 96m'],['After vacancy','KRW 84m'],['After operating costs','About KRW 70m']],yield:'About 4.7% of the KRW 1.50bn price'},
      conclusion:{state:'Operating income is lower than the headline rental figure',body:'Assuming full occupancy makes the property look more profitable. After vacancy and owner-paid operating costs, both the money left and the simplified yield fall. The income judgment must use the underlying occupancy and cost conditions.',note:'The 4.7% is a hypothetical simplified operating yield. Loan costs, taxes and major one-off repairs are excluded and must be reviewed separately.'},
    },
    rights: {
      subject:{label:'Subject property',price:'Korean commercial-building registry',note:'Hypothetical Korean registered-rights example'},
      snapshot:[['Registered owner','A','Check that A matches the seller'],['Registered mortgage','Maximum secured amount: KRW 600 million','Check actual debt balance separately'],['Provisional attachment','One entry','Verify if effective and what is required for release'],['Agreed closing treatment','Release planned','Connect release paperwork to final payment']],
      report:[
        {label:'Ownership',state:'Verify the owner before proceeding',body:'Compare the registered owner to the person selling the building. For joint ownership or an agent, confirm the authority necessary to execute the transaction.'},
        {label:'Mortgage',state:'The registered ceiling is not the debt still owed',body:'A KRW 600 million maximum secured amount does not prove a KRW 600 million loan balance. Check the actual payoff amount and how mortgage cancellation documents will be obtained at closing.'},
        {label:'Restriction',state:'Check the provisional attachment and release conditions',body:'If the one provisional attachment is still effective, establish who holds the right, which conditions resolve it, and how the sale contract and closing will address those conditions.'},
        {label:'After closing',state:'Turn “release planned” into a verifiable sequence',body:'Confirm when the mortgage and provisional attachment will be removed, which sums and documents are needed, and the order of payment and registration. Identify the expected state of the Korean register after closing.'},
      ],
      graphic:{type:'rightsProcess',title:'From existing rights to the post-closing record',current:['Mortgage','Provisional attachment'],actions:['Confirm actual debt','Verify release conditions','Coordinate payment and cancellations'],result:'Verify rights remaining after closing'},
      conclusion:{state:'These registered rights require closing-specific verification',body:'The mere presence of the mortgage and provisional attachment is not the complete decision. What matters is the actual debt, release conditions and whether the agreed actions take effect with final payment.',note:'Korean legal rights depend on registration, contract terms and possession. This is a hypothetical educational case, not a legal opinion; seek professional review where needed.'},
    },
    building: {
      subject:{label:'Subject property',price:'Commercial building completed in 2002',note:'Hypothetical Korean building-condition example'},
      snapshot:[['Asking price','Below nearby alternatives','Looks attractive on price alone'],['Roof','Waterproofing needed','Work may be required soon'],['Lift','Aging','Assess timing of major repair or replacement'],['External wall','Some cracks','Inspection and repair scope not yet verified'],['Extension','Further verification','Compare the actual building with the Korean building register']],
      report:[
        {label:'Current condition',state:'Usable today does not mean problem-free',body:'The building may appear functional from outside, but the roof, lift and external wall could each require inspection and expensive action.'},
        {label:'Immediate action',state:'Roof waterproofing may be a near-term cost',body:'If waterproofing is uncertain or there are leak marks, determine whether work can wait or is needed immediately after purchase.'},
        {label:'Future replacement',state:'Budget separately for the aging lift',body:'A working lift may still be close to significant repair or replacement. Use inspection findings, service history and estimates instead of assuming zero future cost.'},
        {label:'Korean records',state:'Check any extension against the building register',body:'Additional floor space is not automatically an advantage. Compare recorded area and use with the site, and assess the impact of any discrepancy.'},
        {label:'Total burden',state:'A low purchase price may not mean low ownership cost',body:'Put the price discount alongside repairs, replacements and record-related corrections to understand the probable overall burden.'},
      ],
      graphic:{type:'buildingHiddenCost',title:'Tasks behind an attractive price',price:'Lower purchase price',layers:['Roof waterproofing','Potential lift replacement','External wall repair','Check the extension against records'],result:'True ownership burden may be higher'},
      conclusion:{state:'A cheaper price and a cheaper building are not the same',body:'The assumed price is low, but repair, replacement and legal-record checks remain. Judge the price together with the work and cash that may be needed after purchase.',note:'Actual costs depend on site inspection and quotations. This hypothetical example explains how to turn findings into expense items.'},
    },
    location: {
      subject:{label:'Subject property',price:'Shop near a major Korean commercial district',note:'Hypothetical commercial-location example'},
      snapshot:[['Foot traffic','High','Many people in the surrounding district'],['Position','One block off the main commercial street','May fall outside the primary pedestrian route'],['Local demand','Weak for some tenant categories','Purpose of visits may not fit this unit'],['Competition','Many alternative shops','Tenants have other spaces to choose from'],['Vacancy','Visible nearby','Investigate strength of leasing demand']],
      report:[
        {label:'Number of visitors',state:'The district has substantial foot traffic',body:'The busy surroundings create a favorable initial impression, but the number of people walking nearby does not establish demand for space in this building.'},
        {label:'Reason for visiting',state:'Check whether visits translate into demand for this building',body:'Determine how many visitors to the main district reach this street and need the kind of space offered by the subject property.'},
        {label:'Access and route',state:'Being one block away can change who arrives',body:'Even near a busy district, a location off the main walking route may not receive the same level of pedestrian exposure.'},
        {label:'Competition and vacancy',state:'Many substitutes and nearby vacancies are warning signals',body:'Prospective tenants may prefer other units. Nearby vacancy should prompt investigation into achieved rents and demand even when overall foot traffic is high.'},
        {label:'Durability',state:'Verify the connection between visitors and recurring tenant demand',body:'Check whether the reasons people visit the area match this building’s possible tenant uses and will continue over time.'},
      ],
      graphic:{type:'locationConversion',title:'From foot traffic to actual tenant demand',stages:[['Foot traffic','High'],['Reason for visiting','Connection to check'],['Routes and local demand','Partly weak'],['Competition and vacancies','Possible burden']],result:'Tenant-demand connection needs verification'},
      conclusion:{state:'Busy surroundings do not guarantee demand for this unit',body:'Foot traffic is high, but the building is away from the main route and has competing units and vacancies nearby. Investigate whether nearby visitors will become actual demand for the subject.',note:'Demand varies by tenant type and building conditions. This hypothetical report explains why foot traffic alone cannot settle a location decision.'},
    },
    operation: {
      subject:{label:'Properties compared',price:'Building A vs Building B',note:'Both have an assumed simple yield of 5%'},
      snapshot:[['Building A','Longer leases; expiry dates spread out','Less vacancy; simple facilities'],['Building B','Many short leases; expiry dates concentrated','Repeated vacancy; complex facilities'],['Quoted yield','A: 5% · B: 5%','Identical percentage under the hypothetical assumptions']],
      report:[
        {label:'Tenant stability',state:'Building A has a more stable tenant structure',body:'Long leases with staggered expirations reduce the chance of many lease negotiations or turnovers happening at once. B has more short leases and may require more frequent contract work.'},
        {label:'Vacancy and turnover',state:'Building B is likely to need more repetitive work',body:'Repeated vacancies and tenant changes can require repeated marketing, restoration and contract execution.'},
        {label:'Facility management',state:'Building B has a more complex maintenance scope',body:'More complicated systems can mean more inspections, vendor coordination, emergency responses and spending decisions. A has a smaller recurring workload.'},
        {label:'Owner involvement',state:'The same yield can require different amounts of time',body:'Even with a shared assumed yield of 5%, the owner or manager may spend significantly more time handling tenants, vacancy and equipment in B.'},
      ],
      graphic:{type:'operationCompare',title:'Same yield · different management burden',yield:'5%',a:{label:'A',items:['Long leases','Staggered expiries','Less vacancy','Simple systems'],result:'Lower intervention'},b:{label:'B',items:['Frequent turnover','Concentrated expiries','Repeated vacancy','Complex systems'],result:'Higher intervention'}},
      conclusion:{state:'Equal yields do not imply equal operating burdens',body:'Both buildings have an assumed yield of 5%, yet the frequency of tenant replacement, vacancy and facility work differs. Record this as an ownership burden separate from the percentage return.',note:'The burden depends on self-management and the scope of professional management. This is a hypothetical educational comparison.'},
    },
  },
  ja: {
    income: {
      subject:{label:'分析対象',price:'15億ウォンの建物',note:'同じ仮想物件を収益軸から見直します'},
      snapshot:[['満室想定の年間賃料','9,600万ウォン','全区画が賃貸中という出発点'],['空室による減収','−1,200万ウォン','空室期間に受け取れない賃料'],['空室反映後の賃料','8,400万ウォン','想定空室を差し引いた額'],['所有者負担の運営費','−1,400万ウォン','継続的に発生する所有者負担の費用'],['簡易運営収益','約7,000万ウォン','空室と運営費を反映した教育用計算']],
      report:[
        {label:'収入の基準',state:'満室想定額は現在の受取賃料ではありません',body:'満室時の年間賃料は9,600万ウォンの想定ですが、空室による減収1,200万ウォンを差し引くと、想定賃料収入は8,400万ウォンです。最大想定額と実際の入金を混同しないようにします。'},
        {label:'空室の影響',state:'空室によって年間1,200万ウォンが減ります',body:'空室は部屋が空いている表示ではなく、受け取れない賃料です。この仮想例では満室想定額の一部が入金につながりません。'},
        {label:'運営費',state:'受け取った賃料がすべて残るわけではありません',body:'空室反映後の8,400万ウォンから、所有者が負担する反復運営費1,400万ウォンを差し引くと、簡易運営収益は約7,000万ウォンになります。'},
        {label:'利回りの差',state:'6.4%と約4.7%は計算の基準が異なります',body:'満室想定賃料9,600万ウォン÷価格15億ウォンは6.4%です。空室と運営費を反映した7,000万ウォンを用いると約4.7%で、控除項目の区別が必要です。'},
        {label:'継続性',state:'同程度の収益が続くかはまだ不明です',body:'これは一時点の例示計算です。契約満了、テナントの安定性、空室の反復、修繕費を確認しなければ今後の収益は判断できません。'},
      ],
      graphic:{type:'incomeWaterfall',title:'賃料が運営収益になるまで',stages:[['満室想定','9,600万ウォン'],['空室反映','8,400万ウォン'],['運営費反映','約7,000万ウォン']],yield:'15億ウォンに対し約4.7%'},
      conclusion:{state:'表面上の賃料より実際の運営収益は少なくなります',body:'満室想定額だけでは高収益に見えますが、空室と所有者負担を反映すると残額も簡易利回りも低下します。稼働率と費用を基準に判断します。',note:'約4.7%は仮想の簡易運営利回りです。借入費用、税金、大規模な一時修繕は含めず、別途確認が必要です。'},
    },
    rights: {
      subject:{label:'分析対象',price:'韓国の商業用建物の登記',note:'韓国の権利登記を使った仮想の教育用事例'},
      snapshot:[['登記名義人','A','売主との一致を確認'],['根抵当権','債権最高額6億ウォン','実際の債務残高は別途確認'],['仮差押え','1件','有効性と抹消条件を確認'],['決済条件','抹消予定','残金支払いと手続きを結び付ける']],
      report:[
        {label:'所有者の確認',state:'まず登記名義人を確認します',body:'登記上の所有者と売主を照合します。共有や代理がある場合は、取引を行う権限も確認します。'},
        {label:'担保権',state:'債権最高額は実際の残債ではありません',body:'債権最高額6億ウォンという記載だけでは、残債が6億ウォンとは言えません。最新の返済額と決済時の抹消書類の確保方法を確認します。'},
        {label:'制限事項',state:'仮差押えの効力と抹消条件を確認します',body:'1件の仮差押えが有効であれば、権利者、解消条件、売買契約と決済でどう処理するかを明確にします。'},
        {label:'決済後の状態',state:'「抹消予定」を具体的な手順にします',body:'根抵当権と仮差押えの抹消時期、必要金額・書類、残金支払いと登記手続きの順序を確認し、決済後の登記状態を整理します。'},
      ],
      graphic:{type:'rightsProcess',title:'現在の登記から決済後の状態へ',current:['根抵当権','仮差押え'],actions:['実際の債務確認','抹消条件の確認','残金と抹消を連動'],result:'決済後に残る権利を確認'},
      conclusion:{state:'決済前に解消方法を確認すべき権利があります',body:'根抵当権や仮差押えがあることだけで結論を出さず、残債と抹消条件、残金支払いとともに予定どおり処理できるかを確認します。',note:'韓国の権利関係は登記・契約・占有状況に左右されます。これは教育用の仮想例であり、必要に応じて専門家の確認が必要です。'},
    },
    building: {
      subject:{label:'分析対象',price:'2002年竣工の商業用建物',note:'韓国の建物状態を想定した仮想の教育用事例'},
      snapshot:[['売出価格','周辺より低い','価格だけなら魅力的'],['屋上','防水工事が必要','近い時期の対応を想定'],['昇降機','老朽化','大規模修繕・交換時期を確認'],['外壁','一部にひび割れ','点検と補修範囲が未確認'],['増築部分','追加確認','韓国の建築物台帳と現況を照合']],
      report:[
        {label:'現況',state:'現在使えても問題がないとは限りません',body:'外観上は利用できても、屋上・昇降機・外壁には点検や費用の大きい工事が必要な可能性があります。'},
        {label:'早期対応',state:'屋上防水を近い将来の費用として確認します',body:'防水状態が不明確、または漏水跡がある場合は、購入後まで待てる工事か、すぐ必要かを確認します。'},
        {label:'交換費用',state:'老朽化した昇降機の費用を別に確保します',body:'現状で作動していても大規模修繕や交換時期が近い場合があります。点検・履歴・見積りを資金計画に反映します。'},
        {label:'法的確認',state:'増築部分と建築物台帳を照合します',body:'追加された空間を直ちに利点とせず、記録上の面積・用途と現況を比べ、不一致による影響を確認します。'},
        {label:'総負担',state:'低い購入価格だけで安い建物とは言えません',body:'価格の割安感と将来の修繕、設備交換、台帳の不一致への対応を同時に見て保有負担を判断します。'},
      ],
      graphic:{type:'buildingHiddenCost',title:'低い価格の裏にある対応事項',price:'購入価格は低い',layers:['屋上防水','昇降機交換の可能性','外壁補修','増築記録の照合'],result:'実際の保有負担は変わります'},
      conclusion:{state:'安い購入価格と安い建物は同じではありません',body:'購入価格が低くても近い時期の修繕や設備交換、法的確認事項が残ります。購入後の費用と必要な手続きを合わせて判断します。',note:'実際の工事費は現地調査と見積りで異なります。これは確認事項を費用へ結び付ける教育用の仮想例です。'},
    },
    location: {
      subject:{label:'分析対象',price:'韓国の中心商業地に近い店舗',note:'商業立地を想定した仮想の教育用事例'},
      snapshot:[['通行人数','多い','地区全体では人通りが多い'],['位置','中心商業通りから1区画離れる','主要な歩行経路から外れる可能性'],['周辺需要','一部業種向けの需要が弱い','来訪目的と空間利用のつながりを確認'],['競合','代替店舗が多数','借主に選択肢が多い'],['空室','近隣で確認','実際の借主需要を調べる']],
      report:[
        {label:'人の量',state:'周囲の通行人数は多くあります',body:'人通りの多い地区は一見魅力的ですが、通行人数だけではこの建物の賃貸需要を証明できません。'},
        {label:'来訪目的',state:'対象建物への需要につながるか確認します',body:'中心商業地の来訪者がこの通りまで来るか、対象建物の空間を必要とするかを分けて調べます。'},
        {label:'動線・アクセス',state:'1区画の違いが来訪者の数に影響します',body:'繁華街に近くても主要な歩行経路から外れると、同じ通行量が対象建物まで続くとは限りません。'},
        {label:'競合と空室',state:'代替物件と近隣の空室は確認すべき兆候です',body:'借主が他の店舗を選べるため、地区の通行量が多くても需要を確保できない場合があります。実際の成約賃料と空室の理由を確認します。'},
        {label:'持続性',state:'来訪者が継続的な賃貸需要につながるか確認します',body:'人がこの地域に来る目的が対象建物で可能な業種・用途と一致し、その需要が続くかを調べます。'},
      ],
      graphic:{type:'locationConversion',title:'通行人数から賃貸需要になるまで',stages:[['人通り','多い'],['来訪目的','つながりを確認'],['動線・周辺需要','一部が弱い'],['競合・空室','負担の兆候']],result:'対象建物の需要は追加確認が必要'},
      conclusion:{state:'人通りが多くても対象物件の需要は別です',body:'地区はにぎやかでも対象建物が主要な動線から外れ、競合や空室があるなら、実際に借り手がつくかをさらに確認する必要があります。',note:'需要は業種や建物条件によって異なります。通行人数だけで結論を出さないための教育用仮想例です。'},
    },
    operation: {
      subject:{label:'比較対象',price:'建物Aと建物B',note:'どちらも簡易利回り5%と仮定'},
      snapshot:[['建物A','長期賃貸・満了時期が分散','空室が少なく設備は単純'],['建物B','短期賃貸が多く満了時期が集中','空室が反復し設備は複雑'],['利回り','A 5% · B 5%','仮想の前提では同じ比率']],
      report:[
        {label:'賃貸の安定性',state:'Aのほうが安定した賃貸構造です',body:'Aは長期賃貸が多く契約満了時期が分散しているため、更新や入替業務が集中しにくい構造です。Bは短期契約が多く、より頻繁な対応が想定されます。'},
        {label:'空室と入替',state:'Bは反復する業務が多くなる可能性があります',body:'Bでは空室や借主の交代が反復し、募集、原状回復、契約などの作業が繰り返し発生しやすくなります。'},
        {label:'設備管理',state:'Bの維持管理範囲は複雑です',body:'設備が多く複雑なほど、点検、業者調整、故障対応、費用判断が増える可能性があります。Aは反復管理の項目が比較的少ない設定です。'},
        {label:'管理への関与',state:'同じ利回りでも必要な時間が異なります',body:'利回り5%という条件が同じでも、Bのほうが借主、空室、設備への所有者・管理者の関与が増える可能性があります。'},
      ],
      graphic:{type:'operationCompare',title:'同じ利回り・異なる運営負担',yield:'5%',a:{label:'A',items:['長期賃貸','満了時期が分散','空室が少ない','設備が単純'],result:'管理関与が少ない'},b:{label:'B',items:['入替が多い','満了が集中','空室が反復','設備が複雑'],result:'管理関与が多い'}},
      conclusion:{state:'同じ利回りでも運営負担は異なります',body:'AとBの簡易利回りは同じ5%ですが、借主交代、空室、設備管理が必要になる頻度は異なります。この差を利回りとは別の保有負担として記録します。',note:'運営負担は直接管理と委託範囲によって変わります。これは教育用の仮想比較です。'},
    },
  },
};
