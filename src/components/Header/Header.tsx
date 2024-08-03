'use client';

import { useEffect, useState } from 'react';
import { HamburgerButton } from './components/HamburgerButton/HamburgerButton';
import { Logo } from './components/Logo/Logo';
import { Navbar } from './components/Navbar/Navbar';

const SCROLL_EVENT = 'scroll';
const ZERO_Y_SCROLL = 0;

export const Header = () => {
  // TODO: extract logic
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const onScroll = () => setIsScrolled(window.scrollY > ZERO_Y_SCROLL);

  useEffect(() => {
    onScroll();

    window.removeEventListener(SCROLL_EVENT, onScroll);
    // eslint-disable-next-line @typescript-eslint/naming-convention -- This rule is intended for project code, not for libraries or built in APIs.
    window.addEventListener(SCROLL_EVENT, onScroll, { passive: true });

    return () => window.removeEventListener(SCROLL_EVENT, onScroll);
  }, []);

  // TODO: https://www.herosz.hu/budapestiallatotthon/ copy header: name, phone etc

  return (
    <>
      <header
        className={`
          fixed left-0 top-0 z-20 flex w-full items-center bg-white px-8
          [transition:height_300ms,border_150ms,box-shadow_150ms]
        ${
          isScrolled
            ? 'h-20 border-b border-neutral-400 shadow-[0_5px_10px_rgba(0,0,0,0.3)]'
            : 'h-40'
        }`}
      >
        <Logo />
        <HamburgerButton
          isOpen={isOpen}
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        />
        <Navbar isOpen={isOpen} />
      </header>
      <div className='h-40' />
    </>
  );
};
