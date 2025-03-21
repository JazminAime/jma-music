import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import {
  FaInstagram,
  FaSpotify,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Box backgroundColor="custom.400" color="custom.50">
      <Flex
        direction="column"
        p="35px"
        justify="center"
        align="center"
        gap="8px">
        <Text fontSize="19px">JMA Camilo Aldao</Text>
        <Text fontSize="19px">Todos los derechos reservados</Text>
        <Flex gap="8px" marginTop="5px">
          <Icon boxSize="22px" as={FaInstagram} />
          <Icon boxSize="22px" as={FaWhatsapp} />
          <Icon boxSize="22px" as={FaYoutube} />
          <Icon boxSize="22px" as={FaTiktok} />
          <Icon boxSize="22px" as={FaSpotify} />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
