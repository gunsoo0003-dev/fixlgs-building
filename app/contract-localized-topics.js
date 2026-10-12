// Bind related copy by topic. Never join independent lists by a rolling index.
const CARD_FOR_CHECK = {
  parties: [0, 0, 1, 0, 2], property: [0, 0, 0, 1, 2],
  payment: [0, 1, 1, 2, 0], terms: [0, 1, 1, 2, 0],
  recheck: [0, 1, 1, 1, 2], closing: [0, 1, 1, 2, 2],
};
const QUESTION_FOR_CHECK = {
  parties: [0, 1, 2, 3, 4], property: [0, 1, 2, 3, 4],
  payment: [0, 1, 1, 3, 2], terms: [0, 1, 3, 4, 0],
  recheck: [0, 1, 2, 3, 4], closing: [0, 1, 2, 3, 4],
};
export function contractTopics(slug, advanced) {
  const {checks, questions} = advanced.complete;
  return checks.map(([title, body, points], i) => ({
    title, body, points,
    detail: ((slug === 'closing' || slug === 'terms') && i === 4)
      ? body : advanced.deep.cards[CARD_FOR_CHECK[slug][i]].body,
    question: questions[QUESTION_FOR_CHECK[slug][i]],
  }));
}

// These nine steps follow the approved Korean first-contract sequence.
const firstDeal = {
  en: [
    ['Get the documents before the meeting.', 'Collect the basic information early so you do not have to judge unfamiliar documents at the signing table.', ['Exact property address and sale scope', 'Registered owner and any co-owners', 'Owner attending or authorized representative', 'Draft contract and proposed payment account'], 'Request missing documents and time to review any unexplained differences.', 'Confirm the basic information before starting the signing-day checks.'],
    ['Refresh the records on the signing day.', 'Do not assume that records checked several days ago still describe the current transaction.', ['Latest ownership and rights records', 'Current ownership structure versus earlier information', 'Any change in the seller or representative'], 'Identify what changed, when it changed and why.', 'Resolve the change and its effect on the contract before proceeding.'],
    ['Match identity with authority to sign.', 'Connect the registered owner, the person attending and the seller named in the contract.', ['Identity document and person attending', 'Registered owner and contractual seller', 'Agency, co-ownership or company structure if they differ'], 'Classify the relationship and verify the basis for authority.', 'Proceed only after identity and contractual authority are connected.'],
    ['Match the property with the contract description.', 'Confirm that the contract refers to the building and included assets you actually reviewed.', ['Address, land and building identifiers', 'Included facilities and equipment', 'Agreed scope versus the written property description'], 'Specify any difference in land, building or included facilities.', 'Continue to the detailed property-and-condition check with a clear sale scope.'],
    ['Confirm the amounts and payment conditions.', 'Reconcile the price, timing, recipient account and prerequisites before transferring money.', ['Price, deposit, interim and closing amounts', 'Assumed tenant deposits and actual cash needed', 'Conditions required before each payment', 'Name of the receiving account holder'], 'Recalculate cash needs and payment conditions if the figures or account differ.', 'Finalize the contract and payment only after the amounts and recipient are clear.'],
    ['Read the contract and special conditions in order.', 'Read the transaction structure before signing.', ['Parties, property, price and payment dates', 'Handover, rights clearance and special conditions', 'Verbal agreements reflected in the final documents'], 'Resolve the wording of any difference before signing.', 'Read the final contract again to confirm that material agreements are included.'],
    ['Pause for a final check before signing.', 'Signing and paying should follow completed verification.', ['Parties, property, amounts and dates', 'Special conditions, account and revisions', 'Blank fields and attachments', 'Consistency of explanations and final documents'], 'Mark and resolve any outstanding material condition.', 'Sign and pay only when the essential unresolved items have been cleared.'],
    ['Sign and pay after verification is complete.', 'The deposit follows the earlier checks; it does not replace them.', ['Final contract', 'Deposit amount and account', 'Account holder immediately before transfer', 'Signed contract copies'], 'Stop a transfer if the account or payment condition changes, and reverify authority.', 'Sign, transfer the confirmed deposit and retain the evidence.'],
    ['Organize the work remaining before closing.', 'Signing starts the pre-closing recheck rather than ending verification.', ['Contract, documents and transfer receipts', 'Seller obligations before closing', 'Rights, tenancy and facilities to recheck', 'Closing documents and responsible people'], 'List any missing documents or obligations with an owner and due date.', 'Keep the contract, receipts, open conditions and recheck list together for pre-closing review.'],
  ],
  ja: [
    ['契約前に資料を受け取ります。', '現場で初めて見る資料を即座に判断しないよう、基本情報を先にそろえます。', ['正確な所在地と売買範囲', '登記上の所有者と共有の有無', '本人契約か代理契約か', '契約書案と予定振込口座'], '不足資料を依頼し、説明との差を検討する時間を確保します。', '基本情報を確認してから契約当日の確認へ進みます。'],
    ['契約当日に最新状態を再確認します。', '数日前の資料と当日の状態が同じとは限りません。', ['最新の所有者・権利記録', '事前説明と現在の所有構造', '契約相手や代理関係の変更'], '何が、いつ、なぜ変わったかを分類します。', '変更理由と契約への影響を確認してから進みます。'],
    ['本人確認と契約権限をつなげます。', '登記上の所有者、出席者、契約書の売主を照合します。', ['身分証と出席者', '登記上の所有者と契約書の売主', '不一致の場合の代理・共有・法人の構造'], '関係を分類し、権限の根拠を確認します。', '本人確認と契約権限がつながってから次へ進みます。'],
    ['購入対象と契約書の表示を一致させます。', '見学した建物と合意した付属物が契約対象に含まれるか確認します。', ['所在地・土地・建物の表示', '含める設備・施設', '説明された範囲と契約書の目的物'], '土地・建物・設備に違いがあれば範囲を特定します。', '範囲を確定して契約対象・現況の詳細確認へ進みます。'],
    ['金額と支払条件を確定します。', '送金前に総額、時期、口座、前提条件をまとめて照合します。', ['総額・手付金・中間金・残代金', '承継する保証金と必要資金', '支払前に完了すべき条件', '受取口座の名義'], '金額や口座が異なれば必要資金と条件を再計算します。', '金額と受領関係が明確になってから契約確定・送金へ進みます。'],
    ['契約書と特約を順に読みます。', '署名より先に取引の構造を確認します。', ['当事者・目的物・金額・支払日', '引渡し・権利整理・特約', '口頭合意と最終書面の一致'], '相違する文言を修正するまで署名しません。', '重要な合意が最終契約書に反映されているか再読します。'],
    ['署名直前に一度止まって確認します。', '署名と支払いは確認完了後に行います。', ['当事者・物件・金額・日付', '特約・口座・修正点', '空欄・添付資料', '説明と最終書面の一致'], '重要条件が未解決なら該当箇所を示して止まります。', '重要な未解決事項を解消してから署名・支払いへ進みます。'],
    ['確認後に署名して手付金を支払います。', '手付金は前段階の確認に代わるものではありません。', ['最終契約書', '手付金額と口座', '送金直前の口座名義', '署名済み契約書の控え'], '口座や条件が変わったら送金を止めて受領権限を再確認します。', '確定した内容で署名・送金し、証拠を保管します。'],
    ['契約直後に決済までの課題を整理します。', '契約後は決済前の再確認が始まります。', ['契約書・資料・送金証明', '売主の決済前履行事項', '権利・賃貸借・設備の再確認', '決済資料と担当者'], '不足資料や履行事項を担当者・期限付きで一覧にします。', '契約書、送金証明、未完了条件、再確認事項を一組にして管理します。'],
  ],
};
export function firstContractSteps(locale) {
  return firstDeal[locale].map(([title, summary, checks, ifDifferent, action], i) => ({
    no: String(i + 1).padStart(2, '0'), title, summary, checks, ifDifferent, action,
  }));
}

