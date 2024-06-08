import { Flex, Image, Stack } from "@chakra-ui/react";

export default function Menu() {
    return (
        <Flex direction={'column'} bg={'#EEEEFF'} width={'236px'} height={'704px'} align={'center'} borderRadius={'30px'} >
            <Flex align={'center'}>
                <Image src="./logoBack.png" alt="Логотип"  w={'100%'} h={'63%'}/>
            </Flex>
            <Stack direction={'column'} spacing={2} flexGrow={1}>
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
        </Flex>
    );
}
