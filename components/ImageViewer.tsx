import React, { useEffect, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, ZoomIn, ZoomOut, Move } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  title: string;
}

const ImageViewer: React.FC<Props> = ({ isOpen, onClose, imageUrl, title }) => {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  
  // Refs for gesture handling
  const lastTouchRef = useRef<{ dist: number } | null>(null);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);

  // Reset state when opening
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setScale(1);
      setPosition({ x: 0, y: 0 });
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Zoom controls
  const handleZoomIn = () => setScale(s => Math.min(s * 1.2, 5));
  const handleZoomOut = () => {
    setScale(s => {
      const newScale = s / 1.2;
      if (newScale <= 1) setPosition({ x: 0, y: 0 }); // Reset pos if zooming out fully
      return Math.max(newScale, 1);
    });
  };

  // --- Touch Event Handlers (Pinch & Pan) ---
  
  const onTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      // Pinch Start
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      const dist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
      lastTouchRef.current = { dist };
    } else if (e.touches.length === 1 && scale > 1) {
      // Pan Start (only if zoomed in)
      setIsDragging(true);
      lastPosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const onTouchMove = (e: React.TouchEvent) => {
    // Prevent default to stop scrolling the page behind the modal
    // Note: React synthetic events might require passive: false in native addEventListener to truly preventDefault, 
    // but often overflow: hidden on body handles the background scroll.
    
    if (e.touches.length === 2 && lastTouchRef.current) {
      // Pinching
      const t1 = e.touches[0];
      const t2 = e.touches[1];
      const dist = Math.hypot(t1.clientX - t2.clientX, t1.clientY - t2.clientY);
      
      const scaleFactor = dist / lastTouchRef.current.dist;
      const newScale = Math.min(Math.max(scale * scaleFactor, 1), 5); // Clamp scale 1x to 5x
      
      setScale(newScale);
      lastTouchRef.current = { dist };
    } else if (e.touches.length === 1 && isDragging && lastPosRef.current) {
      // Panning
      const dx = e.touches[0].clientX - lastPosRef.current.x;
      const dy = e.touches[0].clientY - lastPosRef.current.y;
      
      setPosition(prev => ({ x: prev.x + dx, y: prev.y + dy }));
      lastPosRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    }
  };

  const onTouchEnd = () => {
    setIsDragging(false);
    lastTouchRef.current = null;
    lastPosRef.current = null;
    
    // Snap back to center if zoomed out (safety check)
    if (scale <= 1) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  };

  // --- Mouse Event Handlers (Desktop) ---

  const onMouseDown = (e: React.MouseEvent) => {
    if (scale > 1) {
      setIsDragging(true);
      lastPosRef.current = { x: e.clientX, y: e.clientY };
      e.preventDefault();
    }
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (isDragging && lastPosRef.current) {
      const dx = e.clientX - lastPosRef.current.x;
      const dy = e.clientY - lastPosRef.current.y;
      setPosition(prev => ({ x: prev.x + dx, y: prev.y + dy }));
      lastPosRef.current = { x: e.clientX, y: e.clientY };
    }
  };

  const onMouseUp = () => {
    setIsDragging(false);
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex flex-col bg-black/95 backdrop-blur-md animate-in fade-in duration-200">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-4 bg-black/50 border-b border-white/10 shrink-0 z-50">
        <h3 className="text-white font-medium truncate pr-4 text-sm md:text-base max-w-[50%]">
          {title}
        </h3>
        <div className="flex items-center gap-2 md:gap-4">
           <div className="flex bg-white/10 rounded-lg p-1 mr-2">
              <button 
                onClick={handleZoomOut}
                className="p-2 text-white hover:bg-white/20 rounded-md transition-colors"
                disabled={scale <= 1}
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <div className="w-px bg-white/20 mx-1 my-1"></div>
              <button 
                onClick={handleZoomIn}
                className="p-2 text-white hover:bg-white/20 rounded-md transition-colors"
                disabled={scale >= 5}
              >
                <ZoomIn className="w-5 h-5" />
              </button>
           </div>
          <button 
            onClick={onClose}
            className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors active:scale-95"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Image Container */}
      <div 
        className="flex-1 overflow-hidden relative flex items-center justify-center p-0 touch-none"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onClick={(e) => {
           // Close if clicking strictly on background (not while dragging)
           if (!isDragging && e.target === e.currentTarget) onClose();
        }}
      >
         {scale === 1 && (
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/60 text-white/80 text-xs px-4 py-2 rounded-full pointer-events-none z-10 backdrop-blur-sm border border-white/10 animate-pulse">
                Pinch to Zoom
            </div>
         )}

        <img 
          src={imageUrl} 
          alt={title} 
          className="transition-transform duration-75 ease-out select-none"
          style={{ 
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`, 
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
            cursor: scale > 1 ? 'grab' : 'default'
          }}
          draggable={false}
        />
      </div>
    </div>,
    document.body
  );
};

export default ImageViewer;