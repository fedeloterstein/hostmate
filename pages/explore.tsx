import { Layout } from '@/components/Layout';
import { useEffect, useState } from 'react';
import { Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import { AnfitrionCard } from '@/components/AnfitrionCard';
import { getAllUsers } from '@/api/FirestoreAPI';

export default function Explore() {
  const [dataAnfitriones, setdataAnfitriones] = useState<any>();

  useEffect(() => {
    getAllUsers(setdataAnfitriones);
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
          Conoce anfitriones 
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
