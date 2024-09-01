import { Header } from '@/components/layout/header/Header';
import { Bootstrapper } from '@/components/utils/bootstrapper/Bootstrapper';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

const META_TITLE = 'Herosz Budapesti Állatotthon';

// TODO: extract to separate metadata file/folder
export const metadata: Metadata = {
  title: {
    default: META_TITLE,
    template: `%s - ${META_TITLE}`,
  },
  description:
    'Herosz Budapesti Állatotthon - Herman Ottó Magyar Országos Állat- és Természetvédő Egyesület budapesti állatotthona',

  /**
   * This metadata is needed to avoid 403 response when fetching images of Google Docs.
   * Source: https://stackoverflow.com/a/74495028
   * The application no longer fetches images from Google Docs but keeping this here.
   */
  referrer: 'no-referrer',
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => (
  <html>
    <Bootstrapper>
      {/* <body className={`${inter.className} overflow-y-scroll`}> // TODO: why was this of-y-s here? */}
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </Bootstrapper>
  </html>
);

export default RootLayout;
