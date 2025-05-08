
import React from 'react';
import { Layers, Move, Type, Square, Circle, Pen, Image, MessageSquare } from 'lucide-react';

const LeftSidebar = () => {
  const tools = [
    { icon: <Move size={20} />, name: 'Move' },
    { icon: <Type size={20} />, name: 'Text' },
    { icon: <Square size={20} />, name: 'Rectangle' },
    { icon: <Circle size={20} />, name: 'Ellipse' },
    { icon: <Pen size={20} />, name: 'Pen' },
    { icon: <Image size={20} />, name: 'Image' },
    { icon: <MessageSquare size={20} />, name: 'Comments' },
  ];

  return (
    <div className="w-14 border-r border-gray-200 bg-white h-full flex flex-col items-center py-4">
      <div className="flex flex-col items-center gap-4">
        <button className="w-10 h-10 rounded-md bg-blue-100 text-blue-600 flex items-center justify-center">
          <Layers size={20} />
        </button>

        <div className="h-px w-8 bg-gray-200 my-1"></div>

        {tools.map((tool, index) => (
          <button
            key={index}
            className="w-10 h-10 rounded-md hover:bg-gray-100 text-gray-600 flex items-center justify-center"
            title={tool.name}
          >
            {tool.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LeftSidebar;
