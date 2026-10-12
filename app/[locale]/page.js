import { notFound } from 'next/navigation';
import HomePage from '../HomePageClient';
import { SITE_COPY } from '../site-copy';
import {PUBLISHED_LOCALES, publishedLanguageUrls} from '../../publication-config.mjs';

export function generateStaticParams() {
  return PUBLISHED_LOCALES.map((locale) => ({ locale }));
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
      languages: publishedLanguageUrls(),
    },
  };
}

export default async function LocalePage({ params }) {
  const { locale } = await params;
  if (!SITE_COPY[locale]) notFound();
  return <HomePage locale={locale} />;
}
