const text = {
  en: {
    question: 'Is this your right data?',
    name: 'Your name is',
    born: 'You were born on',
    live: 'You live in',
    email: 'Your email is',
    phone: 'And your phone is',
    thanks: 'Thanks, we will contact you soon.'
  },
  es: {
    question: '¿Son estos tus datos?',
    name: 'Te llamas',
    born: 'Naciste el',
    live: 'Vives en',
    email: 'Tu correo es',
    phone: 'Y tu teléfono es',
    thanks: 'Gracias, pronto nos pondremos en contacto.'
  }
}

export const getConfirmation = (lang, formData) => {
  const message = `${text[lang].question}
      ${text[lang].name}: ${formData.name}
      ${text[lang].born}: ${formData.birthdate}
      ${text[lang].live}: ${formData.city}
      ${text[lang].email}: ${formData.email}
      ${text[lang].phone}: ${formData.phone}`
  return message
}

export const getThanks = (lang) => {
  return text[lang].thanks
}

export const formLabels = {
  en: {
    title: 'Contact us',
    name: 'Name',
    born: 'Birthday',
    city: 'Current City',
    email: 'Email',
    phone: 'Phone number',
    button: 'Send'
  },
  es: {
    title: 'Contáctanos',
    name: 'Nombre',
    born: 'Fecha de nac.',
    city: 'Ciudad',
    email: 'Email',
    phone: 'Teléfono',
    button: 'Enviar'
  }
}

export const placeholders = {
  name: 'John Doe',
  city: 'London',
  email: 'your@email.com',
  phone: '600700800'
}
