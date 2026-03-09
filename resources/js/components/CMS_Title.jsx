/**
 * CMS_Title Component - A highly customizable title component with dark mode support
 * 
 * This component renders a title with configurable styling and multiple text highlighting options.
 * All properties can be controlled through a configuration object passed from the parent.
 * Uses Tailwind CSS for styling with dark mode support via the 'dark:' modifier.
 */

import React, { useMemo } from 'react';

// Default configuration - defined outside component to prevent recreation
const defaultConfig = {
  text: "Default Title",
  variant: "hero",                 // Predefined variants: "hero", "section", "card", "subsection", "caption"
  alignment: "left",
  color: "text-gray-900",
  darkColor: "dark:text-white",
  margin: "m-0",
  padding: "p-0",
  wrapping: "normal",              // "normal", "truncate", "break-words"
  overflow: "visible",             // "visible", "hidden", "ellipsis"
  highlightParts: [],
  // Gradient support
  gradient: null,                  // e.g., "from-blue-600 to-purple-600"
  darkGradient: null,              // e.g., "dark:from-blue-400 dark:to-purple-400"
  gradientDirection: "to-r",       // "to-r", "to-b", "to-tl", etc.
  // Z-Layer support
  zLayer: "auto",                   // Z-index: "auto", "0", "10", "20", "30", "40", "50", or custom e.g., "z-100"
  zLayerMobile: null,               // Mobile specific z-index
  zLayerTablet: null,               // Tablet specific z-index
  zLayerDesktop: null,              // Desktop specific z-index
  // Positioning context
  position: "relative",             // "static", "relative", "absolute", "fixed", "sticky"
  // Accessibility
  ariaLabel: "",
  role: "heading"
};

// Default variant mappings - can be extended with custom variants
const defaultVariantStyles = {
  hero: {
    fontSize: "text-5xl md:text-6xl",
    fontWeight: "font-bold",
    letterSpacing: "tracking-tight",
    lineHeight: "leading-tight"
  },
  section: {
    fontSize: "text-3xl md:text-4xl",
    fontWeight: "font-semibold",
    letterSpacing: "tracking-normal",
    lineHeight: "leading-snug"
  },
  subsection: {
    fontSize: "text-2xl md:text-3xl",
    fontWeight: "font-semibold",
    letterSpacing: "tracking-normal",
    lineHeight: "leading-relaxed"
  },
  card: {
    fontSize: "text-xl md:text-2xl",
    fontWeight: "font-medium",
    letterSpacing: "tracking-normal",
    lineHeight: "leading-relaxed"
  },
  caption: {
    fontSize: "text-sm md:text-base",
    fontWeight: "font-normal",
    letterSpacing: "tracking-wide",
    lineHeight: "leading-normal",
    color: "text-gray-600",
    darkColor: "dark:text-gray-400"
  }
};

// Allowed heading levels for safety
const allowedHeadingLevels = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

// Z-index mapping for Tailwind classes
const zIndexMap = {
  'auto': 'z-auto',
  '0': 'z-0',
  '10': 'z-10',
  '20': 'z-20',
  '30': 'z-30',
  '40': 'z-40',
  '50': 'z-50',
  'max': 'z-max', // If you have custom z-max in your config
  'min': 'z-min'  // If you have custom z-min in your config
};

/**
 * Main Title Component
 * @param {Object} props - Component props
 * @param {Object} props.config - Configuration object for the title
 * @param {Object} props.customVariants - Custom variant styles to merge/override defaults
 * @returns {JSX.Element} Rendered title component
 */
const CMS_Title = ({
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

  // Safe heading level
  const HeadingTag = useMemo(() => {
    return allowedHeadingLevels.includes(mergedConfig.level)
      ? mergedConfig.level
      : 'h1';
  }, [mergedConfig.level]);

  /**
   * Converts alignment prop to Tailwind class
   */
  const getAlignmentClass = (alignment) => {
    switch (alignment) {
      case 'center': return 'text-center';
      case 'right': return 'text-right';
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
        classes.push(zLayer); // Custom z-index class
      } else if (!isNaN(zLayer)) {
        classes.push(`z-${zLayer}`); // Convert number to z-index class
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
        highlightColor,           // Can be regular color class or gradient
        darkHighlightColor,        // Dark mode version
        highlightGradient,         // Specific gradient for this highlight
        darkHighlightGradient,     // Dark mode gradient for this highlight
        highlightGradientDirection = 'to-r',
        highlightStyle = {}
      } = highlight;

      // Add text before highlight
      if (start > lastIndex) {
        // Check if this text segment should have gradient
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

      // Check if highlight uses gradient
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
      // Check if remaining text should have gradient
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
  }, [mergedConfig.text, mergedConfig.highlightParts, mergedConfig.gradient, mergedConfig.darkGradient, mergedConfig.gradientDirection]);

  // Memoize styles and classes
  const { overflowResult, headingClasses, headingStyles } = useMemo(() => {
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

    // Determine if the main title uses gradient
    const gradientClasses = mergedConfig.gradient
      ? getGradientClasses(mergedConfig.gradient, mergedConfig.darkGradient, mergedConfig.gradientDirection)
      : '';

    const classes = [
      mergedConfig.position,      // positioning context
      alignment,
      wrapping,
      overflow.className,
      ...zLayerClasses,           // Spread z-index classes
      mergedConfig.fontSize,
      mergedConfig.fontWeight,
      // Only add color classes if not using gradient
      ...(mergedConfig.gradient ? [gradientClasses] : [
        mergedConfig.color,
        mergedConfig.darkColor
      ]),
      mergedConfig.margin,
      mergedConfig.padding,
      mergedConfig.letterSpacing,
      mergedConfig.lineHeight,
      mergedConfig.textTransform
    ].filter(Boolean).join(' ');

    return {
      overflowResult: overflow,
      headingClasses: classes,
      headingStyles: overflow.style
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
    <HeadingTag
      className={headingClasses}
      style={headingStyles}
      {...accessibilityProps}
    >
      {renderHighlightedText}
    </HeadingTag>
  );
};

export default CMS_Title;