import { SimpleGrid, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

const ProfileSelector = () => {
  return (
    <Stack gap={10} padding={10} h={'100vh'} justify={'center'}>
      <Link href={'/explore'}>
        <Stack height={200} bgColor={'purple.900'} justify={'center'} align={'center'}>
          <Text fontWeight={700} fontSize={50}>
            Owner 🏠
          </Text>
        </Stack>
      </Link>
      <Link href={'/register'}>
      <Stack height={200} bgColor={'yellow.900'} justify={'center'} align={'center'}>
        <Text fontWeight={700} fontSize={50}>
          Anfitrion 👤
        </Text>
      </Stack>
      </Link>
    </Stack>
  );
};

export default ProfileSelector;
