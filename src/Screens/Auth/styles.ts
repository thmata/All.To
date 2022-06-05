import styled from 'styled-components/native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const Container = styled.View`
    flex: 1;
    background-color: #17468C;
`;

export const Header = styled.View`
    width: 100%;
    height: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
    align-items: center;
    flex-direction: column;
`;

export const Title = styled.Text`
    font-size: 38px;
    width: 80%;
    text-align: center;
    color: #FFF;
    font-weight: 300;
`;

export const Brand = styled.View`   
    margin-top: ${getStatusBarHeight()}px;
    margin-bottom: 80px;
`;

export const BrandImg = styled.Image`
    flex: 1;
    max-width: 150px;
    max-height: 150px;
    resize-mode: contain;
`;

export const Body = styled.View`
    height: 50%;
    align-items: center;
    justify-content: center;
`;

export const Span = styled.Text`
    font-size: ${RFValue(16)}px;
    color: #FFF;
    font-weight: 300;
    width: 60%;
    text-align: center;
`

export const Pressable = styled.TouchableOpacity`
    width: 80%;
    height: 56px;
    background-color: #FFF;
    border-radius: 5px;
    margin-top: 30px;
    justify-content: center;
    align-items: center;
`;
