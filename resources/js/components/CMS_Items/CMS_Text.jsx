/**
 * CMS_Text Component - Editor-friendly text component with flat class structure
 * 
 * Features:
 * - Flat class structure for easy editing
 * - Multiple HTML tags (p, span, div, li, blockquote, code)
 * - Highlight array for text highlighting
 * - Support for gradients and colors
 * - Dark mode support
 * - Responsive breakpoints
 * - List item support with bullets
 */


import { clsx } from 'clsx';
import React, { forwardRef, useMemo } from 'react';

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
  tag: 'p',
  text: 'Default text content',
  alignment: 'left',
  listItem: false,
  bulletPoint: '•',
  highlightClasses: [], // Array of highlight objects with class strings
};

// Allowed HTML tags
const allowedTags = ['p', 'span', 'div', 'li', 'blockquote', 'code', 'label'];

// Metadata for visual editor
const componentMetadata = {
  name: 'Text',
  description: 'Paragraph and text content with highlighting',
  category: 'typography',
  icon: 'T',
  editable: ['base', 'hover', 'dark', 'md', 'lg'],
  controls: [
    { type: 'select', target: 'tag', label: 'HTML Tag', options: allowedTags },
    { type: 'text', target: 'text', label: 'Text Content' },
    { type: 'class-editor', target: 'base', label: 'Base Styles' },
    { type: 'color-picker', target: 'text-', label: 'Text Color' },
    { type: 'font-size', target: 'text-', label: 'Font Size' },
    { type: 'font-weight', target: 'font-', label: 'Font Weight' },
    { type: 'alignment', target: 'text-', label: 'Alignment' },
    { type: 'spacing', target: 'm-', label: 'Margin' },
    { type: 'spacing', target: 'p-', label: 'Padding' },
    { type: 'max-width', target: 'max-w-', label: 'Max Width' },
    { type: 'highlight', target: 'highlightClasses', label: 'Highlights' },
    { type: 'toggle', target: 'listItem', label: 'List Item' },
    { type: 'text', target: 'bulletPoint', label: 'Bullet Point' },
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

const CMS_Text = forwardRef(({
  // Component identification
  uid,
  component = 'CMS_Text',

  // Main styling - flat class structure
  classes = defaultClasses,

  // Non-class props
  tag = 'p',
  text = 'Default text content',
  alignment = 'left',
  listItem = false,
  bulletPoint = '•',

  // Highlights array - each item is { start, end, class: "text-red-500 font-bold" }
  highlightClasses = [],

  // Extra
  className,
  style,
  children, // Allow children override
  ...props
}, ref) => {

  // Determine HTML tag
  const HtmlTag = useMemo(() => {
    if (tag && allowedTags.includes(tag)) return tag;
    if (listItem) return 'li';
    return 'p';
  }, [tag, listItem]);

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

    // Handle list item with bullet point
    if (listItem && bulletPoint) {
      // If no highlights, simple bullet + text
      if (!highlightClasses?.length) {
        return (
          <>
            <span className="inline-block mr-2 select-none">{bulletPoint}</span>
            {text}
          </>
        );
      }
    }

    // If no highlights, return plain text
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

    // Add bullet point at beginning if needed
    if (listItem && bulletPoint && lastIndex === 0) {
      parts.push(
        <span key="bullet" className="inline-block mr-2 select-none">
          {bulletPoint}
        </span>
      );
    }

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
  }, [text, highlightClasses, listItem, bulletPoint, children]);

  // Build final className
  const finalClassName = useMemo(() => {
    return clsx(baseClasses, className);
  }, [baseClasses, className]);

  return (
    <HtmlTag
      ref={ref}
      className={finalClassName}
      style={style}
      data-uid={uid}
      data-component={component}
      {...props}
    >
      {renderText}
    </HtmlTag>
  );
});

CMS_Text.displayName = 'CMS_Text';
CMS_Text.metadata = componentMetadata;
CMS_Text.defaultProps = defaultProps;

// ============================================================================
// Pre-configured Text Components
// ============================================================================

export const CMS_Paragraph = forwardRef((props, ref) => (
  <CMS_Text ref={ref} tag="p" {...props} />
));
CMS_Paragraph.displayName = 'CMS_Paragraph';

export const CMS_Span = forwardRef((props, ref) => (
  <CMS_Text ref={ref} tag="span" {...props} />
));
CMS_Span.displayName = 'CMS_Span';

export const CMS_Quote = forwardRef((props, ref) => (
  <CMS_Text
    ref={ref}
    tag="blockquote"
    classes={{
      base: clsx('border-l-4 border-gray-300 pl-4 italic', props.classes?.base),
      dark: clsx('dark:border-gray-600', props.classes?.dark),
      ...props.classes
    }}
    {...props}
  />
));
CMS_Quote.displayName = 'CMS_Quote';

export const CMS_Code = forwardRef((props, ref) => (
  <CMS_Text
    ref={ref}
    tag="code"
    classes={{
      base: clsx('bg-gray-100 rounded px-1 py-0.5 font-mono text-sm', props.classes?.base),
      dark: clsx('dark:bg-gray-800', props.classes?.dark),
      ...props.classes
    }}
    {...props}
  />
));
CMS_Code.displayName = 'CMS_Code';

export const CMS_Label = forwardRef((props, ref) => (
  <CMS_Text
    ref={ref}
    tag="label"
    classes={{
      base: clsx('text-sm font-medium uppercase tracking-wide', props.classes?.base),
      ...props.classes
    }}
    {...props}
  />
));
CMS_Label.displayName = 'CMS_Label';

export const CMS_ListItem = forwardRef((props, ref) => (
  <CMS_Text
    ref={ref}
    tag="li"
    listItem={true}
    bulletPoint="•"
    {...props}
  />
));
CMS_ListItem.displayName = 'CMS_ListItem';

// ============================================================================
// Export
// ============================================================================

export default CMS_Text;