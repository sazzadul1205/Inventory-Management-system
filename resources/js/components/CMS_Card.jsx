/**
 * CMS_Card Component - A highly customizable card component with dark mode support
 * 
 * This component renders cards with configurable styling, header, body, footer sections,
 * and supports images, icons, badges, and interactive states.
 * Uses Tailwind CSS for styling with dark mode support via the 'dark:' modifier.
 */

import React, { useMemo, useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as HiIcons from 'react-icons/hi';
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as RiIcons from 'react-icons/ri';
import * as TbIcons from 'react-icons/tb';
import * as GiIcons from 'react-icons/gi';
import * as FiIcons from 'react-icons/fi';
import * as IoIcons from 'react-icons/io5';
import * as BiIcons from 'react-icons/bi';

// Icon library mappings
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
  bi: BiIcons
};

// ============================================================================
// CMS_CardHeader Component
// ============================================================================

/**
 * CMS_CardHeader - Header section of the card
 */
const CMS_CardHeader = ({
  config = {},
  children
}) => {
  const defaultHeaderConfig = {
    // Content
    title: null,
    subtitle: null,
    icon: null,
    iconLibrary: 'fa',
    iconPosition: 'left',
    iconSize: 'w-6 h-6',
    iconColor: null,
    darkIconColor: null,

    // Badge
    badge: null,
    badgeVariant: 'primary',
    badgePosition: 'right',

    // Actions
    actions: null, // Array of action buttons

    // Styling
    variant: 'default',              // 'default', 'bordered', 'gradient'
    divider: true,                    // Show divider after header
    padding: 'p-4',
    bgColor: null,
    darkBgColor: null,
    gradient: null,
    darkGradient: null,
    border: null,
    borderColor: null,
    darkBorderColor: null,
    rounded: 'rounded-t-lg',

    // Typography
    titleSize: 'text-lg',
    titleWeight: 'font-semibold',
    titleColor: 'text-gray-900',
    darkTitleColor: 'dark:text-white',
    subtitleSize: 'text-sm',
    subtitleWeight: 'font-normal',
    subtitleColor: 'text-gray-500',
    darkSubtitleColor: 'dark:text-gray-400',

    // Spacing
    margin: 'm-0',
    gap: 'gap-2',

    // Interactive
    clickable: false,
    onClick: null,

    // Accessibility
    ariaLabel: null,

    // Additional
    className: '',
    style: {}
  };

  const mergedConfig = useMemo(() => ({
    ...defaultHeaderConfig,
    ...config
  }), [config]);

  const [isHovered, setIsHovered] = useState(false);

  // Get icon component
  const getIconComponent = () => {
    if (!mergedConfig.icon) return null;

    const library = iconLibraries[mergedConfig.iconLibrary];
    if (!library) return null;

    const IconComponent = library[mergedConfig.icon];
    return IconComponent || null;
  };

  // Render icon
  const renderIcon = () => {
    const IconComponent = getIconComponent();
    if (!IconComponent) return null;

    return (
      <IconComponent
        className={`
          ${mergedConfig.iconSize}
          ${mergedConfig.iconColor}
          ${mergedConfig.darkIconColor}
          shrink-0
        `}
      />
    );
  };

  // Render badge
  const renderBadge = () => {
    if (!mergedConfig.badge) return null;

    const badgeVariants = {
      primary: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
      success: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
      warning: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
      danger: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
      info: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300',
      default: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
    };

    return (
      <span className={`
        px-2 py-0.5 text-xs rounded-full
        ${badgeVariants[mergedConfig.badgeVariant] || badgeVariants.default}
      `}>
        {mergedConfig.badge}
      </span>
    );
  };

  // Render actions
  const renderActions = () => {
    if (!mergedConfig.actions) return null;

    return (
      <div className="flex items-center gap-2 ml-auto">
        {mergedConfig.actions}
      </div>
    );
  };

  // Build header classes
  const headerClasses = useMemo(() => {
    const classes = [
      'flex items-start',
      mergedConfig.padding,
      mergedConfig.margin,
      mergedConfig.gap,
      mergedConfig.bgColor,
      mergedConfig.darkBgColor,
      mergedConfig.border,
      mergedConfig.borderColor,
      mergedConfig.darkBorderColor,
      mergedConfig.rounded,
      mergedConfig.clickable ? 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800' : '',
      mergedConfig.className
    ];

    // Add gradient if specified
    if (mergedConfig.gradient) {
      classes.push(`bg-gradient-${mergedConfig.gradientDirection || 'to-r'} ${mergedConfig.gradient}`);
      if (mergedConfig.darkGradient) {
        classes.push(mergedConfig.darkGradient);
      }
    }

    // Add divider
    if (mergedConfig.divider) {
      classes.push('border-b border-gray-200 dark:border-gray-700');
    }

    return classes.filter(Boolean).join(' ');
  }, [mergedConfig]);

  // Content wrapper
  const content = (
    <div className="flex items-start w-full">
      {/* Left icon */}
      {mergedConfig.iconPosition === 'left' && renderIcon()}

      {/* Title and subtitle */}
      <div className="flex-1 min-w-0">
        {mergedConfig.title && (
          <div className={`
            ${mergedConfig.titleSize}
            ${mergedConfig.titleWeight}
            ${mergedConfig.titleColor}
            ${mergedConfig.darkTitleColor}
          `}>
            {mergedConfig.title}
          </div>
        )}
        {mergedConfig.subtitle && (
          <div className={`
            ${mergedConfig.subtitleSize}
            ${mergedConfig.subtitleWeight}
            ${mergedConfig.subtitleColor}
            ${mergedConfig.darkSubtitleColor}
          `}>
            {mergedConfig.subtitle}
          </div>
        )}
      </div>

      {/* Right icon or badge */}
      {mergedConfig.iconPosition === 'right' && renderIcon()}
      {mergedConfig.badgePosition === 'right' && renderBadge()}

      {/* Actions */}
      {renderActions()}
    </div>
  );

  // Render header
  return (
    <div
      className={headerClasses}
      style={mergedConfig.style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={mergedConfig.onClick}
      aria-label={mergedConfig.ariaLabel}
    >
      {content}
      {children}
    </div>
  );
};

// ============================================================================
// CMS_CardBody Component
// ============================================================================

/**
 * CMS_CardBody - Body section of the card
 */
const CMS_CardBody = ({
  config = {},
  children
}) => {
  const defaultBodyConfig = {
    // Content
    text: null,

    // Styling
    variant: 'default',              // 'default', 'bordered', 'gradient'
    padding: 'p-4',
    bgColor: null,
    darkBgColor: null,
    gradient: null,
    darkGradient: null,
    border: null,
    borderColor: null,
    darkBorderColor: null,

    // Typography
    textSize: 'text-base',
    textWeight: 'font-normal',
    textColor: 'text-gray-700',
    darkTextColor: 'dark:text-gray-300',

    // Media
    media: null,                      // Image or video component
    mediaPosition: 'top',              // 'top', 'bottom', 'left', 'right'
    mediaWidth: 'full',                // 'full', 'auto', or specific width

    // Spacing
    margin: 'm-0',

    // Interactive
    clickable: false,
    onClick: null,

    // Accessibility
    ariaLabel: null,

    // Additional
    className: '',
    style: {}
  };

  const mergedConfig = useMemo(() => ({
    ...defaultBodyConfig,
    ...config
  }), [config]);

  const [isHovered, setIsHovered] = useState(false);

  // Build body classes
  const bodyClasses = useMemo(() => {
    const classes = [
      mergedConfig.padding,
      mergedConfig.margin,
      mergedConfig.bgColor,
      mergedConfig.darkBgColor,
      mergedConfig.border,
      mergedConfig.borderColor,
      mergedConfig.darkBorderColor,
      mergedConfig.textSize,
      mergedConfig.textWeight,
      mergedConfig.textColor,
      mergedConfig.darkTextColor,
      mergedConfig.clickable ? 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800' : '',
      mergedConfig.className
    ];

    // Add gradient if specified
    if (mergedConfig.gradient) {
      classes.push(`bg-gradient-${mergedConfig.gradientDirection || 'to-r'} ${mergedConfig.gradient}`);
      if (mergedConfig.darkGradient) {
        classes.push(mergedConfig.darkGradient);
      }
    }

    return classes.filter(Boolean).join(' ');
  }, [mergedConfig]);

  // Render media
  const renderMedia = () => {
    if (!mergedConfig.media) return null;

    const mediaClasses = {
      top: 'mb-4',
      bottom: 'mt-4',
      left: 'mr-4 float-left',
      right: 'ml-4 float-right'
    };

    return (
      <div className={mediaClasses[mergedConfig.mediaPosition]}>
        {mergedConfig.media}
      </div>
    );
  };

  return (
    <div
      className={bodyClasses}
      style={mergedConfig.style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={mergedConfig.onClick}
      aria-label={mergedConfig.ariaLabel}
    >
      {mergedConfig.mediaPosition === 'top' && renderMedia()}
      {mergedConfig.mediaPosition === 'left' && renderMedia()}

      <div className="flex-1">
        {mergedConfig.text}
        {children}
      </div>

      {mergedConfig.mediaPosition === 'right' && renderMedia()}
      {mergedConfig.mediaPosition === 'bottom' && renderMedia()}
    </div>
  );
};

// ============================================================================
// CMS_CardFooter Component
// ============================================================================

/**
 * CMS_CardFooter - Footer section of the card
 */
const CMS_CardFooter = ({
  config = {},
  children
}) => {
  const defaultFooterConfig = {
    // Content
    text: null,
    icon: null,
    iconLibrary: 'fa',
    iconPosition: 'left',

    // Actions
    actions: null, // Array of action buttons

    // Styling
    variant: 'default',              // 'default', 'bordered', 'gradient'
    divider: true,                    // Show divider before footer
    padding: 'p-4',
    bgColor: null,
    darkBgColor: null,
    gradient: null,
    darkGradient: null,
    border: null,
    borderColor: null,
    darkBorderColor: null,
    rounded: 'rounded-b-lg',

    // Typography
    textSize: 'text-sm',
    textWeight: 'font-normal',
    textColor: 'text-gray-600',
    darkTextColor: 'dark:text-gray-400',

    // Spacing
    margin: 'm-0',
    gap: 'gap-2',

    // Interactive
    clickable: false,
    onClick: null,

    // Accessibility
    ariaLabel: null,

    // Additional
    className: '',
    style: {}
  };

  const mergedConfig = useMemo(() => ({
    ...defaultFooterConfig,
    ...config
  }), [config]);

  const [isHovered, setIsHovered] = useState(false);

  // Get icon component
  const getIconComponent = () => {
    if (!mergedConfig.icon) return null;

    const library = iconLibraries[mergedConfig.iconLibrary];
    if (!library) return null;

    const IconComponent = library[mergedConfig.icon];
    return IconComponent || null;
  };

  // Render icon
  const renderIcon = () => {
    const IconComponent = getIconComponent();
    if (!IconComponent) return null;

    return <IconComponent className="w-4 h-4" />;
  };

  // Render actions
  const renderActions = () => {
    if (!mergedConfig.actions) return null;

    return (
      <div className="flex items-center gap-2 ml-auto">
        {mergedConfig.actions}
      </div>
    );
  };

  // Build footer classes
  const footerClasses = useMemo(() => {
    const classes = [
      'flex items-center',
      mergedConfig.padding,
      mergedConfig.margin,
      mergedConfig.gap,
      mergedConfig.bgColor,
      mergedConfig.darkBgColor,
      mergedConfig.border,
      mergedConfig.borderColor,
      mergedConfig.darkBorderColor,
      mergedConfig.rounded,
      mergedConfig.textSize,
      mergedConfig.textWeight,
      mergedConfig.textColor,
      mergedConfig.darkTextColor,
      mergedConfig.clickable ? 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800' : '',
      mergedConfig.className
    ];

    // Add gradient if specified
    if (mergedConfig.gradient) {
      classes.push(`bg-gradient-${mergedConfig.gradientDirection || 'to-r'} ${mergedConfig.gradient}`);
      if (mergedConfig.darkGradient) {
        classes.push(mergedConfig.darkGradient);
      }
    }

    // Add divider
    if (mergedConfig.divider) {
      classes.push('border-t border-gray-200 dark:border-gray-700');
    }

    return classes.filter(Boolean).join(' ');
  }, [mergedConfig]);

  return (
    <div
      className={footerClasses}
      style={mergedConfig.style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={mergedConfig.onClick}
      aria-label={mergedConfig.ariaLabel}
    >
      {mergedConfig.iconPosition === 'left' && renderIcon()}
      <span className="flex-1">{mergedConfig.text}</span>
      {mergedConfig.iconPosition === 'right' && renderIcon()}
      {renderActions()}
      {children}
    </div>
  );
};

// ============================================================================
// CMS_Card Main Component
// ============================================================================

/**
 * CMS_Card - Main card container component
 */
const CMS_Card = ({
  config = {},
  header,
  body,
  footer,
  children
}) => {
  const defaultCardConfig = {
    // Layout
    layout: 'vertical',               // 'vertical', 'horizontal'

    // Styling
    variant: 'default',                // 'default', 'bordered', 'elevated', 'gradient', 'outline', 'ghost'
    bgColor: 'bg-white',
    darkBgColor: 'dark:bg-gray-800',
    border: 'border',
    borderColor: 'border-gray-200',
    darkBorderColor: 'dark:border-gray-700',
    rounded: 'rounded-lg',
    shadow: 'shadow',
    hoverShadow: 'hover:shadow-lg',
    hoverScale: null,

    // Gradient
    gradient: null,
    darkGradient: null,
    gradientDirection: 'to-r',

    // Dimensions
    width: null,                       // 'full', 'auto', or specific width
    height: null,                       // 'full', 'auto', or specific height
    maxWidth: null,
    minWidth: null,
    maxHeight: null,
    minHeight: null,

    // Spacing
    padding: 'p-0',                    // Overall card padding (sections have their own padding)
    margin: 'm-0',
    gap: 'gap-0',                      // Gap between sections

    // Interactive
    clickable: false,
    href: null,
    target: null,
    onClick: null,
    disabled: false,
    loading: false,

    // Hover effects
    hover: {
      scale: null,
      shadow: null,
      borderColor: null,
      bgColor: null,
      darkBgColor: null,
      transition: 'transition-all duration-300'
    },

    // Overlay
    overlay: null,
    overlayHover: false,
    overlayOpacity: '50',

    // Badge (card-level badge)
    badge: null,
    badgeVariant: 'primary',
    badgePosition: 'top-right',        // 'top-left', 'top-right', 'bottom-left', 'bottom-right'

    // Image/Media (full card image)
    media: null,
    mediaPosition: 'top',              // 'top', 'bottom', 'cover'

    // Accessibility
    ariaLabel: null,
    role: 'article',

    // Z-Layer
    zLayer: 'auto',

    // Additional
    className: '',
    style: {}
  };

  const mergedConfig = useMemo(() => ({
    ...defaultCardConfig,
    ...config
  }), [config]);

  const [isHovered, setIsHovered] = useState(false);

  // Badge positions
  const badgePositions = {
    'top-left': 'top-2 left-2',
    'top-right': 'top-2 right-2',
    'bottom-left': 'bottom-2 left-2',
    'bottom-right': 'bottom-2 right-2'
  };

  // Build card classes
  const cardClasses = useMemo(() => {
    const classes = [
      'relative overflow-hidden',
      mergedConfig.layout === 'horizontal' ? 'flex' : 'flex-col',
      mergedConfig.bgColor,
      mergedConfig.darkBgColor,
      mergedConfig.border,
      mergedConfig.borderColor,
      mergedConfig.darkBorderColor,
      mergedConfig.rounded,
      mergedConfig.shadow,
      mergedConfig.padding,
      mergedConfig.margin,
      mergedConfig.gap,
      mergedConfig.clickable || mergedConfig.href ? 'cursor-pointer' : '',
      mergedConfig.disabled ? 'opacity-50 cursor-not-allowed' : '',
      mergedConfig.className
    ];

    // Add dimensions
    if (mergedConfig.width === 'full') classes.push('w-full');
    else if (mergedConfig.width) classes.push(`w-${mergedConfig.width}`);

    if (mergedConfig.height === 'full') classes.push('h-full');
    else if (mergedConfig.height) classes.push(`h-${mergedConfig.height}`);

    if (mergedConfig.maxWidth) classes.push(`max-w-${mergedConfig.maxWidth}`);
    if (mergedConfig.minWidth) classes.push(`min-w-${mergedConfig.minWidth}`);
    if (mergedConfig.maxHeight) classes.push(`max-h-${mergedConfig.maxHeight}`);
    if (mergedConfig.minHeight) classes.push(`min-h-${mergedConfig.minHeight}`);

    // Add gradient
    if (mergedConfig.gradient) {
      classes.push(`bg-gradient-${mergedConfig.gradientDirection} ${mergedConfig.gradient}`);
      if (mergedConfig.darkGradient) {
        classes.push(mergedConfig.darkGradient);
      }
    }

    // Add hover effects
    if (mergedConfig.hover) {
      if (mergedConfig.hover.scale) classes.push(`hover:${mergedConfig.hover.scale}`);
      if (mergedConfig.hover.shadow) classes.push(`hover:${mergedConfig.hover.shadow}`);
      if (mergedConfig.hover.borderColor) classes.push(`hover:${mergedConfig.hover.borderColor}`);
      if (mergedConfig.hover.bgColor) classes.push(`hover:${mergedConfig.hover.bgColor}`);
      if (mergedConfig.hover.darkBgColor) classes.push(`hover:${mergedConfig.hover.darkBgColor}`);
      if (mergedConfig.hover.transition) classes.push(mergedConfig.hover.transition);
    }

    // Add z-index
    if (mergedConfig.zLayer !== 'auto') {
      classes.push(`z-${mergedConfig.zLayer}`);
    }

    return classes.filter(Boolean).join(' ');
  }, [mergedConfig]);

  // Render badge
  const renderBadge = () => {
    if (!mergedConfig.badge) return null;

    const badgeVariants = {
      primary: 'bg-blue-500 text-white',
      success: 'bg-green-500 text-white',
      warning: 'bg-yellow-500 text-white',
      danger: 'bg-red-500 text-white',
      info: 'bg-cyan-500 text-white',
      default: 'bg-gray-500 text-white'
    };

    return (
      <div className={`
        absolute z-10
        ${badgePositions[mergedConfig.badgePosition] || 'top-2 right-2'}
        px-2 py-1 text-xs font-semibold rounded-full
        ${badgeVariants[mergedConfig.badgeVariant] || badgeVariants.default}
      `}>
        {mergedConfig.badge}
      </div>
    );
  };

  // Render overlay
  const renderOverlay = () => {
    if (!mergedConfig.overlay) return null;

    const overlayClass = mergedConfig.overlayHover && !isHovered
      ? 'opacity-0'
      : `opacity-${mergedConfig.overlayOpacity}`;

    return (
      <div
        className={`
          absolute inset-0 z-20
          ${mergedConfig.overlay}
          transition-opacity duration-300
          ${overlayClass}
        `}
      />
    );
  };

  // Render media (full card image)
  const renderMedia = () => {
    if (!mergedConfig.media) return null;

    const mediaClasses = {
      top: 'w-full',
      bottom: 'w-full',
      cover: 'absolute inset-0 w-full h-full object-cover'
    };

    const positionClasses = {
      top: '',
      bottom: 'mt-auto',
      cover: ''
    };

    return (
      <div className={`
        ${mediaClasses[mergedConfig.mediaPosition]}
        ${positionClasses[mergedConfig.mediaPosition]}
        overflow-hidden
      `}>
        {mergedConfig.media}
      </div>
    );
  };

  // Handle click
  const handleClick = (e) => {
    if (mergedConfig.disabled || mergedConfig.loading) return;

    if (mergedConfig.onClick) {
      mergedConfig.onClick(e);
    }

    if (mergedConfig.href && !e.defaultPrevented) {
      window.location.href = mergedConfig.href;
    }
  };

  // Card content
  const cardContent = (
    <>
      {/* Media at top */}
      {mergedConfig.mediaPosition === 'top' && renderMedia()}

      {/* Header */}
      {header && (
        <CMS_CardHeader config={typeof header === 'object' ? header : {}}>
          {typeof header !== 'object' && header}
        </CMS_CardHeader>
      )}

      {/* Body */}
      {body && (
        <CMS_CardBody config={typeof body === 'object' ? body : {}}>
          {typeof body !== 'object' && body}
        </CMS_CardBody>
      )}

      {/* Footer */}
      {footer && (
        <CMS_CardFooter config={typeof footer === 'object' ? footer : {}}>
          {typeof footer !== 'object' && footer}
        </CMS_CardFooter>
      )}

      {/* Children (additional content) */}
      {children}

      {/* Media at bottom */}
      {mergedConfig.mediaPosition === 'bottom' && renderMedia()}

      {/* Overlay */}
      {renderOverlay()}

      {/* Badge */}
      {renderBadge()}
    </>
  );

  // Render as link or div
  if (mergedConfig.href) {
    return (
      <a
        href={mergedConfig.disabled ? undefined : mergedConfig.href}
        target={mergedConfig.target}
        className={cardClasses}
        style={mergedConfig.style}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label={mergedConfig.ariaLabel}
        role={mergedConfig.role}
        aria-disabled={mergedConfig.disabled}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div
      className={cardClasses}
      style={mergedConfig.style}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={mergedConfig.ariaLabel}
      role={mergedConfig.role}
    >
      {cardContent}
    </div>
  );
};

// Export all components
export {
  CMS_Card,
  CMS_CardHeader,
  CMS_CardBody,
  CMS_CardFooter
};
export default CMS_Card;