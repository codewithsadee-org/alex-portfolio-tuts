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
import { BriefcaseIcon, TrendingUpIcon } from 'lucide-react';

/**
 * Constants
 */
import { EXPERIENCES } from '@/constants';

export const Experience = () => {
  return (
    <Card className='bg-surface-container md:col-span-2'>
      <CardTitle className='flex items-center gap-2 mb-6'>
        <BriefcaseIcon size={20} />

        <h2 className='font-bold text-xl text-on-surface'>Experience</h2>
      </CardTitle>

      <ol className='space-y-5'>
        {EXPERIENCES.map(
          (
            { joinDate, resignDate, position, company, achievements, skills },
            index,
          ) => (
            <li
              key={index}
              className='px-7 text-on-surface-variant relative before:absolute before:left-0 before:top-0 before:bg-primary before:size-4 before:rounded-full after:absolute after:left-1.75 after:top-0 after:bg-primary/15 after:w-0.5 after:h-full'
            >
              <p className='text-xs font-bold text-primary mb-2'>
                {joinDate} - {!resignDate ? 'Present' : resignDate}
              </p>

              <h3 className='font-bold text-on-surface mb-2'>{position}</h3>

              <p className='text-sm'>{company}</p>

              <ul className='mt-2'>
                {achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className='flex items-start gap-2 text-xs mt-1'
                  >
                    <TrendingUpIcon
                      size={12}
                      className='shrink-0 text-primary mt-0.5'
                    />

                    {achievement}
                  </li>
                ))}
              </ul>

              <div className='flex items-center gap-1 mt-2'>
                {skills.map((skill, index) => (
                  <span
                    className='block px-2 py-0.5 text-[10px] font-medium tracking-[0.1px] bg-primary-container text-on-primary-container rounded-2xl'
                    key={index}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </li>
          ),
        )}
      </ol>
    </Card>
  );
};
