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
     About,
     Price,
     PriceView} from './style'

export function HighlightCard({ navigation, type, title, desc, image, list, price }: any){
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
            <About>
                    <List
                        data={list}
                        scrollEnabled={false}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => <ListItems>{'\u2022'} {item}</ListItems>}
                    />
                </About>
            </Body>
            <PriceView>
                <Price>{price}</Price>
            </PriceView>
            <Footer>
                <Pressable onPress={() =>
                    navigation.push('Step8', { type })
                }>
                    <Text style={{ color: '#FFF' }}>CONTRATAR SEGURO</Text>
                </Pressable>
            </Footer>
        </Container>
    )
}