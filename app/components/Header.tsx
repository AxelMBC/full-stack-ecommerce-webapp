"use client";

import { Flex, Box, Link, Button, useBreakpointValue } from "@chakra-ui/react";

const Header = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      paddingY="16px"
      paddingX="32px"
      bgColor="white"
      color="black"
      boxShadow="sm"
    >
      {/* Logo Section */}
      <Box fontWeight="bold" fontSize="lg">
        Tech Marketplace
      </Box>

      {/* Navigation Links */}
      {isDesktop && (
        <Flex as="nav" gap="24px">
          {[
            "Store",
            "Sell Tech",
            "Trade-In Program",
            "Community Forum",
            "Sustainability",
          ].map((item) => (
            <NavLink
              key={item}
              href={`/${item.toLowerCase().replace(/ /g, "-")}`}
            >
              {item}
            </NavLink>
          ))}
        </Flex>
      )}

      {/* User Actions */}
      {/* User Actions */}
      <Flex gap="16px">
        <Button
          as={Link}
          variant="outline"
          fontWeight="medium"
          fontSize="sm"
          borderColor="gray.300"
          _hover={{ bgColor: "gray.100", borderColor: "gray.400" }}
          padding="8px 16px"
          borderRadius="4px"
        >
          Sign In
        </Button>
        <Button
          as={Link}
          fontSize="sm"
          fontWeight="medium"
          color="white"
          bg="teal.500"
          padding="8px 16px"
          borderRadius="4px"
          _hover={{ bg: "teal.400" }}
          _active={{ bg: "teal.600" }}
        >
          Sign Up
        </Button>
      </Flex>
    </Flex>
  );
};

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    position="relative"
    _hover={{
      textDecoration: "none",
      _after: {
        width: "100%",
        transition: "width 0.3s ease-in-out",
      },
    }}
    _after={{
      content: '""',
      position: "absolute",
      width: "0%",
      height: "2px",
      bottom: "-2px",
      left: "0",
      bgColor: "teal.500",
      transition: "width 0.3s ease-in-out",
    }}
  >
    {children}
  </Link>
);

export default Header;
