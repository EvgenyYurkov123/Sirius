import { Button, Flex, Link, Text } from "@chakra-ui/react";
import AnimatedImage from "../../Components/AnimatedImageHome/AnimatedImage";

export default function Home() {
    return (
        <Flex bg={"skyblue"} minH={'100vh'} fontSize={50} minW={'100vw'} paddingTop={'200'} justifyContent={'center'}>
            <Flex direction={'column'}>
                <AnimatedImage />
                <Text> Добро пожаловать</Text>
                <Text> В Super обучение</Text>
                <Button  marginTop={'4'} variant="outline"
                h={'45'}
                    colorScheme="blue"
                    _hover={{
                        bg: "blue.400",
                        borderColor: "blue.800",
                        color: "white",
                    }}
                    transition="background-color 0.5s, border-color 0.5s, color 0.5s">
                    <Link href="/login" fontSize={'25'} _hover={{ textDecoration: "none" }}>Хочу в будущее</Link>
                </Button>

            </Flex>
        </Flex>
    )
}
