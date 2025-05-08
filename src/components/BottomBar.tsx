
import React from 'react';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';

const BottomBar = () => {
  return (
    <div className="h-8 border-t border-gray-200 bg-white flex items-center px-4 text-xs text-gray-600">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          <button className="p-0.5 rounded hover:bg-gray-100">
            <ChevronsLeft size={12} />
          </button>
          <span>Page 1</span>
          <button className="p-0.5 rounded hover:bg-gray-100">
            <ChevronsRight size={12} />
          </button>
        </div>
        <div className="h-3 w-px bg-gray-300 mx-1"></div>
        <span>Frame 1</span>
        <div className="h-3 w-px bg-gray-300 mx-1"></div>
        <span>1200 x 800</span>
      </div>
      <div className="ml-auto">
        <span>Main • Edited Just Now</span>
      </div>
    </div>
  );
};

export default BottomBar;
