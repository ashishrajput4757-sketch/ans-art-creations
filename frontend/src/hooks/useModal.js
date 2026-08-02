import { useState, useEffect, useCallback } from 'react';

/**
 * useModal — manages quick-view modal state.
 * Tracks which item is open: { title, desc, img } or null (closed).
 *
 * Returns: { modalData, openModal, closeModal, isOpen }
 */
function useModal() {
  const [modalData, setModalData] = useState(null);
  const isOpen = modalData !== null;

  const openModal = useCallback((data) => setModalData(data), []);
  const closeModal = useCallback(() => setModalData(null), []);

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('locked');
    } else {
      document.body.classList.remove('locked');
    }
    return () => document.body.classList.remove('locked');
  }, [isOpen]);

  // Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') closeModal(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [closeModal]);

  return { modalData, openModal, closeModal, isOpen };
}

export default useModal;
