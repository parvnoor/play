import { useEffect, useState } from "react";
import { Pokemon } from "@/store/pokemon/types";
import Link from "next/link";

export default function PokemonList({ pokemon }: { pokemon: Pokemon[] }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {pokemon.map((p) => (
        <Link key={p.id} href={`/pokemon/${p.id}`}>
          <div>
            <h3>{p.name}</h3>
            <img src={p.images.small} alt={p.name} />
          </div>
        </Link>
      ))}
    </div>
  );
}
