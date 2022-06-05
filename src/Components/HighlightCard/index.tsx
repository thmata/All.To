import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

import { Container,
     Header, 
     Title, Icon, 
     Footer, 
     Amount, 
     LastTransation, 
     SubTitle, 
     Left, 
     Parcela, 
     Reembolso,
     Price,
     SubPriceTitle,
     IconsBar,
     Border,
     Legenda } from './style'

export function HighlightCard(){
    return(
        <Container>
            <Header>
                <Left>
                    <Title>Golf Sportf</Title>
                    <SubTitle>VOLKSWAGEN</SubTitle>
                    <SubTitle>PDF-2342</SubTitle>
                </Left>
                <Icon source={require('./assets/car.png')}/>
            </Header>
                <IconsBar>
                            <Border>
                                <Ionicons name="location-sharp" size={50} color="green" />
                                <Legenda>Rastrear</Legenda>
                            </Border>
                            <Border>
                                <Ionicons name="alert-circle" size={50} color="green" />
                                <Legenda>Acionar</Legenda>
                            </Border>
                            <Border>
                                <Ionicons name="wallet-sharp" size={50} color="green" />
                                <Legenda>Finanças</Legenda>
                            </Border>
                </IconsBar>
            <Footer>
                <Parcela>
                    <Price>R$ 73,21</Price>
                    <SubPriceTitle>Parcela</SubPriceTitle>
                    <LastTransation>Paga</LastTransation>
                </Parcela>
                <Reembolso>
                    <Price>R$ 4800,00</Price>
                    <SubPriceTitle>Reembolso</SubPriceTitle>
                    <LastTransation>Ativo</LastTransation>
                </Reembolso>
            </Footer>
        </Container>
    )
}