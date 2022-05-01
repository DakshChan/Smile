import Card from '../Components/AffirmationsCard/Card';
import {Button, ButtonGroup, Flex, Spacer, Center, Box} from "@chakra-ui/react";
import {InfoIcon, SettingsIcon} from "@chakra-ui/icons";

export default function Affirmation(){
    return (
   <Center>
       <Box position={'relative'}>
           <Box
               position="absolute"
               top="50%"
               left="50%"
               transform="translateY(-50%, -50%)"
               boxShadow={'2xl'}
           >
               <Card/>
           </Box>
       </Box>

   </Center>
    )
}