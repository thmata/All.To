import React from 'react';
import {TouchableOpacity} from 'react-native';
import { HighlightCard } from './Components/HighlightCard';

import { Container, 
         Header, 
         UserWrapper, 
         Icon, 
         Cards, 
         ScrollViewStyle
         } from './style';
export default function Dashboard({ navigation, navigation: { goBack } }: any){
    return(
        <Container>
            <Header>   
                <UserWrapper>    
                    <TouchableOpacity onPress={() => {
                        goBack()
                    }}>
                        <Icon name="arrow-back-outline"/>
                    </TouchableOpacity>
                </UserWrapper>  
            </Header>
            <ScrollViewStyle>
                <Cards>
                    <HighlightCard 
                    navigation={navigation}
                    type="car"
                    title={'Seguro Auto'}
                    desc={'Seguro essencial para você que tem carro.'}
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
                    type="bike"
                    title={'Seguro Bike'}
                    desc={'Pedale sem medo pela cidade.'}
                    image={require('../../../assets/bike.png')}
                    list={[
                        'Cobretura contra roubos e furtos',
                        'Cobertura contra danos',
                        'Assistência 24h',
                        'Descontos exclusivos',
                        'Monitoramento via satélite'
                    ]}
                    />
                </Cards>
            </ScrollViewStyle>
        </Container>
    )
}