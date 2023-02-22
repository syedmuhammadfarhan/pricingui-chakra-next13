import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <Box
      textAlign={{ base: "left", md: "left", lg: "center" }}
      pl="15px"
      bg="#6B46C1"
      pt="50px"
      pb="170px"
      color="white"
    >
      <Text pt="10px">Pricing UI using Chakra on Nextjs by Farhan</Text>
      <Heading>Simple pricing for your business</Heading>
      <Text pt="10px">
        Plans that are carefully crafted to suit your business.
      </Text>
    </Box>
  );
}
