import { Box, Flex, HStack, Image, Spacer, Text } from "@chakra-ui/react";
import music from "../assets/music.png";

const Header = () => {
  return (
    <>
      <Box>
        <Flex align="center" justify="space-between" wrap="wrap">
          <Image
            p="2"
            marginTop="5px"
            src={music}
            height="160px"
            marginLeft="50px"
          />
          <Spacer />
          <HStack
            marginRight="100px"
            spacing={6}
            wrap="wrap"
            justify="center"
            fontSize="22px">
            <Text
              cursor="pointer"
              color="custom.50"
              position="relative"
              _before={{
                content: `""`,
                position: "absolute",
                top: 0,
                left: 0,
                width: "0%",
                height: "2px",
                backgroundColor: "#fafafa",
                transition: "width 0.3s ease-in-out",
              }}
              _hover={{
                _before: {
                  width: "100%",
                },
              }}
              _focus={{
                _before: {
                  width: "100%",
                },
              }}>
              Canciones
            </Text>
            <Text
              cursor="pointer"
              color="custom.50"
              position="relative"
              _before={{
                content: `""`,
                position: "absolute",
                top: 0,
                left: 0,
                width: "0%",
                height: "2px",
                backgroundColor: "#fafafa",
                transition: "width 0.3s ease-in-out",
              }}
              _hover={{
                _before: {
                  width: "100%",
                },
              }}
              _focus={{
                _before: {
                  width: "100%",
                },
              }}>
              Videos
            </Text>
            <Text
              cursor="pointer"
              color="custom.50"
              position="relative"
              _before={{
                content: `""`,
                position: "absolute",
                top: 0,
                left: 0,
                width: "0%",
                height: "2px",
                backgroundColor: "#fafafa",
                transition: "width 0.3s ease-in-out",
              }}
              _hover={{
                _before: {
                  width: "100%",
                },
              }}
              _focus={{
                _before: {
                  width: "100%",
                },
              }}>
              Sobre Mi
            </Text>
            <Text
              cursor="pointer"
              color="custom.50"
              position="relative"
              _before={{
                content: `""`,
                position: "absolute",
                top: 0,
                left: 0,
                width: "0%",
                height: "2px",
                backgroundColor: "#fafafa",
                transition: "width 0.3s ease-in-out",
              }}
              _hover={{
                _before: {
                  width: "100%",
                },
              }}
              _focus={{
                _before: {
                  width: "100%",
                },
              }}>
              Contacto
            </Text>
          </HStack>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
