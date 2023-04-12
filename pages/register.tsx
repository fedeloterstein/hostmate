import { Layout } from '@/components/Layout';
import { Button, Heading, Input, Select, Stack, Text, Textarea } from '@chakra-ui/react';
import { log } from 'console';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { app, database } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';

export default function Register() {
  const { data: session } = useSession();
  const [data, setdata] = useState({});
  const router = useRouter()
  const dbInstance = collection(database, 'users');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { name, email, image }: any = session?.user;
    let user: any = data;
    user.image = image;
    user.email = email;
    user.name = name;
    setdata(user);

    addDoc(dbInstance, user).then(() => console.log('listo')).then(() => router.push('/'))
  };

  return (
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
  );
}
