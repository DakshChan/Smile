import {Box, Button, Center, Heading, Text} from "@chakra-ui/react";


const Card = () =>
    {
        return(
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow={"2xl"} m="75" alignContent={'center'}>
        <Box m="15">
            <Heading m="5" mb="0" as="h4" size="md" mt="10">
                How do you use Smile?
            </Heading>
            <Text m="5" mt="15">
                    There are three major steps for using smile!
                    First component consists of smiling for at least 10 seconds
                <Button colorScheme={'orange'} variant={'link'}><a href={'https://www.tandfonline.com/doi/full/10.1080/17437199.2022.2052740'}>. Studies</a></Button> show that even forced smiling for
                    a short period of time can help reduce stress, benefiting both your physical and mental health!<br/>
            </Text>
            <Text m="5" mt="15">
                    The second component consists of positive affirmations.
                    Arquiza <Button colorScheme={'orange'} variant={'link'}><a href={'https://www.tandfonline.com/doi/full/10.1080/17437199.2022.2052740'}>asserts</a></Button> that positive
                    affirmations can improve one's self esteem and overall happiness.
                    Thus, given three affirmations, we use sentimental analysis to determine whether the affirmations
                    are positive or not!
                </Text>
                <Text m="5" mt="15">
                    The final part of our mile is giving supplementary resources to support mental health such as music, quotes,
                    and other resources.
            </Text>
        </Box>
        <Center><Button colorScheme={'orange'} as={"a"} href={"/MusicPlayer"} mb={"15px"}>Next</Button></Center>
    </Box>)
};


export default function InfoPage() {
    return (
        <Center>
        <Card/>
    </Center>
)
}


