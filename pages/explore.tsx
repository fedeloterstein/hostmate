import { Layout } from '@/components/Layout';
import { useEffect, useState } from 'react';
import { database } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import AnfitrionCard from '@/components/AnfitrionCard';
import { SimpleGrid } from '@chakra-ui/react';


export default function Explore() {
  const dbInstance = collection(database, 'users');
  const [dataAnfitriones, setdataAnfitriones] = useState<any>();
  const getProfiles = () => {
    getDocs(dbInstance).then((data) => {
      setdataAnfitriones(data.docs.map((item) => {
        return { ...item.data(), id: item.id }
    }));
    });
  };
  useEffect(() => {
    getProfiles();
  }, []);

  return (
    <Layout>
      <SimpleGrid columns={[1, 2, 3]} spacing={5} alignSelf={'center'}>
      {dataAnfitriones &&
          dataAnfitriones.map((item: any, i: any) => {
            return <AnfitrionCard item={item} key={i}/>;
          })}
      </SimpleGrid>
    </Layout>
  );
}
