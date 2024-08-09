import type { ReactNode } from 'react';

const pageNames = ['about-us', 'rolunk', 'contact', 'kapcsolat', 'donation', 'adomanyozas', 'volunteering', 'onkenteskedes', 'cats', 'macskak', 'dogs', 'kutyak']

export const generateStaticParams = () =>
pageNames.map((pageName) => ({ pageName }));

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <>
    {children}
  </>
);

export default RootLayout;
