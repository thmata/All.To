import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    background-color: #f0f2f5;
    width: ${RFValue(300)}px;
    border-radius: 5px;
    padding: 19px 23px;
    padding-bottom: ${RFValue(17)}px;
    background-color: #FFFF;
    border-radius: 10px;
    margin-top: 50px;
`;
export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
export const Left = styled.View``;
export const Title = styled.Text`
    color: #363F5F;
    font-size: 24px;
`;
export const SubTitle = styled.Text`
    color: #969CB2
`;
export const Parcela = styled.View``;
export const Price = styled.Text`
    color: #363F5F;
    font-size: 19px;
`;
export const Reembolso = styled.View``;
export const Footer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
export const SubPriceTitle = styled.Text`
    color: #969CB2;
    font-size: 12px;
`;
export const Amount = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    margin-top: 38px;
    color: #000000;
`;
export const LastTransation = styled.Text`
    color: green;
    font-weight: bold;
    font-size: 12px;
`;

export const Icon = styled.Image``;

export const IconsBar = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const Border = styled.View`
    border-radius: 10px;
    border: 1px solid;
    padding: 10px 20px 10px 20px;
    align-items: center;
    border-color: #DADADA;
    background-color: #17468C;
`;

export const Legenda = styled.Text`
    font-size: 10px;
    font-weight: bold;
    color: #FFFFFF;
`;