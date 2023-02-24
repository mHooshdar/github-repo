import { memo, useEffect, useState } from 'react';
// * icons
import Moon from '@icons/moon';
import Sun from '@icons/sun';

function Header() {
  const [isDark, setIsDark] = useState(false);

  function setDark() {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
    setIsDark(true);
  }
  function setLight() {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
    setIsDark(false);
  }

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (localStorage.theme !== 'light' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setDark();
    }
  }, []);

  return (
    <>
      <header className="flex items-center">
        <h1 className="flex font-bold text-4xl mb-3 dark:text-gray-100">
          GitHub Repositories
        </h1>
        <button
          id="theme-toggle"
          type="button"
          onClick={isDark ? setLight : setDark}
          className="ml-auto text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
        >
          {isDark ? <Sun /> : <Moon />}
        </button>
      </header>
      <h2 className="font-bold text-2xl mb-3 dark:text-gray-100">
        List of repositories
      </h2>
    </>
  );
}

export default memo(Header);
