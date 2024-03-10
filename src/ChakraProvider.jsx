// src/ChakraProvider.jsx
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    // Add your custom theme configurations here
});

const Chakra = ({ children }) => {
    return (
        <ChakraProvider theme={theme}>
            {children}
        </ChakraProvider>
    );
};

export default Chakra;
