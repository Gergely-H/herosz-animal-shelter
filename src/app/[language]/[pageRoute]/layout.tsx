import type { ReactNode } from 'react';
import { pageRoutes } from './pageRoutes';
import type { LanguageParam } from '@/app/[language]/layout';

type GenerateStaticParams = {
  params: LanguageParam;
}

export const generateStaticParams = ({
  params: { language },
}: GenerateStaticParams) =>
pageRoutes[language].map((pageRoute) => ({ pageRoute }));

export type PageRouteParam = ReturnType<typeof generateStaticParams>[number];

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <>
    {children}
  </>
);

export default RootLayout;
