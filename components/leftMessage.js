import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

function LeftMessage({message, image, name}) {
  return (
    <View style={{alignSelf: 'flex-start', marginTop: 20}}>
      <View style={[styles.user, {paddingLeft: 30}]}>
        <Image
          source={{
            uri: image,
          }}
          style={{
            height: 30,
            width: 30,
            borderRadius: 15,
            borderColor: '#817889',
            borderWidth: 2,
          }}
        />
        <Text style={{fontWeight: 'bold', paddingLeft: 10}}>{name}</Text>
      </View>
      <View style={styles.messageLeft}>
        <Text style={{color: 'white', textAlign: 'left'}}>{message}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 10,
  },
  messageLeft: {
    padding: 20,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: '#9599b3',
    maxWidth: '90%',
  },
});

export default LeftMessage;
