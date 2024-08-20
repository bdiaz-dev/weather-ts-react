import { useCallback } from 'react'
import { handleFormSend } from '@libs/contactFormUtils'

export const useFormSend = (emailRef, formData, lang) => {
  return useCallback((e) => {
    handleFormSend(e, {
      emailRef,
      formData,
      lang
    })
  }, [emailRef, formData, lang])
}
