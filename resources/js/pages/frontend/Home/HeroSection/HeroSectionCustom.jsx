/**
 * HeroInventory Component - Dynamic CMS Page Builder
 * 
 * This component serves as a dynamic page builder that renders components based on a JSON configuration.
 * It lazy loads all CMS components to optimize initial bundle size and supports nested component structures.
 * 
 * Features:
 * - Dynamic component rendering from JSON configuration
 * - Lazy loading with Suspense for code splitting
 * - Support for nested components (containers can have children)
 * - Skeleton loading fallback for better UX
 * - Error handling for unknown component types
 */

import React, { Suspense, lazy } from 'react';
import HeroSectionSkeleton from './HeroSectionSkeleton';

// ============================================================================
// Container Components
// These components provide layout structure (sections, grids, flex containers)
// ============================================================================

/**
 * CMS_Section - Full section container with background and spacing
 * CMS_Grid - Grid layout container for multi-column arrangements
 * CMS_Flex - Flexbox layout container for flexible arrangements
 */
const CMS_Section = lazy(() => import('../../../../components/CMS_Container').then(m => ({ default: m.CMS_Section })));
const CMS_Grid = lazy(() => import('../../../../components/CMS_Container').then(m => ({ default: m.CMS_Grid })));
const CMS_Flex = lazy(() => import('../../../../components/CMS_Container').then(m => ({ default: m.CMS_Flex })));

// ============================================================================
// Content Components
// These components render actual content (text, titles, buttons, media)
// ============================================================================

/**
 * CMS_Title - Main heading component with variants (h1-h6)
 * CMS_Subtitle - Subheading component for supporting text
 * CMS_Text - Paragraph and body text component
 * CMS_Button - Interactive button component with multiple variants
 * CMS_Badge - Small status indicator component
 * CMS_Media - Image and video component with lazy loading
 */
const CMS_Title = lazy(() => import('../../../../components/CMS_Title'));
const CMS_Subtitle = lazy(() => import('../../../../components/CMS_Subtitle'));
const CMS_Text = lazy(() => import('../../../../components/CMS_Text'));
const CMS_Button = lazy(() => import('../../../../components/CMS_Button'));
const CMS_Badge = lazy(() => import('../../../../components/CMS_Badge'));
const CMS_Media = lazy(() => import('../../../../components/CMS_Media'));

// ============================================================================
// Layout Components
// These components provide structured layouts (cards, dividers, lists)
// ============================================================================

/**
 * CMS_Card - Card container with header, body, and footer sections
 * CMS_Divider - Horizontal or vertical divider with optional text/icons
 * CMS_List - Ordered, unordered, and icon lists with nesting support
 */
const CMS_Card = lazy(() => import('../../../../components/CMS_Card'));
const CMS_Divider = lazy(() => import('../../../../components/CMS_Divider'));
const CMS_List = lazy(() => import('../../../../components/CMS_List'));

// ============================================================================
// Data Display Components
// These components render structured data (tables)
// ============================================================================

/**
 * CMS_Table - Data table with sorting, pagination, and selection
 */
const CMS_Table = lazy(() => import('../../../../components/CMS_Table'));

// ============================================================================
// Form Components
// These components handle user input (inputs, forms)
// ============================================================================

/**
 * CMS_Input - Form input component with multiple types and validation
 */
const CMS_Input = lazy(() => import('../../../../components/CMS_Input'));

// ============================================================================
// Main Component
// ============================================================================

/**
 * HeroInventory - Main page builder component
 * 
 * Renders a component tree based on the configuration from config.json.
 * Supports recursive rendering of nested components through the renderComponent function.
 * 
 * @returns {JSX.Element} The rendered component tree with Suspense fallback
 */
