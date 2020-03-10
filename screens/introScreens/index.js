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
      'https://images.wallpaperscraft.com/image/microphone_equipment_dark_background_121814_225x300.jpg',
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Clients',
    text:
      'Share your experience about a product or service with other customers.',
    image:
      'https://images.pexels.com/photos/604684/pexels-photo-604684.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Providers',
    text:
      'Rate the performance of yours providers and share with other companies.',
    image:
      'https://i.pinimg.com/originals/8d/7f/55/8d7f557a26bfa3dc85491ff7825913b1.jpg',
    backgroundColor: '#22bcb5',
  },
];

function Intro() {
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
    this.setState({showRealApp: true});
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
