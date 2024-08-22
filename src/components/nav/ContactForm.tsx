import { useRef } from 'react';
import { useFormState } from '../../hooks/contactForm/useFormState';
import { useFormSend } from '../../hooks/contactForm/useFormSend';
import { formLabels, placeholders } from '../../libs/formText';
import { useLanguage } from '../../context/LanguageContext';
import { useButtonTitle } from '../../hooks/contactForm/useButtonTitle';

interface ContactFormType {detailsRef: React.RefObject<HTMLDetailsElement>}

export default function ContactForm({ detailsRef }:ContactFormType) {
  const { lang } = useLanguage();
  const { formData, buttonDisabled, handleInputChange } = useFormState();
  const sendTitle = useButtonTitle(lang, buttonDisabled);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const handleSend = useFormSend({ emailRef, formData, lang });

  return (
    <details ref={detailsRef} id="contactForm">
      <summary>{formLabels[lang].title}</summary>
      <form onSubmit={() => handleSend}>
        <label htmlFor="nameInput">{formLabels[lang].name}</label>
        <input
          id="nameInput"
          type="text"
          value={formData.name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          placeholder={placeholders.name}
        />

        <label htmlFor="dateInput">{formLabels[lang].born}</label>
        <input
          id="dateInput"
          type="date"
          value={formData.birthdate}
          onChange={(e) => handleInputChange('birthdate', e.target.value)}
        />

        <label htmlFor="cityInput">{formLabels[lang].live}</label>
        <input
          id="cityInput"
          type="text"
          value={formData.city}
          onChange={(e) => handleInputChange('city', e.target.value)}
          placeholder={placeholders.city}
        />

        <label htmlFor="emailInput">{formLabels[lang].email}</label>
        <input
          id="emailInput"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          placeholder={placeholders.email}
          ref={emailRef}
        />

        <label htmlFor="phoneInput">{formLabels[lang].phone}</label>
        <input
          id="phoneInput"
          type="text"
          value={formData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          placeholder={placeholders.phone}
        />

        <button
          type="submit"
          disabled={buttonDisabled}
          style={{ borderColor: buttonDisabled ? '#1a1a1a' : 'white' }}
          title={sendTitle}
          className="formButton"
        >
          {formLabels[lang].button}
        </button>
      </form>
    </details>
  );
}
