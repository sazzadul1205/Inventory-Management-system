// pages/backend/CustomSectionBuilder/ComponentList/ComponentList.jsx

// Components
import { CMS_Container, CMS_Grid, CMS_Flex, CMS_Section, variants } from '../../../../components/CMS_Container';
import { Grid, Layers, Layout, Box, Palette } from 'lucide-react';

const getIcon = (name) => {
  switch (name) {
    case 'Container': return <Box size={18} className="text-blue-500" />;
    case 'Grid': return <Grid size={18} className="text-purple-500" />;
    case 'Flex': return <Layout size={18} className="text-green-500" />;
    case 'Section': return <Layers size={18} className="text-orange-500" />;
    default: return <Box size={18} className="text-gray-500" />;
  }
};

export const COMPONENTS = [
  { name: 'Container', component: CMS_Container, description: 'Highly customizable container', icon: 'Box' },
  { name: 'Grid', component: CMS_Grid, description: 'Grid layout container', icon: 'Grid' },
  { name: 'Flex', component: CMS_Flex, description: 'Flex layout container', icon: 'Layout' },
  { name: 'Section', component: CMS_Section, description: 'Section wrapper with spacing', icon: 'Layers' },
];

const ComponentList = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Components</h3>
        <div className="space-y-2">
          {COMPONENTS.map((comp) => (
            <div
              key={comp.name}
              className="group relative cursor-grab active:cursor-grabbing"
              draggable
              onDragStart={(e) => {
                e.dataTransfer.setData('componentName', comp.name);
                e.dataTransfer.setData('componentType', comp.component.displayName || comp.name);
                e.dataTransfer.effectAllowed = 'copy';
              }}
            >
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200 group-hover:scale-[1.02]">
                <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-blue-50 transition-colors">
                  {getIcon(comp.name)}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-gray-700">{comp.name}</p>
                  <p className="text-xs text-gray-400">{comp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
          <Palette size={16} />
          Variants
        </h3>
        <div className="space-y-2">
          {Object.keys(variants).map((variant) => (
            <div
              key={variant}
              className="group cursor-grab active:cursor-grabbing"
              draggable
              onDragStart={(e) => {
                e.dataTransfer.setData('variantName', variant);
                e.dataTransfer.effectAllowed = 'copy';
              }}
            >
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-green-300 hover:shadow-md transition-all duration-200">
                <div className="w-8 h-8 bg-linear-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center">
                  <span className="text-xs font-bold text-green-600 uppercase">
                    {variant.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-gray-700 capitalize">{variant}</p>
                  <p className="text-xs text-gray-400">Predefined {variant} layout</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComponentList;