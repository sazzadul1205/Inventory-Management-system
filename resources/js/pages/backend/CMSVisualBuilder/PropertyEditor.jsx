/**
 * Property Editor - Right sidebar for editing component properties
 */

import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

const PropertyEditor = ({ component, onUpdate, onClose }) => {
  const [activeTab, setActiveTab] = useState('classes');
  const [localComponent, setLocalComponent] = useState(component ?? null);
  const [colorPickerOpen, setColorPickerOpen] = useState(false);
  const [currentColorField, setCurrentColorField] = useState(null);

  const prevUidRef = useRef(component?.uid ?? null);

  useEffect(() => {
    const nextUid = component?.uid ?? null;
    setLocalComponent(component);
    if (prevUidRef.current !== nextUid) {
      setActiveTab('classes');
      prevUidRef.current = nextUid;
    }
  }, [component]);

  if (!component) {
    return (
      <div className="w-96 h-full bg-white dark:bg-gray-900 border-l dark:border-gray-700 p-4">
        <div className="text-center text-gray-500 dark:text-gray-400 mt-10">
          Select a component to edit
        </div>
      </div>
    );
  }

  const effectiveComponent = localComponent ?? component;

  const handleChange = (path, value) => {
    const updated = { ...effectiveComponent, [path]: value };
    setLocalComponent(updated);
    onUpdate(updated);
  };

  /**
   * Extracts hex color from Tailwind arbitrary value
   * Examples: 
   * - 'bg-[#ff0000]' -> '#ff0000'
   * - 'text-[#333]' -> '#333'
   * - 'border-[#ccc]' -> '#ccc'
   */
  const extractHexFromClass = (classString, prefix) => {
    if (!classString) return null;
    const regex = new RegExp(`${prefix}\\[#([0-9a-fA-F]{3,8})\\]`);
    const match = classString.match(regex);
    return match ? `#${match[1]}` : null;
  };

  /**
   * Updates or removes hex color in Tailwind arbitrary value
   */
  const updateHexInClass = (classString, prefix, hexValue) => {
    if (!classString && !hexValue) return '';

    const classes = classString ? classString.split(' ') : [];
    const filtered = classes.filter(c => !c.startsWith(`${prefix}[#`));

    if (hexValue) {
      // Convert hex to Tailwind arbitrary format (remove # and wrap in brackets)
      const hexWithoutHash = hexValue.replace('#', '');
      filtered.push(`${prefix}[#${hexWithoutHash}]`);
    }

    return filtered.join(' ').trim();
  };

  /**
   * Handles class changes with special support for color picker
   */
  const handleClassChange = (key, value, options = {}) => {
    const { fromColorPicker = false, colorPrefix = null, hexValue = null } = options;

    let finalValue = value;

    // If coming from color picker, update the specific color in the class string
    if (fromColorPicker && colorPrefix && hexValue !== null) {
      const currentValue = effectiveComponent.classes?.[key] || '';
      finalValue = updateHexInClass(currentValue, colorPrefix, hexValue);
    }

    const updated = {
      ...effectiveComponent,
      classes: {
        ...(effectiveComponent?.classes ?? {}),
        [key]: finalValue
      }
    };

    setLocalComponent(updated);
    onUpdate(updated);
  };

  /**
   * Opens color picker for a specific field
   */
  const openColorPicker = (fieldKey, prefix) => {
    const currentValue = effectiveComponent.classes?.[fieldKey] || '';
    const currentHex = extractHexFromClass(currentValue, prefix);

    setCurrentColorField({ fieldKey, prefix, currentHex });
    setColorPickerOpen(true);
  };

  /**
   * Color Picker Modal
   */
  const renderColorPicker = () => {
    if (!colorPickerOpen || !currentColorField) return null;

    const { fieldKey, prefix, currentHex } = currentColorField;
    const [hexInput, setHexInput] = useState(currentHex || '#000000');

    const handleColorApply = () => {
      handleClassChange(fieldKey, '', {
        fromColorPicker: true,
        colorPrefix: prefix,
        hexValue: hexInput
      });
      setColorPickerOpen(false);
      setCurrentColorField(null);
    };

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="bg-white dark:bg-gray-900 rounded-lg w-80 p-4">
          <h4 className="font-medium mb-3 dark:text-white">Choose Color</h4>

          <div className="mb-3">
            <input
              type="color"
              value={hexInput}
              onChange={(e) => setHexInput(e.target.value)}
              className="w-full h-10 rounded cursor-pointer"
            />
          </div>

          <div className="mb-3">
            <label className="block text-sm mb-1 dark:text-gray-300">Hex Value</label>
            <input
              type="text"
              value={hexInput}
              onChange={(e) => setHexInput(e.target.value)}
              className="w-full px-3 py-2 border rounded-md font-mono text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              placeholder="#000000"
            />
          </div>

          <div className="flex justify-end gap-2">
            <button
              onClick={() => {
                setColorPickerOpen(false);
                setCurrentColorField(null);
              }}
              className="px-3 py-1 border rounded-md dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              Cancel
            </button>
            <button
              onClick={handleColorApply}
              className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    );
  };

  /**
   * Renders a class input with optional color picker button
   */
  const renderClassInput = (label, fieldKey, placeholder, isTextarea = false, options = {}) => {
    const { showColorPicker = false, colorPrefix = null } = options;
    const value = effectiveComponent.classes?.[fieldKey] || '';

    // Extract current hex for preview
    const currentHex = showColorPicker && colorPrefix ? extractHexFromClass(value, colorPrefix) : null;

    return (
      <div className="mb-4">
        <div className="flex items-center justify-between mb-1">
          <label className="block text-sm font-medium dark:text-gray-300">
            {label}
          </label>
          {showColorPicker && colorPrefix && (
            <button
              onClick={() => openColorPicker(fieldKey, colorPrefix)}
              className="flex items-center gap-1 text-xs px-2 py-1 border rounded hover:bg-gray-50 dark:hover:bg-gray-800"
              title="Pick color"
            >
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: currentHex || '#000000' }}
              />
              <span>Color</span>
            </button>
          )}
        </div>

        {isTextarea ? (
          <textarea
            value={value}
            onChange={(e) => handleClassChange(fieldKey, e.target.value)}
            className="w-full px-3 py-2 border rounded-md font-mono text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            rows="3"
            placeholder={placeholder}
          />
        ) : (
          <input
            type="text"
            value={value}
            onChange={(e) => handleClassChange(fieldKey, e.target.value)}
            className="w-full px-3 py-2 border rounded-md font-mono text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            placeholder={placeholder}
          />
        )}

        {currentHex && (
          <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
            Current color: <span className="font-mono">{currentHex}</span>
          </div>
        )}
      </div>
    );
  };

  const renderClassEditor = () => {
    if (!effectiveComponent) return null;

    return (
      <div className="space-y-4">
        {renderClassInput('Base Classes', 'base', 'e.g., bg-[#ffffff] text-[#111827] p-4', true, {
          showColorPicker: true,
          colorPrefix: 'bg'
        })}

        {renderClassInput('Hover Classes', 'hover', 'e.g., hover:bg-[#f3f4f6] hover:shadow', false, {
          showColorPicker: true,
          colorPrefix: 'hover:bg'
        })}

        {renderClassInput('Focus Classes', 'focus', 'e.g., focus:ring-2 focus:ring-[#3b82f6]', false, {
          showColorPicker: true,
          colorPrefix: 'focus:ring'
        })}

        {renderClassInput('Dark Mode Classes', 'dark', 'e.g., dark:bg-[#1f2937] dark:text-[#ffffff]', false, {
          showColorPicker: true,
          colorPrefix: 'dark:bg'
        })}

        {/* Quick color picker buttons for common properties */}
        <div className="border-t pt-4 mt-4 dark:border-gray-700">
          <h4 className="text-sm font-medium mb-2 dark:text-gray-300">Quick Colors</h4>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'Background', prefix: 'bg', defaultHex: '#ffffff' },
              { label: 'Text', prefix: 'text', defaultHex: '#111827' },
              { label: 'Border', prefix: 'border', defaultHex: '#d1d5db' },
            ].map(({ label, prefix, defaultHex }) => (
              <button
                key={prefix}
                onClick={() => openColorPicker('base', prefix)}
                className="px-3 py-1 text-xs border rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center gap-1"
              >
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: defaultHex }} />
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderAttributeEditor = () => {
    const excludeKeys = ['classes', 'children', 'uid', 'component', 'style'];
    if (!effectiveComponent) return null;

    return (
      <div className="space-y-3">
        {Object.entries(effectiveComponent)
          .filter(([key]) => !excludeKeys.includes(key))
          .map(([key, value]) => {
            // Handle color attributes specially
            const isColorAttr = key.includes('color') || key.includes('Color') || key === 'bg' || key === 'text';

            if (typeof value === 'string') {
              return (
                <div key={key}>
                  <label className="block text-sm font-medium mb-1 dark:text-gray-300 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => handleChange(key, e.target.value)}
                      className="flex-1 px-3 py-2 border rounded-md text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    />
                    {isColorAttr && (
                      <input
                        type="color"
                        value={value.startsWith('#') ? value : '#000000'}
                        onChange={(e) => handleChange(key, e.target.value)}
                        className="w-10 h-10 rounded cursor-pointer"
                      />
                    )}
                  </div>
                </div>
              );
            }

            if (typeof value === 'number') {
              return (
                <div key={key}>
                  <label className="block text-sm font-medium mb-1 dark:text-gray-300 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </label>
                  <input
                    type="number"
                    value={value}
                    onChange={(e) => handleChange(key, Number(e.target.value))}
                    className="w-full px-3 py-2 border rounded-md text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  />
                </div>
              );
            }

            if (typeof value === 'boolean') {
              return (
                <div key={key} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={key}
                    checked={value}
                    onChange={(e) => handleChange(key, e.target.checked)}
                    className="rounded dark:bg-gray-800"
                  />
                  <label htmlFor={key} className="text-sm font-medium dark:text-gray-300 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </label>
                </div>
              );
            }

            if (Array.isArray(value) || (typeof value === 'object' && value !== null)) {
              return (
                <div key={key}>
                  <label className="block text-sm font-medium mb-1 dark:text-gray-300 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </label>
                  <textarea
                    value={JSON.stringify(value, null, 2)}
                    onChange={(e) => {
                      try {
                        handleChange(key, JSON.parse(e.target.value));
                      } catch (err) {
                        // Invalid JSON - ignore
                      }
                    }}
                    className="w-full px-3 py-2 border rounded-md font-mono text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    rows="5"
                  />
                </div>
              );
            }

            return null;
          })}
      </div>
    );
  };

  const renderResponsiveEditor = () => {
    if (!effectiveComponent) return null;

    return (
      <div className="space-y-4">
        {renderClassInput('Small (sm: 640px)', 'sm', 'e.g., sm:text-lg sm:p-4 sm:bg-[#f9fafb]', false, {
          showColorPicker: true,
          colorPrefix: 'sm:bg'
        })}

        {renderClassInput('Medium (md: 768px)', 'md', 'e.g., md:text-xl md:grid-cols-2 md:bg-[#f3f4f6]', false, {
          showColorPicker: true,
          colorPrefix: 'md:bg'
        })}

        {renderClassInput('Large (lg: 1024px)', 'lg', 'e.g., lg:text-2xl lg:grid-cols-3 lg:bg-[#e5e7eb]', false, {
          showColorPicker: true,
          colorPrefix: 'lg:bg'
        })}

        {renderClassInput('Extra Large (xl: 1280px)', 'xl', 'e.g., xl:text-3xl xl:gap-8 xl:bg-[#d1d5db]', false, {
          showColorPicker: true,
          colorPrefix: 'xl:bg'
        })}
      </div>
    );
  };

  return (
    <div className="w-96 h-full flex flex-col bg-white dark:bg-gray-900 border-l dark:border-gray-700">
      {/* Header */}
      <div className="p-4 border-b dark:border-gray-700 flex justify-between items-center">
        <div>
          <h3 className="font-medium dark:text-white">Edit Component</h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            {component.component}
          </p>
        </div>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-xl font-bold"
          aria-label="Close"
        >
          ×
        </button>
      </div>

      {/* Tabs */}
      <div className="border-b dark:border-gray-700">
        <div className="flex">
          {['classes', 'attributes', 'responsive'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={clsx(
                'flex-1 px-4 py-2 text-sm font-medium capitalize',
                activeTab === tab
                  ? 'border-b-2 border-blue-500 text-blue-600 dark:text-blue-400'
                  : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {activeTab === 'classes' && renderClassEditor()}
        {activeTab === 'attributes' && renderAttributeEditor()}
        {activeTab === 'responsive' && renderResponsiveEditor()}
      </div>

      {/* Color Picker Modal */}
      {renderColorPicker()}
    </div>
  );
};

export default PropertyEditor;