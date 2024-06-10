import { Button, Flex, Image, Stack, Text } from "@chakra-ui/react";

export default function Menu() {
    return (
        <Flex direction={'column'} bg={'#EEEEFF'} width={'236px'} height={'704px'} align={'center'} borderRadius={'30px'} justifyContent={'space-around'} >
            <Flex align={'center'} mt={'10%'}>
                <Image src="./logoBack.png" alt="Логотип"  w={'100%'} h={'63%'}/>
            </Flex>
            <Stack direction={'column'} spacing={3}  mt={'10%'} h={'50%'}>
                <Flex fontSize={'16px'} >
                    <Image src="./IconMenu/Home.png" alt="Icon" w={'23px'} h={'21px'} mr={'2'} />
                    Главная</Flex>
                <Flex>
                    <Image src="./IconMenu/Calendar.png" alt="Icon" w={'23px'} h={'21px'} mr={'2'} />
                    Расписание</Flex>
                <Flex>
                    <Image src="./IconMenu/Wallet.png" alt="Icon" w={'23px'} h={'21px'} mr={'2'} />
                    Оплата</Flex>
                <Flex>
                    <Image src="./IconMenu/Сup.png" alt="Icon" w={'23px'} h={'21px'} mr={'2'} />
                    Достижения</Flex>
                <Flex>
                    <Image src="./IconMenu/Puzzle.png" alt="Icon" w={'23px'} h={'21px'} mr={'2'} />
                    Тренажёры</Flex>
                <Flex>
                    <Image src="./IconMenu/Folder.png" alt="Icon" w={'23px'} h={'21px'} mr={'2'} />
                    Библиотека</Flex>
                <Flex>
                    <Image src="./IconMenu/Headphones.png" alt="Icon" w={'23px'} h={'21px'} mr={'2'} />
                    Проверка связи</Flex>
                <Flex>
                    <Image src="./IconMenu/Settings.png" alt="Icon" w={'23px'} h={'21px'} mr={'2'} />
                    Настройки</Flex>
                <Flex>
                    <Image src="./IconMenu/Question.png" alt="Icon" w={'23px'} h={'21px'} mr={'2'} />
                    Вопросы</Flex>
            </Stack>
            <Flex bg={'#FDFDFF'} h={'18.2%'} w={'83%'} borderRadius={'15px'} mb={'5%'} direction={'column'} justifyContent={'space-around'} position={'relative'} overflow="hidden">
                <Text fontSize={'16px'} fontWeight={'400'} color={'#323854'} align={'start'} ml={'6%'}   >Учитесь бесплатно</Text>
                <Text fontSize={'10'} fontWeight={'200'} w={'90%'} align={'start'} ml={'6%'}> Приводите друзей с детьми заниматься в Sirius Future и получайте подарки</Text>
            <Button bg={'skyblue'} w={'35%'} h={'25%'} borderRadius={'25'} ml={'8%'} fontSize={'12px'} fontWeight={'400'} mb={'3%'}>Узнать</Button>
                <Image src="./IconMenu/present/present.png" position={'absolute'}  ml={'60%'} mt={'48%'} alt="Icon" w={'81px'} h={'98px'} mr={'2'} />

            </Flex>
        </Flex>
    );
}
