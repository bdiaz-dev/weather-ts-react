export const isActive = (ct, selectedCity) => {
  return (selectedCity === ct.name.en) ? 'cityActive' : ''
}
export const handleClick = (city, closeMenu, setCity) => {
  setCity(city.name.en)
  closeMenu()
}
