import { getSingleUser } from '@/api/FirestoreAPI';
import { AnfitrionCard } from '@/components/AnfitrionCard';
import { Layout } from '@/components/Layout';
import ProfileDataInput from '@/components/ProfileDataInput';
import { useSessionWithRedirect } from '@/hooks/useSessionWithRedirect';
import { Spinner, Stack, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

export default function Profile() {
  const { session, loading } = useSessionWithRedirect('/');

  const [currentProfile, setcurrentProfile] = useState<any>({});

  useEffect(() => {
    if (session) {
      getSingleUser(setcurrentProfile, session.email);
    }
  }, [session]);

  return loading ? (
    <Stack h={'100vh'} justify={'center'} align={'center'} p={20}>
      <Spinner />
    </Stack>
  ) : (
    <Layout>
      <Stack align={'center'}>
        <Text
          bgClip="text"
          bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
          fontWeight={600}
          fontSize={'40px'}
          mb={'60px'}
        >
          Your profile!
        </Text>
        <Stack justify={'center'} align={'center'} gap={20} direction={['column', 'column', 'row']}>
          <Stack width={'50%'} justify={'center'} align={'center'}>
            <Text
              bgClip="text"
              bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
              fontWeight={600}
              fontSize={'22px'}
            >
              How it looks!
            </Text>
            <AnfitrionCard item={currentProfile} />
          </Stack>
          <ProfileDataInput session={session} currentProfile={currentProfile} />
        </Stack>
      </Stack>
    </Layout>
  );
}
