import { useTranslation } from '@/i18n/i18n';
import Link from 'next/link';
import type { PageRouteParam } from './layout';
import { EnPageRoute, HuPageRoute } from './pageRoutes';
import { AboutUs } from '@/components/pages/about-us/AboutUs';
import { Contact } from '@/components/pages/contact/Contact';
import { Donation } from '@/components/pages/donation/Donation';
import { Volunteering } from '@/components/pages/volunteering/Volunteering';

type HomeProps = {
  params: PageRouteParam;
}

const Home = async ({
  params: { pageRoute },
}: HomeProps) => {
  // const { t } = await useTranslation(language, 'translation');

  // return (
  //   <>
  //     <h1>{t('title')}</h1>
  //     <Link href={`/${language}/second-page`}>{t('to-second-page')}</Link>
  //   </>
  // );

  switch(pageRoute) {
    case EnPageRoute.AboutUs:
    case HuPageRoute.Rolunk:
      return <AboutUs />;
    case EnPageRoute.Contact:
    case HuPageRoute.Kapcsolat:
      return <Contact />;
    case EnPageRoute.Dontaion:
    case HuPageRoute.Adomanyozas:
      return <Donation />;
    case EnPageRoute.Volunteering:
    case HuPageRoute.Onkenteskedes:
      return <Volunteering />;
  // TODO: check if these routes should be here or are they automatically mapped in lists folder
    // case EnPageRoute.Cats:
    // case HuPageRoute.Macskak:
    //   return <div>rolunk</div>;
    // case EnPageRoute.Dogs:
    // case HuPageRoute.Kutyak:
    //   return <div>rolunk</div>;
  // TODO: redirect to Home page
    default:
      return <div>default</div>;
  }
};

export default Home;
