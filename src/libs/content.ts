import { ObjectEnEs } from '../types/objects';

interface ContentStrings {
  feel: string,
  wind: string,
  maxMin: string,
  humidity: string,
}

interface TextMap {
  [key: string]: ContentStrings
  en: ContentStrings,
  es: ContentStrings
}

export const text: TextMap = {
  en: {
    feel: 'Feels Like',
    wind: 'Wind',
    maxMin: 'Max/Min',
    humidity: 'Humidity',
  },
  es: {
    feel: 'Sensación térmica',
    wind: 'Viento',
    maxMin: 'Max/Min',
    humidity: 'Humedad',
  },
};

export const detailsSVG: ContentStrings = {
  maxMin: 'https://www.svgrepo.com/show/51585/temperature.svg',
  wind: 'https://www.svgrepo.com/show/532896/wind.svg',
  feel: 'https://www.svgrepo.com/show/341126/temperature-feels-like.svg',
  humidity: 'https://www.svgrepo.com/show/521708/humidity.svg',
};

export const forecastTitle: ObjectEnEs = {
  en: 'Forecast Weather',
  es: 'Pronóstico',
};
