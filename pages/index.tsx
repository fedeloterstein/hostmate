import { Navbar } from '@/components/Navbar';
import {
  Button,
  HStack,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Layout } from '@/components/Layout';
import ProfileSelector from '@/components/ProfileSelector';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { app, database } from '../firebase';
import { log } from 'console';
import { useRouter } from 'next/router';
import { Spinner } from '@chakra-ui/react';

const dbInstance = collection(database, 'users');

const origin = typeof window === 'undefined' ? '' : window.location.origin;
const img1 = `${origin}/images/home1.png`;
const img2 = `${origin}/images/home2.png`;
const img3 = `${origin}/images/home3.png`;

export default function Home() {
  const { data: session } = useSession();
  const [data, setdata] = useState<any>();

  const router = useRouter();
  const getByEmail = async () => {
    const q = query(dbInstance, where('email', '==', session?.user?.email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      if (doc.data() !== undefined) {
        router.push('/register');
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
      <Stack w={'100%'} justify={'flex-start'} align={'center'} bg={'white'}>
        <Image src={img3} />
        <Heading
          fontWeight={600}
          fontSize={'40px'}
          pt={'22px'}
          bgClip="text"
          bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
        >
          Problems managing your rental space?
        </Heading>
        <Text pt={'13px'} pb={'13px'} fontWeight={400} fontSize={'20px'} color={'black'}>
          AI help you find the perfect Host for your rental space management.
        </Text>
        <Text fontWeight={400} fontSize={'16px'} color={'#A0A8D4'} maxW={'736px'} align={'center'}>
          “Hosts are the person between the property owners and guest, they help the homeowners that
          don’t have time to manage their rent spaces, to taking care of their accommodation and
          guests and boosting his rental spaces for a fee.”
        </Text>
        <Stack pt={'77px'} pb={'59px'}  w={'100%'} h={'100%'} justify={'center'} align={'center'} direction={['column', 'column', 'row']} gap={10}>
          <Stack
            backgroundImage={img1}
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
            backgroundColor={'black'}
            justify={'center'}
            align={'center'}
            borderRadius={'40px'}
            w={'100%'}
            h={'100%'}
            maxW={'565px'}
            minH={'472px'}
          >
            <Text
              fontWeight={600}
              fontSize={'30px'}
              color={'white'}
              maxW={'452px'}
              align={'center'}
            >
              Need help managing you rental space?
            </Text>
            <Button
              color={'white'}
              size={'lg'}
              variant={'solid'}
              colorScheme="blue"
              bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
            >
              See Host
            </Button>
          </Stack>
          <Stack
            backgroundImage={img2}
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
            backgroundColor={'black'}
            justify={'center'}
            align={'center'}
            borderRadius={'40px'}
            w={'100%'}
            h={'100%'}
            maxW={'565px'}
            minH={'472px'}
          >
            <Text
              fontWeight={600}
              fontSize={'30px'}
              color={'white'}
              maxW={'305px'}
              align={'center'}
            >
              Earn extra income as Host
            </Text>
            <Button
              color={'white'}
              size={'lg'}
              variant={'solid'}
              colorScheme="blue"
              bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
              onClick={() => signIn()}
            >
              Become a Host
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Layout>
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
