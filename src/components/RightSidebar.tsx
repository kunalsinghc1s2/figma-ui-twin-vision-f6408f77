
import React from 'react';
import Layers from './Layers';
import Properties from './Properties';

const RightSidebar = () => {
  return (
    <div className="w-64 border-l border-gray-200 bg-white h-full flex flex-col">
      <Layers />
      <Properties />
    </div>
  );
};

export default RightSidebar;
