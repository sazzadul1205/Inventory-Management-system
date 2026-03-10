export const Configuration = {
    // Default hero section if page mapping not found
    activeSection: 1,

    // Available hero sections
    sections: {
        1: {
            enabled: true,
        },

        2: {
            enabled: true,
        },

        3: {
            enabled: true,
        },

        custom: {
            enabled: true,
        },
    },

    // Page → Hero Section Mapping
    pageMappings: {
        home: 'custom',
        about: '1',
        services: '2',
        contact: '3',
        blog: 'none',
    },

    // Optional A/B Testing
    abTesting: {
        enabled: false,
        variants: ['1', '2', '3', 'custom'],
        distribution: [25, 25, 25, 25],
    },
};
