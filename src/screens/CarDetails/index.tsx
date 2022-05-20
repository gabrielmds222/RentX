import React from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Accessory } from '../../components/Accessory';

import SpeedSvg from '../../assets/speed.svg';
import AccelerationSvg from '../../assets/acceleration.svg';
import ForceSvg from '../../assets/force.svg';
import GasolineSvg from '../../assets/gasoline.svg';
import ExchangeSvg from '../../assets/exchange.svg';
import PeopleSvg from '../../assets/people.svg';

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
    About,
} from './styles';

export function CarDetails(){
  return(
    <Container>
      <Header>
        <BackButton onPress={() => {}}/>
      </Header>

      <CarImages>
        <ImageSlider 
          imagesUrl={['https://cronos.fiat.com.br/static/folds/4/mobile/01-mt/00.png']}
        />
      </CarImages>

      <Content>
        <Details>
          <Description>
            <Brand>Fiat</Brand>
            <Name>Cronos</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$580</Price>
          </Rent>
        </Details>

        <Accessories>
          <Accessory name="380KM/h" icon={SpeedSvg}/>
          <Accessory name="3.2s" icon={AccelerationSvg}/>
          <Accessory name="800 HP" icon={ForceSvg}/>
          <Accessory name="Gasolina" icon={GasolineSvg}/>
          <Accessory name="Auto" icon={ExchangeSvg}/>
          <Accessory name="2 pessoas" icon={PeopleSvg}/>
        </Accessories>

        <About>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequatur eum commodi facere reprehenderit illum ex eaque amet, expedita blanditiis?</About>
      </Content>
    </Container>
  );
}