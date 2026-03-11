/**
 * CMS_Table Component - Editor-friendly table with flat class structure
 * 
 * Features:
 * - Flat class structure for easy editing
 * - Sorting on columns
 * - Row selection (single/multi)
 * - Pagination with page size control
 * - Striped, bordered, compact variants
 * - Custom cell rendering
 * - Loading state
 * - Empty state
 * - Sticky headers/footers
 * - Dark mode support
 */

import React, { forwardRef, useMemo, useState } from 'react';
import clsx from 'clsx';
import * as FaIcons from 'react-icons/fa';
import * as HiIcons from 'react-icons/hi';
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';

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

const defaultTableClasses = {
  // Container classes
  container: '',
  containerDark: '',

  // Table classes
  table: '',
  tableDark: '',

  // Header classes
  header: '',
  headerRow: '',
  headerCell: '',
  headerCellSorted: '',
  headerCellHover: '',
  headerDark: '',

  // Body classes
  body: '',
  bodyRow: '',
  bodyRowEven: '',
  bodyRowOdd: '',
  bodyRowHover: '',
  bodyRowSelected: '',
  bodyCell: '',
  bodyDark: '',

  // Footer classes
  footer: '',
  footerRow: '',
  footerCell: '',
  footerDark: '',

  // Pagination classes
  pagination: '',
  paginationButton: '',
  paginationButtonActive: '',
  paginationButtonDisabled: '',
  pageSizeSelect: '',

  // Sort icons
  sortIcon: '',
  sortIconActive: '',

  // Checkbox classes
  checkbox: '',
  checkboxChecked: '',

  // Empty state
  emptyState: '',
  emptyIcon: '',
  emptyText: '',

  // Loading state
  loadingOverlay: '',
  loadingSpinner: '',

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
const defaultTableProps = {
  // Data
  columns: [],
  data: [],
  rowKey: 'id',

  // Layout
  layout: 'auto', // 'auto', 'fixed'
  variant: 'default', // 'default', 'bordered', 'striped', 'compact', 'comfortable'

  // Features
  sortable: true,
  selectable: false,
  multipleSelection: true,
  pagination: false,
  stickyHeader: false,
  stickyFooter: false,

  // Pagination
  pageSize: 10,
  currentPage: 1,
  totalRows: null,
  pageSizeOptions: [10, 25, 50, 100],

  // Text
  loadingText: 'Loading...',
  emptyText: 'No data available',
  emptyIcon: 'HiDatabase',
  emptyIconLibrary: 'hi',

  // Events
  onRowClick: null,
  onCellClick: null,
  onSort: null,
  onPageChange: null,
  onPageSizeChange: null,
  onSelectionChange: null,

  // Loading
  loading: false,
};

// Size presets
const sizePresets = {
  compact: {
    table: 'text-sm',
    headerCell: 'px-2 py-1',
    bodyCell: 'px-2 py-1',
    footerCell: 'px-2 py-1',
  },
  default: {
    table: 'text-sm',
    headerCell: 'px-4 py-3',
    bodyCell: 'px-4 py-3',
    footerCell: 'px-4 py-3',
  },
  comfortable: {
    table: 'text-base',
    headerCell: 'px-6 py-4',
    bodyCell: 'px-6 py-4',
    footerCell: 'px-6 py-4',
  },
};

// Variant presets
const variantPresets = {
  default: {
    table: '',
    headerCell: 'border-b border-gray-200 dark:border-gray-700',
    bodyCell: 'border-b border-gray-200 dark:border-gray-700',
  },
  bordered: {
    table: 'border-collapse border border-gray-200 dark:border-gray-700',
    headerCell: 'border border-gray-200 dark:border-gray-700',
    bodyCell: 'border border-gray-200 dark:border-gray-700',
  },
  striped: {
    bodyRowEven: 'bg-gray-50 dark:bg-gray-800/50',
    bodyRowOdd: 'bg-white dark:bg-gray-900',
  },
};

// Metadata for visual editor
const componentMetadata = {
  name: 'Table',
  description: 'Data table with sorting, selection, and pagination',
  category: 'data',
  icon: '📊',
  editable: ['container', 'table', 'header', 'body', 'footer', 'pagination'],
  controls: [
    { type: 'select', target: 'variant', label: 'Variant', options: ['default', 'bordered', 'striped'] },
    { type: 'select', target: 'size', label: 'Size', options: ['compact', 'default', 'comfortable'] },
    { type: 'toggle', target: 'sortable', label: 'Enable Sorting' },
    { type: 'toggle', target: 'selectable', label: 'Enable Selection' },
    { type: 'toggle', target: 'pagination', label: 'Enable Pagination' },
    { type: 'toggle', target: 'stickyHeader', label: 'Sticky Header' },
    { type: 'number', target: 'pageSize', label: 'Page Size', min: 1, max: 100 },
    { type: 'class-editor', target: 'container', label: 'Container Styles' },
    { type: 'class-editor', target: 'table', label: 'Table Styles' },
    { type: 'class-editor', target: 'header', label: 'Header Styles' },
    { type: 'class-editor', target: 'body', label: 'Body Styles' },
    { type: 'class-editor', target: 'pagination', label: 'Pagination Styles' },
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
    classes.containerDark,

    // Table
    classes.table,
    classes.tableDark,

    // Header
    classes.header,
    classes.headerRow,
    classes.headerCell,
    classes.headerCellSorted,
    classes.headerCellHover,
    classes.headerDark,

    // Body
    classes.body,
    classes.bodyRow,
    classes.bodyRowEven,
    classes.bodyRowOdd,
    classes.bodyRowHover,
    classes.bodyRowSelected,
    classes.bodyCell,
    classes.bodyDark,

    // Footer
    classes.footer,
    classes.footerRow,
    classes.footerCell,
    classes.footerDark,

    // Pagination
    classes.pagination,
    classes.paginationButton,
    classes.paginationButtonActive,
    classes.paginationButtonDisabled,
    classes.pageSizeSelect,

    // Icons
    classes.sortIcon,
    classes.sortIconActive,

    // Checkbox
    classes.checkbox,
    classes.checkboxChecked,

    // Empty state
    classes.emptyState,
    classes.emptyIcon,
    classes.emptyText,

    // Loading
    classes.loadingOverlay,
    classes.loadingSpinner,

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
// CMS_TableHeader Component
// ============================================================================

const CMS_TableHeader = forwardRef(({
  columns = [],
  sortable = true,
  sortColumn,
  sortDirection,
  onSort,
  selectable = false,
  onSelectAll,
  allSelected = false,
  someSelected = false,
  classes = {},
  className,
  style,
  ...props
}, ref) => {

  const SortIcon = getIconComponent('HiSelector', 'hi');
  const SortAscIcon = getIconComponent('HiChevronUp', 'hi');
  const SortDescIcon = getIconComponent('HiChevronDown', 'hi');

  const headerClasses = clsx(
    classes.header,
    classes.headerDark,
    className
  );

  const headerCellClasses = clsx(
    'text-left font-semibold',
    classes.headerCell
  );

  return (
    <thead ref={ref} className={headerClasses} style={style} {...props}>
      <tr className={classes.headerRow}>
        {/* Select all checkbox */}
        {selectable && (
          <th className={clsx(headerCellClasses, 'w-10')}>
            <input
              type="checkbox"
              checked={allSelected}
              ref={input => {
                if (input) {
                  input.indeterminate = someSelected && !allSelected;
                }
              }}
              onChange={onSelectAll}
              className={clsx('rounded', classes.checkbox)}
            />
          </th>
        )}

        {/* Column headers */}
        {columns.map((column, index) => {
          const isSorted = sortColumn === column.key;
          const canSort = sortable && column.sortable !== false;

          return (
            <th
              key={column.key || index}
              onClick={() => canSort && onSort?.(column.key)}
              className={clsx(
                headerCellClasses,
                column.align === 'right' && 'text-right',
                column.align === 'center' && 'text-center',
                canSort && clsx('cursor-pointer', classes.headerCellHover),
                isSorted && classes.headerCellSorted,
                column.className
              )}
              style={column.style}
            >
              <div className="flex items-center gap-1">
                {column.icon && (
                  <span className={clsx('mr-1', classes.sortIcon)}>
                    {React.createElement(
                      getIconComponent(column.icon, column.iconLibrary || 'hi'),
                      { className: 'w-4 h-4' }
                    )}
                  </span>
                )}
                <span>{column.title}</span>
                {canSort && (
                  <span className="ml-1">
                    {isSorted ? (
                      sortDirection === 'asc' ? (
                        SortAscIcon && <SortAscIcon className={clsx('w-4 h-4', classes.sortIconActive)} />
                      ) : (
                        SortDescIcon && <SortDescIcon className={clsx('w-4 h-4', classes.sortIconActive)} />
                      )
                    ) : (
                      SortIcon && <SortIcon className={clsx('w-4 h-4', classes.sortIcon)} />
                    )}
                  </span>
                )}
              </div>
            </th>
          );
        })}
      </tr>
    </thead>
  );
});

CMS_TableHeader.displayName = 'CMS_TableHeader';

// ============================================================================
// CMS_TableBody Component
// ============================================================================

const CMS_TableBody = forwardRef(({
  data = [],
  columns = [],
  rowKey = 'id',
  selectable = false,
  selectedRows = [],
  onSelectRow,
  onRowClick,
  onCellClick,
  emptyText = 'No data available',
  emptyIcon = 'HiDatabase',
  emptyIconLibrary = 'hi',
  classes = {},
  className,
  style,
  ...props
}, ref) => {

  const EmptyIcon = getIconComponent(emptyIcon, emptyIconLibrary);

  // Render cell content
  const renderCellContent = (item, column, rowIndex) => {
    const value = column.key ? item[column.key] : null;

    if (column.render) {
      return column.render(value, item, rowIndex);
    }

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
  const renderEmptyState = () => (
    <tr>
      <td
        colSpan={columns.length + (selectable ? 1 : 0)}
        className={clsx('text-center py-12', classes.emptyState)}
      >
        <div className="flex flex-col items-center justify-center text-gray-500">
          {EmptyIcon && <EmptyIcon className={clsx('w-12 h-12 mb-3 opacity-50', classes.emptyIcon)} />}
          <p className={classes.emptyText}>{emptyText}</p>
        </div>
      </td>
    </tr>
  );

  const bodyClasses = clsx(classes.body, classes.bodyDark, className);
  const bodyCellClasses = clsx(classes.bodyCell);

  if (!data || data.length === 0) {
    return (
      <tbody ref={ref} className={bodyClasses} style={style} {...props}>
        {renderEmptyState()}
      </tbody>
    );
  }

  return (
    <tbody ref={ref} className={bodyClasses} style={style} {...props}>
      {data.map((item, rowIndex) => {
        const rowId = item[rowKey] || rowIndex;
        const isSelected = selectedRows?.includes(rowId);
        const isEven = rowIndex % 2 === 0;

        return (
          <tr
            key={rowId}
            onClick={() => onRowClick?.(item, rowIndex)}
            className={clsx(
              classes.bodyRow,
              isEven ? classes.bodyRowEven : classes.bodyRowOdd,
              onRowClick && classes.bodyRowHover,
              isSelected && classes.bodyRowSelected
            )}
          >
            {/* Select checkbox */}
            {selectable && (
              <td className={clsx(bodyCellClasses, 'w-10')}>
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={() => onSelectRow?.(rowId)}
                  onClick={(e) => e.stopPropagation()}
                  className={clsx('rounded', classes.checkbox, isSelected && classes.checkboxChecked)}
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
                className={clsx(
                  bodyCellClasses,
                  column.align === 'right' && 'text-right',
                  column.align === 'center' && 'text-center',
                  column.className
                )}
                style={column.style}
              >
                {renderCellContent(item, column, rowIndex)}
              </td>
            ))}
          </tr>
        );
      })}
    </tbody>
  );
});

CMS_TableBody.displayName = 'CMS_TableBody';

// ============================================================================
// CMS_TableFooter Component
// ============================================================================

const CMS_TableFooter = forwardRef(({
  totalRows,
  currentPage,
  pageSize,
  totalPages,
  onPageChange,
  onPageSizeChange,
  pageSizeOptions = [10, 25, 50, 100],
  showPagination = true,
  showPageSize = true,
  showTotal = true,
  showPageInfo = true,
  classes = {},
  className,
  style,
  ...props
}, ref) => {

  const startRow = (currentPage - 1) * pageSize + 1;
  const endRow = Math.min(currentPage * pageSize, totalRows);

  const footerClasses = clsx(
    classes.footer,
    classes.footerDark,
    className
  );

  const buttonClasses = clsx(
    'px-3 py-1 rounded-md',
    classes.paginationButton
  );

  const activeButtonClasses = clsx(buttonClasses, classes.paginationButtonActive);
  const disabledButtonClasses = clsx(buttonClasses, classes.paginationButtonDisabled);

  return (
    <tfoot ref={ref} className={footerClasses} style={style} {...props}>
      <tr className={classes.footerRow}>
        <td
          colSpan="100"
          className={clsx(classes.footerCell)}
        >
          <div className={clsx('flex items-center justify-between', classes.pagination)}>
            {/* Total rows */}
            {showTotal && (
              <div>
                Total: <span className="font-semibold">{totalRows}</span> rows
              </div>
            )}

            {/* Page info */}
            {showPageInfo && (
              <div>
                Showing {startRow} to {endRow} of {totalRows} entries
              </div>
            )}

            {/* Page size selector */}
            {showPageSize && (
              <div className="flex items-center gap-2">
                <span>Show</span>
                <select
                  value={pageSize}
                  onChange={(e) => onPageSizeChange?.(Number(e.target.value))}
                  className={clsx('px-2 py-1 border rounded-md', classes.pageSizeSelect)}
                >
                  {pageSizeOptions.map(size => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
                <span>entries</span>
              </div>
            )}

            {/* Pagination */}
            {showPagination && totalPages > 1 && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onPageChange?.(currentPage - 1)}
                  disabled={currentPage === 1}
                  className={currentPage === 1 ? disabledButtonClasses : buttonClasses}
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
                        className={currentPage === pageNum ? activeButtonClasses : buttonClasses}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={() => onPageChange?.(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className={currentPage === totalPages ? disabledButtonClasses : buttonClasses}
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
});

CMS_TableFooter.displayName = 'CMS_TableFooter';

// ============================================================================
// CMS_Table Main Component
// ============================================================================

const CMS_Table = forwardRef(({
  // Component identification
  uid,
  component = 'CMS_Table',

  // Main styling - flat class structure
  classes = defaultTableClasses,

  // Data
  columns = [],
  data = [],
  rowKey = 'id',

  // Layout
  layout = 'auto',
  variant = 'default',
  size = 'default',

  // Features
  sortable = true,
  selectable = false,
  multipleSelection = true,
  pagination = false,
  stickyHeader = false,
  stickyFooter = false,

  // Pagination
  pageSize = 10,
  currentPage = 1,
  totalRows: externalTotalRows,
  pageSizeOptions = [10, 25, 50, 100],

  // Text
  loading = false,
  loadingText = 'Loading...',
  emptyText = 'No data available',
  emptyIcon = 'HiDatabase',
  emptyIconLibrary = 'hi',

  // Events
  onRowClick,
  onCellClick,
  onSort: externalOnSort,
  onPageChange,
  onPageSizeChange,
  onSelectionChange,

  // Extra
  className,
  style,
  children,
  ...props
}, ref) => {

  // State for sorting
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  // State for selection
  const [selectedRows, setSelectedRows] = useState([]);

  // Calculate total rows
  const totalRows = externalTotalRows || data.length;
  const totalPages = Math.ceil(totalRows / pageSize);

  // Handle sort
  const handleSort = (columnKey) => {
    if (!sortable) return;

    let newDirection = 'asc';
    if (sortColumn === columnKey) {
      newDirection = sortDirection === 'asc' ? 'desc' : 'asc';
    }

    setSortColumn(columnKey);
    setSortDirection(newDirection);
    externalOnSort?.(columnKey, newDirection);
  };

  // Handle select all
  const handleSelectAll = (e) => {
    if (!selectable) return;

    const newSelected = e.target.checked ? data.map(item => item[rowKey]) : [];
    setSelectedRows(newSelected);
    onSelectionChange?.(newSelected);
  };

  // Handle select row
  const handleSelectRow = (rowId) => {
    if (!selectable) return;

    let newSelected;
    if (multipleSelection) {
      newSelected = selectedRows.includes(rowId)
        ? selectedRows.filter(id => id !== rowId)
        : [...selectedRows, rowId];
    } else {
      newSelected = selectedRows.includes(rowId) ? [] : [rowId];
    }

    setSelectedRows(newSelected);
    onSelectionChange?.(newSelected);
  };

  // Calculate selection states
  const allSelected = data.length > 0 && data.every(item => selectedRows.includes(item[rowKey]));
  const someSelected = data.some(item => selectedRows.includes(item[rowKey])) && !allSelected;

  // Get size preset
  const sizePreset = sizePresets[size] || sizePresets.default;

  // Get variant preset
  const variantPreset = variantPresets[variant] || variantPresets.default;

  // Build container classes
  const containerClasses = useMemo(() => {
    return clsx(
      'overflow-x-auto rounded-lg border border-gray-200 dark:border-gray-700',
      buildClasses(classes),
      className
    );
  }, [classes, className]);

  // Build table classes
  const tableClasses = useMemo(() => {
    return clsx(
      'w-full',
      layout === 'fixed' ? 'table-fixed' : 'table-auto',
      sizePreset.table,
      variantPreset.table,
      classes.table,
      classes.tableDark
    );
  }, [layout, sizePreset, variantPreset, classes]);

  // Build header cell classes with presets
  const headerCellClasses = useMemo(() => {
    return clsx(
      sizePreset.headerCell,
      variantPreset.headerCell,
      classes.headerCell
    );
  }, [sizePreset, variantPreset, classes]);

  // Build body cell classes with presets
  const bodyCellClasses = useMemo(() => {
    return clsx(
      sizePreset.bodyCell,
      variantPreset.bodyCell,
      classes.bodyCell
    );
  }, [sizePreset, variantPreset, classes]);

  // Build footer cell classes with presets
  const footerCellClasses = useMemo(() => {
    return clsx(
      sizePreset.footerCell,
      classes.footerCell
    );
  }, [sizePreset, classes]);

  // Merge classes for subcomponents
  const headerClasses = {
    ...classes,
    headerCell: headerCellClasses,
  };

  const bodyClasses = {
    ...classes,
    bodyRowEven: clsx(variantPreset.bodyRowEven, classes.bodyRowEven),
    bodyRowOdd: clsx(variantPreset.bodyRowOdd, classes.bodyRowOdd),
    bodyCell: bodyCellClasses,
  };

  const footerClasses = {
    ...classes,
    footerCell: footerCellClasses,
  };

  return (
    <div
      ref={ref}
      className={containerClasses}
      style={style}
      data-uid={uid}
      data-component={component}
      {...props}
    >
      {/* Loading overlay */}
      {loading && (
        <div className={clsx('absolute inset-0 bg-white/50 dark:bg-gray-900/50 flex items-center justify-center z-10', classes.loadingOverlay)}>
          <div className="flex items-center gap-3">
            <svg className={clsx('animate-spin h-5 w-5', classes.loadingSpinner)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span className="text-gray-600 dark:text-gray-400">{loadingText}</span>
          </div>
        </div>
      )}

      <table className={tableClasses}>
        {/* Header */}
        <CMS_TableHeader
          columns={columns}
          sortable={sortable}
          sortColumn={sortColumn}
          sortDirection={sortDirection}
          onSort={handleSort}
          selectable={selectable}
          onSelectAll={handleSelectAll}
          allSelected={allSelected}
          someSelected={someSelected}
          classes={headerClasses}
          style={stickyHeader ? { position: 'sticky', top: 0, zIndex: 10 } : undefined}
        />

        {/* Body */}
        <CMS_TableBody
          data={data}
          columns={columns}
          rowKey={rowKey}
          selectable={selectable}
          selectedRows={selectedRows}
          onSelectRow={handleSelectRow}
          onRowClick={onRowClick}
          onCellClick={onCellClick}
          emptyText={emptyText}
          emptyIcon={emptyIcon}
          emptyIconLibrary={emptyIconLibrary}
          classes={bodyClasses}
        />

        {/* Footer with pagination */}
        {pagination && (
          <CMS_TableFooter
            totalRows={totalRows}
            currentPage={currentPage}
            pageSize={pageSize}
            totalPages={totalPages}
            onPageChange={onPageChange}
            onPageSizeChange={onPageSizeChange}
            pageSizeOptions={pageSizeOptions}
            showPagination={true}
            showPageSize={true}
            showTotal={true}
            showPageInfo={true}
            classes={footerClasses}
            style={stickyFooter ? { position: 'sticky', bottom: 0, zIndex: 10 } : undefined}
          />
        )}
      </table>

      {children}
    </div>
  );
});

CMS_Table.displayName = 'CMS_Table';
CMS_Table.metadata = componentMetadata;
CMS_Table.defaultProps = defaultTableProps;

// ============================================================================
// Pre-configured Table Components
// ============================================================================

export const CMS_DataTable = forwardRef((props, ref) => (
  <CMS_Table
    ref={ref}
    variant="bordered"
    size="compact"
    sortable={true}
    pagination={true}
    {...props}
  />
));
CMS_DataTable.displayName = 'CMS_DataTable';

export const CMS_SimpleTable = forwardRef((props, ref) => (
  <CMS_Table
    ref={ref}
    variant="default"
    size="default"
    sortable={false}
    selectable={false}
    pagination={false}
    {...props}
  />
));
CMS_SimpleTable.displayName = 'CMS_SimpleTable';

export const CMS_SelectableTable = forwardRef((props, ref) => (
  <CMS_Table
    ref={ref}
    variant="striped"
    size="comfortable"
    selectable={true}
    multipleSelection={true}
    {...props}
  />
));
CMS_SelectableTable.displayName = 'CMS_SelectableTable';

// ============================================================================
// Export
// ============================================================================

export {
  CMS_TableHeader,
  CMS_TableBody,
  CMS_TableFooter
};
export default CMS_Table;