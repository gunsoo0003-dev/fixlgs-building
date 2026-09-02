const UI={
  ko:{
    kicker:'FINAL RESULT · 3단계 종합 프로필', headline:'기본 투자성향 + 자산 적합성 + 투자 행동패턴을 하나로 합산한 최종 프로필입니다.', ready:'현재 준비상태', asset:'추천 자산', behavior:'행동패턴', synthTitle:'앞의 세 결과를 합산하면 이렇게 됩니다.', basic:'기본 투자성향', assetFit:'자산 적합성', behaviorPattern:'투자 행동패턴', finalProfile:'종합 투자 프로필', changed:'추가 응답 반영 후 핵심성향 변화', maintained:'핵심성향 유지', combined:'세 결과의 일치·충돌을 종합 해석', assetWhy:a=>`${a}이 왜 연결됐나`, behaviorWhy:b=>`${b}가 실제 판단에 미치는 영향`, combinedCaution:'세 결과가 겹칠 때 조심할 지점', talent:'당신이 건물주로서 잘할 가능성이 높은 것', profileTitle:'답변이 보여준 성향', profileDesc:'높고 낮음은 우열이 아니라 어떤 조건에 더 민감한지를 뜻합니다.', surprise:'답변에서 발견된 의외의 조합', nextCheck:'다음 확인', assetTired:'의외로 피곤해질 수 있는 자산', playStyle:'유형의 기본 판단 방식', bestWeapon:'자기 기준을 만드는 힘', riskPrefix:'당신에게 가장 위험한 순간:', nextTitle:['당신에게 지금 필요한','다음 3가지'], home:'FIX BUILDING 메인', oneLine:'한 줄로 정리하면', note:'이 종합결과는 42개 응답을 성향·준비상태·자산 특성과 조합한 자가점검입니다. 투자판단이나 특정 물건의 매수를 대신하지 않습니다.', restart:'처음부터 다시하기', assetFallback:'현재 성향과 상대적으로 잘 맞는 자산', assetFallbackText:'전체 응답을 종합했을 때 상대적으로 높은 매칭을 보였습니다.', assetCautionFallback:'현재 성향과 부딪힐 수 있는 지점이 있습니다.', assetCautionFallbackText:'실제 관리·현금흐름·유동성 조건을 별도로 확인하는 편이 좋습니다.', cashflow:'현금흐름', management:'관리부담', liquidity:'유동성', altSuffix:'최종 투자 프로필 그래픽', second:'차순위', behaviorFallback:'행동패턴 분석형', behaviorFallbackLine:'실제 투자 판단 과정에서 나타나는 행동패턴을 함께 반영했습니다.', cautionFallback:'강점이 과해질 때의 위험요인을 별도로 확인할 필요가 있습니다.', integratedHeadline:'기본 투자성향 + 자산 적합성 + 투자 행동패턴을 하나로 합산한 최종 프로필입니다.'
  },
  en:{
    kicker:'FINAL RESULT · COMPOSITE INVESTOR PROFILE', headline:'A final profile combining your core investment tendency, asset fit, and decision behavior.', ready:'Readiness', asset:'Top asset match', behavior:'Decision pattern', synthTitle:'Here is what the three stages look like together.', basic:'Core investment tendency', assetFit:'Asset fit', behaviorPattern:'Investment behavior', finalProfile:'Composite investor profile', changed:'Core profile shifted after additional responses', maintained:'Core profile remained consistent', combined:'Integrated reading of alignment and tension across all three stages', assetWhy:a=>`Why ${a} matched`, behaviorWhy:b=>`How ${b} affects real decisions`, combinedCaution:'What to watch when the three results interact', talent:'What you are likely to do well as a property investor', profileTitle:'What your answers reveal', profileDesc:'High and low are not grades. They show which conditions you are more sensitive to.', surprise:'Unexpected combinations in your answers', nextCheck:'Next check', assetTired:'An asset that may feel more demanding than expected', playStyle:'Your core decision style', bestWeapon:'Your strongest decision advantage', riskPrefix:'A high-risk moment for you:', nextTitle:['Your next','three priorities'], home:'Back to FIX BUILDING', oneLine:'In one sentence', note:'This composite result is a self-check based on 42 responses across investment tendency, readiness, asset characteristics, and decision behavior. It does not replace investment advice or a review of a specific property.', restart:'Restart self-check', assetFallback:'Relatively compatible with your current profile', assetFallbackText:'This asset ranked relatively high after combining your responses.', assetCautionFallback:'This asset may conflict with parts of your current profile.', assetCautionFallbackText:'Check management burden, cash flow, and liquidity separately before acting.', cashflow:'Cash flow', management:'Management', liquidity:'Liquidity', altSuffix:'final investor profile graphic', second:'Second match', behaviorFallback:'Structured decision pattern', behaviorFallbackLine:'Your recurring behavior during real investment decisions is reflected here.', cautionFallback:'It is worth checking separately where a strength can become excessive.', integratedHeadline:'A final profile combining your core investment tendency, asset fit, and decision behavior.'
  },
  ja:{
    kicker:'FINAL RESULT · 総合投資プロフィール', headline:'基本投資傾向・資産適合性・投資行動パターンを一つにまとめた最終プロフィールです。', ready:'現在の準備状態', asset:'推奨資産', behavior:'行動パターン', synthTitle:'3つの結果を合わせると、こう見えます。', basic:'基本投資傾向', assetFit:'資産適合性', behaviorPattern:'投資行動パターン', finalProfile:'総合投資プロフィール', changed:'追加回答を反映して核心傾向が変化', maintained:'核心傾向を維持', combined:'3つの結果の一致・衝突を総合解釈', assetWhy:a=>`${a}がなぜ結びついたのか`, behaviorWhy:b=>`${b}が実際の判断に与える影響`, combinedCaution:'3つの結果が重なる時に注意する点', talent:'建物投資で活かしやすいあなたの強み', profileTitle:'回答から見える傾向', profileDesc:'高低は優劣ではなく、どの条件により敏感かを示します。', surprise:'回答から見つかった意外な組み合わせ', nextCheck:'次に確認', assetTired:'意外と負担を感じやすい可能性がある資産', playStyle:'基本的な判断スタイル', bestWeapon:'判断で活かせる最大の強み', riskPrefix:'あなたにとって注意が必要な瞬間：', nextTitle:['今のあなたに必要な','次の3項目'], home:'FIX BUILDING メインへ', oneLine:'一言でまとめると', note:'この総合結果は42問の回答を投資傾向・準備状態・資産特性・意思決定行動と組み合わせた自己点検です。投資判断や特定物件の購入を代替するものではありません。', restart:'最初からやり直す', assetFallback:'現在の傾向と比較的相性の良い資産', assetFallbackText:'回答全体を組み合わせた結果、相対的に高い適合度を示しました。', assetCautionFallback:'現在の傾向とぶつかる可能性があるポイントです。', assetCautionFallbackText:'実際の管理負担・キャッシュフロー・流動性を別途確認してください。', cashflow:'キャッシュフロー', management:'管理負担', liquidity:'流動性', altSuffix:'最終投資プロフィール画像', second:'次点', behaviorFallback:'行動パターン分析型', behaviorFallbackLine:'実際の投資判断で表れやすい行動パターンも反映しています。', cautionFallback:'強みが行き過ぎた時のリスクを別途確認する必要があります。', integratedHeadline:'基本投資傾向・資産適合性・投資行動パターンを一つにまとめた最終プロフィールです。'
  }
};

