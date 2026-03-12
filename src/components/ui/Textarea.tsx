/**
 * @copyright 2026 codewithsadee
 * @license Apache-2.0
 */

/**
 * Custom modules
 */
import { cn } from '@/lib/utils';

export const Textarea = ({
  className,
  ...props
}: React.ComponentProps<'textarea'>) => {
  return (
    <textarea
      className={cn(
        'w-full px-4 py-3 rounded-2xl bg-surface-container-high text-on-surface border-2 border-transparent focus:border-primary focus:outline-none transition-colors resize-none',
        className,
      )}
      rows={5}
      {...props}
    ></textarea>
  );
};
