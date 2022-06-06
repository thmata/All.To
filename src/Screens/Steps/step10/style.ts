import React from 'react'
import styled from 'styled-components/native'
import { AntDesign } from '@expo/vector-icons'; 


export const Container = styled.View`
    align-items: center;
`;

export const Title = styled.Text`
    margin-top: 50%;
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