import { Layout } from '@/components/Layout';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { Heading, SimpleGrid, Stack } from '@chakra-ui/react';
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
      <Stack align={'center'}>
        <Heading
          bgClip="text"
          bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
          fontWeight={600}
          fontSize={['30px', '40px']}
        >
          Great Host for you
        </Heading>
        <SimpleGrid p={5} columns={[1, 1, 2, 3]} spacing={5} alignSelf={'center'}>
          {dataAnfitriones &&
            dataAnfitriones.map((item: any, i: any) => {
              return <AnfitrionCard item={item} key={i} />;
            })}
        </SimpleGrid>
      </Stack>
    </Layout>
  );
}
