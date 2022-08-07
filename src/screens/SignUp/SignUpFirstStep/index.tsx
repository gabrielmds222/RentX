import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';

import { BackButton } from '../../../components/BackButton';
import { Bullet } from '../../../components/Bullet';

import {
    Container,
    Header,
} from './styles';

export function SignUpFirstStep(){
  const navigation = useNavigation();

  function handleBack(){
    navigation.goBack()
}

  return(
    <Container>
      <Header>
        <BackButton onPress={handleBack}/>
        <Bullet active={false}/>
      </Header>
    </Container>
  );
}