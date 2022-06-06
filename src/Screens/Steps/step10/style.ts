import React from 'react'
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'; 
import { Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'


export const Container = styled.View`
    align-items: center;
`;

export const Title = styled.Text`
    margin-top: 20%;
    font-size: 27px; 
    font-weight: bold;
    color: #fff;
    width: 300px;
`;

export const Icon = styled(AntDesign)`
    margin-top: 35%;
    font-size: 130px;
    color: #17468C;
    padding-bottom: 80px;

`;

export const UserWrapper = styled.View`
    width: 100%;
    padding: 0 24px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    z-index: -1;
    display: flex;
    margin-top: 70px;

`;

export const Iconn = styled(Ionicons)`
    color: white;
    font-size: ${RFValue(20)}px;
`;