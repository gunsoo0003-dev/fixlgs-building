const BASE_PATH='/building';

export const EXIT_IMAGES={
  home:`${BASE_PATH}/images/exit/exit-main.webp`,
  decision:`${BASE_PATH}/images/exit/exit-decision.webp`,
  readiness:`${BASE_PATH}/images/exit/exit-value-ready.webp`,
  pricing:`${BASE_PATH}/images/exit/exit-pricing.webp`,
  'buyer-readiness':`${BASE_PATH}/images/exit/exit-buyer-ready.webp`,
  'net-proceeds':`${BASE_PATH}/images/exit/exit-net-proceeds.webp`,
  closing:`${BASE_PATH}/images/exit/exit-closing.webp`,
};

export const EXIT_IMAGE_ALTS={
  ko:{
    home:'상업용 건물을 중심으로 여섯 단계의 EXIT 흐름을 표현한 건축형 이미지',
    decision:'건물 보유와 매각을 세 가지 변화요인으로 비교하는 균형 이미지',
    readiness:'흩어진 건물 기록이 정리된 매각자료 묶음으로 바뀌는 탑뷰 이미지',
    pricing:'건물과 세 개의 가격 레벨로 매도 가격전략을 표현한 이미지',
    'buyer-readiness':'매수자 질문과 근거자료·확인처를 연결한 실사 대응 네트워크 이미지',
    'net-proceeds':'매각대금에서 비용을 차감해 실제 회수자본이 남는 워터폴 이미지',
    closing:'열쇠와 계정·운영자료를 새 소유자에게 인계하는 종료 이미지',
  },
  en:{
    home:'Architectural visualization of a six-stage commercial property exit journey around one building',
    decision:'Conceptual balance showing three changing factors in a sell-or-hold property decision',
    readiness:'Top-down view of scattered property records becoming an organized sale information pack',
    pricing:'Sculptural pricing strategy with a building and three distinct seller price levels',
    'buyer-readiness':'Buyer due diligence network connecting questions to evidence, verification and responsible parties',
    'net-proceeds':'Financial waterfall showing deductions from gross sale value to net proceeds',
    closing:'Property handover showing keys, access, accounts and operating records transferred to a new owner',
  },
  ja:{
    home:'1棟の商業ビルを中心に6段階のEXITプロセスを表した建築イメージ',
    decision:'売却か保有かを3つの変化要因で比較するバランスイメージ',
    readiness:'散らばった物件記録が売却資料のパックに整理される俯瞰イメージ',
    pricing:'建物と3つの価格レベルで売却価格戦略を表したイメージ',
    'buyer-readiness':'買主の質問を根拠資料・確認先・担当者へつなぐデューデリジェンス対応イメージ',
    'net-proceeds':'売却代金から各費用を差し引き手取り額が残るウォーターフォールイメージ',
    closing:'鍵・アクセス権・アカウント・運用資料を新所有者へ引き継ぐイメージ',
  },
};

export function getExitImageAlt(locale='ko',id='home'){
  return (EXIT_IMAGE_ALTS[locale]||EXIT_IMAGE_ALTS.ko)[id]||EXIT_IMAGE_ALTS.ko[id]||'';
}
