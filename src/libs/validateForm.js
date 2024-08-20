export const validateForm = ({ emailRef, phone, lang }) => {
  const { alert } = window
  const messages = {
    en: { emailError: 'Please, verify your email', phoneError: 'Please, verify your phone' },
    es: { emailError: 'Por favor, verifica tu correo', phoneError: 'Por favor, verifica tu teléfono' }
  }

  const phoneRegex = /^(\+?\d{1,4}[\s-])?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,9}$/
  if (!phoneRegex.test(phone)) {
    console.log(phone)
    alert(messages[lang].phoneError)
    return false
  }

  if (!emailRef.current.checkValidity()) {
    alert(messages[lang].emailError)
    return false
  }

  return true
}
