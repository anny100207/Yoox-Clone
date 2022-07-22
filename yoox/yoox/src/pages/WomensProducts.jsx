import React from 'react'
import {Box,Stack,
 
    Center,
    useColorModeValue,
    Heading,
    Text,
  
    Image,
    Flex,
  } from "@chakra-ui/react"
 
import {useDispatch, useSelector} from "react-redux"
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { fetchData } from '../Redux/Products/action'

const WomensProducts = () => {
      const dispatch = useDispatch()
    const [searchParams] = useSearchParams()
    const products = useSelector((store)=>store.ecommerce.products)
    useEffect(()=>{
      if(products?.length===0){
        let params ={
            category:searchParams.getAll('category')
        }
      dispatch(fetchData(params))
      }
    },[dispatch,products?.length,searchParams])
    return (
        <Box>
         <Stack display={{md:"flex"}} flexDirection={{md:"row"}}>
           {/* <Box>
             <Filter/>
           </Box> */}
           <Box>
             <Heading as='h3'>Products</Heading>
            <Flex flexWrap="wrap" justifyContent="space-around">
               {products.map(product=>{
                 return <ProductSimple key={product.id} image={product.image} title={product.title} price={product.price}/>
               })}
            </Flex>
           </Box>
           </Stack>  
        </Box>
       )
}







 function ProductSimple({imgUrl,heading,name,price}) {
  
 
    return (
      <Center py={12}>
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'230px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              backgroundImage: `url(${imgUrl})`,
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={230}
              width={282}
              objectFit={'container'}
              src={imgUrl}
            />
          </Box>
          <Stack pt={10} align={'center'}>
           
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {heading}
            </Heading>
            <Box>
                <p>{name}</p>
            </Box>
            <Stack direction={'row'} align={'center'}>
              <Text fontWeight={800} fontSize={'xl'}>
                RS:{price}
              </Text>
              <Text textDecoration={'line-through'} color={'gray.600'}>
                {price+30}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    );
  }



  
export default WomensProducts









