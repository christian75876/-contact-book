interface WeatherIcon {
  name: string;
  size: number;
  style: { color: string };
}

const weaterIcons: { [key: string]: WeatherIcon } = {
  '01d': { name: 'sunny-outline', size: 40, style: { color: 'yellow' } },
  '01n': { name: 'moon-outline', size: 40, style: { color: 'darkgray' } },
  '02d': {
    name: 'partly-sunny-outline',
    size: 40,
    style: { color: 'orange' },
  },
  '02n': {
    name: 'cloudy-night-outline',
    size: 40,
    style: { color: 'darkgray' },
  },
  '03d': { name: 'cloudy-outline', size: 40, style: { color: 'gray' } },
  '03n': { name: 'cloudy-night-outline', size: 40, style: { color: 'gray' } },
  '04d': {
    name: 'cloud-circle-outline',
    size: 40,
    style: { color: 'lightgray' },
  },
  '04n': {
    name: 'cloud-circle-outline',
    size: 40,
    style: { color: 'black' },
  },
  '09d': { name: 'rainy-outline', size: 40, style: { color: 'blue' } },
  '09n': { name: 'rainy-outline', size: 40, style: { color: 'blue' } },
  '10d': { name: 'rainy-outline', size: 40, style: { color: 'blue' } },
  '10n': { name: 'rainy-outline', size: 40, style: { color: 'blue' } },
  '11d': {
    name: 'thunderstorm-outline',
    size: 40,
    style: { color: 'darkblue' },
  },
  '11n': {
    name: 'thunderstorm-outline',
    size: 40,
    style: { color: 'darkblue' },
  },
  '13d': { name: 'snowy-outline', size: 40, style: { color: 'lightblue' } },
  '13n': {
    name: 'cloudy-night-outline',
    size: 40,
    style: { color: 'black' },
  },
  '50d': { name: 'logo-soundcloud', size: 40, style: { color: 'gray' } },
  '50n': { name: 'logo-soundcloud', size: 40, style: { color: 'gray' } },
};

const getIconForWeather = (icon: string | null) => {
  return (
    weaterIcons[icon ?? ''] || {
      name: 'help-outline',
      size: 40,
      style: { color: 'black' },
    }
  );
};

export default getIconForWeather;
