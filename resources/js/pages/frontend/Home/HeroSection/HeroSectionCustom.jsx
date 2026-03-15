// page/frontend/Home/HeroSection/HeroSectionCustom.jsx

/**
 * HeroSectionCustom Component - Dynamic CMS Page Builder
 * 
 * This component serves as a dynamic page builder that renders components based on a JSON configuration.
 * It lazy loads all CMS components to optimize initial bundle size and supports nested component structures.
 * 
 * Features:
 * - Dynamic component rendering from JSON configuration
 * - Flat class structure for easy editing
 * - Support for nested components (containers can have children)
 * - Skeleton loading fallback for better UX
 * - UID support for component selection and identification
 */

import React, { Suspense, lazy } from 'react';
import { Head } from '@inertiajs/react';
import HeroSectionSkeleton from './HeroSectionSkeleton';

// ============================================================================
// Container Components
// These components provide layout structure (sections, grids, flex containers)
// ============================================================================

const CMS_Grid = lazy(() => import('../../../../components/CMS_Container').then(m => ({ default: m.CMS_Grid })));
const CMS_Flex = lazy(() => import('../../../../components/CMS_Container').then(m => ({ default: m.CMS_Flex })));
const CMS_Section = lazy(() => import('../../../../components/CMS_Container').then(m => ({ default: m.CMS_Section })));
const CMS_Container = lazy(() => import('../../../../components/CMS_Container'));

// ============================================================================
// Content Components
// These components render actual content (text, titles, buttons, media)
// ============================================================================

const CMS_Title = lazy(() => import('../../../../components/CMS_Title'));
const CMS_H1 = lazy(() => import('../../../../components/CMS_Title').then(m => ({ default: m.CMS_H1 })));
const CMS_H2 = lazy(() => import('../../../../components/CMS_Title').then(m => ({ default: m.CMS_H2 })));
const CMS_H3 = lazy(() => import('../../../../components/CMS_Title').then(m => ({ default: m.CMS_H3 })));
const CMS_H4 = lazy(() => import('../../../../components/CMS_Title').then(m => ({ default: m.CMS_H4 })));

const CMS_Text = lazy(() => import('../../../../components/CMS_Text'));
const CMS_Span = lazy(() => import('../../../../components/CMS_Text').then(m => ({ default: m.CMS_Span })));
const CMS_Code = lazy(() => import('../../../../components/CMS_Text').then(m => ({ default: m.CMS_Code })));
const CMS_Quote = lazy(() => import('../../../../components/CMS_Text').then(m => ({ default: m.CMS_Quote })));
const CMS_Label = lazy(() => import('../../../../components/CMS_Text').then(m => ({ default: m.CMS_Label })));
const CMS_Paragraph = lazy(() => import('../../../../components/CMS_Text').then(m => ({ default: m.CMS_Paragraph })));

const CMS_Button = lazy(() => import('../../../../components/CMS_Button'));
const CMS_IconButton = lazy(() => import('../../../../components/CMS_Button').then(m => ({ default: m.CMS_IconButton })));
const CMS_DangerButton = lazy(() => import('../../../../components/CMS_Button').then(m => ({ default: m.CMS_DangerButton })));
const CMS_PrimaryButton = lazy(() => import('../../../../components/CMS_Button').then(m => ({ default: m.CMS_PrimaryButton })));
const CMS_OutlineButton = lazy(() => import('../../../../components/CMS_Button').then(m => ({ default: m.CMS_OutlineButton })));
const CMS_GradientButton = lazy(() => import('../../../../components/CMS_Button').then(m => ({ default: m.CMS_GradientButton })));
const CMS_SecondaryButton = lazy(() => import('../../../../components/CMS_Button').then(m => ({ default: m.CMS_SecondaryButton })));

const CMS_Badge = lazy(() => import('../../../../components/CMS_Badge'));
const CMS_DotBadge = lazy(() => import('../../../../components/CMS_Badge').then(m => ({ default: m.CMS_DotBadge })));
const CMS_InfoBadge = lazy(() => import('../../../../components/CMS_Badge').then(m => ({ default: m.CMS_InfoBadge })));
const CMS_CountBadge = lazy(() => import('../../../../components/CMS_Badge').then(m => ({ default: m.CMS_CountBadge })));
const CMS_DangerBadge = lazy(() => import('../../../../components/CMS_Badge').then(m => ({ default: m.CMS_DangerBadge })));
const CMS_OutlineBadge = lazy(() => import('../../../../components/CMS_Badge').then(m => ({ default: m.CMS_OutlineBadge })));
const CMS_PrimaryBadge = lazy(() => import('../../../../components/CMS_Badge').then(m => ({ default: m.CMS_PrimaryBadge })));
const CMS_SuccessBadge = lazy(() => import('../../../../components/CMS_Badge').then(m => ({ default: m.CMS_SuccessBadge })));
const CMS_WarningBadge = lazy(() => import('../../../../components/CMS_Badge').then(m => ({ default: m.CMS_WarningBadge })));

