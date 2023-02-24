'use client';

import { Suspense, useDeferredValue, useState } from 'react';
import { Raleway } from 'next/font/google';
import cn from 'classnames';

// * components
import Header from './components/Header';
import Skeleton from './components/Skeleton';
import RepositoryList from './components/RepositoryList';

interface Props {
  searchParams: {
    q: string;
  };
}

const font = Raleway({ subsets: ['latin'] });

function HomePage({ searchParams }: Props) {
  const [query, setQuery] = useState(searchParams.q);
  const deferredQuery = useDeferredValue(query);

  return (
    <div className={cn(font.className, 'p-4')}>
      <Header />
      <input value={query} onChange={e => setQuery(e.target.value)} />
      <Suspense fallback={<Skeleton width="200px" height="200px" />}>
        {deferredQuery && <RepositoryList query={deferredQuery} />}
      </Suspense>
    </div>
  );
}

export default HomePage;
