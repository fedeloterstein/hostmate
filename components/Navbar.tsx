import { Logo } from '@/assets/icons/Logo';
import { Button, HStack } from '@chakra-ui/react';
import React from 'react';

export const Navbar = () => {
  return (
    <HStack w={'100%'} justify={'space-between'} p={'37px'}>
      <Logo />
      <Button
        color={'white'}
        size={'lg'}
        variant={'solid'}
        colorScheme="blue"
        bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
      >
        Become a Host
      </Button>
    </HStack>
  );
};
