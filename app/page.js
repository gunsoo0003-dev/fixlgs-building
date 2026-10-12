import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import {DEFAULT_LOCALE, PUBLISHED_LOCALES} from '../publication-config.mjs';

const SUPPORTED = new Set(PUBLISHED_LOCALES);

function detectLocale(acceptLanguage = '') {
  const candidates = acceptLanguage
    .split(',')
    .map((part) => part.trim().split(';')[0].toLowerCase())
    .filter(Boolean);

  for (const candidate of candidates) {
    const primary = candidate.split('-')[0];
    if (SUPPORTED.has(primary)) return primary;
  }
  return 'ko';
}

export default async function RootPage() {
  if (PUBLISHED_LOCALES.length === 1) {
    redirect(`/${DEFAULT_LOCALE}`);
  }
  const cookieStore = await cookies();
  const saved = cookieStore.get('fix-building-locale')?.value;
  if (SUPPORTED.has(saved)) redirect(`/${saved}`);

  const headerStore = await headers();
  const locale = detectLocale(headerStore.get('accept-language') || '');
  redirect(`/${locale}`);
}
