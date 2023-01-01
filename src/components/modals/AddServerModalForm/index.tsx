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
import {Form, Formik} from 'formik';
import {FormField} from './FormField';
import * as Yup from 'yup';

interface AddServerFormModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface FormValues {
    name: string;
    email: string;
    serverNameAndIp: string;
    discordInvite: string;
    reasonToAddServer: string;
    serverOriginalityDescription: string;
    serverCompetitionDescription: string;
    serverWebsite: string;
    acceptedTerms: boolean;
}

export const AddServerFormModal = ({isOpen, onClose}: AddServerFormModalProps) => {
  const initialValues: FormValues = {
    name: '',
    email: '',
    serverNameAndIp: '',
    discordInvite: '',
    reasonToAddServer: '',
    serverOriginalityDescription: '',
    serverCompetitionDescription: '',
    serverWebsite: '',
    acceptedTerms: false,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Toto pole je povinné')
        .min(3, 'Musíte zadat minimálně 3 znaky')
        .max(64, 'Můžete zadat maximálně 64 znaků'),
    email: Yup.string()
        .required('Toto pole je povinné')
        .email('Musíte zadat platnou emailovou adresu'),
    serverNameAndIp: Yup.string()
        .required('Toto pole je povinné')
        .min(3, 'Musíte zadat minimálně 3 znaky')
        .max(248, 'Můžete zadat maximálně 248 znaků'),
    discordInvite: Yup.string()
        .required('Toto pole je povinné')
        .min(3, 'Musíte zadat minimálně 3 znaky')
        .max(248, 'Můžete zadat maximálně 248 znaků'),
    reasonToAddServer: Yup.string()
        .required('Toto pole je povinné')
        .min(3, 'Musíte zadat minimálně 3 znaky')
        .max(2048, 'Můžete zadat maximálně 2048 znaků'),
    serverOriginalityDescription: Yup.string()
        .required('Toto pole je povinné')
        .min(3, 'Musíte zadat minimálně 3 znaky')
        .max(2048, 'Můžete zadat maximálně 2048 znaků'),
    serverCompetitionDescription: Yup.string()
        .required('Toto pole je povinné')
        .min(3, 'Musíte zadat minimálně 3 znaky')
        .max(2048, 'Můžete zadat maximálně 2048 znaků'),
    serverWebsite: Yup.string()
        .optional()
        .url('Musíte zadat platnou URL adresu'),
    acceptedTerms: Yup.boolean()
        .oneOf([true], 'Musíte souhlasit s podmínkami'),
  });


  return (
    <Modal
      onClose={onClose}
      isOpen={isOpen}
      motionPreset='slideInBottom'
    >
      <ModalOverlay />
      <ModalContent backgroundColor={'gray.800'}>
        <ModalHeader color={'brand.50'}>Žádost o přidáni serveru</ModalHeader>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, {setSubmitting}) => {
            console.log('s');
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
          validationSchema={validationSchema}
        >
          {({
            errors,
            handleSubmit,
            isSubmitting,
            setFieldValue,
          }) => (
            <Form onSubmit={handleSubmit}>
              <ModalBody>
                <Flex gap={8} flexDirection={'column'}>
                  <FormField error={errors.name} name={'name'} hook={setFieldValue} title={'Vlastník serveru'} placeholder={'Wumpus Wumpus#6969'} helperText={'Požaduje se Minecraft jméno a discord jméno + tag'}/>
                  <FormField error={errors.email} name={'email'} hook={setFieldValue} title={'Email'} placeholder={'xxxxxxxxx@gmail.com'} helperText={'Požaduje se emailova adresa'}/>
                  <FormField error={errors.serverNameAndIp} name={'serverNameAndIp'} hook={setFieldValue} title={'Název a IP serveru'} placeholder={'127.0.0.1'}/>
                  <FormField error={errors.discordInvite} name={'discordInvite'} hook={setFieldValue} title={'Discord invite'} placeholder={'discord.gg/...'} helperText={'Popřípadě ip adresa TeamSpeak3 serveru'}/>
                  <FormField error={errors.reasonToAddServer} type={'textarea'} name={'reasonToAddServer'} hook={setFieldValue} title={'Proč bychom měli přidat právě váš server?'} placeholder={'Náš server by jste měli...'}/>
                  <FormField error={errors.serverOriginalityDescription} type={'textarea'} name={'serverOriginalityDescription'} hook={setFieldValue} title={'Čím je váš server unikátní?'} placeholder={'Náš server je unikátni díky...'}/>
                  <FormField error={errors.serverCompetitionDescription} type={'textarea'} name={'serverCompetitionDescription'} hook={setFieldValue} title={'Myslíte si, že je váš server konkurenceschopný? Pokud ano, proč?'} placeholder={'Náš server se liší od konkurence díky...'}/>
                  <FormField error={errors.serverWebsite} name={'serverWebsite'} hook={setFieldValue} title={'Webová stránka serveru'} placeholder={'https://www.example.com'}/>
                  <FormField error={errors.acceptedTerms} type={'checkbox'} name={'acceptedTerms'} hook={setFieldValue} title={'Souhlasím s podmínkami'}/>
                </Flex>
              </ModalBody>
              <ModalFooter flexDirection={'column'} gap={4}>
                <Text fontSize={'12px'} color={'gray.100'} borderLeft={'4px solid'} roundedLeft={'sm'} paddingLeft={2} paddingY={1} borderLeftColor={'brand.100'}>
            Odstavce označené jako <Text as={'span'} color={'brand.100'} fontWeight={'bold'}>*</Text> nejsou povinné, avšak při rozhodování o přijetí serveru dodávají plusové body
                </Text>
                <Flex justifyContent={'flex-end'} width={'100%'} marginTop={2}>
                  <Button colorScheme='red' variant={'outline'} mr={3} onClick={onClose}>Zavřít</Button>
                  <Button variant='solid' colorScheme={'red'} type={'submit'} disabled={isSubmitting}>Odeslat</Button>
                </Flex>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  );
};
