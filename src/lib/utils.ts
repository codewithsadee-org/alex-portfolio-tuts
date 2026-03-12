/**
 * @copyright 2026 codewithsadee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Types
 */
import type { ClassValue } from 'clsx';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
