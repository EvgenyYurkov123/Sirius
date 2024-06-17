import { Box, Button, Flex, Heading, Input, Link, Text, Image, IconButton, InputRightElement, InputGroup } from "@chakra-ui/react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [ruButtonSize, setRuButtonSize] = useState("md");
  const [enButtonSize, setEnButtonSize] = useState("md");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRuButtonClick = () => {
    setRuButtonSize(ruButtonSize === "md" ? "lg" : "md");
    setEnButtonSize("md");
  };

  const handleEnButtonClick = () => {
    setEnButtonSize(enButtonSize === "md" ? "lg" : "md");
    setRuButtonSize("md");
  };

  return (
    <Flex direction={'column'} minHeight="100vh" minW={'320'} width="full" align="center" paddingTop={'10%'}>
      <Flex>
        <Image src="./favS1.png" alt="Example Image" mb={4} />
      </Flex>
      <Box p={4} maxWidth="27%">
        <Box textAlign="center">
          <Heading color={'#323854'} fontSize={'35'}>Вход в Sirius Future</Heading>
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
                  icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                />
              </InputRightElement>
            </InputGroup>
            <Button
            
              bgColor={'#8D7FC7'}
              color={'white'}
              width="full"
              type="submit"
              borderRadius={'25px'}
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
        <Link href="/register" color={'#008AFF'} _hover={{ textDecoration: "none" }}>Зарегистрироваться</Link>
      </Flex>
      <Flex justify="space-between" mt={4}>
        <Link
          _hover={{ textDecoration: "none" }}
          m={1}
          color={'#7362BC'}
          onClick={handleRuButtonClick}
          size={ruButtonSize}
        >
          RU
        </Link>
        <Link
          _hover={{ textDecoration: "none" }}
          m={1}
          color={'#7362BC'}
          onClick={handleEnButtonClick}
          size={enButtonSize}
        >
          EN
        </Link>
      </Flex>
    </Flex>
  )
}
