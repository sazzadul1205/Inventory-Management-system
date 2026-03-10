/**
 * CMS_List Component - A highly customizable list component with dark mode support
 * 
 * This component renders lists with configurable styling, icons, and nested items.
 * Supports ordered lists, unordered lists, icon lists, and definition lists.
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
import * as SiIcons from 'react-icons/si';
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
  si: SiIcons,
  io: IoIcons,
  bi: BiIcons
};

// ============================================================================
// CMS_ListItem Component
// ============================================================================

/**
 * CMS_ListItem - Individual list item component
 */
const CMS_ListItem = ({
  config = {},
  children,
  depth = 0
}) => {
  const defaultItemConfig = {
    text: null,
    icon: null,
    iconLibrary: 'fa',
    iconPosition: 'left',
    iconColor: null,
    darkIconColor: null,
    iconSize: null,
    badge: null,
    badgeVariant: 'primary',
    href: null,
    target: null,
    onClick: null,
    disabled: false,
    active: false,
    nested: false,
    nestedLevel: depth,
    marker: null, // Custom marker for ordered lists (1., a., i., etc.)
    color: 'text-gray-700',
    darkColor: 'dark:text-gray-300',
    bgColor: null,
    darkBgColor: null,
    hoverBgColor: null,
    darkHoverBgColor: null,
    padding: 'py-1 px-2',
    margin: 'm-0',
    rounded: null,
    fontSize: 'text-base',
    fontWeight: 'font-normal',
    className: '',
    style: {}
  };

  const mergedConfig = useMemo(() => ({
    ...defaultItemConfig,
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

    const iconSize = mergedConfig.iconSize || 'w-5 h-5';
    const iconColor = mergedConfig.iconColor || '';
    const darkIconColor = mergedConfig.darkIconColor || '';

    return (
      <IconComponent
        className={`
          ${iconSize} 
          ${iconColor} 
          ${darkIconColor}
          shrink-0
        `}
      />
    );
  };

  // Render marker (for ordered lists)
  const renderMarker = () => {
    if (mergedConfig.marker) {
      return <span className="mr-2 font-mono">{mergedConfig.marker}</span>;
    }
    return null;
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
        ml-2 px-2 py-0.5 text-xs rounded-full
        ${badgeVariants[mergedConfig.badgeVariant] || badgeVariants.default}
      `}>
        {mergedConfig.badge}
      </span>
    );
  };

  // Build item classes
  const itemClasses = useMemo(() => {
    const classes = [
      'flex items-start',
      mergedConfig.padding,
      mergedConfig.margin,
      mergedConfig.fontSize,
      mergedConfig.fontWeight,
      mergedConfig.color,
      mergedConfig.darkColor,
      mergedConfig.bgColor,
      mergedConfig.darkBgColor,
      mergedConfig.rounded,
      mergedConfig.href || mergedConfig.onClick ? 'cursor-pointer' : '',
      mergedConfig.disabled ? 'opacity-50 cursor-not-allowed' : '',
      mergedConfig.active ? 'bg-blue-50 dark:bg-blue-900/20' : '',
      mergedConfig.className
    ];

    // Add hover effects if interactive
    if ((mergedConfig.href || mergedConfig.onClick) && !mergedConfig.disabled) {
      if (mergedConfig.hoverBgColor) classes.push(`hover:${mergedConfig.hoverBgColor}`);
      if (mergedConfig.darkHoverBgColor) classes.push(`hover:${mergedConfig.darkHoverBgColor}`);
      classes.push('transition-colors duration-200');
    }

    // Add nested indentation
    if (mergedConfig.nestedLevel > 0) {
      classes.push(`pl-${mergedConfig.nestedLevel * 4}`);
    }

    return classes.filter(Boolean).join(' ');
  }, [mergedConfig]);

  // Content wrapper
  const content = (
    <>
      <div className="flex items-start flex-1 min-w-0">
        {/* Marker or icon */}
        {renderMarker()}
        {mergedConfig.iconPosition === 'left' && renderIcon()}

        {/* Text content */}
        <span className="flex-1 min-w-0 wrap-break-word">
          {mergedConfig.text}
          {children}
        </span>

        {/* Right icon or badge */}
        {mergedConfig.iconPosition === 'right' && (
          <span className="ml-2 shrink-0">{renderIcon()}</span>
        )}
        {renderBadge()}
      </div>
    </>
  );

  // Render as link
  if (mergedConfig.href) {
    return (
      <a
        href={mergedConfig.href}
        target={mergedConfig.target}
        className={itemClasses}
        style={mergedConfig.style}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={mergedConfig.onClick}
        aria-disabled={mergedConfig.disabled}
      >
        {content}
      </a>
    );
  }

  // Render as button
  if (mergedConfig.onClick) {
    return (
      <button
        className={itemClasses}
        style={mergedConfig.style}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={mergedConfig.onClick}
        disabled={mergedConfig.disabled}
      >
        {content}
      </button>
    );
  }

  // Render as div
  return (
    <div
      className={itemClasses}
      style={mergedConfig.style}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {content}
    </div>
  );
};

// ============================================================================
// CMS_IconList Component
// ============================================================================

/**
 * CMS_IconList - Grid of icons with labels
 */
const CMS_IconList = ({
  config = {},
  items = []
}) => {
  const defaultIconListConfig = {
    layout: 'grid',                  // 'grid', 'flex', 'inline'
    columns: 4,                       // Number of columns for grid layout
    gap: 'gap-4',                     // Gap between items
    iconSize: 'w-8 h-8',              // Icon size
    iconColor: null,                  // Icon color
    darkIconColor: null,              // Dark mode icon color
    showLabel: true,                   // Show labels under icons
    labelPosition: 'bottom',           // 'bottom', 'right', 'tooltip'
    labelColor: 'text-gray-700',
    darkLabelColor: 'dark:text-gray-300',
    labelSize: 'text-sm',
    labelWeight: 'font-normal',
    centered: true,                    // Center align items
    clickable: false,
    onItemClick: null,
    className: '',
    style: {}
  };

  const mergedConfig = useMemo(() => ({
    ...defaultIconListConfig,
    ...config
  }), [config]);

  // Get icon component
  const getIconComponent = (icon, library = 'fa') => {
    if (!icon) return null;

    const lib = iconLibraries[library];
    if (!lib) return null;

    const IconComponent = lib[icon];
    return IconComponent || null;
  };

  // Render grid layout
  const renderGrid = () => {
    const gridCols = {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
      4: 'grid-cols-4',
      5: 'grid-cols-5',
      6: 'grid-cols-6'
    };

    return (
      <div className={`
        grid 
        ${gridCols[mergedConfig.columns] || 'grid-cols-4'}
        ${mergedConfig.gap}
      `}>
        {items.map((item, index) => (
          <IconListItem
            key={index}
            item={item}
            config={mergedConfig}
            index={index}
          />
        ))}
      </div>
    );
  };

  // Render flex layout
  const renderFlex = () => {
    return (
      <div className={`
        flex flex-wrap
        ${mergedConfig.gap}
        ${mergedConfig.centered ? 'justify-center' : 'justify-start'}
      `}>
        {items.map((item, index) => (
          <IconListItem
            key={index}
            item={item}
            config={mergedConfig}
            index={index}
          />
        ))}
      </div>
    );
  };

  // Render inline layout
  const renderInline = () => {
    return (
      <div className={`
        flex flex-wrap items-center
        ${mergedConfig.gap}
      `}>
        {items.map((item, index) => (
          <IconListItem
            key={index}
            item={item}
            config={mergedConfig}
            index={index}
            inline
          />
        ))}
      </div>
    );
  };

  // Icon List Item
  const IconListItem = ({ item, config, index, inline = false }) => {
    const IconComponent = getIconComponent(item.icon, item.iconLibrary || 'fa');
    const [isHovered, setIsHovered] = useState(false);

    const itemConfig = {
      ...config,
      ...item
    };

    const handleClick = () => {
      if (config.onItemClick) {
        config.onItemClick(item, index);
      }
      if (item.onClick) {
        item.onClick();
      }
    };

    const content = (
      <div
        className={`
          flex
          ${inline ? 'flex-row items-center' : 'flex-col items-center'}
          ${config.clickable || item.clickable ? 'cursor-pointer' : ''}
          transition-all duration-200
          ${isHovered && (config.clickable || item.clickable) ? 'transform scale-105' : ''}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
      >
        {/* Icon */}
        {IconComponent && (
          <div className={`
            ${itemConfig.iconSize || config.iconSize}
            ${itemConfig.iconColor || config.iconColor}
            ${itemConfig.darkIconColor || config.darkIconColor}
            flex items-center justify-center
            ${isHovered && itemConfig.hoverEffect ? itemConfig.hoverEffect : ''}
          `}>
            <IconComponent className="w-full h-full" />
          </div>
        )}

        {/* Label */}
        {config.showLabel && item.label && (
          <div className={`
            ${inline ? 'ml-2' : 'mt-2 text-center'}
            ${itemConfig.labelColor || config.labelColor}
            ${itemConfig.darkLabelColor || config.darkLabelColor}
            ${itemConfig.labelSize || config.labelSize}
            ${itemConfig.labelWeight || config.labelWeight}
          `}>
            {item.label}
          </div>
        )}
      </div>
    );

    if (item.href) {
      return (
        <a href={item.href} target={item.target} className="no-underline">
          {content}
        </a>
      );
    }

    return content;
  };

  // Render based on layout
  switch (mergedConfig.layout) {
    case 'flex':
      return renderFlex();
    case 'inline':
      return renderInline();
    case 'grid':
    default:
      return renderGrid();
  }
};

// ============================================================================
// CMS_List Main Component
// ============================================================================

/**
 * CMS_List - Main list component with support for various list types
 */
const CMS_List = ({
  config = {},
  items = [],
  children
}) => {
  const defaultListConfig = {
    type: 'ul',                       // 'ul', 'ol', 'dl', 'icon-list'
    variant: 'default',                // 'default', 'bordered', 'striped', 'card'
    style: 'none',                     // 'none', 'disc', 'decimal', 'circle', 'square', 'roman', 'alpha'
    layout: 'vertical',                // 'vertical', 'horizontal', 'grid'
    columns: 1,                        // Number of columns for grid layout
    gap: 'gap-2',                      // Gap between items
    spacing: 'space-y-2',              // Spacing between items
    padding: 'p-0',
    margin: 'm-0',
    bgColor: null,
    darkBgColor: null,
    border: null,
    borderColor: null,
    rounded: null,
    shadow: null,

    // Ordered list specific
    start: 1,                          // Starting number for ordered lists
    reversed: false,                    // Reverse order

    // Icon list specific
    iconListConfig: {},                 // Config for CMS_IconList

    // Nested list support
    nested: false,
    nestedIndent: 4,                    // Indentation in rem units

    // Interactive
    selectable: false,
    multiple: false,
    selectedItems: [],
    onSelect: null,

    // Colors
    color: 'text-gray-900',
    darkColor: 'dark:text-white',

    // Accessibility
    ariaLabel: null,
    ariaLabelledBy: null,

    // Additional
    className: '',
    style: {}
  };

  const mergedConfig = useMemo(() => ({
    ...defaultListConfig,
    ...config
  }), [config]);

  const [selected, setSelected] = useState(mergedConfig.selectedItems || []);

  // List style classes
  const listStyleClasses = {
    none: 'list-none',
    disc: 'list-disc',
    decimal: 'list-decimal',
    circle: 'list-circle',
    square: 'list-square',
    roman: 'list-roman list-decimal', // Fallback to decimal
    alpha: 'list-alpha list-decimal'   // Fallback to decimal
  };

  // Handle item selection
  const handleItemSelect = (item, index) => {
    if (!mergedConfig.selectable) return;

    let newSelected;
    if (mergedConfig.multiple) {
      newSelected = selected.includes(index)
        ? selected.filter(i => i !== index)
        : [...selected, index];
    } else {
      newSelected = [index];
    }

    setSelected(newSelected);
    mergedConfig.onSelect?.(newSelected, item);
  };

  // Build list classes
  const listClasses = useMemo(() => {
    const classes = [
      mergedConfig.type === 'ol' ? listStyleClasses[mergedConfig.style] || 'list-decimal' : '',
      mergedConfig.type === 'ul' ? listStyleClasses[mergedConfig.style] || 'list-disc' : '',
      mergedConfig.layout === 'vertical' ? mergedConfig.spacing : '',
      mergedConfig.layout === 'horizontal' ? 'flex flex-wrap gap-4' : '',
      mergedConfig.layout === 'grid' ? `grid grid-cols-${mergedConfig.columns} ${mergedConfig.gap}` : '',
      mergedConfig.padding,
      mergedConfig.margin,
      mergedConfig.bgColor,
      mergedConfig.darkBgColor,
      mergedConfig.border,
      mergedConfig.borderColor,
      mergedConfig.rounded,
      mergedConfig.shadow,
      mergedConfig.color,
      mergedConfig.darkColor,
      mergedConfig.className
    ].filter(Boolean);

    // Add variant styles
    if (mergedConfig.variant === 'bordered') {
      classes.push('divide-y divide-gray-200 dark:divide-gray-700');
    }
    if (mergedConfig.variant === 'striped') {
      classes.push('[&>*:nth-child(odd)]:bg-gray-50 dark:[&>*:nth-child(odd)]:bg-gray-800/50');
    }
    if (mergedConfig.variant === 'card') {
      classes.push('bg-white dark:bg-gray-800 rounded-lg shadow p-4');
    }

    return classes.join(' ');
  }, [mergedConfig]);

  // Render icon list
  if (mergedConfig.type === 'icon-list') {
    return (
      <CMS_IconList
        config={mergedConfig.iconListConfig}
        items={items}
      />
    );
  }

  // Render definition list
  if (mergedConfig.type === 'dl') {
    return (
      <dl
        className={listClasses}
        aria-label={mergedConfig.ariaLabel}
        aria-labelledby={mergedConfig.ariaLabelledBy}
        style={mergedConfig.style}
      >
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <dt className="font-bold">{item.term}</dt>
            <dd className="ml-4 mb-2">{item.description}</dd>
          </React.Fragment>
        ))}
        {children}
      </dl>
    );
  }

  // Render ordered or unordered list
  const ListTag = mergedConfig.type === 'ol' ? 'ol' : 'ul';

  // Render list items recursively
  const renderItems = (itemsList, depth = 0) => {
    return itemsList.map((item, index) => {
      const isSelected = mergedConfig.selectable && selected.includes(index);

      // Handle nested items
      const hasNested = item.items && item.items.length > 0;

      return (
        <React.Fragment key={index}>
          <CMS_ListItem
            config={{
              ...item,
              nested: depth > 0,
              nestedLevel: depth,
              active: isSelected,
              marker: mergedConfig.type === 'ol'
                ? `${mergedConfig.start + index}.`
                : null,
              onClick: mergedConfig.selectable
                ? () => handleItemSelect(item, index)
                : item.onClick,
              className: mergedConfig.selectable
                ? 'cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800'
                : ''
            }}
          />

          {/* Render nested items */}
          {hasNested && (
            <CMS_List
              config={{
                type: mergedConfig.type,
                style: mergedConfig.style,
                nested: true,
                nestedIndent: mergedConfig.nestedIndent,
                spacing: mergedConfig.spacing,
                margin: `ml-${mergedConfig.nestedIndent}`
              }}
              items={item.items}
            />
          )}
        </React.Fragment>
      );
    });
  };

  return (
    <ListTag
      className={listClasses}
      start={mergedConfig.type === 'ol' ? mergedConfig.start : undefined}
      reversed={mergedConfig.type === 'ol' && mergedConfig.reversed}
      aria-label={mergedConfig.ariaLabel}
      aria-labelledby={mergedConfig.ariaLabelledBy}
      style={mergedConfig.style}
    >
      {renderItems(items)}
      {children}
    </ListTag>
  );
};

// Export all components
export { CMS_List, CMS_ListItem, CMS_IconList };
export default CMS_List;