import Pokemon from "@/api/models/pokemon";
import { Link } from "react-router-dom";

type Props = {
  pokemon: Pokemon;
};

export const CardRoot = ({ pokemon }: Props) => {
  return (
    <Link to={`/details/${pokemon.id}`} className="relative bg-neutral-100 rounded-xl p-4 hover:translate-y-1 transition-transform hover:shadow">
      <span className="text-xs text-neutral-400 absolute right-4 top-2">#{pokemon.id.toString().padStart(4, '0')}</span>
      <h2 className="text-xl font-semibold capitalize">{pokemon.name}</h2>
      <div className="flex items-end justify-between">
        <div className="flex flex-col gap-2">
          {pokemon.types.map((type) => (
            <span className="bg-neutral-200 text-neutral-600 rounded text-center px-2 py-0.5 text-sm font-semibold capitalize">
              {type.type.name}
            </span>
          ))}
        </div>
        <div className="bg-gray-200 rounded-full w-24 h-24">
          <img
            className="h-24"
            src={pokemon.sprites.front_default}
            alt=""
          />
        </div>
      </div>
    </Link>
  );
};
