import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled.View`
    flex: 1;
    background-color: #F0F2F5;
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background-color: ${({theme}) =>  theme.colors.primary};
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const UserWrapper = styled.View`
    width: 100%;
    padding: 0 24px;
    margin-top: -150px;
    flex-direction: row;
    justify-content: space-between;
`;

export const UserInfo = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const UserPhoto = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 10px;
`;
export const User = styled.View`
    margin-left: ${RFValue(10)}px;
`;
export const UserGreetings = styled.Text`
    color: white;
    font-size: ${RFValue(15)}px;
    font-family: ${({theme}) => theme.fonts.regular};
`;
export const UserName = styled.Text`
    color: white;
    font-size: ${RFValue(15)}px;
    font-family: ${({theme}) => theme.fonts.bold};
`;

export const Icon = styled(Feather)`
    color: white;
    font-size: ${RFValue(20)}px;
`;

export const Cards = styled.View`
    align-items: center;
`;
