'use client';

import { useState } from 'react';
import { Raleway } from '@next/font/google';
import cn from 'classnames';

// * components
import { useGetRepositories } from '@hooks/useGetRepositories';
// * hooks
import Header from './components/Header';

const font = Raleway({ subsets: ['latin'] });

export default function Home() {
  const [state] = useState({ q: 'hello' });
  const { isLoading } = useGetRepositories(state);

  return (
    <div className={cn(font.className, 'p-4')}>
      <Header />
      {isLoading}
    </div>
  );
}
