import {ButtonGroup, ChakraProvider, Flex, Spacer, Box, HStack, Text} from '@chakra-ui/react'
import theme from "../theme";
import {InfoIcon, SettingsIcon} from "@chakra-ui/icons";
import Image from "next/image";

function LandingPage({ Component, pageProps }) {

    return (
        <ChakraProvider theme={theme}>

            <Flex alignItems='center' gap={'2'} pl={18}>
                <Image alt="Logo" src={'/Logo.png'} width={132} height={52}/>
                <Spacer/>
                <ButtonGroup gap={13.86} pr={61.86} pt={35}>
                    <InfoIcon  w={30} h={30}/>
                    <SettingsIcon w={30} h={30}/>
                </ButtonGroup>
            </Flex>
            <Component {...pageProps}/>
            <Box as="footer" mt={12} height="100%" textAlign="center" className="app">
        <HStack justify="center">
            <Text fontSize="sm">
            Made with ❤️ by Daksh, Hammad, Brian, Ritvik
            </Text>
        </HStack>
        </Box>
  );
        </ChakraProvider>

    )
}

export default LandingPage