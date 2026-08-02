import { useState, useEffect, useCallback } from 'react';

/**
 * useMobileMenu — manages mobile menu open/close state and
 * side effects (body scroll-lock, Escape key to close).
 *
 * Returns: { isOpen, open, close, toggle }
 */
function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);

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
    const handler = (e) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [close]);

  return { isOpen, open, close, toggle };
}

export default useMobileMenu;
