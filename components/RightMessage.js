import React, {Component} from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

function RightMessage({message, image, name}) {
  return (
    <View style={{alignSelf: 'flex-end', marginTop: 20}}>
      <View style={[styles.user, {alignSelf: 'flex-end', paddingRight: 30}]}>
        <Text style={{fontWeight: 'bold', paddingRight: 10}}>{name}</Text>
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
      </View>
      <View style={styles.messageRight}>
        <Text style={{color: 'white', textAlign: 'right'}}>{message}</Text>
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

  messageRight: {
    padding: 20,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: '#8a56ac',
    maxWidth: '90%',
  },
});

export default RightMessage;
