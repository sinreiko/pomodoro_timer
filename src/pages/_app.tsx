import { ChakraProvider } from '@chakra-ui/react';
import theme from '@chakra-ui/theme'; // Chakra UI theme
import React from 'react';

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
