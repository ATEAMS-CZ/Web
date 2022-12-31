import {Avatar, Box, Link, Text} from '@chakra-ui/react';
import useSWR from 'swr';
import {getData} from '../../services';
import {DiscordUser} from '../../interfaces/DiscordUser';
import {Rank} from '../../enums/Rank';
import {getRankName} from '../../utils/rank';
import React from 'react';
import {Fade} from 'react-awesome-reveal';
import {OnlineState} from '../../enums/OnlineState';

interface TeammateProps {
    id: string;
    rank: Rank;
    link: string;
    onlineStatus?: OnlineState;
}

export const Teammate = ({id, rank, link, onlineStatus = OnlineState.OFFLINE}: TeammateProps) => {
  const {data} = useSWR<DiscordUser>('/users/'+ id, getData);
  const rankName = getRankName(rank);

  let color: string;
  switch (onlineStatus) {
    case OnlineState.ONLINE:
      color = '#48bb78';
      break;
    case OnlineState.IDLE:
      color = '#ecc94b';
      break;
    case OnlineState.DND:
      color = '#e53e3e';
      break;
    case OnlineState.OFFLINE:
      color = '#718096';
      break;

    default:
      color = '#718096';
      break;
  }

  return (
    <Fade direction={'up'} triggerOnce={true}>
      <Link href={link} transition={'all 0.2s'} _hover={{
        textDecoration: 'none',
        transform: 'scale(1.1)',
      }} display={'block'}
      opacity={onlineStatus === OnlineState.OFFLINE ? 0.6 : 1}
      >
        <Box position={'relative'}>
          <Avatar name={data?.name} src={data?.avatar} size={'2xl'}/>

          <Box boxShadow={'0 0 5px 5px '+ color +'2b'} position={'absolute'} bottom={1} right={1} backgroundColor={color} rounded={'full'} width={6} height={6}>
          </Box>
        </Box>
        <Text fontSize={'md'} marginTop={4} marginBottom={2}>{data?.name || 'Loading...'}</Text>
        <Text as={'span'} backgroundColor={rank} color={'white'} paddingX={3} fontSize={'sm'} rounded={'md'} paddingY={1} textTransform={'capitalize'}>
          {rankName}
        </Text>
      </Link>
    </Fade>
  );
};
