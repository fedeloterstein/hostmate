import { postMeetData } from '@/api/FirestoreAPI';
import { Layout } from '@/components/Layout';
import { useSessionWithRedirect } from '@/hooks/useSessionWithRedirect';
import { Button, HStack, Heading, Spinner, Stack, Textarea, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function RequestMeeting() {
  const router = useRouter();
  const [data, setdata] = useState<any>({});
  const { id } = router.query;
  const toast = useToast();

  const { session, loading } = useSessionWithRedirect('/');

  const onClick = () => {
    let meet: any = {};
    meet.description = data.description;
    meet.to = id;
    meet.from = session?.email;
    meet.date = new Date();

    postMeetData(meet)
      .then(() => console.log('meet solicitado!'))
      .then(() => router.push('/explore'));
    toast({
      title: 'Application submitted',
      description: `From ${meet.from}`,
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  };

  return loading ? (
    <Stack h={'100vh'} justify={'center'} align={'center'} p={20}>
      <Spinner />
    </Stack>
  ) : (
    <Layout>
      <Stack w={'100%'} h={'100vh'} align={'center'} p={5} gap={'18px'}>
        <HStack>
          <Heading
            bgClip="text"
            bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
            fontWeight={600}
            fontSize={['30px', '40px']}
          >
            Request a meeting
          </Heading>
        </HStack>
        <Textarea
          maxW={'470px'}
          isRequired
          placeholder="Describe the type of service you are looking for the host to perform and details about the property with url..."
          name="description"
          onChange={(e) => setdata({ ...data, [e.target.name]: e.target.value })}
        />
        <Button
          onClick={onClick}
          color={'white'}
          size={'lg'}
          variant={'solid'}
          colorScheme="blue"
          bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
        >
          Send Request
        </Button>
      </Stack>
    </Layout>
  );
}
