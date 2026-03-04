import { createInertiaApp } from '@inertiajs/react';
import createServer from '@inertiajs/react/server';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import ReactDOMServer from 'react-dom/server';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
const pageFiles = import.meta.glob('./pages/**/*.{tsx,jsx}');

const resolvePage = (name: string) => {
    const tsxPath = `./pages/${name}.tsx`;
    const jsxPath = `./pages/${name}.jsx`;
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

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        title: (title) => (title ? `${title} - ${appName}` : appName),
        resolve: resolvePage,
        setup: ({ App, props }) => {
            return <App {...props} />;
        },
    }),
);
