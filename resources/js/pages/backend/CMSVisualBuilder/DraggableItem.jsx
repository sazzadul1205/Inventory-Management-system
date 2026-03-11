/**
 * Custom Draggable Item Component
 * No external dependencies - pure React drag and drop
 */

import React, { useRef, useEffect, useState } from 'react';
import clsx from 'clsx';

const DraggableItem = ({
  component,
  onDragStart,
  onDragEnd,
  children,
  className = '',
}) => {
  const elementRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleDragStart = (e) => {
      e.dataTransfer?.setData('text/plain', '');

      const rect = element.getBoundingClientRect();
      dragStartPos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };

      setIsDragging(true);

      // Create drag image
      const clone = element.cloneNode(true);
      clone.style.position = 'absolute';
      clone.style.top = '-1000px';
      clone.style.opacity = '0.8';
      clone.style.width = `${rect.width}px`;
      document.body.appendChild(clone);

      e.dataTransfer?.setDragImage(clone, dragStartPos.current.x, dragStartPos.current.y);

      setTimeout(() => {
        document.body.removeChild(clone);
      }, 0);

      onDragStart?.(component, {
        offsetX: dragStartPos.current.x,
        offsetY: dragStartPos.current.y,
      });
    };

    const handleDragEnd = (e) => {
      setIsDragging(false);
      onDragEnd?.();
    };

    element.setAttribute('draggable', 'true');
    element.addEventListener('dragstart', handleDragStart);
    element.addEventListener('dragend', handleDragEnd);

    return () => {
      element.removeEventListener('dragstart', handleDragStart);
      element.removeEventListener('dragend', handleDragEnd);
    };
  }, [component, onDragStart, onDragEnd]);

  return (
    <div
      ref={elementRef}
      className={clsx(
        'cursor-move select-none',
        isDragging && 'opacity-50',
        className
      )}
    >
      {children}
    </div>
  );
};

export default DraggableItem;
