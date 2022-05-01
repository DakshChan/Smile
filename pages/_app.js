import {ButtonGroup, ChakraProvider, Flex, Spacer} from '@chakra-ui/react'
import theme from "../theme";
import {InfoIcon} from "@chakra-ui/icons";
import Image from "next/image";

function LandingPage({ Component, pageProps }) {

    return (
        <ChakraProvider theme={theme}>

            <Flex alignItems='center' gap={'2'} pl={18}>
                <Image alt="Logo" src={'/Logo.png'} width={132} height={52}/>
                <Spacer/>
                <ButtonGroup gap={13.86} pr={61.86} pt={35}>
                    <InfoIcon  w={30} h={30}/>
                </ButtonGroup>
            </Flex>
            <Component {...pageProps}/>
        </ChakraProvider>

    )
}

export default LandingPage