const CMS_Media = lazy(() => import('../../../../components/CMS_Media'));
const CMS_Image = lazy(() => import('../../../../components/CMS_Media').then(m => ({ default: m.CMS_Image })));
const CMS_Video = lazy(() => import('../../../../components/CMS_Media').then(m => ({ default: m.CMS_Video })));
const CMS_Vimeo = lazy(() => import('../../../../components/CMS_Media').then(m => ({ default: m.CMS_Vimeo })));
const CMS_YouTube = lazy(() => import('../../../../components/CMS_Media').then(m => ({ default: m.CMS_YouTube })));

// ============================================================================
// Layout Components
// These components provide structured layouts (cards, dividers, lists)
// ============================================================================

const CMS_Card = lazy(() => import('../../../../components/CMS_Card'));
const CMS_CardBody = lazy(() => import('../../../../components/CMS_Card').then(m => ({ default: m.CMS_CardBody })));
const CMS_CardFooter = lazy(() => import('../../../../components/CMS_Card').then(m => ({ default: m.CMS_CardFooter })));
const CMS_CardHeader = lazy(() => import('../../../../components/CMS_Card').then(m => ({ default: m.CMS_CardHeader })));
const CMS_ProductCard = lazy(() => import('../../../../components/CMS_Card').then(m => ({ default: m.CMS_ProductCard })));
const CMS_ArticleCard = lazy(() => import('../../../../components/CMS_Card').then(m => ({ default: m.CMS_ArticleCard })));
const CMS_ProfileCard = lazy(() => import('../../../../components/CMS_Card').then(m => ({ default: m.CMS_ProfileCard })));

const CMS_Divider = lazy(() => import('../../../../components/CMS_Divider'));
const CMS_DashedDivider = lazy(() => import('../../../../components/CMS_Divider').then(m => ({ default: m.CMS_DashedDivider })));
const CMS_DividerWithText = lazy(() => import('../../../../components/CMS_Divider').then(m => ({ default: m.CMS_DividerWithText })));
const CMS_DividerWithIcon = lazy(() => import('../../../../components/CMS_Divider').then(m => ({ default: m.CMS_DividerWithIcon })));
const CMS_VerticalDivider = lazy(() => import('../../../../components/CMS_Divider').then(m => ({ default: m.CMS_VerticalDivider })));
const CMS_GradientDivider = lazy(() => import('../../../../components/CMS_Divider').then(m => ({ default: m.CMS_GradientDivider })));

const CMS_List = lazy(() => import('../../../../components/CMS_List'));
const CMS_IconList = lazy(() => import('../../../../components/CMS_List').then(m => ({ default: m.CMS_IconList })));
const CMS_ListItem = lazy(() => import('../../../../components/CMS_List').then(m => ({ default: m.CMS_ListItem })));
const CMS_Checklist = lazy(() => import('../../../../components/CMS_List').then(m => ({ default: m.CMS_Checklist })));
const CMS_BulletList = lazy(() => import('../../../../components/CMS_List').then(m => ({ default: m.CMS_BulletList })));
const CMS_OrderedList = lazy(() => import('../../../../components/CMS_List').then(m => ({ default: m.CMS_OrderedList })));
const CMS_UnorderedList = lazy(() => import('../../../../components/CMS_List').then(m => ({ default: m.CMS_UnorderedList })));
const CMS_DefinitionList = lazy(() => import('../../../../components/CMS_List').then(m => ({ default: m.CMS_DefinitionList })));

// ============================================================================
// Data Display Components
// These components render structured data (tables)
// ============================================================================

const CMS_Table = lazy(() => import('../../../../components/CMS_Table'));
const CMS_DataTable = lazy(() => import('../../../../components/CMS_Table').then(m => ({ default: m.CMS_DataTable })));
const CMS_TableBody = lazy(() => import('../../../../components/CMS_Table').then(m => ({ default: m.CMS_TableBody })));
const CMS_SimpleTable = lazy(() => import('../../../../components/CMS_Table').then(m => ({ default: m.CMS_SimpleTable })));
const CMS_TableFooter = lazy(() => import('../../../../components/CMS_Table').then(m => ({ default: m.CMS_TableFooter })));
const CMS_TableHeader = lazy(() => import('../../../../components/CMS_Table').then(m => ({ default: m.CMS_TableHeader })));
const CMS_SelectableTable = lazy(() => import('../../../../components/CMS_Table').then(m => ({ default: m.CMS_SelectableTable })));

