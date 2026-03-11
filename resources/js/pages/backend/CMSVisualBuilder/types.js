/**
 * CMS Builder Type Definitions
 */

// Component definition in palette
export const ComponentType = {
    // Layout
    SECTION: 'CMS_Section',
    CONTAINER: 'CMS_Container',
    GRID: 'CMS_Grid',
    FLEX: 'CMS_Flex',
    CARD: 'CMS_Card',
    DIVIDER: 'CMS_Divider',
    DIVIDER_TEXT: 'CMS_DividerWithText',
    DIVIDER_ICON: 'CMS_DividerWithIcon',
    VERTICAL_DIVIDER: 'CMS_VerticalDivider',
    GRADIENT_DIVIDER: 'CMS_GradientDivider',
    DASHED_DIVIDER: 'CMS_DashedDivider',
    LIST: 'CMS_List',
    ICON_LIST: 'CMS_IconList',

    // Typography
    TITLE: 'CMS_Title',
    TEXT: 'CMS_Text',

    // Interactive
    BUTTON: 'CMS_Button',
    BADGE: 'CMS_Badge',

    // Media
    MEDIA: 'CMS_Media',

    // Data
    TABLE: 'CMS_Table',

    // Forms
    INPUT: 'CMS_Input',
    TEXTAREA: 'CMS_Textarea',
    INPUT_GROUP: 'CMS_InputGroup',
    INPUT_ADDON: 'CMS_InputAddon',
};

// Breakpoint sizes with nicer icons for visual builder
export const Breakpoints = {
    MOBILE: {
        width: 375,
        height: 667,
        icon: '📱',
        label: 'Mobile',
        tailwind: 'sm', // Tailwind breakpoint reference
    },
    TABLET: {
        width: 768,
        height: 1024,
        icon: '📱',
        label: 'Tablet',
        tailwind: 'md',
    },
    DESKTOP: {
        width: '100%',
        height: '100%',
        icon: '💻',
        label: 'Desktop',
        tailwind: 'lg',
    },
};

// Categories with icons for better visual identification
export const Categories = {
    LAYOUT: {
        id: 'layout',
        label: 'Layout',
        icon: '📐',
        color: 'blue',
    },
    TYPOGRAPHY: {
        id: 'typography',
        label: 'Typography',
        icon: '✏️',
        color: 'purple',
    },
    INTERACTIVE: {
        id: 'interactive',
        label: 'Interactive',
        icon: '🖱️',
        color: 'green',
    },
    MEDIA: {
        id: 'media',
        label: 'Media',
        icon: '🎬',
        color: 'orange',
    },
    DATA: {
        id: 'data',
        label: 'Data',
        icon: '📊',
        color: 'red',
    },
    FORMS: {
        id: 'forms',
        label: 'Forms',
        icon: '📝',
        color: 'teal',
    },
};

// Helper to get category by ID
export const getCategoryById = (id) => {
    return Object.values(Categories).find((cat) => cat.id === id);
};

// Helper to get breakpoint by mode
export const getBreakpointByMode = (mode) => {
    const modeUpper = mode.toUpperCase();
    return Breakpoints[modeUpper] || Breakpoints.DESKTOP;
};
