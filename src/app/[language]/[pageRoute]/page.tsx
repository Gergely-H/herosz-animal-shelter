// import { useTranslation } from '@/i18n/i18n';
import type { LanguageParam } from '@/app/[language]/layout';
import { AboutUs } from '@/components/pages/about-us/AboutUs';
import { Contact } from '@/components/pages/contact/Contact';
import { Donation } from '@/components/pages/donation/Donation';
import { Volunteering } from '@/components/pages/volunteering/Volunteering';
import { pageRoutes, translatePageRoute } from './pageRoutes';

// TODOOOOOOOOOOO
import { languages } from '@/i18n/settings';

export const generateStaticParams = () =>
  languages.map((language) => ({ language }));

export type LanguageParam = ReturnType<typeof generateStaticParams>[number];

type GenerateStaticParams = {
  params: LanguageParam;
};

// ////////////

export const generateStaticParams = ({
  params: { language },
}: GenerateStaticParams) =>
  pageRoutes[language].map((pageRoute) => ({ pageRoute }));

export type PageRouteParam = ReturnType<typeof generateStaticParams>[number];

type PageProps = {
  params: PageRouteParam;
};

const Page = /* async */ ({ params: { pageRoute } }: PageProps) => {
  // const { t } = await useTranslation(language, 'translation');

  /*
   * return (
   *   <>
   *     <h1>{t('title')}</h1>
   *     <Link href={`/${language}/second-page`}>{t('to-second-page')}</Link>
   *   </>
   * );
   */

  switch (translatePageRoute(pageRoute)) {
    case EN_PAGE_ROUTES.AboutUs:
      return <AboutUs />;
    case EN_PAGE_ROUTES.Contact:
      return <Contact />;
    case EN_PAGE_ROUTES.Dontaion:
      return <Donation />;
    case EN_PAGE_ROUTES.Volunteering:
      return <Volunteering />;

    /*
     * TODO: check if these routes should be here or are they automatically mapped in lists folder
     * case EN_PAGE_ROUTES.Cats:
     *   return <div>rolunk</div>;
     * case EN_PAGE_ROUTES.Dogs:
     *   return <div>rolunk</div>;
     * TODO: redirect to Home page
     */
    default:
      return <div>default</div>;
  }
};

export default Page;
