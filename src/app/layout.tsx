import { Header } from '@/components/Header/Header';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

const META_TITLE = 'Herosz Budapesti Állatotthon';

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

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang='en'>
    {/* <body className={`${inter.className} overflow-y-scroll`}> */}
    <body className={inter.className}>
      <Header />
      {children}
    </body>
  </html>
);

export default RootLayout;
