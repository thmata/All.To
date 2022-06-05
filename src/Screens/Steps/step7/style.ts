import React from 'react'
import styled from 'styled-components/native'

export const Container = styled.View`
    margin-top: 80px;
    margin-bottom: 20px;
    padding: 0 40px;
`;

export const Title = styled.Text`
    font-size: 28px;
    font-weight: bold;
    max-width: 250px;
    color: #363F5F
`;
export const Subtitle = styled.Text`
    margin-top: 8px;
    font-size: 14px;
`;

export const List = styled.FlatList`
    margin-top: 20px;
`;

export const ListItems = styled.Text`
    padding-top: 5px;
`;

export const ScrollViewStyle = styled.ScrollView`
    z-index: 1;
    display: flex;
    height: 100%;
`;