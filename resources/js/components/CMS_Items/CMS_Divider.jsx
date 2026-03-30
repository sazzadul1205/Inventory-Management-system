/**
 * CMS_Divider Component - Editor-friendly divider with flat class structure
 * 
 * Features:
 * - Flat class structure for easy editing
 * - Horizontal and vertical orientations
 * - Multiple variants (solid, dashed, dotted, double, gradient)
 * - Label support with text and icons
 * - Decorative elements (dots, stars, lines)
 * - Thickness control
 * - Dark mode support
 */


import { clsx } from 'clsx';
import React, { forwardRef, useMemo } from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as FaIcons from 'react-icons/fa';
import * as HiIcons from 'react-icons/hi';
import * as MdIcons from 'react-icons/md';

// ============================================================================
// Icon Libraries Registry
// ============================================================================

const iconLibraries = {
  fa: FaIcons,
  hi: HiIcons,
  md: MdIcons,
  ai: AiIcons,
  bi: BiIcons,
};

// ============================================================================
// Default Classes Structure
// ============================================================================

const defaultDividerClasses = {
  // Container classes
  container: '',
  containerHorizontal: '',
  containerVertical: '',
  containerDark: '',

  // Line classes
  line: '',
  lineLeft: '',
  lineRight: '',
  lineTop: '',
  lineBottom: '',
  lineSolid: '',
  lineDashed: '',
  lineDotted: '',
  lineDouble: '',
  lineGradient: '',
  lineDark: '',

  // Label classes
  label: '',
  labelContainer: '',
  labelText: '',
  labelIcon: '',
  labelLeft: '',
  labelCenter: '',
  labelRight: '',
  labelDefault: '',
  labelOutlined: '',
  labelPill: '',
  labelDark: '',

  // Decorative classes
  decorative: '',
  decorativeDots: '',
  decorativeStars: '',
  decorativeLines: '',

  // Thickness classes
  thin: '',
  medium: '',
  thick: '',

  // Responsive breakpoints
  sm: '',
  md: '',
  lg: '',
  xl: '',
  '2xl': '',

  // Hide on breakpoints
  hideMobile: '',
  hideTablet: '',
  hideDesktop: '',

  // Custom override
  custom: '',
};

// Default props (non-class properties)
const defaultDividerProps = {
  // Orientation
  orientation: 'horizontal', // 'horizontal', 'vertical'

  // Visual style
  variant: 'solid', // 'solid', 'dashed', 'dotted', 'double', 'gradient'
  thickness: 'thin', // 'thin', 'medium', 'thick'

  // Colors (for non-gradient variants)
  color: 'gray-300',
  darkColor: 'gray-700',

  // Gradient
  gradient: 'from-gray-300 to-gray-100',
  darkGradient: 'from-gray-700 to-gray-600',
  gradientDirection: 'to-r',

  // Label
  label: null,
  labelPosition: 'center', // 'left', 'center', 'right'
  labelVariant: 'default', // 'default', 'outlined', 'pill'

  // Icon with label
  icon: null,
  iconLibrary: 'hi',
  iconPosition: 'left', // 'left', 'right'

  // Spacing
  spacing: 'my-8',
  width: 'full',
  height: null,

  // Decorative
  decorative: false,
  decorativeType: 'dots', // 'dots', 'stars', 'lines'
  decorativeCount: 3,

  // Animation
  animated: false,
  animationType: 'pulse', // 'pulse', 'bounce', 'spin', 'ping'
  animationDuration: 'duration-300',

  // Hide on breakpoints
  hideOnMobile: false,
  hideOnTablet: false,
  hideOnDesktop: false,

  // Accessibility
  role: 'separator',
  ariaLabel: null,
};

// Thickness presets
const thicknessPresets = {
  thin: {
    horizontal: 'border-t',
    vertical: 'border-l',
    height: 'h-px',
    width: 'w-px',
  },
  medium: {
    horizontal: 'border-t-2',
    vertical: 'border-l-2',
    height: 'h-0.5',
    width: 'w-0.5',
  },
  thick: {
    horizontal: 'border-t-4',
    vertical: 'border-l-4',
    height: 'h-1',
    width: 'w-1',
  },
};

// Variant presets
const variantPresets = {
  solid: 'border-solid',
  dashed: 'border-dashed',
  dotted: 'border-dotted',
  double: 'border-double',
  gradient: '',
};

