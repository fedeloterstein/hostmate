import { LoginAPI, RegisterAPI } from '@/api/AuthAPI';
import {
  Button,
  Heading,
  Input,
  Modal,
  ModalContent,
  ModalOverlay,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  useToast,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useState } from 'react';

export const ModaLogin = ({ isOpen, onClose }: any) => {
  const [credencials, setcredencials] = useState<any>({});
  const toast = useToast();
  const router = useRouter();

  const login = async () => {
    try {
      const res = await LoginAPI(credencials.email, credencials.pass);
      toast({
        title: 'Account created.',
        description: "We've created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      router.push('/explore');
    } catch (error: any) {
      console.log(error);
      toast({
        title: 'An error occurred.',
        description: 'Unable to create user account.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
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
      });
      router.push('/register');
    } catch (error: any) {
      console.log(error);
      toast({
        title: 'An error occurred.',
        description: 'Unable to create user account.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <Stack justify={'center'} align={'center'} p={0}>
            <Tabs>
              <TabList>
                <Tab>Become a Host</Tab>
                <Tab>I’m property owner</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Stack gap={3} justify={'center'} align={'center'} p={5}>
                    <Heading
                      bgClip="text"
                      bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
                      fontWeight={600}
                      fontSize={'18px'}
                      mb={'18px'}
                    >
                      Register
                    </Heading>
                    <Input
                      onChange={(e) =>
                        setcredencials({ ...credencials, [e.target.name]: e.target.value })
                      }
                      name="email"
                      placeholder="email"
                      mb={"12px"}
                    />
                    <Input
                      onChange={(e) =>
                        setcredencials({ ...credencials, [e.target.name]: e.target.value })
                      }
                      name="pass"
                      placeholder="pass"
                    />
                    <Button
                      onClick={register}
                      color={'white'}
                      size={'lg'}
                      variant={'solid'}
                      colorScheme="blue"
                      bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
                    >
                      Register
                    </Button>
                  </Stack>
                </TabPanel>
                <TabPanel>
                  <Stack gap={3} justify={'center'} align={'center'} p={5}>
                    <Heading
                      bgClip="text"
                      bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
                      fontWeight={600}
                      fontSize={'18px'}
                      mb={'18px'}
                    >
                      Login
                    </Heading>
                    <Input
                      onChange={(e) =>
                        setcredencials({ ...credencials, [e.target.name]: e.target.value })
                      }
                      name="email"
                      placeholder="email"
                      mb={"12px"}
                    />
                    <Input
                      onChange={(e) =>
                        setcredencials({ ...credencials, [e.target.name]: e.target.value })
                      }
                      name="pass"
                      placeholder="pass"
                     
                    />
                    <Button 
                      onClick={login}
                      color={'white'}
                      size={'lg'}
                      variant={'solid'}
                      colorScheme="blue"
                      bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
                    >
                      Login
                    </Button>
                  </Stack>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Stack>
        </ModalContent>
      </Modal>
    </>
  );
};
