'use client';

import {
  ChangeEvent,
  Suspense,
  useCallback,
  useDeferredValue,
  useEffect,
  useId,
  useState,
} from 'react';
import { Ubuntu } from 'next/font/google';
import cn from 'classnames';
import debounce from 'lodash/debounce';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

// * components
import Header from './components/Header';
import Skeleton from './components/Skeleton';
import RepositoryList from './components/RepositoryList';
import { useGetRepositories } from './hooks/useGetRepositories';

const font = Ubuntu({ subsets: ['latin'], weight: ['400', '700'] });

function HomePage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const deferredQuery = useDeferredValue(query);
  const inputId = useId();
  const { data, isLoading } = useGetRepositories({
    q: query,
    page: searchParams.get('page') || 1,
    per_page: 10,
  });

  const debouncedChangeHandler = useCallback(
    debounce((event: ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value);
      // should reset to page 1
      router.push(
        `${pathName}?${new URLSearchParams(
          event.target.value ? { q: event.target.value } : {}
        ).toString()}`
      );
    }, 300),
    [pathName]
  );

  useEffect(() => {
    return () => {
      debouncedChangeHandler.cancel();
    };
  }, [debouncedChangeHandler]);

  return (
    <div className={cn(font.className, 'p-4')}>
      <Header />
      <label
        className="block dark:text-gray-100 text-gray-800 text-sm self-center mb-6"
        htmlFor={inputId}
      >
        <span className="mb-2 block font-bold">Repo</span>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3
            text-gray-700 leading-tight font-normal
            focus:outline-none focus:shadow-outline
            dark:bg-slate-700 dark:border-gray-600 dark:text-gray-100"
          id={inputId}
          type="text"
          defaultValue={query}
          onChange={debouncedChangeHandler}
        />
      </label>
      <Suspense fallback={<Skeleton width="200px" height="200px" />}>
        {deferredQuery ? (
          <RepositoryList
            isLoading={isLoading}
            data={data?.data}
            totalCount={data?.data.total_count ?? 0}
          />
        ) : (
          <p className="dark:text-red-400 text-red-500 text-sm italic">
            Please type a repository.
          </p>
        )}
      </Suspense>
    </div>
  );
}

export default HomePage;
