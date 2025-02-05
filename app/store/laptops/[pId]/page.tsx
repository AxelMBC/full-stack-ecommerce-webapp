import {
  Box,
  Flex,
  Image,
  Heading,
  Text,
  Stack,
  Button,
} from "@chakra-ui/react";
import { productList } from "../productList";
import CustomRating from "../../../components/utils/CustomRating";
import "./product.css";

const Product = async ({ params }: { params: Promise<{ pId: string }> }) => {
  // Await the params promise to extract pId
  const { pId } = await params;

  // Look up the product based on the URL parameter.
  const product = productList.find((item) => item.id === Number(pId));

  if (!product) {
    return (
      <Box p={10}>
        <Text fontSize="xl">Product not found.</Text>
      </Box>
    );
  }

  return (
    <Box className="productContainer">
      <Flex
        className="productCard"
        direction={{ base: "column", md: "row" }}
        align="stretch"
      >
        {/* Left column: Product Image */}
        <Box className="productImage" flex="1">
          <Image
            src={product.image.src}
            alt={product.name}
            objectFit="cover"
            w="100%"
            h={{ base: "250px", md: "100%" }}
            borderRadius="md"
            boxShadow="lg"
          />
        </Box>

        {/* Right column: Product Details */}
        <Box className="productDetails" flex="1" bg="white">
          <Heading as="h1" size="2xl" mb="1.5rem">
            {product.name}
          </Heading>
          <Text fontSize="lg" color="gray.600" mb="1rem">
            {product.description}
          </Text>
          <Text fontSize="2xl" fontWeight="bold" mb="1rem">
            {product.price}
          </Text>
          <CustomRating rating={product.rating} />

          <Stack gap={3} mb="1.5rem">
            <Text>
              <strong>CPU:</strong> {product.specs.cpu}
            </Text>
            <Text>
              <strong>RAM:</strong> {product.specs.ram}
            </Text>
            <Text>
              <strong>Storage:</strong> {product.specs.storage}
            </Text>
            <Text>
              <strong>Display:</strong> {product.specs.display}
            </Text>
            <Text>
              <strong>Battery:</strong> {product.specs.battery}
            </Text>
          </Stack>
          {/* Button with the new animated style */}
          <Button colorScheme="teal" size="lg" className="animatedButton">
            Add to Cart
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Product;
