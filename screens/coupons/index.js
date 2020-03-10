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

function Coupons() {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: '50%',
          backgroundColor: '#8a56ac',
          borderBottomLeftRadius: 80,
        }}>
        <View style={{flex: 1}}>
          <View style={styles.headerContainer}>
            <View
              style={{
                flex: 0.2,
                padding: '6%',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Icon
                type="MaterialIcons"
                name="arrow-back"
                style={{color: 'gray'}}
              />
              <Icon type="Ionicons" name="ios-search" style={{color: 'gray'}} />
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'flex-end',
                paddingLeft: '20%',
                paddingBottom: '30%',
              }}>
              <Text style={{fontSize: 30, color: 'black', fontWeight: '700'}}>
                Coupons
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 0.7,
              borderLeftWidth: 1,
              borderLeftColor: '#754a92',
              borderBottomColor: '#754a92',
              borderBottomWidth: 1,
              borderBottomLeftRadius: 80,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={{
                    uri:
                      'https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                  }}
                  style={{
                    height: 50,
                    width: 50,
                    borderRadius: 25,
                    borderWidth: 2,
                    borderColor: 'white',
                  }}
                />
                <View style={{paddingLeft: 20}}>
                  <Text style={{color: 'white', paddingBottom: 4}}>
                    Coca-Cola
                  </Text>
                  <Text
                    style={{fontWeight: 'bold', color: 'white', fontSize: 17}}>
                    Discount 80%
                  </Text>
                </View>
              </View>

              <View>
                <Text style={{color: 'white', paddingBottom: 4}}>9 hrs</Text>
                <View
                  style={{
                    height: 25,
                    width: 25,
                    borderRadius: 12.5,
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text>4</Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 0.7,
              borderLeftWidth: 1,
              borderLeftColor: '#754a92',
              borderBottomColor: '#754a92',
              borderBottomWidth: 1,
              borderBottomLeftRadius: 80,
            }}></View>
        </View>
      </View>

      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            height: 150,
            borderLeftWidth: 1,
            borderLeftColor: '#2a1a37',
            borderBottomColor: '#2a1a37',
            borderBottomWidth: 1,
            borderBottomLeftRadius: 80,
          }}></View>
        <View
          style={{
            height: 150,
            borderLeftWidth: 1,
            borderLeftColor: '#2a1a37',
            borderBottomColor: '#2a1a37',
            borderBottomWidth: 1,
            borderBottomLeftRadius: 80,
          }}></View>
        <View
          style={{
            height: 150,
            borderLeftWidth: 1,
            borderLeftColor: '#2a1a37',
            borderBottomColor: '#2a1a37',
            borderBottomWidth: 1,
            borderBottomLeftRadius: 80,
          }}></View>
        <View
          style={{
            height: 150,
            borderLeftWidth: 1,
            borderLeftColor: '#2a1a37',
            borderBottomColor: '#2a1a37',
            borderBottomWidth: 1,
            borderBottomLeftRadius: 80,
          }}></View>
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
    flex: 1,
    backgroundColor: 'white',
    borderBottomLeftRadius: 100,
  },
  subContainer: {
    height: '80%',
  },
});

export default Coupons;
