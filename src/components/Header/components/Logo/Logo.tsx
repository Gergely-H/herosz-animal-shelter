import { Image } from '@/components/common/Image/Image';
import Link from 'next/link';

export const Logo = () => (
  // TODO: the link is too wide. solve it by using flex grow for middle element which will be the title of the page + phone + bp herman etc. otthon
  <div className='size-full'>
    <Link className='relative block size-full' href='/'>
      <Image
        alt='Herosz Budapest Logo'
        className='absolute !left-0 !top-2/4 !w-auto -translate-y-2/4 object-contain pb-1'
        fill
        priority
        src='/herosz-budapest-logo.png'
      />
    </Link>
  </div>
);
