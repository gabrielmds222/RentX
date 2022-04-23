import React from 'react';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';

import {
    Container,
    Header,
    CarImages,
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
    </Container>
  );
}