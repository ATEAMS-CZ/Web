import React from 'react';
import {Box, Heading, Text} from '@chakra-ui/react';
import {Fade} from 'react-awesome-reveal';

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
        <Fade direction={'up'} triggerOnce={true}>
          <Heading fontWeight={'semibold'}>{title}</Heading>
          <Text marginTop={2} fontWeight={'regular'} fontSize={'sm'}>
            {subtitle}
          </Text>
        </Fade>

        {children}
      </Box>
    </Box>
  );
};
