/**
 * CMS_Input Component - Editor-friendly input component with flat class structure
 * 
 * Features:
 * - Flat class structure for easy editing
 * - Multiple input types (text, number, email, password, textarea, select, etc.)
 * - Left/right icons with library support
 * - Validation states (error, success, warning)
 * - Password visibility toggle
 * - Clearable input
 * - Character counter
 * - Loading state
 * - Dark mode support
 * - Input group and addon components
 */


import { clsx } from 'clsx';
import React, { forwardRef, useMemo, useState, useEffect, useRef, useImperativeHandle } from 'react';
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

const defaultClasses = {
  // Container classes
  container: '',
  containerHover: '',
  containerFocus: '',
  containerDark: '',

  // Label classes
  label: '',
  labelDark: '',

  // Input element classes
  input: '',
  inputHover: '',
  inputFocus: '',
  inputError: '',
  inputSuccess: '',
  inputWarning: '',
  inputDisabled: '',
  inputDark: '',

  // Icon classes
  icon: '',
  iconLeft: '',
  iconRight: '',

  // Hint/error message classes
  hint: '',
  hintDark: '',
  error: '',
  success: '',
  warning: '',

  // Addon classes
  addon: '',
  addonLeft: '',
  addonRight: '',
  addonDark: '',

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
  // Basic
  type: 'text',
  name: '',
  id: '',
  value: undefined,
  defaultValue: '',
  placeholder: '',
  label: '',
  hint: '',

  // Validation
  required: false,
  disabled: false,
  readOnly: false,
  error: '',
  success: '',
  warning: '',

  // Numbers
  min: undefined,
  max: undefined,
  step: undefined,

  // Text
  maxLength: undefined,
  minLength: undefined,
  pattern: undefined,

  // Autocomplete
  autoComplete: undefined,
  autoFocus: false,

  // Icons
  leftIcon: null,
  rightIcon: null,
  leftIconLibrary: 'hi',
  rightIconLibrary: 'hi',

  // Features
  clearable: false,
  showPasswordToggle: false,
  showCharCount: false,
  loading: false,

  // Textarea specific
  rows: 3,

  // Events
  onChange: null,
  onBlur: null,
  onFocus: null,
  onKeyDown: null,
  onKeyUp: null,
};

// Size presets
const sizePresets = {
  sm: {
    container: '',
    input: 'px-2 py-1 text-sm',
    label: 'text-xs',
    icon: 'w-4 h-4',
    addon: 'px-2 py-1 text-sm',
  },
  md: {
    container: '',
    input: 'px-3 py-2 text-base',
    label: 'text-sm',
    icon: 'w-5 h-5',
    addon: 'px-3 py-2 text-base',
  },
  lg: {
    container: '',
    input: 'px-4 py-3 text-lg',
    label: 'text-base',
    icon: 'w-6 h-6',
    addon: 'px-4 py-3 text-lg',
  },
};

// Variant presets
const variantPresets = {
  outlined: {
    input: 'border bg-white',
    inputDark: 'dark:bg-gray-800 dark:border-gray-600',
    inputFocus: 'focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20',
  },
  filled: {
    input: 'border-0 bg-gray-100',
    inputDark: 'dark:bg-gray-700',
    inputFocus: 'focus:ring-2 focus:ring-blue-500/20',
  },
  underlined: {
    input: 'border-0 border-b-2 rounded-none px-0 bg-transparent',
    inputFocus: 'focus:border-blue-500 focus:ring-0',
    inputDark: 'dark:border-gray-600',
  },
  ghost: {
    input: 'border-0 bg-transparent',
    inputFocus: 'focus:ring-2 focus:ring-blue-500/20',
  },
};

