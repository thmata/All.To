import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Feather, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'

export const BlueHeader = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background-color: ${({ theme }) => theme.colors.primary};
    justify-content: center;
    align-items: center;
    flex-direction: row;
    z-index: -1;
    position: absolute;
`;

export const HeaderText = styled.Text`
`;
