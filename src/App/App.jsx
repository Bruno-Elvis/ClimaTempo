
import { SafeAreaView, View, Image, Text } from 'react-native';

import { styles } from './styles';

import { Button } from '../components/Button';
import { TextStyled } from '../components/Text';

// import { api_token as apiToken } from '../api.token.json';

import termometro from '../assets/icons/system/termometro.png';
import umidade from '../assets/icons/system/umidade_percent.png';
import local from '../assets/icons/system/local.png';
import weather from '../assets/icons/weather/2r.png';


export default function App() {
  return (
    <SafeAreaView style={ styles.wrapper }>
      <View style={ styles.mainContainer }>
        <View style={ styles.currentContainer }>
          <View style={ styles.labelInfo }>
            <Image source={local} style={{width: 12, height: 16, top: 2}}/>

            <TextStyled>VITÓRIA - ES 22/08/2024 16:20:00</TextStyled>

          </View>

          <View style={ styles.labelInfo }>
            <Image source={termometro} style={{width: 10, height: 20}}/>

            <Text>TEMPERATURA: 13°C</Text>

          </View>

          <View style={ styles.labelInfo }>
            <Image source={umidade} style={{width: 13, height: 18}}/>

            <Text>UMIDADE: 60%</Text>

          </View>

          <View>
            <Text>SOL COM MUITAS NUVENS</Text>

            <Image source={weather}/>

          </View>

        </View>

        <View style={ styles.predictContainer }>
          <View style={ styles.todayContainer }/>

          <View style={ styles.tomorrowContainer }/>

        </View>

        <Button>ATUALIZAR DADOS</Button>

      </View>

    </SafeAreaView>
  );

}
