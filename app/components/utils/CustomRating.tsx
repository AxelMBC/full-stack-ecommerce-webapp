/* Custom Rating Component */
import { Box, Flex } from "@chakra-ui/react";

const CustomRating = ({ rating }: { rating: number }) => {
  const totalStars = 5;
  return (
    <Flex>
      {Array.from({ length: totalStars }, (_, i) => (
        <Box
          key={i}
          as="span"
          color={i < rating ? "orange.400" : "gray.300"}
          fontSize="lg"
          paddingBottom={4}
        >
          ★
        </Box>
      ))}
    </Flex>
  );
};

export default CustomRating;
