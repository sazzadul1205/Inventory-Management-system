/**
 * CMS_Button Component - Editor-friendly button with flat class structure
 * 
 * Features:
 * - Flat class structure for easy editing
 * - 16+ icon libraries from react-icons
 * - Loading spinner and disabled states
 * - Inertia.js Link integration
 * - Hover effects with classes
 * - Dark mode support
 * - Gradient backgrounds
 */

import React, { forwardRef, useMemo, useState } from 'react';
import { Link } from '@inertiajs/react';
import clsx from 'clsx';
import * as FaIcons from 'react-icons/fa';
import * as HiIcons from 'react-icons/hi';
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as RiIcons from 'react-icons/ri';
import * as TbIcons from 'react-icons/tb';
import * as GiIcons from 'react-icons/gi';
import * as FiIcons from 'react-icons/fi';
import * as SiIcons from 'react-icons/si';
import * as VscIcons from 'react-icons/vsc';
import * as IoIcons from 'react-icons/io5';
import * as GrIcons from 'react-icons/gr';
import * as BiIcons from 'react-icons/bi';
import * as ImIcons from 'react-icons/im';
import * as CgIcons from 'react-icons/cg';

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
  si: SiIcons,
  vsc: VscIcons,
  io: IoIcons,
  gr: GrIcons,
  bi: BiIcons,
  im: ImIcons,
  cg: CgIcons,
};

// ============================================================================
// Default Classes Structure
// ============================================================================

const defaultClasses = {
  // Base button styles
  base: '',

  // Interactive states
  hover: '',
  focus: '',
  active: '',
  disabled: '',

  // Theme states
  dark: '',
  darkHover: '',
  darkFocus: '',
  darkActive: '',

  // Responsive breakpoints
  sm: '',
  md: '',
  lg: '',
  xl: '',
  '2xl': '',

  // Icon specific classes
  icon: '',
  iconLeft: '',
  iconRight: '',

  // Loading spinner
  spinner: '',

  // Custom override
  custom: '',
};

// Default props (non-class properties)
const defaultProps = {
  // Content
  text: 'Button',
  icon: null,
  iconLibrary: 'fa',
  iconPosition: 'left',
  iconOnly: false,

  // Sizing
  size: 'md', // 'sm', 'md', 'lg'
  fullWidth: false,

  // State
  type: 'button',
  disabled: false,
  loading: false,

  // Inertia.js props
  href: null,
  method: 'get',
  preserveState: true,
  preserveScroll: false,
  replace: false,
  only: [],
  headers: {},
  data: {},

  // Events
  onClick: null,
  onHover: null,
  onLeave: null,

  // Accessibility
  ariaLabel: '',
  ariaExpanded: null,
  ariaControls: null,
};

// Size presets (can be overridden by classes)
const sizePresets = {
  sm: {
    base: 'px-3 py-1.5 text-sm gap-1',
    icon: 'w-4 h-4',
  },
  md: {
    base: 'px-4 py-2 text-base gap-2',
    icon: 'w-5 h-5',
  },
  lg: {
    base: 'px-6 py-3 text-lg gap-3',
    icon: 'w-6 h-6',
  },
};

