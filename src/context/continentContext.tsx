import { createContext, ReactNode, useState } from "react";
import { Continent } from "../core/models/Continent";

export type ContinentContextType = {
  continent: Continent;
  handleSetContinent: (continent: Continent) => void;
};

export const ContinentContext = createContext<ContinentContextType>(
  {} as ContinentContextType
);

interface ContinentProviderProps {
  children: ReactNode;
}

export function ContinentProvider({ children }: ContinentProviderProps) {
  const [continent, setContinent] = useState<Continent>({} as Continent);

  const handleSetContinent = (continent: Continent) => {
    setContinent(continent);
  };

  return (
    <ContinentContext.Provider value={{ continent, handleSetContinent }}>
      {children}
    </ContinentContext.Provider>
  );
}
