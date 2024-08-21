import { validateForm } from './validateForm';
import { FormSendParams } from '../types/contactForm';
import { getConfirmation, getThanks } from './formText';

export const handleFormSend = (e: Event, { emailRef, formData, lang }: FormSendParams) => {
  const { alert, confirm } = window;

  if (!validateForm({ emailRef, phone: formData.phone, lang })) {
    e.preventDefault();
    return;
  }

  const confirmationMessage = getConfirmation(lang, formData);
  if (confirm(confirmationMessage)) {
    alert(getThanks(lang));
  } else {
    e.preventDefault();
  }
};
