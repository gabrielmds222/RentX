import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { RFValue} from 'react-native-responsive-fontsize';

import { Car } from '../../components/Car';

import Logo from '../../assets/logo.svg';

import {
    Container,
    Header,
    HeaderContent,
    TotalCars,
    CarList,
} from './styles';

export function Home(){
  const navigation = useNavigation();

  const carData = {
    brand: 'AUDI',
    name: 'RS 5 Coupé',
    rent: {
        period: 'Ao dia',
        price: '120',
    },
    thumbnail: 'https://cronos.fiat.com.br/static/folds/4/mobile/01-mt/00.png',
    
  }

  function handleCarDetails() {
    navigation.navigate('CarDetails')
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

      <CarList 
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => <Car data={carData} onPress={handleCarDetails}/>}
      />
    </Container>
  );
}