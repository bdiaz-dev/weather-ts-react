import { useLanguage } from '@context/LanguageContext'
export default function MenuButton ({ openMenu, buttonRef }) {
  const { lang } = useLanguage()
  const ariaLabel = {
    en: 'Toggle Menu',
    es: 'Mostrar/Ocultar Menú'
  }
  return (
    <button
      id='menuButton'
      aria-label={ariaLabel[lang]}
      ref={buttonRef}
      onClick={openMenu}
    >
      <span />
      <span />
      <span />
    </button>
  )
}
