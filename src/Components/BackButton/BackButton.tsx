import React from 'react';
import { TouchableOpacity } from 'react-native';
import { 
    UserWrapper, 
    Icon,  
    } from './style';

export default function BackButton({ navigation, navigation: { goBack } }: any){
    return(
                <UserWrapper>    
                    <TouchableOpacity onPress={() => {
                        goBack()
                    }}>
                        <Icon name="arrow-back-outline"/>
                    </TouchableOpacity>
                </UserWrapper>
)}
                