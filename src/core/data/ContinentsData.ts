import { Continent } from "../models/Continent";

export const continentsData: Continent[] = [
  {
    name: "Europa",
    slug: "europe",
    short_description: "O continente mais antigo",
    image: "/continents/Europe1.png",
    banner: "/continents/Europe2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et pharetra at arcu morbi. Egestas tortor eleifend hendrerit amet elit. Molestie eget condimentum pulvinar pulvinar lacus. Scelerisque nisl diam magna condimentum ultrices accumsan. Amet, integer et eget dui eleifend in vivamus consequat.",
    continent_counters: {
      countries: 50,
      languages: 60,
      cities: 27,
    },
    cities: [
      {
        thumbnail: "/cities/Europe/Londres.png",
        name: "Londres",
        country: "Reino Unido",
        flag: "/flags/Europe/England.svg",
      },
      {
        thumbnail: "/cities/Europe/Paris.png",
        name: "Paris",
        country: "França",
        flag: "/flags/Europe/France.svg",
      },
      {
        thumbnail: "/cities/Europe/Roma.png",
        name: "Roma",
        country: "Itália",
        flag: "/flags/Europe/Italy.svg",
      },
      {
        thumbnail: "/cities/Europe/Praga.png",
        name: "Praga",
        country: "República Tcheca",
        flag: "/flags/Europe/CzechRepublic.svg",
      },
      {
        thumbnail: "/cities/Europe/Amsterda.png",
        name: "Amsterdã",
        country: "Holanda",
        flag: "/flags/Europe/Netherlands.svg",
      },
      {
        thumbnail: "/cities/Europe/Lisboa.png",
        name: "Lisboa",
        country: "Portugal",
        flag: "/flags/Europe/Portugal.svg",
      },
    ],
  },
  {
    name: "América do Norte",
    slug: "north-america",
    short_description: "O maior mercado global de viagens",
    image: "/continents/NorthAmerica1.png",
    banner: "/continents/NorthAmerica2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et pharetra at arcu morbi. Egestas tortor eleifend hendrerit amet elit. Molestie eget condimentum pulvinar pulvinar lacus. Scelerisque nisl diam magna condimentum ultrices accumsan. Amet, integer et eget dui eleifend in vivamus consequat.",
    continent_counters: {
      countries: 50,
      languages: 60,
      cities: 27,
    },
    cities: [
      {
        thumbnail: "/cities/NorthAmerica/Montreal.png",
        name: "Montreal",
        country: "Canadá",
        flag: "/flags/NorthAmerica/Canada.svg",
      },
      {
        thumbnail: "/cities/NorthAmerica/Utah.png",
        name: "Utah",
        country: "Estados Unidos",
        flag: "/flags/NorthAmerica/UnitedStates.svg",
      },
      {
        thumbnail: "/cities/NorthAmerica/Cancun.png",
        name: "Cancún",
        country: "México",
        flag: "/flags/NorthAmerica/Mexico.svg",
      },
      {
        thumbnail: "/cities/NorthAmerica/Havana.png",
        name: "Havana",
        country: "Cuba",
        flag: "/flags/NorthAmerica/Cuba.svg",
      },
      {
        thumbnail: "/cities/NorthAmerica/PanamaCity.png",
        name: "Cidade do Panamá",
        country: "Panamá",
        flag: "/flags/NorthAmerica/Panama.svg",
      },
      {
        thumbnail: "/cities/NorthAmerica/Atlanta.png",
        name: "Atlanta",
        country: "Estados Unidos",
        flag: "/flags/NorthAmerica/UnitedStates.svg",
      },
    ],
  },
  {
    name: "África",
    slug: "africa",
    short_description: "O safari mais lindo",
    image: "/continents/Africa1.png",
    banner: "/continents/Africa2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et pharetra at arcu morbi. Egestas tortor eleifend hendrerit amet elit. Molestie eget condimentum pulvinar pulvinar lacus. Scelerisque nisl diam magna condimentum ultrices accumsan. Amet, integer et eget dui eleifend in vivamus consequat.",
    continent_counters: {
      countries: 50,
      languages: 60,
      cities: 27,
    },
    cities: [
      {
        thumbnail: "/cities/Africa/AddisAbaba.png",
        name: "Addis Ababa",
        country: "Etiópia",
        flag: "/flags/Africa/Ethiopia.svg",
      },
      {
        thumbnail: "/cities/Africa/Cairo.png",
        name: "Cairo",
        country: "Egito",
        flag: "/flags/Africa/Egypt.svg",
      },
      {
        thumbnail: "/cities/Africa/Abuja.png",
        name: "Abuja",
        country: "Nigéria",
        flag: "/flags/Africa/Nigeria.svg",
      },
      {
        thumbnail: "/cities/Africa/Marraquexe.png",
        name: "Marraquexe",
        country: "Marrocos",
        flag: "/flags/Africa/Morocco.svg",
      },
      {
        thumbnail: "/cities/Africa/Duala.png",
        name: "Duala",
        country: "Camarões",
        flag: "/flags/Africa/Cameroon.svg",
      },
      {
        thumbnail: "/cities/Africa/Luanda.png",
        name: "Luanda",
        country: "Angola",
        flag: "/flags/Africa/Angola.svg",
      },
    ],
  },
  {
    name: "Oceania",
    slug: "oceania",
    short_description: "Conheça o menor e mais novo continente",
    image: "/continents/Oceania1.png",
    banner: "/continents/Oceania2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et pharetra at arcu morbi. Egestas tortor eleifend hendrerit amet elit. Molestie eget condimentum pulvinar pulvinar lacus. Scelerisque nisl diam magna condimentum ultrices accumsan. Amet, integer et eget dui eleifend in vivamus consequat.",
    continent_counters: {
      countries: 50,
      languages: 60,
      cities: 27,
    },
    cities: [
      {
        thumbnail: "/cities/Oceania/Sidney.png",
        name: "Sidney",
        country: "Austrália",
        flag: "/flags/Oceania/Australia.svg",
      },
      {
        thumbnail: "/cities/Oceania/Waikato.png",
        name: "Waikato",
        country: "Nova Zêlandia",
        flag: "/flags/Oceania/NewZealand.svg",
      },
      {
        thumbnail: "/cities/Oceania/Queenstown.png",
        name: "Queenstown",
        country: "Nova Zêlandia",
        flag: "/flags/Oceania/NewZealand.svg",
      },
      {
        thumbnail: "/cities/Oceania/Suva.png",
        name: "Suva",
        country: "Fiji",
        flag: "/flags/Oceania/Fiji.svg",
      },
      {
        thumbnail: "/cities/Oceania/Ngerulmud.png",
        name: "Ngerulmud",
        country: "Palau",
        flag: "/flags/Oceania/Palau.svg",
      },
      {
        thumbnail: "/cities/Oceania/PortoVila.png",
        name: "Porto Vila",
        country: "Vanuatu",
        flag: "/flags/Oceania/Vanuatu.svg",
      },
    ],
  },
];
