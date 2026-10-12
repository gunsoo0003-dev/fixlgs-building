# FIX BUILDING 인수인계

## 현재 유효 기준 · 2026-10-13 · ADSENSE_DETAIL_INDEX_FINAL_20261013

### 반드시 지킬 확정 요구사항

- **서비스 범위는 대한민국 부동산(건물·상가) 하나**다. 한국어가 원본이며, 영어·일본어는 *같은 한국 제도와 정보를 다른 언어로 설명하는 버전*이다. 미국·일본 등의 법령·등기 제도·화폐·면적·판단 기준으로 현지화하지 않는다.
- 한국어·영어·일본어의 금액은 원화(KRW), 면적은 ㎡·평, 법률과 공식 출처는 한국 기준. 분석 로직·판단 기준·예시의 사실·숫자는 언어와 무관하게 동일해야 한다.
- **현재 공개 언어는 한국어만이다**. `publication-config.mjs`의 `PUBLISHED_LOCALES=['ko']`를 애드센스 심사 전에는 변경하지 않는다. EN/JA 소스는 삭제하지 않으며 현재 해당 URL은 한국어 URL로 임시 307 리다이렉트한다.
- 주요 목표는 FIX BUILDING 중심 애드센스 재심사 준비이며, 광고 승인 확률을 수치로 보장하지 않는다. 출처는 내용에 직접 연관된 한국 공식자료에 한정하고 작은 하단 영역으로 연결한다. 기존 UI·계산·기능·이미지 보존.
- 운영 우선순위: 정적·자동화, 유지비 0원, 정기 수동관리 0. 유료 API·상시 서버를 새로 만들지 않는다.
- ZIP 전달 구조의 최상위 폴더는 늘 **`fixlgs-building` 단일 폴더**. 기존 PC 프로젝트 루트에 덮어쓰기 가능해야 한다.

### 현재 구현 상태 · 코드로 확인한 사실

