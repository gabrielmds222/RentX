import React from 'react';
import { FlatList } from 'react-native'

import {
    Container,
    ImageIndexes,
    ImageIndex,
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
            <ImageIndex active={true} />
            <ImageIndex active={false} />
            <ImageIndex active={false} />
            <ImageIndex active={false} />
        </ImageIndexes>

        <CarImageWrapper>
            <FlatList 
                data={imagesUrl}
                keyExtractor={key => key}
                renderItem={({ item }) => (
                    <CarImage 
                    source={{ uri: item }}
                    resizeMode="contain" 
                    />
                )}
            />
        </CarImageWrapper>

    </Container>
  );
}