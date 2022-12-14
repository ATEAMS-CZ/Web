import {Image, Link} from '@chakra-ui/react';
import React from 'react';
import {Fade} from 'react-awesome-reveal';

interface ServerProps {
    imgKey: string;
    name: string;
    website: string;

}

export const Server = ({imgKey, name, website}: ServerProps) => {
  return (
    <Fade direction={'up'} triggerOnce={true}>
      <Link href={website} isExternal transition={'all 0.2s'} _hover={{
        transform: 'scale(1.1)',
      }} display={'block'}>
        <Image
          src={'/assets/servers/' + imgKey + '/logo.webp'}
          height={'128px'}
          width={'128px'}
          rounded={'md'}
          margin={'0 auto 0.5rem'}
          loading={'lazy'}
          alt={name +' logo'}
        />
        <Link href={website} isExternal>
          {name}
        </Link>
      </Link>
    </Fade>
  );
};
