import React, { useState } from 'react';
import { Settings, Sliders, Type, Image, Layout as LayoutIcon, Palette, ChevronDown } from 'lucide-react';

const AttributeSection = ({ title, icon: Icon, children, defaultExpanded = true }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Icon size={18} className="text-gray-500" />
          <span className="font-medium text-gray-700">{title}</span>
        </div>
        <ChevronDown
          size={18}
          className={`text-gray-400 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''
            }`}
        />
      </button>
      {isExpanded && <div className="px-4 pb-4">{children}</div>}
    </div>
  );
};

const AttributeEditor = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
          Attribute Editor
        </h3>
        {!selectedComponent ? (
          <div className="bg-linear-to-br from-gray-50 to-white rounded-lg p-6 text-center border border-gray-200">
            <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-linear-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <Settings size={20} className="text-blue-500" />
            </div>
            <p className="text-gray-600 font-medium mb-1">No Component Selected</p>
            <p className="text-sm text-gray-400">Click on a component in the canvas to edit its properties</p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Component Info */}
            <div className="flex items-center gap-3 p-3 bg-linear-to-br from-gray-50 to-white rounded-lg border border-gray-200">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <LayoutIcon size={20} className="text-blue-600" />
              </div>
              <div>
                <p className="font-medium text-gray-800">Container Component</p>
                <p className="text-xs text-gray-400">ID: {selectedComponent}</p>
              </div>
            </div>

            {/* Attribute Sections */}
            <div className="bg-white rounded-lg border border-gray-200 divide-y">
              <AttributeSection title="Layout" icon={LayoutIcon}>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Width</label>
                    <select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                      <option>Auto</option>
                      <option>Full</option>
                      <option>1/2</option>
                      <option>1/3</option>
                      <option>2/3</option>
                      <option>1/4</option>
                      <option>3/4</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Padding</label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        placeholder="X"
                        className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                      <input
                        type="text"
                        placeholder="Y"
                        className="px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                  </div>
                </div>
              </AttributeSection>

              <AttributeSection title="Typography" icon={Type}>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Font Size</label>
                    <select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                      <option>Small</option>
                      <option>Base</option>
                      <option>Large</option>
                      <option>XL</option>
                      <option>2XL</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Text Alignment</label>
                    <div className="flex gap-1">
                      {['left', 'center', 'right'].map((align) => (
                        <button
                          key={align}
                          className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm capitalize hover:bg-blue-50 hover:border-blue-300 transition-colors"
                        >
                          {align}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </AttributeSection>

              <AttributeSection title="Colors" icon={Palette}>
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Background</label>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-linear-to-br from-blue-400 to-purple-400 border-2 border-white shadow-sm"></div>
                      <input
                        type="text"
                        value="#ffffff"
                        className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 mb-1">Text Color</label>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gray-900 border-2 border-white shadow-sm"></div>
                      <input
                        type="text"
                        value="#111111"
                        className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                      />
                    </div>
                  </div>
                </div>
              </AttributeSection>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AttributeEditor;