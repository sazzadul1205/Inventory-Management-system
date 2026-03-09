/**
 * CMS_Text Component - A highly customizable text component for descriptions and body content
 * 
 * This component renders text content with configurable styling and multiple highlighting options.
 * Perfect for descriptions, paragraphs, and general text content.
 * Uses Tailwind CSS for styling with dark mode support via the 'dark:' modifier.
 */

import React, { useMemo } from 'react';

// Default configuration - defined outside component to prevent recreation
const defaultConfig = {
  text: "Default text content",
  variant: "body",                  // Predefined variants: "body", "description", "lead", "small", "tiny"
  alignment: "left",
  color: "text-gray-700",
  darkColor: "dark:text-gray-300",
  margin: "mb-4",
  padding: "p-0",
  wrapping: "normal",               // "normal", "truncate", "break-words"
  overflow: "visible",              // "visible", "hidden", "ellipsis"
  highlightParts: [],
  // Gradient support
  gradient: null,                   // e.g., "from-blue-400 to-purple-500"
  darkGradient: null,               // e.g., "dark:from-blue-300 dark:to-purple-300"
  gradientDirection: "to-r",        // "to-r", "to-b", "to-tl", etc.
  // Z-Layer support
  zLayer: "auto",                    // Z-index: "auto", "0", "10", "20", "30", "40", "50"
  zLayerMobile: null,
  zLayerTablet: null,
  zLayerDesktop: null,
  // Positioning context
  position: "relative",              // "static", "relative", "absolute", "fixed", "sticky"
  // Text specific properties
  maxWidth: null,                    // e.g., "max-w-prose", "max-w-2xl"
  indent: null,                      // e.g., "indent-8" for first line indent
  listItem: false,                   // Whether this is a list item
  bulletPoint: null,                 // Custom bullet point for lists
  // Accessibility
  ariaLabel: "",
  role: ""                           // Auto-set based on context
};

// Default variant mappings for text content
const defaultVariantStyles = {
  // Body text variants
  body: {
    fontSize: "text-base md:text-lg",
    fontWeight: "font-normal",
    letterSpacing: "tracking-normal",
    lineHeight: "leading-relaxed",
    color: "text-gray-700",
    darkColor: "dark:text-gray-300"
  },
  lead: {
    fontSize: "text-lg md:text-xl",
    fontWeight: "font-light",
    letterSpacing: "tracking-wide",
    lineHeight: "leading-relaxed",
    color: "text-gray-600",
    darkColor: "dark:text-gray-400"
  },
  description: {
    fontSize: "text-base",
    fontWeight: "font-normal",
    letterSpacing: "tracking-normal",
    lineHeight: "leading-relaxed",
    color: "text-gray-600",
    darkColor: "dark:text-gray-400"
  },
  small: {
    fontSize: "text-sm",
    fontWeight: "font-normal",
    letterSpacing: "tracking-normal",
    lineHeight: "leading-normal",
    color: "text-gray-500",
    darkColor: "dark:text-gray-500"
  },
  tiny: {
    fontSize: "text-xs",
    fontWeight: "font-light",
    letterSpacing: "tracking-wide",
    lineHeight: "leading-normal",
    color: "text-gray-400",
    darkColor: "dark:text-gray-600"
  },

  // Specialized text variants
  quote: {
    fontSize: "text-lg md:text-xl",
    fontWeight: "font-light",
    letterSpacing: "tracking-wide",
    lineHeight: "leading-relaxed",
    color: "text-gray-600",
    darkColor: "dark:text-gray-400",
    fontStyle: "italic",
    className: "border-l-4 border-gray-300 pl-4"
  },
  code: {
    fontSize: "text-sm",
    fontWeight: "font-mono",
    letterSpacing: "tracking-normal",
    lineHeight: "leading-normal",
    color: "text-gray-800",
    darkColor: "dark:text-gray-200",
    className: "bg-gray-100 dark:bg-gray-800 rounded px-1 py-0.5"
  },
  label: {
    fontSize: "text-sm",
    fontWeight: "font-medium",
    letterSpacing: "tracking-wide",
    lineHeight: "leading-normal",
    color: "text-gray-600",
    darkColor: "dark:text-gray-400",
    textTransform: "uppercase"
  },

  // List variants
  bulletList: {
    fontSize: "text-base",
    fontWeight: "font-normal",
    letterSpacing: "tracking-normal",
    lineHeight: "leading-relaxed",
    color: "text-gray-700",
    darkColor: "dark:text-gray-300",
    listItem: true,
    bulletPoint: "•"
  },
  numberedList: {
    fontSize: "text-base",
    fontWeight: "font-normal",
    letterSpacing: "tracking-normal",
    lineHeight: "leading-relaxed",
    color: "text-gray-700",
    darkColor: "dark:text-gray-300",
    listItem: true,
    bulletPoint: "1."
  }
};

// Allowed HTML tags for text content
const allowedTags = ['p', 'span', 'div', 'li', 'blockquote', 'code', 'label'];

