// CustomSectionBuilder

// React
import React, { useState, Suspense, lazy } from 'react';

// UUID
import { v4 as uuidv4 } from 'uuid';

// Icons  
import {
  FiTrash2,
  FiBox,
  FiGrid,
  FiLayout,
  FiLayers,
  FiPackage,
  FiPlusCircle
} from 'react-icons/fi';
import { MdDragHandle } from 'react-icons/md';
import { IoCopyOutline, IoTrashOutline } from 'react-icons/io5';
import { BsChevronDown, BsChevronRight, BsGripVertical } from 'react-icons/bs';

// Lazy imports for CMS components with error handling
const CMS_Section = lazy(() =>
  import('../../../../components/CMS_Container').then((m) => ({ default: m.CMS_Section })).catch(() => {
    console.error('Failed to load CMS_Section');
    return { default: () => <div className="p-4 bg-red-100 text-red-600">Failed to load component</div> };
  })
);

const CMS_Grid = lazy(() =>
  import('../../../../components/CMS_Container').then((m) => ({ default: m.CMS_Grid })).catch(() => {
    console.error('Failed to load CMS_Grid');
    return { default: () => <div className="p-4 bg-red-100 text-red-600">Failed to load component</div> };
  })
);

const CMS_Flex = lazy(() =>
  import('../../../../components/CMS_Container').then((m) => ({ default: m.CMS_Flex })).catch(() => {
    console.error('Failed to load CMS_Flex');
    return { default: () => <div className="p-4 bg-red-100 text-red-600">Failed to load component</div> };
  })
);

const CMS_Container = lazy(() =>
  import('../../../../components/CMS_Container').then((m) => ({ default: m.CMS_Container })).catch(() => {
    console.error('Failed to load CMS_Container');
    return { default: () => <div className="p-4 bg-red-100 text-red-600">Failed to load component</div> };
  })
);

// Map string type to actual component
const COMPONENT_MAP = {
  CMS_Section,
  CMS_Grid,
  CMS_Flex,
  CMS_Container,
};

// Icon mapping for components
const getComponentIcon = (componentName) => {
  switch (componentName) {
    case 'CMS_Section':
      return <FiLayers className="text-orange-500" size={16} />;
    case 'CMS_Grid':
      return <FiGrid className="text-purple-500" size={16} />;
    case 'CMS_Flex':
      return <FiLayout className="text-green-500" size={16} />;
    case 'CMS_Container':
      return <FiBox className="text-blue-500" size={16} />;
    default:
      return <FiPackage className="text-gray-500" size={16} />;
  }
};

const ComponentWrapper = ({ component, config, children, onSelect, onDelete, onDuplicate, isSelected }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Safely get component name
  const componentName = component?.replace('CMS_', '') || 'Unknown';

  // Ensure component exists in map
  const ComponentToRender = COMPONENT_MAP[component];

  if (!ComponentToRender) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
        Unknown component: {component}
      </div>
    );
  }

  return (
    <div
      className={`relative group mb-4 transition-all duration-200 ${isSelected ? 'ring-2 ring-blue-400 ring-offset-2 rounded-lg' : ''
        }`}
      onClick={() => onSelect()}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Component Header - Visible on hover */}
      <div className={`absolute -top-3 left-4 transition-all duration-200 z-10 ${isHovered || isSelected ? 'opacity-100' : 'opacity-0'
        }`}>
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 px-2 py-1 flex items-center gap-1 text-xs">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="p-1 hover:bg-gray-100 rounded transition-colors"
            title={isExpanded ? "Collapse" : "Expand"}
          >
            {isExpanded ? <BsChevronDown size={14} /> : <BsChevronRight size={14} />}
          </button>

          <span className="flex items-center gap-1 font-medium text-gray-700">
            {getComponentIcon(component)}
            {componentName}
          </span>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onDuplicate();
            }}
            className="p-1 hover:bg-gray-100 rounded text-gray-500 hover:text-blue-600 transition-colors"
            title="Duplicate"
          >
            <IoCopyOutline size={14} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="p-1 hover:bg-gray-100 rounded text-gray-500 hover:text-red-600 transition-colors"
            title="Delete"
          >
            <IoTrashOutline size={14} />
          </button>
        </div>
      </div>

      {/* Drag Handle */}
      <div className={`absolute -left-3 top-1/2 transform -translate-y-1/2 transition-all duration-200 cursor-move ${isHovered || isSelected ? 'opacity-100' : 'opacity-0'
        }`}>
        <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-1 hover:bg-gray-50">
          <BsGripVertical size={16} className="text-gray-400" />
        </div>
      </div>

      {/* Component Content */}
      <div className={`${!isExpanded ? 'opacity-50' : ''}`}>
        <Suspense fallback={
          <div className="animate-pulse bg-linear-to-r from-gray-100 to-gray-200 rounded-lg h-24 flex items-center justify-center">
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <FiPackage className="animate-spin" />
              Loading {componentName}...
            </div>
          </div>
        }>
          <div className="bg-linear-to-br from-white to-gray-50 rounded-lg shadow-sm hover:shadow-md transition-all duration-200">
            <ComponentToRender
              config={config || {}}
              debug={false}
            >
              {children}
            </ComponentToRender>
          </div>
        </Suspense>
      </div>
    </div>
  );
};

