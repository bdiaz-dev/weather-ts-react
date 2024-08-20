import { useState, useEffect, useRef } from 'react';

export function useMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();
  const buttonRef = useRef();
  const detailsRef = useRef();

  const handleOpenMenu = () => {
    menuRef.current.classList.toggle('openMenu');
    buttonRef.current.classList.toggle('open');
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (!isMenuOpen) {
      detailsRef.current.open = false;
    }
  }, [isMenuOpen]);

  return {
    isMenuOpen, menuRef, buttonRef, detailsRef, handleOpenMenu,
  };
}
