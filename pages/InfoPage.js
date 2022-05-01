import {Box, Center, Heading, Text} from "@chakra-ui/react";


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
                    First component consists of smiling for at least 10 seconds.
                    Studies show that <a href={'https://www.tandfonline.com/doi/full/10.1080/17437199.2022.2052740'}>even forced smiling for
                    a short period of time can help reduce stress, benefiting both your physical and mental health! </a> <br/>
            </Text>
            <Text m="5" mt="15">
                    The second component consists of positive affirmations.
                    Arquiza asserts that
                    <a href={'https://scholar.dominican.edu/scw/SCW2020/conference-presentations/63/'}> positive
                        affirmations can improve one's self esteem and overall happiness. </a>
                    Thus, given three affirmations, we use sentimental analysis to determine whether the affirmations
                    are positive or not!
                </Text>
                <Text m="5" mt="15">
                    The final part of our mile is giving supplementary resources to support mental health such as music, quotes,
                    and other resources.
            </Text>
        </Box>
    </Box>)
};


export default function InfoPage() {
    return (
        <Center>
        <Card/>
    </Center>
)
}


