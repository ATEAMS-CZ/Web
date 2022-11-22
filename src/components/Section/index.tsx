import React from 'react';
import {Box, Heading, Text} from '@chakra-ui/react';

interface SectionProps {
    title: string | React.ReactNode;
    subtitle: string | React.ReactNode;
    children: React.ReactNode;
    id?: string;
}

export const Section = ({title, subtitle, children, id}: SectionProps) => {
  return (
    <Box margin={'0 auto'} padding={6} width={'100%'} maxWidth={'1200px'} id={id}>
      <Box width={'100%'} textAlign={'center'}>
        <Heading fontWeight={'semibold'}>{title}</Heading>
        <Text marginTop={2} fontWeight={'regular'} fontSize={'sm'}>
          {subtitle}
        </Text>

        {children}
      </Box>
    </Box>
  );
};
