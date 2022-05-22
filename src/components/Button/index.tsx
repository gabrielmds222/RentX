import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import theme from '../../styles/theme';

import {
    Container,
    Title,
} from './styles';

interface Props {
    title: string;
    color?: string;
}

export function Button({
    title,
    color,
    ...rest
}: Props){
  return(
    <Container {...rest} color={color}>
        <Title>{title}</Title>
    </Container>
  );
}