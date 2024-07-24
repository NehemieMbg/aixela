import useClickOutside from '@/hooks/useClickOutside';
import React, { useEffect, useRef } from 'react';
import BackdropBis from '../reusables/BackdropBis';
import { cn } from '@/lib/utils';

/**
 * Video modal component
 * @param isOpen - the state of the modal
 * @param closeModal - the function to close the modal
 * @param children - the children of the modal
 * @returns the video modal component
 */
const VideoModal = ({
  isOpen,
  closeModal,
  children,
}: {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  useClickOutside(modalRef, () => closeModal());

  // Scroll to top when the notification panel is opened
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  }, [isOpen]);

  return (
    <>
      <BackdropBis isActive={isOpen} zIndex={200} />

      <div
        className={cn(
          'fixed top-0 w-screen h-screen z-[210] pt-[160px] p-side',
          {
            hidden: !isOpen,
          }
        )}
      >
        <div ref={modalRef} className="max-w-[900px] h-max mx-auto">
          {children}
        </div>
      </div>
    </>
  );
};
export default VideoModal;