// ============================================================================
// Form Components
// These components handle user input (inputs, forms)
// ============================================================================

const CMS_Input = lazy(() => import('../../../../components/CMS_Input'));
const CMS_Select = lazy(() => import('../../../../components/CMS_Input').then(m => ({ default: m.CMS_Select })));
const CMS_Textarea = lazy(() => import('../../../../components/CMS_Input').then(m => ({ default: m.CMS_Textarea })));
const CMS_TextInput = lazy(() => import('../../../../components/CMS_Input').then(m => ({ default: m.CMS_TextInput })));
const CMS_EmailInput = lazy(() => import('../../../../components/CMS_Input').then(m => ({ default: m.CMS_EmailInput })));
const CMS_InputGroup = lazy(() => import('../../../../components/CMS_Input').then(m => ({ default: m.CMS_InputGroup })));
const CMS_InputAddon = lazy(() => import('../../../../components/CMS_Input').then(m => ({ default: m.CMS_InputAddon })));
const CMS_NumberInput = lazy(() => import('../../../../components/CMS_Input').then(m => ({ default: m.CMS_NumberInput })));
const CMS_PasswordInput = lazy(() => import('../../../../components/CMS_Input').then(m => ({ default: m.CMS_PasswordInput })));

// ============================================================================
// Utility Components
// ============================================================================

/**
 * ComponentWrapper - Provides a data attribute for component selection and SEO metadata
 */
const ComponentWrapper = ({ uid, componentType, children }) => {
  if (!uid) return children;

  // Generate SEO-friendly attributes based on component type
  const getComponentRole = (type) => {
    const roleMap = {
      'CMS_Title': 'heading',
      'CMS_H1': 'heading',
      'CMS_H2': 'heading',
      'CMS_H3': 'heading',
      'CMS_H4': 'heading',
      'CMS_Text': 'contentinfo',
      'CMS_Paragraph': 'contentinfo',
      'CMS_Button': 'button',
      'CMS_Media': 'img',
      'CMS_Card': 'article',
      'CMS_Section': 'region',
      'CMS_Grid': 'grid',
      'CMS_Flex': 'region',
      'CMS_List': 'list',
      'CMS_Table': 'table',
    };
    return roleMap[type] || 'region';
  };

  return (
    <div
      data-component-id={uid}
      data-component-selectable="true"
      data-component-type={componentType}
      role={getComponentRole(componentType)}
      aria-label={`${componentType} component`}
    >
      {children}
    </div>
  );
};

// ============================================================================
// Component Registry
// Maps component type strings to their lazy-loaded components
// ============================================================================

const componentRegistry = {
  // Container Components
  CMS_Section,
  CMS_Grid,
  CMS_Flex,
  CMS_Container,

  // Title Components
  CMS_Title,
  CMS_H1,
  CMS_H2,
  CMS_H3,
  CMS_H4,

  // Text Components
  CMS_Text,
  CMS_Paragraph,
  CMS_Span,
  CMS_Quote,
  CMS_Code,
  CMS_Label,

  // Button Components
  CMS_Button,
  CMS_PrimaryButton,
  CMS_SecondaryButton,
  CMS_DangerButton,
  CMS_OutlineButton,
  CMS_GradientButton,
  CMS_IconButton,

  // Badge Components
  CMS_Badge,
  CMS_PrimaryBadge,
  CMS_SuccessBadge,
  CMS_WarningBadge,
  CMS_DangerBadge,
  CMS_InfoBadge,
  CMS_OutlineBadge,
  CMS_CountBadge,
  CMS_DotBadge,

  // Media Components
  CMS_Media,
  CMS_Image,
  CMS_Video,
  CMS_YouTube,
  CMS_Vimeo,

  // Card Components
  CMS_Card,
  CMS_ProductCard,
  CMS_ProfileCard,
  CMS_ArticleCard,
  CMS_CardHeader,
  CMS_CardBody,
  CMS_CardFooter,

  // Divider Components
  CMS_Divider,
  CMS_DividerWithText,
  CMS_DividerWithIcon,
  CMS_VerticalDivider,
  CMS_GradientDivider,
  CMS_DashedDivider,

  // List Components
  CMS_List,
  CMS_UnorderedList,
  CMS_OrderedList,
  CMS_DefinitionList,
  CMS_BulletList,
  CMS_Checklist,
  CMS_ListItem,
  CMS_IconList,

  // Table Components
  CMS_Table,
  CMS_DataTable,
  CMS_SimpleTable,
  CMS_SelectableTable,
  CMS_TableHeader,
  CMS_TableBody,
  CMS_TableFooter,

  // Input Components
  CMS_Input,
  CMS_TextInput,
  CMS_NumberInput,
  CMS_EmailInput,
  CMS_PasswordInput,
  CMS_Textarea,
  CMS_Select,
  CMS_InputGroup,
  CMS_InputAddon,
};

