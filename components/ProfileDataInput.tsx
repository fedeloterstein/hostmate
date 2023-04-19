import { uploadImage } from '@/api/ImageUpload';
import { countries } from '@/data/data';
import { Avatar, Stack, Input, Button, HStack, Textarea, Select, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { uploadImage as uploadImageAPI } from '../api/ImageUpload';
import { useRouter } from 'next/router';
import { editProfile, postUserData } from '@/api/FirestoreAPI';

const ProfileDataInput = ({ session, currentProfile }: any) => {
  const [currentImage, setcurrentImage] = useState();
  const [imageLink, setimageLink] = useState(null);
  const [data, setdata] = useState<any>({});
  const [loading, setloading] = useState(false);

  const getImage = (event: any) => {
    setloading(true)
    uploadImageAPI(event.target.files[0], setimageLink, setloading);
  };

  const uploadImage = () => {
    uploadImageAPI(currentImage, setimageLink);
  };

  const saveData = async () => {
    setloading(true)

    const { email }: any = session;
    let user: any = data;

    user.email = email;
    if (imageLink != null) {
      user.image = imageLink;
    }

    setdata(user);
    editProfile(currentProfile.id, user);
    setloading(false)
  };

  const saveProfile = async () => {
    await saveData();
  };
  return (
    <Stack w={'100%'} h={'100vh'} align={'center'}>
      <Avatar size={'xl'} src={''} />

      <Stack pt={'26px'} p={5} gap={'18px'}>
        <Input onChange={getImage} type="file" />
        <HStack>
          <Input
            isRequired
            placeholder="Name"
            name="name"
            onChange={(e) => setdata({ ...data, [e.target.name]: e.target.value })}
          />
          <Input
            isRequired
            placeholder="Last Name"
            name="lastName"
            onChange={(e) => setdata({ ...data, [e.target.name]: e.target.value })}
          />
        </HStack>
        <Textarea
          isRequired
          placeholder="Airbnb Superhost with over 3 years of experience managing 25 properties, expert at creating exceptional guest experiences."
          name="description"
          onChange={(e) => setdata({ ...data, [e.target.name]: e.target.value })}
        />
        <Select
          isRequired
          placeholder="location"
          name="location"
          onChange={(e) => setdata({ ...data, [e.target.name]: e.target.value })}
        >
          {countries.map((countri, index) => (
            <option value={countri} key={index}>
              {countri}
            </option>
          ))}
        </Select>
        <HStack justify={'space-between'}>
          <Text fontWeight={400} fontSize={'14px'} color={'black'}>
            Airbnb Profile & Reviews
          </Text>
          <Input
            maxW={'219px'}
            placeholder="Airbnb profile URL"
            name="urlProfileAirbnb"
            onChange={(e) => setdata({ ...data, [e.target.name]: e.target.value })}
          />
        </HStack>
        <HStack justify={'space-between'}>
          <Text fontWeight={400} fontSize={'14px'} color={'black'}>
            % Fee management Per Reservation
          </Text>
          <Select
            isRequired
            maxW={'219px'}
            placeholder="Select one"
            name="fee"
            onChange={(e) => setdata({ ...data, [e.target.name]: e.target.value })}
          >
            <option value={'6-10'}>6% - 10% Fee</option>
            <option value={'10-15'}>🔥 10% - 15% (Most Popular)</option>
            <option value={'15-20'}>15% - 20% Fee</option>
          </Select>
        </HStack>
      </Stack>
      <Stack justify={['center']} w={'100%'} p={'42px'} direction={['column', 'column', 'row']}>
        <Button
          isLoading={loading}
          color={'white'}
          size={'lg'}
          variant={'solid'}
          colorScheme="blue"
          bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
          onClick={saveProfile}
        >
          Save Profile
        </Button>
      </Stack>
    </Stack>
  );
};

export default ProfileDataInput;
