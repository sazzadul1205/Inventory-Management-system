// pages/backend/CustomSectionBuilder/CustomSectionBuilder.jsx

// Components
import ComponentList from './ComponentList/ComponentList';
import VisualEditor from './VisualEditor/VisualEditor';
import AttributeEditor from './AttributeEditor.jsx/AttributeEditor';
import { Save, Eye, Code, Settings } from 'lucide-react';

const CustomSectionBuilder = () => {
  return (
    <div className="h-screen flex flex-col bg-linear-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
            <Settings size={18} className="text-white" />
          </div>
          <h1 className="text-xl font-bold bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Custom Section Builder
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2">
            <Eye size={18} />
            Preview
          </button>
          <button className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors flex items-center gap-2">
            <Code size={18} />
            Code
          </button>
          <button className="px-4 py-2 bg-linear-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-shadow flex items-center gap-2">
            <Save size={18} />
            Save Section
          </button>
        </div>
      </header>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden gap-4 p-4">
        {/* Component List Sidebar */}
        <aside className="w-72 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
          <div className="p-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-700">Component Library</h2>
            <p className="text-xs text-gray-400 mt-1">Drag components to canvas</p>
          </div>
          <div className="flex-1 overflow-y-auto p-4">
            <ComponentList />
          </div>
        </aside>

        {/* Visual Editor Area */}
        <main className="flex-1 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
          <div className="p-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-700">Visual Editor</h2>
          </div>
          <div className="flex-1 overflow-auto p-4">
            <VisualEditor />
          </div>
        </main>

        {/* Attribute Editor Sidebar */}
        <aside className="w-80 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
          <div className="p-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-700">Properties</h2>
            <p className="text-xs text-gray-400 mt-1">Edit component attributes</p>
          </div>
          <div className="flex-1 overflow-y-auto">
            <AttributeEditor />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CustomSectionBuilder;