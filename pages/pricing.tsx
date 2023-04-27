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
import PricingCars from '@/components/PricingCards';
import PricingCards from '@/components/PricingCards';

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}
    >
      {children}
    </Box>
  );
}

export default function Pricing() {
  return (
    <Layout>
          <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          Hace un Upgrate de tu cuenta
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>
        Consigue contactar con mas personas y aumenta tus posibilidades
        </Text>
      </VStack>
    <PricingCards />
    </Layout>
  );
}
