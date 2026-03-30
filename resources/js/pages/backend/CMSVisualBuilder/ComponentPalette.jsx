/**
 * Component Palette - Left sidebar with draggable components
 */

import clsx from 'clsx';
import React, { useState } from 'react';

import { componentPalette } from './constants';
import DraggableItem from './DraggableItem';

const ComponentPalette = ({ onDragStart }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState('all');

  // Get unique categories
  const categoryMap = new Map(
    componentPalette
      .filter(c => c.category && c.category.id)
      .map(c => [c.category.id, c.category])
  );

  const categories = [
    { id: 'all', label: 'All' },
    ...Array.from(categoryMap.values()),
  ];

  // Filter components
  const filteredComponents = componentPalette.filter(comp => {
    const matchesSearch = comp.label.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategoryId === 'all' || comp.category?.id === selectedCategoryId;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-80 h-full flex flex-col bg-white dark:bg-gray-900 border-r dark:border-gray-700">
      {/* Header */}
      <div className="p-4 border-b dark:border-gray-700">
        <h2 className="text-lg font-semibold dark:text-white mb-4">Components</h2>

        {/* Search */}
        <input
          type="text"
          placeholder="Search components..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        />

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mt-3">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategoryId(category.id)}
              className={clsx(
                'px-2 py-1 text-xs rounded-full transition-colors',
                selectedCategoryId === category.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300'
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>

      {/* Component List */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-2">
          {filteredComponents.map((component, index) => (
            <DraggableItem
              key={`${component.type}-${index}`}
              component={component}
              onDragStart={onDragStart}
            >
              <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border-2 border-transparent hover:border-blue-300 transition-all">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{component.icon}</span>
                  <div className="flex-1">
                    <div className="font-medium dark:text-white">{component.label}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {component.description}
                    </div>
                  </div>
                  <span className="text-gray-400">::</span>
                </div>
              </div>
            </DraggableItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentPalette;
