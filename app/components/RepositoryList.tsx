import { memo } from 'react';
// * components
import Skeleton from './Skeleton';
import Repository from './Repository';
import { RepositoryDTO } from '../types';

interface Props {
  isLoading: boolean;
  data?: RepositoryDTO;
}

function RepositoryList({ data, isLoading }: Props) {
  if (isLoading) {
    return <Skeleton width="300px" height="300px" />;
  }

  return (
    <div>
      {data?.items.length ? (
        data?.items.map(repo => (
          <Repository key={repo.id} repo={repo} className="mb-4" />
        ))
      ) : (
        <span className="dark:text-gray-300">Not found</span>
      )}
    </div>
  );
}

export default memo(RepositoryList);
