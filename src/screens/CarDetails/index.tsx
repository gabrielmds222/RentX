import React from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

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

        <About>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consequatur eum commodi facere reprehenderit illum ex eaque amet, expedita blanditiis?</About>
      </Content>
    </Container>
  );
}