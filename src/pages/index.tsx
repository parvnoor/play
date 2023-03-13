import { Box, Flex, Heading, Text, Image, Button } from '@chakra-ui/react';
import Link from 'next/link';

const HomePage = () => {
return (
<Box bgGradient="linear(to-r, #0099FF, #FF9933)" h="100vh">
<Flex direction="column" alignItems="center" justifyContent="center" h="100%">
<Image src="/pokeball.png" alt="Pokeball" w={40} h={40} mb={8} />
<Heading size="2xl" mb={4}>
Welcome to the Pokemon World
</Heading>
<Text fontSize="xl" textAlign="center" maxW="lg" mb={8}>
Explore the world of Pokemon, catch them all, and become a Pokemon master!
</Text>
<Link href="/sets">
<Button colorScheme="blue" size="lg">
View All Sets
</Button>
</Link>
</Flex>
</Box>
);
};

export default HomePage;