/**
 * @copyright 2026 codewithsadee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { cva } from 'class-variance-authority';

/**
 * Custom modules
 */
import { cn } from '@/lib/utils';

/**
 * Components
 */
import { Slot } from '@radix-ui/react-slot';

/**
 * Types
 */
import type { VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer font-medium rounded-2xl transition-all [&_svg]:size-5',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-on-primary shadow-lg disabled:bg-on-surface/10 disabled:text-on-surface/[0.38] disabled:shadow-none disabled:pointer-events-none hover:opacity-90',
        secondary:
          'bg-secondary-container text-on-secondary-container hover:opacity-90',
        ghost: 'text-on-surface-variant hover:bg-on-surface-variant/10',
      },
      size: {
        default: 'h-14 px-4',
        icon: 'size-14',
        iconSmall: 'size-10 rounded-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export const Button = ({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};
