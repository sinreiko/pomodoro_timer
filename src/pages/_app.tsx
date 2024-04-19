import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react'; // Import the specific named export 'extendTheme' from '@chakra-ui/react'
import React from 'react';

const theme = extendTheme(); // Create a Chakra UI theme using the 'extendTheme' function

function MyApp({ Component, pageProps }: { Component: React.ElementType, pageProps: any }) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
