/**
 * @copyright 2026 codewithsadee
 * @license Apache-2.0
 */

/**
 * Custom modules
 */
import { cn } from '@/lib/utils';

export const Label = ({
  children,
  className,
  ...props
}: React.ComponentProps<'label'>) => {
  return (
    <label
      className={cn(
        'block text-sm font-medium text-on-surface-variant',
        className,
      )}
      {...props}
    >
      {children}
    </label>
  );
};
