/**
 * Component Wrapper with selection and delete functionality
 */

import clsx from 'clsx';
import React from 'react';

const ComponentWrapper = ({
  uid,
  isSelected,
  onSelect,
  onDelete,
  children,
  className = '',
}) => {
  const handleClick = (e) => {
    e.stopPropagation();
    onSelect(uid);
  };

  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(uid);
  };

  return (
    <div
      onClick={handleClick}
      className={clsx(
        'relative transition-all group',
        isSelected && 'ring-2 ring-blue-500 ring-offset-2',
        className
      )}
    >
      {children}
      
      {/* Selection indicator */}
      {isSelected && (
        <>
          <div className="absolute -top-3 -right-3 flex gap-1">
            <button
              onClick={handleDelete}
              className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs hover:bg-red-600 shadow-lg"
              title="Delete (Delete key)"
            >
              X
            </button>
          </div>
          
          {/* Resize handles (optional) */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-blue-500" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-blue-500" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-blue-500" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-blue-500" />
        </>
      )}
      
      {/* Hover indicator */}
      {!isSelected && (
        <div className="absolute inset-0 ring-1 ring-blue-200 ring-opacity-0 group-hover:ring-opacity-100 transition-all pointer-events-none" />
      )}
    </div>
  );
};

export default ComponentWrapper;
