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
let width = Dimensions.get('window').width;

function CreateProfile() {
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
            Create Profile
          </Text>
          <View style={{paddingTop: 5}}>
            <Text style={{color: 'gray'}}>Get knowledge about what</Text>
            <Text style={{color: 'gray'}}>customers think of your company</Text>
          </View>
        </View>
      </View>

      <ScrollView style={styles.subContainer}>
        <View style={styles.inputs}>
          <Item
            floatingLabel
            style={{borderBottomColor: '#4b0066', paddingTop: 7}}>
            <Label style={{color: 'gray', fontWeight: 'bold'}}>
              Company Name
            </Label>
            <Input style={{color: 'white'}} />
          </Item>
          <Item
            floatingLabel
            style={{
              marginTop: 20,
              borderBottomColor: '#4b0066',
              paddingTop: 7,
            }}>
            <Label style={{color: 'gray', fontWeight: 'bold'}}>
              Describe your product or company
            </Label>
            <Input style={{color: 'white'}} />
          </Item>
        </View>
        <View style={styles.map}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',

              paddingHorizontal: 20,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                type="SimpleLineIcons"
                name="location-pin"
                style={{color: 'gray'}}
              />
              <View
                style={{
                  alignItems: 'center',
                  paddingLeft: 20,
                  paddingBottom: 10,
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'white',
                    paddingBottom: 5,
                  }}>
                  Location
                </Text>
                <Text style={{color: 'gray'}}>Bogota, DC</Text>
              </View>
            </View>
            <Icon
              type="Ionicons"
              name="ios-arrow-forward"
              style={{color: 'white'}}
            />
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ImageBackground
              source={{
                uri:
                  'https://media.wired.com/photos/59269cd37034dc5f91bec0f1/191:100/pass/GoogleMapTA.jpg',
              }}
              style={{
                height: 150,
                width: width - 60,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              imageStyle={{
                borderBottomLeftRadius: 80,
                borderTopRightRadius: 80,
              }}>
              <Icon
                type="MaterialIcons"
                name="location-on"
                style={{color: '#8634eb', fontSize: 33}}
              />
            </ImageBackground>
          </View>
        </View>
        <View style={styles.labels}>
          <View>
            <Item
              floatingLabel
              style={{
                borderBottomColor: '#4b0066',
                paddingTop: 7,
                width: '15%',
              }}>
              <Label style={{color: 'gray', fontWeight: 'bold'}}>Year</Label>
              <Input style={{color: 'white'}} />
            </Item>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Item
              floatingLabel
              style={{
                borderBottomColor: '#4b0066',
                paddingTop: 7,
                width: '15%',
              }}>
              <Label style={{color: 'gray', fontWeight: 'bold'}}>Logo</Label>
              <Input style={{color: 'white'}} />
            </Item>
            <View
              style={{
                height: 60,
                width: 60,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 30,
                backgroundColor: '#8634eb',
                marginLeft: 25,
              }}>
              <Icon
                type="SimpleLineIcons"
                name="cloud-upload"
                style={{color: 'white'}}
              />
            </View>
          </View>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={{
              height: 60,
              width: '100%',
              borderRadius: 30,
              backgroundColor: '#8634eb',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 18}}>SAVE</Text>
          </TouchableOpacity>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View
              style={{
                width: '50%',
                height: 3,
                borderRadius: 2,
                backgroundColor: '#404040',
                marginTop: 25,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#250033',
  },
  headerContainer: {
    height: '20%',
    backgroundColor: 'white',
    borderBottomLeftRadius: 100,
  },
  subContainer: {
    height: '80%',
  },
  inputs: {
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  map: {
    paddingVertical: 30,
  },
  labels: {
    paddingHorizontal: 20,
  },
  button: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 10,
    justifyContent: 'center',
  },
});

export default CreateProfile;
