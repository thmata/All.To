import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    background-color: #f0f2f5;
    width: ${RFValue(300)}px;
    border-radius: 5px;
    padding: 19px 23px;
    padding-bottom: ${RFValue(42)}px;
    background-color: #FFFF;
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
export const Icon = styled.Image``;
export const Footer = styled.View``;
export const Amount = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    margin-top: 38px;
    color: #000000;

`;
export const LastTransation = styled.Text``;