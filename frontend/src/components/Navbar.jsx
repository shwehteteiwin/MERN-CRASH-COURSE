import { Button, Container, Flex, HStack, useColorMode } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { PlusSquareIcon } from "@chakra-ui/icons"
import { Text } from "@chakra-ui/react"
import { IoMoon } from "react-icons/io5"
import { LuSun } from "react-icons/lu"
// import { useProductStore } from "../store/product"
const Navbar = () => {

    const {colorMode, toggleColorMode} = useColorMode();
    // const {products} = useProductStore();
  return (
    <Container maxW={"1140px"} px={4} >
        <Flex 
        h={16} 
        justifyContent={"space-between"} 
        alignItems={"center"}
        flexDir={{
            base: "column",
            sm: "row"
        }}
        >
            <Text
            fontSize={{base: "22px", sm: "28px"}}
            fontWeight={"bold"}
            textTransform={"uppercase"}
            textAlign={"center"}
            bgGradient={"linear(to-r, cyan.400, blue.500)"}
            bgClip={"text"}
            >
                <Link to={"/"}>Product Store 🛒</Link>
            </Text>
             

            <HStack
            spacing={2} alignItems={"center"}>
                   <Link to={"/create"}>
                    <Button>
                        <PlusSquareIcon fontSize={20}/>
                    </Button>
                </Link>

                <Button onClick={toggleColorMode}>
                    {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
                </Button>
            </HStack>
        </Flex>
    </Container>
  )
}

export default Navbar