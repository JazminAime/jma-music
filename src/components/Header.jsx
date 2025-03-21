import {
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import jma from "../assets/jma.png";

const Header = () => {
  return (
    <>
      <Box p={4} pb={1}>
        <Flex align="center" justify="space-between" wrap="wrap">
          <Image p="0" src={jma} height="150px" marginLeft="30px" />
          <Spacer />
          <HStack
            marginRight="60px"
            spacing={6}
            wrap="wrap"
            justify="center"
            fontSize="20px">
            {["Canciones", "Videos", "Sobre Mi", "Contacto"].map(
              (item, index) => (
                <Text
                  key={index}
                  cursor="pointer"
                  color="custom.50"
                  padding="5px 8px"
                  borderRadius="8px"
                  transition="all 0.2s ease-in-out"
                  _hover={{
                    transform: "scale(1.1)",
                    backgroundColor: "custom.400",
                  }}
                  _focus={{
                    transform: "scale(1.1)",
                    backgroundColor: "custom.400",
                  }}>
                  {item}
                </Text>
              )
            )}
          </HStack>
        </Flex>
      </Box>
      <Divider
        orientation="horizontal"
        mt={0}
        borderWidth="1px"
        borderColor="custom.50"
      />
    </>
  );
};

export default Header;
