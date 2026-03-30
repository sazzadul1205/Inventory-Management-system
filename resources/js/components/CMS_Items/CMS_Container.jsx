/**
 * CMS_Container Component - Editor-friendly container with flat class structure
 * 
 * Features:
 * - Flat class structure for easy visual editing
 * - Support for base, hover, focus, active states
 * - Dark mode support (dark, darkHover)
 * - Responsive breakpoints (sm, md, lg, xl, 2xl)
 * - Full-width wrapper option
 * - Debug overlay for development
 */

import clsx from 'clsx';
import React, { forwardRef, useMemo } from 'react';

// ============================================================================
// Types & Defaults
// ============================================================================

// Default class structure - all empty, editor will fill these
const defaultClasses = {
  // Base styles (always applied)
  base: '',

  // Interactive states
  hover: '',
  focus: '',
  active: '',

  // Theme states
  dark: '',
  darkHover: '',
  darkFocus: '',

  // Responsive breakpoints (mobile-first)
  sm: '',   // sm: (640px)
  md: '',   // md: (768px)
  lg: '',   // lg: (1024px)
  xl: '',   // xl: (1280px)
  '2xl': '', // 2xl: (1536px)

  // Custom class for editor overrides
  custom: '',
};

// Metadata for visual editor
const componentMetadata = {
  name: 'Container',
  description: 'Flexible layout container with spacing and background',
  category: 'layout',
  icon: '📦',
  editable: ['base', 'hover', 'dark', 'sm', 'md', 'lg'],
  controls: [
    { type: 'class-editor', target: 'base', label: 'Base Styles' },
    { type: 'toggle-group', label: 'States', options: ['hover', 'focus', 'active'] },
    { type: 'color-picker', target: 'bg-', label: 'Background' },
    { type: 'spacing', target: 'p-', label: 'Padding' },
    { type: 'spacing', target: 'm-', label: 'Margin' },
    { type: 'border', target: 'border', label: 'Border' },
    { type: 'shadow', target: 'shadow', label: 'Shadow' },
    { type: 'width', target: 'w-', label: 'Width' },
    { type: 'max-width', target: 'max-w-', label: 'Max Width' },
    { type: 'height', target: 'h-', label: 'Height' },
    { type: 'min-height', target: 'min-h-', label: 'Min Height' },
  ]
};

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Build final class string from config
 */
const buildClasses = (classes = {}, extraClassName) => {
  return clsx(
    // Base styles
    classes.base,

    // Interactive states
    classes.hover && classes.hover,
    classes.focus && classes.focus,
    classes.active && classes.active,

    // Theme states
    classes.dark && classes.dark,
    classes.darkHover && classes.darkHover,
    classes.darkFocus && classes.darkFocus,

    // Responsive (applied automatically by Tailwind)
    classes.sm && classes.sm,
    classes.md && classes.md,
    classes.lg && classes.lg,
    classes.xl && classes.xl,
    classes['2xl'] && classes['2xl'],

    // Custom override
    classes.custom,

    // Emergency override
    extraClassName
  );
};

/**
 * Extract specific style from class string (for editor controls)
 */
export const extractClassValue = (classString, prefix) => {
  if (!classString) return null;
  const classes = classString.split(' ');
  const target = classes.find(c => c.startsWith(prefix));
  return target ? target.replace(prefix, '') : null;
};

/**
 * Update specific style in class string
 */
export const updateClassValue = (classString, prefix, newValue) => {
  if (!classString) return newValue ? `${prefix}${newValue}` : '';

  const classes = classString.split(' ');
  const filtered = classes.filter(c => !c.startsWith(prefix));

  if (newValue) {
    filtered.push(`${prefix}${newValue}`);
  }

  return filtered.join(' ');
};

// ============================================================================
// Debug Overlay Component
// ============================================================================

