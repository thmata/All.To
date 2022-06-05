import React from 'react';
import Headerr from '../../../Components/Header/index'
import ComponentTextInput from '../../../Components/TextInput/Index';
import { Container, Texto, BotaoView  } from './style'
import { Text, View, StyleSheet, Pressable, TouchableHighlight} from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import NextIcon from '../../../Components/NextIcon';


export default function Step2({ navigation }: any){
    return(<> 
        <Headerr/>
        <Container>
            <Texto> Qual é seu carro? </Texto>
            <ComponentTextInput placeholder={'Insira a placa do carro'}/>
            <BotaoView>
              <TouchableHighlight
                  activeOpacity={1}
                  style={styles.button1}
                  underlayColor='#000'>
                    <Text>Pular etapa</Text>
              </TouchableHighlight>
              <TouchableHighlight
                  underlayColor='#000'>
                    <View style={styles.button2}>
                      <Text style={{color:'#fff'}}>Enviar</Text>
                    </View>
                </TouchableHighlight>
            </BotaoView>
        </Container>
        </>
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

  /*
                <NextIcon/>
  
  */