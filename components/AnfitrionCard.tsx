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
    <Stack border={'1px'} borderColor={'#3378FF'} borderRadius={'8px'} p={'27px'} align={'center'} justify={'center'}>
      <Avatar size={'xl'} src={image} mb={'33px'}/>
      <Text fontWeight={700} fontSize={'14px'} color={'#4A4A4A'}>{name}</Text>
      <Text>{location}</Text>
      <Text>{description}</Text>
      <Tag>{propertiesType}</Tag>
      <Text>150 reviews</Text>
      <HStack>
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
