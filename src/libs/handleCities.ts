import { CallbackFunction } from '../types/callbacks';

export const isActive = (ct: string, selectedCity: string) => ((selectedCity === ct) ? 'cityActive' : '');

interface HandleClickParams {
  setCity: React.Dispatch<React.SetStateAction<string>>,
  closeMenu: CallbackFunction,
  city: string,
}
export const handleClick = ({ city, closeMenu, setCity }: HandleClickParams) => {
  setCity(city);
  closeMenu();
};
