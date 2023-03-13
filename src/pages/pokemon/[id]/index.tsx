import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Pokemon } from "@/store/pokemon/types";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

interface Props {
  pokemon: Pokemon;
}

interface Query extends ParsedUrlQuery {
    sets: string;
  }

const PokemonPage = ({ pokemon }: Props) => {
  const { name, hp, types, images, attacks, weaknesses } = pokemon;
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };
  return (
    <Container maxW="6xl" my={10}>
      <button onClick={handleBack}>Back</button>
      <Flex direction={{ base: "column", lg: "row" }} justify="space-between">
        <Box w={{ base: "100%", lg: "50%" }}>
          <Image src={images.large} alt={name} maxW="sm" />
        </Box>
        <Box w={{ base: "100%", lg: "50%" }} mt={{ base: 4, lg: 0 }}>
          <Stack spacing={4}>
            <Heading>{name}</Heading>
            <Text fontWeight="bold">HP: {hp}</Text>
            <Text fontWeight="bold">Type: {types.join(", ")}</Text>
            <Box>
              <Heading as="h3" size="md" mb={2}>
                Attacks:
              </Heading>
              <Stack spacing={2}>
                {attacks.map((attack) => (
                  <Box key={attack.name}>
                    <Text fontWeight="bold">{attack.name}</Text>
                    <Text>{attack.text}</Text>
                  </Box>
                ))}
              </Stack>
            </Box>
            <Box>
              <Heading as="h3" size="md" mb={2}>
                Weaknesses:
              </Heading>
              <Stack spacing={2}>
                {weaknesses.map((weakness) => (
                  <Box key={weakness.type}>
                    <Text fontWeight="bold">{weakness.type}</Text>
                    <Text>{weakness.value}</Text>
                  </Box>
                ))}
              </Stack>
            </Box>
            <Button colorScheme="blue">Add to Cart</Button>
          </Stack>
        </Box>
      </Flex>
    </Container>
  );
};

export default PokemonPage;

export async function getServerSideProps({ params }: { params: Query }) {
  const { id } = params;
  const res = await fetch(`https://api.pokemontcg.io/v2/cards/${id}`);
  const data = await res.json();
  const pokemon = data.data;
  return {
    props: { pokemon },
  };
}
