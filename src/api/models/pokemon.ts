export type PokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type PokemonSprites = {
  front_default: string;
  other: {
    'official-artwork': {
      front_default: string;
    };
  };
};

export type PokemonStat = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

export default interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: PokemonSprites;
  types: PokemonType[];
  stats: PokemonStat[];
  weaknesses: string[];
  category: string;
  abilities: string[];
  
}