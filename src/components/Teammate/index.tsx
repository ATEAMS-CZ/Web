import {Avatar, Box, Text} from '@chakra-ui/react';
import useSWR from 'swr';
import {getData} from '../../services';
import {DiscordUser} from '../../interfaces/DiscordUser';
import {Rank} from '../../enums/Rank';
import {getRankName} from '../../utils/rank';
import React from 'react';

interface TeammateProps {
    id: string;
    rank: Rank;
}

export const Teammate = ({id, rank}: TeammateProps) => {
  const {data} = useSWR<DiscordUser>('/users/'+ id, getData);

  return (
    <Box>
      <Avatar name={data?.name} src={data?.avatar} size={'2xl'} />
      <Text fontSize={'md'} marginTop={4} marginBottom={2}>{data?.name || 'Loading...'}</Text>
      <Text as={'span'} backgroundColor={rank} color={'white'} paddingX={3} fontSize={'sm'} rounded={'md'} paddingY={1} textTransform={'capitalize'}>
        {getRankName(rank)}
      </Text>
    </Box>
  );
};
