import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';
import { Button } from '../../components/Button';

import { CarDTO } from '../../dtos/carDTO';
import { getAccessoryIcon } from '../../utils/getAccessoryIcon';

import {
    Container,
    Header,
    CarImages,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    Accessories,
    RentalPeriod,
    CalendarIcon,
    DateInfo,
    DateTitle,
    DateValue,
    RentalPrice,
    RentalPriceLabel,
    RentalPriceDetails,
    RentalPriceQuota,
    RentalPriceTotal,
    Footer
} from './styles';

interface Params {
  car: CarDTO
}

export function SchedulingDetails(){
  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  function handleConfirmRental() {
    navigation.navigate('SchedulingComplete');
  }

  function handleBack() {
    navigation.goBack();
  }

  return(
    <Container>
      <Header>
        <BackButton onPress={handleBack}/>
      </Header>

      <CarImages>
        <ImageSlider 
          imagesUrl={car.photos}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

          <Accessories>
            {
              car.accessories.map(accessory => (
                <Accessory
                  key={accessory.type}
                  name={accessory.name}
                  icon={getAccessoryIcon(accessory.type)}
                />
              ))
            }
          </Accessories>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name='calendar'
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>27/06/2022</DateValue>
          </DateInfo>

          <Feather
            name='chevron-right'
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>27/06/2022</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button title="Alugar agora" color={theme.colors.success} onPress={handleConfirmRental}/>
      </Footer>
    </Container>
  );
}