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
import HeroSectionSkeleton from './HeroSectionSkeleton';

// ============================================================================
// Container Components
// These components provide layout structure (sections, grids, flex containers)
// ============================================================================

const CMS_Section = lazy(() => import('../../../../components/CMS_Container').then(m => ({ default: m.CMS_Section })));
const CMS_Grid = lazy(() => import('../../../../components/CMS_Container').then(m => ({ default: m.CMS_Grid })));
const CMS_Flex = lazy(() => import('../../../../components/CMS_Container').then(m => ({ default: m.CMS_Flex })));

// ============================================================================
// Content Components
// These components render actual content (text, titles, buttons, media)
// ============================================================================

const CMS_Title = lazy(() => import('../../../../components/CMS_Title'));
const CMS_Text = lazy(() => import('../../../../components/CMS_Text'));
const CMS_Button = lazy(() => import('../../../../components/CMS_Button'));
const CMS_Badge = lazy(() => import('../../../../components/CMS_Badge'));
const CMS_Media = lazy(() => import('../../../../components/CMS_Media'));

// ============================================================================
// Layout Components
// These components provide structured layouts (cards, dividers, lists)
// ============================================================================

const CMS_Card = lazy(() => import('../../../../components/CMS_Card'));
const CMS_Divider = lazy(() => import('../../../../components/CMS_Divider'));
const CMS_DividerWithText = lazy(() => import('../../../../components/CMS_Divider').then(m => ({ default: m.CMS_DividerWithText })));
const CMS_DividerWithIcon = lazy(() => import('../../../../components/CMS_Divider').then(m => ({ default: m.CMS_DividerWithIcon })));
const CMS_VerticalDivider = lazy(() => import('../../../../components/CMS_Divider').then(m => ({ default: m.CMS_VerticalDivider })));
const CMS_List = lazy(() => import('../../../../components/CMS_List'));
const CMS_ListItem = lazy(() => import('../../../../components/CMS_List').then(m => ({ default: m.CMS_ListItem })));
const CMS_IconList = lazy(() => import('../../../../components/CMS_List').then(m => ({ default: m.CMS_IconList })));

// ============================================================================
// Data Display Components
// These components render structured data (tables)
// ============================================================================

const CMS_Table = lazy(() => import('../../../../components/CMS_Table'));

// ============================================================================
// Form Components
// These components handle user input (inputs, forms)
// ============================================================================

const CMS_Input = lazy(() => import('../../../../components/CMS_Input'));
const CMS_InputGroup = lazy(() => import('../../../../components/CMS_Input').then(m => ({ default: m.CMS_InputGroup })));
const CMS_InputAddon = lazy(() => import('../../../../components/CMS_Input').then(m => ({ default: m.CMS_InputAddon })));

// ============================================================================
// Utility Components
// ============================================================================

/**
 * ComponentWrapper - Provides a data attribute for component selection
 */
const ComponentWrapper = ({ uid, children }) => {
  if (!uid) return children;
  return (
    <div data-component-id={uid} data-component-selectable="true">
      {children}
    </div>
  );
};

// ============================================================================
// Main Component
// ============================================================================

