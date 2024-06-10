import { CardRoot } from "@/components/Card/CardRoot";
import { useApi } from "@/hooks/use-api";
import { useQuery } from "@tanstack/react-query";

export const Home = () => {
  const api = useApi();
  const { data: pokemons } = useQuery({
    queryKey: ["pokemons"],
    queryFn: () => api.pokedex.list(),
    staleTime: 1000 * 60 * 5,
  });

  return ( 
    <div className="w-full p-4 mx-auto grid gap-4 grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
      {pokemons?.map((pokemon) => (
        <CardRoot key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
}