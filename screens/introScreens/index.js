import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 'somethun',
    title: 'Employees',
    text: 'Keep track to the satisfaction level of your employees and clients',
    image:
      'https://i.pinimg.com/originals/06/b1/23/06b12371cd430ea392d0c86920fa7942.jpg',
  },
  {
    key: 'somethun-dos',
    title: 'Clients',
    text:
      'Share your experience about a product or service with other customers.',
    image:
      'https://i.pinimg.com/736x/c0/81/ac/c081acf7f1e275ab3a847e2196d15bb9.jpg',
  },
  {
    key: 'somethun1',
    title: 'Providers',
    text:
      'Rate the performance of yours providers and share with other companies.',
    image:
      'https://i.pinimg.com/originals/82/0d/f7/820df7f5822404057922d2511955b7a7.jpg',
  },
];

function Intro({navigation}) {
  const _renderItem = ({item}) => {
    return (
      <ImageBackground style={styles.slide} source={{uri: item.image}}>
        <Text style={styles.title}>{item.title}</Text>

        <View style={{marginTop: 'auto', paddingBottom: 20}}>
          <Text style={styles.text}>{item.text}</Text>
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: '#8a56ac', marginBottom: 10},
            ]}>
            <Text style={{color: 'white'}}>EMAIL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: '#d47fa6'}]}>
            <Text style={{color: 'white'}}>FACEBOOK</Text>
          </TouchableOpacity>
          <View style={styles.line} />
        </View>
      </ImageBackground>
    );
  };
  const _onDone = () => {
    navigation.navigate('Authentication');
  };

  return (
    <>
      <AppIntroSlider
        renderItem={_renderItem}
        slides={slides}
        onDone={_onDone}
        showNextButton={false}
        paginationStyle={{top: 50}}
      />
    </>
  );
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '35%',
  },
  text: {
    color: 'white',
    textAlign: 'center',
    paddingBottom: 40,
  },
  button: {
    height: 59,
    borderRadius: 40,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    height: 4,
    width: '50%',
    borderRadius: 3,
    backgroundColor: '#50425b',
    alignSelf: 'center',
    marginTop: 15,
  },
});

export default Intro;
