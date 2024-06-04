import { Container, Text, VStack, HStack, Box, Heading, SimpleGrid, Image, Link, IconButton } from "@chakra-ui/react";
import { FaHome, FaMapMarkedAlt, FaGlobe, FaBook } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        <HStack spacing={4} w="full" justifyContent="center">
          <Link href="#home">
            <IconButton aria-label="Home" icon={<FaHome />} size="lg" />
          </Link>
          <Link href="#destinations">
            <IconButton aria-label="Destinations" icon={<FaMapMarkedAlt />} size="lg" />
          </Link>
          <Link href="#usa">
            <IconButton aria-label="State of USA" icon={<FaGlobe />} size="lg" />
          </Link>
          <Link href="#world">
            <IconButton aria-label="World Encyclopedia" icon={<FaBook />} size="lg" />
          </Link>
        </HStack>

        <VStack spacing={4} textAlign="center">
          <Heading as="h1" size="2xl">
            Isolated Traveller
          </Heading>
          <Text fontSize="xl">Travel Seekers and Adventure Enthusiasts</Text>
        </VStack>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} w="full">
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Image src="https://images.unsplash.com/photo-1524661135-423995f22d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG1hcHxlbnwwfHx8fDE3MTc0OTY2MDZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="World Encyclopedia" />
            <Heading as="h3" size="md" mt={4}>
              World Encyclopedia
            </Heading>
            <Text mt={2}>Explore the world with our comprehensive encyclopedia.</Text>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Image src="https://images.unsplash.com/photo-1563906267088-b029e7101114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhYm91dCUyMHVzfGVufDB8fHx8MTcxNzQ5NjYwN3ww&ixlib=rb-4.0.3&q=80&w=1080" alt="About Us" />
            <Heading as="h3" size="md" mt={4}>
              About Us
            </Heading>
            <Text mt={2}>Learn more about our mission and team.</Text>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
            <Image src="https://images.unsplash.com/photo-1605153322277-dd0d7f608b4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkZXN0aW5hdGlvbnN8ZW58MHx8fHwxNzE3NDk2MTgzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Destinations" />
            <Heading as="h3" size="md" mt={4}>
              Destinations
            </Heading>
            <Text mt={2}>Discover new and exciting travel destinations.</Text>
          </Box>
        </SimpleGrid>

        <VStack spacing={4} w="full" align="start">
          <Heading as="h2" size="lg">
            Recent Posts
          </Heading>
          {/* Example recent posts */}
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} w="full">
            <Heading as="h3" size="md">
              Exploring the Alps
            </Heading>
            <Text mt={2}>A journey through the stunning mountain ranges of Europe.</Text>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} w="full">
            <Heading as="h3" size="md">
              Safari in Kenya
            </Heading>
            <Text mt={2}>Experience the wild beauty of Kenya's national parks.</Text>
          </Box>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
