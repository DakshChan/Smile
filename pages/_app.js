import {Center, Button, ButtonGroup, ChakraProvider, Flex, HStack, Spacer, Stack, Text, VStack} from '@chakra-ui/react'
import theme from "../theme";
import {InfoIcon, SettingsIcon} from "@chakra-ui/icons";
import Image from "next/image";

function LandingPage({ Component, pageProps }) {

    function handleInfoOnclick() {
    //
    }

    function handleSettingsOnclick() {
    //
    }

    return (
        <ChakraProvider theme={theme}>

            <Flex alignItems='center' gap={'2'}>
                <Button pl={31}>Logo Here</Button>
                <Spacer/>
                <ButtonGroup gap={13.86} pr={61.86} pt={35}>
                    <InfoIcon onClick={handleInfoOnclick} w={30} h={30}/>
                    <SettingsIcon onClick={handleSettingsOnclick} w={30} h={30}/>
                </ButtonGroup>
            </Flex>
            <Component {...pageProps}/>
        </ChakraProvider>

    )
}

export default LandingPage