// User-facing question copy only. Scoring indices stay in SelfCheckClient/self-check-data.
// Each option keeps the original scoreIndex so localization cannot change analysis logic.

const KO = null;

const EN = {
  chapters: {
    '왜 사려는가':'Why you want to buy', '보유와 버티는 힘':'Holding power & resilience', '내 자금의 방어력':'Financial resilience',
    '기회를 만났을 때':'When an opportunity appears', '판단이 흔들리는 순간':'When judgment gets tested', '마지막 결정을 내릴 때':'Making the final call',
    '대출과 자원':'Debt & resources', '검증과 안전장치':'Verification & safeguards', '계약 직전의 나':'Right before signing',
    '공실과 가격 상한선':'Vacancy & price limits', '시간·관리·미래가치':'Time, management & future value', '시간과 관리':'Time & management',
    '판단 방식':'Decision style', '자산을 고를 때':'Choosing an asset', '위험을 받아들이는 방식':'How you take risk',
    '매입 목적':'Purchase objective', '현재 위치':'Current financial position', '투자 성향':'Investment tendency', '활용 가능한 자원':'Available resources', '매입 기준 성향':'Purchase criteria', '현재 준비도':'Current readiness'
  },
  scaleGroups: {
    S01:{title:'Holding power & resilience',subtitle:'Answer quickly based on how you react to time and cash-flow pressure.'},
    S02:{title:'When judgment gets tested',subtitle:'See how you respond after recent wins, price cuts, and visible losses.'},
    S03:{title:'Verification & safeguards',subtitle:'Check how concrete your pre-contract verification habits and stop rules are.'},
    S04:{title:'Vacancy & price limits',subtitle:'See what you do when cash flow stops or a property exceeds your price ceiling.'},
    S05:{title:'Time, management & future value',subtitle:'Explore your tendency to hold long term, manage directly, and wait for future value.'},
  },
  scaleCopy: {
    Q02:{text:'I can hold for the long term even if results take time to appear.',left:'Comfortable waiting',right:'Need faster results'},
    Q05:{text:'Future value a few years from now can matter more than current rent.',left:'Current rent first',right:'Future value first'},
    Q09:{text:'Even a good property becomes less attractive if the new debt burden is high.',left:'Low burden',right:'High burden'},
    Q12:{text:'I have enough room to cover debt, living costs and holding costs even if income falls.',left:'Hard to absorb',right:'Plenty of buffer'},
    Q16:{text:'Even after recent decisions worked out, I keep the same verification process.',left:'More cautious',right:'More confident'},
    Q17:{text:'Hearing that a property has been heavily discounted from its original asking price affects my judgment.',left:'Little influence',right:'Feels cheaper'},
    Q18:{text:'I can exit at a loss if the conditions that justified the investment no longer hold.',left:'Exit by rule',right:'Wait for recovery'},
    Q27:{text:'If tax, financing or legal issues arise, I can quickly find the right professional.',left:'Not sure where to start',right:'Can verify quickly'},
    Q36:{text:'When reviewing a new property, I check my current debt payments as a percentage of income.',left:'Rarely check',right:'Always check'},
    Q37:{text:'Even when someone sends me a recommendation, I re-check source data and other opinions.',left:'Rely on recommendation',right:'Re-verify thoroughly'},
    Q42:{text:'If conditions deteriorate, I have clear criteria for holding versus exiting.',left:'No clear rule',right:'Clearly quantified'},
    Q39:{text:'I can handle several months without rent right after purchase within my plan.',left:'Hard to absorb',right:'Vacancy already planned'},
    Q41:{text:'Even if I love a property, I can walk away when it exceeds my price ceiling.',left:'Raise the ceiling',right:'Stick to the limit'},
    Q10:{text:'I have enough financial room to handle unexpected repairs and taxes at the same time.',left:'Hard to handle',right:'Comfortable buffer'},
    Q03:{text:'If the asset is strong, I can wait even when results take a long time.',left:'Prefer quick results',right:'Can hold long term'},
    Q25:{text:'I can spend time directly dealing with tenants, repairs and management.',left:'Hands-on management is difficult',right:'Hands-on management is fine'},
    Q30:{text:'Even with ordinary current rent, strong evidence of future value increases my interest.',left:'Current income first',right:'Future value first'},
    Q35:{text:'When several experts and investors agree, it can change how interested I am.',left:'Little influence',right:'Strong influence'},
  },
  questions: {
    Q01:{text:"You find a building you really like on a Saturday afternoon. If someone asks, ‘Why do you want to buy it?’, what would you say?",options:[["I can explain it clearly in one sentence",0],["I can give a general reason",1],["Several reasons are mixed together",2],["It simply looked appealing",3],["I am not really sure yet",4]]},
    Q02:{text:"You find a property you want, but the analysis says its value may take at least five years to fully emerge.",options:[["I can comfortably wait five years or more",0],["Four to five years is fine",1],["About three years is acceptable",2],["I want to see results within one or two years",3],["If it takes that long, my interest drops sharply",4]]},
    Q03:{text:"It is a solid asset, but meaningful results may take time. Which timeline feels most comfortable?",options:[["I need to see change within a year",0],["Around two years is fine",1],["I can wait three to four years",2],["Five years or more is fine",3],["If the fundamentals are strong, I can wait as long as needed",4]]},
    Q04:{text:"Two buildings cost the same. Which one attracts you more?",options:[["The one with steady rent",0],["The one with slightly more stable rent",1],["They feel about the same",2],["The one with stronger appreciation potential",3],["The one that could rise a lot even with weaker rent",4]]},
    Q05:{text:"Current rent is weaker than expected, but nearby development suggests the property's value could change significantly in a few years.",options:[["Weak current rent makes me lose interest",4],["I would look into it a little more",3],["I would consider it if the conditions fit",2],["Strong evidence of future value would interest me",1],["This type of property is actually more attractive to me",0]]},
    Q06:{text:"You started looking for rental income, but as you search, capital gains begin to appeal more. What do you do?",options:[["My goal changed, so I rebuild my criteria first",0],["I revise a few core criteria",1],["I keep looking at both and decide gradually",2],["I adjust my criteria to fit attractive properties",3],["I keep the criteria and focus on finding a property first",4]]},
    Q07:{text:"If you could do only one first, which would it be?",options:[["Find a good property first",0],["Define my purpose and criteria first",4]]},
    Q08:{text:"You love a property, but buying it would require almost all of your available cash.",options:[["If it is a real opportunity, I could put almost all of it in",4],["Keeping only a small amount of cash is fine",3],["I would keep living and emergency funds aside",2],["I need to keep a substantial cash buffer",1],["I would walk away without enough reserve cash",0]]},
    Q09:{text:"You find a good property, but it requires a new loan. Thinking about the debt you already repay, how do you feel?",options:[["It hardly feels burdensome",4],["It concerns me a little",3],["I need to recalculate the terms",2],["It feels quite burdensome",1],["Taking on another loan itself feels very burdensome",0]]},
    Q10:{text:"One month after purchase, unexpected repair costs and taxes hit at the same time.",options:[["It would be very difficult to handle",4],["I might need to sell other assets",3],["I could manage by adjusting things",2],["I could cover most of it with separate funds",1],["I could handle it with the reserve I planned in advance",0]]},
    Q11:{text:"Before viewing properties, how clearly have you defined the maximum amount you can actually invest?",options:[["Not at all",4],["I only have a rough feeling",3],["I know the general range",2],["I have a fairly specific ceiling",1],["I have a clear number",0]]},
    Q12:{text:"If your income drops for several months, you still need to cover debt payments, living costs and property holding costs.",options:[["I could barely manage",4],["I could manage only briefly",3],["I could adjust and manage for a few months",2],["I could manage for quite a while",1],["I have ample financial room",0]]},
    Q13:{text:"While your money is tied up in a building, another investment opportunity appears.",options:[["I might have to sell another asset quickly",4],["Raising cash would be quite difficult",3],["I could manage with some adjustments",2],["I could respond without touching other assets",1],["I have plenty of separate liquid funds",0]]},
    Q14:{text:"You sit down for a new loan consultation. What do you want to know first?",options:[["How much more I can borrow",4],["How much I currently pay in principal and interest",0]]},
    Q15:{text:"A property looks promising, but you do not yet have 100% of the information. Other buyers are also interested.",options:[["I wait until all information is collected",4],["I wait a little longer",3],["I consider it conditionally once the key facts are verified",2],["I actively consider it while accepting some uncertainty",1],["If it is an opportunity, I can move quickly",0]]},
    Q16:{text:"Your last two decisions turned out quite well. When you review the third property, what happens?",options:[["I become even more cautious",4],["I follow the same process as usual",3],["I feel somewhat more confident",2],["My review becomes faster",1],["I strongly feel that I will be right again",0]]},
    Q17:{text:"A building first presented at KRW 1.2 billion is now offered at KRW 1.0 billion. What is your immediate reaction?",options:[["The original price barely matters to me",4],["I re-check actual transaction prices",3],["I look at both the discount and market value",2],["The KRW 200 million discount feels quite attractive",1],["Because it was ‘originally 1.2 billion,’ 1.0 billion feels cheap",0]]},
    Q18:{text:"The condition of a building you bought has worsened. Selling now would lock in a loss.",options:[["If my criteria are broken, I sell even at a loss",4],["I recalculate selling versus holding",3],["I wait a little longer",2],["I want to wait until the price recovers",1],["I would find it very hard to choose a certain loss",0]]},
    Q19:{text:"Someone you trust strongly recommends a property, saying it looks excellent. Your own numbers are inconclusive.",options:[["If my numbers do not work, I lose interest",4],["I treat the recommendation as input and recalculate",3],["My interest increases a little",2],["I trust that person's judgment and look at it seriously",1],["I give the recommendation more weight than my own criteria",0]]},
    Q20:{text:"Everyone around you says the property is good, but it falls short on your own numbers.",options:[["I check the surrounding reaction again",4],["If my numbers do not work, I walk away",0]]},
    Q21:{text:"Two buildings have almost identical numbers. What gets your final vote?",options:[["On-site feel and experience",0],["More data and evidence",4]]},
    Q22:{text:"The property is excellent, but your own capital is not enough.",options:[["If it needs a lot of debt, I exclude it immediately",4],["I first look for ways to reduce the debt ratio significantly",3],["I decide based on the terms",2],["If I can carry it, I use leverage actively",1],["For a strong property, I could use as much financing as possible",0]]},
    Q23:{text:"A large share of the purchase price would need to be financed with debt.",options:[["I become much more conservative",0],["I become somewhat more conservative",1],["It depends on the terms",2],["If the property is strong, it does not change much",3],["Even with high leverage, the opportunity matters more",4]]},
    Q24:{text:"After the purchase, you suddenly need an additional KRW 50 million.",options:[["I have almost no way to raise it",4],["It would be very difficult",3],["It might be possible with time",2],["I have several possible ways",1],["I can respond immediately through a separate funding plan",0]]},
    Q25:{text:"This building requires about five hours each month of hands-on tenant, repair and management work.",options:[["I would exclude it immediately",4],["I would rather avoid it",3],["It could work depending on the situation",2],["I can handle that amount myself",1],["I am comfortable managing and improving it directly",0]]},
    Q26:{text:"You no longer have enough time for management. Which choice is closer to you?",options:[["I make time and manage it myself",4],["I pay to outsource the management",0]]},
    Q27:{text:"Right before signing, tax, financing and legal issues each come up. How do you find the professionals you need?",options:[["I would not know whom to ask",4],["I would start by asking people around me for referrals",3],["I can search for someone when needed",2],["I can compare relevant professionals",1],["I can quickly find and verify the right specialist for each issue",0]]},
    Q28:{text:"The property feels good on site, but the supporting data is still limited.",options:[["I never decide without enough data",4],["I wait until more data is available",3],["I decide once the key facts are verified",2],["I place considerable weight on experience and on-site feel",1],["I can decide based on my own experience and intuition",0]]},
    Q29:{text:"The building is in a famous area, but its rental cash flow is weaker than expected.",options:[["I lower its priority sharply even in a famous area",0],["Weak rent lowers my interest significantly",1],["I evaluate it with the other conditions",2],["I can accept some weakness if the location is strong",3],["A famous area is enough for me to consider it seriously despite weak rent",4]]},
    Q30:{text:"Current rent is ordinary, but there is fairly strong evidence that the property's future value could rise.",options:[["Weak current income makes me mostly uninterested",4],["I am only slightly interested",3],["I consider it conditionally",2],["Strong future-value evidence increases my interest",1],["I actively look for this type of property",0]]},
    Q31:{text:"The building is in a neighborhood you have known well for more than ten years. The numbers are slightly disappointing.",options:[["Familiarity and the numbers are separate issues",4],["Weak numbers make me more conservative",3],["I trust it a little more because I know the area",2],["Knowing the area makes me feel quite reassured",1],["In an area I know well, I can accept slightly weaker numbers",0]]},
    Q32:{text:"You are told, ‘It was originally KRW 1.5 billion, but it is a quick sale at KRW 1.2 billion.’ What do you do?",options:[["I ignore the KRW 1.5 billion anchor",4],["I check nearby transaction prices first",3],["I compare both the discount and market value",2],["The KRW 300 million discount increases my interest",1],["Because it was ‘originally 1.5 billion,’ 1.2 billion feels cheap",0]]},
    Q33:{text:"If you had to choose only one, which would you prefer?",options:[["Lower return with more stable occupancy",4],["I lean a little toward stability",3],["About fifty-fifty",2],["Higher return even with vacancy risk",1],["Higher expected return even with greater volatility",0]]},
    Q34:{text:"A building you already bought has deteriorated, and selling would mean a loss.",options:[["If my criteria are broken, I exit even at a loss",4],["I examine exiting first",3],["I compare holding and selling again",2],["I wait a little longer for recovery",1],["Selling at a loss would be very difficult for me",0]]},
    Q35:{text:"Three experts and several investors all say the same building is attractive.",options:[["My interest barely changes",4],["I take note, but keep my criteria unchanged",3],["I look at it a little more closely",2],["My interest increases quite a bit",1],["When many people agree, my own judgment changes significantly",0]]},
    Q36:{text:"When reviewing a new property while already carrying debt, do you check what percentage of your income goes to current principal and interest payments?",options:[["Almost never",4],["Occasionally",3],["When necessary",2],["Most of the time",1],["Always, using actual numbers",0]]},
    Q37:{text:"Someone sends you materials saying, ‘This building looks good.’ What do you do?",options:[["I judge mainly from those materials",4],["I do only a rough additional check",3],["I look at one more source",2],["I compare several sources",1],["I re-check original data, transaction records and other opinions",0]]},
    Q38:{text:"A loan consultation gives you two numbers: ‘maximum available credit’ and ‘monthly repayment.’ Which do you look at first?",options:[["How much I can borrow",4],["How much I can afford to repay each month",0]]},
    Q39:{text:"You need to be able to handle three months with no rent immediately after purchase.",options:[["I would barely be able to manage",4],["About one month is all I could handle",3],["With adjustments, two to three months is possible",2],["I can manage several months within my plan",1],["I already include a vacancy period in my funding plan",0]]},
    Q40:{text:"News breaks that interest rates may rise by 1 percentage point. What do you do?",options:[["I am not sure how much my loan cost would rise",4],["I just worry about it roughly",3],["I calculate it if necessary",2],["I immediately calculate the change in repayments",1],["I have already modeled a rate-rise scenario",0]]},
    Q41:{text:"You really like a building, but its price exceeds the ceiling you set.",options:[["I buy if it is only a little over",4],["If the conditions are good, I raise my ceiling",3],["I recalculate",2],["I walk away if it will not come within my ceiling",1],["No matter how much I like it, I walk away if it exceeds my rule",0]]},
    Q42:{text:"Conditions worsen after purchase. Do you have a rule for ‘hold at this point, exit at that point’?",options:[["No rule at all",4],["Only a vague idea",3],["I have a rough rule",2],["I have set several specific conditions",1],["I have clear numerical and conditional rules",0]]},
  }
};

