import { Button, HStack, Heading, Image, Stack, Text, useDisclosure } from '@chakra-ui/react';
import { Layout } from '@/components/Layout';
import { useRouter } from 'next/router';
import { ModaLogin } from '@/components/ModaLogin';
import PricingCards from '@/components/PricingCards';
import { HowWork } from '@/components/HowWork';

const origin = typeof window === 'undefined' ? '' : window.location.origin;
const img1 = `${origin}/images/home1.png`;
const img2 = `${origin}/images/home2.png`;
const img3 = `${origin}/images/home3.png`;

export default function Home() {
  const router = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Layout>
      <Stack w={'100%'} justify={'flex-start'} align={'center'} bg={'white'}>
        <Image src={img3} />
        <ModaLogin isOpen={isOpen} onClose={onClose} />
        <Heading
          maxW={'817px'}
          textAlign={'center'}
          fontWeight={600}
          fontSize={'40px'}
          pt={'22px'} 
          bgClip="text"
          bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
        >
          Encuentra anfitriones profesionales de Airbnb en Latinoamérica.
        </Heading>
        <Text
          maxW={'939px'}
          pt={'13px'}
          pb={'13px'}
          fontWeight={400}
          fontSize={'20px'}
          color={'black'}
          textAlign={'center'}
        >
          Nuestro directorio conecta propietarios con anfitriones profesionales para gestionar e
          impulsar una experiencia única en los espacios vacacionales y en renta.
        </Text>
        <Button
          color={'white'}
          size={'lg'}
          variant={'solid'}
          colorScheme="blue"
          bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
          onClick={onOpen}
        >
          Regístrate gratis como anfitrión
        </Button>
        <HStack>
          <Text>🔥</Text>
          <Text
            fontWeight={400}
            fontSize={'12px'}
            bgClip="text"
            bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
            maxW={'736px'}
            align={'center'}
          >
             Gana desde $1,000-2,000 USD al mes
          </Text>
        </HStack>
        <HowWork />
        <Stack
          pt={'77px'}
          pb={'59px'}
          w={'100%'}
          h={'100%'}
          justify={'center'}
          align={'center'}
          direction={['column', 'column', 'row']}
          gap={10}
        >
          <Stack
            backgroundImage={img1}
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
            backgroundColor={'black'}
            justify={'center'}
            align={'center'}
            borderRadius={'40px'}
            w={'100%'}
            h={'100%'}
            maxW={'565px'}
            minH={'472px'}
          >
            <Text
              fontWeight={600}
              fontSize={'30px'}
              color={'white'}
              maxW={'452px'}
              align={'center'}
            >
              ¿Necesitas ayuda para gestionar tus espacios en renta?
            </Text>
            <Button
              color={'white'}
              size={'lg'}
              variant={'solid'}
              colorScheme="blue"
              bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
              onClick={() => router.push('/explore')}
            >
              Conoce anfitriones profesionales
            </Button>
          </Stack>
          <Stack
            backgroundImage={img2}
            bgRepeat="no-repeat"
            bgSize="cover"
            bgPosition="center"
            backgroundColor={'black'}
            justify={'center'}
            align={'center'}
            borderRadius={'40px'}
            w={'100%'}
            h={'100%'}
            maxW={'565px'}
            minH={'472px'}
          >
            <Text
              fontWeight={600}
              fontSize={'30px'}
              color={'white'}
              maxW={'305px'}
              align={'center'}
            >
              Ganar más como anfitrión profesional
            </Text>
            <Button
              color={'white'}
              size={'lg'}
              variant={'solid'}
              colorScheme="blue"
              bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
              onClick={onOpen}
            >
              Regístrate gratis
            </Button>
          </Stack>
        </Stack>
        <PricingCards />
      </Stack>
    </Layout>
  );
}
