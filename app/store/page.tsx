"use client";

import { Grid, GridItem, Box, Text, Flex } from "@chakra-ui/react";
import Link from "next/link";

const handleNoSpaces = (title: string) => {
  return title.toLowerCase().replace(/ /g, "-");
};

const Store = () => {
  const categories = [
    { name: "Laptops", color: "teal.100" },
    { name: "Smartphones", color: "blue.100" },
    { name: "Accessories", color: "purple.100" },
    { name: "Smart Home Devices", color: "green.100" },
  ];

  return (
    <Box padding="32px">
      <Text fontSize="2xl" fontWeight="bold" marginBottom="16px">
        Explore Categories
      </Text>
      <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
        {categories.map((category) => (
          <GridItem key={category.name}>
            <CategoryCard
              name={category.name}
              bgColor={category.color}
              title={category.name}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

const CategoryCard = ({
  name,
  bgColor,
  title,
}: {
  name: string;
  bgColor: string;
  title: string;
}) => (
  <Link href={`/store/${handleNoSpaces(title)}`}>
    <Flex
      direction="column"
      align="center"
      justify="center"
      height="200px"
      bg={bgColor}
      borderRadius="8px"
      boxShadow="sm"
      _hover={{
        transform: "scale(1.05)",
        boxShadow: "md",
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Text fontSize="xl" fontWeight="bold" color="gray.700">
        {name}
      </Text>
    </Flex>
  </Link>
);

export default Store;
