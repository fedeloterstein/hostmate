import { getMeetUser } from '@/api/FirestoreAPI';
import { Layout } from '@/components/Layout';
import { useSessionWithRedirect } from '@/hooks/useSessionWithRedirect';
import {
  Heading,
  Spinner,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';

export default function Interviews() {
  const [meets, setmeets] = useState<any[]>([]);
  const { session, loading } = useSessionWithRedirect('/');

  useEffect(() => {
    if (session) {
      getMeetUser(setmeets, session.email);
    }
  }, [session]);

  return loading ? (
    <Stack h={'100vh'} justify={'center'} align={'center'} p={20}>
      <Spinner />
    </Stack>
  ) : (
    <Layout>
      <Stack align={'center'} pb={'48px'}>
        <Heading
          bgClip="text"
          bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
          fontWeight={600}
          fontSize={['30px', '40px']}
        >
          My requests meetings
        </Heading>
      </Stack>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th
                bgClip="text"
                bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
              >
                EMAIL
              </Th>
              <Th
                bgClip="text"
                bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
              >
                INFORMATION
              </Th>
              <Th
                bgClip="text"
                bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
              >
                MEETING
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {meets &&
              meets.map((meet: any, index: any) => {
                return (
                  <Tr key={index}>
                    <Td>{meet.from}</Td>
                    <Td>{meet.description}</Td>
                    <Td>Link Meet</Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </Layout>
  );
}
