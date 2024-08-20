import useNoOpacity from '@hooks/faderAnimation/useNoOpacity'
import { detailsSVG, text } from '@libs/content'
import { setCityName } from '@libs/cities'
import { useLanguage } from '@context/LanguageContext'
import { useCity } from '@context/CityContext'

export default function WeatherDetails ({ weatherDetails }) {
  const { lang } = useLanguage()
  const { city } = useCity()
  const cityInLang = setCityName({ selectedCity: city, lang })
  const mainRef = useNoOpacity(cityInLang, 1500)

  return (
    <ul id='weatherDetails' ref={mainRef}>
      <li>
        <img src={detailsSVG.maxMin} className='detailsSVG' />
        <b>{text[lang].maxMin}</b>
        <div>
          <span>{weatherDetails.maxTemp}</span>
          <span>{weatherDetails.minTemp}</span>
        </div>
      </li>
      <li>
        <img src={detailsSVG.feel} className='detailsSVG' />
        <b>{text[lang].feel}</b>
        <div>
          <span>{weatherDetails.feelsLike}</span>
        </div>
      </li>
      <li>
        <img src={detailsSVG.wind} className='detailsSVG' />
        <b>{text[lang].wind}</b>
        <div>
          <span>{weatherDetails.windSpeed}</span>
          <span>{weatherDetails.direction}</span>
        </div>
      </li>
      <li>
        <img src={detailsSVG.humidity} className='detailsSVG' />
        <b>{text[lang].humidity}</b>
        <div>
          <span>{weatherDetails.humidity}</span>
        </div>
      </li>
    </ul>
  )
}
