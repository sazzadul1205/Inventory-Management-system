/**
 * Preview Controls - Top bar with preview mode toggles
 */

import React from 'react';
import clsx from 'clsx';
import { Breakpoints } from './types';

const PreviewControls = ({
  previewMode,
  onPreviewModeChange,
  darkMode,
  onDarkModeToggle,
  onExport,
  onImport,
  onClear,
}) => {
  return (
    <div className="bg-white dark:bg-gray-900 border-b dark:border-gray-700 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold dark:text-white">CMS Visual Builder</h1>

        <div className="flex items-center gap-4">
          {/* Preview mode controls */}
          <div className="flex items-center gap-2 border rounded-lg p-1 dark:border-gray-700">
            {Object.entries(Breakpoints).map(([key, value]) => (
              <button
                key={key}
                onClick={() => onPreviewModeChange(key.toLowerCase())}
                className={clsx(
                  'px-3 py-1 rounded-md text-sm capitalize transition-colors',
                  previewMode === key.toLowerCase()
                    ? 'bg-blue-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                )}
              >
                <span className="mr-1">{value.icon}</span>
                {value.label}
              </button>
            ))}
          </div>

          {/* Dark mode toggle */}
          <button
            onClick={onDarkModeToggle}
            className={clsx(
              'px-3 py-1 rounded-md border dark:border-gray-700 transition-colors',
              darkMode
                ? 'bg-gray-800 text-white'
                : 'bg-white text-gray-800 hover:bg-gray-50'
            )}
          >
            {darkMode ? 'Dark' : 'Light'}
          </button>

          {/* Action buttons */}
          <button
            onClick={onExport}
            className="px-3 py-1 bg-green-500 text-white rounded-md text-sm hover:bg-green-600 transition-colors"
          >
            Export JSON
          </button>

          <button
            onClick={onImport}
            className="px-3 py-1 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 transition-colors"
          >
            Import JSON
          </button>

          <button
            onClick={onClear}
            className="px-3 py-1 bg-red-500 text-white rounded-md text-sm hover:bg-red-600 transition-colors"
          >
            Clear Canvas
          </button>
        </div>
      </div>
    </div>
  );
};

export default PreviewControls;
