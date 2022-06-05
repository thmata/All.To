import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

import { Container, Header, Title, Icon, Footer, Amount, LastTransation, SubTitle, Left } from './style'

export function HighlightCard(){
    return(
        <Container>
            <Header>
                <Left>
                    <Title>Golf Sportf</Title>
                    <SubTitle>VOLKSWAGEN</SubTitle>
                    <SubTitle>PDF-2342</SubTitle>
                    <Ionicons name="md-checkmark-circle" size={32} color="green" />
                </Left>
                <Icon source={require('./assets/car.png')}/>
            </Header>
            <Footer>
                <Amount>R$ VALORES</Amount>
                <LastTransation></LastTransation>
            </Footer>

        </Container>
    )
}