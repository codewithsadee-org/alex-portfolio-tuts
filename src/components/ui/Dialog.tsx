/**
 * @copyright 2026 codewithsadee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { motion, stagger } from 'motion/react';

/**
 * Custom modules
 */
import { cn } from '@/lib/utils';

/**
 * Components
 */
import { Button } from '@/components/ui/Button';
import { AnimatePresence } from 'motion/react';

/**
 * Assets
 */
import { XIcon } from 'lucide-react';

/**
 * Types
 */
import type { HTMLMotionProps, Variants } from 'motion/react';
type DialogProps = { open: boolean; onOpen: () => void };

/**
 * Motion variants
 */
const dialogVariants = {
  open: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delayChildren: stagger(0.05, { startDelay: 0.2 }) },
  },
  close: {
    opacity: 0,
    scale: 0.85,
    y: 20,
  },
} satisfies Variants;

export const Dialog = ({
  children,
  className,
  open,
  onOpen,
  ...props
}: HTMLMotionProps<'div'> & DialogProps) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className={cn(
              'fixed top-1/2 left-1/2 -translate-1/2 z-50 bg-background rounded-3xl max-w-md w-full p-8 shadow-2xl',
              className,
            )}
            variants={dialogVariants}
            initial='close'
            animate='open'
            exit='close'
            {...props}
          >
            {children}
          </motion.div>

          <motion.div
            className='fixed inset-0 bg-scrim/50 backdrop-blur-sm z-40'
            onClick={onOpen}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          ></motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export const DialogHeader = ({
  children,
  onOpen,
}: React.PropsWithChildren & { onOpen: () => void }) => {
  return (
    <div className='flex justify-between items-center mb-6'>
      {children}

      <Button
        variant='ghost'
        size='iconSmall'
        onClick={onOpen}
        aria-label='Close dialog'
      >
        <XIcon />
      </Button>
    </div>
  );
};

export const DialogTitle = ({ children }: React.PropsWithChildren) => {
  return <h2 className='text-3xl font-bold text-on-surface'>{children}</h2>;
};

export const DialogContent = ({
  className,
  children,
  ...props
}: React.ComponentProps<'div'>) => {
  return (
    <div
      className={cn(className)}
      {...props}
    >
      {children}
    </div>
  );
};
