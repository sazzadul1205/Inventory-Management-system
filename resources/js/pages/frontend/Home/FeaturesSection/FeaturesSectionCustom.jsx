// page/frontend/Home/HeroSection/FeaturesSectionCustom.jsx

/**
 * FeaturesSectionCustom Component - Dynamic CMS Page Builder
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

// React
import React, { Suspense, lazy } from 'react';

// ============================================================================
// Container Components
// ============================================================================

const CMS_Grid = lazy(() => import('../../../../components/CMS_Container').then(m => ({ default: m.CMS_Grid })));
const CMS_Flex = lazy(() => import('../../../../components/CMS_Container').then(m => ({ default: m.CMS_Flex })));
const CMS_Section = lazy(() => import('../../../../components/CMS_Container').then(m => ({ default: m.CMS_Section })));
const CMS_Container = lazy(() => import('../../../../components/CMS_Container'));

// ============================================================================
// Content Components
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
 * ComponentWrapper - Provides data attributes for component selection and accessibility
 */
const ComponentWrapper = ({ uid, componentType, children }) => {
  if (!uid) return children;

  /**
   * Generate ARIA roles based on component type
   * Comprehensive mapping for all CMS components
   */
  const getComponentRole = (type) => {
    const roleMap = {
      // ===== Title Components =====
      'CMS_H1': 'heading',
      'CMS_H2': 'heading',
      'CMS_H3': 'heading',
      'CMS_H4': 'heading',
      'CMS_Title': 'heading',

      // ===== Text Components =====
      'CMS_Span': 'text',
      'CMS_Code': 'code',
      'CMS_Label': 'label',
      'CMS_Text': 'paragraph',
      'CMS_Quote': 'blockquote',
      'CMS_Paragraph': 'paragraph',

      // ===== Button Components =====
      'CMS_Button': 'button',
      'CMS_IconButton': 'button',
      'CMS_DangerButton': 'button',
      'CMS_OutlineButton': 'button',
      'CMS_PrimaryButton': 'button',
      'CMS_GradientButton': 'button',
      'CMS_SecondaryButton': 'button',

      // ===== Badge Components =====
      'CMS_Badge': 'status',
      'CMS_DotBadge': 'status',
      'CMS_InfoBadge': 'status',
      'CMS_CountBadge': 'status',
      'CMS_DangerBadge': 'status',
      'CMS_PrimaryBadge': 'status',
      'CMS_SuccessBadge': 'status',
      'CMS_WarningBadge': 'status',
      'CMS_OutlineBadge': 'status',

      // ===== Media Components =====
      'CMS_Media': 'img',
      'CMS_Image': 'img',
      'CMS_Video': 'video',
      'CMS_Vimeo': 'video',
      'CMS_YouTube': 'video',

      // ===== Card Components =====
      'CMS_Card': 'article',
      'CMS_CardBody': 'main',
      'CMS_CardFooter': 'footer',
      'CMS_CardHeader': 'header',
      'CMS_ProductCard': 'article',
      'CMS_ProfileCard': 'article',
      'CMS_ArticleCard': 'article',

      // ===== Container Components =====
      'CMS_Grid': 'grid',
      'CMS_Flex': 'region',
      'CMS_Section': 'region',
      'CMS_Container': 'region',

      // ===== Divider Components =====
      'CMS_Divider': 'separator',
      'CMS_DashedDivider': 'separator',
      'CMS_DividerWithText': 'separator',
      'CMS_DividerWithIcon': 'separator',
      'CMS_VerticalDivider': 'separator',
      'CMS_GradientDivider': 'separator',

      // ===== List Components =====
      'CMS_List': 'list',
      'CMS_IconList': 'list',
      'CMS_Checklist': 'list',
      'CMS_BulletList': 'list',
      'CMS_OrderedList': 'list',
      'CMS_ListItem': 'listitem',
      'CMS_UnorderedList': 'list',
      'CMS_DefinitionList': 'list',

      // ===== Table Components =====
      'CMS_Table': 'table',
      'CMS_DataTable': 'table',
      'CMS_SimpleTable': 'table',
      'CMS_TableBody': 'rowgroup',
      'CMS_TableHeader': 'rowgroup',
      'CMS_TableFooter': 'rowgroup',
      'CMS_SelectableTable': 'table',

      // ===== Input Components =====
      'CMS_Input': 'textbox',
      'CMS_Select': 'listbox',
      'CMS_Textarea': 'textbox',
      'CMS_InputGroup': 'group',
      'CMS_InputAddon': 'group',
      'CMS_TextInput': 'textbox',
      'CMS_EmailInput': 'textbox',
      'CMS_PasswordInput': 'textbox',
      'CMS_NumberInput': 'spinbutton',
    };

    return roleMap[type] || 'region'; // Default to region for unknown types
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

const FeaturesSectionCustom = ({ config }) => {

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
    <Suspense>
      <section
        id="features-section"
        className="outline-none"
        tabIndex="-1"
        aria-label="Features section"
      >
        {renderComponent(config)}
      </section>
    </Suspense>
  );
};

export default FeaturesSectionCustom;