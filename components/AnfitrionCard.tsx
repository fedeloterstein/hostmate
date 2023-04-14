import { MdStartOutlineIcon } from '@/assets/icons/MdStartOutlineIcon';
import { Avatar, Button, HStack, Heading, Stack, Tag, Text } from '@chakra-ui/react';
import React from 'react';

export const AnfitrionCard = ({ item }: any) => {
  const {
    availability,
    email,
    image,
    languages,
    location,
    propertiesType,
    name,
    phone,
    rentalTerms,
    yearsExperience,
    description,
  } = item;
  return (
    <Stack w={'319px'} minH={"382px"} border={'1px'} borderColor={'#3378FF'} borderRadius={'8px'} p={'27px'} align={'center'} justify={'center'}>
      <Avatar size={'xl'} src={image} mb={'9px'}/>
      <Text mb={'7px'} fontWeight={700} fontSize={'14px'} color={'#4A4A4A'}>{name}</Text>
      <Text mb={'5px'} fontWeight={500} fontSize={'12px'} >{location}</Text>
      <Text mb={'11px'} fontWeight={500} fontSize={'12px'} >{description}</Text>
      <Tag justifyContent={'center'} fontWeight={500} fontSize={'10px'} color={'white'} bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))" minW={'69px'} h={'24px'}>{propertiesType}</Tag>
      <Text pb={'10px'} pt={'16px'} fontWeight={500} fontSize={'10px'}>150 reviews</Text>
      <HStack pb={'12px'}>
        <MdStartOutlineIcon />
        <MdStartOutlineIcon />
        <MdStartOutlineIcon />
        <MdStartOutlineIcon />
        <MdStartOutlineIcon />
      </HStack>
      <Button
        color={'white'}
        size={'lg'}
        variant={'solid'}
        colorScheme="blue"
        bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
      >
        Ask for interview
      </Button>

    </Stack>
  );
};
