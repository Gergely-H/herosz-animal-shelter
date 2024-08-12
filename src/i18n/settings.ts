export const fallbackLng = 'hu';

// TODO: get these languages from single source of truth
export const languages = [fallbackLng, 'en'] as const;

export const defaultNS = 'translation';

export const cookieName = 'i18next';

export const getOptions = (lng = fallbackLng, ns = defaultNS) => ({
  // debug: true,
  supportedLngs: languages,
  fallbackLng,
  lng,
  fallbackNS: defaultNS,
  defaultNS,
  ns,
});
