import { NavButton } from './components/NavButton';

type NavbarProps = {
  isOpen: boolean;
};

// TODO: extract paths, add labels, add i18n file
const paths = ['Home', 'Home', 'Home', 'Home', 'Home', 'Home', 'Home', 'Home'];

// TODO: create theme for colors and use that instead of bg-white
export const Navbar = ({ isOpen }: NavbarProps) => (
  <nav
    className={`absolute top-full max-h-max w-1/2 bg-white [transition:right_300ms_ease-in-out]
      ${isOpen ? 'right-0' : '-right-1/2'}`}
  >
    {paths.map((path) => (
      <NavButton key={path} label={path} />
    ))}
  </nav>
);