const DebugOverlay = ({ children, classes, uid, componentName }) => {
  if (process.env.NODE_ENV !== 'development') return children;

  return (
    <div className="relative group">
      {/* Debug Label - visible on hover */}
      <div className="absolute top-0 left-0 z-50 px-2 py-1 text-xs font-mono bg-black text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="flex flex-col">
          <span className="font-bold">{componentName || 'Container'}</span>
          {uid && <span className="text-xs opacity-75">UID: {uid}</span>}
        </div>
      </div>

      {/* Visual padding/margin indicators - toggle with data attributes */}
      <div className="absolute inset-0 pointer-events-none z-40 ring-1 ring-blue-500/20 ring-inset" />

      {children}
    </div>
  );
};

// ============================================================================
// Main Component
// ============================================================================

const CMS_Container = forwardRef(({
  // Component identification
  uid,
  component = 'CMS_Container',

  // Main styling - flat class structure
  classes = defaultClasses,

  // Special props
  fullWidth = false,
  elementType: Element = 'div',

  // Debug
  debug = false,

  // Children & extras
  children,
  className,
  style,
  ...props
}, ref) => {

  // Build final classes
  const finalClasses = useMemo(() => {
    return buildClasses(classes, className);
  }, [classes, className]);

  // Render with or without wrapper
  const renderContent = () => (
    <Element
      ref={ref}
      className={finalClasses}
      style={style}
      data-uid={uid}
      data-component={component}
      {...props}
    >
      {children}
    </Element>
  );

  // Wrap with debug overlay if needed
  const content = debug ? (
    <DebugOverlay uid={uid} componentName={component}>
      {renderContent()}
    </DebugOverlay>
  ) : renderContent();

  // Add full-width wrapper if needed
  if (fullWidth) {
    return (
      <div className="w-full">
        {content}
      </div>
    );
  }

  return content;
});

CMS_Container.displayName = 'CMS_Container';
CMS_Container.metadata = componentMetadata;

// ============================================================================
// Specialized Components
// ============================================================================

export const CMS_Grid = forwardRef((props, ref) => {
  // Grid-specific class enhancement
  const gridClasses = {
    ...props.classes,
    base: clsx('grid', props.classes?.base),
  };

  return (
    <CMS_Container
      ref={ref}
      {...props}
      component="CMS_Grid"
      classes={gridClasses}
    />
  );
});

CMS_Grid.displayName = 'CMS_Grid';
CMS_Grid.metadata = {
  ...componentMetadata,
  name: 'Grid',
  description: 'Responsive grid layout container',
  icon: '🔲',
  controls: [
    ...componentMetadata.controls,
    { type: 'grid-cols', target: 'grid-cols-', label: 'Columns' },
    { type: 'gap', target: 'gap-', label: 'Gap' },
  ]
};

export const CMS_Flex = forwardRef((props, ref) => {
  const flexClasses = {
    ...props.classes,
    base: clsx('flex', props.classes?.base),
  };

  return (
    <CMS_Container
      ref={ref}
      {...props}
      component="CMS_Flex"
      classes={flexClasses}
    />
  );
});

CMS_Flex.displayName = 'CMS_Flex';
CMS_Flex.metadata = {
  ...componentMetadata,
  name: 'Flex',
  description: 'Flexbox layout container',
  icon: '➡️',
  controls: [
    ...componentMetadata.controls,
    { type: 'flex-direction', target: 'flex-', label: 'Direction' },
    { type: 'justify', target: 'justify-', label: 'Justify' },
    { type: 'align', target: 'items-', label: 'Align' },
  ]
};

export const CMS_Section = forwardRef((props, ref) => {
  return (
    <CMS_Container
      ref={ref}
      {...props}
      component="CMS_Section"
      elementType="section"
    />
  );
});

CMS_Section.displayName = 'CMS_Section';
CMS_Section.metadata = {
  ...componentMetadata,
  name: 'Section',
  description: 'Semantic section container',
  icon: '📄',
};

// ============================================================================
// Export everything
// ============================================================================

export default CMS_Container;