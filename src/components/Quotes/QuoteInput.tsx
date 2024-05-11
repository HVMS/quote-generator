import { Box, Button, Card, CardBody, CardFooter } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import "../../styles/quote.css";
import envVariables from "../../importenv";
import React from "react";

export default function QuoteInput() {

    const [quoteResult, setQuoteResult] = useState("");

    const shareQuoteOnTweet = () => {
        const twitterURL = `https://twitter.com/intent/tweet?text=${quoteResult}`;
        window.open(twitterURL, '_blank');
    };

    useEffect(() => {
        onGenerateQuote();
    }, []);

    const onGenerateQuote = async () => {
        const quote: any = await processQuote();
        if (quote) {
            setQuoteResult(quote.content);
        } else {
            setQuoteResult("No quote found for this topic. Please try again.");
        }
    }

    return (
        <div className="cardCSS">
            <Card>
                <CardBody>
                    <Box>
                        <p className="quoteResultCSS">{quoteResult ? quoteResult : "No quote available"}</p>
                    </Box>
                </CardBody>
                <CardFooter
                    justifyContent={"space-between"}
                    flexWrap={"wrap"}
                >
                    <Button onClick={() => shareQuoteOnTweet()}>Twitter</Button>
                    <Button onClick={() => onGenerateQuote()}>Generate Quote</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

async function processQuote(): Promise<string> {

    const backendURL = envVariables.backendURL;
    console.log("Backend URL: ", backendURL);

    try {

        const response = await fetch(`${backendURL}/quotes/random`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });

        const quoteData = await response.json();
        console.log(quoteData);
        console.log(quoteData.message);
        console.log(quoteData.data);
        return quoteData.data;

    } catch (error) {
        console.error("Error fetching quote: ", error);
        return "";
    }
}