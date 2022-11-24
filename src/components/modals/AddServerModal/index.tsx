import React from 'react';
import {
  Button, Flex, Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from '@chakra-ui/react';
import {Paragraph} from './Paragraph';

interface AddServerModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AddServerModal = ({isOpen, onClose}: AddServerModalProps) => {
  return (
    <Modal
      isCentered
      onClose={onClose}
      isOpen={isOpen}
      motionPreset='slideInBottom'
    >
      <ModalOverlay />
      <ModalContent backgroundColor={'gray.800'}>
        <ModalHeader color={'brand.50'}>Podmínky přijetí serveru</ModalHeader>
        <ModalBody>
          <Flex gap={8} flexDirection={'column'}>
            <Paragraph title={'Profesionalita a kvalitní reprezentace'} text={'Pozitivní recenze a kvalitní ohlasy na server dovedou tuto oblast skvěle popsat. Mimo jiné by se sám server měl prezentovat nekonfliktně a taktéž by měl být co nejvíce korektní'} />
            <Paragraph title={'Serverové komunitní platformy'} text={'Je velmi důležité, aby měl server alespoň jednu platformu, kam se mohou kromě Minecraftu lidé obrátit na podporu či hledat důležité informace. Jedná se například o TeamSpeak, Discord nebo obdobný komunikační nástroj'} />
            <Paragraph title={'Vlastní doména (př.: .cz, .sk, .eu)'} text={'Vlastní doménou se rozumí koupená a zaregistrovaná doména buď u českých nebo zahraničních registrátorů'} />
            <Paragraph title={'Denní průměr okolo 40 hráčů'} text={'40 hráčů pravidelně je hranice, která už není jednoduchá získat pouhým pozváním lidí ze svého streamu, většinou poukazuje na kvalitu serveru.'} optional/>
            <Paragraph title={'Sociální sítě (př.: Instagram, Twitter, Facebook)'} text={'Server je aktivní na některé sociální síti. Sdílí pravidelně příspěvky a jejich prostřednictvím ohlašuje a sděluje nové informace nebo kterékoliv jiné serverové záležitosti'} optional/>
            <Paragraph title={'Webové stránky'} text={'Webové stránky serveru mohou obsahovat záznamy o změnách, novinky, nebo například samostatné fórum a seznam členů admin-týmu'} optional/>
          </Flex>
        </ModalBody>
        <ModalFooter flexDirection={'column'} gap={4}>
          <Text fontSize={'12px'} color={'gray.100'} borderLeft={'4px solid'} roundedLeft={'sm'} paddingLeft={2} borderLeftColor={'brand.100'}>
            Odstavce označené jako <Text as="span" color={'brand.100'}>*</Text> nejsou povinné, avšak při rozhodování o přijetí serveru dodávají plusové body
          </Text>
          <Flex justifyContent={'flex-end'} width={'100%'} marginTop={2}>
            <Button colorScheme='red' variant={'outline'} mr={3} onClick={onClose}>Zavřít</Button>
            <Button variant='solid' colorScheme={'red'} as={'a'} href={'https://docs.google.com/forms/d/e/1FAIpQLSf5Igw_euENs9LtnXFRO7bcUKfZRQapvJylUOEGCnZMDECGhg/viewform'}>Pokračovat</Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
