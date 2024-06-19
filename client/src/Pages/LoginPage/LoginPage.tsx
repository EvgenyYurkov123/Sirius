import { Box, Button, Flex, Heading, Input, Link, Text, Image, IconButton, InputRightElement, InputGroup } from "@chakra-ui/react";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
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

  return (
    <Flex direction={'column'} minHeight="100vh" minW={'320px'} width="full" align="center" paddingTop={'10%'}>
      <Flex>
        <Image src="./favS1.png" alt="Example Image" mb={4} />
      </Flex>
      <Box p={4} maxWidth="27%">
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
                  icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                />
              </InputRightElement>
            </InputGroup>
            <Flex justifyContent={''}>

            <CustomCheckbox 
            
            
              mb={5}
              isChecked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            >
             
            </CustomCheckbox>
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
        <Link href="/register" color={'#008AFF'} _hover={{ textDecoration: "none" }}>Зарегистрироваться</Link>
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
