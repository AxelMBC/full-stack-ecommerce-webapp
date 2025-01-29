"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Flex, Box, Link, Button } from "@chakra-ui/react";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useRouter } from "next/navigation";

const headerOptions = [
  {
    title: "Store",
    link: "/store",
  },
  {
    title: "Sell Tech",
    link: "/sell-tech",
  },
  {
    title: "Trade-In Program",
    link: "/trade-in-program",
  },
  {
    title: "Sustainability",
    link: "/sustainablity",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

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
      <Box
        fontWeight="bold"
        fontSize="lg"
        onClick={() => router.push("/")}
        cursor="pointer"
      >
        Tech Marketplace
      </Box>

      {/* Navigation Links */}

      <Flex as="nav" gap="24px" hideBelow="lg">
        {headerOptions.map((item, index) => (
          <NavLink key={index} href={item.link}>
            {item.title}
          </NavLink>
        ))}
      </Flex>

      {/* User Actions */}
      <Flex gap="16px" hideBelow="lg">
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

      {/* Mobile Menu */}
      <DrawerRoot open={open} onOpenChange={(e) => setOpen(e.open)}>
        <DrawerBackdrop />
        <DrawerTrigger hideFrom="lg" asChild>
          <GiHamburgerMenu style={{ cursor: "pointer" }} />
        </DrawerTrigger>
        <DrawerContent color="white">
          <DrawerHeader
            paddingLeft="24px"
            paddingTop="24px"
            paddingBottom="56px"
          >
            <DrawerTitle>Tech MarketPlace</DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            <Flex gap="6" direction="column" paddingLeft="24px">
              {headerOptions.map((item, index) => (
                <Link key={index} href={item.link}>
                  <p style={{ fontWeight: "bold", fontSize: "21px" }}>
                    {item.title}
                  </p>
                </Link>
              ))}
            </Flex>
          </DrawerBody>

          <DrawerCloseTrigger />
        </DrawerContent>
      </DrawerRoot>
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
