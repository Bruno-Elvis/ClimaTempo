/* eslint-disable react-native/no-inline-styles */

import { SafeAreaView, View, Image, Text, Modal, Pressable, ActivityIndicator } from 'react-native';

import { useCallback, useEffect, useState } from 'react';

import { styles } from './styles';

import { ButtonStyled } from '../components/Button';
import { TextStyled } from '../components/Text';
import IconWeather from '../components/IconWather';

import termometro from '../assets/icons/system/termometro.png';
import termometro_st from '../assets/icons/system/termometro_st.png';
import umidade from '../assets/icons/system/umidade_percent.png';
import precipitacao from '../assets/icons/system/precipitacao.png';
import local from '../assets/icons/system/local.png';

import { token_api } from '../token_api.json';


export default function App() {
  const [currentLocalName, setCurrentLocalName] = useState('');
  const [currentLocalState, setCurrentLocalState] = useState('');
  const [currentDateWeather, setCurrentDateWeather] = useState('');
  const [currentTemperature, setCurrentTemperature] = useState(0);
  const [currentHumidity, setCurrentHumidity] = useState(0);
  const [currentCondition, setCurrentCondition] = useState('');
  const [currentIcon, setCurrentIcon] = useState('');

  const [predictMinTemperatureToday, setPredictMinTemperatureToday] = useState(0);
  const [predictMaxTemperatureToday, setPredictMaxTemperatureToday] = useState(0);
  const [predictMinThermalSensationToday, setPredictMinThermalSensationToday] = useState(0);
  const [predictMaxThermalSensationToday, setPredictMaxThermalSensationToday] = useState(0);
  const [predictMinHumidityToday, setPredictMinHumidityToday] = useState(0);
  const [predictMaxHumidityToday, setPredictMaxHumidityToday] = useState(0);
  const [predictPrecipitationToday, setPredictPrecipitationToday] = useState(0);

  const [predictMinTemperatureTomorrow, setPredictMinTemperatureTomorrow] = useState(0);
  const [predictMaxTemperatureTomorrow, setPredictMaxTemperatureTomorrow] = useState(0);
  const [predictMinThermalSensationTomorrow, setPredictMinThermalSensationTomorrow] = useState(0);
  const [predictMaxThermalSensationTomorrow, setPredictMaxThermalSensationTomorrow] = useState(0);
  const [predictMinHumidityTomorrow, setPredictMinHumidityTomorrow] = useState(0);
  const [predictMaxHumidityTomorrow, setPredictMaxHumidityTomorrow] = useState(0);
  const [predictPrecipitationTomorrow, setPredictPrecipitationTomorrow] = useState(0);

  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState('');


  const loadCurrentWeatherData = useCallback(async () => {
    setIsLoading(true);

    let data = null;

    try {
      let response = await fetch(`https://apiadvisor.climatempo.com.br/api/v1/weather/locale/8284/current?token=${token_api}`, { method: 'GET' });

      if (!response.ok || response.status > 299) {
        throw new Error(response);

      }

      data = await response.json();

      response.ok && setModalIsVisible(true);

      setCurrentLocalName(data.name);
      setCurrentLocalState(data.state);
      setCurrentTemperature(data.data.temperature);
      setCurrentHumidity(data.data.humidity);
      setCurrentCondition(data.data.condition);
      setCurrentIcon(data.data.icon);
      setCurrentDateWeather(new Date(data.data.date).toLocaleDateString('pt-BR', {year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'}));

    } catch (response) {
      setHasError(response.toString());

    } finally {
      setIsLoading(false);

    }

  }, []);

  const loadPredictWeatherData = useCallback(async () => {
    setIsLoading(true);

    let data = null;

    try {
      let response = await fetch(`https://apiadvisor.climatempo.com.br/api/v2/forecast/locale/8284/days/15?token=${token_api}`, { method: 'GET' });

      if (!response.ok || response.status > 299) {
        throw new Error(response);

      }

      data = await response.json();

      response.ok && setModalIsVisible(true);

      setPredictMinTemperatureToday(data.data[0].temperature.min);
      setPredictMaxTemperatureToday(data.data[0].temperature.max);
      setPredictMinThermalSensationToday(data.data[0].thermal_sensation.min);
      setPredictMaxThermalSensationToday(data.data[0].thermal_sensation.max);
      setPredictMinHumidityToday(data.data[0].humidity.min);
      setPredictMaxHumidityToday(data.data[0].humidity.max);
      setPredictPrecipitationToday(data.data[0].rain.precipitation);

      setPredictMinTemperatureTomorrow(data.data[1].temperature.min);
      setPredictMaxTemperatureTomorrow(data.data[1].temperature.max);
      setPredictMinThermalSensationTomorrow(data.data[1].thermal_sensation.min);
      setPredictMaxThermalSensationTomorrow(data.data[1].thermal_sensation.max);
      setPredictMinHumidityTomorrow(data.data[1].humidity.min);
      setPredictMaxHumidityTomorrow(data.data[1].humidity.max);
      setPredictPrecipitationTomorrow(data.data[1].rain.precipitation);

    } catch (response) {
      setHasError(response.toString());

    } finally {
      setIsLoading(false);

    }

  }, []);

  useEffect(() => {
    loadCurrentWeatherData();
    loadPredictWeatherData();

  }, [loadCurrentWeatherData, loadPredictWeatherData]);


  function handlePressButton () {
    loadCurrentWeatherData();
    loadPredictWeatherData();

  }


  return (
    <SafeAreaView style={ styles.wrapper }>
      <View style={ styles.mainContainer }>
        <View style={ styles.currentContainer }>
          <View style={ styles.labelInfo }>
            <Image source={local} style={{width: 12, height: 16, top: 2}}/>

            <TextStyled size={{fontSize: 20}}>{ currentLocalName } - { currentLocalState }  { currentDateWeather }</TextStyled>

          </View>

          <View style={ styles.labelInfo }>
            <Image source={termometro} style={{width: 10, height: 20}}/>

            <TextStyled>TEMPERATURA: { currentTemperature }°C</TextStyled>

          </View>

          <View style={ styles.labelInfo }>
            <Image source={umidade} style={{width: 13, height: 18}}/>

            <TextStyled>UMIDADE: { currentHumidity }%</TextStyled>

          </View>

          <View style={{alignItems: 'center', marginTop: 10}}>
            <TextStyled>{ currentCondition }</TextStyled>

            <IconWeather iconType={ currentIcon } />

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
                <TextStyled>{ predictMinTemperatureToday }°C</TextStyled>
                <TextStyled>•</TextStyled>
                <TextStyled>{ predictMaxTemperatureToday }°C</TextStyled>

              </View>

              <View style={ styles.predictTempData }>
                <TextStyled>{ predictMinThermalSensationToday }°C</TextStyled>
                <TextStyled>•</TextStyled>
                <TextStyled>{ predictMaxThermalSensationToday }°C</TextStyled>

              </View>

            </View>

            <Image source={umidade} style={{width: 23, height: 32, alignSelf: 'center', top: 30, marginBottom: 40}}/>

            <TextStyled>{ predictMinHumidityToday }% - { predictMaxHumidityToday }%</TextStyled>

            <Image source={precipitacao} style={{width: 35, height: 30, alignSelf: 'center', top: 30, marginBottom: 40}}/>

            <TextStyled>{ predictPrecipitationToday } mm</TextStyled>

          </View>

          <View style={ styles.tomorrowContainer }>
            <Text style={ styles.labelPredict }>AMANHÃ</Text>

            <View style={ styles.predictTempIcons }>
              <Image source={termometro} style={{width: 20, height: 40}}/>
              <Image source={termometro_st} style={{width: 30, height: 40}} />

            </View>

            <View style={ styles.predictTempIcons }>
              <View style={ styles.predictTempData }>
                <TextStyled>{ predictMinTemperatureTomorrow }°C</TextStyled>
                <TextStyled>•</TextStyled>
                <TextStyled>{ predictMaxTemperatureTomorrow }°C</TextStyled>

              </View>

              <View style={ styles.predictTempData }>
                <TextStyled>{ predictMinThermalSensationTomorrow }°C</TextStyled>
                <TextStyled>•</TextStyled>
                <TextStyled>{ predictMaxThermalSensationTomorrow }°C</TextStyled>

              </View>

            </View>

            <Image source={umidade} style={{width: 23, height: 32, alignSelf: 'center', top: 30, marginBottom: 40}}/>

            <TextStyled>{ predictMinHumidityTomorrow }% - { predictMaxHumidityTomorrow }%</TextStyled>

            <Image source={precipitacao} style={{width: 35, height: 30, alignSelf: 'center', top: 30, marginBottom: 40}}/>

            <TextStyled>{ predictPrecipitationTomorrow } mm</TextStyled>

          </View>

        </View>

        {!isLoading && <ButtonStyled onPress={ handlePressButton } >ATUALIZAR DADOS</ButtonStyled>}

      </View>

      <Modal
        visible={ modalIsVisible }
        animationType="fade"
        statusBarTranslucent
        transparent
        onRequestClose={() => setModalIsVisible(false)} >

        <View style={ styles.modalOverlay }>
          <View style={ styles.modalContainer } >
            <TextStyled>DADOS ATUALZIADOS!</TextStyled>

            <Pressable
              style={{backgroundColor: 'black', marginTop: 10, padding: 10, borderRadius: 8}}
              onPress={() => setModalIsVisible(false)} >

                <Text>FECHAR</Text>

            </Pressable>

          </View>
        </View>

      </Modal>

      <Modal
        visible={ !!hasError }
        animationType="fade"
        statusBarTranslucent
        transparent
        onRequestClose={() => { setHasError(null); }} >

        <View style={ styles.modalOverlay }>
          <View style={ styles.modalContainer } >
            <TextStyled>{ hasError }</TextStyled>

            <Pressable
              style={{backgroundColor: 'black', marginTop: 10, padding: 10, borderRadius: 8}}
              onPress={() => { setHasError(null); }} >

                <Text>FECHAR</Text>

            </Pressable>

          </View>
        </View>

      </Modal>

      {isLoading && <ActivityIndicator size="large" style={{alignSelf: 'center'}} />}


    </SafeAreaView>

  );

}
