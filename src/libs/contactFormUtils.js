import { validateForm } from '@libs/validateForm'
import { getConfirmation, getThanks } from '@libs/formText'

export const handleFormSend = (e, { emailRef, formData, lang }) => {
  const { alert, confirm } = window

  if (!validateForm({ emailRef, phone: formData.phone, lang })) {
    e.preventDefault()
    return
  }

  const confirmationMessage = getConfirmation(lang, formData)
  if (confirm(confirmationMessage)) {
    alert(getThanks(lang))
  } else {
    e.preventDefault()
  }
}
