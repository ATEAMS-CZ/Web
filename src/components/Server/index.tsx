import {Box, Image, Link} from '@chakra-ui/react';
import React from 'react';

interface ServerProps {
    imgKey: string;
    name: string;
    website: string;

}

export const Server = ({imgKey, name, website}: ServerProps) => {
  return (
    <Box transition={'all 0.2s'} cursor={'pointer'} _hover={{
      transform: 'scale(1.1)',
    }}>
      <Image
        src={'/assets/servers/' + imgKey + '/logo.webp'}
        height={'128px'}
        rounded={'md'}
        marginBottom={2}
      />
      <Link href={website} isExternal>
        {name}
      </Link>
    </Box>
  );
};
