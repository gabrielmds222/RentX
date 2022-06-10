import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { BackButton } from '../../components/BackButton';
import { Car } from '../../components/Car';
import { CarDTO } from '../../dtos/CarDTO';
import  api  from '../../services/api';
import {
  Container,
  Content,
  Header,
  SubTitle,
  Title,
  Appointments,
  AppointmentsQuantity,
  AppointmentsTitle,
} from './styles';


export function MyCars() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const theme = useTheme();
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack();
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get(`/schedules_byuser?user_id=1`);
        console.log(response.data);
        setCars(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchCars();
  }, []);

  return (
    <Container>
        <Header>
            <StatusBar
            barStyle='light-content'
            translucent
            backgroundColor='transparent'
            />

            <BackButton color={theme.colors.shape} onPress={handleBack} />

            <Title>
            Escolha uma{'\n'}data de início e{'\n'}fim do aluguel
            </Title>

            <SubTitle>Conforto, segurança e praticidade.</SubTitle>
      </Header>

      <Content>
        <Appointments>
            <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
            <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
        </Appointments>
      </Content>
    </Container>
  );
}