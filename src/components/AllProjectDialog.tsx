/**
 * @copyright 2026 codewithsadee
 * @license Apache-2.0
 */

/**
 * Components
 */
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog';
import { ProjectCardLg } from '@/components/ProjectCard';

/**
 * Constants
 */
import { PROJECTS } from '@/constants';

/**
 * Types
 */
type AllProjectDialogProps = { open: boolean; onOpen: () => void };

export const AllProjectDialog = ({ open, onOpen }: AllProjectDialogProps) => {
  return (
    <Dialog
      open={open}
      onOpen={onOpen}
      className='max-w-4xl max-h-[90vh] overflow-y-auto'
    >
      <DialogHeader onOpen={onOpen}>
        <DialogTitle>All Projects</DialogTitle>
      </DialogHeader>

      <DialogContent className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        {PROJECTS.map((project, index) => (
          <ProjectCardLg
            key={index}
            project={project}
          />
        ))}
      </DialogContent>
    </Dialog>
  );
};
