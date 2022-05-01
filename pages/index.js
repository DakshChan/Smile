import {
    Button,
    Center,
    HStack,
    Stack,
    Text
} from '@chakra-ui/react'
import Image from "next/image";
export default function Home() {

    return <Center>
        <div>
            <Stack>
                <div>

                    <HStack spacing={'90px'}>

                        <div>
                            <Image alt="logo" src={"/landingpageimage.svg"} width={487} height={293}/>
                        </div>

                        <div>
                            <Stack>
                                <Text fontSize={'60px'} color={'orange.500'} fontWeight={'700'}>Smile</Text>
                                <Text fontSize={'20px'} fontWeight={'500'}>A web app designed to make you smile!</Text>
                                <HStack>
                                    <Button colorScheme={"orange"} as="a" href="/InfoPage">Start a Smile Mile</Button>
                                </HStack>
                            </Stack>
                        </div>
                    </HStack>
                </div>

            </Stack>
        </div>
    </Center>
}
