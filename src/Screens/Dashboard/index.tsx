import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { HighlightCard } from '../../Components/HighlightCard';

import { Container, Header, UserInfo, UserPhoto, User, UserGreetings, UserName, UserWrapper, Icon, Cards, ScrollViewStyle } from './styles'
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
                    <HighlightCard/>
                    <HighlightCard/>
                </Cards>
            </ScrollViewStyle>
        </Container>
    )
}