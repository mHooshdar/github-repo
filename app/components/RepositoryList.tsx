import { useGetRepositories } from '@hooks/useGetRepositories';
import { memo } from 'react';
// * components
import Skeleton from './Skeleton';

interface Props {
  query: string;
}

function RepositoryList({ query }: Props) {
  const { isLoading } = useGetRepositories({ q: query });

  return (
    <div>{isLoading ? <Skeleton width="300px" height="300px" /> : 'dataa'}</div>
  );
}

export default memo(RepositoryList);
