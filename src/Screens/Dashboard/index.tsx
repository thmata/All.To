import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { HighlightCard } from '../../Components/HighlightCard';

import { Container, 
         Header, 
         UserInfo, 
         UserPhoto, 
         User, 
         UserGreetings, 
         UserName, 
         UserWrapper, 
         Icon, 
         Cards, 
         ScrollViewStyle,
         NavigationBar,
         Leftt,
         Center,
         Right,
         Menu,
         Perfil,
         Chat
         } from './styles'
export default function Dashboard(){
    return(
        <Container>
            <Header>   
                <UserWrapper>    
                    <UserInfo>
                        <UserPhoto source={{uri:'https://avatars.githubusercontent.com/u/49282011?v=4'}}/>
                            <User>
                                <UserGreetings>Olá, </UserGreetings>
                                <UserName>João Pedro </UserName>
                            </User>
                    </UserInfo>
                    <Icon name="power"/>
                </UserWrapper>  
            </Header>
            <ScrollViewStyle>
                <Cards>
                    <HighlightCard 
                    title={'Golf Sportf '}
                    brand={'VOLKSWAGEN'}
                    placa={'PDF-2342'}
                    image={require('../../Components/HighlightCard/assets/car.png')}
                    price={'R$ 310,57'}
                    reembolso={'R$ 135.000,00'}/>
                    <HighlightCard
                    title={'Bicicleta Caloi Vulcan '}
                    brand={'VOLKSWAGEN'}
                    placa={'PDF-2342'}
                    image={require('../../Components/HighlightCard/assets/bike.png')}
                    price={'R$ 73,21'}
                    reembolso={'R$ 4800,00'}
                    />
                    <HighlightCard />
                    <HighlightCard />
                </Cards>
            </ScrollViewStyle>
            <NavigationBar>
                <Leftt><Menu name="home"/><Text></Text></Leftt>
                <Center><Perfil name="face-man-profile"/></Center>
                <Right><Chat name="chat"/></Right>
            </NavigationBar>
        </Container>
    )
}