import Head from 'next/head'
import {
    Button,
    ButtonGroup,
    Center,
    ChakraProvider,
    extendTheme,
    Flex,
    HStack,
    Spacer,
    Stack,
    Text
} from '@chakra-ui/react'
import {InfoIcon, SettingsIcon} from "@chakra-ui/icons";
import theme from '../theme'
import LandingPage from "./_app";
import Image from "next/image";
export default function Home() {

    const handleInfoOnclick = () => {}

    const handleSettingsOnclick = () => {}
    return <Center>
        <div>
            <Stack>
                {/*Nav Bar, NEED A WAY TO PAD BOTH SIDES INWARDS*/}

                {/*Image plus our statement*/}
                <div>

                    <HStack spacing={'94px'} pl={56}>

                        <div>
                            {/*set to fill image for 30% of view*/}
                            <Image src={"/landingpageimage.svg"} width={487} height={293}/>
                        </div>

                        <div>
                            {/*Find how to center this content stack vertically on the page*/}
                            <Stack>
                                <Text fontSize={'60px'} color={'orange.500'} fontWeight={'700'}>Smile</Text>
                                <Text fontSize={'60px'} fontWeight={'700'}>Because of some call to action message here.</Text>
                                <HStack>
                                    <Button colorScheme={"orange"}>Start Now</Button>
                                    <Button variant={'outline'} colorScheme={'orange'}>Learn More</Button>
                                </HStack>
                            </Stack>
                        </div>
                    </HStack>
                </div>

            </Stack>
        </div>
    </Center>
}
