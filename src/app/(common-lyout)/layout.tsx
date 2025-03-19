
import NavBar from '@/components/shared/NavBar/NavBar';
import React from 'react';

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
      return (
            <div>
                  <NavBar />
                  <main className=''>{children}</main>
            </div>
      );
};

export default CommonLayout;