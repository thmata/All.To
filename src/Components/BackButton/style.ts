import React from 'react'
import styled from 'styled-components/native'
import { Ionicons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'

export const UserWrapper = styled.View`
    width: 100%;
    padding: 0 24px;
    margin-top: -150px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Icon = styled(Ionicons)`
    color: white;
    font-size: ${RFValue(20)}px;
`;