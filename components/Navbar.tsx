import { onLogout } from '@/api/AuthAPI';
import { Logo } from '@/assets/icons/Logo';
import { auth } from '@/firebase.config';
import { Avatar, Badge, Box, Button, HStack, Stack, Text } from '@chakra-ui/react';
import { onAuthStateChanged } from 'firebase/auth';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export const Navbar = () => {
  const router = useRouter();
  const [session, setsession] = useState<any>();
  const [loading, setloading] = useState(true);
console.log(session);

  useEffect(() => {
    onAuthStateChanged(auth, (res: any) => {
      console.log(res?.accessToken);
      if (!res?.accessToken) {
        setsession(undefined);
      } else {
        setloading(false);
        setsession(res);
      }
    });
  }, []);

  return (
    <Stack w={'100%'} justify={'space-between'} p={'37px'}    direction={['column', 'column', 'row']}>
      <Link href={'/'}>
        <HStack>
        <Logo />
        <Badge colorScheme='purple'>Beta v1</Badge>
        </HStack>
      </Link>
      {session?.accessToken && (
        <HStack>
          <Text>{session.email}</Text>
          <Avatar size={'sm'} onClick={onLogout} />
        </HStack>
      )}
    </Stack>
  );
};
