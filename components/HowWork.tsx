import { HStack, Heading, Stack, Text } from '@chakra-ui/react';
import React from 'react';

export const HowWork = () => {
  return (
    <Stack align={'center'}>
      <Heading
        textAlign={'center'}
        fontWeight={600}
        fontSize={'40px'}
        pt={'13px'}
        pb={'21px'}
        bgClip="text"
        bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
      >
        ¿Cómo funciona?
      </Heading>
      <Stack direction={['column', 'column', 'row']} gap={6}>
        <Text fontWeight={600} fontSize={'22px'} color={'black'}>ℹ️ Publica tu perfil</Text>
        <Text fontWeight={600} fontSize={'22px'} color={'black'}>💰 Recibe entrevistas</Text>
        <Text fontWeight={600} fontSize={'22px'} color={'black'}>😎 Conoce propietarios</Text>
      </Stack>
    </Stack>
  );
};
