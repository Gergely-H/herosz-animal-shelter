import { useTranslation } from '@/i18n/i18n';
import Link from 'next/link';

const Page = async ({
  params: { language },
}: {
  params: { language: string };
}) => {
  const { t } = await useTranslation(language, 'second-page');

  return (
    <>
      <h1>{t('title')}</h1>
      <Link href={`/${language}`}>{t('back-to-home')}</Link>
    </>
  );
};

export default Page;