1. **한국어 단독 공개(기존):** `publication-config.mjs`, `next.config.mjs`, `app/SiteHeader.js`, `app/sitemap.js` 및 언어 라우트에서 한국어 단독 공개/메타데이터/307 처리를 유지한다. 이번 작업에서 해당 설정은 수정하지 않았다.
2. **한국어 공식 출처(기존):** `app/OfficialReferences.js`, `app/official-references.css`, `app/[locale]/layout.js`에서 한국어 콘텐츠별 0~2개 한국 공식기관 출처를 본문 하단에 작은 링크로 표시한다. 개인투자판단이나 가상 사례를 공공기관이 승인했다는 인상을 피한다.
3. **2026-10-13 영·일문 콘텐츠 보강(신규):** `app/analysis-localized-cases.js`에 한국어 분석의 INCOME/RIGHTS/BUILDING/LOCATION/OPERATION에 대응하는 구체적 교육용 예시를 영어·일본어 각 5개씩 등록했다. 기존 일반 안내 수준의 실전 리포트 대신 한국어처럼 증거·수치·그래픽·판단 범위를 별도로 전달하도록 `app/analysis-v039-localized.js`에서 연결했다. PRICE 예시는 기존 한국어 조건을 유지한다.
4. **한국 제도 고정 안내(신규):** `app/site-copy.js`의 영문·일문 메타데이터에서 대한민국 부동산임을 명시한다. `app/SiteFooter.js`, `app/globals.css`에서 영·일문이 공개될 때만 KRW·㎡/평·한국 공식기관 자료 기준을 작은 문구로 명시한다. 한국어 UI에는 해당 문구를 추가하지 않는다.
5. **영·일문 공식 출처/용어(신규):** `app/OfficialReferences.js`가 미래 EN/JA 공개 화면에서 **한국어판과 같은 한국 공식 URL**을 이용하되 자료명·설명·자체 분석 주의문을 각 언어로 표시할 준비를 한다. 출처 원문이 한국어로 열림을 알린다. `app/AnalysisV008Client.js`는 일부 분석 도표 접근성 문구와 일본어 '가상 교육용 사례' 표기를 교정했다.
6. **판단/계산 원본:** 한국어 분석 6축, 계약, 관리, EXIT, 자가진단 등의 계산/결정 로직·다국어 소스는 기존대로 유지. 국가별 별도 로직 도입 없음.
7. **영·일문 번역 QA(최신):** `app/site-copy.js` 분석 안내를 한국어 원본의 “호가·표면수익률만으로 판단하지 않기”까지 확장하고 일부 영어 이미지 대체텍스트를 중립적으로 교정. `app/analysis-localized-cases.js`에서 양 언어의 교육용 임대수익 **가정치/실제 수입 구분** 보강. `app/self-check-question-copy.js` 일본어에서 잘못된 “공실이 안정적”을 “입주율이 안정적”으로 수정. `app/OfficialReferences.js`의 한국 건축물대장 출처 설명 정밀화. `app/analysis-v039-localized.js` 일본어 법률·표기 용어 통일. 콘텐츠 판단·설문 점수·금액과 계산 로직은 변경 없음.
8. **번역 검증 추가:** `scripts/translation-quality-regression.mjs`에 대표 사전 1,914개 한국어 대응 텍스트의 영·일문 구조, 42문항 선택지 원본 점수 인덱스 보존, 교육 사례 5축×2언어, 한국어 단독 공개 설정 검사를 추가했다. 구조 검사로 사람 수준의 번역 감수/법률 감수를 대체하지 않는다.
9. **2026-10-13 공개 전 정합성 수정(최신):** 자가진단 C01~C16의 STEP 3 상세 유형과 FINAL 짧은 명칭을 KO/EN/JA에서 동일 의미로 연결했다(`app/self-check-final-copy.js`, `app/SelfCheckClient.js`). 판정·점수 로직은 변경하지 않았다. 영·일문의 자가진단 근거문 12유형에서 한국어 원본의 SEC/FINRA/OCC/FDIC 등 **미국 참고기관** 표기를 복원하고 한국 법률 근거와 구별했다(`app/self-check-stage3-copy.js`). JA 공개/열림 혼동을 교정했고, 일본어 관리 표제 9종과 EN/JA 관리·EXIT 메타 설명의 대한민국 대상 범위를 정리했다(`app/ManagementClient.js`, 두 언어 라우트). 콘텐츠 구조·KO 단독 공개 정책은 유지한다.
10. **재발 방지 검사:** `scripts/translation-quality-regression.mjs`가 C01~C16의 언어별 짧은 유형 이름과 상세 유형을 대응 점검하고 KO에 등장하는 명시적 미국 참고기관을 번역본에서도 확인하며, 일본어 상태표기·관리 표제·언어별 한국 관할 메타·42문항 채점 매핑을 검사한다.
11. **자가진단 54개 콘텐츠/유형 정합성(최신):** `app/self-check-data.js`에 T13·T14 관리참여/관리위임 프로토타입을 보완하고 `app/SelfCheckClient.js`에서 해당 유형은 기존 문항의 관리참여·공실대응/정보검증·목적명확성이 뚜렷할 때만 후보로 인정한다. 기존 점수 산식과 다른 기능은 유지하되 일부 응답의 유형 분류는 새 유형으로 바뀔 수 있다. 공개 자산 A01~A10은 고정 비교 예시로 표시하고 가상 점수·응답매칭 표현을 제거했다. FINAL T01~T14는 `app/self-check-final-scenarios.js`의 언어별 고유 가상 교차 판단 사례를 노출한다. BASIC 12개/BEHAVIOR 16개는 기존 내용 유지.
12. **2026-10-13 출처·모바일 탐색 정비(최신):** 실제 분석 URL인 `rights`, `location`, `operation`에 주제에 부합하는 공식 출처를 연결하고 폐기된 `finance`, `tenancy`, `survival` 경로 매핑을 제거했다(`app/OfficialReferences.js`). `app/SiteHeader.js`, `app/mobile-navigation.css`, `app/[locale]/layout.js`에서 700px 이하의 접이식 모바일 탐색 메뉴(5개 서비스/세부메뉴, ESC·바깥 클릭 닫기)를 추가했다. PC 헤더 스타일과 공개 언어/자가진단 계산을 보존했다.


13. **2026-10-13 한국어 상세 12페이지 검색 노출 정리(최신):** 분석 6개(`price/income/rights/building/location/operation`)와 관리 6개(`rent/vacancy/tenant/cost/facility/record`)의 `noindex`를 한국어에 한해 해제. 분석 상세에 URL별 제목·설명·canonical·OG를 추가하고 유효하지 않은 분석 경로는 404 처리. 관리의 기존 개별 canonical과 메타데이터 유지. `app/sitemap.js`에 12개 한국어 URL을 추가하여 총 88개로 변경. 영·일문은 기존 비공개 307과 소스 보존, 색인 불허 유지. **공통 개인정보처리방침·이용약관은 다른 메인 프로젝트의 `/privacy`, `/terms`이므로 빌딩 ZIP에서 변경 불가**(메인 소스를 제공받아 별도 최소 정비 필요).

