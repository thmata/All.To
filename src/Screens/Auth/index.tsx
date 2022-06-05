import React from 'react';
import {View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { Container, Header, Title, Brand, BrandImg, Body, Span, Pressable } from './styles'
export default function Auth({ navigation }) {
    return(
        <Container>
            <SafeAreaView style={{flex: 1}}>
                <Header>
                    <Brand>
                        <BrandImg source={require('./../../assets/brand.png')}/>
                    </Brand>
                    <Title>
                        O SEGURO COM <Text style={{ fontWeight: 'bold' }}>TUDO PARA</Text> VOCÊ
                    </Title>
                </Header>
                <Body>
                    <Span>Faça sua consulta <Text style={{ fontWeight: 'bold' }}>rápida</Text> com a gente</Span>
                    <Pressable onPress={() =>
                        navigation.push('Step1')
                    }>
                        <Text>COTAÇÃO RÁPIDA</Text>
                    </Pressable>
                </Body>
            </SafeAreaView>
        </Container>
    )
}