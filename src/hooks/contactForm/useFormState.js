import { useState, useEffect } from 'react'

export const useFormState = () => {
  const [formData, setFormData] = useState({
    name: '',
    birthdate: '',
    city: '',
    email: '',
    phone: ''
  })

  const [buttonDisabled, setButtonDisabled] = useState(true)

  useEffect(() => {
    const allFieldsFilled = Object.values(formData).every(value => value !== '')
    setButtonDisabled(!allFieldsFilled)
  }, [formData])

  const handleInputChange = (field, value) => {
    setFormData(prevState => ({
      ...prevState,
      [field]: value
    }))
  }

  return { formData, buttonDisabled, handleInputChange }
}
