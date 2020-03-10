import React, {Component} from 'react';
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

function CouponItem({
  isNotification,
  numberOfNotifications,
  image,
  title,
  text,
  time,
}) {
  return (
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
          <Text style={{color: 'white', paddingBottom: 4}}>Coca-Cola</Text>
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 17}}>
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
  );
}

export default CouponItem;