// Metadata for visual editor
const componentMetadata = {
  name: 'Input',
  description: 'Form input with validation and icons',
  category: 'forms',
  icon: '📝',
  editable: ['container', 'input', 'label', 'hint', 'icon'],
  controls: [
    { type: 'select', target: 'type', label: 'Input Type', options: ['text', 'number', 'email', 'password', 'textarea', 'select', 'checkbox', 'radio', 'file', 'range'] },
    { type: 'text', target: 'label', label: 'Label' },
    { type: 'text', target: 'placeholder', label: 'Placeholder' },
    { type: 'text', target: 'hint', label: 'Hint Text' },
    { type: 'text', target: 'error', label: 'Error Message' },
    { type: 'text', target: 'success', label: 'Success Message' },
    { type: 'text', target: 'warning', label: 'Warning Message' },
    { type: 'toggle', target: 'required', label: 'Required' },
    { type: 'toggle', target: 'disabled', label: 'Disabled' },
    { type: 'toggle', target: 'readOnly', label: 'Read Only' },
    { type: 'toggle', target: 'clearable', label: 'Clearable' },
    { type: 'toggle', target: 'showPasswordToggle', label: 'Password Toggle' },
    { type: 'toggle', target: 'showCharCount', label: 'Character Count' },
    { type: 'select', target: 'leftIconLibrary', label: 'Left Icon Library', options: Object.keys(iconLibraries) },
    { type: 'text', target: 'leftIcon', label: 'Left Icon Name' },
    { type: 'select', target: 'rightIconLibrary', label: 'Right Icon Library', options: Object.keys(iconLibraries) },
    { type: 'text', target: 'rightIcon', label: 'Right Icon Name' },
    { type: 'class-editor', target: 'container', label: 'Container Styles' },
    { type: 'class-editor', target: 'label', label: 'Label Styles' },
    { type: 'class-editor', target: 'input', label: 'Input Styles' },
    { type: 'class-editor', target: 'hint', label: 'Hint Styles' },
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
    // Container classes
    classes.container,
    classes.containerHover,
    classes.containerFocus,
    classes.containerDark,

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

// ============================================================================
// Main Input Component
// ============================================================================

const CMS_Input = forwardRef(({
  // Component identification
  uid,
  component = 'CMS_Input',

  // Main styling - flat class structure
  classes = defaultClasses,

  // Basic props
  type = 'text',
  name,
  id,
  value: externalValue,
  defaultValue = '',
  placeholder,
  label,
  hint,

  // Validation
  required = false,
  disabled = false,
  readOnly = false,
  error = '',
  success = '',
  warning = '',

  // Numbers
  min,
  max,
  step,

  // Text
  maxLength,
  minLength,
  pattern,

  // Autocomplete
  autoComplete,
  autoFocus = false,

  // Icons
  leftIcon,
  rightIcon,
  leftIconLibrary = 'hi',
  rightIconLibrary = 'hi',

  // Features
  clearable = false,
  showPasswordToggle = false,
  showCharCount = false,
  loading = false,

  // Textarea specific
  rows = 3,

  // Size
  size = 'md',

  // Variant
  variant = 'outlined',

  // Events
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  onKeyUp,

  // Children (for select)
  children,

  // Extra
  className,
  style,
  ...props
}, ref) => {

  const [internalValue, setInternalValue] = useState(defaultValue);
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const inputRef = useRef(null);
  useImperativeHandle(ref, () => inputRef.current);

  // Sync with external value
  useEffect(() => {
    if (externalValue !== undefined) {
      setInternalValue(externalValue);
    }
  }, [externalValue]);

  // Get size preset
  const sizePreset = useMemo(() => {
    return sizePresets[size] || sizePresets.md;
  }, [size]);

  // Get variant preset
  const variantPreset = useMemo(() => {
    return variantPresets[variant] || variantPresets.outlined;
  }, [variant]);

  // Determine input type (handle password visibility)
  const inputType = type === 'password' && showPassword ? 'text' : type;

  // Get icon components
  const LeftIcon = useMemo(
    () => getIconComponent(leftIcon, leftIconLibrary),
    [leftIcon, leftIconLibrary]
  );

  const RightIcon = useMemo(
    () => getIconComponent(rightIcon, rightIconLibrary),
    [rightIcon, rightIconLibrary]
  );

  // Build input classes
  const inputClasses = useMemo(() => {
    return clsx(
      // Base
      'block w-full',
      sizePreset.input,
      variantPreset.input,

      // States
      disabled && clsx('cursor-not-allowed opacity-50', classes.inputDisabled),
      readOnly && 'cursor-default',

      // Status colors
      error && clsx('border-red-500 focus:border-red-500 focus:ring-red-500/20', classes.inputError),
      success && clsx('border-green-500 focus:border-green-500 focus:ring-green-500/20', classes.inputSuccess),
      warning && clsx('border-yellow-500 focus:border-yellow-500 focus:ring-yellow-500/20', classes.inputWarning),
      !error && !success && !warning && variantPreset.inputFocus,

      // Icons padding
      leftIcon && 'pl-10',
      (rightIcon || clearable || showPasswordToggle || loading) && 'pr-10',

      // Custom classes
      classes.input,
      isHovered && classes.inputHover,
      isFocused && classes.inputFocus,
      disabled && classes.inputDisabled,
      classes.inputDark && variantPreset.inputDark,

      // Responsive
      classes.sm,
      classes.md,
      classes.lg,
    );
  }, [sizePreset.input, variantPreset.input, variantPreset.inputFocus, variantPreset.inputDark, disabled, classes.inputDisabled, classes.inputError, classes.inputSuccess, classes.inputWarning, classes.input, classes.inputHover, classes.inputFocus, classes.inputDark, classes.sm, classes.md, classes.lg, readOnly, error, success, warning, leftIcon, rightIcon, clearable, showPasswordToggle, loading, isHovered, isFocused]);

  // Handle change
  const handleChange = (e) => {
    const newValue = e.target.value;
    if (externalValue === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(e);
  };

  // Handle clear
  const handleClear = () => {
    if (externalValue === undefined) {
      setInternalValue('');
    }
    onChange?.({ target: { value: '', name } });
    inputRef.current?.focus();
  };

  // Event handlers
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleFocus = (e) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  // Render left icon
  const renderLeftIcon = () => {
    if (!LeftIcon) return null;

    return (
      <div className={clsx(
        'absolute left-0 inset-y-0 flex items-center pl-3 pointer-events-none',
        classes.icon,
        classes.iconLeft
      )}>
        <LeftIcon className={clsx(sizePreset.icon, classes.icon)} />
      </div>
    );
  };

  // Render right icon
  const renderRightIcon = () => {
    if (!RightIcon || loading || clearable || showPasswordToggle) return null;

    return (
      <div className={clsx(
        'absolute right-0 inset-y-0 flex items-center pr-3 pointer-events-none',
        classes.icon,
        classes.iconRight
      )}>
        <RightIcon className={clsx(sizePreset.icon, classes.icon)} />
      </div>
    );
  };

  // Render clear button
  const renderClearButton = () => {
    if (!clearable || !internalValue || disabled || readOnly) return null;

    const ClearIcon = getIconComponent('HiX', 'hi');
    if (!ClearIcon) return null;

    return (
      <button
        type="button"
        onClick={handleClear}
        className={clsx(
          'absolute right-0 inset-y-0 flex items-center pr-3',
          'hover:opacity-75 focus:outline-none',
          classes.icon
        )}
      >
        <ClearIcon className={sizePreset.icon} />
      </button>
    );
  };

  // Render password toggle
  const renderPasswordToggle = () => {
    if (type !== 'password' || !showPasswordToggle) return null;

    const EyeIcon = getIconComponent(showPassword ? 'HiEyeOff' : 'HiEye', 'hi');
    if (!EyeIcon) return null;

    return (
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className={clsx(
          'absolute right-0 inset-y-0 flex items-center pr-3',
          'hover:opacity-75 focus:outline-none',
          classes.icon
        )}
      >
        <EyeIcon className={sizePreset.icon} />
      </button>
    );
  };

  // Render loading spinner
  const renderLoading = () => {
    if (!loading) return null;

    return (
      <div className={clsx(
        'absolute right-0 inset-y-0 flex items-center pr-3',
        classes.icon
      )}>
        <svg className={clsx('animate-spin', sizePreset.icon)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      </div>
    );
  };

  // Render character counter
  const renderCharCount = () => {
    if (!showCharCount || type === 'password') return null;

    const currentLength = String(internalValue || '').length;

    return (
      <div className={clsx(
        'absolute right-0 bottom-0 pr-3 pb-1 text-xs',
        classes.hint,
        classes.hintDark
      )}>
        {maxLength ? `${currentLength}/${maxLength}` : currentLength}
      </div>
    );
  };

  // Render label
  const renderLabel = () => {
    if (!label) return null;

    return (
      <label
        htmlFor={id || name}
        className={clsx(
          'block mb-1',
          sizePreset.label,
          classes.label,
          classes.labelDark,
          disabled && 'opacity-50'
        )}
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
    );
  };

  // Render hint/error message
  const renderHint = () => {
    if (error) {
      return (
        <div className={clsx('mt-1 text-sm', classes.error)}>
          {error}
        </div>
      );
    }

    if (success && typeof success === 'string') {
      return (
        <div className={clsx('mt-1 text-sm', classes.success)}>
          {success}
        </div>
      );
    }

    if (warning && typeof warning === 'string') {
      return (
        <div className={clsx('mt-1 text-sm', classes.warning)}>
          {warning}
        </div>
      );
    }

    if (hint) {
      return (
        <div className={clsx('mt-1 text-sm', classes.hint, classes.hintDark)}>
          {hint}
        </div>
      );
    }

    return null;
  };

  // Render input based on type
  const renderInput = () => {
    const commonProps = {
      ref: inputRef,
      id: id || name,
      name,
      value: internalValue,
      placeholder,
      disabled,
      readOnly,
      required,
      autoComplete,
      autoFocus,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onFocus: handleFocus,
      onBlur: handleBlur,
      onKeyDown,
      onKeyUp,
      onChange: handleChange,
      className: inputClasses,
      'aria-invalid': !!error,
      ...props,
    };

    switch (type) {
      case 'textarea':
        return (
          <textarea
            {...commonProps}
            rows={rows}
            maxLength={maxLength}
            minLength={minLength}
          />
        );

      case 'select':
        return (
          <select
            {...commonProps}
            className={clsx(inputClasses, 'appearance-none')}
          >
            {children}
          </select>
        );

      case 'checkbox':
      case 'radio':
        return (
          <input
            {...commonProps}
            type={type}
            checked={internalValue}
            className={clsx(
              type === 'checkbox' ? 'rounded' : 'rounded-full',
              'text-blue-600 focus:ring-blue-500',
              classes.input
            )}
          />
        );

      case 'file':
        return (
          <input
            {...commonProps}
            type="file"
            className={clsx(
              inputClasses,
              'file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0',
              'file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700',
              'hover:file:bg-blue-100 dark:file:bg-gray-700 dark:file:text-gray-300'
            )}
          />
        );

      case 'range':
        return (
          <input
            {...commonProps}
            type="range"
            min={min}
            max={max}
            step={step}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
        );

      default:
        return (
          <input
            {...commonProps}
            type={inputType}
            min={min}
            max={max}
            step={step}
            maxLength={maxLength}
            minLength={minLength}
            pattern={pattern}
          />
        );
    }
  };

  // Build container classes
  const containerClasses = useMemo(() => {
    return clsx(
      buildClasses(classes, className),
      sizePreset.container
    );
  }, [classes, sizePreset, className]);

  // For checkbox/radio, return different layout
  if (type === 'checkbox' || type === 'radio') {
    return (
      <div className={containerClasses} style={style}>
        <div className="flex items-center gap-2">
          {renderInput()}
          {label && (
            <label
              htmlFor={id || name}
              className={clsx(
                sizePreset.label,
                classes.label,
                classes.labelDark,
                disabled && 'opacity-50'
              )}
            >
              {label}
            </label>
          )}
        </div>
        {renderHint()}
      </div>
    );
  }

  // Regular input layout
  return (
    <div
      className={containerClasses}
      style={style}
      data-uid={uid}
      data-component={component}
    >
      {renderLabel()}

      <div className="relative">
        {renderLeftIcon()}
        {renderInput()}

        <div className="absolute right-0 top-0 bottom-0 flex items-center">
          {renderLoading()}
          {!loading && renderClearButton()}
          {!loading && renderPasswordToggle()}
          {!loading && !clearable && type !== 'password' && renderRightIcon()}
        </div>

        {renderCharCount()}
      </div>

      {renderHint()}
    </div>
  );
});

CMS_Input.displayName = 'CMS_Input';
CMS_Input.metadata = componentMetadata;
CMS_Input.defaultProps = defaultProps;

// ============================================================================
// CMS_InputGroup Component
// ============================================================================

const CMS_InputGroup = forwardRef(({
  children,
  layout = 'vertical',
  classes = {},
  className,
  style,
  ...props
}, ref) => {

  const groupClasses = clsx(
    layout === 'vertical' ? 'flex flex-col' : 'flex flex-row flex-wrap items-end',
    classes.container,
    classes.sm,
    classes.md,
    classes.lg,
    className
  );

  return (
    <div ref={ref} className={groupClasses} style={style} {...props}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return <div className="flex-1">{child}</div>;
        }
        return child;
      })}
    </div>
  );
});

