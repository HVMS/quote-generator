import { Box, Button, Input, InputGroup, InputRightElement, Stack } from "@chakra-ui/react";
import { EmailIcon, Search2Icon } from "@chakra-ui/icons";

export default function QuoteInput() {
    return (
        <div>
            <Box p={{ base: 2, md: 10 }} borderColor={"gray"}>
                <InputGroup>
                    <Input
                        placeholder="Enter your topic to generate quotes quickly using AI"
                        size={{ base: "md", md: "lg" }}
                    />
                    <InputRightElement width={{ base: "4.5rem", md: "7.5rem" }} m={1}>
                        <Button h={{ base: "1.75rem", md: "2.5rem" }} size={{ base: "md", md: "lg" }} leftIcon={<Search2Icon />} bg={"#FFD351"}>
                            Generate
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Box>
        </div>
    );
};