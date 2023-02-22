import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Text,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import checkMarkIcon from "./icons/checkMarkIcon";

export default function Pricing() {
  return (
    // box container start
    <Box
      maxW="950px"
      mx={{ base: "20px", lg: "auto" }}
      ml={{ base: "20px", lg: "auto" }}
      mr={{ base: "20px", lg: "auto" }}
      mt="-140px"

      bg="white"
      borderRadius={"16px"}
      overflow="hidden"
      boxShadow={
        "dark-lg"
      }
    >
      <Flex direction={{ base: "column", md: "column", lg: "row" }}>
        {/* left box */}
        <Box bg="#cbb8ee" p="40px" textAlign={"center"}>
          <Text fontSize={"24px"} fontWeight={"bold"}>
            Premium PRO
          </Text>
          <Heading fontSize={"60px"}>$329</Heading>
          <Text>billed just once</Text>
          <Button mt={"20px"} w={{ base: "auto", sm: "300px", md: "300px", lg: "300px" }} color={"white"} bg={"#805AD5"}>
            Get Started
          </Button>
        </Box>
        {/* right box */}
        <Box pt="50px" pl="25px" pr="10px">
          <Text mb="10px">
            Access these features when you get this pricing package for your
            business.
          </Text>
          <HStack mb={"15px"}>
            <Icon as={checkMarkIcon} />
            <Text>International calling and messaging API</Text>
          </HStack>

          <HStack mb={"15px"}>
            <Icon as={checkMarkIcon} />
            <Text>Additional phone numbers</Text>
          </HStack>

          <HStack mb={"15px"}>
            <Icon as={checkMarkIcon} />
            <Text>Automated messages via Zapier</Text>
          </HStack>

          <HStack mb={"15px"}>
            <Icon as={checkMarkIcon} />
            <Text>24/7 support and consulting</Text>
          </HStack>
        </Box>
      </Flex>
      {/* box container end */}
    </Box>
  );
}
