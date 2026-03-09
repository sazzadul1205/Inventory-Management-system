export const Configuration = {
    // Default hero section if page mapping not found
    activeSection: '1',

    // Available hero sections
    sections: {
        1: {
            enabled: true,
            props: {},
        },
        2: {
            enabled: true,
            props: {},
        },
        3: {
            enabled: true,
            props: {},
        },
    },

    // Page → Hero Section Mapping
    pageMappings: {
        home: '1',
        about: '1',
        services: '2',
        contact: '3',
        blog: 'none',
    },

    // Optional A/B Testing
    abTesting: {
        enabled: false,
        variants: ['1', '2', '3'],
        distribution: [33, 33, 34],
    },
};
