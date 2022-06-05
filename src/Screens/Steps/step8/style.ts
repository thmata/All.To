import React from 'react'
import styled from 'styled-components/native'
import { Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'

export const Container = styled.View`
    margin-top: 130px;
`;

export const Texto = styled.Text`
    color: #fff;
    margin-left: 10px;
    font-size: 24px;
    font-weight: bold;
`;

export const BotaoView = styled.View`
    flex-direction: row;
    margin-top: 50px;
    justify-content: space-between;
    padding: 0 20px;
`;

export const Body = styled.View`
    width: 100%;
    height: 65%;
    margin-top: 15%;
    justify-content: center;
    align-items: center;
`;

export const Card = styled.View`
    width: 80%;
    height: auto;
    border-radius: 10px;
    background-color: #fff;
    padding: 20px;
`;

export const List = styled.FlatList``;

export const ListItems = styled.Text`
    padding-top: 5px;
`;

export const CardHeader = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;
export const Left = styled.View``;

export const Title = styled.Text`
    color: #363F5F;
    font-size: 16px;
`;
export const SubTitle = styled.Text`
    color: #969CB2
    width: 150px;
`;

export const Icon = styled.Image``;

export const Pressable = styled.TouchableOpacity`
    width: 80%;
    height: 56px;
    background-color: #17468C;
    border-radius: 5px;
    margin-top: 60px;
    justify-content: center;
    align-items: center;
`;
