import { Layout } from '@/components/Layout';
import {
  Avatar,
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
import { log } from 'console';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { app, database } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import { Navbar } from '@/components/Navbar';

export default function Register() {
  const { data: session } = useSession();
  const router = useRouter();
  const [step, setstep] = useState('one');

  useEffect(() => {
    if (!session) {
      router.push('/');
    }
  }, [session]);

  return (
    <Stack w={'100%'} h={'100vh'} align={'center'}>
      <Navbar />
    
      {step === 'one' ? <StepOne /> : <StepTwo />}

      <HStack justify={'space-between'} w={'100%'} p={'42px'} position={'absolute'} bottom={0}>
        <CircularProgress value={40} color="#3378FF">
          <CircularProgressLabel>40%</CircularProgressLabel>
        </CircularProgress>
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
            onClick={() => setstep('two')}
          >
            Next reviews
          </Button>
        </HStack>
      </HStack>
    </Stack>
  );
}

const StepOne = () => {
  const { data: session } = useSession();
  const [data, setdata] = useState({});
  const router = useRouter();
  const dbInstance = collection(database, 'users');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { name, email, image }: any = session?.user;
    let user: any = data;
    user.image = image;
    user.email = email;
    user.name = name;
    setdata(user);

    addDoc(dbInstance, user)
      .then(() => console.log('listo'))
      .then(() => router.push('/'));
  };

  return (
    <>
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
      <Avatar size={'xl'} src={session?.user?.image as string} />
      <Stack w={'475px'} pt={'26px'}>
        <Textarea
          placeholder="description"
          name="description"
          onChange={(e) => setdata({ ...data, [e.target.name]: e.target.value })}
        />
        <Input
          placeholder="Phone Number"
          name="phone"
          onChange={(e) => setdata({ ...data, [e.target.name]: e.target.value })}
        />
        <Input
          placeholder="location"
          name="location"
          onChange={(e) => setdata({ ...data, [e.target.name]: e.target.value })}
        />
        <Select
          placeholder="Type of properties you manage"
          name="propertiesType"
          onChange={(e) => setdata({ ...data, [e.target.name]: e.target.value })}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <HStack>
          <Select
            placeholder="Select languages"
            name="languages"
            onChange={(e) => setdata({ ...data, [e.target.name]: e.target.value })}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select
            placeholder="Time Experience"
            name="timeExperience"
            onChange={(e) => setdata({ ...data, [e.target.name]: e.target.value })}
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </HStack>
        <Select
          placeholder="Add management Services"
          name="services"
          onChange={(e) => setdata({ ...data, [e.target.name]: e.target.value })}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
        <HStack justify={'space-between'}>
          <Text>% Fee management Per Reservation</Text>
          <NumberInput
            defaultValue={5}
            max={50}
            clampValueOnBlur={false}
            size={'sm'}
            width={'80px'}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </HStack>
      </Stack>
    </>
  );
};

const StepTwo = () => {
  return <p>proximamente</p>;
};
/**
   <Layout>
      <Stack padding={10}>
        <Stack>
          <Heading pb={3}>Register</Heading>
          <form onSubmit={handleSubmit}>
            <Input
              placeholder="Phone Number"
              name="phone"
              onChange={(e) => setdata({ ...data, [e.target.name]: e.target.value })}
            />
            <Input
              placeholder="location"
              name="location"
              onChange={(e) => setdata({ ...data, [e.target.name]: e.target.value })}
            />
            <Textarea 
             placeholder="description"
             name="description"
             onChange={(e) => setdata({ ...data, [e.target.name]: e.target.value })}
            />
            <Input
              placeholder="years of Experience"
              name="yearsExperience"
              onChange={(e) => setdata({ ...data, [e.target.name]: e.target.value })}
            />
            <Input
              placeholder="languages"
              name="languages"
              onChange={(e) => setdata({ ...data, [e.target.name]: e.target.value })}
            />
            <Select
              placeholder="availability"
              name="availability"
              onChange={(e) => setdata({ ...data, [e.target.name]: e.target.value })}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Select
              placeholder="rental terms"
              name="rentalTerms"
              onChange={(e) => setdata({ ...data, [e.target.name]: e.target.value })}
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
            <Button type="submit">Guardar</Button>
          </form>
        </Stack>
      </Stack>
    </Layout>
 */
