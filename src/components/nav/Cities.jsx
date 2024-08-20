import { isActive, handleClick } from '@libs/handleCities';
import { cities } from '@libs/cities';
import { useLanguage } from '@context/LanguageContext';
import { useCity } from '@context/CityContext';

export default function Cities({ closeMenu }) {
  const { city: selectedCity, setCity } = useCity();
  const { lang } = useLanguage();

  return (
    <ul id="cities">
      {
        cities.map((city) => (
          <li
            key={city.name.en}
            onClick={() => { handleClick(city, closeMenu, setCity); }}
            className={isActive(city, selectedCity)}
          >
            {city.name[lang]}
          </li>
        ))
      }
    </ul>
  );
}
