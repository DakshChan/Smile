import {Input} from '@chakra-ui/react'
import {useState} from "react";
import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    HStack
} from '@chakra-ui/react';


export default function Card(props) {

    const [firstAffirm, setFirstAffirm] = useState('')
    const [secondAffirm, setSecondAffirm] = useState('')
    const [thirdAffirm, setThirdAffirm] = useState('')

    return (

                <Box
                    maxW={'270px'}
                    w={'full'}
                    bg={useColorModeValue('white', 'gray.800')}
                    rounded={'md'}
                    overflow={'hidden'}>
                    <Flex justify={'center'} mt={-12}>
                        <Avatar
                            size={'xl'}
                            css={{
                                border: '2px solid white',
                            }}
                        />
                    </Flex>

                    <Box p={6}>
                        <Stack spacing={0} align={'center'} mb={5}>
                            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                                John Doe
                            </Heading>
                            <Text color={'gray.500'}>Frontend Developer</Text>
                        </Stack>

                        <Stack direction={'row'} justify={'center'} spacing={6}>

                        </Stack>

                    </Box>
                </Box>

    )
}
