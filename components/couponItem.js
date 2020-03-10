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
            uri: image,
          }}
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            borderWidth: isNotification ? 2 : 0,
            borderColor: 'white',
          }}
        />
        <View style={{paddingLeft: 20, width: 170}}>
          <Text
            style={{
              color: isNotification ? 'white' : '#8d8296',
              paddingBottom: 4,
            }}>
            {title}
          </Text>
          <Text style={{fontWeight: 'bold', color: 'white', fontSize: 17}}>
            {text}
          </Text>
        </View>
      </View>

      <View>
        <Text
          style={{
            color: isNotification ? 'white' : '#8d8296',
            paddingBottom: 4,
          }}>
          {time}
        </Text>
        {isNotification && (
          <View
            style={{
              height: 25,
              width: 25,
              borderRadius: 12.5,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>{numberOfNotifications}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

export default CouponItem;
