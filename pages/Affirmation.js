
import { Center, Box, Heading, Text } from "@chakra-ui/react";


const Card = () =>  ( <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow={"2xl"}>
      <Box m="5">
        <Heading m="5" mb="0" as="h4" size="md">
          List a positive affirmation!
        </Heading>
        <Text m="5" mt="0">
          My cool blog post
        </Text>
      </Box>
    </Box>);
export default function affirmation(){

    return <Center h='500'>
        <Card />
    </Center>
}