import { useLanguage } from '../../context/LanguageContext';
import { handleClick, isActive } from '../../libs/handleCities';
import { CallbackFunction } from '../../types/callbacks';
import { useCity } from '../../context/CityContext'
import { cities } from '../../libs/cities';
interface CitiesParams { closeMenu: CallbackFunction}
export default function Cities({ closeMenu }: CitiesParams) {
  const { city: selectedCity, setCity } = useCity();
  const { lang } = useLanguage();

  return (
    <ul id="cities">
      {
        cities.map((city) => (
          <li
            key={city.name.en}
            onClick={() => { handleClick({ city: city.name.en, closeMenu, setCity }); }}
            className={isActive(city.name.en, selectedCity)}
          >
            {city.name[lang]}
          </li>
        ))
      }
    </ul>
  );
}
