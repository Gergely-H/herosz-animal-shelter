import type { LanguageParam } from '@/app/[language]/layout';
import type { ReactNode } from 'react';
import { pageRoutes } from './pageRoutes';

type GenerateStaticParams = {
  params: LanguageParam;
};

export const generateStaticParams = ({
  params: { language },
}: GenerateStaticParams) =>
  pageRoutes[language].map((pageRoute) => ({ pageRoute }));

export type PageRouteParam = ReturnType<typeof generateStaticParams>[number];

type RootLayoutProps = {
  children: ReactNode;
};

// eslint-disable-next-line react/jsx-no-useless-fragment -- This layout only responsibility is to handle the language param.
const PageRouteLayout = ({ children }: RootLayoutProps) => <>{children}</>;

export default PageRouteLayout;
