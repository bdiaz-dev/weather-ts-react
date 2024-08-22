import './App.css';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { CityProvider, useCity } from './context/CityContext';
import { useActualWeather } from './hooks/data/useActualWeather';
import { useForecastWeather } from './hooks/data/useForecastWeather';
import WeatherMain from './components/actual_weather/WeatherMain';
import WeatherDetails from './components/actual_weather/WeatherDetails';
import Forecast from './components/forecast_weather/Forecast';
import PageHead from './components/helmet/PageHead';
import ErrorAlert from './components/error/ErrorAlert';
import MenuLayout from './components/nav/MenuLayout';
import todayDate from './libs/todayDate';

function App() {
  const { lang } = useLanguage();
  const { city } = useCity();

  const {
    formattedWeather: weatherData,
    error: weatherError,
  } = useActualWeather({ city, lang });
  const {
    formattedForecast: forecastData,
    error: forecastError,
  } = useForecastWeather({ city, lang });

  return (
    <>
      {/* DYNAMIC TITLE AND FAVICON */}
      {
        weatherData?.main
          && (
          <PageHead
            title={`${weatherData.main.description} ${Math.round(weatherData.main.temp)}`}
            favicon={weatherData.main.icon}
          />
          )
      }
      <main>
        {/* MENU WITH CITIES AND LANG BUTTONS */}
        <MenuLayout />

        <article>
          <h1>Weather App</h1>
          <h2>{todayDate(lang)}</h2>

          {/* ACTUAL WEATHER - & ERROR */}
          {
            weatherError
              && (
              <ErrorAlert>
                {weatherError}
              </ErrorAlert>
              )
          }
          {
            weatherData?.main && !weatherError
              && (
              <section>
                <WeatherMain
                  weatherData={weatherData.main}
                />
                <WeatherDetails
                  weatherDetails={weatherData.details}
                />
              </section>
              )
          }

          {/* FORECAST WEATHER - & ERROR */}
          {
            forecastError
              && (
              <ErrorAlert>
                {forecastError}
              </ErrorAlert>
              )
          }
          {
            forecastData && !forecastError
              && (
              <section>
                <Forecast
                  forecastData={forecastData}
                />
              </section>
              )
          }
        </article>
      </main>
    </>
  );
}

export default function Root() {
  return (
    <LanguageProvider>
      <CityProvider>
        <App />
      </CityProvider>
    </LanguageProvider>
  );
}
