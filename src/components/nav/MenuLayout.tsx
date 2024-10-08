import { useMenu } from '../../hooks/menu/useMenu';
import LangButtons from '../interface/LangButtons';
import MenuButton from './MenuButton';
import Nav from './Nav';

export default function MenuLayout() {
  const {
    menuRef, buttonRef, detailsRef, handleOpenMenu,
  } = useMenu();

  return (
    <>
      <LangButtons />
      <MenuButton openMenu={handleOpenMenu} buttonRef={buttonRef} />
      <Nav handleOpenMenu={handleOpenMenu} menuRef={menuRef} detailsRef={detailsRef} />
    </>
  );
}
