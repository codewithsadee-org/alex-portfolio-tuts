/**
 * @copyright 2026 codewithsadee
 * @license Apache-2.0
 */

/**
 * Components
 */
import { Card, CardTitle } from '@/components/ui/Card';

/**
 * Assets
 */
import { CodeIcon } from 'lucide-react';

/**
 * Constants
 */
import { TECH_STACKS } from '@/constants';

export const TechStack = () => {
  return (
    <Card className='bg-primary text-on-primary flex flex-col gap-4 md:col-span-2'>
      <CardTitle className='flex items-center gap-2'>
        <CodeIcon size={20} />

        <h2 className='text-xl font-bold'>Modern Stack</h2>
      </CardTitle>

      <ul className='grid grid-cols-3 gap-3 my-auto'>
        {TECH_STACKS.map(({ name, Icon }) => (
          <li
            key={name}
            className='aspect-square flex flex-col gap-1 justify-center items-center bg-background/10 rounded-2xl hover:bg-background/20 transition-colors'
          >
            <Icon className='block size-8' />

            <h3 className='text-[10px] text-white text-center'>{name}</h3>
          </li>
        ))}
      </ul>

      <div className='h-px bg-outline-variant/20'></div>

      <p className='text-xs text-center text-on-primary/80'>
        Constantly evolving. Currently exploring WebAssembly and Rust.
      </p>
    </Card>
  );
};