// Metadata for visual editor
const componentMetadata = {
  name: 'Button',
  description: 'Interactive button with icons and Inertia.js support',
  category: 'interactive',
  icon: '🔘',
  editable: ['base', 'hover', 'dark', 'focus', 'icon'],
  controls: [
    { type: 'text', target: 'text', label: 'Button Text' },
    { type: 'select', target: 'size', label: 'Size', options: ['sm', 'md', 'lg'] },
    { type: 'toggle', target: 'fullWidth', label: 'Full Width' },
    { type: 'toggle', target: 'disabled', label: 'Disabled' },
    { type: 'toggle', target: 'loading', label: 'Loading' },
    { type: 'select', target: 'iconLibrary', label: 'Icon Library', options: Object.keys(iconLibraries) },
    { type: 'text', target: 'icon', label: 'Icon Name (e.g., FaSave)' },
    { type: 'select', target: 'iconPosition', label: 'Icon Position', options: ['left', 'right'] },
    { type: 'toggle', target: 'iconOnly', label: 'Icon Only' },
    { type: 'class-editor', target: 'base', label: 'Base Styles' },
    { type: 'class-editor', target: 'hover', label: 'Hover Styles' },
    { type: 'class-editor', target: 'focus', label: 'Focus Styles' },
    { type: 'class-editor', target: 'dark', label: 'Dark Mode Styles' },
    { type: 'color-picker', target: 'bg-', label: 'Background' },
    { type: 'color-picker', target: 'text-', label: 'Text Color' },
    { type: 'border', target: 'border', label: 'Border' },
    { type: 'shadow', target: 'shadow', label: 'Shadow' },
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
    classes.disabled,

    // Theme states
    classes.dark,
    classes.darkHover,
    classes.darkFocus,
    classes.darkActive,

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
 * Get icon component from library
 */
const getIconComponent = (iconName, libraryPrefix) => {
  if (!iconName || !libraryPrefix) return null;
  const library = iconLibraries[libraryPrefix];
  return library?.[iconName] || null;
};

/**
 * Get alignment class
 */
const getAlignmentClass = (fullWidth) => {
  return fullWidth ? 'inline-flex justify-center' : 'inline-flex';
};

// ============================================================================
// Main Component
// ============================================================================

const CMS_Button = forwardRef(({
  // Component identification
  uid,
  component = 'CMS_Button',

  // Main styling - flat class structure
  classes = defaultClasses,

  // Content
  text = 'Button',
  icon,
  iconLibrary = 'fa',
  iconPosition = 'left',
  iconOnly = false,

  // Sizing
  size = 'md',
  fullWidth = false,

  // State
  type = 'button',
  disabled = false,
  loading = false,

  // Inertia.js props
  href,
  method = 'get',
  preserveState = true,
  preserveScroll = false,
  replace = false,
  only = [],
  headers = {},
  data = {},

  // Events
  onClick,
  onHover,
  onLeave,

  // Accessibility
  ariaLabel,
  ariaExpanded,
  ariaControls,

  // Debug
  debug = false,

  // Extra
  className,
  style,
  children,
  ...props
}, ref) => {

  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // Get icon component
  const IconComponent = useMemo(
    () => getIconComponent(icon, iconLibrary),
    [icon, iconLibrary]
  );

  // Apply size preset
  const sizePreset = useMemo(() => {
    return sizePresets[size] || sizePresets.md;
  }, [size]);

  // Build base classes with size preset
  const baseClasses = useMemo(() => {
    return clsx(
      getAlignmentClass(fullWidth),
      sizePreset.base,
      buildClasses(classes, className),
      fullWidth && 'w-full',
      (disabled || loading) && 'cursor-not-allowed opacity-50',
      !disabled && !loading && 'cursor-pointer'
    );
  }, [classes, sizePreset, fullWidth, disabled, loading, className]);

  // Build icon classes
  const iconClasses = useMemo(() => {
    return clsx(
      sizePreset.icon,
      classes.icon,
      iconOnly ? '' : (iconPosition === 'left' ? 'mr-2' : 'ml-2')
    );
  }, [sizePreset.icon, classes.icon, iconOnly, iconPosition]);

  // Render icon
  const renderIcon = () => {
    if (!IconComponent) return null;
    return <IconComponent className={iconClasses} />;
  };

  // Render loading spinner
  const renderSpinner = () => {
    return (
      <svg
        className={clsx('animate-spin', sizePreset.icon, classes.spinner)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    );
  };

  // Render content
  const renderContent = () => {
    if (loading) {
      return (
        <span className="inline-flex items-center">
          {renderSpinner()}
          {!iconOnly && text && <span className="ml-2">{text}</span>}
        </span>
      );
    }

    if (iconOnly && IconComponent) {
      return renderIcon();
    }

    return (
      <span className="inline-flex items-center">
        {iconPosition === 'left' && renderIcon()}
        <span>{text}</span>
        {iconPosition === 'right' && renderIcon()}
      </span>
    );
  };

  // Event handlers
  const handleMouseEnter = (e) => {
    setIsHovered(true);
    onHover?.(e);
  };

  const handleMouseLeave = (e) => {
    setIsHovered(false);
    onLeave?.(e);
  };

  const handleFocus = (e) => {
    setIsFocused(true);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
  };

  const handleClick = (e) => {
    if (disabled || loading) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  // Accessibility props
  const accessibilityProps = {
    'aria-label': ariaLabel || (iconOnly ? text : undefined),
    'aria-expanded': ariaExpanded,
    'aria-controls': ariaControls,
    'aria-disabled': disabled || undefined,
    'aria-busy': loading || undefined,
  };

  // Inertia Link props
  const inertiaProps = {
    href,
    method,
    preserveState,
    preserveScroll,
    replace,
    only,
    headers,
    data,
    onClick: handleClick,
    disabled: disabled || loading,
    className: baseClasses,
    style: { ...style },
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onFocus: handleFocus,
    onBlur: handleBlur,
    ...accessibilityProps,
  };

  // Common props for both button and link
  const commonProps = {
    ref,
    className: baseClasses,
    style,
    onClick: handleClick,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onFocus: handleFocus,
    onBlur: handleBlur,
    'data-uid': uid,
    'data-component': component,
    'data-hovered': isHovered ? 'true' : undefined,
    'data-focused': isFocused ? 'true' : undefined,
    ...accessibilityProps,
    ...props,
  };

  // Render as Link if href provided
  if (href) {
    return (
      <Link {...inertiaProps} {...commonProps}>
        {renderContent()}
        {children}
      </Link>
    );
  }

  // Render as button
  return (
    <button
      type={type}
      disabled={disabled || loading}
      {...commonProps}
    >
      {renderContent()}
      {children}
    </button>
  );
});

CMS_Button.displayName = 'CMS_Button';
CMS_Button.metadata = componentMetadata;
CMS_Button.defaultProps = defaultProps;

// ============================================================================
// Pre-configured Button Components
// ============================================================================

export const CMS_PrimaryButton = forwardRef((props, ref) => (
  <CMS_Button
    ref={ref}
    classes={{
      base: 'bg-blue-600 text-white font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
      dark: 'dark:bg-blue-500 dark:hover:bg-blue-600',
      ...props.classes
    }}
    {...props}
  />
));
CMS_PrimaryButton.displayName = 'CMS_PrimaryButton';

export const CMS_SecondaryButton = forwardRef((props, ref) => (
  <CMS_Button
    ref={ref}
    classes={{
      base: 'bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 focus:ring-2 focus:ring-gray-400',
      dark: 'dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600',
      ...props.classes
    }}
    {...props}
  />
));
CMS_SecondaryButton.displayName = 'CMS_SecondaryButton';

export const CMS_DangerButton = forwardRef((props, ref) => (
  <CMS_Button
    ref={ref}
    classes={{
      base: 'bg-red-600 text-white font-medium hover:bg-red-700 focus:ring-2 focus:ring-red-500',
      dark: 'dark:bg-red-500 dark:hover:bg-red-600',
      ...props.classes
    }}
    {...props}
  />
));
CMS_DangerButton.displayName = 'CMS_DangerButton';

export const CMS_OutlineButton = forwardRef((props, ref) => (
  <CMS_Button
    ref={ref}
    classes={{
      base: 'border-2 border-blue-600 text-blue-600 font-medium hover:bg-blue-50',
      dark: 'dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-900/20',
      ...props.classes
    }}
    {...props}
  />
));
CMS_OutlineButton.displayName = 'CMS_OutlineButton';

export const CMS_GradientButton = forwardRef((props, ref) => (
  <CMS_Button
    ref={ref}
    classes={{
      base: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:from-blue-700 hover:to-purple-700',
      dark: 'dark:from-blue-500 dark:to-purple-500',
      ...props.classes
    }}
    {...props}
  />
));
CMS_GradientButton.displayName = 'CMS_GradientButton';

export const CMS_IconButton = forwardRef((props, ref) => (
  <CMS_Button
    ref={ref}
    iconOnly={true}
    classes={{
      base: 'p-2 rounded-full hover:bg-gray-100',
      dark: 'dark:hover:bg-gray-800',
      ...props.classes
    }}
    {...props}
  />
));
CMS_IconButton.displayName = 'CMS_IconButton';

// ============================================================================
// Export
// ============================================================================

export default CMS_Button;
