import { onLogout } from '@/api/AuthAPI';
import { Logo } from '@/assets/icons/Logo';
import { auth } from '@/firebaseConfig';
import { Avatar, Button, HStack } from '@chakra-ui/react';
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
      console.log(res?.accessToken);
      if (!res?.accessToken) {
        setsession(undefined)
      } else {
        setloading(false);
        setsession(res);
      }
    });
  }, []);

  return (
    <HStack w={'100%'} justify={'space-between'} p={'37px'}>
      <Link href={'/'}>  
      <Logo />
      </Link>
      {session?.accessToken  && <Avatar size={'sm'} onClick={onLogout}/>}
    </HStack>
  );
};
