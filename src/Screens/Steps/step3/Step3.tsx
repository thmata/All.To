import React from 'react';
import { Text, View, StyleSheet, Pressable, TouchableHighlight} from 'react-native';
import ComponentTextInput from '../../../Components/TextInput/Index';
import { BotaoView } from '../step2/style';
import { Container } from './style'



export default function Step3({ route, navigation }: any){
    const { type } = route.params
    return(<>
        <Container>
            <Text style={{marginLeft:15, fontWeight: 'bold', fontSize: 24}}>Qual é {type === 'bike' ? 'o sua bike' : 'o seu carro'}?</Text>
            <ComponentTextInput placeholder={'Insira o ano do seu carro'}/>
            <ComponentTextInput placeholder={'Selecione o modelo'}/>
            <BotaoView>
                <TouchableHighlight
                  onPress={() =>
                    navigation.push('Step4', { type })
                  }
                  activeOpacity={1}
                  style={styles.button1}
                  underlayColor='#000'>
                    <Text>Pular etapa</Text>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() =>
                    navigation.push('Step4', { type })
                  }
                  underlayColor='#000'>
                    <View style={styles.button2}>
                      <Text style={{color:'#fff'}}>Enviar</Text>
                    </View>
                </TouchableHighlight>
            </BotaoView>
        </Container>
        </>
    );
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
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
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
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      text2: {
        fontSize: 16,
        lineHeight: 40,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
  });