import React from 'react';
import { FlatList } from 'react-native'

import { Bullet } from '../Bullet';

import {
    Container,
    ImageIndexes,
    CarImageWrapper,
    CarImage,
} from './styles';

interface Props {
    imagesUrl: string[];
}

export function ImageSlider({imagesUrl}: Props) {
  return(
    <Container>
        <ImageIndexes>
            {
                imagesUrl.map((_, index) => (
                    <Bullet
                    key={String(index)} 
                    active={true}/>
                ))
        }
        </ImageIndexes>

        
        <FlatList 
            data={imagesUrl}
            keyExtractor={key => key}
            renderItem={({ item }) => (
                <CarImageWrapper>
                <CarImage 
                    source={{ uri: item }}
                    resizeMode="contain"
                />
                </CarImageWrapper>
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            pagingEnabled
        />

    </Container>
  );
}