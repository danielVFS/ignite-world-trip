import { useEffect, useState } from "react";
import { continentsData } from "../core/data/ContinentsData";
import { Continent } from "../core/models/Continent";

interface useContinentInfoProps {
  slug: string;
}

export function useContinentInfo({ slug }: useContinentInfoProps): Continent {
  const [continent, setContinent] = useState<Continent>({} as Continent);

  useEffect(() => {
    const continentFound = continentsData.find(
      (continent) => continent.slug === slug
    );
    if (continentFound) {
      setContinent(continentFound);
    }
  }, [slug]);

  return continent;
}
