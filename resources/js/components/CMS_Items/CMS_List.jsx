/**
 * CMS_List Component - Editor-friendly list with flat class structure
 * 
 * Features:
 * - Flat class structure for easy editing
 * - Multiple list types (ul, ol, dl, icon-list)
 * - Nested list support
 * - Icons for each item
 * - Badges on list items
 * - Interactive items (clickable, links)
 * - Selection support
 * - Grid layout for icon lists
 * - Dark mode support
 */

// eslint-disable-next-line import/no-named-as-default
import clsx from 'clsx';
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
import * as SiIcons from 'react-icons/si';
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
  si: SiIcons,
  io: IoIcons,
  bi: BiIcons,
};

// ============================================================================
// Default Classes Structure
// ============================================================================

const defaultListClasses = {
  // Container classes
  container: '',
  containerHover: '',
  containerDark: '',

  // List item classes
  item: '',
  itemHover: '',
  itemActive: '',
  itemDisabled: '',
  itemDark: '',

  // Icon classes
  icon: '',
  iconLeft: '',
  iconRight: '',

  // Badge classes
  badge: '',
  badgePrimary: '',
  badgeSuccess: '',
  badgeWarning: '',
  badgeDanger: '',
  badgeInfo: '',

  // Marker classes (for ordered lists)
  marker: '',

  // Nested list classes
  nested: '',
  nestedItem: '',

  // Icon list specific
  iconGrid: '',
  iconItem: '',
  iconLabel: '',

  // Definition list classes
  term: '',
  description: '',

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
const defaultListProps = {
  // Basic
  type: 'ul', // 'ul', 'ol', 'dl', 'icon-list'
  variant: 'default', // 'default', 'bordered', 'striped', 'card'
  style: 'none', // 'none', 'disc', 'decimal', 'circle', 'square', 'roman', 'alpha'

  // Layout
  layout: 'vertical', // 'vertical', 'horizontal', 'grid'
  columns: 1,
  gap: 'gap-2',
  spacing: 'space-y-2',

  // List attributes
  start: 1,
  reversed: false,

  // Nested
  nested: false,
  nestedIndent: 4,

  // Selection
  selectable: false,
  multiple: false,
  selectedItems: [],

  // Icon list specific
  iconListConfig: {
    columns: 4,
    gap: 'gap-4',
    showLabel: true,
    labelPosition: 'bottom',
    centered: true,
  },

  // Accessibility
  ariaLabel: null,
  ariaLabelledBy: null,

  // Events
  onSelect: null,
};

// List style mappings
const listStyleClasses = {
  none: 'list-none',
  disc: 'list-disc',
  decimal: 'list-decimal',
  circle: 'list-circle',
  square: 'list-square',
  roman: 'list-roman',
  alpha: 'list-alpha',
};

// Badge variants
const badgeVariants = {
  primary: 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300',
  success: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300',
  warning: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
  danger: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
  info: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900 dark:text-cyan-300',
  default: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
};

// Metadata for visual editor
const componentMetadata = {
  name: 'List',
  description: 'Flexible list component with icons and nested items',
  category: 'layout',
  icon: '📋',
  editable: ['container', 'item', 'icon', 'badge', 'marker', 'nested'],
  controls: [
    { type: 'select', target: 'type', label: 'List Type', options: ['ul', 'ol', 'dl', 'icon-list'] },
    { type: 'select', target: 'variant', label: 'Variant', options: ['default', 'bordered', 'striped', 'card'] },
    { type: 'select', target: 'style', label: 'Bullet Style', options: Object.keys(listStyleClasses) },
    { type: 'select', target: 'layout', label: 'Layout', options: ['vertical', 'horizontal', 'grid'] },
    { type: 'number', target: 'columns', label: 'Grid Columns', min: 1, max: 6 },
    { type: 'toggle', target: 'selectable', label: 'Selectable Items' },
    { type: 'toggle', target: 'multiple', label: 'Multi-Select' },
    { type: 'class-editor', target: 'container', label: 'Container Styles' },
    { type: 'class-editor', target: 'item', label: 'Item Styles' },
    { type: 'class-editor', target: 'icon', label: 'Icon Styles' },
    { type: 'class-editor', target: 'badge', label: 'Badge Styles' },
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
    classes.containerDark,

    // Item classes
    classes.item,
    classes.itemHover,
    classes.itemActive,
    classes.itemDisabled,
    classes.itemDark,

    // Icon classes
    classes.icon,
    classes.iconLeft,
    classes.iconRight,

    // Badge classes
    classes.badge,
    classes.badgePrimary,
    classes.badgeSuccess,
    classes.badgeWarning,
    classes.badgeDanger,
    classes.badgeInfo,

    // Marker
    classes.marker,

    // Nested
    classes.nested,
    classes.nestedItem,

    // Icon list
    classes.iconGrid,
    classes.iconItem,
    classes.iconLabel,

    // Definition list
    classes.term,
    classes.description,

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

const normalizeText = (value) => {
  if (value === null) return '';
  if (typeof value === 'string' || typeof value === 'number') return value;
  if (typeof value === 'object') {
    return value.label ?? value.text ?? value.name ?? '';
  }
  return String(value);
};

// ============================================================================
// CMS_ListItem Component
// ============================================================================

const CMS_ListItem = forwardRef(({
  text,
  icon,
  iconLibrary = 'fa',
  iconPosition = 'left',
  badge,
  badgeVariant = 'primary',
  iconColor,   // ADD THIS LINE
  href,
  target,
  onClick,
  disabled = false,
  active = false,
  marker,
  nested = false,
  classes = {},
  className,
  style,
  children,
  ...props
}, ref) => {

  const [isHovered, setIsHovered] = useState(false);

  const IconComponent = useMemo(
    () => getIconComponent(icon, iconLibrary),
    [icon, iconLibrary]
  );

  const itemClasses = clsx(
    'flex items-start',
    !disabled && (href || onClick) && 'cursor-pointer',
    disabled && 'opacity-50 cursor-not-allowed',
    active && classes.itemActive,
    classes.item,
    isHovered && classes.itemHover,
    disabled && classes.itemDisabled,
    nested && classes.nestedItem,
    className
  );

  // Build icon classes
  const iconClasses = clsx(
    'shrink-0',
    iconColor,
    classes.icon,
    iconPosition === 'left' ? clsx('mr-2', classes.iconLeft) : clsx('ml-2', classes.iconRight)
  );

  const badgeClasses = clsx(
    'ml-2 px-2 py-0.5 text-xs rounded-full',
    badgeVariants[badgeVariant] || badgeVariants.default,
    classes.badge,
    classes[`badge${badgeVariant.charAt(0).toUpperCase() + badgeVariant.slice(1)}`]
  );

  const markerClasses = clsx('mr-2 font-mono', classes.marker);

  const handleClick = (e) => {
    if (disabled) return;
    onClick?.(e);
  };

  const contentText = normalizeText(text);
  const badgeText = normalizeText(badge);

  const content = (
    <>
      {marker && <span className={markerClasses}>{marker}</span>}

      {iconPosition === 'left' && IconComponent && (
        <IconComponent className={iconClasses} />
      )}

      <span className="flex-1 min-w-0">{contentText || children}</span>

      {iconPosition === 'right' && IconComponent && (
        <IconComponent className={iconClasses} />
      )}

      {badgeText && <span className={badgeClasses}>{badgeText}</span>}
    </>
  );

  if (href && !disabled) {
    return (
      <a
        ref={ref}
        href={href}
        target={target}
        className={itemClasses}
        style={style}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {content}
      </a>
    );
  }

  if (onClick) {
    return (
      <button
        ref={ref}
        className={itemClasses}
        style={style}
        onClick={handleClick}
        disabled={disabled}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {content}
      </button>
    );
  }

  return (
    <div
      ref={ref}
      className={itemClasses}
      style={style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {content}
    </div>
  );
});

CMS_ListItem.displayName = 'CMS_ListItem';

// ============================================================================
// CMS_IconList Component
// ============================================================================

const CMS_IconList = forwardRef(({
  items = [],
  columns = 4,
  gap = 'gap-4',
  showLabel = true,
  centered = true,
  iconSize = 'w-8 h-8',
  onItemClick,
  classes = {},
  className,
  style,
  ...props
}, ref) => {

  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
    6: 'grid-cols-6',
  };

  const containerClasses = clsx(
    'grid',
    gridCols[columns] || 'grid-cols-4',
    gap,
    centered && 'justify-items-center',
    classes.iconGrid,
    className
  );

  return (
    <div ref={ref} className={containerClasses} style={style} {...props}>
      {items.map((item, index) => {
        const IconComponent = getIconComponent(item.icon, item.iconLibrary || 'fa');

        return (
          <div
            key={index}
            className={clsx(
              'flex flex-col items-center',
              classes.iconItem
            )}
            onClick={() => onItemClick?.(item, index)}
          >
            {IconComponent && (
              <div className={clsx(iconSize, classes.icon)}>
                <IconComponent className="w-full h-full" />
              </div>
            )}
            {showLabel && item.label && (
              <span className={clsx('mt-2 text-sm', classes.iconLabel)}>
                {item.label}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
});

CMS_IconList.displayName = 'CMS_IconList';

// ============================================================================
// CMS_List Main Component
// ============================================================================

const CMS_List = forwardRef(({
  // Component identification
  uid,
  component = 'CMS_List',

  // Main styling - flat class structure
  classes = defaultListClasses,

  // Basic
  type = 'ul',
  variant = 'default',
  style: listStyle = 'none',

  // Layout
  layout = 'vertical',
  columns = 1,
  gap = 'gap-2',
  spacing = 'space-y-2',

  // List attributes
  start = 1,
  reversed = false,

  // Nested
  nested = false,
  nestedIndent = 4,

  // Selection
  selectable = false,
  multiple = false,
  selectedItems = [],

  // Icon list specific
  iconListConfig = {},

  // Items
  items = [],

  // Accessibility
  ariaLabel,
  ariaLabelledBy,

  // Events
  onSelect,

  // Extra
  className,
  children,
  ...props
}, ref) => {

  const [selected, setSelected] = useState(selectedItems || []);

  // Handle item selection
  const handleItemSelect = (item, index) => {
    if (!selectable) return;

    let newSelected;
    if (multiple) {
      newSelected = selected.includes(index)
        ? selected.filter(i => i !== index)
        : [...selected, index];
    } else {
      newSelected = [index];
    }

    setSelected(newSelected);
    onSelect?.(newSelected, item);
  };

  // Build container classes
  const containerClasses = useMemo(() => {
    const baseClasses = [
      // Base
      type !== 'icon-list' && listStyleClasses[listStyle],

      // Layout
      layout === 'vertical' && spacing,
      layout === 'horizontal' && 'flex flex-wrap',
      layout === 'horizontal' && gap,
      layout === 'grid' && `grid grid-cols-${columns}`,
      layout === 'grid' && gap,

      // Variant
      variant === 'bordered' && 'divide-y divide-gray-200 dark:divide-gray-700',
      variant === 'striped' && '[&>*:nth-child(odd)]:bg-gray-50 dark:[&>*:nth-child(odd)]:bg-gray-800/50',
      variant === 'card' && 'bg-white dark:bg-gray-800 rounded-lg shadow p-4',

      // Nested
      nested && `ml-${nestedIndent}`,

      // Custom classes
      buildClasses(classes),

      className
    ];

    return clsx(baseClasses);
  }, [type, listStyle, layout, spacing, gap, columns, variant, nested, nestedIndent, classes, className]);

  // Render icon list
  if (type === 'icon-list') {
    return (
      <CMS_IconList
        ref={ref}
        items={items}
        columns={iconListConfig.columns || columns}
        gap={iconListConfig.gap || gap}
        showLabel={iconListConfig.showLabel}
        labelPosition={iconListConfig.labelPosition}
        centered={iconListConfig.centered}
        classes={classes}
        data-uid={uid}
        data-component={component}
        {...props}
      />
    );
  }

  // Render definition list
  if (type === 'dl') {
    return (
      <dl
        ref={ref}
        className={containerClasses}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        data-uid={uid}
        data-component={component}
        {...props}
      >
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <dt className={clsx('font-bold', classes.term)}>{item.term}</dt>
            <dd className={clsx('ml-4 mb-2', classes.description)}>{item.description}</dd>
          </React.Fragment>
        ))}
        {children}
      </dl>
    );
  }

  // Render ordered or unordered list
  const ListTag = type === 'ol' ? 'ol' : 'ul';

  // Render list items recursively
  const renderItems = (itemsList, depth = 0) => {
    return itemsList.map((item, index) => {
      const isSelected = selectable && selected.includes(index);
      const hasNested = item.items && item.items.length > 0;

      return (
        <React.Fragment key={index}>
          <CMS_ListItem
            {...item}
            active={isSelected}
            marker={type === 'ol' ? `${start + index}.` : null}
            onClick={selectable ? () => handleItemSelect(item, index) : item.onClick}
            nested={depth > 0}
            nestedLevel={depth}
            classes={classes}
            className={clsx(
              selectable && 'cursor-pointer',
              selectable && classes.itemHover
            )}
          />

          {hasNested && (
            <CMS_List
              type={type}
              style={listStyle}
              nested={true}
              nestedIndent={nestedIndent}
              spacing={spacing}
              items={item.items}
              classes={{
                ...classes,
                container: clsx(`ml-${nestedIndent}`, classes.nested)
              }}
            />
          )}
        </React.Fragment>
      );
    });
  };

  return (
    <ListTag
      ref={ref}
      className={containerClasses}
      start={type === 'ol' ? start : undefined}
      reversed={type === 'ol' && reversed}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      data-uid={uid}
      data-component={component}
      {...props}
    >
      {renderItems(items)}
      {children}
    </ListTag>
  );
});

CMS_List.displayName = 'CMS_List';
CMS_List.metadata = componentMetadata;
CMS_List.defaultProps = defaultListProps;

// ============================================================================
// Pre-configured List Components
// ============================================================================

export const CMS_UnorderedList = forwardRef((props, ref) => (
  <CMS_List ref={ref} type="ul" {...props} />
));
CMS_UnorderedList.displayName = 'CMS_UnorderedList';

export const CMS_OrderedList = forwardRef((props, ref) => (
  <CMS_List ref={ref} type="ol" {...props} />
));
CMS_OrderedList.displayName = 'CMS_OrderedList';

export const CMS_DefinitionList = forwardRef((props, ref) => (
  <CMS_List ref={ref} type="dl" {...props} />
));
CMS_DefinitionList.displayName = 'CMS_DefinitionList';

export const CMS_BulletList = forwardRef((props, ref) => (
  <CMS_List
    ref={ref}
    type="ul"
    style="disc"
    classes={{
      item: 'ml-4',
      ...props.classes
    }}
    {...props}
  />
));
CMS_BulletList.displayName = 'CMS_BulletList';

export const CMS_Checklist = forwardRef((props, ref) => {
  const itemsWithIcons = props.items?.map(item => ({
    ...item,
    icon: item.checked ? 'FaCheckCircle' : 'FaRegCircle',
    iconLibrary: 'fa',
    iconColor: item.checked ? 'text-green-500' : 'text-gray-400',
  }));

  return (
    <CMS_List
      ref={ref}
      type="ul"
      items={itemsWithIcons || props.items}
      classes={{
        item: 'items-center',
        ...props.classes
      }}
      {...props}
    />
  );
});
CMS_Checklist.displayName = 'CMS_Checklist';

// ============================================================================
// Export
// ============================================================================

export { CMS_ListItem, CMS_IconList };
export default CMS_List;
