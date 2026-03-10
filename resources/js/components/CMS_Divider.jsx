/**
 * CMS_Divider Component - A highly customizable divider component with dark mode support
 * 
 * This component renders dividers with configurable styling, orientation, labels,
 * icons, and various visual styles. Perfect for separating content sections.
 * Uses Tailwind CSS for styling with dark mode support via the 'dark:' modifier.
 */

import React, { useMemo } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as HiIcons from 'react-icons/hi';
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';

// Icon library mappings
const iconLibraries = {
  fa: FaIcons,
  hi: HiIcons,
  md: MdIcons,
  ai: AiIcons,
  bi: BiIcons
};

// Default configuration
const defaultConfig = {
  // Orientation
  orientation: 'horizontal',         // 'horizontal', 'vertical'

  // Visual style
  variant: 'solid',                  // 'solid', 'dashed', 'dotted', 'double', 'gradient'
  thickness: 'thin',                  // 'thin', 'medium', 'thick'

  // Colors
  color: 'gray-300',
  darkColor: 'gray-700',

  // Gradient (if variant is 'gradient')
  gradient: 'from-gray-300 to-gray-100',
  darkGradient: 'dark:from-gray-700 dark:to-gray-600',
  gradientDirection: 'to-r',

  // Label
  label: null,                        // Text label in the middle
  labelPosition: 'center',            // 'left', 'center', 'right' (for horizontal)
  labelVariant: 'default',            // 'default', 'outlined', 'pill'

  // Icon with label
  icon: null,
  iconLibrary: 'hi',
  iconPosition: 'left',               // 'left', 'right'
  iconSize: 'w-4 h-4',

  // Spacing
  spacing: 'my-8',                     // Vertical margin for horizontal, horizontal margin for vertical
  width: 'full',                       // For horizontal: 'full', 'screen', or custom width
  height: null,                        // For vertical: 'full', 'screen', or custom height

  // Line customization
  lineStyle: null,                     // Custom line style (overrides variant)
  lineWidth: null,                      // Custom line width

  // Label styling
  labelBg: 'bg-white',
  darkLabelBg: 'dark:bg-gray-900',
  labelColor: 'text-gray-500',
  darkLabelColor: 'dark:text-gray-400',
  labelSize: 'text-sm',
  labelWeight: 'font-medium',
  labelPadding: 'px-3',

  // Label border (for outlined variant)
  labelBorder: 'border',
  labelBorderColor: 'border-gray-300',
  darkLabelBorderColor: 'dark:border-gray-700',
  labelRounded: 'rounded-full',

  // With content (children between lines)
  withContent: false,
  contentPosition: 'center',           // 'left', 'center', 'right'

  // Decorative elements
  decorative: false,                    // Show decorative elements (stars, dots, etc.)
  decorativeType: 'dots',               // 'dots', 'stars', 'lines', 'custom'
  decorativeCount: 3,
  decorativeColor: 'gray-400',
  darkDecorativeColor: 'gray-600',

  // Animation
  animated: false,
  animationDuration: 'duration-300',
  animationType: 'pulse',               // 'pulse', 'bounce', 'spin', 'ping'

  // Responsive
  hideOnMobile: false,
  hideOnTablet: false,
  hideOnDesktop: false,

  // Accessibility
  role: 'separator',
  ariaLabel: null,

  // Additional
  className: '',
  style: {}
};

// Thickness mappings
const thicknessStyles = {
  thin: {
    borderWidth: 'border',
    height: 'h-px',
    width: 'w-px'
  },
  medium: {
    borderWidth: 'border-2',
    height: 'h-0.5',
    width: 'w-0.5'
  },
  thick: {
    borderWidth: 'border-4',
    height: 'h-1',
    width: 'w-1'
  }
};

// Variant styles
const variantStyles = {
  solid: 'border-solid',
  dashed: 'border-dashed',
  dotted: 'border-dotted',
  double: 'border-double',
  gradient: '' // Handled separately
};

// Decorative elements
const decorativeElements = {
  dots: (count, color) => (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`w-1 h-1 rounded-full bg-${color} dark:bg-${color}`}
        />
      ))}
    </div>
  ),
  stars: (count, color) => (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className={`text-${color} dark:text-${color}`}>★</span>
      ))}
    </div>
  ),
  lines: (count, color) => (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`w-2 h-0.5 bg-${color} dark:bg-${color}`}
        />
      ))}
    </div>
  )
};

/**
 * CMS_Divider Component
 */
