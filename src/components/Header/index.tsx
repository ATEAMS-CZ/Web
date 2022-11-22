import {Box, Button, Flex, Heading, Image, keyframes, Text} from '@chakra-ui/react';
import {faDiscord} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import * as React from 'react';
import {faServer, faUsers} from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  const logoPulsing = keyframes`
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    `;

  return (
    <Flex
      background={'linear-gradient(#05111500, #040e10), url(assets/img/bg.webp) no-repeat top center / cover'}
      width={'100%'}
      minHeight={'100vh'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Flex width={'100%'} padding={6} maxWidth={'1200px'} alignItems={'center'} flexDirection={{
        base: 'column-reverse',
        md: 'row',
      }}>
        <Box>
          <Heading fontSize={'5xl'} textAlign={{
            base: 'center',
            md: 'left',
          }}>ATEAMS</Heading>
          <Text marginTop={2} fontWeight={'regular'} textAlign={{
            base: 'center',
            md: 'left',
          }}>
                        Komunikace je základní kámen mezilidských vztahů, které následně utvářejí přátelství.
                        Tohle je přesně ten důvod, proč jsme se rozhodli vytvořit Discord server spojující admin-týmy významných serverů naší Minecraftové scény.
                        Cílem je propojit komunity z různých serverů, vzájemně si pomáhat v některých případech,
                        sdílet své výtvory a zažít mnohdy srandu u hraní různých her.
          </Text>

          <Flex gap={8} marginTop={6} justifyContent={{
            base: 'center',
            md: 'flex-start',
          }}>
            <Button colorScheme={'red'} leftIcon={<FontAwesomeIcon icon={faDiscord} />}>
                            Discord
            </Button>

            <Flex gap={2}>
              <Button variant='outline' leftIcon={<FontAwesomeIcon icon={faServer} />}>
                                Servery
              </Button>

              <Button variant='outline' leftIcon={<FontAwesomeIcon icon={faUsers} />}>
                                Tým
              </Button>
            </Flex>
          </Flex>
        </Box>

        <Image
          src={'assets/img/logo_big.webp'}
          height={'300px'}
          animation={`${logoPulsing} 5s ease-in-out infinite`}
        />
      </Flex>
    </Flex>
  );
};
