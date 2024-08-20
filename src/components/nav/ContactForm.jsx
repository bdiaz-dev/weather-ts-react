import { formLabels, placeholders } from '@libs/formText'
import { useLanguage } from '@context/LanguageContext'
import { useButtonTitle } from '@hooks/contactForm/useButtonTitle'
import { useFormState } from '@hooks/contactForm/useFormState'
import { useRef } from 'react'
import { useFormSend } from '@hooks/contactForm/useFormSend'

export default function ContactForm ({ detailsRef }) {
  const { lang } = useLanguage()
  const { formData, buttonDisabled, handleInputChange } = useFormState()
  const sendTitle = useButtonTitle(lang, buttonDisabled)
  const emailRef = useRef()
  const handleSend = useFormSend(emailRef, formData, lang)

  return (
    <details ref={detailsRef} id='contactForm'>
      <summary>{formLabels[lang].title}</summary>
      <form onSubmit={handleSend}>
        <label>{formLabels[lang].name}</label>
        <input
          type='text'
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          placeholder={placeholders.name}
        />

        <label>{formLabels[lang].born}</label>
        <input
          type='date'
          value={formData.birthdate}
          onChange={(e) => handleInputChange('birthdate', e.target.value)}
        />

        <label>{formLabels[lang].city}</label>
        <input
          type='text'
          value={formData.city}
          onChange={(e) => handleInputChange('city', e.target.value)}
          placeholder={placeholders.city}
        />

        <label>{formLabels[lang].email}</label>
        <input
          type='email'
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          placeholder={placeholders.email}
          ref={emailRef}
        />

        <label>{formLabels[lang].phone}</label>
        <input
          type='text'
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          placeholder={placeholders.phone}
        />

        <button
          disabled={buttonDisabled}
          style={{ borderColor: buttonDisabled ? '#1a1a1a' : 'white' }}
          title={sendTitle}
          className='formButton'
        >
          {formLabels[lang].button}
        </button>
      </form>
    </details>
  )
}