// Label variant presets
const labelVariantPresets = {
  default: 'bg-white dark:bg-gray-900 px-3',
  outlined: 'border border-gray-300 dark:border-gray-700 rounded-full px-4 py-1 bg-white dark:bg-gray-900',
  pill: 'bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-1',
};

// Decorative elements
const decorativeElements = {
  dots: (count, className) => (
    <div className={clsx('flex gap-1', className)}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="w-1 h-1 rounded-full bg-current" />
      ))}
    </div>
  ),
  stars: (count, className) => (
    <div className={clsx('flex gap-1', className)}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-current">★</span>
      ))}
    </div>
  ),
  lines: (count, className) => (
    <div className={clsx('flex gap-1', className)}>
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="w-2 h-0.5 bg-current" />
      ))}
    </div>
  ),
};

// Metadata for visual editor
const componentMetadata = {
  name: 'Divider',
  description: 'Visual separator with optional label and icons',
  category: 'layout',
  icon: '➖',
  editable: ['container', 'line', 'label', 'decorative'],
  controls: [
    { type: 'select', target: 'orientation', label: 'Orientation', options: ['horizontal', 'vertical'] },
    { type: 'select', target: 'variant', label: 'Variant', options: ['solid', 'dashed', 'dotted', 'double', 'gradient'] },
    { type: 'select', target: 'thickness', label: 'Thickness', options: ['thin', 'medium', 'thick'] },
    { type: 'text', target: 'label', label: 'Label Text' },
    { type: 'select', target: 'labelPosition', label: 'Label Position', options: ['left', 'center', 'right'] },
    { type: 'select', target: 'labelVariant', label: 'Label Variant', options: ['default', 'outlined', 'pill'] },
    { type: 'toggle', target: 'decorative', label: 'Decorative Elements' },
    { type: 'select', target: 'decorativeType', label: 'Decorative Type', options: ['dots', 'stars', 'lines'] },
    { type: 'class-editor', target: 'container', label: 'Container Styles' },
    { type: 'class-editor', target: 'line', label: 'Line Styles' },
    { type: 'class-editor', target: 'label', label: 'Label Styles' },
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
    // Container
    classes.container,
    classes.containerHorizontal,
    classes.containerVertical,
    classes.containerDark,

    // Line
    classes.line,
    classes.lineLeft,
    classes.lineRight,
    classes.lineTop,
    classes.lineBottom,
    classes.lineSolid,
    classes.lineDashed,
    classes.lineDotted,
    classes.lineDouble,
    classes.lineGradient,
    classes.lineDark,

    // Label
    classes.label,
    classes.labelContainer,
    classes.labelText,
    classes.labelIcon,
    classes.labelLeft,
    classes.labelCenter,
    classes.labelRight,
    classes.labelDefault,
    classes.labelOutlined,
    classes.labelPill,
    classes.labelDark,

    // Decorative
    classes.decorative,
    classes.decorativeDots,
    classes.decorativeStars,
    classes.decorativeLines,

    // Thickness
    classes.thin,
    classes.medium,
    classes.thick,

    // Hide breakpoints
    classes.hideMobile,
    classes.hideTablet,
    classes.hideDesktop,

    // Responsive
    classes.sm,
    classes.md,
    classes.lg,
    classes.xl,
    classes['2xl'],

    // Custom
    classes.custom,

    // Extra
    extraClassName
  );
};

/**
 * Get icon component from library
 */
const getIconComponent = (iconName, libraryPrefix) => {
  if (!iconName || !libraryPrefix) return null;
  const library = iconLibraries[libraryPrefix];
  return library?.[iconName] || null;
};

// ============================================================================
// CMS_Divider Component
// ============================================================================

