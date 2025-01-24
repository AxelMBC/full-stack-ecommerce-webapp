"use client";

import { Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
import Image from "next/image";
import dellxps13Img from "../../../public/products/laptops/dellXps13.jpg";
import macbookpro16Img from "../../../public/products/laptops/mcbookPro16.jpg";
import hpspectrex360Img from "../../../public/products/laptops/hpSpectrex360.jpg";

const Laptops = () => {
  const laptops = [
    {
      id: 1,
      name: "Dell XPS 13",
      description: "InfinityEdge display, Intel Core i7 processor.",
      price: "$1,299",
      image: dellxps13Img,
      rating: 4, // Rating value (out of 5)
    },
    {
      id: 2,
      name: "MacBook Pro 16''",
      description: "Powerful performance for professionals.",
      price: "$2,399",
      image: macbookpro16Img,
      rating: 5,
    },
    {
      id: 3,
      name: "HP Spectre x360",
      description: "2-in-1 convertible with touch display.",
      price: "$1,499",
      image: hpspectrex360Img,
      rating: 3,
    },
  ];

  return (
    <Box padding="32px">
      <Text fontSize="2xl" fontWeight="bold" marginBottom="24px">
        Available Laptops
      </Text>
      <Flex direction="column" gap="16px">
        {laptops.map((laptop) => (
          <ProductCard key={laptop.id} product={laptop} />
        ))}
      </Flex>
    </Box>
  );
};

const ProductCard = ({
  product,
}: {
  product: {
    name: string;
    description: string;
    price: string;
    image: any;
    rating: number;
  };
}) => (
  <Flex
    width="100%"
    bg="white"
    borderRadius="8px"
    boxShadow="sm"
    overflow="hidden"
    _hover={{
      boxShadow: "md",
      transform: "scale(1.02)",
      transition: "all 0.3s ease-in-out",
    }}
  >
    {/* Product Image */}
    <Image src={product.image} alt={product.name} width={300} height={300} />

    {/* Product Details */}
    <Flex direction="column" padding="16px" flex="1">
      <Text fontWeight="bold" fontSize="lg" marginBottom="8px">
        {product.name}
      </Text>
      <Text fontSize="sm" color="gray.600" marginBottom="16px">
        {product.description}
      </Text>
      {/* Custom Rating */}
      <Stack direction="row" align="center" marginBottom="8px">
        <CustomRating rating={product.rating} />
      </Stack>
      <Text fontWeight="bold" color="teal.500" marginBottom="8px">
        {product.price}
      </Text>
      <Button size="sm" colorScheme="teal" alignSelf="flex-start">
        View Details
      </Button>
    </Flex>
  </Flex>
);

/* Custom Rating Component */
const CustomRating = ({ rating }: { rating: number }) => {
  const totalStars = 5;
  return (
    <Flex>
      {Array.from({ length: totalStars }, (_, i) => (
        <Box
          key={i}
          as="span"
          color={
            i < rating ? "orange.400" : "gray.300"
          } /* Selected and unselected colors */
          fontSize="lg"
        >
          ★
        </Box>
      ))}
    </Flex>
  );
};

export default Laptops;
