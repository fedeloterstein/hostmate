import { editProfile, editViews, getCurrentUser, getSingleUser } from '@/api/FirestoreAPI';
import { AirbnbIcon } from '@/assets/icons/AirbnbIcon';
import { LocationIcon } from '@/assets/icons/LocationIcon';
import { useSession } from '@/hooks/useSession';
import { Avatar, Button, HStack, Link, Stack, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

export const AnfitrionCard = ({ item }: any) => {
  const { image, fee, location, name, description, email, urlProfileAirbnb } = item;
  const router = useRouter();
  const { session } = useSession();
  const [currentProfile, setcurrentProfile] = useState<any>({});

  useEffect(() => {
    if (session) {
      getSingleUser(setcurrentProfile, session.email);
    }
  }, [session]);
  
  const onclick = () => {
    if (session) {
      const creditsNew = currentProfile.viewsCredits === undefined ? 1 : currentProfile.viewsCredits + 1;
      if (currentProfile.viewsCredits >= 3) {
        alert('Ups 😬 - Debes comprar Creditos')
        router.push('/pricing')
      } else {
        if (currentProfile.viewsCredits === undefined) {
          alert('🚨 Recuerda que solo tienes 3 vistas Free')
        }
        editViews(currentProfile.id, {viewsCredits: creditsNew})
        router.push(`/request-meeting/${email}`);
      }
    } else {
      alert('Debes Loguearte!');
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
