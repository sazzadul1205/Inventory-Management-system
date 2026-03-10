  /**
   * CMS_Container Component - A highly customizable container component with dark mode support
   * 
   * This component provides layout structure with configurable max-width, spacing, backgrounds,
   * and responsive behavior. Perfect for page sections, content wrappers, and grid layouts.
   */

  import React, { useMemo, forwardRef } from 'react';
  import clsx from 'clsx';

  // ============================================================================
  // Type Definitions & Defaults
  // ============================================================================

  // Default configuration with nested structure for better organization
  const defaultConfig = {
    // Layout
    layout: {
      type: 'div',              // 'div', 'section', 'article', 'aside', 'main', 'header', 'footer'
      display: 'block',          // 'block', 'flex', 'grid', 'inline-block', 'inline-flex', 'inline-grid', 'hidden'
      position: 'relative',      // 'static', 'relative', 'absolute', 'fixed', 'sticky'
      overflow: 'visible',       // 'visible', 'hidden', 'scroll', 'auto'
      zIndex: 'auto',
    },

    // Dimensions
    dimensions: {
      width: 'full',             // 'full', 'auto', 'screen'
      maxWidth: '7xl',           // 'none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', 'full'
      minWidth: null,
      height: 'auto',            // 'auto', 'full', 'screen', 'min', 'max'
      minHeight: null,
      maxHeight: null,
    },

    // Spacing
    spacing: {
      padding: 'px-4 py-8',
      paddingMobile: null,
      paddingTablet: null,
      paddingDesktop: null,
      margin: 'mx-auto',
      marginMobile: null,
      marginTablet: null,
      marginDesktop: null,
    },

    // Background
    background: {
      fullWidth: false,          // Boolean or { mobile: bool, tablet: bool, desktop: bool }
      wrapperClass: null,        // Optional class for background wrapper
      color: null,
      darkColor: null,
      gradient: null,
      darkGradient: null,
      image: null,
      attachment: null,          // 'fixed', 'local', 'scroll'
      position: 'center',        // 'center', 'top', 'bottom', 'left', 'right'
      size: 'cover',             // 'cover', 'contain', 'auto'
      repeat: 'no-repeat',       // 'repeat', 'repeat-x', 'repeat-y', 'no-repeat'
    },

    // Borders
    borders: {
      border: null,
      borderColor: null,
      darkBorderColor: null,
      borderTop: null,
      borderRight: null,
      borderBottom: null,
      borderLeft: null,
      rounded: null,
      roundedTop: null,
      roundedRight: null,
      roundedBottom: null,
      roundedLeft: null,
    },

    // Effects
    effects: {
      shadow: null,
      darkShadow: null,
      shadowColor: null,
      opacity: null,
      transition: null,
      transitionDuration: null,
      transitionTiming: null,
      transitionDelay: null,
      animation: null,
      transform: null,
      cursor: null,
    },

    // Flex
    flex: {
      direction: null,           // 'row', 'col', 'row-reverse', 'col-reverse'
      wrap: null,                // 'wrap', 'wrap-reverse', 'nowrap'
      justify: null,             // 'start', 'end', 'center', 'between', 'around', 'evenly'
      align: null,               // 'start', 'end', 'center', 'baseline', 'stretch'
      content: null,             // 'start', 'end', 'center', 'between', 'around', 'stretch'
      grow: null,
      shrink: null,
    },

    // Grid
    grid: {
      cols: null,                // Number of columns (1-12)
      rows: null,                // Number of rows
      gap: null,
      columnGap: null,
      rowGap: null,
      autoFlow: null,            // 'row', 'col', 'dense', 'row-dense', 'col-dense'
      colsMobile: null,
      colsTablet: null,
      colsDesktop: null,
      gapMobile: null,
      gapTablet: null,
      gapDesktop: null,
    },

    // Responsive visibility
    visibility: {
      hideOnMobile: false,
      hideOnTablet: false,
      hideOnDesktop: false,
    },

    // Variants (for CMS presets)
    variant: null,                // 'hero', 'card', 'feature', etc.

    // Accessibility
    accessibility: {
      role: null,
      ariaLabel: null,
      ariaLabelledBy: null,
      ariaDescribedBy: null,
    },

    // Additional
    className: '',
    style: {},
  };

  // Predefined variants for CMS
  const variants = {
    hero: {
      background: {
        gradient: 'bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900',
      },
      spacing: {
        padding: 'py-24 md:py-32 lg:py-40',
      },
      dimensions: {
        maxWidth: '7xl',
      },
    },
    card: {
      borders: {
        rounded: 'rounded-lg',
        border: 'border',
        borderColor: 'border-gray-200',
      },
      effects: {
        shadow: 'shadow-md',
        hover: 'hover:shadow-lg transition-shadow',
      },
      spacing: {
        padding: 'p-6',
      },
    },
    feature: {
      layout: {
        display: 'flex',
      },
      flex: {
        direction: 'col',
        align: 'center',
      },
      spacing: {
        padding: 'py-12',
      },
    },
    section: {
      layout: {
        type: 'section',
      },
      spacing: {
        padding: 'px-4 py-12 md:py-16 lg:py-20',
        margin: 'mx-auto',
      },
      dimensions: {
        maxWidth: '7xl',
      },
    },
  };

  // Breakpoint prefixes
  const breakpoints = {
    mobile: '',
    tablet: 'md:',
    desktop: 'lg:',
  };

  // ============================================================================
  // Utility Functions
  // ============================================================================

  /**
   * Check if value is an object (not null, not array)
   */
  const isObject = (item) => {
    return item && typeof item === 'object' && !Array.isArray(item);
  };

  /**
   * Deep merge two objects without reference leakage
   * Uses structuredClone to prevent mutation of defaults
   */
  const deepMerge = (target, source) => {
    // Create a deep clone of target to prevent reference leakage
    const output = structuredClone(target);

    if (!isObject(source)) return output;

    Object.keys(source).forEach(key => {
      if (isObject(source[key]) && isObject(output[key])) {
        // Recursively merge nested objects
        output[key] = deepMerge(output[key], source[key]);
      } else {
        // Direct assignment for primitives and arrays
        output[key] = source[key];
      }
    });

    return output;
  };

  /**
   * Apply variant to config if specified
   */
  const applyVariant = (config) => {
    if (!config.variant || !variants[config.variant]) return config;

    // Start with the variant, then apply the user's config on top
    const merged = deepMerge(variants[config.variant], config); return merged;
  };

  /**
   * Determine if full width background should be applied at a breakpoint
   */
  const getFullWidthValue = (fullWidthConfig, breakpoint) => {
    // If boolean, apply to all breakpoints
    if (typeof fullWidthConfig === 'boolean') {
      return fullWidthConfig;
    }

    // If object, check specific breakpoint
    if (isObject(fullWidthConfig)) {
      switch (breakpoint) {
        case 'mobile':
          return fullWidthConfig.mobile ?? true;
        case 'tablet':
          return fullWidthConfig.tablet ?? fullWidthConfig.mobile ?? true;
        case 'desktop':
          return fullWidthConfig.desktop ?? fullWidthConfig.tablet ?? fullWidthConfig.mobile ?? true;
        default:
          return true;
      }
    }

    return false;
  };

  /**
   * Check if wrapper is needed at any breakpoint
   */
  const needsWrapperAtAnyBreakpoint = (fullWidthConfig) => {
    return (
      getFullWidthValue(fullWidthConfig, 'mobile') ||
      getFullWidthValue(fullWidthConfig, 'tablet') ||
      getFullWidthValue(fullWidthConfig, 'desktop')
    );
  };

  // ============================================================================
  // Background Class Helper
  // ============================================================================

  /**
   * Build background classes from background config
   */
  const buildBackgroundClasses = (bg) => {
    const classes = [];

    if (bg.color) {
      classes.push(bg.color);
    } else if (bg.gradient) {
      classes.push(bg.gradient);
    }

    if (bg.darkColor) {
      classes.push(`dark:${bg.darkColor}`);
    } else if (bg.darkGradient) {
      classes.push(`dark:${bg.darkGradient}`);
    }

    if (bg.image) {
      classes.push('bg-cover', 'bg-center', 'bg-no-repeat');
    }

    if (bg.attachment) classes.push(`bg-${bg.attachment}`);
    if (bg.position && !bg.image) classes.push(`bg-${bg.position}`);
    if (bg.size && !bg.image) classes.push(`bg-${bg.size}`);
    if (bg.repeat && !bg.image) classes.push(`bg-${bg.repeat}`);

    return classes;
  };

  // ============================================================================
  // Specialized Class Builders
  // ============================================================================

  const buildLayoutClasses = (layout) => {
    const classes = [];

    if (layout.display) classes.push(layout.display);
    if (layout.position) classes.push(layout.position);
    if (layout.overflow) classes.push(`overflow-${layout.overflow}`);
    if (layout.zIndex !== 'auto') classes.push(`z-${layout.zIndex}`);

    return classes;
  };

  const buildDimensionClasses = (dimensions) => {
    const classes = [];

    // Max width
    if (dimensions.maxWidth === 'none') {
      classes.push('max-w-none');
    } else if (dimensions.maxWidth) {
      classes.push(`max-w-${dimensions.maxWidth}`);
    }

    // Width
    switch (dimensions.width) {
      case 'full': classes.push('w-full'); break;
      case 'screen': classes.push('w-screen'); break;
      case 'auto': classes.push('w-auto'); break;
      default: if (dimensions.width) classes.push(`w-${dimensions.width}`);
    }

    // Min width
    if (dimensions.minWidth) {
      classes.push(`min-w-${dimensions.minWidth}`);
    }

    // Height
    switch (dimensions.height) {
      case 'full': classes.push('h-full'); break;
      case 'screen': classes.push('h-screen'); break;
      case 'min': classes.push('h-min'); break;
      case 'max': classes.push('h-max'); break;
      case 'auto': classes.push('h-auto'); break;
      default: if (dimensions.height) classes.push(`h-${dimensions.height}`);
    }

    // Min/Max height
    if (dimensions.minHeight) {
      classes.push(dimensions.minHeight === 'screen' ? 'min-h-screen' : `min-h-${dimensions.minHeight}`);
    }
    if (dimensions.maxHeight) {
      classes.push(dimensions.maxHeight === 'screen' ? 'max-h-screen' : `max-h-${dimensions.maxHeight}`);
    }

    return classes;
  };

  const buildSpacingClasses = (spacing) => {
    const classes = [];

    // Base padding
    if (spacing.padding) classes.push(spacing.padding);
    if (spacing.margin) classes.push(spacing.margin);

    // Responsive padding
    if (spacing.paddingMobile) classes.push(spacing.paddingMobile);
    if (spacing.paddingTablet) classes.push(`md:${spacing.paddingTablet}`);
    if (spacing.paddingDesktop) classes.push(`lg:${spacing.paddingDesktop}`);

    // Responsive margin
    if (spacing.marginMobile) classes.push(spacing.marginMobile);
    if (spacing.marginTablet) classes.push(`md:${spacing.marginTablet}`);
    if (spacing.marginDesktop) classes.push(`lg:${spacing.marginDesktop}`);

    return classes;
  };

  const buildBorderClasses = (borders) => {
    const classes = [];

    if (borders.border) classes.push(borders.border);
    if (borders.borderTop) classes.push(borders.borderTop);
    if (borders.borderRight) classes.push(borders.borderRight);
    if (borders.borderBottom) classes.push(borders.borderBottom);
    if (borders.borderLeft) classes.push(borders.borderLeft);
    if (borders.borderColor) classes.push(borders.borderColor);
    if (borders.darkBorderColor) classes.push(borders.darkBorderColor);
    if (borders.rounded) classes.push(borders.rounded);
    if (borders.roundedTop) classes.push(borders.roundedTop);
    if (borders.roundedRight) classes.push(borders.roundedRight);
    if (borders.roundedBottom) classes.push(borders.roundedBottom);
    if (borders.roundedLeft) classes.push(borders.roundedLeft);

    return classes;
  };

  const buildEffectClasses = (effects) => {
    const classes = [];

    if (effects.shadow) classes.push(effects.shadow);
    if (effects.darkShadow) classes.push(effects.darkShadow);
    if (effects.opacity) classes.push(`opacity-${effects.opacity}`);
    if (effects.transition) classes.push(effects.transition);
    if (effects.transitionDuration) classes.push(`duration-${effects.transitionDuration}`);
    if (effects.transitionTiming) classes.push(`ease-${effects.transitionTiming}`);
    if (effects.transitionDelay) classes.push(`delay-${effects.transitionDelay}`);
    if (effects.animation) classes.push(effects.animation);
    if (effects.transform) classes.push(effects.transform);
    if (effects.cursor) classes.push(effects.cursor);

    return classes;
  };

  const buildFlexClasses = (flex) => {
    const classes = [];

    if (flex.direction) classes.push(`flex-${flex.direction}`);
    if (flex.wrap) classes.push(`flex-${flex.wrap}`);
    if (flex.justify) classes.push(`justify-${flex.justify}`);
    if (flex.align) classes.push(`items-${flex.align}`);
    if (flex.content) classes.push(`content-${flex.content}`);
    if (flex.grow) classes.push(`flex-${flex.grow}`);
    if (flex.shrink) classes.push(`shrink-${flex.shrink}`);

    return classes;
  };

  const buildGridClasses = (grid) => {
    const classes = [];

    // Base grid
    if (grid.cols) classes.push(`grid-cols-${grid.cols}`);
    if (grid.rows) classes.push(`grid-rows-${grid.rows}`);
    if (grid.gap) classes.push(`gap-${grid.gap}`);
    if (grid.columnGap) classes.push(`gap-x-${grid.columnGap}`);
    if (grid.rowGap) classes.push(`gap-y-${grid.rowGap}`);
    if (grid.autoFlow) classes.push(`grid-flow-${grid.autoFlow}`);

    // Responsive grid - FIXED: Now uses correct breakpoint prefixes
    if (grid.colsMobile) classes.push(`sm:grid-cols-${grid.colsMobile}`); // Using sm: for mobile
    if (grid.colsTablet) classes.push(`md:grid-cols-${grid.colsTablet}`);
    if (grid.colsDesktop) classes.push(`lg:grid-cols-${grid.colsDesktop}`);
    if (grid.gapMobile) classes.push(`sm:gap-${grid.gapMobile}`);
    if (grid.gapTablet) classes.push(`md:gap-${grid.gapTablet}`);
    if (grid.gapDesktop) classes.push(`lg:gap-${grid.gapDesktop}`);

    return classes;
  };

  const buildVisibilityClasses = (visibility) => {
    const classes = [];

    if (visibility.hideOnMobile) classes.push('hidden');
    if (visibility.hideOnTablet) classes.push('md:hidden');
    if (visibility.hideOnDesktop) classes.push('lg:hidden');

    return classes;
  };

  // ============================================================================
  // Main Class Builder
  // ============================================================================

  /**
   * Build all classes by combining specialized builders
   */
  const buildAllClasses = (config, backgroundTarget) => {
    const classes = [
      ...buildLayoutClasses(config.layout),
      ...buildDimensionClasses(config.dimensions),
      ...buildSpacingClasses(config.spacing),
      ...buildBorderClasses(config.borders),
      ...buildEffectClasses(config.effects),
      ...buildFlexClasses(config.flex),
      ...buildGridClasses(config.grid),
      ...buildVisibilityClasses(config.visibility),
    ];

    // Add background classes if target is container
    if (backgroundTarget === 'container') {
      classes.push(...buildBackgroundClasses(config.background));
    }

    return classes;
  };

  /**
   * Build wrapper classes
   */
  const buildWrapperClasses = (config) => {
    const classes = [];

    // Background classes (using shared helper)
    classes.push(...buildBackgroundClasses(config.background));

    // Wrapper is always relative for proper positioning
    classes.push('relative');

    // Responsive full-width
    if (getFullWidthValue(config.background.fullWidth, 'mobile')) {
      classes.push('w-full');
    }
    if (getFullWidthValue(config.background.fullWidth, 'tablet')) {
      classes.push('md:w-full');
    }
    if (getFullWidthValue(config.background.fullWidth, 'desktop')) {
      classes.push('lg:w-full');
    }

    // Additional wrapper class
    if (config.background.wrapperClass) {
      classes.push(config.background.wrapperClass);
    }

    return classes;
  };

  /**
   * Build background image style
   */
  const buildBackgroundImageStyle = (config) => {
    if (!config.background.image) return {};

    return {
      backgroundImage: `url(${config.background.image})`,
      backgroundAttachment: config.background.attachment,
      backgroundPosition: config.background.position,
      backgroundSize: config.background.size,
      backgroundRepeat: config.background.repeat,
    };
  };

  // ============================================================================
  // Main Component
  // ============================================================================

  const CMS_Container = forwardRef(({
    config = {},
    children,
    ...props
  }, ref) => {
    // Apply variant and deep merge config with defaults
    const mergedConfig = useMemo(() => {
      const configWithVariant = applyVariant(config);
      const merged = deepMerge(defaultConfig, configWithVariant);
      return merged;
    }, [config]);

    // Determine if wrapper is needed
    const needsWrapper = useMemo(() => {
      return needsWrapperAtAnyBreakpoint(mergedConfig.background.fullWidth);
    }, [mergedConfig.background.fullWidth]);

    // Determine where background should be applied (simplified)
    const backgroundTarget = needsWrapper ? 'wrapper' : 'container';

    // Build classes with memoization
    const containerClasses = useMemo(() => {
      const classes = buildAllClasses(mergedConfig, backgroundTarget);
      if (mergedConfig.className) classes.push(mergedConfig.className);
      return clsx(classes);
    }, [mergedConfig, backgroundTarget]);

    const wrapperClasses = useMemo(() => {
      if (!needsWrapper) return '';
      return clsx(buildWrapperClasses(mergedConfig));
    }, [mergedConfig, needsWrapper]);

    // Memoize styles and accessibility props
    const backgroundImageStyle = useMemo(() => {
      return buildBackgroundImageStyle(mergedConfig);
    }, [mergedConfig.background.image, mergedConfig.background.attachment,
    mergedConfig.background.position, mergedConfig.background.size,
    mergedConfig.background.repeat]);

    const accessibilityProps = useMemo(() => {
      return {
        ...(mergedConfig.accessibility.role && { role: mergedConfig.accessibility.role }),
        ...(mergedConfig.accessibility.ariaLabel && { 'aria-label': mergedConfig.accessibility.ariaLabel }),
        ...(mergedConfig.accessibility.ariaLabelledBy && { 'aria-labelledby': mergedConfig.accessibility.ariaLabelledBy }),
        ...(mergedConfig.accessibility.ariaDescribedBy && { 'aria-describedby': mergedConfig.accessibility.ariaDescribedBy }),
      };
    }, [mergedConfig.accessibility]);

    // Determine HTML element
    const ContainerElement = useMemo(() => {
      return mergedConfig.layout.type || 'div';
    }, [mergedConfig.layout.type]);

    // Render with wrapper
    if (needsWrapper) {
      return (
        <div
          className={wrapperClasses}
          style={{
            ...backgroundImageStyle,
            ...mergedConfig.style,
          }}
        >
          <ContainerElement
            ref={ref}
            className={containerClasses}
            {...accessibilityProps}
            {...props}
          >
            {children}
          </ContainerElement>
        </div>
      );
    }

    // Render without wrapper
    return (
      <ContainerElement
        ref={ref}
        className={containerClasses}
        style={{
          ...backgroundImageStyle,
          ...mergedConfig.style,
        }}
        {...accessibilityProps}
        {...props}
      >
        {children}
      </ContainerElement>
    );
  });

  CMS_Container.displayName = 'CMS_Container';

  // ============================================================================
  // Simplified Components
  // ============================================================================

  const CMS_Grid = forwardRef(({ config = {}, children, ...props }, ref) => {
    const gridConfig = {
      ...config,
      layout: {
        ...config.layout,
        display: 'grid',
      },
    };

    return (
      <CMS_Container ref={ref} config={gridConfig} {...props}>
        {children}
      </CMS_Container>
    );
  });

  CMS_Grid.displayName = 'CMS_Grid';

  const CMS_Flex = forwardRef(({ config = {}, children, ...props }, ref) => {
    const flexConfig = {
      ...config,
      layout: {
        ...config.layout,
        display: 'flex',
      },
    };

    return (
      <CMS_Container ref={ref} config={flexConfig} {...props}>
        {children}
      </CMS_Container>
    );
  });

  CMS_Flex.displayName = 'CMS_Flex';

  const CMS_Section = forwardRef(({ config = {}, children, ...props }, ref) => {
    const sectionConfig = {
      ...config,
      variant: config.variant || 'section',
    };

    return (
      <CMS_Container ref={ref} config={sectionConfig} {...props}>
        {children}
      </CMS_Container>
    );
  });

  CMS_Section.displayName = 'CMS_Section';

  // Export all components and variants for CMS use
  export {
    CMS_Container,
    CMS_Grid,
    CMS_Flex,
    CMS_Section,
    variants
  };
  export default CMS_Container;