const HeroInventory = ({ config }) => {
  /**
   * Recursively renders a component based on its type and configuration
   * 
   * @param {Object} component - Component configuration object
   * @param {string} component.component - Component type name (e.g., 'CMS_Section')
   * @param {Object} component.config - Component styling and behavior configuration
   * @param {Array} component.children - Nested child components (for containers)
   * @returns {JSX.Element|null} Rendered component or null if type unknown
   */
  const renderComponent = (component) => {
    // If component is undefined or null, return nothing
    if (!component) return null;

    switch (component.component) {
      // ======================================================================
      // Container Components
      // These components can have children that are rendered recursively
      // ======================================================================

      case 'CMS_Section':
        // Section container with full width background support
        return (
          <CMS_Section config={component.config}>
            {/* Recursively render all child components */}
            {component.children?.map((child, index) => (
              <React.Fragment key={index}>
                {renderComponent(child)}
              </React.Fragment>
            ))}
          </CMS_Section>
        );

      case 'CMS_Grid':
        // Grid layout container with responsive columns
        return (
          <CMS_Grid config={component.config}>
            {/* Recursively render all child components */}
            {component.children?.map((child, index) => (
              <React.Fragment key={index}>
                {renderComponent(child)}
              </React.Fragment>
            ))}
          </CMS_Grid>
        );

      case 'CMS_Flex':
        // Flexbox layout container with direction and alignment
        return (
          <CMS_Flex config={component.config}>
            {/* Recursively render all child components */}
            {component.children?.map((child, index) => (
              <React.Fragment key={index}>
                {renderComponent(child)}
              </React.Fragment>
            ))}
          </CMS_Flex>
        );

      // ======================================================================
      // Content Components
      // These components render actual content and typically don't have children
      // ======================================================================

      case 'CMS_Badge':
        // Small badge/status indicator
        return <CMS_Badge config={component.config} />;

      case 'CMS_Title':
        // Main heading with variants and text highlighting
        return <CMS_Title config={component.config} />;

      case 'CMS_Subtitle':
        // Subheading for supporting content
        return <CMS_Subtitle config={component.config} />;

      case 'CMS_Text':
        // Paragraph and body text content
        return <CMS_Text config={component.config} />;

      case 'CMS_Button':
        // Interactive button with multiple styles and states
        return <CMS_Button config={component.config} />;

      case 'CMS_Media':
        // Image or video with lazy loading and placeholders
        return <CMS_Media config={component.config} />;

      // ======================================================================
      // Layout Components
      // These components provide structured layouts
      // ======================================================================

      case 'CMS_Card':
        // Card container with header, body, and footer sections
        return (
          <CMS_Card
            config={component.config}
            header={component.header}
            body={component.body}
            footer={component.footer}
          >
            {/* Optional children inside card */}
            {component.children?.map((child, index) => (
              <React.Fragment key={index}>
                {renderComponent(child)}
              </React.Fragment>
            ))}
          </CMS_Card>
        );

      case 'CMS_Divider':
        // Standard divider line
        return <CMS_Divider config={component.config} />;

      case 'CMS_DividerWithText':
        // Divider with centered text label
        return <CMS_DividerWithText config={component.config} text={component.text} />;

      case 'CMS_DividerWithIcon':
        // Divider with centered icon
        return <CMS_DividerWithIcon config={component.config} icon={component.icon} iconLibrary={component.iconLibrary} />;

      case 'CMS_VerticalDivider':
        // Vertical divider for side-by-side content
        return <CMS_VerticalDivider config={component.config} />;

      case 'CMS_List':
        // List container (ul/ol) with items
        return (
          <CMS_List
            config={component.config}
            items={component.items}
          >
            {/* Optional nested list items */}
            {component.children?.map((child, index) => (
              <React.Fragment key={index}>
                {renderComponent(child)}
              </React.Fragment>
            ))}
          </CMS_List>
        );

      case 'CMS_ListItem':
        // Individual list item with icon and badge support
        return <CMS_ListItem config={component.config} />;

      case 'CMS_IconList':
        // Grid of icons with optional labels
        return <CMS_IconList config={component.config} items={component.items} />;

      // ======================================================================
      // Data Display Components
      // These components render structured data
      // ======================================================================

      case 'CMS_Table':
        // Data table with sorting, pagination, and selection
        return (
          <CMS_Table
            columns={component.columns}        // Table column definitions
            data={component.data}              // Table data array
            config={component.config}           // Table styling configuration
            onRowClick={component.onRowClick}   // Row click handler
            onSort={component.onSort}           // Sort handler
            onPageChange={component.onPageChange} // Pagination handler
            loading={component.loading}         // Loading state
          />
        );

      // ======================================================================
      // Form Components
      // These components handle user input
      // ======================================================================

      case 'CMS_Input':
        // Form input with multiple types and validation
        return (
          <CMS_Input
            type={component.type}               // Input type (text, email, etc.)
            name={component.name}                // Input name attribute
            label={component.label}               // Input label text
            placeholder={component.placeholder}   // Placeholder text
            value={component.value}               // Controlled value
            defaultValue={component.defaultValue} // Default value
            error={component.error}               // Error message
            hint={component.hint}                 // Helper hint text
            disabled={component.disabled}         // Disabled state
            required={component.required}         // Required field
            leftIcon={component.leftIcon}         // Left side icon
            rightIcon={component.rightIcon}       // Right side icon
            config={component.config}              // Input styling config
          />
        );

      case 'CMS_InputGroup':
        // Group of related inputs
        return (
          <CMS_InputGroup config={component.config}>
            {/* Child input components */}
            {component.children?.map((child, index) => (
              <React.Fragment key={index}>
                {renderComponent(child)}
              </React.Fragment>
            ))}
          </CMS_InputGroup>
        );

      case 'CMS_InputAddon':
        // Prefix or suffix addon for inputs
        return (
          <CMS_InputAddon
            config={component.config}
            position={component.position} // 'left' or 'right'
          >
            {component.text || component.children}
          </CMS_InputAddon>
        );

      // ======================================================================
      // Unknown Component Type
      // Log warning and return null for unrecognized components
      // ======================================================================

      default:
        console.warn(`Unknown component type: ${component.component}`);
        return null;
    }
  };

  // ==========================================================================
  // Render
  // ==========================================================================

  return (
    /**
     * Suspense boundary for lazy-loaded components
     * Shows HeroSectionSkeleton while components are loading
     */
    <Suspense fallback={<HeroSectionSkeleton />}>
      {/**
       * Start rendering from the root component in config
       * The config contains the complete component tree structure
       */}
      {renderComponent(config)}
    </Suspense>
  );
};

export default HeroInventory;