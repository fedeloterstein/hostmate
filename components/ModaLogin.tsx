import { LoginAPI, RegisterAPI } from '@/api/AuthAPI';
import { Button, Heading, Input, Modal, ModalContent, ModalOverlay, Stack, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';


export const ModaLogin = ({isOpen, onClose}: any) => {

  const [credencials, setcredencials] = useState<any>({});
  const toast = useToast()
  const router = useRouter()

  const login = async () => {
    try {
      const res = await LoginAPI(credencials.email, credencials.pass);
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      router.push('/explore')
    } catch (error: any) {
      console.log(error);
      toast({
        title: 'An error occurred.',
        description: 'Unable to create user account.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  };

  const register = async () => {
    try {
      const res = await RegisterAPI(credencials.email, credencials.pass);
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })
      router.push('/register')
    } catch (error: any) {
      console.log(error);
      toast({
        title: 'An error occurred.',
        description: 'Unable to create user account.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      })
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Stack justify={'center'} align={'center'} p={20}>
            <Heading>Login </Heading>
            <Input
              onChange={(e) => setcredencials({ ...credencials, [e.target.name]: e.target.value })}
              name="email"
              placeholder="email"
            />
            <Input
              onChange={(e) => setcredencials({ ...credencials, [e.target.name]: e.target.value })}
              name="pass"
              placeholder="pass"
            />
            <Button onClick={login}>Login</Button>
            <Heading>Register</Heading>
            <Input
              onChange={(e) => setcredencials({ ...credencials, [e.target.name]: e.target.value })}
              name="email"
              placeholder="email"
            />
            <Input
              onChange={(e) => setcredencials({ ...credencials, [e.target.name]: e.target.value })}
              name="pass"
              placeholder="pass"
            />
            <Button onClick={register}>Register</Button>
          </Stack>
        </ModalContent>
      </Modal>
    </>
  );
};