CMS_InputGroup.displayName = 'CMS_InputGroup';

// ============================================================================
// CMS_InputAddon Component
// ============================================================================

const CMS_InputAddon = forwardRef(({
  children,
  position = 'left',
  classes = {},
  className,
  style,
  ...props
}, ref) => {

  const positionClasses = {
    left: 'rounded-r-none border-r-0',
    right: 'rounded-l-none border-l-0',
  };

  const addonClasses = clsx(
    'flex items-center',
    'bg-gray-100 text-gray-700',
    'border border-gray-300',
    'px-3 py-2 text-base',
    positionClasses[position],
    classes.addon,
    position === 'left' ? classes.addonLeft : classes.addonRight,
    classes.addonDark,
    className
  );

  return (
    <div ref={ref} className={addonClasses} style={style} {...props}>
      {children}
    </div>
  );
});

CMS_InputAddon.displayName = 'CMS_InputAddon';

// ============================================================================
// Pre-configured Input Components
// ============================================================================

export const CMS_TextInput = forwardRef((props, ref) => (
  <CMS_Input ref={ref} type="text" {...props} />
));
CMS_TextInput.displayName = 'CMS_TextInput';

export const CMS_NumberInput = forwardRef((props, ref) => (
  <CMS_Input ref={ref} type="number" {...props} />
));
CMS_NumberInput.displayName = 'CMS_NumberInput';

export const CMS_EmailInput = forwardRef((props, ref) => (
  <CMS_Input ref={ref} type="email" {...props} />
));
CMS_EmailInput.displayName = 'CMS_EmailInput';

export const CMS_PasswordInput = forwardRef((props, ref) => (
  <CMS_Input
    ref={ref}
    type="password"
    showPasswordToggle={true}
    {...props}
  />
));
CMS_PasswordInput.displayName = 'CMS_PasswordInput';

export const CMS_Textarea = forwardRef((props, ref) => (
  <CMS_Input ref={ref} type="textarea" {...props} />
));
CMS_Textarea.displayName = 'CMS_Textarea';

export const CMS_Select = forwardRef((props, ref) => (
  <CMS_Input ref={ref} type="select" {...props} />
));
CMS_Select.displayName = 'CMS_Select';

// ============================================================================
// Export
// ============================================================================

export { CMS_InputGroup, CMS_InputAddon };
export default CMS_Input;