// ============================================================================
// Main Component
// ============================================================================

const HeroSectionCustom = ({ config, pageConfig }) => {
  /**
   * Generate SEO metadata from config
   */
  const generateSEOMetadata = () => {
    // Use SEO from config if available
    if (config?.seo) {
      return {
        title: config.seo.title || 'Sazzad Inventory & Logistics',
        description: config.seo.description || 'Dynamic page builder for inventory and logistics solutions',
        keywords: config.seo.keywords || 'CMS builder, dynamic page, inventory management, logistics, page builder',
        structuredData: config.seo.structuredData || {
          "@type": "SoftwareApplication",
          "name": "Sazzad CMS Page Builder",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "description": "Dynamic page builder for inventory and logistics solutions"
        }
      };
    }

    // Fallback: try to extract from content
    let title = 'Sazzad Inventory & Logistics';
    let description = 'Dynamic page builder for inventory and logistics solutions';

    const findTitle = (obj) => {
      if (!obj) return;
      if (obj.component === 'CMS_Title' && obj.text) {
        title = obj.text;
      }
      if (obj.component === 'CMS_Text' && obj.text && !description) {
        description = obj.text;
      }
      if (obj.children) {
        obj.children.forEach(findTitle);
      }
    };

    findTitle(config);

    return { title, description };
  };

  const seo = generateSEOMetadata();
  const siteConfig = pageConfig?.siteConfig || {};
  const currentUrl = typeof window !== 'undefined' ? window.location.origin : siteConfig.url || '';

  // Build structured data
  const structuredData = {
    "@context": "https://schema.org",
    ...seo.structuredData,
    "description": seo.description
  };

  /**
   * Recursively renders a component based on its type and configuration
   */
  const renderComponent = (component) => {
    if (!component) return null;

    const { uid, component: componentType, children, ...props } = component;

    const withUidWrapper = (element) => {
      return (
        <ComponentWrapper uid={uid} componentType={componentType}>
          {element}
        </ComponentWrapper>
      );
    };

    // Get the component from registry
    const Component = componentRegistry[componentType];

    if (!Component) {
      console.warn(`Unknown component type: ${componentType}`, { uid });
      return null;
    }

    // For components that can have children (containers, cards, lists)
    const componentsWithChildren = [
      'CMS_Section', 'CMS_Grid', 'CMS_Flex', 'CMS_Container',
      'CMS_Card',
      'CMS_List', 'CMS_UnorderedList', 'CMS_OrderedList', 'CMS_DefinitionList',
      'CMS_BulletList', 'CMS_Checklist',
      'CMS_InputGroup'
    ];

    if (componentsWithChildren.includes(componentType) && children?.length) {
      return withUidWrapper(
        <Component
          uid={uid}
          {...props}
          aria-label={`${componentType} container`}
        >
          {children.map((child, index) => (
            <React.Fragment key={child.uid || `${componentType}-child-${index}`}>
              {renderComponent(child)}
            </React.Fragment>
          ))}
        </Component>
      );
    }

    // For components without children or with special child handling
    return withUidWrapper(
      <Component
        uid={uid}
        {...props}
        aria-label={`${componentType} component`}
      />
    );
  };

  // ==========================================================================
  // Render
  // ==========================================================================

  return (
    <>
      {/* SEO Meta Tags using Inertia's Head component */}
      <Head>
        {/* Primary Meta Tags */}
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords || "CMS builder, dynamic page, inventory management, logistics, page builder"} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:site_name" content={siteConfig.name || "Sazzad Inventory & Logistics"} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />

        {/* Additional SEO */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <link rel="canonical" href={currentUrl} />

        {/* Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

        {/* Accessibility */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#4f46e5" />
      </Head>

      <Suspense fallback={<HeroSectionSkeleton />}>
        <main
          id="main-content"
          className="outline-none"
          tabIndex="-1"
          role="main"
          aria-label="Main content"
        >
          {renderComponent(config)}
        </main>
      </Suspense>
    </>
  );
};

export default HeroSectionCustom;