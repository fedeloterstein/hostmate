import { Logo } from '@/assets/icons/Logo';
import { Avatar, Button, HStack } from '@chakra-ui/react';
import { useSession, signOut } from 'next-auth/react';
import React from 'react';

export const Navbar = () => {
  const { data: session } = useSession();

  return (
    <HStack w={'100%'} justify={'space-between'} p={'37px'}>
      <Logo />
      {session && <Avatar size={'sm'} src={session.user?.image as string} onClick={() => signOut()}/>}
    </HStack>
  );
};
