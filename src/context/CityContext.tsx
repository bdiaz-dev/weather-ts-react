import {
  createContext, ReactNode, useContext, useMemo, useState,
} from 'react';

interface CityContextType {
  city: string;
  setCity: (city: string) => void;
}

const CityContext = createContext<CityContextType | undefined>(undefined);

export function CityProvider({ children }: { children: ReactNode }) {
  const [city, setCity] = useState('Lisbon');
  const value = useMemo(() => ({ city, setCity }), [city, setCity]);

  return (
    <CityContext.Provider value={value}>
      {children}
    </CityContext.Provider>
  );
}

export function useCity() {
  return useContext(CityContext);
}
