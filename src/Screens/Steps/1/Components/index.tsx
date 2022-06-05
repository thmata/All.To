import React from 'react'
import { Text, ScrollView, View } from 'react-native'

import { Container,
     Header, 
     Title, Icon, 
     Footer, 
     SubTitle, 
     Left, 
     Body,
     Pressable,
     List,
     ListItems,
     About} from './style'

export function HighlightCard({ navigation, type, title, desc, image, list }: any){
    return(
        <Container>
            <Header>
                <Left>
                    <Title>{title}</Title>
                    <SubTitle>{desc}</SubTitle>
                </Left>
                <Icon source={image}/>
            </Header>
            <Body>
                <Pressable onPress={() =>
                    navigation.push('Step2', { type })
                }>
                    <Text style={{ color: '#FFF' }}>Cotar o sesguro</Text>
                </Pressable>
            </Body>
            <Footer>
                <About>
                    <List
                        data={list}
                        scrollEnabled={false}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => <ListItems>{'\u2022'} {item}</ListItems>}
                    />
                </About>
            </Footer>
        </Container>
    )
}