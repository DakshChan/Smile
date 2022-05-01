
import { Heading, Text, Container, ScaleFade, Input, Button } from "@chakra-ui/react";
import { useState } from 'react';


const wowText = [
    "Perfect!",
    "Nice!",
    "Great!",
    "Awesome!"
]
const text = [
    "Now try to think of 3 positive compliments to yourself!",
    "2 more compliments!",
    "One more left!",
    "Great work! You deserve it!"
]

export default function Affirmation(){

    const [curCompliment, setCurCompliment] = useState(0);





    return <Container pt={'200px'}>
        <ScaleFade in={true} initialScale={0.01}>
        <Heading  color={"#EE7E56"}>{wowText[curCompliment]}</Heading><br/>
        <Heading>{text[curCompliment]}</Heading>
        <Input mt="20px" placeholder="Write a compliment here... (Max 65 characters)"/>
        <Button mt="20px" colorScheme={"orange"} onClick={(e) => setCurCompliment((val) => val + 1)}>Submit</Button>
        </ScaleFade>
    </Container>
}