import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { BlueHeader, HeaderText} from './style'

export default function Headerr(){
    return(
        <BlueHeader>
            <HeaderText source={require('../../assets/white-brand.png')}/>
        </BlueHeader>
    );
}