const CMS_Divider = ({
  config = defaultConfig,
  children
}) => {
  // Merge config with defaults
  const mergedConfig = useMemo(() => ({
    ...defaultConfig,
    ...config
  }), [config]);

  // Get icon component
  const getIconComponent = (icon, library) => {
    if (!icon) return null;
    const lib = iconLibraries[library];
    if (!lib) return null;
    return lib[icon];
  };

  // Build divider classes
  const dividerClasses = useMemo(() => {
    const classes = [
      // Base
      'relative',
      mergedConfig.orientation === 'horizontal' ? 'flex items-center' : 'flex flex-col items-center',

      // Spacing
      mergedConfig.orientation === 'horizontal' ? mergedConfig.spacing : '',
      mergedConfig.orientation === 'vertical' ? mergedConfig.spacing : '',

      // Width/Height
      mergedConfig.orientation === 'horizontal' ? (
        mergedConfig.width === 'full' ? 'w-full' :
          mergedConfig.width === 'screen' ? 'w-screen' :
            `w-${mergedConfig.width}`
      ) : '',

      mergedConfig.orientation === 'vertical' ? (
        mergedConfig.height === 'full' ? 'h-full' :
          mergedConfig.height === 'screen' ? 'h-screen' :
            `h-${mergedConfig.height}`
      ) : '',

      // Hide on breakpoints
      mergedConfig.hideOnMobile ? 'hidden' : '',
      mergedConfig.hideOnTablet ? 'md:hidden' : '',
      mergedConfig.hideOnDesktop ? 'lg:hidden' : '',

      // Animation
      mergedConfig.animated ? `animate-${mergedConfig.animationType} ${mergedConfig.animationDuration}` : '',

      mergedConfig.className
    ].filter(Boolean);

    return classes.join(' ');
  }, [mergedConfig]);

  // Build line classes
  const getLineClasses = (position = 'left') => {
    const thickness = thicknessStyles[mergedConfig.thickness];
    const variant = variantStyles[mergedConfig.variant];

    const classes = [
      // Base
      mergedConfig.orientation === 'horizontal' ? 'flex-1' : 'flex-1 w-px',

      // Border style
      variant,

      // Border color
      mergedConfig.variant === 'gradient' ? '' : `border-${mergedConfig.color}`,
      mergedConfig.variant === 'gradient' ? '' : `dark:border-${mergedConfig.darkColor}`,

      // Border width
      mergedConfig.orientation === 'horizontal' ? thickness.borderWidth : '',
      mergedConfig.orientation === 'vertical' ? thickness.borderWidth : '',

      // Custom line style
      mergedConfig.lineStyle || '',

      // For gradient variant
      mergedConfig.variant === 'gradient' ? `bg-gradient-${mergedConfig.gradientDirection} ${mergedConfig.gradient}` : '',
      mergedConfig.variant === 'gradient' && mergedConfig.darkGradient ? mergedConfig.darkGradient : '',

      // For gradient with label, add opacity transition
      mergedConfig.label && mergedConfig.variant === 'gradient' ? 'transition-opacity' : ''
    ].filter(Boolean);

    return classes.join(' ');
  };

  // Render icon
  const renderIcon = () => {
    if (!mergedConfig.icon) return null;

    const IconComponent = getIconComponent(mergedConfig.icon, mergedConfig.iconLibrary);
    if (!IconComponent) return null;

    return (
      <IconComponent className={`
        ${mergedConfig.iconSize}
        ${mergedConfig.labelColor}
        ${mergedConfig.darkLabelColor}
      `} />
    );
  };

  // Render label content
  const renderLabelContent = () => {
    const icon = renderIcon();
    const labelText = mergedConfig.label;

    if (!icon && !labelText) return null;

    return (
      <div className="flex items-center gap-1">
        {mergedConfig.iconPosition === 'left' && icon}
        {labelText && <span>{labelText}</span>}
        {mergedConfig.iconPosition === 'right' && icon}
      </div>
    );
  };

  // Render label
  const renderLabel = () => {
    const content = renderLabelContent();
    if (!content) return null;

    const labelClasses = [
      // Base
      'inline-flex items-center justify-center',
      mergedConfig.labelSize,
      mergedConfig.labelWeight,
      mergedConfig.labelColor,
      mergedConfig.darkLabelColor,
      mergedConfig.labelPadding,

      // Background
      mergedConfig.labelBg,
      mergedConfig.darkLabelBg,

      // Variant specific
      mergedConfig.labelVariant === 'outlined' ? mergedConfig.labelBorder : '',
      mergedConfig.labelVariant === 'outlined' ? mergedConfig.labelBorderColor : '',
      mergedConfig.labelVariant === 'outlined' ? mergedConfig.darkLabelBorderColor : '',
      mergedConfig.labelVariant === 'outlined' ? mergedConfig.labelRounded : '',

      mergedConfig.labelVariant === 'pill' ? 'px-4 py-1 rounded-full' : '',

      // Z-index to appear above lines
      'z-10',

      // Whitespace
      'whitespace-nowrap'
    ].filter(Boolean).join(' ');

    return (
      <div className={labelClasses}>
        {content}
      </div>
    );
  };

  // Render decorative elements
  const renderDecorative = () => {
    if (!mergedConfig.decorative) return null;

    const DecorativeComponent = decorativeElements[mergedConfig.decorativeType];
    if (!DecorativeComponent) return null;

    return DecorativeComponent(
      mergedConfig.decorativeCount,
      mergedConfig.decorativeColor
    );
  };

  // Render horizontal divider
  const renderHorizontal = () => {
    const label = renderLabel();
    const decorative = renderDecorative();

    // If no label and no decorative, simple line
    if (!label && !decorative && !mergedConfig.withContent) {
      return (
        <div
          className={`${getLineClasses()} ${mergedConfig.orientation === 'horizontal' ? 'h-0' : ''}`}
          role={mergedConfig.role}
          aria-label={mergedConfig.ariaLabel}
        />
      );
    }

    // Determine label position classes
    const positionClasses = {
      left: 'justify-start',
      center: 'justify-center',
      right: 'justify-end'
    };

    return (
      <div className={`flex items-center w-full ${positionClasses[mergedConfig.labelPosition]}`}>
        {/* Left line */}
        {mergedConfig.labelPosition !== 'left' && (
          <div className={getLineClasses('left')} />
        )}

        {/* Label / Decorative / Content */}
        <div className="flex items-center gap-2">
          {decorative}
          {label}
          {mergedConfig.withContent && children}
        </div>

        {/* Right line */}
        {mergedConfig.labelPosition !== 'right' && (
          <div className={getLineClasses('right')} />
        )}
      </div>
    );
  };

  // Render vertical divider
  const renderVertical = () => {
    const label = renderLabel();
    const decorative = renderDecorative();

    // If no label and no decorative, simple vertical line
    if (!label && !decorative && !mergedConfig.withContent) {
      return (
        <div
          className={`${getLineClasses()} ${mergedConfig.orientation === 'vertical' ? 'w-0 h-full' : ''}`}
          role={mergedConfig.role}
          aria-label={mergedConfig.ariaLabel}
        />
      );
    }

    return (
      <div className="flex flex-col items-center h-full">
        {/* Top line */}
        <div className={getLineClasses('top')} />

        {/* Label / Decorative / Content */}
        <div className="flex flex-col items-center gap-2 py-2">
          {decorative}
          {label}
          {mergedConfig.withContent && children}
        </div>

        {/* Bottom line */}
        <div className={getLineClasses('bottom')} />
      </div>
    );
  };

  return (
    <div
      className={dividerClasses}
      style={mergedConfig.style}
      role={mergedConfig.role}
      aria-label={mergedConfig.ariaLabel}
    >
      {mergedConfig.orientation === 'horizontal' ? renderHorizontal() : renderVertical()}
    </div>
  );
};

