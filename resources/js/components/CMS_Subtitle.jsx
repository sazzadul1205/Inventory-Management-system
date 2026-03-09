/**
 * CMS_Subtitle Component - A highly customizable subtitle component with dark mode support
 * 
 * This component renders a subtitle with configurable styling and multiple text highlighting options.
 * All properties can be controlled through a configuration object passed from the parent.
 * Uses Tailwind CSS for styling with dark mode support via the 'dark:' modifier.
 * Designed to complement F_Title with appropriate sizing and styling.
 */

import React, { useMemo } from 'react';

// Default configuration - defined outside component to prevent recreation
const defaultConfig = {
  text: "Default Subtitle",
  variant: "subtitle",             // Predefined variants: "subtitle", "description", "meta", "caption"
  alignment: "left",
  color: "text-gray-600",
  darkColor: "dark:text-gray-400",
  margin: "mt-2 mb-4",
  padding: "p-0",
  wrapping: "normal",              // "normal", "truncate", "break-words"
  overflow: "visible",             // "visible", "hidden", "ellipsis"
  highlightParts: [],
  // Gradient support
  gradient: null,                  // e.g., "from-blue-400 to-purple-500"
  darkGradient: null,              // e.g., "dark:from-blue-300 dark:to-purple-300"
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
  role: "doc-subtitle"              // Appropriate role for subtitle
};

// Default variant mappings - specifically designed for subtitles
const defaultVariantStyles = {
  subtitle: {
    fontSize: "text-xl md:text-2xl",
    fontWeight: "font-normal",
    letterSpacing: "tracking-normal",
    lineHeight: "leading-relaxed",
    color: "text-gray-600",
    darkColor: "dark:text-gray-400"
  },
  description: {
    fontSize: "text-base md:text-lg",
    fontWeight: "font-light",
    letterSpacing: "tracking-wide",
    lineHeight: "leading-relaxed",
    color: "text-gray-500",
    darkColor: "dark:text-gray-500"
  },
  meta: {
    fontSize: "text-sm md:text-base",
    fontWeight: "font-medium",
    letterSpacing: "tracking-wider",
    lineHeight: "leading-normal",
    color: "text-gray-500",
    darkColor: "dark:text-gray-500",
    textTransform: "uppercase"
  },
  caption: {
    fontSize: "text-xs md:text-sm",
    fontWeight: "font-light",
    letterSpacing: "tracking-wide",
    lineHeight: "leading-normal",
    color: "text-gray-400",
    darkColor: "dark:text-gray-600"
  },
  // Companion variants for F_Title
  heroSubtitle: {
    fontSize: "text-2xl md:text-3xl",
    fontWeight: "font-light",
    letterSpacing: "tracking-wide",
    lineHeight: "leading-relaxed",
    color: "text-gray-500",
    darkColor: "dark:text-gray-400"
  },
  sectionSubtitle: {
    fontSize: "text-lg md:text-xl",
    fontWeight: "font-normal",
    letterSpacing: "tracking-normal",
    lineHeight: "leading-relaxed",
    color: "text-gray-500",
    darkColor: "dark:text-gray-400"
  },
  cardSubtitle: {
    fontSize: "text-base md:text-lg",
    fontWeight: "font-normal",
    letterSpacing: "tracking-normal",
    lineHeight: "leading-normal",
    color: "text-gray-500",
    darkColor: "dark:text-gray-400"
  }
};

// Allowed heading levels for safety (subtitles typically use h2-h6)
const allowedHeadingLevels = ['h2', 'h3', 'h4', 'h5', 'h6', 'p', 'div'];

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
 * Main Subtitle Component
 * @param {Object} props - Component props
 * @param {Object} props.config - Configuration object for the subtitle
 * @param {Object} props.customVariants - Custom variant styles to merge/override defaults
 * @returns {JSX.Element} Rendered subtitle component
 */
const CMS_Subtitle = ({
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

  // Safe heading level (default to p if not specified)
  const HeadingTag = useMemo(() => {
    return allowedHeadingLevels.includes(mergedConfig.level)
      ? mergedConfig.level
      : 'p';
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

    // Determine if the main subtitle uses gradient
    const gradientClasses = mergedConfig.gradient
      ? getGradientClasses(mergedConfig.gradient, mergedConfig.darkGradient, mergedConfig.gradientDirection)
      : '';

    const classes = [
      mergedConfig.position,
      alignment,
      wrapping,
      overflow.className,
      ...zLayerClasses,
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

export default CMS_Subtitle;