const HeroSectionCustom = ({ config }) => {
  /**
   * Recursively renders a component based on its type and configuration
   */
  const renderComponent = (component) => {
    if (!component) return null;

    const { uid, component: componentType, children, ...props } = component;

    const withUidWrapper = (element) => {
      return <ComponentWrapper uid={uid}>{element}</ComponentWrapper>;
    };

    switch (componentType) {
      // ======================================================================
      // Container Components
      // ======================================================================

      case 'CMS_Section':
        return withUidWrapper(
          <CMS_Section
            uid={uid}
            classes={props.classes}
            fullWidth={props.fullWidth}
            elementType="section"
          >
            {children?.map((child, index) => (
              <React.Fragment key={child.uid || `section-child-${index}`}>
                {renderComponent(child)}
              </React.Fragment>
            ))}
          </CMS_Section>
        );

      case 'CMS_Grid':
        return withUidWrapper(
          <CMS_Grid
            uid={uid}
            classes={props.classes}
            fullWidth={props.fullWidth}
          >
            {children?.map((child, index) => (
              <React.Fragment key={child.uid || `grid-child-${index}`}>
                {renderComponent(child)}
              </React.Fragment>
            ))}
          </CMS_Grid>
        );

      case 'CMS_Flex':
        return withUidWrapper(
          <CMS_Flex
            uid={uid}
            classes={props.classes}
            fullWidth={props.fullWidth}
          >
            {children?.map((child, index) => (
              <React.Fragment key={child.uid || `flex-child-${index}`}>
                {renderComponent(child)}
              </React.Fragment>
            ))}
          </CMS_Flex>
        );

      // ======================================================================
      // Content Components
      // ======================================================================

      case 'CMS_Badge':
        return withUidWrapper(
          <CMS_Badge
            uid={uid}
            text={props.text}
            icon={props.icon}
            iconLibrary={props.iconLibrary}
            iconPosition={props.iconPosition}
            iconOnly={props.iconOnly}
            size={props.size}
            shape={props.shape}
            count={props.count}
            dot={props.dot}
            pulse={props.pulse}
            clickable={props.clickable}
            href={props.href}
            classes={props.classes}
          />
        );

      case 'CMS_Title':
        return withUidWrapper(
          <CMS_Title
            uid={uid}
            level={props.level || 'h2'}
            text={props.text}
            alignment={props.alignment}
            highlightClasses={props.highlightClasses}
            classes={props.classes}
          />
        );

      case 'CMS_Text':
        return withUidWrapper(
          <CMS_Text
            uid={uid}
            tag={props.tag || 'p'}
            text={props.text}
            alignment={props.alignment}
            listItem={props.listItem}
            bulletPoint={props.bulletPoint}
            highlightClasses={props.highlightClasses}
            classes={props.classes}
          />
        );

      case 'CMS_Button':
        return withUidWrapper(
          <CMS_Button
            uid={uid}
            text={props.text}
            icon={props.icon}
            iconLibrary={props.iconLibrary}
            iconPosition={props.iconPosition}
            iconOnly={props.iconOnly}
            size={props.size}
            fullWidth={props.fullWidth}
            type={props.type}
            disabled={props.disabled}
            loading={props.loading}
            href={props.href}
            method={props.method}
            onClick={props.onClick}
            classes={props.classes}
          />
        );

      case 'CMS_Media':
        return withUidWrapper(
          <CMS_Media
            uid={uid}
            type={props.type}
            src={props.src}
            alt={props.alt}
            poster={props.poster}
            aspectRatio={props.aspectRatio}
            objectFit={props.objectFit}
            objectPosition={props.objectPosition}
            controls={props.controls}
            autoPlay={props.autoPlay}
            loop={props.loop}
            muted={props.muted}
            lazy={props.lazy}
            placeholder={props.placeholder}
            fallback={props.fallback}
            caption={props.caption}
            captionPosition={props.captionPosition}
            playButton={props.playButton}
            href={props.href}
            onClick={props.onClick}
            classes={props.classes}
          />
        );

      // ======================================================================
      // Layout Components
      // ======================================================================

      case 'CMS_Card':
        return withUidWrapper(
          <CMS_Card
            uid={uid}
            layout={props.layout}
            variant={props.variant}
            size={props.size}
            width={props.width}
            height={props.height}
            clickable={props.clickable}
            href={props.href}
            badge={props.badge}
            badgeVariant={props.badgeVariant}
            badgePosition={props.badgePosition}
            media={props.media}
            mediaPosition={props.mediaPosition}
            overlay={props.overlay}
            overlayHover={props.overlayHover}
            header={props.header}
            body={props.body}
            footer={props.footer}
            classes={props.classes}
          >
            {children?.map((child, index) => (
              <React.Fragment key={child.uid || `card-child-${index}`}>
                {renderComponent(child)}
              </React.Fragment>
            ))}
          </CMS_Card>
        );

      case 'CMS_Divider':
        return withUidWrapper(
          <CMS_Divider
            uid={uid}
            orientation={props.orientation}
            variant={props.variant}
            thickness={props.thickness}
            label={props.label}
            labelPosition={props.labelPosition}
            labelVariant={props.labelVariant}
            icon={props.icon}
            iconLibrary={props.iconLibrary}
            iconPosition={props.iconPosition}
            decorative={props.decorative}
            decorativeType={props.decorativeType}
            animated={props.animated}
            classes={props.classes}
          />
        );

      case 'CMS_List':
        return withUidWrapper(
          <CMS_List
            uid={uid}
            type={props.type}
            variant={props.variant}
            style={props.style}
            layout={props.layout}
            columns={props.columns}
            items={props.items || []}
            selectable={props.selectable}
            multiple={props.multiple}
            classes={props.classes}
          >
            {children?.map((child, index) => (
              <React.Fragment key={child.uid || `list-child-${index}`}>
                {renderComponent(child)}
              </React.Fragment>
            ))}
          </CMS_List>
        );

      // ======================================================================
      // Data Display Components
      // ======================================================================

      case 'CMS_Table':
        return withUidWrapper(
          <CMS_Table
            uid={uid}
            columns={props.columns || []}
            data={props.data || []}
            rowKey={props.rowKey}
            variant={props.variant}
            size={props.size}
            sortable={props.sortable}
            selectable={props.selectable}
            pagination={props.pagination}
            pageSize={props.pageSize}
            loading={props.loading}
            classes={props.classes}
            onRowClick={props.onRowClick}
            onSort={props.onSort}
            onPageChange={props.onPageChange}
          />
        );

      // ======================================================================
      // Form Components
      // ======================================================================

      case 'CMS_Input':
        return withUidWrapper(
          <CMS_Input
            uid={uid}
            type={props.type}
            name={props.name}
            label={props.label}
            placeholder={props.placeholder}
            value={props.value}
            defaultValue={props.defaultValue}
            error={props.error}
            hint={props.hint}
            required={props.required}
            disabled={props.disabled}
            leftIcon={props.leftIcon}
            rightIcon={props.rightIcon}
            leftIconLibrary={props.leftIconLibrary}
            rightIconLibrary={props.rightIconLibrary}
            clearable={props.clearable}
            showPasswordToggle={props.showPasswordToggle}
            showCharCount={props.showCharCount}
            loading={props.loading}
            size={props.size}
            variant={props.variant}
            classes={props.classes}
            onChange={props.onChange}
          />
        );

      // ======================================================================
      // Unknown Component Type
      // ======================================================================

      default:
        console.warn(`Unknown component type: ${componentType}`, { uid });
        return null;
    }
  };

  // ==========================================================================
  // Render
  // ==========================================================================

  return (
    <Suspense fallback={<HeroSectionSkeleton />}>
      {renderComponent(config)}
    </Suspense>
  );
};

export default HeroSectionCustom;