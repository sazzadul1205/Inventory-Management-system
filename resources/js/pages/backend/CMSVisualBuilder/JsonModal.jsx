/**
 * JSON Import/Export Modal
 */


import { clsx } from 'clsx';
import React, { useState, useEffect } from 'react';

const JsonModal = ({ isOpen, onClose, onImport, initialJson }) => {
  const [jsonInput, setJsonInput] = useState(initialJson);
  const [error, setError] = useState('');
  const [isDirty, setIsDirty] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    setJsonInput(initialJson);
    setError('');
    setIsDirty(false);
  }, [isOpen, initialJson]);

  useEffect(() => {
    if (!isOpen) return;
    if (isDirty) return;
    setJsonInput(initialJson);
  }, [initialJson, isOpen, isDirty]);

  if (!isOpen) return null;

  /**
   * Validates component JSON structure
   * Now handles Tailwind arbitrary values like bg-[#hex]
   */
  const validateComponentJSON = (json) => {
    if (!Array.isArray(json)) return false;

    const validateComponent = (comp) => {
      // Check required fields
      if (!comp.uid || !comp.component) return false;

      // Validate children if they exist
      if (comp.children && !Array.isArray(comp.children)) return false;
      if (comp.children) {
        return comp.children.every(validateComponent);
      }

      // Validate classes object if it exists
      if (comp.classes && typeof comp.classes === 'object') {
        // Classes can contain any string - Tailwind arbitrary values are valid
        // No need to validate specific format, just ensure it's a string
        for (const key in comp.classes) {
          if (typeof comp.classes[key] !== 'string' &&
            typeof comp.classes[key] !== 'undefined') {
            console.warn(`Invalid class value for ${key}:`, comp.classes[key]);
            return false;
          }
        }
      }

      // Validate style object if it exists
      if (comp.style && typeof comp.style === 'object') {
        // Style object can contain any valid CSS properties
        // Just ensure it's an object
      }

      // Validate color and darkColor fields (for dividers)
      if (comp.color && typeof comp.color !== 'string') return false;
      if (comp.darkColor && typeof comp.darkColor !== 'string') return false;

      // Validate gradient fields
      if (comp.gradient && typeof comp.gradient !== 'string') return false;
      if (comp.darkGradient && typeof comp.darkGradient !== 'string') return false;

      // Validate items array (for lists, tables, etc.)
      if (comp.items && !Array.isArray(comp.items)) return false;

      // Validate columns array (for tables)
      if (comp.columns && !Array.isArray(comp.columns)) return false;

      // Validate data array (for tables)
      if (comp.data && !Array.isArray(comp.data)) return false;

      return true;
    };

    try {
      return json.every(validateComponent);
    } catch (err) {
      console.error('Validation error:', err);
      return false;
    }
  };

  /**
   * Prettifies the JSON input
   */
  const handlePrettify = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      setJsonInput(JSON.stringify(parsed, null, 2));
      setError('');
    } catch (err) {
      setError('Cannot prettify: Invalid JSON', err);
    }
  };

  /**
   * Handles import with validation
   */
  const handleImport = () => {
    try {
      const parsed = JSON.parse(jsonInput);
      if (validateComponentJSON(parsed)) {
        onImport(parsed);
        onClose();
      } else {
        setError('Invalid component structure. Check console for details.');
      }
    } catch (err) {
      setError(`Invalid JSON format: ${err.message}`);
    }
  };

  /**
   * Handles reset to initial JSON
   */
  const handleReset = () => {
    setJsonInput(initialJson);
    setError('');
    setIsDirty(false);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-lg w-3/4 max-w-4xl max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
          <h2 className="text-lg font-medium dark:text-white">JSON Editor</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-xl font-bold"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-4 overflow-auto">
          <textarea
            value={jsonInput}
            onChange={(e) => {
              setJsonInput(e.target.value);
              setError('');
              setIsDirty(true);
            }}
            className={clsx(
              'w-full h-full font-mono text-sm p-4 border rounded-md dark:bg-gray-800 dark:text-white',
              error ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
            )}
            style={{ minHeight: '400px' }}
            placeholder='Paste your JSON here...'
            spellCheck={false}
          />
          {error && (
            <p className="mt-2 text-sm text-red-500">{error}</p>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t dark:border-gray-700 flex justify-end gap-2">
          <button
            onClick={handlePrettify}
            className="px-4 py-2 border rounded-md dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
            title="Format JSON"
          >
            Prettify
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-2 border rounded-md dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Reset
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-md dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleImport}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Import
          </button>
        </div>
      </div>
    </div>
  );
};

export default JsonModal;