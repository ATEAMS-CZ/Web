import React from 'react';
import {
  Button, Checkbox, Flex, FormControl, FormHelperText, FormLabel, Input, Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text, Textarea,
} from '@chakra-ui/react';

interface AddServerModalFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export const AddServerModalForm = ({isOpen, onClose}: AddServerModalFormProps) => {
  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      motionPreset='slideInBottom'
    >
      <ModalOverlay />
      <ModalContent backgroundColor={'gray.800'}>
        <ModalHeader color={'brand.50'}>Podmínky přijetí serveru</ModalHeader>
        <ModalBody>
          <Flex gap={8} flexDirection={'column'}>
            <FormControl>
              <FormLabel>Vlastník serveru</FormLabel>
              <Input placeholder='name' />
              <FormHelperText>Požaduje se Minecraft jméno a discord jméno + tag</FormHelperText>
            </FormControl>

            <FormControl>
              <FormLabel>Kontakt na vlastníka</FormLabel>
              <Input placeholder='email' type={'email'} />
              <FormHelperText>Požaduje se e-mailová adresa</FormHelperText>
            </FormControl>

            <FormControl>
              <FormLabel>Název serveru a ip adresa</FormLabel>
              <Input placeholder='Nazev a ip' />
            </FormControl>

            <FormControl>
              <FormLabel>Odkaz na discord server (pozvánka)</FormLabel>
              <Input placeholder='Link' />
              <FormHelperText>Popřípadě ip adresa TeamSpeak3 serveru</FormHelperText>
            </FormControl>

            <FormControl>
              <FormLabel>Proč bychom měli přidat právě váš server?</FormLabel>
              <Textarea placeholder='Link' />
            </FormControl>

            <FormControl>
              <FormLabel>Čím je váš server unikátní?</FormLabel>
              <Textarea placeholder='Link' />
            </FormControl>

            <FormControl>
              <FormLabel>Myslíte si, že je váš server konkurenceschopný? Pokud ano, proč?</FormLabel>
              <Textarea placeholder='Link' />
            </FormControl>

            <FormControl>
              <FormLabel><Text as="span" color={'brand.100'}>*</Text> Odkaz na webové stránky serveru</FormLabel>
              <Textarea placeholder='Link' />
            </FormControl>

            <FormControl>
              <Checkbox>Souhlasím s podmínkami</Checkbox>
            </FormControl>
          </Flex>
        </ModalBody>
        <ModalFooter flexDirection={'column'} gap={4}>
          <Text fontSize={'12px'} color={'gray.100'} borderLeft={'4px solid'} roundedLeft={'sm'} paddingLeft={2} paddingY={1} borderLeftColor={'brand.100'}>
            Odstavce označené jako <Text as={'span'} color={'brand.100'} fontWeight={'bold'}>*</Text> nejsou povinné, avšak při rozhodování o přijetí serveru dodávají plusové body
          </Text>
          <Flex justifyContent={'flex-end'} width={'100%'} marginTop={2}>
            <Button colorScheme='red' variant={'outline'} mr={3} onClick={onClose}>Zavřít</Button>
            <Button variant='solid' colorScheme={'red'} as={'a'} href={'https://docs.google.com/forms/d/e/1FAIpQLSf5Igw_euENs9LtnXFRO7bcUKfZRQapvJylUOEGCnZMDECGhg/viewform'}>Odeslat</Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