// Z-index mapping for Tailwind classes
const zIndexMap = {
  'auto': 'z-auto',
  '0': 'z-0',
  '10': 'z-10',
  '20': 'z-20',
  '30': 'z-30',
  '40': 'z-40',
  '50': 'z-50',
  'max': 'z-max',
  'min': 'z-min'
};

/**
 * Main Text Component
 * @param {Object} props - Component props
 * @param {Object} props.config - Configuration object for the text
 * @param {Object} props.customVariants - Custom variant styles to merge/override defaults
 * @returns {JSX.Element} Rendered text component
 */
const CMS_Text = ({
  config = defaultConfig,
  customVariants = {} // Allow custom variants to be passed from parent
}) => {

  // Merge default variants with custom variants
  const variantStyles = useMemo(() => ({
    ...defaultVariantStyles,
    ...customVariants
  }), [customVariants]);

  // Merge config with defaults and apply variant styles
  const mergedConfig = useMemo(() => {
    const baseConfig = {
      ...defaultConfig,
      ...config
    };

    // Apply variant styles if variant exists
    if (baseConfig.variant && variantStyles[baseConfig.variant]) {
      return {
        ...baseConfig,
        ...variantStyles[baseConfig.variant]
      };
    }

    return baseConfig;
  }, [config, variantStyles]);

  // Determine HTML tag based on context
  const HtmlTag = useMemo(() => {
    // If specific tag requested and allowed
    if (mergedConfig.tag && allowedTags.includes(mergedConfig.tag)) {
      return mergedConfig.tag;
    }

    // Auto-select based on variant
    switch (mergedConfig.variant) {
      case 'quote': return 'blockquote';
      case 'code': return 'code';
      case 'label': return 'label';
      case 'bulletList':
      case 'numberedList': return 'li';
      default: return 'p';
    }
  }, [mergedConfig.tag, mergedConfig.variant]);

  /**
   * Converts alignment prop to Tailwind class
   */
  const getAlignmentClass = (alignment) => {
    switch (alignment) {
      case 'center': return 'text-center';
      case 'right': return 'text-right';
      case 'justify': return 'text-justify';
      case 'left': default: return 'text-left';
    }
  };

  /**
   * Converts wrapping prop to Tailwind class
   */
  const getWrappingClass = (wrapping) => {
    switch (wrapping) {
      case 'truncate': return 'truncate';
      case 'break-words': return 'break-words';
      case 'normal': default: return 'whitespace-normal';
    }
  };

  /**
   * Converts overflow prop to Tailwind/utility class
   */
  const getOverflowClasses = (overflow) => {
    switch (overflow) {
      case 'hidden':
        return { className: 'overflow-hidden' };
      case 'ellipsis':
        return {
          className: 'overflow-hidden truncate',
          style: { textOverflow: 'ellipsis' }
        };
      case 'visible':
      default:
        return { className: 'overflow-visible' };
    }
  };

  /**
   * Builds gradient classes for text
   */
  const getGradientClasses = (gradient, darkGradient, direction = 'to-r') => {
    if (!gradient) return '';

    const gradientClasses = [
      `bg-gradient-${direction}`,
      gradient,
      'bg-clip-text',
      'text-transparent'
    ];

    if (darkGradient) {
      gradientClasses.push(darkGradient);
    }

    return gradientClasses.join(' ');
  };

  /**
   * Builds z-index classes with responsive support
   */
  const getZLayerClasses = (zLayer, zMobile, zTablet, zDesktop) => {
    const classes = [];

    // Handle base z-index
    if (zLayer) {
      if (zIndexMap[zLayer]) {
        classes.push(zIndexMap[zLayer]);
      } else if (zLayer.startsWith('z-')) {
        classes.push(zLayer);
      } else if (!isNaN(zLayer)) {
        classes.push(`z-${zLayer}`);
      }
    }

    // Handle responsive z-indices
    if (zMobile) {
      const mobileClass = zIndexMap[zMobile] || (zMobile.startsWith('z-') ? zMobile : `z-${zMobile}`);
      classes.push(mobileClass);
    }

    if (zTablet) {
      const tabletClass = zIndexMap[zTablet] || (zTablet.startsWith('z-') ? zTablet : `z-${zTablet}`);
      classes.push(`md:${tabletClass}`);
    }

    if (zDesktop) {
      const desktopClass = zIndexMap[zDesktop] || (zDesktop.startsWith('z-') ? zDesktop : `z-${zDesktop}`);
      classes.push(`lg:${desktopClass}`);
    }

    return classes;
  };

  /**
   * Renders text with highlight sections - MEMOIZED
   * Supports both regular and gradient highlights
   */
  const renderHighlightedText = useMemo(() => {
    const { text, highlightParts, gradient, darkGradient, gradientDirection } = mergedConfig;

    if (!highlightParts || highlightParts.length === 0) {
      // Add bullet point for list items if needed
      if (mergedConfig.listItem && mergedConfig.bulletPoint) {
        return (
          <>
            <span className="inline-block mr-2">{mergedConfig.bulletPoint}</span>
            {text}
          </>
        );
      }
      return text;
    }

    let lastIndex = 0;
    const parts = [];

    // Sort highlights once
    const sortedHighlights = [...highlightParts]
      .filter(h => h.start >= 0 && h.end <= text.length && h.start < h.end)
      .sort((a, b) => a.start - b.start);

    sortedHighlights.forEach((highlight, idx) => {
      const {
        start,
        end,
        highlightColor,
        darkHighlightColor,
        highlightGradient,
        darkHighlightGradient,
        highlightGradientDirection = 'to-r',
        highlightStyle = {}
      } = highlight;

      // Add text before highlight
      if (start > lastIndex) {
        // Add bullet point at the very beginning if needed
        if (lastIndex === 0 && mergedConfig.listItem && mergedConfig.bulletPoint) {
          parts.push(
            <span key={`bullet-${idx}`} className="inline-block mr-2">
              {mergedConfig.bulletPoint}
            </span>
          );
        }

        if (gradient && !highlightParts.some(h => h.start <= lastIndex && h.end >= lastIndex)) {
          parts.push(
            <span
              key={`text-${idx}`}
              className={getGradientClasses(gradient, darkGradient, gradientDirection)}
            >
              {text.substring(lastIndex, start)}
            </span>
          );
        } else {
          parts.push(
            <span key={`text-${idx}`}>
              {text.substring(lastIndex, start)}
            </span>
          );
        }
      }

      // Build className for highlight
      let highlightClassName = '';

      if (highlightGradient) {
        highlightClassName = getGradientClasses(
          highlightGradient,
          darkHighlightGradient || darkHighlightColor,
          highlightGradientDirection
        );
      } else if (highlightColor) {
        highlightClassName = highlightColor;
        if (darkHighlightColor) {
          highlightClassName += ` ${darkHighlightColor}`;
        }
      }

      // Add the HIGHLIGHTED text section
      parts.push(
        <span
          key={`highlight-${idx}`}
          className={highlightClassName.trim() || undefined}
          style={highlightStyle}
        >
          {text.substring(start, end)}
        </span>
      );

      lastIndex = end;
    });

    // Add remaining text AFTER the last highlight
    if (lastIndex < text.length) {
      if (gradient && !highlightParts.some(h => h.start <= lastIndex && h.end >= lastIndex)) {
        parts.push(
          <span
            key="text-end"
            className={getGradientClasses(gradient, darkGradient, gradientDirection)}
          >
            {text.substring(lastIndex)}
          </span>
        );
      } else {
        parts.push(
          <span key="text-end">
            {text.substring(lastIndex)}
          </span>
        );
      }
    }

    return parts;
  }, [mergedConfig.text, mergedConfig.highlightParts, mergedConfig.gradient,
  mergedConfig.darkGradient, mergedConfig.gradientDirection,
  mergedConfig.listItem, mergedConfig.bulletPoint]);

  // Memoize styles and classes
  const { overflowResult, textClasses, textStyles } = useMemo(() => {
    const overflow = getOverflowClasses(mergedConfig.overflow);
    const alignment = getAlignmentClass(mergedConfig.alignment);
    const wrapping = getWrappingClass(mergedConfig.wrapping);

    // Get z-layer classes
    const zLayerClasses = getZLayerClasses(
      mergedConfig.zLayer,
      mergedConfig.zLayerMobile,
      mergedConfig.zLayerTablet,
      mergedConfig.zLayerDesktop
    );

    // Determine if the main text uses gradient
    const gradientClasses = mergedConfig.gradient
      ? getGradientClasses(mergedConfig.gradient, mergedConfig.darkGradient, mergedConfig.gradientDirection)
      : '';

    const classes = [
      mergedConfig.position,
      alignment,
      wrapping,
      overflow.className,
      ...zLayerClasses,
      mergedConfig.maxWidth,
      mergedConfig.indent,
      mergedConfig.fontSize,
      mergedConfig.fontWeight,
      mergedConfig.fontStyle,
      // Only add color classes if not using gradient
      ...(mergedConfig.gradient ? [gradientClasses] : [
        mergedConfig.color,
        mergedConfig.darkColor
      ]),
      mergedConfig.margin,
      mergedConfig.padding,
      mergedConfig.letterSpacing,
      mergedConfig.lineHeight,
      mergedConfig.textTransform,
      mergedConfig.className // Allow additional custom classes
    ].filter(Boolean).join(' ');

    return {
      overflowResult: overflow,
      textClasses: classes,
      textStyles: {
        ...overflow.style,
        ...mergedConfig.style
      }
    };
  }, [mergedConfig]);

  // Accessibility attributes
  const accessibilityProps = {
    ...(mergedConfig.ariaLabel && { 'aria-label': mergedConfig.ariaLabel }),
    ...(mergedConfig.role && { role: mergedConfig.role }),
    ...((mergedConfig.wrapping === 'truncate' || mergedConfig.overflow === 'ellipsis') &&
      { title: mergedConfig.text })
  };

  return (
    <HtmlTag
      className={textClasses}
      style={textStyles}
      {...accessibilityProps}
    >
      {renderHighlightedText}
    </HtmlTag>
  );
};

export default CMS_Text;