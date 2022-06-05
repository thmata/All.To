import React from 'react';
import { Text, SafeAreaView } from 'react-native';

import { Container, Header, Title, Brand, BrandImg, Body, Span, Pressable } from './styles'
export default function Auth({ navigation }: any) {
    return(
        <Container>
            <SafeAreaView style={{flex: 1}}>
                <Header>
                    <Brand>
                        <BrandImg source={require('./../../assets/white-brand.png')}/>
                    </Brand>
                    <Title>
                        O SEGURO COM <Text style={{ fontWeight: 'bold' }}>TUDO PARA</Text> VOCÊ
                    </Title>
                </Header>
                <Body>
                    <Span>Faça sua consulta <Text style={{ fontWeight: 'bold' }}>rápida</Text> com a gente</Span>
                    <Pressable onPress={() =>
                        navigation.push('Dashboard')
                    }>
                        <Text>COTAÇÃO RÁPIDA</Text>
                    </Pressable>
                    <Pressable onPress={() =>
                        navigation.push('Dashboard')
                    } style={{ backgroundColor: '#C1EDFF', marginTop: 10 }}>
                        <Text>ENTRAR COM O GOOGLE</Text>
                    </Pressable>
                </Body>
            </SafeAreaView>
        </Container>
    )
}