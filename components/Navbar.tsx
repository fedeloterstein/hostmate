import { onLogout } from '@/api/AuthAPI';
import { getSingleUser } from '@/api/FirestoreAPI';
import { Logo } from '@/assets/icons/Logo';
import { useSession } from '@/hooks/useSession';
import {
  Avatar,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Link as LinkC,
  Badge,
} from '@chakra-ui/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export const Navbar = () => {
  const { session } = useSession();
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
              Perfil
            </MenuItem>
            <MenuItem as={Link} href={'/interviews'}>
              Entrevistas
            </MenuItem>
            <MenuItem
              as={LinkC}
              isExternal
              href="https://docs.google.com/forms/d/e/1FAIpQLSejBZGwH8sCNQHtXr2Qg2gfNQ8hrHjUjpKF8La419SrRGvkrg/viewform"
            >
              🫶 Feedback
            </MenuItem>
            <MenuItem as={Link} href={'/pricing'} gap={2}>
             Precios <Badge colorScheme='green'>Free</Badge>
            </MenuItem>
            <MenuDivider />
            <MenuItem color={'red'} onClick={onLogout}>
              Cerrar Sesíon
            </MenuItem>
          </MenuList>
        </Menu>
      )}
    </Stack>
  );
};
