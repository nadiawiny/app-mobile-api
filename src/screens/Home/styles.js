import styled from 'styled-components/native';
import * as Animatable from 'react-native-animatable';

export const Container = styled.View`
    align-items: center;
    background-color: #212529;
    flex: 1;
    padding: 20px;
`;

export const Animation = styled(Animatable.View)`
    align-items: center;
    width: 100%;
`;

export const Input = styled.TextInput`
    background-color: #FFF;
    border-radius: 20px;
    color: #212529;
    font-family: Roboto_500Medium;
    font-size: 16px;
    margin-top: 20px;
    padding: 8px 16px;
    width: 100%;
`;

export const Button = styled.TouchableOpacity`
    align-items: center;
    background-color: #324b63;
    border-radius: 20px;
    margin-top: 20px;
    padding: 8px;
    width: 100%;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-family: Roboto_500Medium;
    font-size: 18px;
    font-weight: bold;
    text-transform: uppercase;
`;

export const SeriesArea = styled.View`
    align-items: center;
    margin-top: 15px;
`;

export const Text = styled.Text`
    color: #fff;
    font-family: Roboto_500Medium;
    font-size: 18px;
`;