const VisualEditorPage = () => {
  const [pageConfig, setPageConfig] = useState([]);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const name = e.dataTransfer.getData('componentName');
    const type = e.dataTransfer.getData('componentType');
    const variant = e.dataTransfer.getData('variantName');

    if ((name && type && COMPONENT_MAP[type]) || variant) {
      const uid = `${(name || variant || 'component').toLowerCase()}-${uuidv4()}`;
      const newComponent = {
        uid,
        component: type || 'CMS_Container',
        config: variant ? { variant } : {},
        children: [],
        name: name || variant || 'Component',
      };

      setPageConfig((prev) => [...prev, newComponent]);

      // Add visual feedback
      const dropZone = document.getElementById('visual-editor-dropzone');
      if (dropZone) {
        dropZone.classList.add('ring-2', 'ring-green-400', 'ring-offset-2', 'bg-green-50');
        setTimeout(() => {
          dropZone.classList.remove('ring-2', 'ring-green-400', 'ring-offset-2', 'bg-green-50');
        }, 500);
      }
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    setIsDragging(true);
    const dropZone = document.getElementById('visual-editor-dropzone');
    if (dropZone) {
      dropZone.classList.add('bg-blue-50', 'border-blue-400', 'border-2');
    }
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const dropZone = document.getElementById('visual-editor-dropzone');
    if (dropZone) {
      dropZone.classList.remove('bg-blue-50', 'border-blue-400', 'border-2');
    }
  };

  const deleteComponent = (uid) => {
    setPageConfig(prev => prev.filter(comp => comp.uid !== uid));
    if (selectedComponent === uid) {
      setSelectedComponent(null);
    }
  };

  const duplicateComponent = (component) => {
    const newComponent = {
      ...component,
      uid: `${component.name?.toLowerCase() || 'component'}-${uuidv4()}`,
    };
    setPageConfig(prev => [...prev, newComponent]);
  };

  const moveComponent = (dragIndex, hoverIndex) => {
    const dragItem = pageConfig[dragIndex];
    const hoverItem = pageConfig[hoverIndex];

    // Swap items
    const updatedConfig = [...pageConfig];
    updatedConfig[dragIndex] = hoverItem;
    updatedConfig[hoverIndex] = dragItem;

    setPageConfig(updatedConfig);
  };

  return (
    <div className="h-full flex flex-col">
      {/* Canvas Header */}
      <div className="flex items-center justify-between mb-4 px-2">
        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider flex items-center gap-2">
          <FiBox size={16} />
          Canvas • {pageConfig.length} {pageConfig.length === 1 ? 'component' : 'components'}
        </h3>
        {pageConfig.length > 0 && (
          <button
            onClick={() => setPageConfig([])}
            className="text-xs text-gray-400 hover:text-red-500 transition-colors px-3 py-1.5 rounded-lg hover:bg-red-50 flex items-center gap-1"
          >
            <FiTrash2 size={14} />
            Clear canvas
          </button>
        )}
      </div>

      {/* Drop Zone */}
      <div
        id="visual-editor-dropzone"
        className={`flex-1 p-6 rounded-xl transition-all duration-200 min-h-125 bg-linear-to-br from-gray-50 to-white border-2 border-dashed ${isDragging ? 'border-blue-400 bg-blue-50/50' : 'border-gray-200'
          }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
      >
        {pageConfig.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center">
            <div className="w-20 h-20 mb-4 rounded-full bg-linear-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <FiPlusCircle size={32} className="text-blue-500" />
            </div>
            <p className="text-gray-500 font-medium mb-2">Drop components here</p>
            <p className="text-sm text-gray-400 max-w-xs">
              Drag and drop components from the left panel to build your layout
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {pageConfig.map((comp, index) => (
              <ComponentWrapper
                key={comp.uid}
                component={comp.component}
                config={comp.config}
                onSelect={() => setSelectedComponent(comp.uid)}
                onDelete={() => deleteComponent(comp.uid)}
                onDuplicate={() => duplicateComponent(comp)}
                isSelected={selectedComponent === comp.uid}
              >
                {/* Nested components would go here */}
                {comp.children?.map((child, childIndex) => (
                  <div key={child.uid} className="ml-4">
                    {/* Recursive rendering for nested components */}
                  </div>
                ))}
              </ComponentWrapper>
            ))}
          </div>
        )}
      </div>

      {/* Quick Stats */}
      <div className="mt-4 flex items-center gap-3 px-2">
        <div className="flex items-center gap-1.5 text-xs text-gray-400">
          <span className="w-2 h-2 rounded-full bg-green-400"></span>
          {pageConfig.length} component{pageConfig.length !== 1 ? 's' : ''}
        </div>
        {pageConfig.length > 0 && (
          <>
            <span className="text-gray-300">•</span>
            <div className="flex items-center gap-1.5 text-xs text-gray-400">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              <MdDragHandle size={14} />
              Drag handles to reorder
            </div>
          </>
        )}
        {selectedComponent && (
          <>
            <span className="text-gray-300">•</span>
            <div className="flex items-center gap-1.5 text-xs text-blue-400">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              Component selected
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default VisualEditorPage;