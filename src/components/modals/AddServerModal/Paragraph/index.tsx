import {Box, Heading, Text} from '@chakra-ui/react';
import React from 'react';

interface ParagraphProps {
    title: string;
    text: string;
}

export const Paragraph = ({title, text}: ParagraphProps) => {
  return (
    <Box>
      <Heading fontSize={'15px'}>{title}</Heading>
      <Text fontSize={'13px'} marginTop={2}>{text}</Text>
    </Box>
  );
};
