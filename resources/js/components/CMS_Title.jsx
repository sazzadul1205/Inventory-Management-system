/**
 * CMS_Title Component - Editor-friendly title with flat class structure
 * 
 * Features:
 * - Flat class structure for easy editing
 * - Multiple heading levels (h1-h6)
 * - Highlight array for text highlighting
 * - Support for gradients and colors
 * - Dark mode support
 * - Responsive breakpoints
 */

import React, { forwardRef, useMemo } from 'react';
import clsx from 'clsx';

// ============================================================================
// Types & Defaults
// ============================================================================

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

  // Responsive breakpoints
  sm: '',
  md: '',
  lg: '',
  xl: '',
  '2xl': '',

  // Custom override
  custom: '',
};

// Default props (non-class properties)
const defaultProps = {
  level: 'h2',
  text: 'Default Title',
  alignment: 'left',
  highlightClasses: [], // Array of highlight objects with class strings
};

// Metadata for visual editor
const componentMetadata = {
  name: 'Title',
  description: 'Heading component with highlighting',
  category: 'typography',
  icon: 'H',
  editable: ['base', 'hover', 'dark', 'md', 'lg'],
  controls: [
    { type: 'select', target: 'level', label: 'Heading Level', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] },
    { type: 'text', target: 'text', label: 'Text Content' },
    { type: 'class-editor', target: 'base', label: 'Base Styles' },
    { type: 'color-picker', target: 'text-', label: 'Text Color' },
    { type: 'font-size', target: 'text-', label: 'Font Size' },
    { type: 'font-weight', target: 'font-', label: 'Font Weight' },
    { type: 'alignment', target: 'text-', label: 'Alignment' },
    { type: 'spacing', target: 'm-', label: 'Margin' },
    { type: 'spacing', target: 'p-', label: 'Padding' },
    { type: 'highlight', target: 'highlightClasses', label: 'Highlights' },
  ]
};

// Allowed heading levels
const allowedHeadingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

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
    classes.hover,
    classes.focus,
    classes.active,

    // Theme states
    classes.dark,
    classes.darkHover,
    classes.darkFocus,

    // Responsive
    classes.sm,
    classes.md,
    classes.lg,
    classes.xl,
    classes['2xl'],

    // Custom override
    classes.custom,

    // Emergency override
    extraClassName
  );
};

/**
 * Get alignment class
 */
const getAlignmentClass = (alignment) => {
  switch (alignment) {
    case 'center': return 'text-center';
    case 'right': return 'text-right';
    case 'justify': return 'text-justify';
    case 'left': default: return 'text-left';
  }
};

// ============================================================================
// Main Component
// ============================================================================

const CMS_Title = forwardRef(({
  // Component identification
  uid,
  component = 'CMS_Title',

  // Main styling - flat class structure
  classes = defaultClasses,

  // Non-class props
  level = 'h2',
  text = 'Default Title',
  alignment = 'left',

  // Highlights array - each item is { start, end, class: "text-red-500 font-bold" }
  highlightClasses = [],

  // Debug
  debug = false,

  // Extra
  className,
  style,
  children, // Allow children override
  ...props
}, ref) => {

  // Safe heading level
  const HeadingTag = useMemo(() => {
    return allowedHeadingLevels.includes(level) ? level : 'h2';
  }, [level]);

  // Build base classes
  const baseClasses = useMemo(() => {
    return clsx(
      buildClasses(classes),
      getAlignmentClass(alignment)
    );
  }, [classes, alignment]);

  /**
   * Render text with highlights
   */
  const renderText = useMemo(() => {
    // If children provided, use them instead
    if (children) return children;

    // If no highlights or text, return plain text
    if (!highlightClasses?.length || !text) {
      return text;
    }

    // Sort highlights by start position
    const sortedHighlights = [...highlightClasses]
      .filter(h => h.start >= 0 && h.end <= text.length && h.start < h.end)
      .sort((a, b) => a.start - b.start);

    if (sortedHighlights.length === 0) return text;

    let lastIndex = 0;
    const parts = [];

    sortedHighlights.forEach((highlight, idx) => {
      const { start, end, class: highlightClass = '' } = highlight;

      // Add text before highlight
      if (start > lastIndex) {
        parts.push(
          <span key={`text-${idx}`}>
            {text.substring(lastIndex, start)}
          </span>
        );
      }

      // Add highlighted text
      parts.push(
        <span
          key={`highlight-${idx}`}
          className={highlightClass}
        >
          {text.substring(start, end)}
        </span>
      );

      lastIndex = end;
    });

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push(
        <span key="text-end">
          {text.substring(lastIndex)}
        </span>
      );
    }

    return parts;
  }, [text, highlightClasses, children]);

  // Build final className
  const finalClassName = useMemo(() => {
    return clsx(baseClasses, className);
  }, [baseClasses, className]);

  return (
    <HeadingTag
      ref={ref}
      className={finalClassName}
      style={style}
      data-uid={uid}
      data-component={component}
      {...props}
    >
      {renderText}
    </HeadingTag>
  );
});

CMS_Title.displayName = 'CMS_Title';
CMS_Title.metadata = componentMetadata;
CMS_Title.defaultProps = defaultProps;

// ============================================================================
// Pre-configured Title Components
// ============================================================================

export const CMS_H1 = forwardRef((props, ref) => (
  <CMS_Title ref={ref} level="h1" {...props} />
));
CMS_H1.displayName = 'CMS_H1';

export const CMS_H2 = forwardRef((props, ref) => (
  <CMS_Title ref={ref} level="h2" {...props} />
));
CMS_H2.displayName = 'CMS_H2';

export const CMS_H3 = forwardRef((props, ref) => (
  <CMS_Title ref={ref} level="h3" {...props} />
));
CMS_H3.displayName = 'CMS_H3';

export const CMS_H4 = forwardRef((props, ref) => (
  <CMS_Title ref={ref} level="h4" {...props} />
));
CMS_H4.displayName = 'CMS_H4';

// ============================================================================
// Export
// ============================================================================

export default CMS_Title;