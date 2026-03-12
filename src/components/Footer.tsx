/**
 * @copyright 2026 codewithsadee
 * @license Apache-2.0
 */

/**
 * Constants
 */
import { FOOTER_LINKS } from '@/constants';

export const Footer = () => {
  return (
    <footer className='text-center text-[14px] border-t border-outline-variant pt-8 flex flex-col justify-between items-center gap-4 sm:flex-row'>
      <p>&copy; 2026 codewithsadee</p>

      <div className='flex gap-6'>
        {FOOTER_LINKS.map(({ url, label }, index) => (
          <a
            key={index}
            href={url}
            className='text-sm font-medium text-on-surface-variant hover:text-primary hover:underline'
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
};
