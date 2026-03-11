/**
 * Component Tree - hierarchical selector for canvas components
 */

import React, { useMemo, useState } from 'react';
import clsx from 'clsx';

const getNodeLabel = (node) => {
  if (!node) return 'Unknown';
  if (typeof node.text === 'string' && node.text.trim()) return node.text;
  if (typeof node.label === 'string' && node.label.trim()) return node.label;
  if (typeof node.title === 'string' && node.title.trim()) return node.title;
  if (typeof node.alt === 'string' && node.alt.trim()) return node.alt;
  return node.component || 'Unknown';
};

const ComponentTree = ({ components = [], selectedId, onSelect, onClose, className = '' }) => {
  const [collapsed, setCollapsed] = useState(() => new Set());

  const toggleNode = (uid) => {
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(uid)) next.delete(uid);
      else next.add(uid);
      return next;
    });
  };

  const renderNode = (node, depth = 0) => {
    const hasChildren = Array.isArray(node.children) && node.children.length > 0;
    const isCollapsed = collapsed.has(node.uid);
    const label = getNodeLabel(node);

    return (
      <div key={node.uid}>
        <div
          className={clsx(
            'flex items-center gap-2 px-2 py-1 rounded cursor-pointer select-none',
            selectedId === node.uid
              ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-200'
              : 'hover:bg-gray-100 dark:hover:bg-gray-800'
          )}
          style={{ paddingLeft: 8 + depth * 12 }}
          onClick={() => onSelect?.(node.uid)}
        >
          {hasChildren ? (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                toggleNode(node.uid);
              }}
              className="w-5 h-5 text-xs rounded border border-gray-300 dark:border-gray-700 flex items-center justify-center"
              aria-label={isCollapsed ? 'Expand' : 'Collapse'}
            >
              {isCollapsed ? '+' : '-'}
            </button>
          ) : (
            <span className="w-5 h-5 inline-block" />
          )}
          <div className="min-w-0">
            <div className="text-xs font-medium truncate">{label}</div>
            <div className="text-[10px] text-gray-500 dark:text-gray-400 truncate">
              {node.component}
            </div>
          </div>
        </div>

        {hasChildren && !isCollapsed && (
          <div>
            {node.children.map((child) => renderNode(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  const treeContent = useMemo(() => {
    if (!components.length) {
      return (
        <div className="text-sm text-gray-500 dark:text-gray-400 px-2 py-3">
          No components yet
        </div>
      );
    }

    return components.map((node) => renderNode(node, 0));
  }, [components, selectedId, collapsed]);

  return (
    <div className={clsx('w-64 h-full flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg', className)}>
      <div className="px-3 py-2 border-b dark:border-gray-700 flex items-center justify-between">
        <div className="text-sm font-semibold dark:text-white">Structure</div>
        <button
          type="button"
          onClick={onClose}
          className="text-xs text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
        >
          X
        </button>
      </div>
      <div className="px-3 py-1 text-[11px] text-gray-500 dark:text-gray-400">
        Select components from the tree
      </div>
      <div className="flex-1 overflow-y-auto py-2">{treeContent}</div>
    </div>
  );
};

export default ComponentTree;
