import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { getOptions } from './settings';

const initI18next = async (language, ns) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        async (language, namespace) =>
          import(`./locales/${language}/${namespace}.json`),
      ),
    )
    .init(getOptions(language, ns));

  return i18nInstance;
};

// TODO: add comment: because of parallel execution of static site generation it creates a new i18n instance for every component
export const useTranslation = async (language, ns, options = {}) => {
  const i18nextInstance = await initI18next(language, ns);

  return {
    t: i18nextInstance.getFixedT(
      language,
      Array.isArray(ns) ? ns[0] : ns,
      options.keyPrefix,
    ),
    i18n: i18nextInstance,
  };
};
