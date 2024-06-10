import Pokemon from "../models/pokemon";
import Service from "./service";

export default class PokedexService extends Service {
  async list(limit: number = 20, offset: number = 0): Promise<Pokemon[]> {
    const { data: pokemons } = await this.call.get(`/pokemons?limit=${limit}&offset=${offset}`);
    return pokemons.results;
  }
  async find(id: number|string): Promise<Pokemon> {
    const { data: pokemon } = await this.call.get(`/pokemons/${id}`);
    return pokemon;
  }
}