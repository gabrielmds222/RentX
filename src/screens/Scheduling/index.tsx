import React from 'react';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';

import ArrowSvg from '../../assets/arrow.svg';

import {
    Container,
    Header,
    Title,
    RentalPeriod,
    DateInfo,
    DateTitle,
    DateValue,
    Content,
    Footer,
} from './styles';

export function Scheduling(){
  const theme = useTheme();

  return(
    <Container>
      <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
        /> 

      <Header>
        <BackButton 
        onPress={() => {}}
        color={theme.colors.shape}
        />

        <Title>
           Escolha uma {'\n'} data de inicio e {'\n'} fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
              <DateValue selected={false}>27/06/2001</DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
              <DateValue selected={false}>27/06/2001</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
      </Content>

      <Footer>
          <Button 
            title="Confirmar"
          />
      </Footer>
    </Container>
  );
}