### 실행한 검증과 한계

- **최신 작업(ADSENSE_DETAIL_INDEX_FINAL_20261013):** 새 `scripts/adsense-indexing-regression.mjs`를 포함한 Node 회귀검사 **7종 PASS**. 12개 한국어 상세 URL의 고유 canonical/색인 허용/사이트맵 88개 중복 없음, EN/JA 색인 불허 및 공통 메인 정책 URL 유지 확인. 변경 파일 4개의 JS/JSX TypeScript 구문검사 PASS. `npm ci --offline`은 `tslib@2.8.1 ENOTCACHED`, 온라인 설치는 제한시간 내 완료되지 않아 **Next.js 전체 빌드·실제 화면·배포는 미검증**. 메인 FIXLGS 법적 페이지 문구 변경도 미실시(별도 프로젝트).

- **최신 작업(ADSENSE_SOURCE_NAV_FINAL_FIX_20261013):** `publication-regression`, `i18n-content-regression`, `translation-quality-regression`, `official-references-regression`, `self-check-54-adsense-regression`, 신규 `mobile-navigation-regression` 총 6종 PASS. 분석 메뉴의 실제 URL 목록과 출처 매핑의 일치·관련 출처 존재를 신규 검증. 수정 JSX 3개를 TypeScript 파서로 구문검사 PASS. 기존 한국어 단독 공개/다국어 소스/자가진단 54개 회귀 PASS. `npm ci --offline --ignore-scripts`는 npm 캐시에 `tslib@2.8.1`이 없어 `ENOTCACHED` 실패하여 **Next.js 전체 빌드/실제 모바일 실화면/배포 미검증**. 공식 링크 세 개의 웹 문서 응답은 확인했으나 모든 출처의 원문 최신성·브라우저 클릭 검증은 아님.

- **최신 작업(ADSENSE_SELF_CHECK_54_FIX_20261013):** 기존 회귀검사 4종 + 신규 `scripts/self-check-54-adsense-regression.mjs` 1종 모두 PASS. 신규 검사: 54개 URL·14유형×3언어 가상 사례·T13/T14의 42문항 완전응답 도달·기존 12개 대표형 분류 유지·KO만 공개 정적 검사. 변경된 3개 JS/JSX는 TypeScript 구문 파서 오류 0건. **Next.js 전체 빌드는 `next: not found`로 실패**(런타임 의존성 없음); 정적 HTML/PC·모바일·배포 실증 미완료. 검사 통과가 애드센스 승인이나 외부 사실 검증을 의미하지 않는다.

- **이번 작업(EN_JA_BEHAVIOR_PARITY_QA_20261013):** Node 회귀검사 4종 PASS(번역, 공개 설정, 다국어 콘텐츠, 공식 출처). 추가 검사에서 C01~C16 × 3개 언어의 의미 기준·참고기관 연결 및 42문항 점수 배열 PASS. 변경 JS/JSX 파일 7개를 TypeScript 파서로 구문검사 PASS.
- **이번 작업 미검증:** `npm ci --offline` 캐시 누락(`tslib@2.8.1 ENOTCACHED`), 온라인 설치도 제한 시간 내 미완료. Next.js 전체 빌드·PC/모바일 실화면·번역 전문 교열·실제 배포 미검증. SEC 등 기관명은 기존 KO 콘텐츠를 번역한 것이며 외부 사실 확인이나 한국법 적합성 보증이 아니다.

**아래 항목은 이전 작업 당시 기록이며 이번 새 코드의 전체 빌드 결과가 아니다.**

