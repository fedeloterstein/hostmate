import { Navbar } from '@/components/Navbar';
import { Button, HStack, Heading, Stack, Text } from '@chakra-ui/react';

export default function Home() {
  return (
    <Stack w={'100%'} justify={'flex-start'} align={'center'} bg={'white'}>
      <Navbar />
      <Heading
        fontWeight={600}
        fontSize={'40px'}
        pt={'71px'}
        bgClip="text"
        bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
      >
        Problems managing your rental space?
      </Heading>
      <Text pt={'13px'} pb={'13px'} fontWeight={400} fontSize={'20px'} color={'black'}>
        AI help you find the perfect Host for your rental space management.
      </Text>
      <Button color={'white'} size={'lg'} variant={'solid'} colorScheme="blue"  bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))">
        Find your ideal Host
      </Button>
      <Text pt={'27px'} fontWeight={400} fontSize={'16px'} color={'#A0A8D4'} maxW={'736px'} align={'center'}> 
        “Hosts help property owners who do not have time to rent their spaces and manage taking care
        of their accommodation and guests, to make their stay as satisfactory as possible.”
      </Text>
      <HStack pt={'77px'} pb={'59px'} gap={'140px'} w={'100%'} h={'100%'} justify={'center'}>
        <Stack bg={'gray.400'} justify={'center'} align={'center'} borderRadius={'40px'} w={'100%'} h={'100%'} maxW={'565px'} minH={'472px'}>
          <Text fontWeight={600} fontSize={'30px'} color={'white'} maxW={'452px'} align={'center'}>Need help managing you rental space?</Text>
          <Button color={'white'} size={'lg'} variant={'solid'} colorScheme="blue"  bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))">I have a property</Button>
        </Stack>
        <Stack bg={'gray.400'} justify={'center'} align={'center'} borderRadius={'40px'}   w={'100%'} h={'100%'} maxW={'565px'} minH={'472px'}>
          <Text fontWeight={600} fontSize={'30px'} color={'white'} maxW={'305px'} align={'center'}>Earn extra income as Host</Text>
          <Button color={'white'} size={'lg'} variant={'solid'} colorScheme="blue"  bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))">Become a Host</Button>
        </Stack>
      </HStack>
    </Stack>
  );
}

/**
 import { Layout } from '@/components/Layout';
import ProfileSelector from '@/components/ProfileSelector';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { app, database } from '../firebase';
import { log } from 'console';
import { useRouter } from 'next/router';
import { Spinner } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
const dbInstance = collection(database, 'users');

export default function Home() {
  const { data: session } = useSession();
  const [data, setdata] = useState<any>();

  const router = useRouter();
  const getByEmail = async () => {
    const q = query(dbInstance, where('email', '==', session?.user?.email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      if (doc.data() !== undefined) {
        router.push('/explore');
      }
      setdata(doc.data());
    });
  };
  useEffect(() => {
    if (session) {
      
      getByEmail();
    }
  }, [session]);

  return (
    <Layout>
      {data === undefined && <ProfileSelector />}
    </Layout>
  );
}

 */
