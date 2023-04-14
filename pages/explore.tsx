import { Layout } from '@/components/Layout';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { Heading, SimpleGrid } from '@chakra-ui/react';
import { AnfitrionCard } from '@/components/AnfitrionCard';
import { database } from '@/firebase.config';

export default function Explore() {
  const dbInstance = collection(database, 'users');
  const [dataAnfitriones, setdataAnfitriones] = useState<any>();
  const getProfiles = () => {
    getDocs(dbInstance).then((data) => {
      setdataAnfitriones(
        data.docs.map((item) => {
          return { ...item.data(), id: item.id };
        }),
      );
    });
  };
  useEffect(() => {
    getProfiles();
  }, []);

  return (
    <Layout>
      <Heading>En contruccion 🚧🚀...</Heading>
      <SimpleGrid p={5} columns={[1, 2, 3]} spacing={5} alignSelf={'center'}>
        {dataAnfitriones &&
          dataAnfitriones.map((item: any, i: any) => {
            return <AnfitrionCard item={item} key={i} />;
          })}
      </SimpleGrid>
    </Layout>
  );
}
