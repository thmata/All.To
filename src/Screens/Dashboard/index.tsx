import React from 'react';
import {TouchableOpacity} from 'react-native';
import { HighlightCard } from '../../Components/HighlightCard';

import { Container, Header, UserInfo, UserPhoto, User, UserGreetings, UserName, UserWrapper, Icon, Cards, ScrollViewStyle } from './styles'
export default function Dashboard({ navigation }) {
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
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Auth')
                    }}>
                        <Icon name="power"/>
                    </TouchableOpacity>
                </UserWrapper>  
            </Header>
            <ScrollViewStyle>
                <Cards>
                    <HighlightCard/>
                    <HighlightCard/>
                    <HighlightCard/>
                    <HighlightCard/>
                    <HighlightCard/>
                    <HighlightCard/>
                    <HighlightCard/>
                    <HighlightCard/>
                    <HighlightCard/>
                    <HighlightCard/>
                </Cards>
            </ScrollViewStyle>
        </Container>
    )
}