/**
 * CMS_Card Component - Editor-friendly card with flat class structure
 * 
 * Features:
 * - Flat class structure for easy editing
 * - Header, Body, Footer sections with independent styling
 * - Multiple variants (default, bordered, elevated, gradient, outline, ghost)
 * - Badge support with positioning
 * - Media/image support
 * - Overlay with hover effects
 * - Interactive states (clickable, links)
 * - Hover effects with classes
 * - Dark mode support
 * - Icon support from 16+ libraries
 */


import { clsx } from 'clsx';
import React, { forwardRef, useMemo, useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';
import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import * as GiIcons from 'react-icons/gi';
import * as HiIcons from 'react-icons/hi';
import * as IoIcons from 'react-icons/io5';
import * as MdIcons from 'react-icons/md';
import * as RiIcons from 'react-icons/ri';
import * as TbIcons from 'react-icons/tb';

// ============================================================================
// Icon Libraries Registry
// ============================================================================

const iconLibraries = {
  fa: FaIcons,
  hi: HiIcons,
  md: MdIcons,
  ai: AiIcons,
  bs: BsIcons,
  ri: RiIcons,
  tb: TbIcons,
  gi: GiIcons,
  fi: FiIcons,
  io: IoIcons,
  bi: BiIcons,
};

// ============================================================================
// Default Classes Structure
// ============================================================================

const defaultCardClasses = {
  // Card container
  container: '',
  containerHover: '',
  containerFocus: '',
  containerDark: '',

  // Header section
  header: '',
  headerHover: '',
  headerDark: '',

  // Body section
  body: '',
  bodyHover: '',
  bodyDark: '',

  // Footer section
  footer: '',
  footerHover: '',
  footerDark: '',

  // Media section
  media: '',
  mediaTop: '',
  mediaBottom: '',
  mediaCover: '',

  // Badge
  badge: '',
  badgeTopLeft: '',
  badgeTopRight: '',
  badgeBottomLeft: '',
  badgeBottomRight: '',

  // Overlay
  overlay: '',
  overlayHover: '',

  // Icon classes
  icon: '',
  iconLeft: '',
  iconRight: '',

  // Title/Subtitle
  title: '',
  subtitle: '',

  // Actions container
  actions: '',
  actionButton: '',

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
const defaultCardProps = {
  // Layout
  layout: 'vertical', // 'vertical', 'horizontal'

  // Variant
  variant: 'default', // 'default', 'bordered', 'elevated', 'gradient', 'outline', 'ghost'

  // Dimensions
  width: null,
  height: null,
  maxWidth: null,
  minWidth: null,
  maxHeight: null,
  minHeight: null,

  // Interactive
  clickable: false,
  href: null,
  target: null,
  disabled: false,
  loading: false,

  // Badge
  badge: null,
  badgeVariant: 'primary',
  badgePosition: 'top-right', // 'top-left', 'top-right', 'bottom-left', 'bottom-right'

  // Media
  media: null,
  mediaPosition: 'top', // 'top', 'bottom', 'cover'

  // Overlay
  overlay: null,
  overlayHover: false,

  // Accessibility
  ariaLabel: null,
  role: 'article',

  // Events
  onClick: null,
  onHover: null,
  onLeave: null,
};

// Size presets
const sizePresets = {
  sm: {
    container: 'max-w-sm',
    header: 'p-3',
    body: 'p-3',
    footer: 'p-3',
    title: 'text-base',
    subtitle: 'text-xs',
    icon: 'w-4 h-4',
  },
  md: {
    container: 'max-w-md',
    header: 'p-4',
    body: 'p-4',
    footer: 'p-4',
    title: 'text-lg',
    subtitle: 'text-sm',
    icon: 'w-5 h-5',
  },
  lg: {
    container: 'max-w-lg',
    header: 'p-6',
    body: 'p-6',
    footer: 'p-6',
    title: 'text-xl',
    subtitle: 'text-base',
    icon: 'w-6 h-6',
  },
};

// Variant presets
const variantPresets = {
  default: {
    container: 'bg-white border border-gray-200',
    containerDark: 'dark:bg-gray-800 dark:border-gray-700',
  },
  bordered: {
    container: 'bg-white border-2 border-gray-200',
    containerDark: 'dark:bg-gray-800 dark:border-gray-700',
  },
  elevated: {
    container: 'bg-white shadow-md',
    containerDark: 'dark:bg-gray-800 dark:shadow-gray-900/30',
    containerHover: 'hover:shadow-lg',
  },
  gradient: {
    container: 'bg-linear-to-br from-blue-500 to-purple-600 text-white',
    containerDark: 'dark:from-blue-600 dark:to-purple-700',
  },
  outline: {
    container: 'bg-transparent border-2 border-blue-500',
    containerDark: 'dark:border-blue-400',
  },
  ghost: {
    container: 'bg-transparent',
    containerDark: 'dark:bg-transparent',
  },
};

// Badge variant presets
const badgeVariants = {
  primary: 'bg-blue-500 text-white',
  success: 'bg-green-500 text-white',
  warning: 'bg-yellow-500 text-white',
  danger: 'bg-red-500 text-white',
  info: 'bg-cyan-500 text-white',
  default: 'bg-gray-500 text-white',
};

// Badge positions
const badgePositions = {
  'top-left': 'top-2 left-2',
  'top-right': 'top-2 right-2',
  'bottom-left': 'bottom-2 left-2',
  'bottom-right': 'bottom-2 right-2',
};

// Metadata for visual editor
const componentMetadata = {
  name: 'Card',
  description: 'Flexible card container with header, body, and footer',
  category: 'layout',
  icon: '🃏',
  editable: ['container', 'header', 'body', 'footer', 'title', 'subtitle'],
  controls: [
    { type: 'select', target: 'variant', label: 'Variant', options: Object.keys(variantPresets) },
    { type: 'select', target: 'size', label: 'Size', options: ['sm', 'md', 'lg'] },
    { type: 'select', target: 'layout', label: 'Layout', options: ['vertical', 'horizontal'] },
    { type: 'text', target: 'badge', label: 'Badge Text' },
    { type: 'select', target: 'badgeVariant', label: 'Badge Variant', options: Object.keys(badgeVariants) },
    { type: 'select', target: 'badgePosition', label: 'Badge Position', options: Object.keys(badgePositions) },
    { type: 'toggle', target: 'clickable', label: 'Clickable' },
    { type: 'text', target: 'href', label: 'Link URL' },
    { type: 'class-editor', target: 'container', label: 'Container Styles' },
    { type: 'class-editor', target: 'header', label: 'Header Styles' },
    { type: 'class-editor', target: 'body', label: 'Body Styles' },
    { type: 'class-editor', target: 'footer', label: 'Footer Styles' },
    { type: 'class-editor', target: 'badge', label: 'Badge Styles' },
  ]
};

// ============================================================================
// Helper Functions
// ============================================================================

/**
 * Get icon component from library
 */
const getIconComponent = (iconName, libraryPrefix) => {
  if (!iconName || !libraryPrefix) return null;
  const library = iconLibraries[libraryPrefix];
  return library?.[iconName] || null;
};

// ============================================================================
// CMS_CardHeader Component
// ============================================================================

const CMS_CardHeader = forwardRef(({
  title,
  subtitle,
  icon,
  iconLibrary = 'fa',
  iconPosition = 'left',
  actions,
  badge,
  badgeVariant = 'primary',
  classes = {},
  className,
  style,
  children,
  ...props
}, ref) => {

  const IconComponent = useMemo(
    () => getIconComponent(icon, iconLibrary),
    [icon, iconLibrary]
  );

  const headerClasses = clsx(
    'flex items-start gap-2',
    classes.header,
    classes.headerDark,
    className
  );

  const titleClasses = clsx('font-semibold', classes.title);
  const subtitleClasses = clsx('text-sm text-gray-500', classes.subtitle);
  const iconClasses = clsx('shrink-0', classes.icon, iconPosition === 'left' ? classes.iconLeft : classes.iconRight);

  const badgeClasses = clsx(
    'px-2 py-0.5 text-xs rounded-full',
    badgeVariants[badgeVariant] || badgeVariants.default,
    classes.badge
  );

  return (
    <div ref={ref} className={headerClasses} style={style} {...props}>
      {iconPosition === 'left' && IconComponent && (
        <IconComponent className={iconClasses} />
      )}

      <div className="flex-1 min-w-0">
        {title && <div className={titleClasses}>{title}</div>}
        {subtitle && <div className={subtitleClasses}>{subtitle}</div>}
      </div>

      {badge && <span className={badgeClasses}>{badge}</span>}

      {iconPosition === 'right' && IconComponent && (
        <IconComponent className={iconClasses} />
      )}

      {actions && (
        <div className={clsx('flex items-center gap-2 ml-auto', classes.actions)}>
          {actions}
        </div>
      )}

      {children}
    </div>
  );
});

CMS_CardHeader.displayName = 'CMS_CardHeader';

// ============================================================================
// CMS_CardBody Component
// ============================================================================

const CMS_CardBody = forwardRef(({
  text,
  media,
  mediaPosition = 'top',
  classes = {},
  className,
  style,
  children,
  ...props
}, ref) => {

  const bodyClasses = clsx(
    'flex-1',
    classes.body,
    classes.bodyDark,
    className
  );

  const mediaClasses = clsx(
    classes.media,
    mediaPosition === 'top' && classes.mediaTop,
    mediaPosition === 'bottom' && classes.mediaBottom,
    mediaPosition === 'cover' && classes.mediaCover
  );

  const renderMedia = () => {
    if (!media) return null;

    const mediaWrapperClasses = clsx(
      mediaPosition === 'top' && 'mb-4',
      mediaPosition === 'bottom' && 'mt-4',
      mediaPosition === 'left' && 'mr-4 float-left',
      mediaPosition === 'right' && 'ml-4 float-right',
      mediaClasses
    );

    return <div className={mediaWrapperClasses}>{media}</div>;
  };

  return (
    <div ref={ref} className={bodyClasses} style={style} {...props}>
      {(mediaPosition === 'top' || mediaPosition === 'left') && renderMedia()}

      <div className="flex-1">
        {text}
        {children}
      </div>

      {(mediaPosition === 'bottom' || mediaPosition === 'right') && renderMedia()}
    </div>
  );
});

CMS_CardBody.displayName = 'CMS_CardBody';

// ============================================================================
// CMS_CardFooter Component
// ============================================================================

const CMS_CardFooter = forwardRef(({
  text,
  icon,
  iconLibrary = 'fa',
  iconPosition = 'left',
  actions,
  classes = {},
  className,
  style,
  children,
  ...props
}, ref) => {

  const IconComponent = useMemo(
    () => getIconComponent(icon, iconLibrary),
    [icon, iconLibrary]
  );

  const footerClasses = clsx(
    'flex items-center gap-2 border-t border-gray-200 dark:border-gray-700',
    classes.footer,
    classes.footerDark,
    className
  );

  const iconClasses = clsx('w-4 h-4', classes.icon, iconPosition === 'left' ? classes.iconLeft : classes.iconRight);

  return (
    <div ref={ref} className={footerClasses} style={style} {...props}>
      {iconPosition === 'left' && IconComponent && (
        <IconComponent className={iconClasses} />
      )}

      <span className="flex-1 text-sm text-gray-600 dark:text-gray-400">{text}</span>

      {iconPosition === 'right' && IconComponent && (
        <IconComponent className={iconClasses} />
      )}

      {actions && (
        <div className={clsx('flex items-center gap-2 ml-auto', classes.actions)}>
          {actions}
        </div>
      )}

      {children}
    </div>
  );
});

CMS_CardFooter.displayName = 'CMS_CardFooter';

// ============================================================================
// CMS_Card Main Component
// ============================================================================

const CMS_Card = forwardRef(({
  // Component identification
  uid,
  component = 'CMS_Card',

  // Main styling - flat class structure
  classes = defaultCardClasses,

  // Layout
  layout = 'vertical',

  // Variant
  variant = 'default',

  // Size
  size = 'md',

  // Dimensions
  width,
  height,
  maxWidth,
  minWidth,
  maxHeight,
  minHeight,

  // Interactive
  clickable = false,
  href,
  target,
  disabled = false,
  loading = false,

  // Badge
  badge,
  badgeVariant = 'primary',
  badgePosition = 'top-right',

  // Media
  media,
  mediaPosition = 'top',

  // Overlay
  overlay,
  overlayHover = false,

  // Sections
  header,
  body,
  footer,

  // Accessibility
  ariaLabel,
  role = 'article',

  // Events
  onClick,
  onHover,
  onLeave,

  // Extra
  className,
  style,
  children,
  ...props
}, ref) => {

  const [isHovered, setIsHovered] = useState(false);

  // Get size preset
  const sizePreset = useMemo(() => {
    return sizePresets[size] || sizePresets.md;
  }, [size]);

  // Get variant preset
  const variantPreset = useMemo(() => {
    return variantPresets[variant] || variantPresets.default;
  }, [variant]);

  // Build container classes
  const containerClasses = useMemo(() => {
    return clsx(
      // Base
      'relative overflow-hidden',
      layout === 'vertical' ? 'flex flex-col' : 'flex',

      // Size preset
      sizePreset.container,

      // Variant preset
      variantPreset.container,

      // Dimensions
      width === 'full' && 'w-full',
      width && width !== 'full' && `w-${width}`,
      height === 'full' && 'h-full',
      height && height !== 'full' && `h-${height}`,
      maxWidth && `max-w-${maxWidth}`,
      minWidth && `min-w-${minWidth}`,
      maxHeight && `max-h-${maxHeight}`,
      minHeight && `min-h-${minHeight}`,

      // Interactive
      (clickable || href) && !disabled && 'cursor-pointer',
      disabled && 'opacity-50 cursor-not-allowed',

      // Hover effects
      variantPreset.containerHover,
      isHovered && classes.containerHover,

      // Dark mode
      variantPreset.containerDark,
      classes.containerDark,

      // Custom classes
      classes.container,

      // Responsive
      classes.sm,
      classes.md,
      classes.lg,

      // Final className
      className
    );
  }, [layout, sizePreset, variantPreset, width, height, maxWidth, minWidth, maxHeight, minHeight, clickable, href, disabled, classes, isHovered, className]);

  // Build badge classes
  const badgeClasses = useMemo(() => {
    return clsx(
      'absolute z-10 px-2 py-1 text-xs font-semibold rounded-full',
      badgePositions[badgePosition],
      badgeVariants[badgeVariant] || badgeVariants.default,
      classes.badge,
      badgePosition === 'top-left' && classes.badgeTopLeft,
      badgePosition === 'top-right' && classes.badgeTopRight,
      badgePosition === 'bottom-left' && classes.badgeBottomLeft,
      badgePosition === 'bottom-right' && classes.badgeBottomRight
    );
  }, [badgePosition, badgeVariant, classes]);

  // Build overlay classes
  const overlayClasses = useMemo(() => {
    return clsx(
      'absolute inset-0 z-20 transition-opacity duration-300',
      overlay,
      overlayHover && !isHovered ? 'opacity-0' : 'opacity-100',
      classes.overlay,
      isHovered && classes.overlayHover
    );
  }, [overlay, overlayHover, isHovered, classes]);

  // Build media classes
  const mediaClasses = useMemo(() => {
    return clsx(
      mediaPosition === 'cover' ? 'absolute inset-0 w-full h-full object-cover' : 'w-full',
      classes.media,
      mediaPosition === 'top' && classes.mediaTop,
      mediaPosition === 'bottom' && classes.mediaBottom,
      mediaPosition === 'cover' && classes.mediaCover
    );
  }, [mediaPosition, classes]);

  // Event handlers
  const handleMouseEnter = (e) => {
    setIsHovered(true);
    onHover?.(e);
  };

  const handleMouseLeave = (e) => {
    setIsHovered(false);
    onLeave?.(e);
  };

  const handleClick = (e) => {
    if (disabled || loading) return;
    onClick?.(e);
  };

  // Common props
  const commonProps = {
    ref,
    className: containerClasses,
    style,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onClick: handleClick,
    'data-uid': uid,
    'data-component': component,
    'data-hovered': isHovered ? 'true' : undefined,
    'aria-label': ariaLabel,
    role,
    'aria-disabled': disabled,
    ...props,
  };

  // Card content
  const cardContent = (
    <>
      {/* Media at top */}
      {media && mediaPosition === 'top' && (
        <div className={mediaClasses}>{media}</div>
      )}

      {/* Header */}
      {header && (
        typeof header === 'object' && header !== null && 'title' in header ? (
          <CMS_CardHeader
            {...header}
            classes={classes}
            sizePreset={sizePreset}
          />
        ) : (
          <CMS_CardHeader
            title={header}
            classes={classes}
            sizePreset={sizePreset}
          />
        )
      )}

      {/* Body */}
      {body && (
        typeof body === 'object' && body !== null && 'text' in body ? (
          <CMS_CardBody
            {...body}
            classes={classes}
            sizePreset={sizePreset}
          />
        ) : (
          <CMS_CardBody
            text={body}
            classes={classes}
            sizePreset={sizePreset}
          />
        )
      )}

      {/* Footer */}
      {footer && (
        typeof footer === 'object' && footer !== null && 'text' in footer ? (
          <CMS_CardFooter
            {...footer}
            classes={classes}
            sizePreset={sizePreset}
          />
        ) : (
          <CMS_CardFooter
            text={footer}
            classes={classes}
            sizePreset={sizePreset}
          />
        )
      )}

      {/* Children */}
      {children}

      {/* Media at bottom */}
      {media && mediaPosition === 'bottom' && (
        <div className={mediaClasses}>{media}</div>
      )}

      {/* Badge */}
      {badge && <div className={badgeClasses}>{badge}</div>}

      {/* Overlay */}
      {overlay && <div className={overlayClasses} />}
    </>
  );

  // Render as link if href provided
  if (href && !disabled) {
    return (
      <a href={href} target={target} {...commonProps}>
        {cardContent}
      </a>
    );
  }

  // Render as div
  return (
    <div {...commonProps}>
      {cardContent}
    </div>
  );
});

CMS_Card.displayName = 'CMS_Card';
CMS_Card.metadata = componentMetadata;
CMS_Card.defaultProps = defaultCardProps;

// ============================================================================
// Pre-configured Card Components
// ============================================================================

export const CMS_ProductCard = forwardRef((props, ref) => (
  <CMS_Card
    ref={ref}
    variant="elevated"
    classes={{
      container: 'hover:shadow-xl transition-shadow',
      ...props.classes
    }}
    {...props}
  />
));
CMS_ProductCard.displayName = 'CMS_ProductCard';

export const CMS_ProfileCard = forwardRef((props, ref) => (
  <CMS_Card
    ref={ref}
    variant="bordered"
    classes={{
      header: 'text-center border-b',
      body: 'text-center',
      ...props.classes
    }}
    {...props}
  />
));
CMS_ProfileCard.displayName = 'CMS_ProfileCard';

export const CMS_ArticleCard = forwardRef((props, ref) => (
  <CMS_Card
    ref={ref}
    variant="default"
    classes={{
      container: 'overflow-hidden',
      media: 'h-48 object-cover',
      ...props.classes
    }}
    {...props}
  />
));
CMS_ArticleCard.displayName = 'CMS_ArticleCard';

// ============================================================================
// Export
// ============================================================================

export {
  CMS_CardHeader,
  CMS_CardBody,
  CMS_CardFooter
};
export default CMS_Card;