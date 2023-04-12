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
