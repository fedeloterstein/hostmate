// pages/_document.js

import { ColorModeScript } from '@chakra-ui/react';
import { Html, Head, Main, NextScript } from 'next/document';
import { extendTheme } from '@chakra-ui/react';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {};

const theme = extendTheme({ colors });

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* 👇 Here's the script */}
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
