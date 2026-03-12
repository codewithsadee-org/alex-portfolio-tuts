/**
 * @copyright 2026 codewithsadee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { motion } from 'motion/react';

/**
 * Assets
 */
import { ExternalLinkIcon } from 'lucide-react';

/**
 * Types
 */
import type { Project } from '@/types';
import type { HTMLMotionProps, Variants } from 'motion/react';

/**
 * Motion variants
 */
const cardVariants = {
  open: { opacity: 1, y: 0 },
  close: { opacity: 0, y: 20 },
} satisfies Variants;

export const ProjectCardSm = ({
  project,
  ...props
}: React.ComponentProps<'div'> & {
  project: Project;
}) => {
  const { Icon, bg, title, desc, projectUrl } = project;

  return (
    <div
      className='relative flex items-center gap-4 bg-surface-container-low/70 p-3 not-last:mb-4 rounded-2xl transition-colors hover:bg-surface-container-low group'
      {...props}
    >
      <div
        className='size-12 shrink-0 grid place-items-center rounded-2xl'
        style={{ backgroundColor: bg }}
      >
        <Icon
          size={20}
          className='text-black/70'
        />
      </div>

      <div>
        <h3 className='text-[16px] font-bold text-on-surface-variant flex items-center gap-2'>
          {title}

          <ExternalLinkIcon
            size={12}
            className='opacity-0 transition group-hover:opacity-100'
          />
        </h3>

        <p className='font-normal text-on-surface-variant/80 text-xs line-clamp-1'>
          {desc}
        </p>
      </div>

      <a
        href={projectUrl}
        className='absolute inset-0'
        aria-label={title}
      ></a>
    </div>
  );
};

export const ProjectCardLg = ({
  project,
  ...props
}: HTMLMotionProps<'div'> & {
  project: Project;
}) => {
  const { Icon, bg, title, desc, projectUrl, techStacks } = project;

  return (
    <motion.div
      className='relative group flex flex-col justify-between gap-4 p-6 rounded-2xl bg-surface-container-high hover:bg-surface-container-highest transition-colors cursor-pointer'
      variants={cardVariants}
      {...props}
    >
      <div className='flex items-start gap-4'>
        <div
          className='size-14 rounded-xl flex items-center justify-center shrink-0'
          style={{ backgroundColor: bg }}
        >
          <Icon
            size={20}
            className='text-black/70'
          />
        </div>

        <div className='flex-1'>
          <h3 className='font-bold text-lg flex items-center gap-2 mb-1 text-on-surface'>
            {title}

            <ExternalLinkIcon
              size={16}
              className='opacity-0 transition-opacity group-hover:opacity-100'
            />
          </h3>

          <p className='text-sm mb-3 text-on-surface-variant/70'>{desc}</p>
        </div>
      </div>

      <ul className='flex flex-wrap gap-2'>
        {techStacks.map((techStack) => (
          <li className='px-2 py-1 border border-outline-variant text-on-surface-variant text-xs font-medium tracking-[0.1px] rounded-lg'>
            {techStack}
          </li>
        ))}
      </ul>

      <a
        href={projectUrl}
        className='absolute inset-0'
        aria-label={title}
      ></a>
    </motion.div>
  );
};
