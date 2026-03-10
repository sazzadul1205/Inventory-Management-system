/**
 * CMS_Table Component - A highly customizable table component with dark mode support
 * 
 * This component renders tables with configurable styling, sorting, filtering, pagination,
 * and supports various data types, actions, and interactive features.
 * Uses Tailwind CSS for styling with dark mode support via the 'dark:' modifier.
 */

import React, { useMemo, useState, useEffect } from 'react';
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

// ============================================================================
// CMS_TableHeader Component
// ============================================================================

/**
 * CMS_TableHeader - Header section of the table with column definitions
 */
const CMS_TableHeader = ({
  columns = [],
  config = {},
  onSort,
  sortColumn,
  sortDirection,
  selectable,
  onSelectAll,
  selectedRows,
  allSelected,
  someSelected
}) => {
  const defaultHeaderConfig = {
    sticky: false,
    bgColor: 'bg-gray-50',
    darkBgColor: 'dark:bg-gray-800',
    textColor: 'text-gray-700',
    darkTextColor: 'dark:text-gray-300',
    fontSize: 'text-sm',
    fontWeight: 'font-semibold',
    padding: 'px-4 py-3',
    border: 'border-b',
    borderColor: 'border-gray-200',
    darkBorderColor: 'dark:border-gray-700',
    rounded: 'rounded-t-lg',
    className: ''
  };

  const mergedConfig = useMemo(() => ({
    ...defaultHeaderConfig,
    ...config
  }), [config]);

  // Get icon component
  const getIconComponent = (icon, library = 'hi') => {
    if (!icon) return null;
    const lib = iconLibraries[library];
    if (!lib) return null;
    return lib[icon];
  };

  // Render sort icon
  const renderSortIcon = (column) => {
    if (!column.sortable) return null;

    const isSorted = sortColumn === column.key;
    const SortIcon = getIconComponent(
      isSorted
        ? (sortDirection === 'asc' ? 'HiChevronUp' : 'HiChevronDown')
        : 'HiSelector',
      'hi'
    );

    return SortIcon ? (
      <SortIcon className={`
        w-4 h-4 ml-1 inline-block
        ${isSorted ? 'text-blue-500' : 'text-gray-400'}
      `} />
    ) : null;
  };

  return (
    <thead className={`
      ${mergedConfig.sticky ? 'sticky top-0' : ''}
      ${mergedConfig.bgColor}
      ${mergedConfig.darkBgColor}
      ${mergedConfig.rounded}
    `}>
      <tr>
        {/* Select all checkbox */}
        {selectable && (
          <th className={`
            ${mergedConfig.padding}
            ${mergedConfig.border}
            ${mergedConfig.borderColor}
            ${mergedConfig.darkBorderColor}
            w-10
          `}>
            <input
              type="checkbox"
              checked={allSelected}
              ref={input => {
                if (input) {
                  input.indeterminate = someSelected && !allSelected;
                }
              }}
              onChange={onSelectAll}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
          </th>
        )}

        {/* Column headers */}
        {columns.map((column, index) => (
          <th
            key={column.key || index}
            onClick={() => column.sortable && onSort?.(column.key)}
            className={`
              ${mergedConfig.padding}
              ${mergedConfig.fontSize}
              ${mergedConfig.fontWeight}
              ${mergedConfig.textColor}
              ${mergedConfig.darkTextColor}
              ${mergedConfig.border}
              ${mergedConfig.borderColor}
              ${mergedConfig.darkBorderColor}
              ${column.sortable ? 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700' : ''}
              ${column.align === 'right' ? 'text-right' : column.align === 'center' ? 'text-center' : 'text-left'}
              ${column.width ? `w-${column.width}` : ''}
              ${column.className || ''}
            `}
            style={column.style}
          >
            <div className="flex items-center gap-1">
              {column.icon && (
                <span className="mr-1">
                  {React.createElement(getIconComponent(column.icon, column.iconLibrary || 'hi'), {
                    className: `w-4 h-4 ${column.iconColor || ''}`
                  })}
                </span>
              )}
              <span>{column.title}</span>
              {renderSortIcon(column)}
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

// ============================================================================
// CMS_TableBody Component
// ============================================================================

/**
 * CMS_TableBody - Body section of the table with data rows
 */
const CMS_TableBody = ({
  data = [],
  columns = [],
  config = {},
  onRowClick,
  onCellClick,
  selectable,
  selectedRows,
  onSelectRow,
  rowKey = 'id'
}) => {
  const defaultBodyConfig = {
    striped: true,
    hoverable: true,
    rowBgColor: 'bg-white',
    darkRowBgColor: 'dark:bg-gray-900',
    stripedColor: 'bg-gray-50',
    darkStripedColor: 'dark:bg-gray-800/50',
    hoverColor: 'hover:bg-gray-50',
    darkHoverColor: 'dark:hover:bg-gray-800',
    textColor: 'text-gray-700',
    darkTextColor: 'dark:text-gray-300',
    fontSize: 'text-sm',
    padding: 'px-4 py-3',
    border: 'border-b',
    borderColor: 'border-gray-200',
    darkBorderColor: 'dark:border-gray-700',
    emptyText: 'No data available',
    emptyIcon: 'HiDatabase',
    emptyIconLibrary: 'hi',
    className: ''
  };

  const mergedConfig = useMemo(() => ({
    ...defaultBodyConfig,
    ...config
  }), [config]);

  // Get icon component
  const getIconComponent = (icon, library = 'hi') => {
    if (!icon) return null;
    const lib = iconLibraries[library];
    if (!lib) return null;
    return lib[icon];
  };

  // Render cell content based on type
  const renderCellContent = (item, column, rowIndex, colIndex) => {
    const value = column.key ? item[column.key] : null;

    // Custom render function
    if (column.render) {
      return column.render(value, item, rowIndex);
    }

    // Handle different value types
    if (value === null || value === undefined) {
      return <span className="text-gray-400">—</span>;
    }

    if (typeof value === 'boolean') {
      return value ? 'Yes' : 'No';
    }

    if (typeof value === 'object') {
      return JSON.stringify(value);
    }

    return value;
  };

  // Render empty state
  const renderEmptyState = () => {
    const EmptyIcon = getIconComponent(mergedConfig.emptyIcon, mergedConfig.emptyIconLibrary);

    return (
      <tr>
        <td
          colSpan={columns.length + (selectable ? 1 : 0)}
          className="text-center py-12"
        >
          <div className="flex flex-col items-center justify-center text-gray-500 dark:text-gray-400">
            {EmptyIcon && <EmptyIcon className="w-12 h-12 mb-3 opacity-50" />}
            <p>{mergedConfig.emptyText}</p>
          </div>
        </td>
      </tr>
    );
  };

  if (!data || data.length === 0) {
    return (
      <tbody>
        {renderEmptyState()}
      </tbody>
    );
  }

  return (
    <tbody>
      {data.map((item, rowIndex) => {
        const isSelected = selectedRows?.includes(item[rowKey]);

        return (
          <tr
            key={item[rowKey] || rowIndex}
            onClick={() => onRowClick?.(item, rowIndex)}
            className={`
              ${mergedConfig.rowBgColor}
              ${mergedConfig.darkRowBgColor}
              ${mergedConfig.striped && rowIndex % 2 === 1 ? mergedConfig.stripedColor : ''}
              ${mergedConfig.darkStripedColor && rowIndex % 2 === 1 ? mergedConfig.darkStripedColor : ''}
              ${mergedConfig.hoverable ? mergedConfig.hoverColor : ''}
              ${mergedConfig.darkHoverColor ? mergedConfig.darkHoverColor : ''}
              ${isSelected ? 'bg-blue-50 dark:bg-blue-900/20' : ''}
              ${onRowClick ? 'cursor-pointer' : ''}
              transition-colors duration-150
            `}
          >
            {/* Select checkbox */}
            {selectable && (
              <td className={`
                ${mergedConfig.padding}
                ${mergedConfig.border}
                ${mergedConfig.borderColor}
                ${mergedConfig.darkBorderColor}
                w-10
              `}>
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => onSelectRow?.(item[rowKey])}
                  onClick={(e) => e.stopPropagation()}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </td>
            )}

            {/* Data cells */}
            {columns.map((column, colIndex) => (
              <td
                key={`${rowIndex}-${colIndex}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onCellClick?.(item, column, rowIndex, colIndex);
                }}
                className={`
                  ${mergedConfig.padding}
                  ${mergedConfig.fontSize}
                  ${mergedConfig.textColor}
                  ${mergedConfig.darkTextColor}
                  ${mergedConfig.border}
                  ${mergedConfig.borderColor}
                  ${mergedConfig.darkBorderColor}
                  ${column.align === 'right' ? 'text-right' : column.align === 'center' ? 'text-center' : 'text-left'}
                  ${column.className || ''}
                `}
                style={column.style}
              >
                {renderCellContent(item, column, rowIndex, colIndex)}
              </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
};

// ============================================================================
// CMS_TableFooter Component
// ============================================================================

/**
 * CMS_TableFooter - Footer section of the table
 */
const CMS_TableFooter = ({
  config = {},
  totalRows,
  currentPage,
  pageSize,
  onPageChange,
  totalPages,
  onPageSizeChange,
  pageSizeOptions = [10, 25, 50, 100]
}) => {
  const defaultFooterConfig = {
    showPagination: true,
    showPageSize: true,
    showTotal: true,
    showPageInfo: true,
    position: 'bottom',              // 'bottom', 'top', 'both'
    sticky: false,
    bgColor: 'bg-gray-50',
    darkBgColor: 'dark:bg-gray-800',
    textColor: 'text-gray-600',
    darkTextColor: 'dark:text-gray-400',
    fontSize: 'text-sm',
    padding: 'px-4 py-3',
    border: 'border-t',
    borderColor: 'border-gray-200',
    darkBorderColor: 'dark:border-gray-700',
    rounded: 'rounded-b-lg',
    className: ''
  };

  const mergedConfig = useMemo(() => ({
    ...defaultFooterConfig,
    ...config
  }), [config]);

  // Calculate page info
  const startRow = (currentPage - 1) * pageSize + 1;
  const endRow = Math.min(currentPage * pageSize, totalRows);

  return (
    <tfoot className={`
      ${mergedConfig.sticky ? 'sticky bottom-0' : ''}
      ${mergedConfig.bgColor}
      ${mergedConfig.darkBgColor}
      ${mergedConfig.rounded}
    `}>
      <tr>
        <td
          colSpan="100"
          className={`
            ${mergedConfig.padding}
            ${mergedConfig.fontSize}
            ${mergedConfig.textColor}
            ${mergedConfig.darkTextColor}
            ${mergedConfig.border}
            ${mergedConfig.borderColor}
            ${mergedConfig.darkBorderColor}
          `}
        >
          <div className="flex items-center justify-between">
            {/* Total rows */}
            {mergedConfig.showTotal && (
              <div>
                Total: <span className="font-semibold">{totalRows}</span> rows
              </div>
            )}

            {/* Page info */}
            {mergedConfig.showPageInfo && (
              <div>
                Showing {startRow} to {endRow} of {totalRows} entries
              </div>
            )}

            {/* Page size selector */}
            {mergedConfig.showPageSize && (
              <div className="flex items-center gap-2">
                <span>Show</span>
                <select
                  value={pageSize}
                  onChange={(e) => onPageSizeChange?.(Number(e.target.value))}
                  className="px-2 py-1 border rounded-md bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
                >
                  {pageSizeOptions.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
                <span>entries</span>
              </div>
            )}

            {/* Pagination */}
            {mergedConfig.showPagination && totalPages > 1 && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onPageChange?.(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={`
                    px-3 py-1 rounded-md
                    ${currentPage === 1
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                    }
                  `}
                >
                  Previous
                </button>

                {/* Page numbers */}
                <div className="flex items-center gap-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }

                    return (
                      <button
                        key={pageNum}
                        onClick={() => onPageChange?.(pageNum)}
                        className={`
                          w-8 h-8 rounded-md
                          ${currentPage === pageNum
                            ? 'bg-blue-500 text-white'
                            : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                          }
                        `}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => onPageChange?.(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={`
                    px-3 py-1 rounded-md
                    ${currentPage === totalPages
                      ? 'opacity-50 cursor-not-allowed'
                      : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                    }
                  `}
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </td>
      </tr>
    </tfoot>
  );
};

// ============================================================================
// CMS_Table Main Component
// ============================================================================

/**
 * CMS_Table - Main table component with full features
 */
const CMS_Table = ({
  columns = [],
  data = [],
  config = {},
  onRowClick,
  onCellClick,
  onSort,
  onFilter,
  onPageChange,
  onPageSizeChange,
  onSelectionChange,
  rowKey = 'id',
  loading = false,
  loadingText = 'Loading...'
}) => {
  const defaultTableConfig = {
    // Layout
    layout: 'auto',                  // 'auto', 'fixed'
    width: 'full',                   // 'full', 'auto'

    // Styling
    variant: 'default',              // 'default', 'bordered', 'striped', 'compact', 'comfortable'
    rounded: 'rounded-lg',
    shadow: 'shadow',
    bgColor: 'bg-white',
    darkBgColor: 'dark:bg-gray-900',

    // Borders
    border: 'border',
    borderColor: 'border-gray-200',
    darkBorderColor: 'dark:border-gray-700',

    // Spacing
    margin: 'm-0',

    // Features
    sortable: true,
    filterable: false,
    selectable: false,
    expandable: false,
    stickyHeader: false,
    stickyFooter: false,

    // Selection
    multipleSelection: true,

    // Pagination
    pagination: false,
    pageSize: 10,
    currentPage: 1,
    totalRows: null,

    // Header config
    headerConfig: {},

    // Body config
    bodyConfig: {},

    // Footer config
    footerConfig: {},

    // Loading state
    loadingComponent: null,

    // Empty state
    emptyText: 'No data available',
    emptyIcon: 'HiDatabase',
    emptyIconLibrary: 'hi',

    // Accessibility
    caption: null,
    summary: null,

    // Additional
    className: '',
    style: {}
  };

  const mergedConfig = useMemo(() => ({
    ...defaultTableConfig,
    ...config
  }), [config]);

  // State for sorting
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  // State for selection
  const [selectedRows, setSelectedRows] = useState([]);

  // Calculate total rows
  const totalRows = mergedConfig.totalRows || data.length;
  const totalPages = Math.ceil(totalRows / mergedConfig.pageSize);

  // Handle sort
  const handleSort = (columnKey) => {
    if (!mergedConfig.sortable) return;

    let newDirection = 'asc';
    if (sortColumn === columnKey) {
      newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    }

    setSortColumn(columnKey);
    setSortDirection(newDirection);

    if (onSort) {
      onSort(columnKey, newDirection);
    }
  };

  // Handle select all
  const handleSelectAll = (e) => {
    if (!mergedConfig.selectable) return;

    if (e.target.checked) {
      const allIds = data.map(item => item[rowKey]);
      setSelectedRows(allIds);
      onSelectionChange?.(allIds);
    } else {
      setSelectedRows([]);
      onSelectionChange?.([]);
    }
  };

  // Handle select row
  const handleSelectRow = (rowId) => {
    if (!mergedConfig.selectable) return;

    let newSelected;
    if (mergedConfig.multipleSelection) {
      if (selectedRows.includes(rowId)) {
        newSelected = selectedRows.filter(id => id !== rowId);
      } else {
        newSelected = [...selectedRows, rowId];
      }
    } else {
      newSelected = selectedRows.includes(rowId) ? [] : [rowId];
    }

    setSelectedRows(newSelected);
    onSelectionChange?.(newSelected);
  };

  // Calculate selection states
  const allSelected = data.length > 0 && data.every(item => selectedRows.includes(item[rowKey]));
  const someSelected = data.some(item => selectedRows.includes(item[rowKey])) && !allSelected;

  // Build table classes
  const tableClasses = useMemo(() => {
    const classes = [
      'w-full',
      mergedConfig.layout === 'fixed' ? 'table-fixed' : 'table-auto',
      mergedConfig.bgColor,
      mergedConfig.darkBgColor,
      mergedConfig.className
    ];

    // Add variant styles
    if (mergedConfig.variant === 'bordered') {
      classes.push('border-collapse');
    }
    if (mergedConfig.variant === 'compact') {
      classes.push('text-sm');
    }
    if (mergedConfig.variant === 'comfortable') {
      classes.push('text-base');
    }

    return classes.filter(Boolean).join(' ');
  }, [mergedConfig]);

  // Container classes
  const containerClasses = useMemo(() => {
    const classes = [
      'overflow-x-auto',
      mergedConfig.rounded,
      mergedConfig.shadow,
      mergedConfig.border,
      mergedConfig.borderColor,
      mergedConfig.darkBorderColor,
      mergedConfig.margin
    ];

    return classes.filter(Boolean).join(' ');
  }, [mergedConfig]);

  // Render loading state
  const renderLoading = () => {
    if (!loading) return null;

    if (mergedConfig.loadingComponent) {
      return mergedConfig.loadingComponent;
    }

    return (
      <div className="absolute inset-0 bg-white/50 dark:bg-gray-900/50 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <svg className="animate-spin h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="text-gray-600 dark:text-gray-400">{loadingText}</span>
        </div>
      </div>
    );
  };

  return (
    <div className={containerClasses} style={mergedConfig.style}>
      {/* Caption */}
      {mergedConfig.caption && (
        <caption className="sr-only">{mergedConfig.caption}</caption>
      )}

      <table className={tableClasses} summary={mergedConfig.summary}>
        {/* Header */}
        <CMS_TableHeader
          columns={columns}
          config={{
            sticky: mergedConfig.stickyHeader,
            ...mergedConfig.headerConfig
          }}
          onSort={handleSort}
          sortColumn={sortColumn}
          sortDirection={sortDirection}
          selectable={mergedConfig.selectable}
          onSelectAll={handleSelectAll}
          selectedRows={selectedRows}
          allSelected={allSelected}
          someSelected={someSelected}
        />

        {/* Body */}
        <CMS_TableBody
          data={data}
          columns={columns}
          config={{
            striped: mergedConfig.variant === 'striped',
            ...mergedConfig.bodyConfig,
            emptyText: mergedConfig.emptyText,
            emptyIcon: mergedConfig.emptyIcon,
            emptyIconLibrary: mergedConfig.emptyIconLibrary
          }}
          onRowClick={onRowClick}
          onCellClick={onCellClick}
          selectable={mergedConfig.selectable}
          selectedRows={selectedRows}
          onSelectRow={handleSelectRow}
          rowKey={rowKey}
        />

        {/* Footer */}
        {mergedConfig.pagination && (
          <CMS_TableFooter
            config={{
              sticky: mergedConfig.stickyFooter,
              ...mergedConfig.footerConfig
            }}
            totalRows={totalRows}
            currentPage={mergedConfig.currentPage}
            pageSize={mergedConfig.pageSize}
            onPageChange={onPageChange}
            totalPages={totalPages}
            onPageSizeChange={onPageSizeChange}
          />
        )}
      </table>

      {/* Loading overlay */}
      {renderLoading()}
    </div>
  );
};

export default CMS_Table;