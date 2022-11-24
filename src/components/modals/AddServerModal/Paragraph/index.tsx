import {Box, Heading, Text} from '@chakra-ui/react';
import React from 'react';

interface ParagraphProps {
    title: string;
    text: string;
    optional?: boolean;
}

export const Paragraph = ({title, text, optional}: ParagraphProps) => {
  return (
    <Box>
      <Heading fontSize={'15px'}>{optional && <Text as="span" color={'brand.100'}>*</Text>} {title}</Heading>
      <Text fontSize={'13px'} marginTop={2}>{text}</Text>
    </Box>
  );
};
