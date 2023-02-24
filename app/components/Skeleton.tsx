import cn from 'classnames';

interface SkeletonProps {
  width: string;
  height: string;
  className?: string;
}

export default function Skeleton({
  width,
  height,
  className = '',
}: SkeletonProps) {
  return (
    <div
      data-testid="skeleton"
      className={cn(
        className,
        'animate-pulse bg-gray-200 dark:bg-gray-600 rounded-lg'
      )}
      style={{ width, height }}
    />
  );
}
