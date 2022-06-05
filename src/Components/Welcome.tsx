import React from 'react';

import { View, Text } from 'react-native';

interface WeslcomeProps{
    title: string
}

export function Welcome({title}: WeslcomeProps){
    return(
        <View>
            <Text> {title}</Text>
        </View>
    );
}