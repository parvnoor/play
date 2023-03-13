import { Box, Grid, Image, Text } from "@chakra-ui/react";
import { Set } from "../store/sets/types";

export default function SetList({ sets }: { sets: Set[] }) {
  return (
    <Grid templateColumns="repeat(auto-fit, minmax(300px, 1fr))" gap={4}>
      {sets.map((set) => (
        <Box
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
          maxHeight="400px"
          cursor="pointer"
          as="a"
          key={set.id}
          href={`/sets/${set.id}`}
        >
          <Image
            src={set.images.logo}
            alt={`${set.name} logo`}
            maxHeight="100%"
            width="100%"
            objectFit="cover"
          />
          <Box p="6">
            <Text fontWeight="bold" fontSize="xl" mb={2}>
              {set.name}
            </Text>
            <Text fontSize="lg" mb={2}>
              {set.series}
            </Text>
            <Text fontSize="md" color="gray.500">
              Released: {set.releaseDate}
            </Text>
          </Box>
        </Box>
      ))}
    </Grid>
  );
}
