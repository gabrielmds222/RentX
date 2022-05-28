import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { 
  Calendar, 
  DayProps, 
  generateInterval,
  MarkedDateProps,
} from '../../components/Calendar';

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
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>({} as DayProps);
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps);
  const theme = useTheme();
  const navigation = useNavigation();

  function handleConfirmRental() {
    navigation.navigate('SchedulingDetails');
  }

  function handleBack() {
    navigation.goBack();
  }

  function handleChangeDate(date: DayProps) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if(start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);
    const interval = generateInterval(start, end);
    setMarkedDates(interval);
  }

  return(
    <Container>
      <StatusBar
        barStyle='light-content'
        translucent
        backgroundColor='transparent'
        /> 

      <Header>
        <BackButton 
        onPress={handleBack}
        color={theme.colors.shape}
        />

        <Title>
           Escolha uma {'\n'} data de inicio e {'\n'} fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
              <DateValue selected={false}>27/06/2022</DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
              <DateValue selected={false}>27/06/2022</DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar 
          markedDates={markedDates}
          onDayPress={handleChangeDate}/>
      </Content>

      <Footer>
          <Button 
            title="Confirmar"
            onPress={handleConfirmRental}
          />
      </Footer>
    </Container>
  );
}