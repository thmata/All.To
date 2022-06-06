import React from 'react';
import { Text, View, StyleSheet, Pressable, TouchableOpacity, } from 'react-native';
import { Container, Title, Subtitle, List, ListItems, ScrollViewStyle} from './style';
import { HighlightCard } from './Components/index'

export default function Step7({ navigation, navigation: { goBack } }: any){
    return(
        <Container>
            <Title>Cotação de seguro FF AllTo</Title>
            <Subtitle>Confira a cotação que criamos para você com base nas informações do seu carro</Subtitle>
            <List
                        data={['Cobertura contra roubos e furtos','Cobertura contra sinistros de trânsito', 'Assistência 24 horas']}
                        scrollEnabled={false}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({item}) => <ListItems>{'\u2022'} {item}</ListItems>}
                    />
                    <ScrollViewStyle>
                    <HighlightCard 
                    navigation={navigation}
                    type="car"
                    title={'Argo HGT 1.8 16V Flez Auto'}
                    price={'R$ 75,99/mês'}
                    desc={'BASIC'}
                    image={require('../../../assets/car.png')}
                    list={[
                        'Cobretura contra roubos e furtos',
                        'Cobertura contra danos',
                        'Assistência 24h',
                    ]}
                    />
                    <HighlightCard 
                    navigation={navigation}
                    type="car"
                    title={'Seguro Auto'}
                    price={'R$ 95,99/mês'}
                    desc={'PREMIUM'}
                    image={require('../../../assets/car.png')}
                    list={[
                        'Cobretura contra roubos e furtos',
                        'Cobertura contra danos',
                        'Assistência 24h',
                        'Monitoramento via satélite'
                    ]}
                    />
                    <HighlightCard 
                    navigation={navigation}
                    type="car"
                    title={'Seguro Auto'}
                    price={'R$ 85,99/mês'}
                    desc={'PREMIUM'}
                    image={require('../../../assets/car.png')}
                    list={[
                        'Cobretura contra roubos e furtos',
                        'Cobertura contra danos',
                        'Assistência 24h',
                        'Monitoramento via satélite'
                    ]}
                    />
                    </ScrollViewStyle>
            
        </Container>
    )

}