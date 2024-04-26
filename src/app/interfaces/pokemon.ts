export interface PokemonList {
  count: number;
  next: string;
  previous?: string;
  results: PokemonResult[];
}

export interface PokemonResult {
  name: string;
  url: string;
}

export interface Pokemon {
  id: number;
  name: string;
  sprites: Sprites;
  types: Types[];
  weight: number;
  height: number;
  abilities: Ability[];
}

export interface Ability {
  ability: Type;
  is_hidden: boolean;
  slot: number;
}

export interface Sprites {
  back_default: string;
  back_female?: string;
  back_shiny: string;
  back_shiny_female?: string;
  front_default: string;
  front_female?: string;
  front_shiny: string;
  front_shiny_female?: string;
  other: Other;
  // versions: Versions;
}

export interface Types {
  slot: number
  type: Type
}

export interface Type {
  name: string
  url: string
}


export interface Other {
  dream_world: DreamWorld
  home: Home
  'official-artwork': OfficialArtwork
}

export interface DreamWorld {
  front_default: string
  front_female?: string
}

export interface Home {
  front_default: string
  front_female?: string
  front_shiny: string
  front_shiny_female?: string
}

export interface OfficialArtwork {
  front_default: string
  front_shiny: string
}
