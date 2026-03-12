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
import { GraduationCapIcon } from 'lucide-react';

/**
 * Constants
 */
import { EDUCATIONS } from '@/constants';

export const Education = () => {
  return (
    <Card className='bg-surface-container-low flex flex-col gap-6 md:col-span-2'>
      <CardTitle className='flex items-center gap-2 mb-auto'>
        <GraduationCapIcon
          size={20}
          className='text-on-surface'
        />

        <h2 className='font-bold text-xl text-on-surface'>Academic Path</h2>
      </CardTitle>

      <ol className='flex flex-col gap-2'>
        {EDUCATIONS.map(
          ({ Icon, title, academy, certificate, year, skills }, index) => (
            <li
              className='flex items-start gap-3'
              key={index}
            >
              <div className='size-10 bg-primary-container grid place-content-center rounded-2xl text-on-primary-container'>
                <Icon size={20} />
              </div>

              <div className='space-y-1'>
                <h3 className='font-bold text-sm text-on-surface'>{title}</h3>

                <p className='text-xs text-on-surface-variant/80'>
                  {certificate} • {year}
                </p>

                <p className='text-xs text-on-surface-variant/80'>{academy}</p>

                <ul className='flex flex-wrap gap-1 mt-2'>
                  {skills.map((skill, index) => (
                    <li
                      className='text-[10px] font-medium tracking-[0.1px] border border-outline-variant/60 py-0.5 px-2 rounded-2xl'
                      key={index}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ),
        )}
      </ol>
    </Card>
  );
};
