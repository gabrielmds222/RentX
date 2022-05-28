import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { RFValue} from 'react-native-responsive-fontsize';

import { Car } from '../../components/Car';

import Logo from '../../assets/logo.svg';
import api from '../../services/api';
import { CarDTO } from '../../dtos/carDTO';

import {
    Container,
    Header,
    HeaderContent,
    TotalCars,
    CarList,
} from './styles';

export function Home(){
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/cars');
        setCars(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
  }, []);

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
        data={cars}
        keyExtractor={item => item.id}
        renderItem={({ item }) => 
        <Car data={item} onPress={handleCarDetails}/>}
      />
    </Container>
  );
}