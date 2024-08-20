import { useEffect, useState } from 'react'

const useForecastWeatherFetch = (city, lang) => {
  const [forecastWeatherData, setForecastWeatherData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true

    const fetchForecastWeather = async () => {
      const urlForFetch = `${import.meta.env.VITE_URL_BASE}forecast?q=${city}&lang=${lang}&units=metric&appid=${import.meta.env.VITE_API_KEY}`
      try {
        setLoading(true)
        const res = await fetch(urlForFetch)
        if (!res.ok) throw new Error('Failed to fetch forecast weather data')
        const data = await res.json()
        if (isMounted) {
          setForecastWeatherData(data)
          setError(null)
        }
      } catch (error) {
        if (isMounted) {
          setError(error.message)
          setForecastWeatherData(null)
        }
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    fetchForecastWeather()

    return () => {
      isMounted = false
    }
  }, [city, lang])

  return { forecastWeatherData, loading, error }
}

export { useForecastWeatherFetch }
