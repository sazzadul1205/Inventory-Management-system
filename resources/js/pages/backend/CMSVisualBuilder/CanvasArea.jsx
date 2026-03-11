/**
 * Canvas Area - Center workspace with components (Lazy Loading Version)
 */

import React, { useState, useEffect, useRef, useCallback, lazy, Suspense } from 'react';
import clsx from 'clsx';
import DroppableCanvas from './DroppableCanvas';
import ComponentWrapper from './ComponentWrapper';
import { Breakpoints } from './types';

// ============================================================================
// Lazy Load Component Loader
// ============================================================================

/**
 * Dynamically imports components based on component type
 * Cached to avoid remounts on selection changes.
 */
const componentCache = {};

const loadComponent = (componentType) => {
  if (componentCache[componentType]) return componentCache[componentType];

  let Component = null;

  switch (componentType) {
    // Containers
    case 'CMS_Container':
      Component = lazy(() => import('../../../components/CMS_Container'));
      break;
    case 'CMS_Grid':
      Component = lazy(() =>
        import('../../../components/CMS_Container').then(m => ({ default: m.CMS_Grid }))
      );
      break;
    case 'CMS_Flex':
      Component = lazy(() =>
        import('../../../components/CMS_Container').then(m => ({ default: m.CMS_Flex }))
      );
      break;
    case 'CMS_Section':
      Component = lazy(() =>
        import('../../../components/CMS_Container').then(m => ({ default: m.CMS_Section }))
      );
      break;

    // Cards
    case 'CMS_Card':
      Component = lazy(() => import('../../../components/CMS_Card'));
      break;

    // Dividers
    case 'CMS_Divider':
      Component = lazy(() => import('../../../components/CMS_Divider'));
      break;
    case 'CMS_DividerWithText':
      Component = lazy(() =>
        import('../../../components/CMS_Divider').then(m => ({ default: m.CMS_DividerWithText }))
      );
      break;
    case 'CMS_DividerWithIcon':
      Component = lazy(() =>
        import('../../../components/CMS_Divider').then(m => ({ default: m.CMS_DividerWithIcon }))
      );
      break;
    case 'CMS_VerticalDivider':
      Component = lazy(() =>
        import('../../../components/CMS_Divider').then(m => ({ default: m.CMS_VerticalDivider }))
      );
      break;
    case 'CMS_GradientDivider':
      Component = lazy(() =>
        import('../../../components/CMS_Divider').then(m => ({ default: m.CMS_GradientDivider }))
      );
      break;
    case 'CMS_DashedDivider':
      Component = lazy(() =>
        import('../../../components/CMS_Divider').then(m => ({ default: m.CMS_DashedDivider }))
      );
      break;

    // Lists
    case 'CMS_List':
      Component = lazy(() => import('../../../components/CMS_List'));
      break;
    case 'CMS_ListItem':
      Component = lazy(() =>
        import('../../../components/CMS_List').then(m => ({ default: m.CMS_ListItem }))
      );
      break;
    case 'CMS_IconList':
      Component = lazy(() =>
        import('../../../components/CMS_List').then(m => ({ default: m.CMS_IconList }))
      );
      break;

    // Typography
    case 'CMS_Title':
      Component = lazy(() => import('../../../components/CMS_Title'));
      break;
    case 'CMS_H1':
      Component = lazy(() =>
        import('../../../components/CMS_Title').then(m => ({ default: m.CMS_H1 }))
      );
      break;
    case 'CMS_H2':
      Component = lazy(() =>
        import('../../../components/CMS_Title').then(m => ({ default: m.CMS_H2 }))
      );
      break;
    case 'CMS_H3':
      Component = lazy(() =>
        import('../../../components/CMS_Title').then(m => ({ default: m.CMS_H3 }))
      );
      break;
    case 'CMS_H4':
      Component = lazy(() =>
        import('../../../components/CMS_Title').then(m => ({ default: m.CMS_H4 }))
      );
      break;
    case 'CMS_Text':
      Component = lazy(() => import('../../../components/CMS_Text'));
      break;
    case 'CMS_Paragraph':
      Component = lazy(() =>
        import('../../../components/CMS_Text').then(m => ({ default: m.CMS_Paragraph }))
      );
      break;
    case 'CMS_Span':
      Component = lazy(() =>
        import('../../../components/CMS_Text').then(m => ({ default: m.CMS_Span }))
      );
      break;
    case 'CMS_Quote':
      Component = lazy(() =>
        import('../../../components/CMS_Text').then(m => ({ default: m.CMS_Quote }))
      );
      break;
    case 'CMS_Code':
      Component = lazy(() =>
        import('../../../components/CMS_Text').then(m => ({ default: m.CMS_Code }))
      );
      break;
    case 'CMS_Label':
      Component = lazy(() =>
        import('../../../components/CMS_Text').then(m => ({ default: m.CMS_Label }))
      );
      break;
    case 'CMS_TextListItem':
      Component = lazy(() =>
        import('../../../components/CMS_Text').then(m => ({ default: m.CMS_ListItem }))
      );
      break;

    // Interactive
    case 'CMS_Button':
      Component = lazy(() => import('../../../components/CMS_Button'));
      break;
    case 'CMS_Badge':
      Component = lazy(() => import('../../../components/CMS_Badge'));
      break;

    // Media
    case 'CMS_Media':
      Component = lazy(() => import('../../../components/CMS_Media'));
      break;
    case 'CMS_Image':
      Component = lazy(() =>
        import('../../../components/CMS_Media').then(m => ({ default: m.CMS_Image }))
      );
      break;
    case 'CMS_Video':
      Component = lazy(() =>
        import('../../../components/CMS_Media').then(m => ({ default: m.CMS_Video }))
      );
      break;
    case 'CMS_YouTube':
      Component = lazy(() =>
        import('../../../components/CMS_Media').then(m => ({ default: m.CMS_YouTube }))
      );
      break;
    case 'CMS_Vimeo':
      Component = lazy(() =>
        import('../../../components/CMS_Media').then(m => ({ default: m.CMS_Vimeo }))
      );
      break;

    // Data
    case 'CMS_Table':
      Component = lazy(() => import('../../../components/CMS_Table'));
      break;

    // Forms
    case 'CMS_Input':
      Component = lazy(() => import('../../../components/CMS_Input'));
      break;
    case 'CMS_Textarea':
      Component = lazy(() =>
        import('../../../components/CMS_Input').then(m => ({ default: m.CMS_Textarea }))
      );
      break;
    case 'CMS_InputGroup':
      Component = lazy(() =>
        import('../../../components/CMS_Input').then(m => ({ default: m.CMS_InputGroup }))
      );
      break;
    case 'CMS_InputAddon':
      Component = lazy(() =>
        import('../../../components/CMS_Input').then(m => ({ default: m.CMS_InputAddon }))
      );
      break;

    default:
      Component = null;
      break;
  }

  if (Component) {
    componentCache[componentType] = Component;
  }

  return Component;
};

