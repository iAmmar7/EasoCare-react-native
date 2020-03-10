import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';

import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Icon,
} from 'native-base';
import LeftMessage from '../../components/leftMessage';
import RightMessage from '../../components/RightMessage';
let width = Dimensions.get('window').width;

function Contact({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{flex: 0.2, padding: '6%'}}>
          <Icon
            type="MaterialIcons"
            name="arrow-back"
            style={{color: 'gray'}}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            paddingLeft: '20%',
            paddingBottom: '20%',
          }}>
          <Text style={{fontSize: 30, color: 'black', fontWeight: '700'}}>
            Contact
          </Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.messages}>
        <RightMessage
          name="Beatrice"
          image="https://lh3.googleusercontent.com/proxy/nBES9WxqVAcjmwUxMNmKBjZwolFHChU6UrG9grEpgaY44cJceD6xKBQ80cbTUZXm1sb6V5B72z6idrG2jtgRtf4KdzINudqWZ-8j6EF1ehbBR1Jw7gOszARrDpTW1rbIompxqxwQ2vXB"
          message="What is the best time to visit Rio de Janeiro?"
        />
        <LeftMessage
          name="Ryan"
          image="https://images.unsplash.com/photo-1541418950054-c12804e149d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          message="March is one of the best month to visit Rio. You can enjoy the beach and many of the attractions."
        />
        <Image
          source={{
            uri:
              'https://cmkt-image-prd.freetls.fastly.net/0.1.0/ps/1386316/910/575/m2/fpnw/wm1/rvbkfk0zcqd4osfcbqgkd2ti8wtx3yjzn85jeob5kam3hz4peqw36gj6kzc1my1x-.jpg?1466507140&s=205049d299b8cf4bdbea5153651a8d95',
          }}
          style={{height: 200, marginTop: 20}}
        />

        <RightMessage
          name="Beatrice"
          image="https://lh3.googleusercontent.com/proxy/nBES9WxqVAcjmwUxMNmKBjZwolFHChU6UrG9grEpgaY44cJceD6xKBQ80cbTUZXm1sb6V5B72z6idrG2jtgRtf4KdzINudqWZ-8j6EF1ehbBR1Jw7gOszARrDpTW1rbIompxqxwQ2vXB"
          message="And what about Carnival time?"
        />
        <LeftMessage
          name="Ryan"
          image="https://images.unsplash.com/photo-1541418950054-c12804e149d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          message="Oh sure late february or first days of March , a reason why
          accommodation fetches its highest prices."
        />
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.backey}>
          <Icon
            type="Ionicons"
            name="ios-arrow-back"
            style={{color: 'white', paddingRight: 10}}
          />
        </View>
        <View
          style={{
            flex: 0.8,
            justifyContent: 'center',
            paddingRight: 10,
            paddingBottom: 10,
          }}>
          <Item>
            <Input
              placeholder="Say something..."
              placeholderTextColor="white"
            />
            <Icon
              type="Ionicons"
              name="ios-mic"
              style={{color: 'white', fontSize: 30}}
              onPress={() => {
                navigation.navigate('CarouselItems');
              }}
            />
          </Item>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerContainer: {
    height: '20%',
  },
  messages: {
    flexGrow: 1,
    paddingBottom: 100,
  },
  footer: {
    height: '10%',
    backgroundColor: '#9599b3',
    flexDirection: 'row',
  },
  backey: {
    flex: 0.2,
    borderBottomRightRadius: 70,
    backgroundColor: '#4b516b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
});

export default Contact;
