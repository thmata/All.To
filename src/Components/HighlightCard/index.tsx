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

export function HighlightCard({ title, brand, placa, image, price, reembolso}: any){
    return(
        <Container>
            <Header>
                <Left>
                    <Title>{title }</Title>
                    <SubTitle>{brand}</SubTitle>
                    <SubTitle>{placa}</SubTitle>
                </Left>
                <Icon source={image}/>
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
                    <Price>{price}</Price>
                    <SubPriceTitle>Parcela</SubPriceTitle>
                    <LastTransation>Paga</LastTransation>
                </Parcela>
                <Reembolso>
                    <Price>{reembolso}</Price>
                    <SubPriceTitle>Reembolso</SubPriceTitle>
                    <LastTransation>Ativo</LastTransation>
                </Reembolso>
            </Footer>
        </Container>
    )
}