// ============================================================================
// Loading Fallback Components
// ============================================================================

/**
 * Skeleton loader for components while they're loading
 */
const ComponentSkeleton = ({ type }) => (
  <div className="animate-pulse">
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
  </div>
);

/**
 * Error fallback for components that fail to load
 */
const ComponentError = ({ type, error }) => (
  <div className="rounded border border-dashed border-red-400 bg-red-50 dark:bg-red-900/20 px-3 py-2 text-sm text-red-700 dark:text-red-300">
    <div className="font-medium">Failed to load: {type}</div>
    <div className="text-xs opacity-75 mt-1">{error?.message || 'Unknown error'}</div>
  </div>
);

// ============================================================================
// Lazy Component Loader with Error Boundary
// ============================================================================

class ComponentErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return <ComponentError type={this.props.type} error={this.state.error} />;
    }
    return this.props.children;
  }
}

/**
 * Dynamically loads a component with Suspense and Error Boundary
 */
const DynamicComponent = ({ componentType, componentProps, children }) => {
  const Component = loadComponent(componentType);

  if (!Component) {
    return <MissingComponent component={componentType} />;
  }

  return (
    <ComponentErrorBoundary type={componentType}>
      <Suspense fallback={<ComponentSkeleton type={componentType} />}>
        <Component {...componentProps}>
          {children}
        </Component>
      </Suspense>
    </ComponentErrorBoundary>
  );
};

// ============================================================================
// Missing Component Fallback
// ============================================================================

