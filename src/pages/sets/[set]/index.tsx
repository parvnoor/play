import { ParsedUrlQuery } from "querystring";
import { Pokemon } from "@/store/pokemon/types";
import PokemonList from "@/components/PokemonList";
import { useRouter } from "next/router";

interface Query extends ParsedUrlQuery {
  sets: string;
}

export default function Set({
  pokemon,
  params,
}: {
  pokemon: Pokemon[];
  params: Query;
}) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div>
      <button onClick={handleBack}>Back</button>
      <h1>Pokemon of Set {params.set}</h1>
      <PokemonList pokemon={pokemon} />
    </div>
  );
}

export async function getServerSideProps({ params }: { params: Query }) {
  const { set } = params;
  const response = await fetch(
    `https://api.pokemontcg.io/v2/cards?q=set.id:${set}`
  );
  const data = await response.json();
  const pokemon = data.data.filter(
    (card: Pokemon) => card.supertype === "Pokémon"
  );

  return {
    props: {
      pokemon,
      params,
    },
  };
}
