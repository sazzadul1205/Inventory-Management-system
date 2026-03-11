/**
 * Component Palette Configuration
 * Matches your actual CMS components
 */

import { ComponentType, Categories } from './types';

/**
 * Component palette configuration
 * Each component has metadata for the builder UI
 */
export const componentPalette = [
    // ========== LAYOUT COMPONENTS ==========
    {
        type: ComponentType.SECTION,
        category: Categories.LAYOUT,
        icon: '📄',
        label: 'Section',
        description: 'Full section container with background',
        defaultConfig: {
            uid: `section-${Date.now()}`,
            component: ComponentType.SECTION,
            classes: {
                base: 'min-h-screen py-20 px-4 bg-[#FFFFFF]',
                dark: 'dark:bg-[#111827]',
                sm: 'sm:py-12',
                md: 'md:py-16',
                lg: 'lg:py-20',
            },
            fullWidth: true,
            children: [],
        },
    },
    {
        type: ComponentType.CONTAINER,
        category: Categories.LAYOUT,
        icon: '📦',
        label: 'Container',
        description: 'Basic container with spacing',
        defaultConfig: {
            uid: `container-${Date.now()}`,
            component: ComponentType.CONTAINER,
            classes: {
                base: 'max-w-7xl mx-auto p-4 bg-[#FFFFFF]',
                dark: 'dark:bg-[#1F2937]',
                sm: 'sm:p-6',
                md: 'md:p-8',
                lg: 'lg:p-10',
            },
            fullWidth: false,
            children: [],
        },
    },
    {
        type: ComponentType.GRID,
        category: Categories.LAYOUT,
        icon: '🔲',
        label: 'Grid',
        description: 'Responsive grid layout container',
        defaultConfig: {
            uid: `grid-${Date.now()}`,
            component: ComponentType.GRID,
            classes: {
                base: 'grid gap-4 px-4 bg-[#FFFFFF]',
                dark: 'dark:bg-[#1F2937]',
                sm: 'sm:gap-6 sm:px-6',
                md: 'md:grid-cols-2 md:gap-8',
                lg: 'lg:grid-cols-3 lg:gap-10',
            },
            fullWidth: false,
            children: [],
        },
    },
    {
        type: ComponentType.FLEX,
        category: Categories.LAYOUT,
        icon: '➡️',
        label: 'Flex',
        description: 'Flexbox layout container',
        defaultConfig: {
            uid: `flex-${Date.now()}`,
            component: ComponentType.FLEX,
            classes: {
                base: 'flex flex-col items-center gap-4 bg-[#FFFFFF]',
                dark: 'dark:bg-[#1F2937]',
                sm: 'sm:flex-row sm:gap-5',
                md: 'md:gap-6',
                lg: 'lg:gap-8',
            },
            fullWidth: false,
            children: [],
        },
    },
    {
        type: ComponentType.CARD,
        category: Categories.LAYOUT,
        icon: '🃏',
        label: 'Card',
        description: 'Card with header, body, footer sections',
        defaultConfig: {
            uid: `card-${Date.now()}`,
            component: ComponentType.CARD,
            variant: 'elevated',
            size: 'md',
            header: {
                title: 'Card Title',
                subtitle: 'Card subtitle',
            },
            body: {
                text: 'This is the card body content. You can edit this text.',
            },
            footer: {
                text: 'Card footer',
            },
            classes: {
                container: 'max-w-md bg-[#FFFFFF]',
                header: 'font-semibold',
                body: 'text-[#4B5563] dark:text-[#D1D5DB]',
                footer: 'text-sm',
            },
        },
    },
    {
        type: ComponentType.DIVIDER,
        category: Categories.LAYOUT,
        icon: '➖',
        label: 'Divider',
        description: 'Horizontal or vertical line',
        defaultConfig: {
            uid: `divider-${Date.now()}`,
            component: ComponentType.DIVIDER,
            orientation: 'horizontal',
            variant: 'solid',
            thickness: 'thin',
            color: '#D1D5DB',
            darkColor: '#374151',
            classes: {
                line: 'border-[#D1D5DB] dark:border-[#374151]',
            },
        },
    },
    {
        type: ComponentType.DIVIDER_TEXT,
        category: Categories.LAYOUT,
        icon: '🔹',
        label: 'Divider with Text',
        description: 'Divider with centered text',
        defaultConfig: {
            uid: `divider-text-${Date.now()}`,
            component: ComponentType.DIVIDER_TEXT,
            text: 'Section',
            variant: 'solid',
            labelPosition: 'center',
            labelVariant: 'default',
            classes: {
                label: 'text-[#6B7280] dark:text-[#9CA3AF]',
                line: 'border-[#D1D5DB] dark:border-[#374151]',
            },
        },
    },
    {
        type: ComponentType.DIVIDER_ICON,
        category: Categories.LAYOUT,
        icon: '✨',
        label: 'Divider with Icon',
        description: 'Divider with centered icon',
        defaultConfig: {
            uid: `divider-icon-${Date.now()}`,
            component: ComponentType.DIVIDER_ICON,
            icon: 'HiStar',
            iconLibrary: 'hi',
            variant: 'solid',
            classes: {
                label: 'text-[#6B7280] dark:text-[#9CA3AF]',
                line: 'border-[#D1D5DB] dark:border-[#374151]',
            },
        },
    },
    {
        type: ComponentType.VERTICAL_DIVIDER,
        category: Categories.LAYOUT,
        icon: '▏',
        label: 'Vertical Divider',
        description: 'Vertical separating line',
        defaultConfig: {
            uid: `vertical-divider-${Date.now()}`,
            component: ComponentType.VERTICAL_DIVIDER,
            thickness: 'thin',
            color: '#D1D5DB',
            darkColor: '#374151',
            classes: {
                line: 'border-[#D1D5DB] dark:border-[#374151]',
            },
        },
    },
    {
        type: ComponentType.GRADIENT_DIVIDER,
        category: Categories.LAYOUT,
        icon: '🌈',
        label: 'Gradient Divider',
        description: 'Divider with gradient',
        defaultConfig: {
            uid: `gradient-divider-${Date.now()}`,
            component: ComponentType.GRADIENT_DIVIDER,
            variant: 'solid',
            thickness: 'medium',
            color: '#3B82F6',
            darkColor: '#60A5FA',
            classes: {
                line: 'border-[#3B82F6] dark:border-[#60A5FA]',
            },
        },
    },
    {
        type: ComponentType.DASHED_DIVIDER,
        category: Categories.LAYOUT,
        icon: '┄',
        label: 'Dashed Divider',
        description: 'Dashed line divider',
        defaultConfig: {
            uid: `dashed-divider-${Date.now()}`,
            component: ComponentType.DASHED_DIVIDER,
            thickness: 'medium',
            color: '#D1D5DB',
            darkColor: '#374151',
            classes: {
                line: 'border-dashed border-[#D1D5DB] dark:border-[#374151]',
            },
        },
    },
    {
        type: ComponentType.LIST,
        category: Categories.LAYOUT,
        icon: '📋',
        label: 'List',
        description: 'Ordered or unordered list',
        defaultConfig: {
            uid: `list-${Date.now()}`,
            component: ComponentType.LIST,
            type: 'ul',
            style: 'none',
            items: [{ text: 'Item 1' }, { text: 'Item 2' }, { text: 'Item 3' }],
            classes: {
                container: 'space-y-2 bg-[#FFFFFF]',
                dark: 'dark:bg-[#1F2937]',
                item: 'text-[#374151] dark:text-[#D1D5DB]',
            },
        },
    },
    {
        type: ComponentType.ICON_LIST,
        category: Categories.LAYOUT,
        icon: '🎯',
        label: 'Icon List',
        description: 'Grid of icons with labels',
        defaultConfig: {
            uid: `iconlist-${Date.now()}`,
            component: ComponentType.ICON_LIST,
            items: [
                { icon: 'FaHome', iconLibrary: 'fa', label: 'Home' },
                { icon: 'FaUser', iconLibrary: 'fa', label: 'Profile' },
                { icon: 'FaCog', iconLibrary: 'fa', label: 'Settings' },
                { icon: 'FaBell', iconLibrary: 'fa', label: 'Notifications' },
            ],
            columns: 4,
            gap: 'gap-4',
            showLabel: true,
            centered: true,
            classes: {
                iconGrid: 'gap-4 bg-[#FFFFFF]',
                dark: 'dark:bg-[#1F2937]',
                icon: 'text-[#2563EB] dark:text-[#3B82F6] w-8 h-8',
                iconLabel: 'text-sm text-[#4B5563] dark:text-[#9CA3AF]',
            },
        },
    },

    // ========== TYPOGRAPHY COMPONENTS ==========
    {
        type: ComponentType.TITLE,
        category: Categories.TYPOGRAPHY,
        icon: 'H',
        label: 'Title',
        description: 'Heading with levels h1-h6',
        defaultConfig: {
            uid: `title-${Date.now()}`,
            component: ComponentType.TITLE,
            level: 'h2',
            text: 'Edit this title',
            alignment: 'left',
            classes: {
                base: 'text-3xl font-bold text-[#111827]',
                dark: 'dark:text-[#FFFFFF]',
                sm: 'sm:text-4xl',
                md: 'md:text-5xl',
                lg: 'lg:text-6xl',
            },
        },
    },
    {
        type: ComponentType.TEXT,
        category: Categories.TYPOGRAPHY,
        icon: 'T',
        label: 'Text',
        description: 'Paragraph or span text',
        defaultConfig: {
            uid: `text-${Date.now()}`,
            component: ComponentType.TEXT,
            tag: 'p',
            text: 'Edit this text content. You can change it in the editor.',
            alignment: 'left',
            classes: {
                base: 'text-[#4B5563]',
                dark: 'dark:text-[#D1D5DB]',
                sm: 'sm:text-base',
                md: 'md:text-lg',
            },
        },
    },

    // ========== INTERACTIVE COMPONENTS ==========
    {
        type: ComponentType.BUTTON,
        category: Categories.INTERACTIVE,
        icon: '🔘',
        label: 'Button',
        description: 'Clickable button with icon',
        defaultConfig: {
            uid: `button-${Date.now()}`,
            component: ComponentType.BUTTON,
            text: 'Click Me',
            size: 'md',
            icon: 'FaArrowRight',
            iconLibrary: 'fa',
            iconPosition: 'right',
            classes: {
                base: 'bg-[#2563EB] text-[#FFFFFF] rounded-full px-6 py-3 font-medium',
                hover: 'hover:bg-[#1D4ED8] hover:scale-105 hover:shadow-xl',
                dark: 'dark:bg-[#3B82F6] dark:hover:bg-[#2563EB]',
            },
        },
    },
    {
        type: ComponentType.BADGE,
        category: Categories.INTERACTIVE,
        icon: '🏷️',
        label: 'Badge',
        description: 'Status indicator or label',
        defaultConfig: {
            uid: `badge-${Date.now()}`,
            component: ComponentType.BADGE,
            text: 'New',
            size: 'md',
            shape: 'pill',
            classes: {
                base: 'bg-[#DBEAFE] text-[#1E40AF] px-3 py-1',
                dark: 'dark:bg-[#1E3A8A] dark:text-[#BFDBFE]',
            },
        },
    },

    // ========== MEDIA COMPONENTS ==========
    {
        type: ComponentType.MEDIA,
        category: Categories.MEDIA,
        icon: '🖼️',
        label: 'Media',
        description: 'Image, video, or iframe',
        defaultConfig: {
            uid: `media-${Date.now()}`,
            component: ComponentType.MEDIA,
            type: 'image',
            src: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d',
            alt: 'Placeholder image',
            objectFit: 'cover',
            aspectRatio: '16/9',
            classes: {
                base: 'rounded-2xl shadow-2xl border border-[#E5E7EB] bg-[#FFFFFF]',
                dark: 'dark:border-[#374151] dark:bg-[#1F2937]',
                media: 'w-full h-full',
            },
        },
    },

    // ========== DATA COMPONENTS ==========
    {
        type: ComponentType.TABLE,
        category: Categories.DATA,
        icon: '📊',
        label: 'Table',
        description: 'Data table with sorting',
        defaultConfig: {
            uid: `table-${Date.now()}`,
            component: ComponentType.TABLE,
            columns: [
                { key: 'name', title: 'Name' },
                { key: 'age', title: 'Age' },
                { key: 'email', title: 'Email' },
            ],
            data: [
                { name: 'John Doe', age: 30, email: 'john@example.com' },
                { name: 'Jane Smith', age: 25, email: 'jane@example.com' },
            ],
            classes: {
                container:
                    'rounded-lg border border-[#E5E7EB] dark:border-[#374151] bg-[#FFFFFF]',
                dark: 'dark:bg-[#1F2937]',
                header: 'bg-[#F9FAFB] dark:bg-[#1F2937]',
                body: 'divide-y divide-[#E5E7EB] dark:divide-[#374151]',
            },
        },
    },

    // ========== FORM COMPONENTS ==========
    {
        type: ComponentType.INPUT,
        category: Categories.FORMS,
        icon: '📝',
        label: 'Input',
        description: 'Text input field',
        defaultConfig: {
            uid: `input-${Date.now()}`,
            component: ComponentType.INPUT,
            type: 'text',
            label: 'Label',
            placeholder: 'Enter text...',
            size: 'md',
            variant: 'outlined',
            classes: {
                container: 'mb-4',
                label: 'text-sm font-medium text-[#374151] dark:text-[#D1D5DB]',
                input: 'border border-[#D1D5DB] rounded-md focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 dark:bg-[#1F2937] dark:border-[#4B5563]',
            },
        },
    },
    {
        type: ComponentType.TEXTAREA,
        category: Categories.FORMS,
        icon: '📄',
        label: 'Textarea',
        description: 'Multi-line text input',
        defaultConfig: {
            uid: `textarea-${Date.now()}`,
            component: ComponentType.TEXTAREA,
            label: 'Message',
            placeholder: 'Enter your message...',
            rows: 4,
            classes: {
                container: 'mb-4',
                label: 'text-sm font-medium text-[#374151] dark:text-[#D1D5DB]',
                input: 'border border-[#D1D5DB] rounded-md focus:border-[#3B82F6] focus:ring-2 focus:ring-[#3B82F6]/20 dark:bg-[#1F2937] dark:border-[#4B5563]',
            },
        },
    },
];
