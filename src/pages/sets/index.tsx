import SetList from "@/components/SetLIst";
import { Set } from "../../store/sets/types";

export default function Sets({ sets }: { sets: Set[] }) {
  return (
    <div>
      <h1>Pokemon TCG Sets</h1>
      {sets && <SetList sets={sets} />}
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch("https://api.pokemontcg.io/v2/sets");
  const data = await response.json();
  const sets = data.data;
  return {
    props: { sets },
  };
}