- **이번 작업 통과:** `node scripts/translation-quality-regression.mjs`, `node scripts/publication-regression.mjs`, `node scripts/i18n-content-regression.mjs`, `node scripts/official-references-regression.mjs` 각각 PASS. 수정된 일반 JS 파일과 신규 검사 스크립트 `node --check` PASS. EN/JA 공개 설정 변경 없음.
- **이번 작업 한계:** `npm ci --no-audit --no-fund --fetch-retries=0 --fetch-timeout=8000`은 npm 자체 `Exit handler never called!` 오류로 실패, 따라서 **이번 버전의 Next.js 전체 빌드 및 실화면 QA는 미검증**. Vercel 배포도 실행하지 않았고 사용자의 기존 Git 저장소에서 빌드·push가 필요하다. 한국법 법률가 감수/원어민 전문 교열 전체 완료라고 주장하지 않는다.

- **통과:** `node scripts/i18n-content-regression.mjs` (언어별 분석 12축, 12개 실전 사례/사실 기반, 계약 9단계, 가격 계산식·단위 검사), `node scripts/publication-regression.mjs` (한국어 공개·EN/JA 307 규칙·대체언어 링크/소스 유지), `node scripts/official-references-regression.mjs` (기존 출처 9개, 31개 경로 패턴, 세 언어 동일 URL과 안내문 정적 확인).
- **통과:** `node --check`로 변경한 일반 JS 데이터 모듈 3개 구문 확인. JSX까지 빌드 검사한 것은 아니다.
- **미완료:** 이번 환경의 `npm ci --offline --no-audit --no-fund`는 `ENOTCACHED`(tslib 패키지 미보유)로 실패. `npm run build` 및 PC·모바일 브라우저 렌더링 검증을 실제 수행하지 못했다. 출처 URL의 현 시점 200 응답·개별 법률 문장 정확성·전체 영일문 전문 번역 검수도 미확인이다.
- 사용자 확인: 이전 출처 보강판은 실제 사이트에 반영되었다고 알렸으나, **이번 다국어 패치 압축본은 아직 로컬·Vercel에 배포하지 않았다**.

### 다음 작업

1. **빌딩 배포 전:** 사용자 PC `WebProjects/fixlgs-building`에 ZIP 덮어쓰기 후 `npm ci`, `npm run build`, `node scripts/adsense-indexing-regression.mjs` 및 기존 회귀검사 6종 실행. 모바일(390px)/PC 실제 화면 확인, 한국어 분석·관리 12개 URL 접근·각 canonical/meta·공식 출처 확인. Vercel 배포 후 사이트맵 주소 88개와 영·일문 한국어 307 이동 실증.
2. **메인 FIXLGS 소스 별도 필요:** `https://fixlgs.com/privacy`, `/terms`는 빌딩의 자체 페이지가 아니며, 메인 프로젝트에서 운영하는 공통 정책이다. **메인 프로젝트 최신 소스 ZIP 제공 시에만** BUILDING을 우선 소개하면서 TOOLBOX 및 나머지 서비스에 적용되는 정당한 공통 고지는 유지해 최소 수정. 지금 ZIP의 `app/[locale]/privacy/page.js`·`terms/page.js` 301 리다이렉트와 푸터 링크는 변경하지 않음.
3. **애드센스:** 실제 배포 빌드와 접근성/소유권 확인 완료 후 재심사. 색인 허용 자체가 승인 조건이나 승인율 보장은 아님. EN/JA 공개 전에는 전문 번역·한국법 정확성·실화면을 별도로 검수하고 `PUBLISHED_LOCALES=['ko']` 유지.

### 보관 현황 · 자동 분량 관리

- **현재 프로젝트 내부 보관 문서:** `docs/handover/HISTORY_V001.md` (2026-10-12 및 이전 원문 기록; 한국어 단독 공개 전환/공식 출처 최초 적용/영일문 오류 수정 시의 판단 근거). 초기 결정 이유나 과거 빌드 검증이 필요할 때 선택적으로 읽는다. 별도의 보관 ZIP은 없다.
- 보관 전 원문 분량 점검: 2026-10-12 시점의 누적 인수인계는 **9,772자**(UTF-8 19,066바이트)였으며, 약 **20,000자**라는 분리 운영 기준에 미달했다. 2026-10-13에 이 문서를 외부 ZIP으로 분리한 것은 조기 분리 오류였으므로 **원문을 이 주 문서에 복원**했다.
- 다음 작업에서도 최신 상태는 주 문서 상단에 갱신하고 새 이력만 추가한다. **전체 유니코드 20,000자 초과 시에만** 오래된 기록을 `docs/handover/HISTORY_V002.md`부터 순차적으로 내부 보관한다. 기존 V001 원문은 덮어쓰지 않으며 모든 기록은 최신 프로젝트 ZIP 하나로 전달한다.
- 개별 감사 기록: `EN_JA_KR_LANGUAGE_ONLY_AUDIT_20261013.txt`, `OFFICIAL_REFERENCES_AUDIT_20261012.txt`, `KO_ONLY_PUBLICATION_AUDIT_20261012.txt` 및 기존 `*_AUDIT*.txt`. 이들은 버전별 사실이며 최신 상태보다 우선하지 않는다.

