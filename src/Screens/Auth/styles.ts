import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled.View`
    flex: 1;
    background-color: #17468C;
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    justify-content: center;
    align-items: center;
    flex-direction: row;
    z-index: -1;
    position: absolute;
`;

export const Title = styled.Text`
    font-size: ${RFValue(20)}px;
    width: 70%;
`;
