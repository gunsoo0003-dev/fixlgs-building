# FIX BUILDING — Next.js Local V1

## 실행

```powershell
npm install
npm run dev
```

브라우저:

```text
http://localhost:3000
```

## 구조
- `app/page.js` 메인 페이지
- `app/globals.css` 디자인/모션
- `public/assets/hero-building.mp4` 히어로 영상
- `public/assets/service-*.webp` 6개 서비스 이미지

상세 서비스 링크는 현재 `#`로 두었습니다. 메인 디자인 검수 후 실제 Next.js 라우트에 연결하면 됩니다.

Bottom overflow fix: restored natural document height; no fixed wrapper height or transform scaling; html/body/page-viewport/page-canvas/main use auto height and visible overflow.
