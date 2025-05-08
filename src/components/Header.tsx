
import React from 'react';
import { ChevronDown, Play, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="h-12 border-b border-gray-200 bg-white flex items-center px-4 justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue-600 rounded-md flex items-center justify-center">
            <svg 
              viewBox="0 0 24 24" 
              className="w-4 h-4 text-white"
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
            >
              <path d="M12 12L19 12M19 12L16 9M19 12L16 15" />
              <path d="M5 12H5.01" strokeLinecap="round" />
            </svg>
          </div>
          <span className="font-medium">Figma</span>
        </div>

        <div className="h-4 w-px bg-gray-200"></div>

        <div className="flex items-center gap-1 text-sm">
          <span className="font-medium">File</span>
          <ChevronDown size={14} />
        </div>

        <div className="flex items-center gap-1 text-sm">
          <span className="font-medium">Edit</span>
          <ChevronDown size={14} />
        </div>

        <div className="flex items-center gap-1 text-sm">
          <span className="font-medium">View</span>
          <ChevronDown size={14} />
        </div>

        <div className="flex items-center gap-1 text-sm">
          <span className="font-medium">Object</span>
          <ChevronDown size={14} />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button size="sm" variant="outline" className="gap-1">
          <Share2 size={14} />
          Share
        </Button>
        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 gap-1">
          <Play size={14} />
          Present
        </Button>
      </div>
    </header>
  );
};

export default Header;
