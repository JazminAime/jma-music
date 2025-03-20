import { Box, Flex } from "@chakra-ui/react";
import fondo2 from "../assets/fondo2.png";

const Home = () => {
  return (
    <Box
      position="relative"
      minH="100vh"
      bgImage={fondo2}
      bgSize="cover"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        //bg: "blackAlpha.600",
        backdropFilter: "blur(2px)",
      }}>
      <Flex
        position="relative"
        marginTop="100px"
        align="center"
        justify="center"
        direction="column"
        textAlign="center">
        {/* <Image borderRadius="full" boxSize="250px" src={main} alt="JMA" /> */}
        {/* <Text
          fontSize="3xl"
          mt={6}
          fontStyle="italic"
          color="white"
          fontWeight="bolder"
          fontFamily="cursive">
          "La música es el eco de las emociones que no pueden expresarse con
          palabras."
        </Text> */}
      </Flex>
    </Box>
  );
};

export default Home;
