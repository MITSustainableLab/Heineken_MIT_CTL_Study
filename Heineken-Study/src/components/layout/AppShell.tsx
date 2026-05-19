import { ReactNode } from 'react';

interface AppShellProps {
  children: ReactNode;
}

const AppShell = ({ children }: AppShellProps) => (
  <div className="min-h-screen bg-slate-100">
    <div className="mx-auto px-4 pb-24 pt-10 sm:px-8 lg:px-12">
      {children}
    </div>
  </div>
);

export default AppShell;
