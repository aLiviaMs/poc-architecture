import i18next, { Resource } from 'i18next';

// TODO: need to test
export async function initI18n(lang: string, resources: Resource) {
  await i18next.init({
    lng: lang,
    resources,
  });
}

export function t(key: string) {
  return i18next.t(key);
}
