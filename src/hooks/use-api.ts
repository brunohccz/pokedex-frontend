import { ApiServiceContainer } from "@/api/api-service-container";
import PokedexService from "@/api/services/pokedex-service";
import axios from "@/lib/axios";

export function useApi(): ApiServiceContainer {
  const api: ApiServiceContainer = {
    pokedex: new PokedexService(axios),
  };

  return api;
}