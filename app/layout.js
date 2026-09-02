import './globals.css';

export const metadata = {
  title: 'FIX BUILDING',
  description: '건물·상가 의사결정 서비스',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
