import { LoginAPI, RegisterAPI } from '@/api/AuthAPI';
import { Button, Heading, Input, Stack, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export default function NewLogin() {
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
      router.push('/exito')
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
      router.push('/exito')
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
    <Stack h={'100vh'} justify={'center'} align={'center'} p={20}>
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
  );
}
