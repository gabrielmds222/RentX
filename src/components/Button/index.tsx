import React from 'react';
import { ActivityIndicator } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';

import {
    Container,
    Title,
} from './styles';

interface Props {
    title: string;
    color?: string;
    onPress: () => void;
    enabled?: boolean;
}

export function Button({
    title,
    color,
    onPress,
    enabled = true,
}: Props){
  const theme = useTheme();
  return(
    <Container 
    color={color ? color : theme.colors.main} 
    onPress={onPress}
    enabled={enabled}
    style={{opacity: enabled ? 1 : 0.5}}
    >
        <Title>{title}</Title>
    </Container>
  );
}