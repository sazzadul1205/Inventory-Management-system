export const Configuration = {
    activeSection: 'custom',
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
        custom: {
            enabled: true,
            props: {
                // ==========================================
                // LAYOUT CONTROLS - Section 11 & 12
                // ==========================================
                layout: 'split',
                alignment: 'left',
                contentOrder: 'normal',
                verticalAlignment: 'center',
                containerWidth: 'max-w-7xl',
                containerPadding: true,
                paddingY: 'py-20 md:py-28',
                paddingX: 'px-4 sm:px-6 lg:px-8',
                gapSize: 'gap-12',
                contentWidth: 'default',
                contentMaxWidth: '',
                contentMinHeight: '',

                // ==========================================
                // THEME CONTROLS - Background (Section 12)
                // ==========================================
                useGradient: true,
                gradientDirection: 'to-r',
                gradientFrom: 'from-blue-900',
                gradientTo: 'to-blue-800',
                gradientFromDark: 'dark:from-gray-800',
                gradientToDark: 'dark:to-gray-900',
                gradientVia: '',
                gradientViaDark: '',
                bgColor: 'bg-white',
                bgColorDark: 'dark:bg-gray-900',
                bgOpacity: '100',
                bgOpacityDark: '100',

                // ==========================================
                // TEXT COLORS (Section 12)
                // ==========================================
                textColor: 'text-gray-900',
                textColorDark: 'dark:text-white',
                textSecondaryColor: 'text-gray-600',
                textSecondaryColorDark: 'dark:text-gray-300',
                textMutedColor: 'text-gray-400',
                textMutedColorDark: 'dark:text-gray-500',
                accentColor: 'text-blue-600',
                accentColorDark: 'dark:text-blue-400',
                accentBg: 'bg-blue-100',
                accentBgDark: 'dark:bg-blue-900/30',

                // ==========================================
                // CARD COLORS (Section 11)
                // ==========================================
                cardBg: 'bg-white',
                cardBgDark: 'dark:bg-gray-800',
                cardShadow: 'shadow-lg',
                cardShadowDark: 'dark:shadow-gray-900/50',
                cardHover: 'hover:shadow-xl',
                cardHoverDark: 'dark:hover:shadow-gray-800/50',
                cardPadding: 'p-6',
                cardRadius: 'rounded-xl',
                borderColor: 'border-gray-200',
                borderColorDark: 'dark:border-gray-700',

                // ==========================================
                // BADGE CONTROLS - Section 2
                // ==========================================
                showBadge: true,
                badgeText: 'Next-Generation Logistics System',
                badgeIcon: true,
                badgeIconType: 'dot',
                badgeRadius: 'rounded-full',
                badgeBg: 'bg-blue-50',
                badgeBgDark: 'dark:bg-gray-800',
                badgeTextColor: 'text-blue-700',
                badgeTextColorDark: 'dark:text-blue-300',
                badgeBorder: 'border-blue-100',
                badgeBorderDark: 'dark:border-gray-700',
                badgeIconColor: 'bg-green-400',
                badgeIconColorDark: 'dark:bg-green-500',

                // ==========================================
                // TITLE CONTROLS - Section 3
                // ==========================================
                title: 'Manage Products, Warehouses and Deliveries in One Platform',
                titleHighlight: 'One Platform',
                titleHighlightType: 'gradient',
                titleHighlightGradient: 'from-yellow-300 to-yellow-500',
                titleHighlightGradientDark:
                    'dark:from-yellow-400 dark:to-yellow-600',
                titleHighlightColor: 'text-yellow-500',
                titleHighlightColorDark: 'dark:text-yellow-400',
                titleHighlightUnderline: 'border-b-4 border-yellow-500',
                titleHighlightUnderlineDark: 'dark:border-yellow-400',
                titleSize: 'text-4xl md:text-5xl lg:text-6xl',
                titleWeight: 'font-bold',
                titleLeading: 'leading-tight',
                titleTracking: 'tracking-normal',
                titleMaxWidth: 'max-w-4xl',

                // ==========================================
                // DESCRIPTION CONTROLS - Section 4
                // ==========================================
                description:
                    'Sazzad Inventory and Logistics gives businesses full control over inventory, warehouse operations, and shipment tracking with a fast and reliable digital system.',
                descriptionSize: 'text-lg md:text-xl',
                descriptionWeight: 'font-normal',
                descriptionLeading: 'leading-relaxed',
                descriptionMaxWidth: 'max-w-lg',

                // ==========================================
                // FEATURES CONTROLS - Section 5
                // ==========================================
                showFeatures: true,
                features: [
                    { text: 'Centralized Product Management', icon: 'cube' },
                    { text: 'Multi-Warehouse Support', icon: 'location' },
                    { text: 'Automated Shipment Tracking', icon: 'truck' },
                    { text: 'Operational Analytics Dashboard', icon: 'chart' },
                ],
                featuresColumns: 2,
                featuresLayout: 'grid',
                featuresGap: 'gap-4',
                featuresIconType: 'default',
                featureIconSize: 'w-5 h-5',
                featureIconColor: 'text-yellow-500',
                featureIconColorDark: 'dark:text-yellow-400',

                // ==========================================
                // CTA BUTTONS CONTROLS - Section 6
                // ==========================================
                showCTA: true,

                // Primary Button
                primaryCTA: {
                    text: 'Explore Platform',
                    icon: 'arrow',
                    href: '/platform',
                    onClick: null,
                },
                primaryBtnIconPosition: 'right',
                primaryBtnSize: 'px-8 py-4',
                primaryBtnRadius: 'rounded-lg',
                primaryBtnBg: 'bg-yellow-500',
                primaryBtnBgDark: 'dark:bg-yellow-600',
                primaryBtnBgHover: 'hover:bg-yellow-400',
                primaryBtnBgHoverDark: 'dark:hover:bg-yellow-500',
                primaryBtnTextColor: 'text-blue-900',
                primaryBtnTextColorDark: 'dark:text-white',
                primaryBtnBorder: 'border-transparent',
                primaryBtnBorderDark: 'dark:border-transparent',
                primaryBtnBorderHover: 'hover:border-transparent',
                primaryBtnBorderHoverDark: 'dark:hover:border-transparent',
                primaryBtnShadow: 'shadow-lg',
                primaryBtnShadowDark: 'dark:shadow-gray-900/50',
                primaryBtnShadowHover: 'hover:shadow-xl',
                primaryBtnShadowHoverDark: 'dark:hover:shadow-gray-800/50',
                primaryBtnAnimation: true,
                primaryBtnFullWidth: false,

                // Secondary Button
                secondaryCTA: {
                    text: 'View Features',
                    icon: 'play',
                    href: '/features',
                    onClick: null,
                },
                secondaryBtnIconPosition: 'left',
                secondaryBtnSize: 'px-8 py-4',
                secondaryBtnRadius: 'rounded-lg',
                secondaryBtnBg: 'bg-transparent',
                secondaryBtnBgDark: 'dark:bg-transparent',
                secondaryBtnBgHover: 'hover:bg-gray-100',
                secondaryBtnBgHoverDark: 'dark:hover:bg-gray-800',
                secondaryBtnTextColor: 'text-gray-900',
                secondaryBtnTextColorDark: 'dark:text-white',
                secondaryBtnBorder: 'border-2 border-gray-900',
                secondaryBtnBorderDark: 'dark:border-white',
                secondaryBtnBorderHover: 'hover:border-gray-700',
                secondaryBtnBorderHoverDark: 'dark:hover:border-gray-300',
                secondaryBtnShadow: '',
                secondaryBtnShadowDark: '',
                secondaryBtnAnimation: true,
                secondaryBtnFullWidth: false,

                // ==========================================
                // STATS CONTROLS - Section 7
                // ==========================================
                showStats: true,
                stats: [
                    {
                        value: '10K+',
                        label: 'orders processed monthly',
                        icon: 'chart',
                    },
                    {
                        value: '50+',
                        label: 'active warehouse partners',
                        icon: 'location',
                    },
                ],
                statsLayout: 'horizontal',
                statsColumns: 2,
                statsDivider: true,
                statsBorder: 'border-gray-200',
                statsBorderDark: 'dark:border-gray-700',
                statsText: 'text-gray-900',
                statsTextDark: 'dark:text-white',

                // ==========================================
                // TRUST BADGES - Section 7
                // ==========================================
                showTrustBadges: true,
                trustBadgeAvatars: 4,
                trustBadgeText: 'Trusted by industry leaders',
                trustBadgeImages: [],

                // ==========================================
                // IMAGE CONTROLS - Section 9
                // ==========================================
                showImage: true,
                imageUrl:
                    'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc',
                imageDarkUrl: '',
                imageAlt: 'Logistics Platform Dashboard',
                imagePosition: 'right',
                imageShadow: 'shadow-2xl',
                imageShadowDark: 'dark:shadow-gray-900/50',
                imageObjectFit: 'object-cover',
                imageOverlay: true,
                imageOverlayColor: 'from-black/60',
                imageOverlayColorDark: 'dark:from-gray-900/80',
                imageOverlayDirection: 'to-t',
                imageBorder: '',
                imageBorderDark: '',
                imageZoom: false,

                // ==========================================
                // FLOATING ELEMENTS - Section 8
                // ==========================================
                showFloatingElements: true,
                floatingElements: [
                    {
                        type: 'card',
                        position: 'bottom-left',
                        bg: 'bg-white/10',
                        bgDark: 'dark:bg-gray-800/80',
                        border: 'border-white/20',
                        borderDark: 'dark:border-gray-700',
                        content: {
                            icon: 'check',
                            iconBg: 'bg-green-500',
                            title: 'Live Tracking',
                            value: 'Real-time updates',
                            titleColor: 'text-blue-200',
                            valueColor: 'text-white',
                        },
                    },
                    {
                        type: 'badge',
                        position: 'top-right',
                        bg: 'bg-white/10',
                        bgDark: 'dark:bg-gray-800/80',
                        border: 'border-white/20',
                        borderDark: 'dark:border-gray-700',
                        content: {
                            text: '⚡ 99.9% Uptime',
                            textColor: 'text-white',
                        },
                    },
                ],

                // ==========================================
                // ANIMATION CONTROLS - Section 11 & 12
                // ==========================================
                animations: true,
                animationType: 'fade-up',
                animationDuration: 'duration-1000',
                animationDelay: 'delay-0',
                animationEasing: 'ease-out',
                hoverEffects: true,
                parallaxSpeed: 'slow',

                // ==========================================
                // SPACING CONTROLS - Section 10
                // ==========================================
                sectionSpacing: 'space-y-8',
                elementSpacing: 'space-y-4',

                // ==========================================
                // CUSTOM CLASSES - Section 12
                // ==========================================
                customContainerClasses: '',
                customContentClasses: '',
                customImageClasses: '',
                customClasses: '',

                // ==========================================
                // SEO CONTROLS - Section 12
                // ==========================================
                seoTitle: 'Sazzad - Inventory & Logistics Management Platform',
                seoDescription:
                    'Manage products, warehouses, and deliveries in one unified platform',
                seoKeywords:
                    'inventory management, logistics, warehouse management, shipment tracking',
            },
        },
    },
    pageMappings: {
        home: 'custom',
        about: '1',
        services: '2',
        contact: '3',
        blog: 'none',
    },
    abTesting: {
        enabled: false,
        variants: ['1', '2', '3'],
        distribution: [33, 33, 34],
    },
};