const BEHAVIOR_SHORT={
  en:{C01:'Independent verification',C02:'Downside simulation',C03:'Cash-flow first',C04:'Value separation',C05:'Anchor-aware',C06:'Confidence acceleration',C07:'Loss endurance',C08:'Information gathering',C09:'Management efficiency',C10:'Future-value tracking',C11:'Comparison-led',C12:'Hands-on problem solving',C13:'Expert-assisted',C14:'Field intuition',C15:'Opportunity-first',C16:'Exit-rule execution'},
  ja:{C01:'独立検証型',C02:'防御シミュレーション型',C03:'キャッシュフロー優先型',C04:'価値分離検証型',C05:'基準価格警戒型',C06:'確信加速型',C07:'損失耐久型',C08:'情報収集型',C09:'管理効率型',C10:'将来価値追跡型',C11:'比較表判断型',C12:'直接解決型',C13:'専門家活用型',C14:'現場直感型',C15:'機会先取り型',C16:'撤退基準実行型'}
};

const PRAISE={
  en:{
    P01:['You verify instead of simply trusting','You tend to verify recommendations and market mood rather than accepting them at face value. That can be a meaningful layer of protection in real investing.','Also define when verification is complete.'],
    P02:['Your own criteria are not easily shaken','Even when others sound certain, you tend to return to your own criteria. That reduces the chance of being swept up by crowd sentiment.','Give contrary evidence equal weight.'],
    P03:['Knowing when to stop is a skill','When conditions break, you are more willing to think about a stopping rule than simply holding on.','Update the rule as market conditions change.'],
    P04:['You think about cash after the purchase','You tend to look not only at what you can buy, but also at what cash remains after the purchase.','Balance resilience with opportunity cost.'],
    P05:['You treat debt as a calculation','Rather than fearing or maximizing debt automatically, you tend to examine repayment structure and terms.','Stress-test rates and vacancy separately.'],
    P06:['You include vacancy in the math','You are inclined to include periods without rent rather than assume income continues uninterrupted.','Do not let vacancy anxiety eliminate good candidates too early.'],
    P07:['Your reason for buying is relatively clear','You tend to know why you are buying before searching for the “best” property.','If the goal changes, reset the criteria too.'],
    P08:['You treat operations as part of ownership','You tend to include post-purchase management in the investment decision itself.','Calculate the time and energy you can actually commit.'],
    P09:['Calculation tends to come before fear','You do not avoid uncertainty automatically and also consider how much risk you can actually absorb.','Recheck overconfidence after a run of good outcomes.'],
    P10:['You look beneath the headline yield','You focus on money actually coming in and going out, not just the stated yield.','Keep long-term asset value in view as well.'],
    P11:['You consider how long you may need to wait','You can look at future value while accepting that it may take time to emerge.','Confirm that cash flow can carry a delayed outcome.'],
    P12:['You use broad information without accepting it blindly','You use market information and other people’s experience while still verifying it yourself.','As information grows, rank what actually matters to the decision.']
  },
  ja:{
    P01:['人の話より確認する力','推薦や雰囲気をそのまま受け入れず、もう一度確認する習慣があります。実際の投資では大きな防御力になります。','確認を終える基準も決めておきましょう。'],
    P02:['自分の基準が揺れにくい','他人が確信していても、自分の基準に戻って確認する傾向があります。','反対資料も同じ重みで確認するとさらに強くなります。'],
    P03:['止める判断も実力です','条件が崩れた時、ただ耐えるより中止基準を考える傾向があります。','市場環境に合わせて基準を定期的に更新してください。'],
    P04:['購入後まで考える資金感覚','買える価格だけでなく、購入後に残る現金も一緒に見る傾向があります。','安全余力と機会損失のバランスも必要です。'],
    P05:['融資を数字で見るタイプ','借入を漠然と怖がったり最大化したりせず、返済構造と条件を確認する傾向があります。','金利と空室の前提を別途ストレステストしてください。'],
    P06:['空室期間まで計算する現実感覚','家賃が常に入る前提ではなく、空室期間まで考える傾向があります。','空室不安で良い候補を早く除外しすぎないかも確認してください。'],
    P07:['なぜ買うのかが比較的明確','良い物件を探す前に、自分がなぜ買うのかを比較的明確にしています。','目的が変われば基準も更新してください。'],
    P08:['運営を他人事にしない','保有後の管理まで自分の意思決定の一部として見る傾向があります。','実際に投入できる時間と体力は別途計算してください。'],
    P09:['恐れより計算が先に立つ','不確実性を無条件に避けず、実際に耐えられる範囲も一緒に見る傾向があります。','良い経験が続くほど過信を点検してください。'],
    P10:['表面利回りより中身を見る','表面利回りより実際に入って出るお金を見る傾向があります。','長期的な資産価値も一緒に確認してください。'],
    P11:['待つ時間まで一緒に見る','将来価値を見ながら、実現まで時間がかかる可能性も受け入れる傾向があります。','上昇が遅れても耐えられるCFを確認してください。'],
    P12:['情報は広く使うが、そのまま信じない','他人の経験や市場情報を積極的に使いながら、自分でも再確認する傾向があります。','情報が増えるほど判断基準の優先順位を決めてください。']
  }
};

