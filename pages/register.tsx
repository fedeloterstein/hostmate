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
import { postUserData } from '@/api/FirestoreAPI';
import { countries, propertiesType, languages, timeExperience, services } from '../data/data';

export default function Register() {
  const [loading, setloading] = useState(true);
  const [step, setstep] = useState('one');
  const [data, setdata] = useState({});
  const router = useRouter();
  const [session, setsession] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (res: any) => {
      if (!res?.accessToken) {
        router.push('/');
        setsession(undefined);
      } else {
        setloading(false);
        setsession(res);
      }
    });
  }, []);

  let porc = (Object.keys(data).length / 10) * 100;

  const saveData = async () => {
    console.log('entre');

    const { email }: any = session;
    let user: any = data;

    user.email = email;

    setdata(user);
    postUserData(user)
      .then(() => console.log('listo'))
      .then(() => router.push('/explore'));
  };

  const nextStep = async () => {
    if (step === 'one') {
      setstep('two');
    } else {
      await saveData();
    }
  };
  return (
    <>
      <Stack w={'100%'} h={'100vh'} align={'center'}>
        <Navbar />

        {step === 'one' ? <StepOne setdata={setdata} data={data} /> : <StepTwo />}
      </Stack>
      <Stack
        justify={['center', 'space-between']}
        w={'100%'}
        p={'42px'}
        direction={['column', 'column', 'row']}
      >
        <Box>
          <CircularProgress value={porc} color="#3378FF">
            <CircularProgressLabel>{porc}%</CircularProgressLabel>
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
            onClick={nextStep}
          >
            Next reviews
          </Button>
        </HStack>
      </Stack>
    </>
  );
}

const StepOne = ({ setdata, data }: any) => {
  const { data: session } = useSession();

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
      <Stack pt={'26px'} p={5}>
        <HStack>
          <Input
            placeholder="Name"
            name="name"
            onChange={(e) => setdata({ ...data, [e.target.name]: e.target.value })}
          />
          <Input
            placeholder="Last Name"
            name="lastName"
            onChange={(e) => setdata({ ...data, [e.target.name]: e.target.value })}
          />
        </HStack>
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
        <Select
          placeholder="location"
          name="location"
          onChange={(e) => setdata({ ...data, [e.target.name]: e.target.value })}
        >
          {countries.map((countri, index) => (
            <option value={countri} key={index}>{countri}</option>
          ))}
        </Select>
        <Select
          placeholder="Type of properties you manage"
          name="propertiesType"
          onChange={(e) => setdata({ ...data, [e.target.name]: e.target.value })}
        >
              {propertiesType.map((propertieType, index) => (
            <option value={propertieType} key={index}>{propertieType}</option>
          ))}
        </Select>
        <HStack>
          <Select
            placeholder="Select languages"
            name="languages"
            onChange={(e) => setdata({ ...data, [e.target.name]: e.target.value })}
          >
              {languages.map((language, index) => (
            <option value={language} key={index}>{language}</option>
          ))}
          </Select>
          <Select
            placeholder="Time Experience"
            name="timeExperience"
            onChange={(e) => setdata({ ...data, [e.target.name]: e.target.value })}
          >
              {timeExperience.map((time, index) => (
            <option value={time} key={index}>{time}</option>
          ))}
          </Select>
        </HStack>
        <Select
          placeholder="Add management Services"
          name="services"
          onChange={(e) => setdata({ ...data, [e.target.name]: e.target.value })}
        >
           {services.map((serv, index) => (
            <option value={serv} key={index}>{serv}</option>
          ))}
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
  return <Heading>En contruccion 🚧🚀...</Heading>;
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
