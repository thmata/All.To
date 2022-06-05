import React from 'react';
import Headerr from '../../../Components/Header/index'
import { Container, Texto, Body, Card, List, ListItems, Icon,  CardHeader, Left, Title, SubTitle, Pressable} from './style'
import { Text } from 'react-native';


export default function Step8({ navigation }: any){
    return(<> 
        <Headerr/>
        <Container>
            <Texto style={{ marginTop: '20%' }}>Agora você terá que tirar algumas fotos de seu carro.</Texto>
            <Body>
              <Card>
                <CardHeader>
                    <Left>
                        <Title>Argo HGT 1.8 16V Flez Auto</Title>
                        <SubTitle>PDF-2324</SubTitle>
                    </Left>
                    <Icon source={require(`./../../../assets/car.png`)} />
                </CardHeader>
                <List
                  data={[
                    'Foto frontal',
                    'Foto lateral esquerda',
                    'Foto lateral direita',
                    'Foto traseira',
                    'Foto do motor',
                    'Foto do painel',
                    'Foto do porta-malas',
                    'Foto do capô',
                    'Foto das rodas',
                    'Foto do interior'
                  ]}
                  scrollEnabled={false}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({item}) => <ListItems>{'\u2022'} {item}</ListItems>}
                />
              </Card>
              <Pressable onPress={() =>
                  navigation.push('Step9')
              }>
                  <Text style={{ color: '#FFF' }}>Vamos Lá!</Text>
              </Pressable>
            </Body>
        </Container>
        </>
    )
}