// app.tsx

// React Inertia
import { createInertiaApp } from '@inertiajs/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Helpers
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

// React
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Styles
import '../css/app.css';

// Hooks
import { initializeTheme } from '@/hooks/use-appearance';

// Create a client
const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 5 * 60 * 1000, // 5 minutes
            gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
            retry: 1,
            refetchOnWindowFocus: false,
        },
    },
});

// App name from environment variable or fallback
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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
    const pagePath = pageFiles[tsxPath] ? tsxPath : pageFiles[jsxPath] ? jsxPath : null;

    if (!pagePath) {
        throw new Error(`Page not found: ${tsxPath} or ${jsxPath}`);
    }

    return resolvePageComponent(pagePath, pageFiles);
};

// Initialize Inertia app
void createInertiaApp({
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: resolvePage,
    setup({ el, App, props }) {
        // Create React root
        const root = createRoot(el);

        // Render the Inertia App inside StrictMode with QueryClientProvider
        root.render(
            <StrictMode>
                <QueryClientProvider client={queryClient}>
                    <App {...props} />
                </QueryClientProvider>
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
