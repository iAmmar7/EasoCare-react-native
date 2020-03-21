import React, {Component} from 'react';
import {View, Image, Text, Dimensions, StyleSheet} from 'react-native';
import {Icon} from 'native-base';
let width = Dimensions.get('window').width;

function CarouselItem() {
  return (
    <View style={styles.listItem}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={{
            uri:
              'https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
          }}
          style={{height: 35, width: 35, borderRadius: 17.5}}
        />
        <View style={{paddingLeft: 20}}>
          <Text style={{color: 'black', fontSize: 18, fontWeight: 'bold'}}>
            Coca-Cola
          </Text>
          <Text style={{color: 'gray'}}>1 hour ago</Text>
        </View>
      </View>
      <View>
        <Image
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTnogb4pPwl5tpWRuTxM0osglj2PbHzLT5-ZG-8DVCHjUYgMl6-',
          }}
          style={{width: 200, height: 200}}
        />
      </View>
      <View>
        <Text style={{fontWeight: 'bold', fontSize: 36, color: 'black'}}>
          50% discount
        </Text>
      </View>
      <View>
        <Text style={{color: 'gray', textAlign: 'center', width: width - 100}}>
          if you're offered a seat on a rocket ship,don't ask what seat! Just
          get on.
        </Text>
        <Text
          style={{
            color: 'gray',
            paddingTop: 20,
            textAlign: 'center',
            width: width - 100,
          }}>
          Terms and conditions descriptions
        </Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon
          name="calendar"
          type="Feather"
          style={{fontSize: 22, color: 'gray'}}
        />
        <View style={{paddingLeft: 6, alignItems: 'center'}}>
          <Text style={{color: 'black', fontWeight: 'bold'}}>01/23/20</Text>
          <Text style={{color: 'gray'}}>Expiration Date</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    height: '100%',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
  },
});

export default CarouselItem;
