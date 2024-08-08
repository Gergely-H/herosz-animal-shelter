import { useTranslation } from '@/i18n/i18n';
import Link from 'next/link';

const Home = async ({
  params: { language },
}: {
  params: { language: string };
}) => {
  const { t } = await useTranslation(language, 'translation');

  return (
    <>
      <h1>{t('title')}</h1>
      <Link href={`/${language}/second-page`}>{t('to-second-page')}</Link>
    </>
  );
};

export default Home;
