import React, { useState } from 'react';
import { Alert, Image } from 'react-native';
import {
    Container,
    Animation,
    Input,
    Button,
    ButtonText,
    SeriesArea,
    Text
} from './styles';
import logo from '../../assets/logo.png';
import api from '../../services/api';

export default function Home() {
    const [name, setSerie] = useState('');
    const [series, setSeries] = useState(null);

    async function handleBuscar() {
        try {
            const { data } = await api.get(`search/shows?q=${name}`);
            // console.log(data);

            if (data.length === 0) {
                Alert.alert('Buscar', 'Digite uma série válida.');
            } else {
                const { show } = data[0];
                const { name: showName, summary, type, genres, premiered, rating } = show;
                const { average, type: ratingType } = rating || {}; 

                setSeries({ showName, summary, type, genres, premiered, ratingType, average });
            }
        } catch (error) {
            Alert.alert('Buscar', 'Ocorreu um erro ao buscar a série.');
        }
    }

    async function handleLimpar() {
        setSeries(null);
        setSerie('');
    }

    return (
        <Container>
            <Animation
                animation='bounceInDown'
                delay={100}
                duration={1500}
            >
                <Image style={{width:195, height:200}} source={logo} />
            </Animation>

            <Animation
                animation='bounceInRight'
                delay={100}
                duration={1500}
            >
                {!series &&
                    <Input
                        keyboardType="string"
                        maxLength={25}
                        onChangeText={setSerie}
                        onSubmitEditing={handleBuscar}
                        placeholder="Digite a série que deseja buscar"
                        placeholderTextColor="#212529"
                        value={name}
                    />
                }

                <Button
                    activeOpacity={0.8}
                    onPress={series ? handleLimpar : handleBuscar}>
                    <ButtonText>
                        {series ? 'Limpar' : 'Buscar'}
                    </ButtonText>
                </Button>
            </Animation>

            {series &&
                <SeriesArea>
                    <Text>Série: {series.showName}</Text>
                    <Text>Tipo: {series.type}</Text>
                    <Text>Gêneros: {series.genres.join(', ')}</Text>
                    <Text>Data de estreia: {series.premiered}</Text>
                    <Text>Tipo de classificação: {series.ratingType}</Text>
                    <Text>Classificação média: {series.average}</Text>
                    <Text>Resumo: {series.summary}</Text>
                </SeriesArea>
            }
        </Container>
    );
}