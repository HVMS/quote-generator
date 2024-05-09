import { Box, Button, Input, InputGroup, InputRightElement, Stack, background } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function QuoteInput() {

    const [searchQuote, setSearchQuote] = useState("");
    const [showQuote, setShowQuote] = useState(false);

    const[quoteResult, setQuoteResult] = useState("");

    useEffect( () => {
        if (searchQuote.length > 0 && searchQuote !== null) {
            return ;
        }

        const quote = async () => {
            try {
                const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${searchQuote}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'X-Api-Key': 'nI9QPk4qicX35si/Jk2XAA==O3lgXnSDBrMMsbhX',
                    },
                });
                
                const data = await response.json();
                console.log("Quote data: ", data);
                setShowQuote(true);
                setQuoteResult(data.quote);
                console.log("Quote result: ", quoteResult);

            } catch (error) {
                console.log(error);
            }
        };

    },[]);

    return (
        <div>
            <Box p={{ base: 2, md: 10 }} borderColor={"gray"}>
                <InputGroup>
                    <Input
                        placeholder="Enter your topic to generate quotes quickly using AI"
                        size={{ base: "md", md: "lg" }}
                        onChange={e => setSearchQuote(e.target.value)}
                    />
                    <InputRightElement width={{ base: "4.5rem", md: "7.5rem" }} m={1}>
                        <Button
                            h={{ base: "1.75rem", md: "2.5rem" }}
                            size={{ base: "md", md: "lg" }}
                            bg={"#FFD351"}
                            _hover={{ bg: "#F8A819" }}
                        >
                            Generate
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Box>

            <Box>
                {/* Only show text if showQuote is true */}
                {showQuote && <Stack>
                    <Box>
                        <p>{quoteResult}</p>
                    </Box>
                </Stack>}
            </Box>
        </div>
    );
};