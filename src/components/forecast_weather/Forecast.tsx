import { useCity } from '../../context/CityContext';
import { useLanguage } from '../../context/LanguageContext';
import useNoOpacity from '../../hooks/faderAnimation/useNoOpacity';
import { setCityName } from '../../libs/cities';
import { forecastTitle } from '../../libs/content';
import { ForecastWeatherFormat } from '../../types/dataFormat';

type ForecastParams = {
  forecastData: ForecastWeatherFormat
};

export default function Forecast({ forecastData }: ForecastParams) {
  const { lang } = useLanguage();
  const { city } = useCity();
  const cityInLang = setCityName({ selectedCity: city, lang });
  const mainRef = useNoOpacity<HTMLDivElement>(cityInLang, 2000);
  return (
    <div id="forecastContainer" ref={mainRef}>
      <h3>{forecastTitle[lang]}</h3>
      <ul id="forecastList">
        {forecastData.map((item, i) => (
          <li key={`${item.date} ${item.hour}`}>
            <div>
              <b>{item.date}</b>
              <b>{item.hour}</b>
            </div>
            <div>
              <img src={item.icon} alt="weather icon" />
              <span>{item.description}</span>
              <span>{item.temp}</span>
            </div>
            {
              (i + 1 < forecastData.length)
                && (
                <b className="forecastArrow">
                  {'>'}
                </b>
                )
            }
          </li>
        ))}
      </ul>
    </div>
  );
}
