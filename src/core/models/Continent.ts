import { City } from "./City";

export interface Continent {
  name: string;
  slug: string;
  short_description: string;
  image: string;
  banner: string;
  description: string;
  continent_counters: ContinentCounters;
  cities: City[];
}

export interface ContinentCounters {
  countries: number;
  languages: number;
  cities: number;
}
