import {
  useState, useEffect, useRef, RefObject,
} from 'react';

export function useMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef: RefObject<HTMLElement> = useRef();
  const buttonRef: React.RefObject<HTMLButtonElement> = useRef();
  const detailsRef: RefObject<HTMLDetailsElement> = useRef();

  const handleOpenMenu = () => {
    if (menuRef.current) { menuRef.current.classList.toggle('openMenu'); }
    if (buttonRef.current) { buttonRef.current.classList.toggle('open'); }
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (!isMenuOpen && detailsRef.current) {
      detailsRef.current.open = false;
    }
  }, [isMenuOpen]);

  return {
    isMenuOpen, menuRef, buttonRef, detailsRef, handleOpenMenu,
  };
}
