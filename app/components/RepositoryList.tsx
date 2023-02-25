import { memo } from 'react';
// * components
import Repository from './Repository';
import Pagination from './Pagination';
import { RepositoryDTO } from '../types';
import RepositoryItemSkeleton from './RepositoryItemSkeleton';

interface Props {
  isLoading: boolean;
  data?: RepositoryDTO;
  totalCount: number;
}

function RepositoryList({ data, isLoading, totalCount }: Props) {
  if (isLoading) {
    return (
      <>
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <RepositoryItemSkeleton key={index} className="mb-2" />
          ))}
      </>
    );
  }

  return (
    <div>
      {data?.items.length ? (
        <>
          {data?.items.map(repo => (
            <Repository key={repo.id} repo={repo} className="mb-4" />
          ))}
          <Pagination pagesCount={totalCount} />
        </>
      ) : (
        <span className="dark:text-gray-300">Not found</span>
      )}
    </div>
  );
}

export default memo(RepositoryList);
