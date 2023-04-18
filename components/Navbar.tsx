import { onLogout } from '@/api/AuthAPI';
import { Logo } from '@/assets/icons/Logo';
import { auth } from '@/firebase.config';
import {
  Avatar,
  Badge,
  Box,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from '@chakra-ui/react';
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
    <Stack w={'100%'} justify={'space-between'} p={'37px'} direction={['column', 'column', 'row']}>
      <Link href={'/'}>
        <HStack>
          <Logo />
          <Badge colorScheme="purple">Beta v1</Badge>
        </HStack>
      </Link>
      {session?.accessToken && (
        <Menu>
          <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
            <Avatar
              size={'sm'}
              src={
                'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
              }
            />
          </MenuButton>
          <MenuList>
            <MenuItem>{session.email}</MenuItem>
            <MenuDivider />
            <MenuItem>Profile</MenuItem>
            <MenuItem>Interviews</MenuItem>
            <MenuDivider />
            <MenuItem  onClick={onLogout} >Logout</MenuItem>
          </MenuList>
        </Menu>
      )}
    </Stack>
  );
};