const JA = {
  chapters: {
    '왜 사려는가':'なぜ買いたいのか', '보유와 버티는 힘':'保有力と耐久力', '내 자금의 방어력':'資金の防御力',
    '기회를 만났을 때':'機会に出会ったとき', '판단이 흔들리는 순간':'判断が揺れる瞬間', '마지막 결정을 내릴 때':'最後の判断',
    '대출과 자원':'借入と資金', '검증과 안전장치':'検証と安全策', '계약 직전의 나':'契約直前の判断',
    '공실과 가격 상한선':'空室と価格上限', '시간·관리·미래가치':'時間・管理・将来価値', '시간과 관리':'時間と管理',
    '판단 방식':'判断スタイル', '자산을 고를 때':'物件を選ぶとき', '위험을 받아들이는 방식':'リスクの受け止め方',
    '매입 목적':'購入目的', '현재 위치':'現在の資金状況', '투자 성향':'投資傾向', '활용 가능한 자원':'利用できる資源', '매입 기준 성향':'購入判断基準', '현재 준비도':'現在の準備度'
  },
  scaleGroups: {
    S01:{title:'保有力と耐久力',subtitle:'時間とキャッシュフローの変化に対して、どちらに近いか直感的に答えてください。'},
    S02:{title:'判断が揺れる瞬間',subtitle:'直近の成功、値下がり、損失が見えたときの反応を確認します。'},
    S03:{title:'検証と安全策',subtitle:'契約前の確認習慣と撤退基準がどの程度具体的かを見ます。'},
    S04:{title:'空室と価格上限',subtitle:'家賃収入が止まったときや、気に入った物件が価格上限を超えたときの判断を見ます。'},
    S05:{title:'時間・管理・将来価値',subtitle:'長期保有、直接管理、将来価値を待つことへの姿勢を確認します。'},
  },
  scaleCopy: {
    Q02:{text:'結果が出るまで時間がかかっても、長期保有できる。',left:'長く待てる',right:'早い結果が必要'},
    Q05:{text:'現在の家賃収入より、数年後の価値を重視することがある。',left:'現在の家賃を優先',right:'将来価値を優先'},
    Q09:{text:'良い物件でも、新たな借入負担が大きければ判断が変わる。',left:'負担は小さい',right:'負担が大きい'},
    Q12:{text:'収入が減っても、返済・生活費・保有費を同時に支えられる余力がある。',left:'耐えるのが難しい',right:'十分な余力'},
    Q16:{text:'最近の判断がうまくいっていても、次の物件でも同じ検証手順を守る。',left:'より慎重になる',right:'自信が強まる'},
    Q17:{text:'「元の価格から大きく値下げされた」という情報は自分の判断に影響する。',left:'ほぼ影響しない',right:'安く感じる'},
    Q18:{text:'損失が確定しても、投資条件が崩れたら整理できる。',left:'基準どおり整理',right:'回復まで待つ'},
    Q27:{text:'税務・融資・法務の問題が出たとき、必要な専門家をすぐ探せる。',left:'誰に聞くか迷う',right:'すぐ確認できる'},
    Q36:{text:'新しい物件を見るとき、現在の元利返済負担を数字で確認する。',left:'ほとんど見ない',right:'必ず確認する'},
    Q37:{text:'勧められた資料を受け取っても、原資料や別の意見まで再確認する。',left:'勧められた資料中心',right:'徹底して再検証'},
    Q42:{text:'状況が悪化したとき、保有と売却を分ける基準が具体的にある。',left:'基準なし',right:'数値で明確'},
    Q39:{text:'購入直後に数か月家賃が入らなくても、計画の範囲内で耐えられる。',left:'耐えるのが難しい',right:'空室期間も計画済み'},
    Q41:{text:'気に入った物件でも、決めた価格上限を超えたら見送れる。',left:'上限を上げる',right:'基準どおり見送る'},
    Q10:{text:'予想外の修繕費と税金が同時に発生しても対応できる余力がある。',left:'対応が難しい',right:'余裕を持って対応'},
    Q03:{text:'良い資産なら、結果が遅くても十分に待てる。',left:'早い結果を好む',right:'長期保有できる'},
    Q25:{text:'入居者対応・修繕・管理に自分の時間を使うことができる。',left:'直接管理は難しい',right:'直接管理できる'},
    Q30:{text:'現在の家賃が平凡でも、将来価値の根拠が強ければ関心が高まる。',left:'現在収益を優先',right:'将来価値を優先'},
    Q35:{text:'複数の専門家や投資家が同じ評価をすると、自分の関心も変わることがある。',left:'ほぼ影響しない',right:'影響が大きい'},
  },
  questions: {
    Q01:{text:'土曜の午後、気に入った建物を見つけました。「なぜこれを買いたいのですか？」と聞かれたら？',options:[['一文ですぐ説明できる',0],['大まかな理由は説明できる',1],['いくつかの理由が混ざっている',2],['良さそうなので気になった程度',3],['まだ自分でもよく分からない',4]]},
    Q02:{text:'買いたい物件が見つかりましたが、「価値が十分に表れるまで最低5年は必要」という分析です。',options:[['5年以上でも十分待てる',0],['4〜5年なら大丈夫',1],['3年程度なら大丈夫',2],['1〜2年以内に結果を見たい',3],['それほど待つなら関心がかなり下がる',4]]},
    Q03:{text:'良い資産ですが、結果が見えるまでかなり時間がかかります。最も無理のない時間軸は？',options:[['1年以内に変化が見えてほしい',0],['2年程度なら大丈夫',1],['3〜4年は待てる',2],['5年以上でも大丈夫',3],['条件が良ければ時間がかかっても待てる',4]]},
    Q04:{text:'同じ価格の建物が2つあります。より惹かれるのは？',options:[['家賃収入が安定している建物',0],['家賃がやや安定している方',1],['どちらも同じくらい',2],['値上がり余地がより大きい方',3],['家賃が弱くても大きく上がる可能性がある建物',4]]},
    Q05:{text:'現在の家賃は期待より弱い一方、周辺開発によって数年後の価値が変わる可能性があります。',options:[['今の家賃が弱ければほとんど見ない',4],['もう少しだけ確認する',3],['条件が合えば検討する',2],['将来価値の根拠があればかなり関心が高まる',1],['むしろこういう物件に惹かれる',0]]},
    Q06:{text:'最初は家賃収入目的で探していましたが、見ているうちに値上がり益の方に魅力を感じ始めました。どうしますか？',options:[['目的が変わったので基準表から作り直す',0],['重要な基準だけいくつか変える',1],['両方を見ながらゆっくり決める',2],['良さそうな物件に合わせて基準を変える',3],['基準はそのままで物件探しを優先する',4]]},
    Q07:{text:'どちらか一つを先にするなら？',options:[['良い物件を先に探す',0],['自分の目的と基準を先に決める',4]]},
    Q08:{text:'とても気に入った物件ですが、購入には手元資金のほぼ全額が必要です。',options:[['本当の機会ならほぼ全額入れてもよい',4],['少しだけ残せば大丈夫',3],['生活費・緊急資金は残す',2],['かなりの余裕資金を残したい',1],['十分な余裕資金がなければ見送る',0]]},
    Q09:{text:'良い物件ですが、新しい借入が必要です。現在返済中の借入を考えると？',options:[['ほとんど負担に感じない',4],['少し気になる',3],['条件をもう一度計算する必要がある',2],['かなり負担に感じる',1],['新たな借入自体が非常に負担だ',0]]},
    Q10:{text:'購入1か月後、予想外の修繕費と税金が同時に発生しました。',options:[['対応はかなり難しい',4],['他の資産を整理する必要があるかもしれない',3],['調整すれば対応できる',2],['別資金でかなり対応できる',1],['事前に確保した余裕資金で対応できる',0]]},
    Q11:{text:'物件を見に行く前に、「実際に投じられる最大金額」をどの程度決めていますか？',options:[['まったく決めていない',4],['だいたいの感覚だけある',3],['おおよその範囲は分かっている',2],['上限をかなり具体的に決めている',1],['数値で明確に決めている',0]]},
    Q12:{text:'収入が数か月減っても、返済・生活費・保有費を同時に支払う必要があります。',options:[['ほとんど耐えられない',4],['短期間だけなら可能',3],['調整すれば数か月は耐えられる',2],['かなりの期間耐えられる',1],['十分な余力がある',0]]},
    Q13:{text:'建物に資金が固定されている間に、別の投資機会が来ました。',options:[['他の資産を急いで売る必要があるかもしれない',4],['現金を用意するのはかなり難しい',3],['一部調整すれば対応できる',2],['他の資産を動かさず対応できる',1],['別の流動資金が十分にある',0]]},
    Q14:{text:'新しい融資相談に行きました。最初に知りたいのは？',options:[['あといくら借りられるか',4],['現在、毎月いくら元利返済しているか',0]]},
    Q15:{text:'良さそうな物件ですが、情報が100%そろっていません。他の人も関心を示しています。',options:[['情報がすべてそろうまで動かない',4],['もう少し待つ',3],['重要事項が確認できれば条件付きで検討する',2],['不確実性を受け入れて積極的に検討する',1],['機会なら素早く動ける',0]]},
    Q16:{text:'直近2回の判断がかなりうまくいきました。3件目を見るときは？',options:[['むしろさらに慎重になる',4],['いつもと同じ手順を守る',3],['少し自信がつく',2],['検討スピードが上がる',1],['今回も自分が正しいという感覚が強くなる',0]]},
    Q17:{text:'最初12億ウォンと聞いた建物が10億ウォンまで下がりました。その瞬間どう感じますか？',options:[['12億という数字はほとんど気にしない',4],['実取引価格を改めて確認する',3],['値下げ幅と相場を一緒に見る',2],['2億ウォン下がった点がかなり魅力的に感じる',1],['「元は12億」と聞くと10億が安く感じる',0]]},
    Q18:{text:'購入した建物の条件が予想より悪化し、今売ると損失が確定します。',options:[['基準が崩れたなら損でも整理する',4],['売却と保有を改めて計算する',3],['もう少し様子を見る',2],['価格が回復するまで待ちたい',1],['損失を確定する選択はほとんどできないと思う',0]]},
    Q19:{text:'普段信頼している人が「これは本当に良い」と強く勧めます。しかし自分の計算は微妙です。',options:[['自分の計算が合わなければ関心を下げる',4],['推薦は参考にして再計算する',3],['少し関心が高まる',2],['その人の判断を信じて積極的に見る',1],['自分の基準より推薦を重く見る',0]]},
    Q20:{text:'周囲は全員「良い」と言っていますが、自分の計算では基準未達です。',options:[['周囲の反応をもう一度確認する',4],['自分の計算が合わなければ見送る',0]]},
    Q21:{text:'数字がほぼ同じ2つの建物。最後の一票はどちらに入れますか？',options:[['現場の感覚と経験',0],['追加の数字と根拠',4]]},
    Q22:{text:'本当に良い物件ですが、自己資金だけでは足りません。',options:[['借入が多く必要ならすぐ除外する',4],['まず借入比率を大きく下げる方法を探す',3],['条件を見て決める',2],['負担できるなら積極的に活用する',1],['良い物件なら借入を最大限活用できる',0]]},
    Q23:{text:'購入価格のかなりの部分を借入で賄う必要があります。',options:[['それならかなり保守的に見る',0],['少し保守的に見る',1],['条件による',2],['物件が良ければ大きくは変わらない',3],['借入比率が高くても機会の方が重要だ',4]]},
    Q24:{text:'購入後、追加で5,000万ウォンが必要になりました。',options:[['用意する方法がほとんどない',4],['かなり難しい',3],['時間をかければ可能かもしれない',2],['いくつか方法がある',1],['別の資金計画ですぐ対応できる',0]]},
    Q25:{text:'毎月、入居者対応・修繕・管理に自分で約5時間使う必要がある建物です。',options:[['それならすぐ除外する',4],['できれば避けたい',3],['状況によっては可能',2],['その程度なら自分でできる',1],['自分で管理・改善するのはむしろ問題ない',0]]},
    Q26:{text:'管理に使える時間が足りなくなりました。より近い選択は？',options:[['時間を作って自分で管理する',4],['費用を払って外部に任せる',0]]},
    Q27:{text:'契約直前に、税務・融資・法務の問題が一つずつ出てきました。必要な専門家をどう探しますか？',options:[['誰に聞けばいいか分からない',4],['まず周囲に紹介を頼む',3],['必要なら検索して探せる',2],['関連する専門家を比較できる',1],['分野ごとに必要な専門家をすぐ探して確認できる',0]]},
    Q28:{text:'現場では良い感触ですが、資料がまだ不足しています。',options:[['資料がなければ絶対に決めない',4],['資料が増えるまで待つ',3],['重要事項が確認できれば判断する',2],['経験と現場感をかなり重視する',1],['自分の経験と勘でも決められる',0]]},
    Q29:{text:'有名エリアの建物ですが、家賃収入は期待より弱いです。',options:[['有名エリアでも優先順位を大きく下げる',0],['家賃が弱ければかなり評価を下げる',1],['他の条件と合わせて見る',2],['立地が良ければある程度は許容する',3],['有名エリアなら家賃が弱くても十分検討する',4]]},
    Q30:{text:'現在の家賃は平凡ですが、将来価値が高まる根拠がかなり見えます。',options:[['現在収益が弱ければほとんど見ない',4],['少しだけ関心がある',3],['条件付きで検討する',2],['将来価値の根拠が良ければ関心が高まる',1],['このタイプを積極的に探す方だ',0]]},
    Q31:{text:'10年以上よく知っている地域の建物です。数字は少し物足りません。',options:[['慣れと数字は別問題だと考える',4],['数字が弱ければ保守的に見る',3],['少し信頼感は増す',2],['よく知る地域なのでかなり安心する',1],['よく知る地域なら数字が少し弱くても信頼できる',0]]},
    Q32:{text:'「元は15億ウォンですが、急売で12億ウォンです」と言われました。どう受け止めますか？',options:[['15億という数字は頭から外す',4],['周辺の実取引価格を先に見る',3],['値下げ幅と相場を一緒に見る',2],['3億ウォン値引きという言葉で関心が高まる',1],['「元は15億」と聞くと12億が安く感じる',0]]},
    Q33:{text:'どちらか一つだけ選ぶなら？',options:[['利回りが低くても空室が安定している方',4],['少し安定側を選ぶ',3],['半々',2],['空室リスクがあっても収益が高い方',1],['変動が大きくても期待収益が高い方',0]]},
    Q34:{text:'すでに買った建物の条件が悪化し、売ると損失になります。',options:[['基準が崩れたなら損でも整理する',4],['まず整理する方向を検討する',3],['保有と売却をもう一度比べる',2],['価格回復をもう少し待つ',1],['損を出して売るのは非常に難しい',0]]},
    Q35:{text:'3人の専門家と複数の投資家が同じ建物を高く評価しています。',options:[['自分の関心はほとんど変わらない',4],['参考にはするが基準は変えない',3],['少し詳しく見る',2],['関心がかなり高まる',1],['多くの人が同じ評価なら自分の判断も大きく変わる',0]]},
    Q36:{text:'すでに借入がある状態で新しい物件を見るとき、現在の元利返済額が所得の何％か確認しますか？',options:[['ほとんど確認しない',4],['たまに確認する',3],['必要なとき確認する',2],['ほとんどの場合確認する',1],['必ず数字で確認する',0]]},
    Q37:{text:'誰かが「この建物は良い」と資料まで送ってきました。',options:[['その資料を基準に判断する',4],['大まかに追加確認する',3],['別の資料を一つは見る',2],['複数の資料と比較する',1],['原資料・実取引・別の意見まで再確認する',0]]},
    Q38:{text:'融資相談で「借りられる上限」と「毎月の返済額」の2つが出ました。先に見るのは？',options:[['いくらまで借りられるか',4],['毎月いくらまで返せるか',0]]},
    Q39:{text:'購入直後、3か月家賃が入らなくても耐えられる必要があります。',options:[['ほとんど耐えられない',4],['1か月程度だけなら可能',3],['調整すれば2〜3か月可能',2],['数か月は計画内で耐えられる',1],['空室期間をすでに資金計画に入れている',0]]},
    Q40:{text:'金利が1％ポイント上がるというニュースが出ました。あなたは？',options:[['自分の返済がどれだけ増えるかよく分からない',4],['何となく心配するだけ',3],['必要なら計算する',2],['返済額の変化をすぐ計算する',1],['すでに金利上昇シナリオを別に計算している',0]]},
    Q41:{text:'とても気に入った建物ですが、自分で決めた価格上限を超えています。',options:[['少し超える程度なら買う',4],['条件が良ければ上限を上げる',3],['もう一度計算する',2],['上限内に入らなければ見送る',1],['どれだけ気に入っても基準を超えたら見送る',0]]},
    Q42:{text:'購入後に状況が悪化しました。「ここまでは保有、ここを超えたら整理」という基準がありますか？',options:[['まったくない',4],['漠然とした考えだけある',3],['大まかな基準はある',2],['いくつか条件を決めている',1],['数値と条件で具体的に決めている',0]]},
  }
};

export const QUESTION_LOCALE = { en: EN, ja: JA };

export function getQuestionDisplay(locale, id, koDisplay) {
  if (locale === 'ko') return koDisplay;
  return QUESTION_LOCALE[locale]?.questions?.[id] || koDisplay;
}
export function getScaleCopy(locale, id, koCopy, display) {
  if (locale === 'ko') return koCopy || {text:display?.text,left:display?.options?.[0]?.[0],right:display?.options?.at(-1)?.[0]};
  return QUESTION_LOCALE[locale]?.scaleCopy?.[id] || koCopy || {text:display?.text,left:display?.options?.[0]?.[0],right:display?.options?.at(-1)?.[0]};
}
export function localizeChapter(locale, chapter) {
  return locale === 'ko' ? chapter : (QUESTION_LOCALE[locale]?.chapters?.[chapter] || chapter);
}
export function getScaleGroupCopy(locale, scaleId, koGroup) {
  if (locale === 'ko') return koGroup;
  const loc = QUESTION_LOCALE[locale]?.scaleGroups?.[scaleId];
  return loc ? {...koGroup, ...loc} : koGroup;
}