---

## 작업 이력 · 2026-10-13 · ADSENSE_DETAIL_INDEX_FINAL_20261013

- **목적:** 이미 충분히 작성된 한국어 분석·관리 상세 12개를 독립적인 검색 URL로 정리하고 애드센스 심사 전 기술적 일관성을 강화. 기존 디자인/자가진단/영일문 비공개 정책/공통 신뢰 페이지 URL 유지.
- **수정:** 분석·관리 상세는 KO에서 색인 허용(숨긴 EN/JA는 색인 불허); 분석 6개에 각각 고유 title/description/canonical/OG, 잘못된 분석 경로는 404; 관리 6개는 기존 개별 canonical 유지. 사이트맵 76→88개(KO 12개 추가). `scripts/adsense-indexing-regression.mjs` 신규 추가.
- **변경 파일:** `app/[locale]/analysis/[[...view]]/page.js`, `app/[locale]/management/[[...view]]/page.js`, `app/sitemap.js`, `scripts/adsense-indexing-regression.mjs`(신규). 기존 파일 삭제 없음.
- **검증:** Node 회귀검사 7종 및 JS/JSX 구문검사 PASS. 전체 Next.js 빌드/브라우저/실제 배포 미검증(npm 설치 캐시 부족·온라인 설치 시간 초과). 사용자 요청의 메인 정책 페이지 수정은 다른 프로젝트 소스가 없어 실시하지 못함. SEO 조치가 애드센스 승인율을 수치로 높인다고 보장할 수 없음.

## 작업 이력 · 2026-10-13 · ADSENSE_SOURCE_NAV_FINAL_FIX_20261013

- **목표/보존:** AdSense 심사 전 확인된 분석 출처 경로 누락·700px 이하 모바일 탐색 부재만 최소 수정. 기존 디자인/PC 호버 메뉴/한국어 단독 공개/영일문 비공개/자가진단/계산·점수 유지.
- **수정:** 실제 `/analysis/rights`, `/analysis/location`, `/analysis/operation`에 등기·지역 임대동향/통계·임대동향 출처 연결(기존 공식 URL 사용). 분석 레거시 `finance`, `tenancy`, `survival` 매핑 제거. 모바일 고정 높이 52px 경량 메뉴(5개 서비스 및 세부 링크, 기본 접힘, 바깥 터치·ESC·링크 이동 시 닫힘). 실제 메뉴의 모든 분석 URL을 참조 등록과 교차 확인하는 회귀검사 보강.
- **파일:** `app/OfficialReferences.js`, `app/SiteHeader.js`, `app/[locale]/layout.js`, `scripts/official-references-regression.mjs` 수정; `app/mobile-navigation.css`, `scripts/mobile-navigation-regression.mjs` 추가.
- **검증:** Node 6종 PASS, JS/JSX 파서 3개 PASS, 모바일 CSS 괄호 일치. npm 오프라인 캐시 부족(`tslib ENOTCACHED`)으로 전체 Next.js 빌드·실제 화면 미검증, 프로덕션 배포 미실행. 웹 문서 확인은 전체 외부 링크 200·법률 정확성의 보증이 아님.

---

## 작업 이력 · 2026-10-13 · ADSENSE_SELF_CHECK_54_FIX_20261013

- **목표:** 자가진단 결과 54개 애드센스용 고유성/오인 위험 보강. 기존 한국어 공개·EN/JA 비공개와 설문 문항·이미지·기존 점수산식·디자인 보존.
- **수정:** T13/T14 유형 프로토타입 및 강한 관리성향일 때만 적용하는 후보 조건 보완(기존 유형 분류 일부에 영향 가능), A01~A10 공개 비교의 개인응답/가짜 순위 표현 제거, FINAL 14유형에 각각 구분되는 가상 교차 판단 상황·충돌·반례·검토 순서(한·영·일) 추가. 사용되지 않는 `PublicEditorial/publicDepthBlocks`는 중복 방지를 위해 일괄 노출하지 않음. BASIC 12·BEHAVIOR 16은 전수검토상 선별 유지.
- **파일:** `app/self-check-data.js`, `app/SelfCheckClient.js`, `app/self-check-final-scenarios.js`(신규), `scripts/self-check-54-adsense-regression.mjs`(신규).
- **검증:** 기존 정적 회귀 4종+신규 1종 PASS, 변경된 JS/JSX 구문검사 PASS. `npm run build`는 패키지 미설치(`next: not found`)로 실패. 실제 HTML·PC/모바일·프로덕션 배포 미검증.

