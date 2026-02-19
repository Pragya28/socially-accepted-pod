import { cn } from '@/utils/cn';
import { PropsWithChildren } from 'react';

type ContainerProps = PropsWithChildren<{
  className: string;
}>;

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        'flex flex-col md:flex-row gap-1 items-center justify-center py-5 px-8 md:px-36 lg:px-48',
        className
      )}
    >
      {children}
    </div>
  );
};
