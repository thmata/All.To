import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'

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
    font-size: 16px;
    font-weight: bold;
`;
export const SubTitle = styled.Text`
    color: #969CB2;
    width: ${RFValue(150)}px;
`;

export const Footer = styled.View`
    flex-direction: row;
    justify-content: center;
`;
export const Icon = styled.Image``;

export const Body = styled.View`
    flex-direction: row;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const About = styled.Text``;

export const Pressable = styled.TouchableOpacity`
    width: 80%;
    height: 56px;
    background-color: #17468C;
    border-radius: 5px;
    margin-top: 15px;
    justify-content: center;
    align-items: center;
`;

export const List = styled.FlatList``;

export const ListItems = styled.Text`
    padding-top: 5px;
`;

export const PriceView= styled.View`
    align-items: center;
`;
export const Price= styled.Text`
    color:#363F5F;
    font-size: 24px;
    font-weight: bold;
`;
