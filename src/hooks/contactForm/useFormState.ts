import { useState, useEffect } from 'react';
import { FormData } from './contactFormTypes';

export const useFormState = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    birthdate: '',
    city: '',
    email: '',
    phone: '',
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);

  useEffect(() => {
    const allFieldsFilled = Object.values(formData).every((value) => value !== '');
    setButtonDisabled(!allFieldsFilled);
  }, [formData]);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return { formData, buttonDisabled, handleInputChange };
};
