export interface Pokemon {
  id: string;
  name: string;
  supertype: string;
  subtypes: string[];
  level?: string;
  hp: string;
  types: string[];
  evolvesFrom?: string;
  attacks: {
    name: string;
    cost: string[];
    convertedEnergyCost: number;
    damage: string;
    text: string;
  }[];
  weaknesses: {
    type: string;
    value: string;
  }[];
  resistances: {
    type: string;
    value: string;
  }[];
  retreatCost: string[];
  convertedRetreatCost: number;
  set: {
    id: string;
    name: string;
    series: string;
    printedTotal: number;
    total: number;
    legalities: {
      unlimited: string;
    };
    ptcgoCode?: string;
    releaseDate: string;
    updatedAt: string;
    images: {
      symbol: string;
      logo: string;
    };
  };
  number: string;
  artist: string;
  rarity: string;
  flavorText?: string;
  nationalPokedexNumbers?: number[];
  legalities: {
    unlimited: string;
  };
  images: {
    small: string;
    large: string;
  };
  tcgplayer?: {
    url: string;
    updatedAt: string;
    prices: {
      [key: string]: {
        low?: number;
        mid?: number;
        high?: number;
        market?: number;
        directLow?: number | null;
      };
    };
  };
  cardmarket?: {
    url: string;
    updatedAt: string;
    prices: {
      [key: string]: number;
    };
  };
}

export interface IPokemonStore {
  pokemon: Pokemon[];
  fetchPokemon: (currentSet: string) => Promise<void>;
}
