import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera, CameraType } from 'expo-camera';

import { Icon } from './style';

export default function Step9({ navigation, navigation: { goBack } }: any){
  const [hasPermission, setHasPermission] = useState(null);
  const [getPhotoStep, setPhonoStep] = useState(0);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const list = [
    'Foto frontal',
    'Foto lateral esquerda',
    'Foto lateral direita',
    'Foto traseira',
    'Foto do motor',
    'Foto do painel',
    'Foto do porta-malas',
    'Foto do capô',
    'Foto das rodas',
    'Foto do interior'
  ]

  if (list.length - 1 === getPhotoStep) {
    navigation.push('Step10')
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={CameraType.back}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => {
              goBack()
            }}>
            <Icon name="arrow-back-outline"/>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setPhonoStep(getPhotoStep + 1);
            }}>
            <Text style={styles.text}>{getPhotoStep + 1} - tirar {list[getPhotoStep]}</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: -1,
  },
  buttonContainer: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    marginTop: '145%',
    backgroundColor: '#17468C',
    height: '10%',
    width: '80%',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
    textTransform: 'uppercase',
  },
  iconButton: {
    marginTop: '20%',
    backgroundColor: '#17468C',
    height: 50,
    width: 50,
    borderRadius: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backIcon: {
    display: 'flex',
    marginTop: '20%',
    marginLeft: '5%',
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#17468C'
  }
});