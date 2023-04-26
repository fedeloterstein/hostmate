import { onLogout } from '@/api/AuthAPI';
import { getSingleUser } from '@/api/FirestoreAPI';
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
  Link as LinkC,
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

  useEffect(() => {
    onAuthStateChanged(auth, (res: any) => {
      if (!res?.accessToken) {
        setsession(undefined);
      } else {
        setloading(false);
        setsession(res);
      }
    });
  }, []);

  const [currentProfile, setcurrentProfile] = useState<any>({});
  useEffect(() => {
    if (session) {
      getSingleUser(setcurrentProfile, session.email);
    }
  }, [session]);

  return (
    <Stack w={'100%'} justify={'space-between'} p={'37px'} direction={'row'}>
      <Link href={'/'}>
        <HStack>
          <Logo />
        </HStack>
      </Link>
      {!session?.accessToken && (
        <Button
          size={'lg'}
          bgColor={'#12C99D'}
          color={'white'}
          as={LinkC}
          isExternal
          href="https://docs.google.com/forms/d/e/1FAIpQLSejBZGwH8sCNQHtXr2Qg2gfNQ8hrHjUjpKF8La419SrRGvkrg/viewform"
        >
          🫶 Feedback
        </Button>
      )}
      {session?.accessToken && (
        <Menu>
          <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
            <Avatar size={'sm'} src={currentProfile?.image as string} />
          </MenuButton>
          <MenuList>
            <MenuItem>{currentProfile?.email}</MenuItem>
            <MenuDivider />
            <MenuItem as={Link} href={'/profile'}>
              Profile
            </MenuItem>
            <MenuItem as={Link} href={'/interviews'}>
              Interviews
            </MenuItem>
            <MenuItem
              as={LinkC}
              isExternal
              href="https://docs.google.com/forms/d/e/1FAIpQLSejBZGwH8sCNQHtXr2Qg2gfNQ8hrHjUjpKF8La419SrRGvkrg/viewform"
            >
              🫶 Feedback
            </MenuItem>

            <MenuDivider />
            <MenuItem color={'red'} onClick={onLogout}>
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </Stack>
  );
};
