
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

    const [curComplimentState, setCurCompliment] = useState(0);
    const [shouldAnimate, changeAnimate] = useState(true);

    const [curCompliment, setCurComplimentInput] = useState("");

    const [compliments, setCompliments] = useState([]);

    const onClick = async (e) => {
        changeAnimate(false)
        console.log(curCompliment);
        const response  = await fetch("https://api.monkeylearn.com/v3/classifiers/cl_pi3C7JiL/classify/",{
            method: "POST",
            mode: 'cors',
            headers: {
                Authorization: "Token 7d2065e4b3e7e2107e188837150c335091943ae8",
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                data: [
                    curCompliment
                ]
            })
        })
        const result = await response.json();
        console.log(result);
        const { tag_name: tag, confidence } = result[0]["classifications"][0];
        console.log(tag, confidence);
        if (tag === "Negative"){
            // No negative comments, be positive!
        }else if (tag == "Neutral" || confidence < 0.6){
            // You can do better!
        }else {
            setCompliments((compliments) => [...compliments, curCompliment])
            setCurCompliment((val) => val + 1)
        }
        changeAnimate(true)
    }





    return <Container pt={'200px'}>
        <ScaleFade in={shouldAnimate} initialScale={0.01}>
        <Heading  color={"#EE7E56"}>{wowText[curComplimentState]}</Heading><br/>
        <Heading>{text[curComplimentState]}</Heading>
        <Input value={curCompliment} onChange={(e) => setCurComplimentInput(e.target.value)} mt="20px" placeholder="Write a compliment here... (Max 65 characters)"/>
        <Button mt="20px" colorScheme={"orange"} onClick={onClick}>Submit</Button>
        {compliments.map((compliment, index) => <Heading key ={index}>{compliment}</Heading>)}
        </ScaleFade>
    </Container>
}