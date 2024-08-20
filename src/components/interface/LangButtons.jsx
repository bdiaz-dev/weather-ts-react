import { useLanguage } from '@context/LanguageContext'

export default function LangButtons () {
  const { lang, setLang } = useLanguage()
  const languages = [
    { code: 'en', label: 'ENG' },
    { code: 'es', label: 'ESP' }
  ]

  return (
    <div id='langButtonsContainer'>
      {languages.map(({ code, label }) => (
        <button
          key={code}
          id='langButton'
          className={lang === code ? 'langActive' : ''}
          onClick={() => setLang(code)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
