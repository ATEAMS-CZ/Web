import * as React from 'react';
import {
  Box, Button,
  ChakraProvider, Divider, Flex, Link, Text,
} from '@chakra-ui/react';
import {Header} from './components/Header';
import {theme} from './theme';
import {Server} from './components/Server';
import {Teammate} from './components/Teammate';
import {Rank} from './enums/Rank';
import {Section} from './components/Section';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDiscord, faInstagram, faGithub} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faPlus} from '@fortawesome/free-solid-svg-icons';
import {AddServerModal} from './components/modals/AddServerModal';
import {Fade} from 'react-awesome-reveal';

export const App = () => {
  const [addServer, setAddServer] = React.useState(false);

  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Flex background={'dark.700'} flexDirection={'column'} gap={24}>
        <Section title={'Minecraft servery'} id={'servery'} subtitle={'Členové admin-týmů všech těchto serverů mohou mít na Discord serveru přidělenou roli podle toho, na jakém serveru působí.'}>
          <Flex justifyContent={'center'} gap={12} flexWrap={'wrap'} maxWidth={'700px'} margin={'50px auto 0px auto'}>
            <Server imgKey={'qplay'} name={'QPlay.cz'} website={'https://qplay.cz/'} />
            <Server imgKey={'trenend'} name={'Trenend'} website={'https://trenend.eu/'} />
            <Server imgKey={'basicland'} name={'BasicLand'} website={'https://basicland.cz/'} />
            <Server imgKey={'minicraft'} name={'Minicraft.cz'} website={'https://minicraft.cz/'} />
            <Server imgKey={'kastrolcraft'} name={'KastrolCraft.cz'} website={'https://kastrolcraft.cz/'} />
            <Server imgKey={'craftmania'} name={'CraftMania.cz'} website={'https://craftmania.cz/'} />
            <Server imgKey={'warfaremc'} name={'WarfareMC.eu'} website={'https://warfaremc.eu/'} />
            <Server imgKey={'czech-survival'} name={'Czech-Survival.cz'} website={'https://czech-survival.cz/'} />
            <Server imgKey={'midnightmc'} name={'Midnightmc'} website={'https://midnightmc.cz/'} />
            <Server imgKey={'slux'} name={'Slux'} website={'https://slux.cz/'} />
            <Server imgKey={'minehub'} name={'MineHub.cz'} website={'https://minehub.cz/'} />
            <Server imgKey={'matherion'} name={'Matherion'} website={'https://matherion.eu/'} />
            <Server imgKey={'lendmark'} name={'LendMark.sk'} website={'https://lendmark.sk/'} />
            <Server imgKey={'voxelcraft'} name={'VoxelCraft.cz'} website={'https://voxelcraft.cz/'} />
          </Flex>

          <Fade direction={'up'} triggerOnce={true}>
            <Button onClick={() => {
              setAddServer(true);
            }} variant={'outline'} marginTop={8} colorScheme={'red'} leftIcon={<FontAwesomeIcon icon={faPlus} />}>Přidat server</Button>

            <Divider margin={'50px auto'} width={'80px'} backgroundColor={'brand.100'} borderColor={'brand.100'} opacity={1} height={1} rounded={'md'} />
          </Fade>
        </Section>

        <Section title={'Tým stojící za ATEAMS'} id={'tym'} subtitle={
          <>
                  Všichni dělají svou práci dobrovolně pro komunitu <Text as={'span'} color={'red.500'}>❤</Text>
          </>
        }>
          <Flex justifyContent={'center'} gap={12} flexWrap={'wrap'} maxWidth={'700px'} margin={'50px auto 0px auto'}>
            <Teammate id={'279012818886590464'} rank={Rank.MANAGER} link={'https://www.instagram.com/theerikcz/'} />
            <Teammate id={'245621893900664835'} rank={Rank.MODERATOR} link={'https://www.instagram.com/ta.lutysek/'} />
            <Teammate id={'512620748708380683'} rank={Rank.MODERATOR} link={'https://laby.net/@Fjuro'} />
            <Teammate id={'535708984959827978'} rank={Rank.WEB_MASTER} link={'https://gggedr.lol/'}/>
            <Teammate id={'284973303032971264'} rank={Rank.DEVELOPER} link={'https://laby.net/@ZorTik'}/>
            <Teammate id={'485434705903222805'} rank={Rank.DEVELOPER} link={'https://cybo.dev/'}/>
            <Teammate id={'442680903555350539'} rank={Rank.HELPER} link={'https://laby.net/@_OnlyAri_'} />
            <Teammate id={'706933274098008175'} rank={Rank.HELPER} link={'https://laby.net/@iSquu'}/>
            <Teammate id={'207576945779539968'} rank={Rank.HELPER} link={'https://laby.net/@Mirayi_'}/>
            <Teammate id={'261525552014426114'} rank={Rank.HELPER} link={'https://laby.net/@Dragan'}/>
            <Teammate id={'529425908222918656'} rank={Rank.HELPER} link={'https://laby.net/@CocoWolffy'}/>
          </Flex>
        </Section>

        <Flex justifyContent={'center'} padding={8} marginTop={24} textAlign={'center'}>
          <Box>
            <Flex justifyContent={'center'} marginBottom={4} gap={4} fontSize={'2xl'}>
              <Link href={'https://discord.com/invite/9QkwCR2'} aria-label={'ATEAMS.cz Discord'} isExternal>
                <FontAwesomeIcon icon={faDiscord} />
              </Link>
              <Link href={'https://github.com/ATEAMS-CZ'} aria-label={'ATEAMS.cz GitHub'} isExternal>
                <FontAwesomeIcon icon={faGithub} />
              </Link>
              <Link href={'mailto:management@ateams.cz'} aria-label={'ATEAMS.cz Email'} isExternal>
                <FontAwesomeIcon icon={faEnvelope} />
              </Link>
            </Flex>
            <Text>© ATEAMS {new Date().getFullYear()}</Text>
            <Text> Nejsme spojeni s Mojang AB</Text>
          </Box>
        </Flex>
      </Flex>
      <AddServerModal isOpen={addServer} onClose={() => {
        setAddServer(false);
      }} />
    </ChakraProvider>
  );
};
