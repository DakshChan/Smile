import {Button, Center, HStack, Input, PinInput, PinInputField, Stack, Text} from "@chakra-ui/react";
import Image from "next/image";
import {useEffect, useState} from "react";

export default function MusicPlayer(){

    const [currMin, setCurrMin] = useState('')

    const handleInput = (event) => {
        if (!isNaN(event.target.value)){
            setCurrMin(event.target.value)
        }
    }

    // const ourEffect = () => {
    //     useEffect(() => {
    //         setTimeout(() => {
    //             if (currMin == 0){

    //             }
    //             setCurrMin(currMin - 1)
    //         }, 1000)
    //     }, [currMin])
    // }
    // An attempt to decrement timer using settimeout

    return (
        <Center pt={35}>
             <Stack>

                 {/* <HStack display={'flex'} alignItems={'center'} pl={45}>

                     <Input type={'text'} value={currMin} onChange={handleInput}></Input>

                 </HStack> */}
                <a href = {"/face"}> <Image src={"/Btn.png"} width={400} height={400} style={{cursor: "grab"}} href={"/face"}></Image></a>
                 {/* <div><Button colorScheme={'orange'} alignItems={}>Cancel</Button></div> */}
             </Stack>

         </Center>
    )
}