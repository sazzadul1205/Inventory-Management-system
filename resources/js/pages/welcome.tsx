import { Head} from '@inertiajs/react';

// eslint-disable-next-line no-empty-pattern
export default function Welcome({}: { canRegister?: boolean }) {

    return (
        <Head title="Welcome">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
    );
}
