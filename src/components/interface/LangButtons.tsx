import { useLanguage } from '../../context/LanguageContext';

export default function LangButtons() {
  const { lang, setLang } = useLanguage();
  type LanguagesStrings = { code: string, label: string };
  type Languages = LanguagesStrings[];
  const languages: Languages = [
    { code: 'en', label: 'ENG' },
    { code: 'es', label: 'ESP' },
  ];

  return (
    <div id="langButtonsContainer">
      {languages.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          id="langButton"
          className={lang === code ? 'langActive' : ''}
          onClick={() => setLang(code)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