const CMS_Divider = forwardRef(({
  // Component identification
  uid,
  component = 'CMS_Divider',

  // Main styling - flat class structure
  classes = defaultDividerClasses,

  // Orientation
  orientation = 'horizontal',

  // Visual style
  variant = 'solid',
  thickness = 'thin',

  // Colors
  color = 'gray-300',
  darkColor = 'gray-700',

  // Gradient
  gradient = 'from-gray-300 to-gray-100',
  darkGradient = 'from-gray-700 to-gray-600',
  gradientDirection = 'to-r',

  // Label
  label = null,
  labelPosition = 'center',
  labelVariant = 'default',

  // Icon
  icon = null,
  iconLibrary = 'hi',
  iconPosition = 'left',

  // Spacing
  spacing = 'my-8',
  width = 'full',
  height = null,

  // Decorative
  decorative = false,
  decorativeType = 'dots',
  decorativeCount = 3,

  // Animation
  animated = false,
  animationType = 'pulse',
  animationDuration = 'duration-300',

  // Hide on breakpoints
  hideOnMobile = false,
  hideOnTablet = false,
  hideOnDesktop = false,

  // Accessibility
  role = 'separator',
  ariaLabel = null,

  // Extra
  className,
  style,
  children,
  ...props
}, ref) => {

  // Get thickness preset
  const thicknessPreset = thicknessPresets[thickness] || thicknessPresets.thin;

  // Get icon component
  const IconComponent = useMemo(
    () => getIconComponent(icon, iconLibrary),
    [icon, iconLibrary]
  );

  // Build container classes
  const containerClasses = useMemo(() => {
    return clsx(
      'relative flex',
      orientation === 'horizontal' ? 'flex-row items-center' : 'flex-col items-center',
      orientation === 'horizontal' ? spacing : '',
      orientation === 'horizontal' ? (
        width === 'full' ? 'w-full' :
          width === 'screen' ? 'w-screen' :
            `w-${width}`
      ) : '',
      orientation === 'vertical' ? (
        height === 'full' ? 'h-full' :
          height === 'screen' ? 'h-screen' :
            `h-${height}`
      ) : '',
      orientation === 'vertical' && spacing,
      hideOnMobile && 'hidden',
      hideOnTablet && 'md:hidden',
      hideOnDesktop && 'lg:hidden',
      animated && `animate-${animationType} ${animationDuration}`,
      buildClasses(classes, className)
    );
  }, [orientation, spacing, width, height, hideOnMobile, hideOnTablet, hideOnDesktop, animated, animationType, animationDuration, classes, className]);

  // Build line classes
  const getLineClasses = (position = 'center') => {
    const baseLineClasses = clsx(
      orientation === 'horizontal' ? thicknessPreset.horizontal : thicknessPreset.vertical,
      variantPresets[variant],
      variant !== 'gradient' && `border-${color}`,
      variant !== 'gradient' && `dark:border-${darkColor}`,
      variant === 'gradient' && `bg-linear-${gradientDirection} ${gradient}`,
      variant === 'gradient' && darkGradient && `dark:${darkGradient}`,
      classes.line,
      position === 'left' && classes.lineLeft,
      position === 'right' && classes.lineRight,
      position === 'top' && classes.lineTop,
      position === 'bottom' && classes.lineBottom,
      variant === 'solid' && classes.lineSolid,
      variant === 'dashed' && classes.lineDashed,
      variant === 'dotted' && classes.lineDotted,
      variant === 'double' && classes.lineDouble,
      variant === 'gradient' && classes.lineGradient,
      classes.lineDark,
      thickness === 'thin' && classes.thin,
      thickness === 'medium' && classes.medium,
      thickness === 'thick' && classes.thick
    );

    return orientation === 'horizontal'
      ? clsx('flex-1', baseLineClasses)
      : clsx('flex-1 w-px', baseLineClasses);
  };

  // Render decorative elements
  const renderDecorative = () => {
    if (!decorative) return null;

    const DecorativeComponent = decorativeElements[decorativeType];
    if (!DecorativeComponent) return null;

    return DecorativeComponent(
      decorativeCount,
      clsx(
        classes.decorative,
        decorativeType === 'dots' && classes.decorativeDots,
        decorativeType === 'stars' && classes.decorativeStars,
        decorativeType === 'lines' && classes.decorativeLines
      )
    );
  };

  // Render label with icon
  const renderLabel = () => {
    if (!label && !icon) return null;

    const labelClasses = clsx(
      'inline-flex items-center justify-center z-10 whitespace-nowrap',
      labelVariantPresets[labelVariant],
      labelPosition === 'left' && classes.labelLeft,
      labelPosition === 'center' && classes.labelCenter,
      labelPosition === 'right' && classes.labelRight,
      labelVariant === 'default' && classes.labelDefault,
      labelVariant === 'outlined' && classes.labelOutlined,
      labelVariant === 'pill' && classes.labelPill,
      classes.label,
      classes.labelDark
    );

    const iconClasses = clsx(
      iconPosition === 'left' ? 'mr-1' : 'ml-1',
      classes.labelIcon
    );

    return (
      <div className={labelClasses}>
        {iconPosition === 'left' && IconComponent && (
          <IconComponent className={iconClasses} />
        )}
        {label && <span className={classes.labelText}>{label}</span>}
        {iconPosition === 'right' && IconComponent && (
          <IconComponent className={iconClasses} />
        )}
      </div>
    );
  };

  // Render simple line (no label, no decorative)
  const renderSimpleLine = () => (
    <div
      className={getLineClasses()}
      role={role}
      aria-label={ariaLabel}
    />
  );

  // Render horizontal divider with label
  const renderHorizontalWithLabel = () => {
    const decorativeEl = renderDecorative();
    const labelEl = renderLabel();

    // Position classes
    const positionClasses = {
      left: 'justify-start',
      center: 'justify-center',
      right: 'justify-end',
    };

    return (
      <div className={clsx('flex items-center w-full', positionClasses[labelPosition])}>
        {/* Left line (unless label is at left) */}
        {labelPosition !== 'left' && (
          <div className={getLineClasses('left')} />
        )}

        {/* Center content */}
        <div className={clsx('flex items-center gap-2', classes.labelContainer)}>
          {decorativeEl}
          {labelEl}
          {children}
        </div>

        {/* Right line (unless label is at right) */}
        {labelPosition !== 'right' && (
          <div className={getLineClasses('right')} />
        )}
      </div>
    );
  };

  // Render vertical divider with label
  const renderVerticalWithLabel = () => {
    const decorativeEl = renderDecorative();
    const labelEl = renderLabel();

    return (
      <div className="flex flex-col items-center h-full">
        {/* Top line */}
        <div className={getLineClasses('top')} />

        {/* Center content */}
        <div className={clsx('flex flex-col items-center gap-2 py-2', classes.labelContainer)}>
          {decorativeEl}
          {labelEl}
          {children}
        </div>

        {/* Bottom line */}
        <div className={getLineClasses('bottom')} />
      </div>
    );
  };

  // Determine if we need label/decorative layout
  const hasContent = label || icon || decorative || children;

  return (
    <div
      ref={ref}
      className={containerClasses}
      style={style}
      role={role}
      aria-label={ariaLabel}
      data-uid={uid}
      data-component={component}
      {...props}
    >
      {!hasContent && renderSimpleLine()}
      {hasContent && orientation === 'horizontal' && renderHorizontalWithLabel()}
      {hasContent && orientation === 'vertical' && renderVerticalWithLabel()}
    </div>
  );
});

