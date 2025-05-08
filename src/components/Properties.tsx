
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Slider } from '@/components/ui/slider';

const ColorSwatch = ({ color }: { color: string }) => (
  <div 
    className="w-5 h-5 rounded border border-gray-300" 
    style={{ backgroundColor: color }}
  ></div>
);

const Properties = () => {
  return (
    <div className="h-1/2 overflow-y-auto">
      <div className="p-2 border-b border-gray-200 flex items-center justify-between">
        <span className="font-medium text-sm">Design</span>
        <button className="p-1 rounded hover:bg-gray-100">
          <ChevronDown size={14} />
        </button>
      </div>

      <div className="p-3 space-y-4">
        {/* Layout section */}
        <div className="space-y-2">
          <h3 className="text-xs font-medium text-gray-500">Layout</h3>
          <div className="grid grid-cols-2 gap-2">
            <div className="space-y-1">
              <label className="text-xs text-gray-500">X</label>
              <div className="flex h-8 w-full rounded-md border border-input bg-transparent px-3 py-1">
                <input
                  className="w-full text-xs bg-transparent outline-none"
                  value="200"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs text-gray-500">Y</label>
              <div className="flex h-8 w-full rounded-md border border-input bg-transparent px-3 py-1">
                <input
                  className="w-full text-xs bg-transparent outline-none"
                  value="150"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs text-gray-500">W</label>
              <div className="flex h-8 w-full rounded-md border border-input bg-transparent px-3 py-1">
                <input
                  className="w-full text-xs bg-transparent outline-none"
                  value="400"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label className="text-xs text-gray-500">H</label>
              <div className="flex h-8 w-full rounded-md border border-input bg-transparent px-3 py-1">
                <input
                  className="w-full text-xs bg-transparent outline-none"
                  value="300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Fill section */}
        <div className="space-y-2">
          <h3 className="text-xs font-medium text-gray-500">Fill</h3>
          <div className="flex items-center gap-2">
            <ColorSwatch color="#3B82F6" />
            <span className="text-xs">#3B82F6</span>
          </div>
        </div>

        {/* Stroke section */}
        <div className="space-y-2">
          <h3 className="text-xs font-medium text-gray-500">Stroke</h3>
          <div className="flex items-center gap-2">
            <ColorSwatch color="#E5E7EB" />
            <span className="text-xs">#E5E7EB</span>
            <div className="flex h-6 w-12 rounded-md border border-input bg-transparent px-2 ml-auto">
              <input
                className="w-full text-xs bg-transparent outline-none"
                value="1"
              />
            </div>
          </div>
        </div>

        {/* Effects section */}
        <div className="space-y-2">
          <h3 className="text-xs font-medium text-gray-500">Effects</h3>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs">Opacity</span>
              <span className="text-xs">100%</span>
            </div>
            <Slider defaultValue={[100]} max={100} step={1} className="w-full" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-xs">Blur</span>
              <span className="text-xs">0px</span>
            </div>
            <Slider defaultValue={[0]} max={100} step={1} className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
