import { Box, Text } from "@chakra-ui/react";
import QuoteGenerator from "../Quotes/QuoteGenerator";

const LandingPage = () => {
    return (
        <div>
            <Box p={10}>
                <Text fontSize={"2xl"} fontWeight={600} textAlign={"center"}>
                    Quote Generator
                </Text>
            </Box>
            <QuoteGenerator />
        </div>
    );
};

export default LandingPage;