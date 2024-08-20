export type FormData = {
  name: string,
  birthdate: string,
  city: string,
  email: string,
  phone: string,
};

export type FormSendParams = {
  emailRef: React.RefObject<HTMLInputElement>,
  formData: FormData,
  lang: string,
};
