import React from 'react';
import { Text, View, StyleSheet, Pressable, TouchableHighlight} from 'react-native';
import SimpleSelectButton from 'react-native-simple-select-button';
import { Container, BotaoView } from './style'

export default function Step4({ route, navigation }: any){
    const { type } = route.params
    return(
        <Container>
                <Text style={{marginLeft:15, fontWeight: 'bold', fontSize: 24}}>Como você usa o carro</Text>
                <SimpleSelectButton
                text="Uso pessoal no dia a dia"
                textSize={14}
                iconName="checkcircleo"
                iconColor="#fff"
                iconSize={14}
                buttonDefaultColor="#e5e5e5"
                buttonSelectedColor="#ff9c5b"
                textDefaultColor="#333"
                textSelectedColor="#fff"
                isChecked={false}
                onPress={() => {}}
                />
                <SimpleSelectButton
                text="Motorista de aplicativo"
                textSize={14}
                iconName="checkcircleo"
                iconColor="#fff"
                iconSize={14}
                buttonDefaultColor="#e5e5e5"
                buttonSelectedColor="#ff9c5b"
                textDefaultColor="#333"
                textSelectedColor="#fff"
                isChecked={false}
                onPress={() => {true}}
                />
                <SimpleSelectButton
                text="Transporte de cargas ou frete"
                textSize={14}
                iconName="checkcircleo"
                iconColor="#fff"
                iconSize={14}
                buttonDefaultColor="#e5e5e5"
                buttonSelectedColor="#ff9c5b"
                textDefaultColor="#333"
                textSelectedColor="#fff"
                isChecked={false}
                onPress={() => {true}}
                />
                <SimpleSelectButton
                text="Visitar clientes ou fornecedores"
                textSize={14}
                iconName="checkcircleo"
                iconColor="#fff"
                iconSize={14}
                buttonDefaultColor="#e5e5e5"
                buttonSelectedColor="#ff9c5b"
                textDefaultColor="#333"
                textSelectedColor="#fff"
                isChecked={false}
                onPress={() => {true}}
                />
                <SimpleSelectButton
                text="Delivery ou entregas"
                textSize={14}
                iconName="checkcircleo"
                iconColor="#fff"
                iconSize={14}
                buttonDefaultColor="#e5e5e5"
                buttonSelectedColor="#ff9c5b"
                textDefaultColor="#333"
                textSelectedColor="#fff"
                isChecked={false}
                onPress={() => {true}}
                />
                <SimpleSelectButton
                text="Outros usos a trabalho"
                textSize={14}
                iconName="checkcircleo"
                iconColor="#fff"
                iconSize={14}
                buttonDefaultColor="#e5e5e5"
                buttonSelectedColor="#ff9c5b"
                textDefaultColor="#333"
                textSelectedColor="#fff"
                isChecked={false}
                onPress={() => {true}}
                />
                <BotaoView>
                    <TouchableHighlight
                        activeOpacity={1}
                        style={styles.button1}
                        underlayColor='#000'>
                            <Text>Pular etapa</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() =>
                          navigation.push('Step5', { type })
                        }
                        underlayColor='#000'>
                            <View style={styles.button2}>
                            <Text style={{color:'#fff'}}>Enviar</Text>
                            </View>
                        </TouchableHighlight>
                </BotaoView>
        </Container>
    )
    
}   

const styles = StyleSheet.create({
    button1: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 1,
      elevation: 3,
      backgroundColor: '#fff',
      padding: 30,
      borderRadius: 4,
    },
    text1: {
      fontSize: 16,
      lineHeight: 40,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'black',
    },
    button2: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 1,
        elevation: 3,
        backgroundColor: '#17468C',
        color: '#fff',
        borderRadius: 4,
      },
      text2: {
        fontSize: 16,
        lineHeight: 40,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
  });