type HamburgerButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export const HamburgerButton = ({ isOpen, onClick }: HamburgerButtonProps) => (
  // TODO: animation is not smooth, X position is different than hamburger
  <button
    className='mx-auto grid size-20 place-content-center p-6'
    onClick={onClick}
    type='button'
  >
    <span
      className={`h-2 w-12 rounded-full bg-black transition-all duration-300
            before:absolute before:-ml-6 before:h-2 before:w-12 before:-translate-y-4 before:rounded-full before:bg-black before:transition-all before:duration-150 before:content-['']
            after:absolute after:-ml-6 after:h-2 after:w-12 after:translate-y-4 after:rounded-full after:bg-black after:transition-all after:duration-150 after:content-['']
        ${isOpen ? 'h-0 bg-white before:translate-y-0 before:rotate-45 after:translate-y-0 after:-rotate-45' : ''}`}
    />
  </button>
);
