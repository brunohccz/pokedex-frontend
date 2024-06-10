import PokedexService from "./services/pokedex-service";

export interface ApiServiceContainer {
  pokedex: PokedexService;
}