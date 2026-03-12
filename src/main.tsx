/**
 * @copyright 2026 codewithsadee
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

/**
 * Assets
 */
import '@/index.css';

/**
 * Components
 */
import { App } from '@/App';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />

    <SpeedInsights />
    <Analytics />
  </StrictMode>,
);
