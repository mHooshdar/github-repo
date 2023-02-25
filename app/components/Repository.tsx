import React from 'react';
import cn from 'classnames';
import { RepositoryItem } from '../types';

interface Props {
  repo: RepositoryItem;
  className?: string;
}
function Repository({ repo, className }: Props) {
  function formatLink(url: string) {
    return url.split('/').slice(-2).join('/').replace('.git', '');
  }

  function formatDate(date: Date) {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    });
  }

  return (
    <div
      className={cn(
        className,
        'dark:bg-slate-800 bg-slate-100 rounded p-3 shadow-md'
      )}
    >
      <a
        className="dark:text-blue-400 text-blue-500 font-bold mb-1 block"
        href={repo.git_url}
        target="_blank"
        rel="noreferrer"
      >
        {formatLink(repo.git_url)}
      </a>
      <div className="dark:text-white text-sm mb-2">{repo.description}</div>
      {repo.topics && repo.topics.length ? (
        <div className="flex gap-x-1 flex-wrap">
          {(repo.topics ?? []).map((topic, i) => (
            <a
              href={`https://github.com/topics/${topic}`}
              key={i}
              target="_blank"
              className="transition mb-2 rounded-full px-3 py-1 text-xs
              dark:hover:bg-blue-600 dark:bg-blue-800 dark:text-blue-200 hover:bg-blue-300 bg-blue-200 text-blue-700"
              rel="noreferrer"
            >
              {topic}
            </a>
          ))}
        </div>
      ) : null}
      <div className="flex md:gap-x-4 gap-x-2 flex-wrap dark:text-gray-400 text-gray-500 text-xs">
        <a
          href={repo.stargazers_url}
          className="hover:text-blue-300"
          target="_blank"
          rel="noreferrer"
        >
          Stars: {Number(repo.stargazers_count).toLocaleString()}
        </a>
        <span>Forks: {Number(repo.forks_count).toLocaleString()}</span>
        <span>{repo.language}</span>
        {repo.license && <span>{repo.license?.spdx_id} license</span>}
        <span>
          Updated on &nbsp;
          {formatDate(repo.updated_at)}
        </span>
      </div>
    </div>
  );
}

export default Repository;
