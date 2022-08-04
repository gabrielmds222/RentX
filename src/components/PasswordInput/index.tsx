import React from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';

import {
    Container,
    IconContainer,
    InputText,
} from './styles';

interface InputProps extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name']
}

export function PasswordInput({
    iconName,
    ...rest
}: InputProps){
    const theme = useTheme();
  return(
    <Container >
        <IconContainer>
            <Feather 
                name={iconName}
                size={24}
                color={theme.colors.text_detail}
            />
        </IconContainer>

        <InputText {...rest}/>
    </Container>
  );
}