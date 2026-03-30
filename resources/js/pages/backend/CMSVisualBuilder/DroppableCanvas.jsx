/**
 * Custom Droppable Canvas Component
 * Pure React drag and drop implementation
 */


import { clsx } from 'clsx';
import React, { useRef, useEffect } from 'react';

const DroppableCanvas = ({
  onDrop,
  onDragOver,
  children,
  className = '',
  isOver = false,
  setIsOver,
}) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleDragOver = (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';

      const rect = element.getBoundingClientRect();
      const position = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };

      setIsOver?.(true);
      onDragOver?.(position);
    };

    const handleDragLeave = (e) => {
      e.preventDefault();
      setIsOver?.(false);
    };

    const handleDrop = (e) => {
      e.preventDefault();
      setIsOver?.(false);

      const rect = element.getBoundingClientRect();
      const dropPosition = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };

      onDrop?.(dropPosition);
    };

    element.addEventListener('dragover', handleDragOver);
    element.addEventListener('dragleave', handleDragLeave);
    element.addEventListener('drop', handleDrop);

    return () => {
      element.removeEventListener('dragover', handleDragOver);
      element.removeEventListener('dragleave', handleDragLeave);
      element.removeEventListener('drop', handleDrop);
    };
  }, [onDrop, onDragOver, setIsOver]);

  return (
    <div
      ref={elementRef}
      className={clsx(
        'transition-colors duration-200',
        isOver && 'bg-blue-50 dark:bg-blue-900/20',
        className
      )}
    >
      {children}
    </div>
  );
};

export default DroppableCanvas;