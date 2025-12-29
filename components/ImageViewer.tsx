import React, { useEffect, useState } from 'react';
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
  const [isDragging, setIsDragging] = useState(false);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setScale(1); // Reset scale on close
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleZoom = () => {
    setScale(prev => (prev === 1 ? 2.5 : 1));
  };

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex flex-col bg-black/95 backdrop-blur-md animate-in fade-in duration-200">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-4 bg-black/50 border-b border-white/10 shrink-0 z-50">
        <h3 className="text-white font-medium truncate pr-4 text-sm md:text-base max-w-[70%]">
          {title}
        </h3>
        <div className="flex items-center gap-3">
            <button 
            onClick={toggleZoom}
            className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors active:scale-95"
            aria-label="Toggle Zoom"
          >
            {scale === 1 ? <ZoomIn className="w-5 h-5" /> : <ZoomOut className="w-5 h-5" />}
          </button>
          <button 
            onClick={onClose}
            className="p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors active:scale-95"
            aria-label="Close Viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Image Container */}
      <div 
        className="flex-1 overflow-auto relative flex items-center justify-center p-0 md:p-8 touch-pan-x touch-pan-y"
        onClick={(e) => {
            // Close if clicking background (but not image)
            if (e.target === e.currentTarget) onClose();
        }}
      >
         {/* Hint Overlay (Only shows briefly or if scale is 1) */}
         {scale === 1 && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/60 text-white/80 text-xs px-3 py-1.5 rounded-full pointer-events-none z-10 backdrop-blur-sm flex items-center gap-1.5 border border-white/10">
                <Move className="w-3 h-3" /> Pan & Pinch to Zoom
            </div>
         )}

        <img 
          src={imageUrl} 
          alt={title} 
          className="transition-transform duration-300 ease-out origin-center select-none"
          style={{ 
            transform: `scale(${scale})`, 
            maxWidth: scale === 1 ? '100%' : 'none',
            maxHeight: scale === 1 ? '100%' : 'none',
            width: scale === 1 ? 'auto' : 'auto',
            height: scale === 1 ? 'auto' : 'auto',
            cursor: scale === 1 ? 'zoom-in' : 'grab'
          }}
          onClick={(e) => {
              e.stopPropagation();
              toggleZoom();
          }}
          draggable={false}
        />
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default ImageViewer;