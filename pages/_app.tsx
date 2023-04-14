import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import { app } from '../firebaseConfig';

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  return (
    <SessionProvider session={session}>
      <ChakraProvider
        theme={extendTheme({
          config: {
            initialColorMode: 'light',
            useSystemColorMode: false,
          },
        })}
      >
        <Component {...pageProps} />
      </ChakraProvider>
    </SessionProvider>
  );
}
