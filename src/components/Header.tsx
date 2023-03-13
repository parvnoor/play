import Link from "next/link";
import { Flex, Box, Text, Button } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      bg="gray.800"
      color="black"
    >
      <Box>
        <Link href="/">
          <Text fontSize="2xl" fontWeight="bold">
            PokeApp
          </Text>
        </Link>
      </Box>
      <Box>
        <Link href="/sets">
          <Button mr={4} colorScheme="blue" variant="ghost">
            Sets
          </Button>
        </Link>
        <Link href="/">
          <Button colorScheme="blue" variant="ghost">
            Home
          </Button>
        </Link>
        <Link href="/register">
          <Button ml={4} colorScheme="blue" variant="ghost">
            Sign Up
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Header;
