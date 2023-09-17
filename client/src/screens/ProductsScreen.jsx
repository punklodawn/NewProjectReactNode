import {Center, Wrap, WrapItem, Stack, Spinner, Alert, AlertIcon, AlertTitle, AlertDescription} from '@chakra-ui/react'
import ProductCard from '../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/actions/productActions'
import { useEffect } from 'react'

const ProductsScreen = () => {
const dispatch = useDispatch();
const productsList = useSelector((state) => state.products)
const {loading, error, products} = productsList

useEffect(() =>{
  dispatch(getProducts())
}, [dispatch])


console.log('Productos:', products);
  return (
<Wrap spacing='30px' justify='center' minHeight='100vh'>
  {loading ? (
  <Stack direction={'row'} spacing={4}>
    <Spinner mt={20} thickness='2px' speed='0.65s' emptyColor='gray.200' color='orange.500' size={'xl'}></Spinner>
  </Stack>): error?(
  <Alert status='error'> 
  <AlertIcon/>
  <AlertTitle>We are sorry!</AlertTitle>
  <AlertDescription>{error}</AlertDescription>
  </Alert>
  ):
  (Array.isArray(products) ? (
        products.map((product) => (
          <WrapItem key={product._id}>
            <Center w='250px' h='550px'>
              <ProductCard product={product} />
            </Center>
          </WrapItem> 
      ))) : (
        <Alert status='error'> 
        <AlertIcon/>
        <AlertTitle>Products not found!</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
        </Alert> // O algún mensaje de carga adecuado
      ))}
    </Wrap>
  )
}

export default ProductsScreen