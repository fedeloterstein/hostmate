import { AirbnbIcon } from '@/assets/icons/AirbnbIcon';
import { LocationIcon } from '@/assets/icons/LocationIcon';
import { useSession } from '@/hooks/useSession';
import { Avatar, Button, HStack, Link, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';

export const AnfitrionCard = ({ item }: any) => {
  const { image, fee, location, name, description, email, urlProfileAirbnb } = item;
  const router = useRouter();
  const { session } = useSession();

  const onclick = () => {
    if (session) {
      router.push(`/request-meeting/${email}`);
    } else {
      alert('debes hacer login');
    }
  };

  return (
    <Stack
      w={'319px'}
      minH={'382px'}
      border={'1px'}
      borderColor={'#3378FF'}
      borderRadius={'8px'}
      p={'27px'}
      align={'center'}
      justify={'center'}
      position={'relative'}
    >
      <Avatar size={'xl'} src={image} mb={'9px'} />
      <Stack justify={'center'} align={'center'} position={'absolute'} right={0} top={3} pr={4}>
        <Text
          bgClip="text"
          bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
          fontWeight={700}
          fontSize={'16px'}
        >
          {fee}% Fee
        </Text>
      </Stack>
      <Text mb={'7px'} fontWeight={700} fontSize={'14px'} color={'#4A4A4A'}>
        {name}
      </Text>
      <HStack mb={'5px'}>
        <LocationIcon />
        <Text fontWeight={500} fontSize={'12px'}>
          {location}
        </Text>
      </HStack>
      <Text mb={'11px'} fontWeight={500} fontSize={'12px'} textAlign={'center'}>
        {description}
      </Text>
      <Stack pb={'11px'}>
        <Link href={urlProfileAirbnb} isExternal>
          <AirbnbIcon />
        </Link>
      </Stack>
      <Button
        onClick={onclick}
        color={'white'}
        size={'lg'}
        variant={'solid'}
        colorScheme="blue"
        bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
      >
        Request an meeting
      </Button>
    </Stack>
  );
};
