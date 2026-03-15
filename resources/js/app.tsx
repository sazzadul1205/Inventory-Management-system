// App.tsx

// React
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';

// Styles
import '../css/app.css';

// Helpers
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

// Hooks
import { initializeTheme } from '@/hooks/use-appearance';

// App name from environment variable or fallback
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// Import all page files in the pages folder (TSX and JSX)
const pageFiles = import.meta.glob('./pages/**/*.{tsx,jsx}');

/**
 * Resolves an Inertia page component dynamically.
 * It checks for a .tsx file first, then .jsx.
 */
const resolvePage = (name: string) => {
    const tsxPath = `./pages/${name}.tsx`;
    const jsxPath = `./pages/${name}.jsx`;

    // Determine which file exists
    const pagePath = pageFiles[tsxPath]
        ? tsxPath
        : pageFiles[jsxPath]
          ? jsxPath
          : null;

    if (!pagePath) {
        throw new Error(`Page not found: ${tsxPath} or ${jsxPath}`);
    }

    return resolvePageComponent(pagePath, pageFiles);
};

// Initialize Inertia app
createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: resolvePage,
    setup({ el, App, props }) {
        // Create React root
        const root = createRoot(el);

        // Render the Inertia App inside StrictMode
        root.render(
            <StrictMode>
                <App {...props} />
            </StrictMode>,
        );
    },
    // Progress bar color while navigating between pages
    progress: {
        color: '#4B5563',
    },
});

// Initialize light/dark mode preference on page load
initializeTheme();
