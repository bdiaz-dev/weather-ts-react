import useNoOpacity from '@hooks/faderAnimation/useNoOpacity'
import { forecastTitle } from '@libs/content'
import { useLanguage } from '@context/LanguageContext'
import { setCityName } from '@libs/cities'
import { useCity } from '@context/CityContext'

export default function Forecast ({ forecastData }) {
  const { lang } = useLanguage()
  const { city } = useCity()
  const cityInLang = setCityName({ selectedCity: city, lang })
  const mainRef = useNoOpacity(cityInLang, 2000)
  return (
    <div id='forecastContainer' ref={mainRef}>
      <h3>{forecastTitle[lang]}</h3>
      <ul id='forecastList' ref={mainRef}>
        {forecastData.map((item, i) => (
          <li key={`${item.date} ${item.hour}`}>
            <div>
              <b>{item.date}</b>
              <b>{item.hour}</b>
            </div>
            <div>
              <img src={item.icon} alt='weather icon' />
              <span>{item.description}</span>
              <span>{item.temp}</span>
            </div>
            {
              (i + 1 < forecastData.length) &&
                <b className='forecastArrow'>
                  {'>'}
                </b>
            }
          </li>
        ))}
      </ul>
    </div>
  )
}
