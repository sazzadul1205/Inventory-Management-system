// page/frontend/Support/skeletonRegistry.js

import SectionSkeleton from '@/components/SectionSkeleton';

/**
 * Skeleton Registry for Support Page
 * Maps section types to their appropriate skeleton configurations
 */

// Helper function to get skeleton props based on section type and variant
export const getSkeletonProps = (type, config = {}) => {
    const baseProps = {
        showHeader: true,
        showCta: true,
        className: '',
        // Default counts
        cardCount: 6,
        statCount: 4,
        processCount: 4,
        techCount: 8,
        industryCount: 8,
    };

    // Type-specific skeleton configurations for Support page
    const typeConfigs = {
        // Help Center section - main support hub with categories
        helpCenter: {
            showHeader: true,
            showCards: true,
            showCta: true,
            showSearch: true,
            cardType: 'help-category',
            cardCount: 6,
            gridCols: 3,
            ctaLabel: 'Browse All Articles',
            showPopularArticles: true,
        },

        // Knowledge Base section - article/resource cards
        knowledgeBase: {
            showHeader: true,
            showCards: true,
            showCta: true,
            showSearch: true,
            cardType: 'article',
            cardCount: 8,
            gridCols: 2,
            showCategory: true,
            showReadTime: true,
            ctaLabel: 'View Knowledge Base',
        },

        // Video Tutorials section - video thumbnail grid
        videoTutorials: {
            showHeader: true,
            showCards: true,
            showCta: true,
            cardType: 'video',
            cardCount: 6,
            gridCols: 3,
            showThumbnail: true,
            showDuration: true,
            showPlayButton: true,
            ctaLabel: 'Watch More Tutorials',
        },

        // Documentation section - technical docs with sidebar
        documentation: {
            showHeader: true,
            showCards: true,
            showSidebar: true,
            showCta: false,
            cardType: 'doc',
            cardCount: 5,
            showCodeBlocks: true,
            showTableOfContents: true,
        },

        // Ticket System section - support ticket interface
        ticketSystem: {
            showHeader: true,
            showCards: false,
            showForm: true,
            showCta: true,
            showTicketList: true,
            showStatusIndicators: true,
            ctaLabel: 'Submit Ticket',
        },

        // Live Chat section - chat interface preview
        liveChat: {
            showHeader: true,
            showCards: false,
            showChatPreview: true,
            showCta: true,
            showOnlineIndicator: true,
            showMessageInput: true,
            ctaLabel: 'Start Chat',
        },

        // Community Forum section - forum topics/posts
        communityForum: {
            showHeader: true,
            showCards: true,
            showCta: true,
            showSearch: true,
            cardType: 'forum-topic',
            cardCount: 8,
            showReplyCount: true,
            showAuthorInfo: true,
            showCategoryTag: true,
            ctaLabel: 'Join Discussion',
        },

        // Default fallback for any section type
        default: {
            showHeader: true,
            showStats: false,
            showCards: true,
            showCta: true,
            cardType: 'service',
            cardCount: 3,
            statCount: 4,
        },
    };

    // Get config for specific type or use default
    const typeConfig = typeConfigs[type] || typeConfigs.default;

    // Merge with any config passed from the section data
    return {
        ...baseProps,
        ...typeConfig,
        ...(config?.skeleton || {}), // Allow override from section config
        variant: type, // Pass the type as variant to the skeleton
    };
};

// Export skeleton registry mapping
export const skeletonRegistry = {
    helpCenter: SectionSkeleton,
    knowledgeBase: SectionSkeleton,
    videoTutorials: SectionSkeleton,
    documentation: SectionSkeleton,
    ticketSystem: SectionSkeleton,
    liveChat: SectionSkeleton,
    communityForum: SectionSkeleton,

    // Default fallback
    default: SectionSkeleton,
};

// Helper to get skeleton for a specific section type
export const getSkeletonForType = (type) => {
    return skeletonRegistry[type] || skeletonRegistry.default;
};

// Helper to check if a section type has a custom skeleton configuration
export const hasCustomSkeleton = (type) => {
    return type in skeletonRegistry && type !== 'default';
};

export default skeletonRegistry;