const CONTRA_POS={
  en:{C01:'Your drive to act is still a strength.',C02:'You do have a clear eye for change.',C03:'Your cash-flow awareness is a strength.',C04:'Your personal criteria are clear.',C05:'You use an information network well.',C07:'Your drive to find opportunity is clear.',C08:'You are more likely to separate emotion from rules.',C09:'It also means you have a broad range of options.',C10:'You combine speed with verification.'},
  ja:{C01:'行動力そのものは強みです。',C02:'変化を見る視点は明確です。',C03:'キャッシュフロー感覚は強みです。',C04:'自分の基準が明確です。',C05:'情報ネットワークをうまく活用する組み合わせです。',C07:'機会を探す推進力は明確です。',C08:'感情とルールを分けやすい組み合わせです。',C09:'選択肢が広いという意味でもあります。',C10:'スピードと検証を両方使える強みがあります。'}
};
const RISK_STRENGTH={
  en:{R01:'This is the downside of being a strong verifier.',R02:'You are proactive about finding financing solutions.',R03:'You tend to decide quickly and with confidence.',R04:'You have patience and the ability to hold.',R05:'You can access information quickly.',R06:'You tend to turn concern into preparation.',R07:'You have strong motivation to improve operations directly.',R08:'You are attentive to future change.'},
  ja:{R01:'検証力が強い人に起こりやすい逆効果です。',R02:'資金調達方法を探す推進力があります。',R03:'判断速度と自信があるタイプです。',R04:'耐える力と忍耐があります。',R05:'情報を早く得る力があります。',R06:'不安を準備に変える傾向があります。',R07:'現場改善への意欲が強いです。',R08:'変化を捉えようとする視点があります。'}
};

export function getFinalUi(locale='ko'){ return UI[locale]||UI.ko; }
export function getFinalBehaviorShort(locale='ko',id,fallback){ return locale==='ko'?fallback:((BEHAVIOR_SHORT[locale]||{})[id]||fallback); }
export function localizeFinalPraise(locale,item){ if(locale==='ko'||!item)return item; const v=(PRAISE[locale]||{})[item.id]; return v?{...item,title:v[0],text:v[1],balance:v[2]}:item; }
export function localizeFinalContradiction(locale,item,baseLocalize,actionLocalize){ if(locale==='ko'||!item)return item; const x=baseLocalize(locale,item); return {...x,positive:(CONTRA_POS[locale]||{})[item.id]||x.positive,check:actionLocalize(locale,x.check)}; }
export function localizeFinalRisk(locale,item,baseLocalize,actionLocalize){ if(locale==='ko'||!item)return item; const x=baseLocalize(locale,item); return {...x,strength:(RISK_STRENGTH[locale]||{})[item.id]||x.strength,checks:(x.checks||[]).map(v=>actionLocalize(locale,v))}; }
