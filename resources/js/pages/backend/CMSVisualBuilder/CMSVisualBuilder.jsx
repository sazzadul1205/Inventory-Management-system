/**
 * Main CMS Visual Builder Component
 * Integrates all builder components
 */

import React, { useState } from "react";
import clsx from "clsx";
import ComponentPalette from "./ComponentPalette";
import ComponentTree from "./ComponentTree";
import CanvasArea from "./CanvasArea";
import PropertyEditor from "./PropertyEditor";
import PreviewControls from "./PreviewControls";
import JsonModal from "./JsonModal";
import { generateId, updateComponentById, deleteComponentById, findComponentById, addChildById } from "./utils";

const CMSVisualBuilder = () => {
  const [components, setComponents] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [previewMode, setPreviewMode] = useState("desktop");
  const [darkMode, setDarkMode] = useState(false);
  const [isJsonModalOpen, setIsJsonModalOpen] = useState(false);
  const [draggedComponent, setDraggedComponent] = useState(null);
  const [isTreeOpen, setIsTreeOpen] = useState(false);

  const selectedComponent = selectedId
    ? findComponentById(components, selectedId)
    : null;

  const handleDragStart = (component, offset) => {
    setDraggedComponent({
      template: component,
      offset,
    });
  };

  const handleDrop = (position) => {
    if (!draggedComponent) return;

    const newComponent = {
      ...draggedComponent.template.defaultConfig,
      uid: generateId(draggedComponent.template.type.toLowerCase()),
      position,
    };

    setComponents((prev) => {
      if (selectedId) {
        const target = findComponentById(prev, selectedId);
        if (target && Array.isArray(target.children)) {
          return addChildById(prev, selectedId, newComponent);
        }
      }
      return [...prev, newComponent];
    });
    setSelectedId(newComponent.uid);
    setDraggedComponent(null);
  };

  const handleUpdate = (updatedComponent) => {
    setComponents((prev) =>
      updateComponentById(prev, updatedComponent.uid, updatedComponent)
    );
  };

  const handleDelete = (uid) => {
    setComponents((prev) => deleteComponentById(prev, uid));
    if (selectedId === uid) setSelectedId(null);
  };

  const handleExport = () => {
    const json = JSON.stringify(components, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "cms-components.json";
    a.click();

    URL.revokeObjectURL(url);
  };

  const handleImport = (importedComponents) => {
    setComponents(importedComponents);
    setSelectedId(null);
  };

  const handleClear = () => {
    if (window.confirm("Are you sure you want to clear the canvas?")) {
      setComponents([]);
      setSelectedId(null);
    }
  };

  return (
    <div
      className={clsx(
        "h-screen flex flex-col bg-gray-100 dark:bg-gray-950",
        darkMode && "dark"
      )}
    >
      {/* Top Controls */}
      <PreviewControls
        previewMode={previewMode}
        onPreviewModeChange={setPreviewMode}
        darkMode={darkMode}
        onDarkModeToggle={() => setDarkMode(!darkMode)}
        onExport={handleExport}
        onImport={() => setIsJsonModalOpen(true)}
        onClear={handleClear}
      />

      {/* Builder Layout */}
      <div className="flex flex-1 min-h-0">
        {/* Left Palette */}
        <ComponentPalette onDragStart={handleDragStart} />

        {/* Canvas */}
        <div className="flex-1 min-w-0 relative">
          <div className="absolute top-2 left-2 z-30 flex items-center gap-2">
            <button
              type="button"
              onClick={() => setIsTreeOpen((prev) => !prev)}
              className="px-3 py-1 text-xs rounded-md bg-white/90 dark:bg-gray-900/90 border border-gray-300 dark:border-gray-700 shadow"
            >
              {isTreeOpen ? "Hide Structure" : "Show Structure"}
            </button>
          </div>

          {isTreeOpen && (
            <div className="absolute top-10 left-2 bottom-2 z-20">
              <ComponentTree
                components={components}
                selectedId={selectedId}
                onSelect={setSelectedId}
                onClose={() => setIsTreeOpen(false)}
                className="h-full"
              />
            </div>
          )}

          <CanvasArea
            components={components}
            onDrop={handleDrop}
            onSelect={setSelectedId}
            onDelete={handleDelete}
            selectedId={selectedId}
            previewMode={previewMode}
            darkMode={darkMode}
          />
        </div>

        {/* Right Property Editor */}
        <PropertyEditor
          component={selectedComponent}
          onUpdate={handleUpdate}
          onClose={() => setSelectedId(null)}
        />
      </div>

      {/* JSON Import Modal */}
      <JsonModal
        isOpen={isJsonModalOpen}
        onClose={() => setIsJsonModalOpen(false)}
        onImport={handleImport}
        initialJson={JSON.stringify(components, null, 2)}
      />
    </div>
  );
};

export default CMSVisualBuilder;
