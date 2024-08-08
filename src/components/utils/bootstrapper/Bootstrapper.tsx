import '@/styles/globals.css';
import type { ReactNode } from 'react';

type BootstrapperProps = {
  children: ReactNode;
};

export const Bootstrapper = ({ children }: BootstrapperProps) => (
  <>{children}</>
);
