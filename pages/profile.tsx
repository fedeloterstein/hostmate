import { onLogout } from '@/api/AuthAPI';
import { getSingleUser } from '@/api/FirestoreAPI';
import { AnfitrionCard } from '@/components/AnfitrionCard';
import { Layout } from '@/components/Layout';
import ProfileDataInput from '@/components/ProfileDataInput';
import { auth } from '@/firebase.config';
import { Button, HStack, Spinner, Stack, Text } from '@chakra-ui/react';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export default function Prfile() {
  const router = useRouter();
  const [loading, setloading] = useState(true);
  const [session, setsession] = useState<any>();

  useEffect(() => {
    onAuthStateChanged(auth, (res: any) => {
      console.log(!res?.accessToken);
      if (!res?.accessToken) {
        router.push('/');
      } else {
        setsession(res);
        setloading(false);
      }
    });
  }, []);

  const [currentProfile, setcurrentProfile] = useState<any>({})
  
  useEffect(() => {
    if (session) {
      getSingleUser(setcurrentProfile, session.email)
    }

  }, [session])
  

  return loading ? (
    <Stack h={'100vh'} justify={'center'} align={'center'} p={20}>
      <Spinner />
    </Stack>
  ) : (
    <Layout>
      <Stack>
        <Text>Your profile!</Text>
        <HStack>
            <Stack>
                <Text>How it looks!</Text>
                <AnfitrionCard item={currentProfile}/>
            </Stack>
            <ProfileDataInput session={session} currentProfile={currentProfile} />
        </HStack>
      </Stack>
    </Layout>
  );
}
