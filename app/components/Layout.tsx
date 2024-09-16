import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="container mx-auto px-4">
      <header className="py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">HYDROGEN</h1>
        <nav>
          <button className="text-xl">MENU</button>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;