const MissingComponent = ({ component }) => (
  <div className="rounded border border-dashed border-orange-400 bg-orange-50 dark:bg-orange-900/20 px-3 py-2 text-sm text-orange-700 dark:text-orange-300">
    <div className="font-medium">Unknown Component</div>
    <div className="text-xs opacity-75 mt-1">{component}</div>
  </div>
);

// ============================================================================
// Main Canvas Area
// ============================================================================

const CanvasArea = ({
  components,
  onDrop,
  onSelect,
  onDelete,
  onUpdate,
  selectedId,
  previewMode,
}) => {
  const isDev = process.env.NODE_ENV !== 'production';
  const [isOver, setIsOver] = useState(false);
  const [canvasSize, setCanvasSize] = useState({
    width: '100%',
    height: '100%',
    minHeight: '100%',
  });

  const canvasRef = useRef(null);

  /**
   * Update canvas size depending on preview mode
   */
  useEffect(() => {
    if (previewMode !== 'desktop') {
      const device = Breakpoints[previewMode.toUpperCase()];

      setCanvasSize({
        width: device.width,
        height: device.height,
        minHeight: device.height,
      });
    } else {
      setCanvasSize({
        width: '100%',
        height: '100%',
        minHeight: '100%',
      });
    }
  }, [previewMode]);

  /**
   * Delete selected component using keyboard
   */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Delete' && selectedId) {
        onDelete(selectedId);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedId, onDelete]);

  /**
   * Handle component updates (for nested changes)
   */
  const handleComponentUpdate = useCallback((updatedComponent) => {
    onUpdate?.(updatedComponent);
  }, [onUpdate]);

  /**
   * Render component dynamically with lazy loading
   */
  const renderComponent = (component) => {
    const { children: componentChildren, ...componentProps } = component;
    const debugProps = isDev ? { debug: true } : {};

    return (
      <ComponentWrapper
        key={component.uid}
        uid={component.uid}
        isSelected={selectedId === component.uid}
        onSelect={onSelect}
        onDelete={onDelete}
      >
        <div className="relative">
          <DynamicComponent
            componentType={component.component}
            componentProps={{
              ...componentProps,
              uid: component.uid,
              ...debugProps,
            }}
          >
            {/* Render children recursively */}
            {componentChildren?.map((child) => renderComponent(child))}
          </DynamicComponent>
        </div>
      </ComponentWrapper>
    );
  };

  /**
   * Handle drop with position
   */
  const handleDrop = (position) => {
    onDrop?.(position);
  };

  return (
    <div className="flex-1 overflow-auto bg-gray-100 dark:bg-gray-950 p-8">
      <div
        className={clsx(
          "flex w-full h-full transition-all duration-300",
          previewMode === "desktop" ? "justify-start" : "justify-center"
        )}
      >
        <DroppableCanvas
          ref={canvasRef}
          onDrop={handleDrop}
          isOver={isOver}
          setIsOver={setIsOver}
          className="w-full h-full"
        >
          <div
            className={clsx(
              "relative transition-all duration-300 bg-white dark:bg-gray-900",
              previewMode !== "desktop" &&
              "border-2 border-gray-300 dark:border-gray-700 rounded-lg shadow-xl overflow-auto"
            )}
            style={{
              width: previewMode === "desktop" ? "100%" : canvasSize.width,
              height: previewMode === "desktop" ? "100%" : canvasSize.height,
              minHeight: previewMode === "desktop" ? "100%" : canvasSize.minHeight,
              maxWidth: previewMode === "desktop" ? "100%" : canvasSize.width,
            }}
          >
            {/* Grid overlay for visual alignment */}
            <div className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: `
                     linear-gradient(to right, rgba(59, 130, 246, 0.05) 1px, transparent 1px),
                     linear-gradient(to bottom, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
                   `,
                backgroundSize: '20px 20px'
              }}
            />

            {/* Canvas content */}
            <div className="relative min-h-full p-4">
              {components.length === 0 ? (
                <div className="flex items-center justify-center h-64 text-gray-400 dark:text-gray-600">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🎨</div>
                    <div className="text-sm">Drag and drop components here</div>
                  </div>
                </div>
              ) : (
                components.map((component) => renderComponent(component))
              )}
            </div>
          </div>
        </DroppableCanvas>
      </div>
    </div>
  );
};

export default CanvasArea;
