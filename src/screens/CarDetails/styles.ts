import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    position: absolute;
    margin-top: ${getStatusBarHeight() + 18}px;
    margin-left: 24px;
    z-index: 1;
`;

export const CarImages = styled.View`
    margin-top: ${getStatusBarHeight() + 32}px;
`;

export const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
        padding: 24,
        alignItems: 'center',
    },
    showVerticalScrollIndicator: false,
})``;

export const Details = styled.View``;

export const Description = styled.View``;

export const Brand = styled.Text``;

export const Name = styled.Text``;

export const Rent = styled.View``;

export const Period = styled.Text``;

export const Price = styled.Text``;
