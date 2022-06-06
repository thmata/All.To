import React from 'react'
import { Container, Title, Icon } from './style'
import Headerr from '../../../Components/Header/index'
import { Text, View, StyleSheet, Pressable, TouchableHighlight} from 'react-native';


export default function Step10({ route, navigation }: any){
    return(
        <> 
            <Headerr/>
            <Container> 
            <Title>Parabéns, sua cobertura já está ativa! 🥳</Title>
            <Icon name="checkcircle"/>
            <TouchableHighlight
                  onPress={() =>
                    navigation.push('Dashboard')
                  }
                  activeOpacity={1}
                  style={styles.button1}
                  underlayColor='#000'>
                    <Text style={{color: '#fff', fontSize: 24, width: 200, textAlign: 'center'}}>Finalizar</Text>
              </TouchableHighlight>
            </Container>
        </>

    );
}


const styles = StyleSheet.create({
    button1: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 25,
      paddingHorizontal: 70,
      borderRadius: 1,
      elevation: 2,
      backgroundColor: '#17468C',
      borderRadius: 4,
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 4},
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
    text1: {
      fontSize: 24,
      lineHeight: 70,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: '#fff',
    },
  });