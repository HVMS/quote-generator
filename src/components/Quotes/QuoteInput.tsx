import { Box, Button, Card, CardBody, CardHeader, Heading, Input, InputGroup, InputRightElement, Stack, background } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import "../../styles/quote.css";
import envVariables from "../../importenv";

export default function QuoteInput() {

    const [seachQuoteCategory, setSearchQuoteCategory] = useState("");
    const [showQuote, setShowQuote] = useState(false);

    const [quoteResult, setQuoteResult] = useState("");

    const onGenerateQuote = async () => {
        if (seachQuoteCategory === "") {
            alert("Please enter a topic to generate a quote");
            return;
        }

        // Fetch the quote which expects an array of properties

        const quote: any = await processQuote(seachQuoteCategory);
        if (quote) {
            setQuoteResult(quote);
            setShowQuote(true);
        } else {
            setQuoteResult("No quote found for this topic. Please try again.");
            setShowQuote(true);
        }
    }

    return (
        <div>
            <Box p={{ base: 2, md: 10 }} borderColor={"gray"}>
                <InputGroup>
                    <Input
                        placeholder="Enter your topic to generate quotes quickly using AI"
                        size={{ base: "md", md: "lg" }}
                        onChange={e => setSearchQuoteCategory(e.target.value)}
                    />
                    <InputRightElement width={{ base: "4.5rem", md: "7.5rem" }} m={1}>
                        <Button
                            h={{ base: "1.75rem", md: "2.5rem" }}
                            size={{ base: "md", md: "lg" }}
                            bg={"#FFD351"}
                            _hover={{ bg: "#F8A819" }}
                            onClick={onGenerateQuote}
                        >
                            Generate
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Box>
            <div>
                {showQuote && <Stack>
                    <Card className="card">
                        <CardHeader>
                            <Heading size='md'>Quote of the Day</Heading>
                        </CardHeader>
                        <CardBody>
                            <Box>
                                <Box className="quoteBox">
                                    <p className="quoteResult">{quoteResult}</p>
                                </Box>
                            </Box>
                        </CardBody>
                    </Card>
                </Stack>}

            </div>
        </div>
    );
};

async function processQuote(seachQuoteCategory: string): Promise<string> {

    const backendURL = envVariables.backendURL;
    console.log("Backend URL: ", backendURL);

    try {

        const response = await fetch(`${backendURL}/quotes?category=${seachQuoteCategory}`, {
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