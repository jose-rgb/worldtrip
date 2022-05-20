import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { ChakraProvider, Flex } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { theme } from '../styles/theme'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// modified styles
import '../styles/slider.scss';


function App({ Component, pageProps }: AppProps) {
  const  [ loading, setLoading ] = useState(false)

  useEffect(()=>{

    setLoading(true)
    setTimeout(()=> {
      setLoading(false)
    }, 3000)

  },[])


  return (
    <ChakraProvider theme={ theme }>
      {
        loading ?
        <Flex w="100vw" h="100vh" align="center" justify="center">
          <ClipLoader color={'#E7DB45'} loading={loading}  size={150} />
        </Flex>
        :
          <Component {...pageProps} />
      }
      
    </ChakraProvider>
  ) 
}

export default App
