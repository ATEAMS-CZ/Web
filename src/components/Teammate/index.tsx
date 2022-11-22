import {Avatar, Link, Text} from '@chakra-ui/react';
import useSWR from 'swr';
import {getData} from '../../services';
import {DiscordUser} from '../../interfaces/DiscordUser';
import {Rank} from '../../enums/Rank';
import {getRankName} from '../../utils/rank';
import React from 'react';
import {Fade} from 'react-awesome-reveal';

interface TeammateProps {
    id: string;
    rank: Rank;
    link: string;
}

export const Teammate = ({id, rank, link}: TeammateProps) => {
  const {data} = useSWR<DiscordUser>('/users/'+ id, getData);

  return (
    <Fade direction={'up'} triggerOnce={true}>
      <Link href={link} transition={'all 0.2s'} _hover={{
        textDecoration: 'none',
        transform: 'scale(1.1)',
      }}>
        <Avatar name={data?.name} src={data?.avatar} size={'2xl'} />
        <Text fontSize={'md'} marginTop={4} marginBottom={2}>{data?.name || 'Loading...'}</Text>
        <Text as={'span'} backgroundColor={rank} color={'white'} paddingX={3} fontSize={'sm'} rounded={'md'} paddingY={1} textTransform={'capitalize'}>
          {getRankName(rank)}
        </Text>
      </Link>
    </Fade>
  );
};