---

## 작업 이력 · 2026-10-13 · EN_JA_BEHAVIOR_PARITY_QA_20261013

- **요청/원칙:** 영어·일본어 공개 전 정합성 보강. 한국어 원본과 대한민국 법률·KRW·㎡/평 기준, 307 임시 비공개 정책과 기존 계산·점수 보존.
- **수정:** FINAL 결과 짧은 유형과 STEP 3 상세 유형 C01~C16의 KO/EN/JA 매핑 통일(한국어 결과 명칭도 잘못된 연결만 교정), 영어·일본어 12유형의 기관명 근거 설명 보강, 일본어 `公開` → `確認可能`, 일본어 관리 영문 표제 9종 번역, 관리·EXIT 영일문 메타에 한국 관할 명시. 검증 스크립트 의미 연결/근거 누락 검사 추가.
- **파일:** `app/self-check-final-copy.js`, `app/SelfCheckClient.js`, `app/self-check-stage3-copy.js`, `app/ManagementClient.js`, `app/[locale]/management/[[...view]]/page.js`, `app/[locale]/exit/[[...view]]/page.js`, `scripts/translation-quality-regression.mjs`.
- **검증:** 기존+확대 Node 검사 4종 PASS; JS/JSX 파서 구문검사 PASS. npm 설치 불가로 Next 빌드/실화면 검증 및 Vercel 배포 미수행. 공식기관 원문 사실 재확인·원어민/법률 전문감수 미수행. 한국어 단독 공개 유지.

---

## 작업 이력 · 2026-10-13 · EN_JA_TRANSLATION_QA_20261013

- **요청:** AdSense 심사용 한국어 단독 공개 상태를 유지한 채 비공개 영어·일본어 번역 품질만 보강하고 배포 준비. 한국 부동산 제도·단위·출처·계산 로직 유지.
- **수정:** `app/site-copy.js`, `app/analysis-localized-cases.js`, `app/analysis-v039-localized.js`, `app/self-check-question-copy.js`, `app/OfficialReferences.js`의 영·일문 용어/의미/가상 사례와 자료 설명 15곳 교정. `scripts/translation-quality-regression.mjs` 추가. 한국어 문구·계산·공개 플래그·UI 배치 변경 없음.
- **검증:** 4종 Node 회귀검사 PASS, 변경 일반 JS 구문검사 PASS. npm 설치 실패로 Next 빌드/화면 미검증. 배포 미실행. 전문 원어민·법률 감수 미완료.
- **기록:** 기존 이력 원문 보존, 보관 ZIP 신규 생성 없음(주 문서 실제 글자 수 확인 후 분량 조건 적용).

---

## 작업 이력 · 2026-10-13 · KR_LOCALE_PARITY_20261013

- **요청:** 한국 제도·거래·화폐·공식 출처를 유지하고 영문/일문은 언어만 바꾸도록 콘텐츠 보강. 한국어 단독 공개 원칙 보존.
- **실제 수정:** EN/JA 10개 상세 가상 사례, 관련 분석 컴포넌트 연결, 다국어 공식 출처 설명, 하단 한국 제도 안내문, 영일문 메타, 일부 도표 접근성·표현, 회귀검사 확대.
- **검증 결과:** 3종 회귀검사 및 일반 JS 구문검사 PASS. 의존성 미설치로 Next 빌드/실화면 검수 미실행, 배포 미실행.
- **인수인계 기록 정정:** 2026-10-12까지의 원문은 19,066바이트이나 실제 9,772자로 약 20,000자 분리 기준에 미달했다. 조기에 만들었던 외부 보관 ZIP을 최신 작업 전달물에서 제외하고, 그 원문을 아래에 온전히 복원했다. 현 시점 별도 보관 ZIP 없음.

---
