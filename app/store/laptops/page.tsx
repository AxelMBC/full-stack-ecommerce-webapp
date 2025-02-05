"use client";

import { Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
import Image, { StaticImageData } from "next/image";
import { productList } from "./productList";
import { useRouter } from "next/navigation";
import CustomRating from "../../components/utils/CustomRating";

const Laptops = () => {
  return (
    <Box padding="32px">
      <Text fontSize="2xl" fontWeight="bold" marginBottom="24px">
        Available Laptops
      </Text>
      <Flex direction="column" gap="16px">
        {productList.map((laptop) => (
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
    id: number;
    name: string;
    description: string;
    price: string;
    image: StaticImageData;
    rating: number;
  };
}) => {
  const router = useRouter();
  return (
    <Flex
      width="100%"
      bg="white"
      borderRadius="8px"
      boxShadow="sm"
      overflow="hidden"
      onClick={() => router.push("/store/laptops/" + product.id)}
      cursor="pointer"
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
};

export default Laptops;
