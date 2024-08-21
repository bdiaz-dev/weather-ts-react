import { useCity } from '../../context/CityContext';
import { useLanguage } from '../../context/LanguageContext';
import useNoOpacity from '../../hooks/faderAnimation/useNoOpacity';
import { setCityName } from '../../libs/cities';
import { ActualWeatherFormatMain } from '../../types/dataFormat';

type WeatherMainParams = ActualWeatherFormatMain;

export default function WeatherMain({ weatherData }: WeatherMainParams) {
  const { lang } = useLanguage();
  const { city } = useCity();
  const cityInLang = setCityName({ selectedCity: city, lang });
  const mainRef = useNoOpacity(cityInLang);

  return (
    <div id="weatherMain" ref={mainRef}>
      <h2>{`${cityInLang} ${weatherData.country}`}</h2>
      <img src={weatherData.icon} alt="weather icon" />
      <p id="weatherDescription">
        {`${weatherData.description} ${weatherData.temp}º`}
      </p>
    </div>

  );
}
