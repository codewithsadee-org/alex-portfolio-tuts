/**
 * @copyright 2026 codewithsadee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import emailjs from '@emailjs/browser';

/**
 * Custom modules
 */
import { cn } from '@/lib/utils';

/**
 * Hooks
 */
import { useRef, useState, useCallback, useMemo } from 'react';

/**
 * Components
 */
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
} from '@/components/ui/Dialog';
import { Label } from '@/components/ui/Label';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Button } from '@/components/ui/Button';

/**
 * Assets
 */
import {
  SendIcon,
  Loader2Icon,
  CheckIcon,
  CircleAlertIcon,
} from 'lucide-react';

/**
 * Types
 */
import type { SubmitEventHandler } from 'react';
type FormState = 'idle' | 'submitting' | 'success' | 'failed';
type ContactDialogProps = { open: boolean; onOpen: () => void };

export const ContactDialog = ({ open, onOpen }: ContactDialogProps) => {
  const form = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState<FormState>('idle');

  const sendEmail: SubmitEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault();

      if (!form.current) return;
      setFormState('submitting');

      try {
        await emailjs.sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          {
            publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          },
        );

        setFormState('success');
      } catch (err) {
        setFormState('failed');
        console.log(err);
      } finally {
        setTimeout(() => {
          setFormState('idle');
          onOpen();
        }, 1000);
      }
    },
    [form.current],
  );

  const formStateIcon = useMemo(
    () => ({
      idle: <SendIcon />,
      submitting: <Loader2Icon className='animate-spin' />,
      success: <CheckIcon />,
      failed: <CircleAlertIcon />,
    }),
    [],
  );

  const formStateLabel = useMemo(
    () => ({
      idle: 'Send Message',
      submitting: 'Submitting...',
      success: 'Success',
      failed: 'Something went wrong',
    }),
    [],
  );

  return (
    <Dialog
      open={open}
      onOpen={onOpen}
    >
      <DialogHeader onOpen={onOpen}>
        <DialogTitle>Let's Connect</DialogTitle>
      </DialogHeader>

      <DialogContent>
        <form
          ref={form}
          onSubmit={sendEmail}
          className='space-y-4'
        >
          <div className='space-y-2'>
            <Label htmlFor='name'>Name</Label>

            <Input
              id='name'
              type='text'
              name='name'
              placeholder='You name'
              required
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='email'>Email</Label>

            <Input
              id='email'
              type='email'
              name='email'
              placeholder='john@example.com'
              required
            />
          </div>

          <div className='space-y-2'>
            <Label htmlFor='message'>Message</Label>

            <Textarea
              name='message'
              id='message'
              placeholder='Tell me about your project...'
              required
            />
          </div>

          <Button
            className={cn(
              'w-full',
              formState === 'failed' && 'bg-error text-on-error',
            )}
            disabled={formState === 'submitting'}
          >
            {formStateIcon[formState]}

            {formStateLabel[formState]}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