CMS_Divider.displayName = 'CMS_Divider';
CMS_Divider.metadata = componentMetadata;
CMS_Divider.defaultProps = defaultDividerProps;

// ============================================================================
// Pre-configured Divider Components
// ============================================================================

export const CMS_DividerWithText = forwardRef(({ text, ...props }, ref) => (
  <CMS_Divider
    ref={ref}
    label={text}
    {...props}
  />
));
CMS_DividerWithText.displayName = 'CMS_DividerWithText';

export const CMS_DividerWithIcon = forwardRef(({ icon, iconLibrary = 'hi', ...props }, ref) => (
  <CMS_Divider
    ref={ref}
    icon={icon}
    iconLibrary={iconLibrary}
    label={null}
    {...props}
  />
));
CMS_DividerWithIcon.displayName = 'CMS_DividerWithIcon';

export const CMS_VerticalDivider = forwardRef((props, ref) => (
  <CMS_Divider
    ref={ref}
    orientation="vertical"
    height="full"
    spacing="mx-2"
    {...props}
  />
));
CMS_VerticalDivider.displayName = 'CMS_VerticalDivider';

export const CMS_GradientDivider = forwardRef((props, ref) => (
  <CMS_Divider
    ref={ref}
    variant="gradient"
    gradient="from-blue-500 to-purple-500"
    darkGradient="from-blue-400 to-purple-400"
    {...props}
  />
));
CMS_GradientDivider.displayName = 'CMS_GradientDivider';

export const CMS_DashedDivider = forwardRef((props, ref) => (
  <CMS_Divider
    ref={ref}
    variant="dashed"
    thickness="medium"
    {...props}
  />
));
CMS_DashedDivider.displayName = 'CMS_DashedDivider';

// ============================================================================
// Export
// ============================================================================

export default CMS_Divider;