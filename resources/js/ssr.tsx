// Ssr.tsx

// React
import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';

// Helpers
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import ReactDOMServer from 'react-dom/server';

// App name from environment variable or fallback
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// Glob all page files (TSX and JSX)
const pageFiles = import.meta.glob('./pages/**/*.{tsx,jsx}');

/**
 * Resolves a page component dynamically.
 * It prioritizes .tsx files, then falls back to .jsx.
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

    // Throw an error if the page is not found
    if (!pagePath) {
        throw new Error(`Page not found: ${tsxPath} or ${jsxPath}`);
    }

    // Resolve the page component
    return resolvePageComponent(pagePath, pageFiles);
};

// Create a server-side renderer for Inertia
createServer((page) =>
    createInertiaApp({
        page, // SSR page object
        render: ReactDOMServer.renderToString, // Server render method
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        title: (title) => (title ? `${title} - ${appName}` : appName), // Page title
        resolve: resolvePage, // Page resolver
        setup: ({ App, props }) => {
            // Return the root component for SSR
            return <App {...props} />;
        },
    }),
);
