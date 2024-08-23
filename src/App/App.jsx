/* eslint-disable react-native/no-inline-styles */

import { SafeAreaView, View, Image, Text } from 'react-native';

import { useState } from 'react';

import { styles } from './styles';

import { Button } from '../components/Button';
import { TextStyled } from '../components/Text';

// import { api_token as apiToken } from '../api.token.json';

import termometro from '../assets/icons/system/termometro.png';
import termometro_st from '../assets/icons/system/termometro_st.png';
import umidade from '../assets/icons/system/umidade_percent.png';
import precipitacao from '../assets/icons/system/precipitacao.png';
import local from '../assets/icons/system/local.png';
import weather from '../assets/icons/weather/2r.png';

import mock_api_current from '../../api.mock_current_weather.json';

console.log(mock_api_current);


export default function App() {
  const [currentLocalName] = useState('Vitória');
  const [currentLocalState] = useState('ES');
  const [currentTemperature] = useState(29);
  const [currentHumidity] = useState(58);
  const [currentCondition] = useState('Sol com muitas nuvens');

  // new Date(minhaData.date).toLocaleDateString('pt-BR', {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'});

  return (
    <SafeAreaView style={ styles.wrapper }>
      <View style={ styles.mainContainer }>
        <View style={ styles.currentContainer }>
          <View style={ styles.labelInfo }>
            <Image source={local} style={{width: 12, height: 16, top: 2}}/>

            <TextStyled size={{fontSize: 20}}>{currentLocalName} - {currentLocalState} 22/08/2024 16:20</TextStyled>

          </View>

          <View style={ styles.labelInfo }>
            <Image source={termometro} style={{width: 10, height: 20}}/>

            <TextStyled>TEMPERATURA: {currentTemperature}°C</TextStyled>

          </View>

          <View style={ styles.labelInfo }>
            <Image source={umidade} style={{width: 13, height: 18}}/>

            <TextStyled>UMIDADE: {currentHumidity}%</TextStyled>

          </View>

          <View style={{alignItems: 'center', margin: 10}}>
            <TextStyled>{currentCondition}</TextStyled>

            <Image source={weather} style={{bottom: 10}}/>

          </View>

        </View>

        <View style={ styles.predictContainer }>
          <View style={ styles.todayContainer }>
            <Text style={ styles.labelPredict }>HOJE</Text>

            <View style={ styles.predictTempIcons }>
              <Image source={termometro} style={{width: 20, height: 40}}/>
              <Image source={termometro_st} style={{width: 30, height: 40}} />

            </View>

            <View style={ styles.predictTempIcons }>
              <View style={ styles.predictTempData }>
                <TextStyled>18°C</TextStyled>
                <TextStyled>•</TextStyled>
                <TextStyled>28°C</TextStyled>

              </View>

              <View style={ styles.predictTempData }>
                <TextStyled>21°C</TextStyled>
                <TextStyled>•</TextStyled>
                <TextStyled>23°C</TextStyled>

              </View>

            </View>

            <Image source={umidade} style={{width: 23, height: 32, alignSelf: 'center', top: 30, marginBottom: 40}}/>

            <TextStyled>64% - 100%</TextStyled>

            <Image source={precipitacao} style={{width: 35, height: 30, alignSelf: 'center', top: 30, marginBottom: 40}}/>

            <TextStyled>0 mm</TextStyled>

          </View>

          <View style={ styles.tomorrowContainer }>
            <Text style={ styles.labelPredict }>AMANHÃ</Text>

            <View style={ styles.predictTempIcons }>
              <Image source={termometro} style={{width: 20, height: 40}}/>
              <Image source={termometro_st} style={{width: 30, height: 40}} />

            </View>

            <View style={ styles.predictTempIcons }>
              <View style={ styles.predictTempData }>
                <TextStyled>20°C</TextStyled>
                <TextStyled>•</TextStyled>
                <TextStyled>31°C</TextStyled>

              </View>

              <View style={ styles.predictTempData }>
                <TextStyled>21°C</TextStyled>
                <TextStyled>•</TextStyled>
                <TextStyled>24°C</TextStyled>

              </View>

            </View>

            <Image source={umidade} style={{width: 23, height: 32, alignSelf: 'center', top: 30, marginBottom: 40}}/>

            <TextStyled>51% - 92%</TextStyled>

            <Image source={precipitacao} style={{width: 35, height: 30, alignSelf: 'center', top: 30, marginBottom: 40}}/>

            <TextStyled>0 mm</TextStyled>

          </View>

        </View>

        <Button>ATUALIZAR DADOS</Button>

      </View>

    </SafeAreaView>
  );

}
