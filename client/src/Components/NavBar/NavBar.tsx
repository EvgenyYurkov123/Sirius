import { Button, Flex,Image } from "@chakra-ui/react";

export default function Navbar() {
    return (
        <Flex  h={'70%'} maxH={'68px'} mt={'1%'} w={'100%'} borderBottomRadius={'15px'} boxShadow="4px 4px 6px rgba(0, 0, 0, 0.1)"
           
            p={4}>
            <Flex justifyContent={'space-between'} w={'100%'}>
                <Flex w={'60%'} align={'center'} ml={'2%'} fontWeight={'500'} fontSize={'24'} fontFamily={"PT Sans Caption"}>Добро пожаловать,</Flex>
                <Flex w={'10%'} mr={'3%'} justifyContent={'space-between'} align={'center'}>
                    <Button bg={'#FFFFFF'} w={'42px'} h={'42px'} borderRadius={'25'} position={'relative'}>
                        <Image src="./IconMenu/Message/Group1.png" alt="Icon" w={'24px'} h={'22px'} position={'absolute'} zIndex={'1'} mr={'4px'}/>
                        <Image src="./IconMenu/Message/Group.png" alt="Icon" w={'16px'} h={'16px'} position={'absolute'}  ml={'12px'} mt={'11px'}/>

                    </Button>

                    <Flex>
                        <Button bg={'#FFFFFF'} w={'42px'} h={'42px'} borderRadius={'25'}>678</Button>
                    <Flex>^</Flex>
                    </Flex>

                </Flex>

            </Flex>

        </Flex>
    )
}
