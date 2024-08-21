interface UseStateCityContext {
  city: string,
  setCity: React.Dispatch<React.SetStateAction<string>>,
}

interface UseStateLangContext {
  lang: UseStateCityContext.lang,
  setLang: UseStateCityContext.setCity,
}