export const PARTY_CHAIN = {
  en: [
    ['Who owns the property in the latest records?', 'Check the current owner, co-owners and ownership shares.'],
    ['Who is attending and who will sign?', 'Match identity with the seller in the contract and the registered owner.'],
    ['What actions can this person authorize?', 'Verify authority to sign and agree the terms, including delegated or corporate authority.'],
    ['Who is authorized to receive the money?', 'Connect the account holder with the contracting party and the right to receive payment.'],
  ],
  ja: [
    ['最新の記録上の所有者は誰か？', '現在の所有者、共有者、持分を確認します。'],
    ['出席者と署名する人は誰か？', '身分証、契約書の売主、登記上の所有者を照合します。'],
    ['この人はどこまで決定できるか？', '契約締結・条件合意の権限、代理権や法人代表権を確認します。'],
    ['代金を受け取る権限は誰にあるか？', '口座名義、契約当事者、代金受領権限をつなげます。'],
  ],
};

// Each description belongs to the corresponding localChain heading.
export const CONTRACT_FLOW_BODIES = {
  en: {
    property: ['Confirm the land parcels and ownership or use boundaries.', 'Identify the building being acquired and its registered description.', 'Compare ownership and building records with the contract.', 'Check actual occupation, use and condition on site.', 'List included, excluded, rented and tenant-owned facilities.', 'Refresh leases, deposits and occupation at signing.', 'Write the agreed acquisition scope into the contract and attachments.'],
    payment: ['Start with the total contractual sale price.', 'Deduct the deposit and interim amounts already paid.', 'Identify tenant deposits and other amounts assumed by agreement.', 'Reconcile rent, service charges and utilities using an agreed cutoff date.', 'Calculate the remaining transfer after earlier payments and agreed adjustments.', 'List tax, registration, brokerage and initial costs separately.', 'Combine transfers and separate costs to estimate total cash needed.'],
    terms: ['Record the confirmed current condition.', 'Define the unresolved issue and its effect on the transaction.', 'Specify who must perform the required action.', 'Set a deadline linked to the payment or closing sequence.', 'Identify the evidence that proves completion.', 'Agree how non-performance will be handled, with appropriate review.', 'Place the agreed responsibilities and verification conditions in the contract.'],
    recheck: ['Keep dated records of the state confirmed at signing.', 'Compare the latest ownership and rights records with that baseline.', 'Refresh tenants, deposits, lease changes and occupation.', 'Recheck facilities, damage and the agreed physical handover condition.', 'Confirm completion of repairs, releases and promised documents.', 'Recalculate settlement and the final transfer after any changes.', 'Resolve material open conditions before executing the closing sequence.'],
    closing: ['Reconcile the final amount and receiving account.', 'Confirm that required rights releases are ready to execute.', 'Check title-transfer documents and the parties responsible for them.', 'Verify keys, access, equipment and records being delivered.', 'Coordinate the agreed order of documents, releases and payments.', 'Confirm the filing and completion of the title-transfer process.', 'Organize tenancy, management records and post-closing tasks.'],
  },
  ja: {
    property: ['土地の筆、所有範囲、使用根拠を確認します。', '取得する建物と公的記録上の表示を特定します。', '権利・建物の記録と契約書を照合します。', '実際の占有、利用状態、現況を現場で確認します。', '含む設備、除外物、レンタル、借主所有を分類します。', '契約時点の賃貸借、保証金、占有を更新します。', '合意した取得範囲を契約書と別添に記録します。'],
    payment: ['契約書の売買総額を出発点にします。', '支払済みの手付金・中間金を区別します。', '合意した保証金などの承継金額を整理します。', '賃料・管理費・公共料金を合意した基準日で精算します。', '既払額と精算を反映して最終送金額を計算します。', '税金・登記・仲介・初期費用を別に計上します。', '送金と付随費用を合わせて必要現金を確認します。'],
    terms: ['確認済みの現在状態を記録します。', '未解決問題と取引への影響を定義します。', '誰が必要な措置を行うか明記します。', '支払い・決済に対応した期限を定めます。', '完了を証明する資料や確認方法を特定します。', '未履行時の対応を適切な確認のうえ定めます。', '責任と確認条件を契約書へ反映します。'],
    recheck: ['契約時の状態と資料の日付を基準にします。', '最新の所有・権利記録を基準と比較します。', '借主、保証金、契約変更、占有を更新します。', '設備、損傷、合意した引渡し状態を再確認します。', '修繕・権利整理・約束した資料の履行を確認します。', '変更を反映して精算と最終送金額を再計算します。', '重要な未完了条件を解決してから決済します。'],
    closing: ['最終金額と受取口座を照合します。', '必要な権利抹消を実行できるか確認します。', '権利移転書類と担当者を確認します。', '鍵、アクセス、設備、引継ぎ資料を照合します。', '書類・権利整理・支払いの合意した順序を調整します。', '所有権移転の申請と完了を確認します。', '賃貸借、管理資料、決済後の手続きを整理します。'],
  },
};
