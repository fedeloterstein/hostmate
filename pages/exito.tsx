import { onLogout } from '@/api/AuthAPI';
import { auth } from '@/firebaseConfig';
import { Button, Spinner, Stack } from '@chakra-ui/react';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function Exito() {
  const router = useRouter();
  const [loading, setloading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (res: any) => {
      console.log(!res?.accessToken);
      if (!res?.accessToken) {
        router.push('/newLogin');
      } else {
        setloading(false);
      }
    });
  }, []);

  return loading ? (
    <Stack h={'100vh'} justify={'center'} align={'center'} p={20}>
        <Spinner />
    </Stack>
  ) : (
    <Stack h={'100vh'} justify={'center'} align={'center'} p={20}>
      <Button onClick={onLogout}>Logout</Button>
    </Stack>
  );
}
