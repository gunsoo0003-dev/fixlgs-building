import { notFound } from 'next/navigation';
import HomePage from '../HomePageClient';
import { SITE_COPY } from '../site-copy';

export function generateStaticParams() {
  return ['ko', 'en', 'ja'].map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const copy = SITE_COPY[locale];
  if (!copy) return {};
  return {
    title: copy.metaTitle,
    description: copy.metaDescription,
    alternates: {
      canonical: `/building/${locale}`,
      languages: { 'ko-KR': '/building/ko', 'en': '/building/en', 'ja-JP': '/building/ja' },
    },
  };
}

export default async function LocalePage({ params }) {
  const { locale } = await params;
  if (!SITE_COPY[locale]) notFound();
  return <HomePage locale={locale} />;
}
