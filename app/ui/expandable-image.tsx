'use client';

import { useState, useEffect, useCallback } from 'react';

interface ExpandableImageProps {
  imageSrc: string;
  imageAlt?: string;
  className?: string;
  containerClassName?: string;
}

export default function ExpandableImage({ 
  imageSrc, 
  imageAlt = "", 
  className = "",
  containerClassName = ""
}: ExpandableImageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle escape key press
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && isModalOpen) {
      closeModal();
    }
  }, [isModalOpen]);

  // Handle body overflow and event listeners
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-open');
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, handleKeyDown]);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      {/* Image Container */}
      <div className={`relative h-48 w-full group overflow-hidden ${containerClassName}`}>
        <img 
          src={imageSrc} 
          alt={imageAlt} 
          className={`w-full h-full object-cover ${className}`}
        />
        
        {/* Expand Button */}
        <button 
          className="
            flex absolute top-3 right-3 
            w-10 h-10 
            bg-black/70 backdrop-blur-sm
            border-none rounded-lg 
            items-center justify-center 
            cursor-pointer text-white text-xl
            transition-all duration-300 ease-in-out
            opacity-0 hover:bg-black/90 hover:scale-110
            group-hover:opacity-100
          "
          onClick={openModal}
          title="Expand image"
          type="button"
        >
          ⛶
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="
            fixed inset-0 
            bg-black/90 
            flex items-center justify-center 
            z-50
            opacity-0 invisible
            transition-all duration-300 ease-in-out
            pointer-events-auto
          "
          style={{
            opacity: isModalOpen ? 1 : 0,
            visibility: isModalOpen ? 'visible' : 'hidden'
          }}
          onClick={handleModalClick}
          role="dialog"
          aria-modal="true"
          aria-label="Expanded image view"
        >
          <div 
            className="
              relative 
              max-w-[90%] max-h-[90%] 
              rounded-2xl overflow-hidden 
              shadow-2xl
              transform scale-90
              transition-transform duration-300 ease-in-out
              pointer-events-auto
            "
            style={{
              transform: isModalOpen ? 'scale(1)' : 'scale(0.9)'
            }}
          >
            <img 
              src={imageSrc} 
              alt={imageAlt}
              className="
                w-[90vw] h-auto 
                max-h-[90vh] 
                object-contain
              "
            />
            
            {/* Close Button */}
            <button 
              className="
                absolute top-4 right-4
                w-12 h-12
                bg-black/70 backdrop-blur-sm
                border-none rounded-full
                text-white text-2xl
                cursor-pointer
                flex items-center justify-center
                transition-all duration-300 ease-in-out
                hover:bg-black/90 hover:rotate-90
              "
              onClick={closeModal}
              type="button"
              aria-label="Close expanded image"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
