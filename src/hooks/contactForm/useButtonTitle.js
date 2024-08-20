import { useEffect, useState } from 'react'

export const useButtonTitle = (lang, buttonDisabled) => {
  const [sendTitle, setSendTitle] = useState('')

  useEffect(() => {
    const title = buttonDisabled
      ? lang === 'en'
        ? 'Fill all data to send'
        : 'Rellene toda la información para enviar'
      : lang === 'en'
        ? 'Send contact request'
        : 'Envíe la solicitud de contacto'
    setSendTitle(title)
  }, [lang, buttonDisabled])

  return sendTitle
}
