import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { useTheme } from 'styled-components'

import { 
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';
import { PasswordInput } from '../../../components/PasswordInput';
import { Button } from '../../../components/Button';

import {
    Container,
    Header,
    Steps,
    Title,
    SubTitle,
    Form,
    FormTitle,
} from './styles';

export function SignUpSecondStep(){
  const navigation = useNavigation();
  const theme = useTheme();

  function handleBack(){
    navigation.goBack()
}

  return(
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>  
        <Container>
          <Header>
            <BackButton onPress={handleBack}/>
            <Steps>
              <Bullet active={false}/>
              <Bullet />
            </Steps>
          </Header>

          <Title>Crie sua {'\n'}conta</Title>
          <SubTitle>Faça seu cadastro de{'\n'} forma rápida e fácil</SubTitle>

          <Form>
            <FormTitle>2. Senha</FormTitle>
            <PasswordInput iconName="lock" placeholder="Senha"/>
            <PasswordInput iconName="lock" placeholder="Repetir senha"/>
          </Form>

          <Button title="Cadastrar" color={theme.colors.success} />
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}