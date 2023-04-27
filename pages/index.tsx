import { Button, HStack, Heading, Image, Stack, Text, useDisclosure } from '@chakra-ui/react';
import { Layout } from '@/components/Layout';
import { useRouter } from 'next/router';
import { ModaLogin } from '@/components/ModaLogin';
import PricingCards from '@/components/PricingCards';

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
          fontWeight={600}
          fontSize={'40px'}
          pt={'22px'}
          bgClip="text"
          bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
        >
          Become a professional host  and earn extra income
        </Heading>
        <Text pt={'13px'} pb={'13px'} fontWeight={400} fontSize={'20px'} color={'black'}>
          We help you connect with homeowners to help them manage and boost their rental space.
        </Text>
        <Button
          color={'white'}
          size={'lg'}
          variant={'solid'}
          colorScheme="blue"
          bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
          onClick={onOpen}
        >
          Become a Host
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
            Monthly earning potential $1k-2k
          </Text>
        </HStack>
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
              Need help managing you rental space?
            </Text>
            <Button
              color={'white'}
              size={'lg'}
              variant={'solid'}
              colorScheme="blue"
              bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
              onClick={() => router.push('/explore')}
            >
              See Host
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
              Earn extra income as Host
            </Text>
            <Button
              color={'white'}
              size={'lg'}
              variant={'solid'}
              colorScheme="blue"
              bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
              onClick={onOpen}
            >
              Become a Host
            </Button>
          </Stack>
        </Stack>
        <PricingCards />
      </Stack>
    </Layout>
  );
}
