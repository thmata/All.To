import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import { HighlightCard } from '../../Components/HighlightCard';

import { Container, Header, Title } from './styles'
export default function Auth(){
    return(
        <Container>
            <SafeAreaView style={{flex: 1}}>
                <Header>
                    <Title>
                        O SEGURO COM TUDO PARA VOCÊ
                    </Title>
                </Header>
            </SafeAreaView>
        </Container>
    )
}