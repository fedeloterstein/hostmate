import {
  Avatar,
  Box,
  Button,
  CircularProgress,
  CircularProgressLabel,
  Container,
  HStack,
  Heading,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Progress,
  Select,
  Stack,
  Text,
  Textarea,
  useColorMode,
} from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { auth, database } from '@/firebase.config';
import { collection, addDoc, updateDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { Navbar } from '@/components/Navbar';
import { onAuthStateChanged } from 'firebase/auth';
import { postUserData, editProfile, getSingleUser } from '@/api/FirestoreAPI';
import { countries, propertiesType, languages, timeExperience, services } from '../data/data';
import { uploadImage as uploadImageAPI } from '../api/ImageUpload';
import { Layout } from '@/components/Layout';

export default function Register() {
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState({});
  const router = useRouter();
  const [session, setsession] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (res: any) => {
      if (!res?.accessToken) {
        router.push('/');
        setsession(undefined);
      } else {
        setsession(res);
      }
    });
  }, []);

  let porc = (Object.keys(data).length / 6) * 100;

  const [imageLink, setimageLink] = useState(null);
  const getImage = (event: any) => {
    setloading(true);
    uploadImageAPI(event.target.files[0], setimageLink, setloading);
  };

  const saveData = async () => {
    const { email }: any = session;
    let user: any = data;

    user.email = email;
    if (imageLink != null) {
      user.image = imageLink;
    }

    setdata(user);
    postUserData(user)
      .then(() => console.log('listo'))
      .then(() => router.push('/explore'));
  };

  const saveProfile = async () => {
    await saveData();
  };
  return (
    <Layout>
      <Stack w={'100%'} h={'100vh'} align={'center'}>
        <Heading
          fontWeight={600}
          fontSize={'40px'}
          pt={'22px'}
          pb={'22px'}
          bgClip="text"
          bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
        >
          Complete your profile as Host
        </Heading>
        <Avatar size={'xl'} />

        <Stack pt={'26px'} p={5} gap={'18px'}>
          <Input onChange={getImage} type="file" />
          <HStack>
            <Input
              isRequired
              placeholder="Name"
              name="name"
              onChange={(e) => setdata({ ...data, [e.target.name]: e.target.value })}
            />
            <Input
              isRequired
              placeholder="Last Name"
              name="lastName"
              onChange={(e) => setdata({ ...data, [e.target.name]: e.target.value })}
            />
          </HStack>
          <Textarea
            isRequired
            placeholder="Airbnb Superhost with over 3 years of experience managing 25 properties, expert at creating exceptional guest experiences."
            name="description"
            onChange={(e) => setdata({ ...data, [e.target.name]: e.target.value })}
          />
          <Select
            isRequired
            placeholder="location"
            name="location"
            onChange={(e) => setdata({ ...data, [e.target.name]: e.target.value })}
          >
            {countries.map((countri, index) => (
              <option value={countri} key={index}>
                {countri}
              </option>
            ))}
          </Select>
          <HStack justify={'space-between'}>
            <Text fontWeight={400} fontSize={'14px'} color={'black'}>
              Airbnb Profile & Reviews
            </Text>
            <Input
              maxW={'219px'}
              placeholder="Airbnb profile URL"
              name="urlProfileAirbnb"
              onChange={(e) => setdata({ ...data, [e.target.name]: e.target.value })}
            />
          </HStack>
          <HStack justify={'space-between'}>
            <Text fontWeight={400} fontSize={'14px'} color={'black'}>
              % Fee management Per Reservation
            </Text>
            <Select
              isRequired
              maxW={'219px'}
              placeholder="Sele ct one"
              name="fee"
              onChange={(e) => setdata({ ...data, [e.target.name]: e.target.value })}
            >
              <option value={'6-10'}>6% - 10% Fee</option>
              <option value={'10-15'}>🔥 10% - 15% (Most Popular)</option>
              <option value={'15-20'}>15% - 20% Fee</option>
            </Select>
          </HStack>
        </Stack>
      </Stack>
      <Stack
        justify={['center', 'space-between']}
        w={'100%'}
        p={'42px'}
        direction={['column', 'column', 'row']}
      >
        <Box>
          <CircularProgress value={Math.trunc(porc) } color="#3378FF">
            <CircularProgressLabel>{Math.trunc(porc) }%</CircularProgressLabel>
          </CircularProgress>
        </Box>

        <HStack>
          <Button
            color={'white'}
            size={'lg'}
            variant="ghost"
            bgClip="text"
            bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
            onClick={() => router.push('/explore')}
          >
            Skip for now
          </Button>
          <Button
            color={'white'}
            size={'lg'}
            variant={'solid'}
            colorScheme="blue"
            bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
            onClick={saveProfile}
            isLoading={loading}
          >
            Save Profile
          </Button>
        </HStack>
      </Stack>
    </Layout>
  );
}
