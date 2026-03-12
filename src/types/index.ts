/**
 * @copyright 2026 codewithsadee
 * @license Apache-2.0
 */

/**
 * Types
 */
import type { LucideIcon } from 'lucide-react';

export interface Project {
  Icon: LucideIcon;
  bg: string;
  title: string;
  desc: string;
  techStacks: string[];
  projectUrl: string;
}
