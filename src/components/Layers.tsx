
import React from 'react';
import { ChevronDown, Eye, Lock } from 'lucide-react';

const Layers = () => {
  const layers = [
    { name: 'Page 1', type: 'page', expanded: true },
    { name: 'Frame 1', type: 'frame', indent: 1 },
    { name: 'Header', type: 'group', indent: 2 },
    { name: 'Logo', type: 'component', indent: 3 },
    { name: 'Navigation', type: 'group', indent: 3 },
    { name: 'Content', type: 'group', indent: 2 },
    { name: 'Text Block', type: 'text', indent: 3 },
    { name: 'Image', type: 'image', indent: 3 },
    { name: 'Footer', type: 'group', indent: 2 },
  ];

  const getIconForLayerType = (type: string) => {
    switch (type) {
      case 'page':
        return <div className="w-3 h-3 rounded-sm border border-gray-400"></div>;
      case 'frame':
        return <div className="w-3 h-3 rounded-sm border border-blue-400 bg-blue-50"></div>;
      case 'group':
        return <div className="w-3 h-3 rounded border border-gray-400"></div>;
      case 'component':
        return <div className="w-3 h-3 rounded-full border border-purple-400 bg-purple-50"></div>;
      case 'text':
        return <div className="w-3 h-3 rounded-sm border border-gray-400 text-xs flex items-center justify-center">T</div>;
      case 'image':
        return <div className="w-3 h-3 rounded-sm border border-gray-400 bg-gray-50"></div>;
      default:
        return <div className="w-3 h-3 rounded-sm border border-gray-400"></div>;
    }
  };

  return (
    <div className="h-1/2 border-b border-gray-200">
      <div className="p-2 border-b border-gray-200 flex items-center justify-between">
        <span className="font-medium text-sm">Layers</span>
        <button className="p-1 rounded hover:bg-gray-100">
          <ChevronDown size={14} />
        </button>
      </div>
      <div className="p-1 h-[calc(100%-32px)] overflow-y-auto">
        {layers.map((layer, index) => (
          <div 
            key={index} 
            className="flex items-center px-2 py-1 rounded hover:bg-gray-100 text-xs gap-1"
            style={{ paddingLeft: `${(layer.indent || 0) * 12 + 8}px` }}
          >
            {getIconForLayerType(layer.type)}
            <span className="flex-grow truncate">{layer.name}</span>
            <div className="flex items-center opacity-0 hover:opacity-100">
              <button className="p-0.5 rounded hover:bg-gray-200">
                <Eye size={12} />
              </button>
              <button className="p-0.5 rounded hover:bg-gray-200">
                <Lock size={12} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layers;
