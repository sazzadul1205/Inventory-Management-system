// page/frontend/Support/sectionRegistry.js

// React
import { lazy } from 'react';

// Components Registry
export const sectionRegistry = {
    // helpCenter
    helpCenter: {
        variant1: lazy(() => import('./HelpCenterSection/HelpCenterSection1')),
        variant2: lazy(() => import('./HelpCenterSection/HelpCenterSection2')),
        variant3: lazy(() => import('./HelpCenterSection/HelpCenterSection3')),
    },

    // knowledgeBase
    knowledgeBase: {
        variant1: lazy(() => import('./KnowledgeBaseSection/KnowledgeBaseSection1')),
        variant2: lazy(() => import('./KnowledgeBaseSection/KnowledgeBaseSection2')),
        variant3: lazy(() => import('./KnowledgeBaseSection/KnowledgeBaseSection3')),
    },

    // videoTutorials
    videoTutorials: {
        variant1: lazy(() => import('./VideoTutorialsSection/VideoTutorialsSection1')),
        variant2: lazy(() => import('./VideoTutorialsSection/VideoTutorialsSection2')),
        variant3: lazy(() => import('./VideoTutorialsSection/VideoTutorialsSection3')),
    },

    // documentation
    documentation: {
        variant1: lazy(() => import('./DocumentationSection/DocumentationSection1')),
        variant2: lazy(() => import('./DocumentationSection/DocumentationSection2')),
        variant3: lazy(() => import('./DocumentationSection/DocumentationSection3')),
    },

    // ticketSystem
    ticketSystem: {
        variant1: lazy(() => import('./TicketSystemSection/TicketSystemSection1')),
        variant2: lazy(() => import('./TicketSystemSection/TicketSystemSection2')),
        variant3: lazy(() => import('./TicketSystemSection/TicketSystemSection3')),
    },

    // liveChat
    liveChat: {
        variant1: lazy(() => import('./LiveChatSection/LiveChatSection1')),
        variant2: lazy(() => import('./LiveChatSection/LiveChatSection2')),
        variant3: lazy(() => import('./LiveChatSection/LiveChatSection3')),
    },

    // communityForum
    communityForum: {
        variant1: lazy(() => import('./CommunityForumSection/CommunityForumSection1')),
        variant2: lazy(() => import('./CommunityForumSection/CommunityForumSection2')),
        variant3: lazy(() => import('./CommunityForumSection/CommunityForumSection3')),
    },
};
