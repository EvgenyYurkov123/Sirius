import { Flex } from "@chakra-ui/react";
import Menu from "../../Components/Menu/Menu";
import Navbar from "../../Components/NavBar/NavBar";


export default function Main() {
  return (
      <Flex w={'100vw'} >
        <Flex mt={'1.5%'} ml={'1.5%'}>
        <Menu/>
        </Flex>
        <Flex w={'100%'} h={'100vh'} direction={'column'}>
          <Flex h={'28%'} >
            <Navbar/>
          </Flex>
        </Flex>
      </Flex>
  )
}
