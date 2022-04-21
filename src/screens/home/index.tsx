import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue} from 'react-native-responsive-fontsize';

import { Car } from '../../components/Car';

import Logo from '../../assets/logo.svg';

import {
    Container,
    Header,
    HeaderContent,
    TotalCars,
} from './styles';

export function Home(){
  const carData = {
    brand: 'AUDI',
    name: 'RS 5 Coupé',
    rent: {
        period: 'Ao dia',
        price: '120',
    },
    thumbnail: 'https://production.autoforce.com/uploads/version/profile_image/6301/comprar-easy-1-0_cc66d4af36.png',
    
  }
  return(
    <Container>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Header>
        <HeaderContent>
          <Logo 
            width={RFValue(108)}
            height={RFValue(12)}
          />

          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
        
      </Header>

      <Car data={carData}/>
    </Container>
  );
}