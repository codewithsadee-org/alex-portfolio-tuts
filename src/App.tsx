/**
 * @copyright 2026 codewithsadee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { motion } from 'motion/react';

/**
 * Custom modules
 */
import { cn } from '@/lib/utils';

/**
 * Hooks
 */
import { useEffect, useState } from 'react';

/**
 * Components
 */
import { Header } from '@/components/Header';
import { Profile } from '@/components/Profile';
import { FeaturedProject } from '@/components/FeaturedProject';
import { Experience } from '@/components/Experience';
import { Education } from '@/components/Education';
import { TechStack } from '@/components/TechStack';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/Button';

/**
 * Assets
 */
import { SunIcon, MoonIcon } from 'lucide-react';

export const App = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
  }, [isDark]);

  return (
    <div className='min-h-screen bg-background text-on-background font-sans p-4 selection:bg-primary-container selection:text-on-primary-container md:p-8 lg:p-12'>
      <div className='max-w-7xl mx-auto flex flex-col gap-12'>
        <Header />

        <motion.main
          className='grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-6'
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <Profile />

          <FeaturedProject />

          <Experience />

          <Education />

          <TechStack />
        </motion.main>

        <Footer />

        <Button
          size='iconSmall'
          className='fixed top-6 right-6 z-30 [&_svg]:transition-all [&_svg]:duration-250 *:absolute *:top-1/2 *:left-1/2 *:-translate-1/2'
          onClick={() => setIsDark((prev) => !prev)}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <SunIcon
            className={cn(
              'opacity-0 rotate-0',
              isDark && 'opacity-100 rotate-180',
            )}
          />
          <MoonIcon
            className={cn(
              'opacity-0 rotate-180',
              !isDark && 'opacity-100 rotate-0',
            )}
          />
        </Button>
      </div>
    </div>
  );
};

export default App;
