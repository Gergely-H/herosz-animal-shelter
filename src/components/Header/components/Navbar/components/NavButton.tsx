import Link from 'next/link';

type NavButton = {
  label: string;
};

/*
 * TODO: href/path != label
 * TODO: deploy to check design on mobile
 */
export const NavButton = ({ label }: NavButton) => (
  <Link className='m-3 block w-auto rounded-xl bg-gray-200 px-2 py-1' href='/'>
    {label}
  </Link>
);
