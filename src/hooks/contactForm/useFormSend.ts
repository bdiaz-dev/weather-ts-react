import { useCallback } from 'react';
import { handleFormSend } from '../../libs/contactFormUtils';

export const useFormSend = ({ emailRef, formData, lang }: FormSendParams) => {
  useCallback((e: Event) => {
    handleFormSend(e, { emailRef, formData, lang });
  }, [emailRef, formData, lang]);
};