// ============================================================================
// CMS_DividerWithText Component
// ============================================================================

/**
 * CMS_DividerWithText - Simplified divider with text label
 */
const CMS_DividerWithText = ({
  text,
  config = {},
  ...props
}) => {
  const dividerConfig = {
    ...config,
    label: text,
    variant: config.variant || 'solid',
    labelVariant: config.labelVariant || 'default'
  };

  return <CMS_Divider config={dividerConfig} {...props} />;
};

// ============================================================================
// CMS_DividerWithIcon Component
// ============================================================================

/**
 * CMS_DividerWithIcon - Simplified divider with icon
 */
const CMS_DividerWithIcon = ({
  icon,
  iconLibrary = 'hi',
  config = {},
  ...props
}) => {
  const dividerConfig = {
    ...config,
    icon,
    iconLibrary,
    iconPosition: config.iconPosition || 'center',
    label: null
  };

  return <CMS_Divider config={dividerConfig} {...props} />;
};

// ============================================================================
// CMS_VerticalDivider Component
// ============================================================================

/**
 * CMS_VerticalDivider - Simplified vertical divider
 */
const CMS_VerticalDivider = ({
  config = {},
  ...props
}) => {
  const dividerConfig = {
    ...config,
    orientation: 'vertical',
    height: config.height || 'full',
    spacing: config.spacing || 'mx-2'
  };

  return <CMS_Divider config={dividerConfig} {...props} />;
};

// Export all components
export {
  CMS_Divider,
  CMS_DividerWithText,
  CMS_DividerWithIcon,
  CMS_VerticalDivider
};
export default CMS_Divider;