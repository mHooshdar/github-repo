import React from 'react';
import cn from 'classnames';
import Skeleton from './Skeleton';

interface Props {
  className?: string;
}
function RepositoryItemSkeleton({ className }: Props) {
  return (
    <div
      className={cn(
        className,
        'dark:bg-slate-800 bg-slate-100 rounded p-3 shadow-md'
      )}
    >
      <Skeleton width="200px" height="24px" className="mb-2" />
      <Skeleton width="60%" height="20px" className="mb-1" />
      <Skeleton width="70%" height="20px" className="mb-1" />
      <Skeleton width="80%" height="20px" className="mb-3" />
      <div className="flex gap-2  flex-wrap mb-3">
        <Skeleton className="rounded-full" width="100px" height="28px" />
        <Skeleton className="rounded-full" width="100px" height="28px" />
        <Skeleton className="rounded-full" width="100px" height="28px" />
        <Skeleton className="rounded-full" width="100px" height="28px" />
        <Skeleton className="rounded-full" width="100px" height="28px" />
        <Skeleton className="rounded-full" width="100px" height="28px" />
      </div>
      <Skeleton width="100%" height="20px" />
    </div>
  );
}

export default RepositoryItemSkeleton;
