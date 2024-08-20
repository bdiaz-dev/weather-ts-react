import Cities from './Cities'
import ContactForm from './ContactForm'

export default function Nav ({ menuRef, handleOpenMenu, detailsRef }) {
  return (
    <nav ref={menuRef}>
      <Cities closeMenu={handleOpenMenu} />
      <hr style={{ width: '85%' }} />
      <ContactForm detailsRef={detailsRef} />

    </nav>
  )
}
