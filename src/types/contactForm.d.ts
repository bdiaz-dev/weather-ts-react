interface InitialFormData {
  name: string,
  birthdate: string,
  city: string,
  email: string,
  phone: string,
}

interface FormSendParams {
  emailRef: React.RefObject<HTMLInputElement>,
  formData: FormData,
  lang: string,
}

interface UseFormDataParams {
  formData: FormData,
  setFormData: React.Dispatch<React.SetStateAction<FormData>>,
}
