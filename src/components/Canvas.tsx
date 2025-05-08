
import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

const Canvas = () => {
  const [zoom, setZoom] = useState(100);

  const handleZoomIn = () => {
    setZoom(Math.min(zoom + 10, 200));
  };

  const handleZoomOut = () => {
    setZoom(Math.max(zoom - 10, 50));
  };

  return (
    <div className="flex-1 bg-gray-50 overflow-hidden relative">
      <div className="absolute inset-0 p-8 overflow-auto">
        <div 
          className="bg-white shadow-md mx-auto" 
          style={{ 
            width: '1200px', 
            height: '800px', 
            transform: `scale(${zoom / 100})`,
            transformOrigin: 'center',
            transition: 'transform 0.2s',
          }}
        >
          <div className="p-8">
            {/* Sample design elements */}
            <div className="mb-8">
              <div className="bg-blue-600 h-16 rounded-md flex items-center px-6">
                <div className="text-white font-bold text-xl">Brand Logo</div>
                <div className="ml-auto flex gap-4">
                  <div className="text-white">Home</div>
                  <div className="text-white">About</div>
                  <div className="text-white">Contact</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/5"></div>
              </div>
              <div className="bg-gray-200 h-48 rounded-md"></div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="border border-gray-200 p-4 rounded-md">
                <div className="h-24 bg-blue-100 rounded-md mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6 mt-1"></div>
              </div>
              <div className="border border-gray-200 p-4 rounded-md">
                <div className="h-24 bg-green-100 rounded-md mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6 mt-1"></div>
              </div>
              <div className="border border-gray-200 p-4 rounded-md">
                <div className="h-24 bg-purple-100 rounded-md mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-3 bg-gray-200 rounded w-5/6 mt-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Zoom controls */}
      <div className="absolute bottom-4 right-4 flex items-center bg-white rounded-md border border-gray-200 overflow-hidden">
        <button 
          onClick={handleZoomOut}
          className="p-2 hover:bg-gray-100"
        >
          <Minus size={14} />
        </button>
        <div className="px-2 text-xs font-medium border-l border-r border-gray-200">
          {zoom}%
        </div>
        <button 
          onClick={handleZoomIn}
          className="p-2 hover:bg-gray-100"
        >
          <Plus size={14} />
        </button>
      </div>
    </div>
  );
};

export default Canvas;
