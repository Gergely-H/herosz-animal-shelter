import { useTranslation } from '@/i18n/i18n';
import Link from 'next/link';
import type { PageRouteParam } from './layout';
import { EnPageRoute, HuPageRoute } from './pageRoutes';

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
      return <div>about us</div>;
    case EnPageRoute.Contact:
    case HuPageRoute.Kapcsolat:
      return <div>rolunk</div>;
    case EnPageRoute.Dontaion:
    case HuPageRoute.Adomanyozas:
      return <div>rolunk</div>;
    case EnPageRoute.Volunteering:
    case HuPageRoute.Onkenteskedes:
      return <div>rolunk</div>;
  // TODO: check if these routes should be here or are they automatically mapped in lists folder
    // case EnPageRoute.Cats:
    // case HuPageRoute.Macskak:
    //   return <div>rolunk</div>;
    // case EnPageRoute.Dogs:
    // case HuPageRoute.Kutyak:
    //   return <div>rolunk</div>;
    default:
      return <div>default</div>;
  }
};

export default Home;
