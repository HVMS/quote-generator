import { Center, Spinner } from "@chakra-ui/react";

export default function Loading() {
    return (
        <Center h="100vh">  {/* Center the spinner vertically */}
            <Spinner size="xl" color="blue.500" />
        </Center>
    );
}