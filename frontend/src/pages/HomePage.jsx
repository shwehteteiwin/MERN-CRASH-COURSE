import { Container, SimpleGrid } from "@chakra-ui/react";
import { Text, VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product.js";
import ProductCard from "../components/ProductCard.jsx";
const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  console.log("products:", products);

  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={{ base: "22px", sm: "28px" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
        >
          Current Products 🚀
        </Text>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} w={"full"}>
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </SimpleGrid>


        {products.length === 0 && ( <Text
          fontSize="xl"
          textAlign={"center"}
          fontWeight={"bold"}
          color={"gray.500"}>
          No Products Found 😥{" "}
          <Text
            as="span"
            color="blue.500"
            _hover={{ textDecoration: "underline" }}>
            <Link to="/create">Create A Product</Link>
          </Text>
        </Text>)
          }
        {/* <Text
          fontSize="xl"
          textAlign={"center"}
          fontWeight={"bold"}
          color={"gray.500"}>
          No Products Found 😥{" "}
          <Text
            as="span"
            color="blue.500"
            _hover={{ textDecoration: "underline" }}>
            <Link to="/create">Create A Product</Link>
          </Text>
        </Text> */}
      </VStack>
    </Container>
  );
};

export default HomePage;
