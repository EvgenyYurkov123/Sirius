import { Box, Button, Flex, Heading, Input, Link, Text, Image, IconButton, InputRightElement, InputGroup } from "@chakra-ui/react";
import { useState } from "react";
import CustomCheckbox from "../../Components/CustomCheckBoxLogin/CustomCheckBoxLogin";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [ruButtonSize, setRuButtonSize] = useState("lg");
  const [enButtonSize, setEnButtonSize] = useState("md");
  const [rememberMe, setRememberMe] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRuButtonClick = () => {
    setRuButtonSize("lg");
    setEnButtonSize("md");
  };

  const handleEnButtonClick = () => {
    setEnButtonSize("lg");
    setRuButtonSize("md");
  };

  const closedEyeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="14" fill="none">
      <path stroke="#353647" strokeLinecap="round" strokeOpacity=".5" strokeWidth="1.5" d="M11 8C6.45 8 2.561 5.097 1 1m10 7c4.55 0 8.439-2.903 10-7M11 8v5M5 6.121L1.464 9.657M17 6.121l3.535 3.536" />
    </svg>
  );

  const openEyeIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" fill="none">
      <path fill="#C635FF" fillRule="evenodd" d="M10.75 14c-4.121 0-7.673-2.568-9.194-6.252C3.026 4.156 6.633 1.5 10.75 1.5c4.118 0 7.725 2.656 9.194 6.248C18.424 11.432 14.872 14 10.75 14Zm10.703-6.513a.748.748 0 0 1-.005.538C19.781 12.39 15.628 15.5 10.75 15.5c-4.88 0-9.036-3.113-10.7-7.483a.747.747 0 0 1 .001-.538C1.656 3.209 5.871 0 10.751 0c4.881 0 9.099 3.212 10.702 7.487ZM7.5 7.75a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM10.75 3a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5Z" clipRule="evenodd" />
    </svg>
  );

  return (
    <Flex direction={'column'} minHeight="100vh" minW={'320px'} width="full" align="center" paddingTop={'10%'}>
      <Flex>
        <Image src="./favS1.png" alt="Example Image" mb={4} />
      </Flex>
      <Box maxWidth="30%" minW={'400'}>
        <Box textAlign="center">
          <Heading color={'#323854'} fontSize={'35px'}>Вход в Sirius Future</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form>
            <Input placeholder="E-mail" mb={5} fontSize={'80%'} />
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Пароль"
                mb={5}
                fontSize={'80%'}
              />
              <InputRightElement width="3rem">
                <IconButton
                  aria-label={showPassword ? "Скрыть пароль" : "Показать пароль"}
                  h="1.75rem"
                  size="sm"
                  onClick={togglePasswordVisibility}
                  icon={showPassword ? openEyeIcon : closedEyeIcon}
                />
              </InputRightElement>
            </InputGroup>
            <Flex justifyContent={''}>
              <CustomCheckbox
                mr={'4'}
                mb={5}
                isChecked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              Запомнить меня
            </Flex>
            <Button
              background="linear-gradient(267.41deg, rgb(147, 195, 255) -0.17%, rgb(183, 160, 255) 40.96%, rgb(218, 123, 255) 88.56%)"
              bgColor={'#8D7FC7'}
              color={'white'}
              width="full"
              type="submit"
              borderRadius={'15px'}
              border={'none'}
            >
              Войти
            </Button>
          </form>
        </Box>
        <Flex justifyContent={'space-between'}>
          <Link textAlign="center" href="#" color={'#008AFF'} fontSize={'100%'} _hover={{ textDecoration: "none" }}>
            Я забыл пароль
          </Link>
          <Link textAlign="center" href="#" color={'#008AFF'} _hover={{ textDecoration: "none" }}>
            Войти как тренер
          </Link>
        </Flex>
      </Box>
      <Flex direction={'column'} mt={'7'}>
        <Text>Нет аккаунта?</Text>
        <Link href="/register" color={'#9A64FF'} fontSize={'24px'} _hover={{ textDecoration: "none" }}>Зарегистрироваться</Link>
      </Flex>
      <Flex justify="space-between" mt={4}>
        <Link
          _hover={{ textDecoration: "none" }}
          m={1}
          color={'#7362BC'}
          onClick={handleRuButtonClick}
          fontSize={ruButtonSize === "lg" ? "20px" : "16px"}
          transition="font-size 0.3s ease"
        >
          RU
        </Link>
        <Link
          _hover={{ textDecoration: "none" }}
          m={1}
          color={'#7362BC'}
          onClick={handleEnButtonClick}
          fontSize={enButtonSize === "lg" ? "20px" : "16px"}
          transition="font-size 0.3s ease"
        >
          EN
        </Link>
      </Flex>
    </Flex>
  );
}
