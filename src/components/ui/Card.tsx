/**
 * @copyright 2026 codewithsadee
 * @license Apache-2.0
 */

/**
 * Custom modules
 */
import { cn } from '@/lib/utils';

export const Card = ({ children, className }: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn(
        'rounded-3xl p-6 shadow-sm transition-shadow hover:shadow-md',
        className,
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  ...props
}: React.ComponentProps<'div'>) => {
  return <div {...props}>{children}</div>;
};
