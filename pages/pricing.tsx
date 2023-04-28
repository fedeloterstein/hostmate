import { ReactNode } from 'react';
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { Layout } from '@/components/Layout';
import PricingCards from '@/components/PricingCards';

export default function Pricing() {
  return (
    <Layout>
      <VStack spacing={2} textAlign="center">
        <Heading
          as="h1"
          bgClip="text"
          bgGradient="linear(to-r, rgba(51, 120, 255, 1), rgba(112, 0, 255, 1))"
          fontWeight={600}
          fontSize={['30px', '40px']}
        >
          Actualiza a Premium hoy
        </Heading>
        <Text fontSize="lg" color={'black'} fontWeight={400} fontStyle={'20px'}>
          Conecta sin límites con propietarios y haz crecer tus ingresos como anfitrión profesional.
        </Text>
      </VStack>
      <PricingCards />
    </Layout>
  );
}
