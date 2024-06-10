import { useApi } from "@/hooks/use-api";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

export const Details = () => {
  const api = useApi()
  const { id } = useParams();

  const { data: pokemon } = useQuery({
    queryKey: ['pokemon', id],
    queryFn: () => api.pokedex.find(id as string)
  })

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="flex items-baseline gap-2 font-semibold leading-tight text-4xl text-neutral-600 capitalize">
        {pokemon?.name}
        <span className="text-neutral-400 text-3xl">#{pokemon?.id.toString().padStart(4, '0')}</span>
      </h1>
      <div className="grid grid-cols-2 gap-4 m-4">
        <div className="space-y-4">
          <div className="bg-neutral-100 rounded">
            <img
              src={pokemon?.sprites.other['official-artwork'].front_default}
              alt=""
            />
          </div>
          <div className="bg-neutral-100 rounded p-4">
            <div className="grid grid-cols-3 gap-4">
              {pokemon?.stats.map((stat) => (
                <div key={stat.stat.name}>
                  <p className="capitalize text-neutral-500">{stat.stat.name}</p>
                  <p className="text-lg text-neutral-800">{stat.base_stat}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-sky-500/80 rounded p-4 text-white">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
              <div>
                <p className="">Height</p>
                <p className="text-lg text-neutral-800">{pokemon?.height}</p>
              </div>
              <div>
                <p className="">Category</p>
                <p className="text-lg text-neutral-800 capitalize">{pokemon?.category}</p>
              </div>
              <div>
                <p className="">Weight</p>
                <p className="text-lg text-neutral-800">{pokemon?.weight} lbs</p>
              </div>
              <div>
                <p className="">Abilities</p>
                <p className="text-lg text-neutral-800 capitalize">
                  {pokemon?.abilities.join(', ')}
                </p>
              </div>
            </div>
          </div>
          <div>
            <h2>Type</h2>
            <div className="flex gap-2 mt-2">
              {pokemon?.types.map((type) => (
                <div key={type.type.name} className="bg-neutral-100 rounded py-1 px-4">
                  <p className="text-neutral-800 capitalize">{type.type.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2>Weaknesses</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {pokemon?.weaknesses.map((weakness) => (
                <div key={weakness} className="bg-neutral-100 rounded py-1 px-4">
                  <p className="text-neutral-800 capitalize">{weakness}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
