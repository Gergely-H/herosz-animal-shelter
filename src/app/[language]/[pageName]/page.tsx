import { useTranslation } from '@/i18n/i18n';
import Link from 'next/link';

const Home = async ({
  params: { language, pageName },
}: {
  params: { language: string, pageName: string };
}) => {
  // const { t } = await useTranslation(language, 'translation');

  // return (
  //   <>
  //     <h1>{t('title')}</h1>
  //     <Link href={`/${language}/second-page`}>{t('to-second-page')}</Link>
  //   </>
  // );

  // TODO: check if i need to use language param here or language routing is solved one level above
  switch(pageName) {
    case 'about-us': 
      return <div>about us</div>;
    case 'rolunk': 
      return <div>rolunk</div>;
    default: 
      return <div>default</div>;
  }
};

export default Home;
