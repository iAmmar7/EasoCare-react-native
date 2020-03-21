import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function NotificationItem({
  isNotification,
  numberOfNotifications,
  image,
  title,
  text,
  time,
}) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: image,
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
    paddingBottom: 30,
    paddingLeft: 30,
    paddingRight: 85,
  },
  imageContainer: {
    paddingRight: 18,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 0,
    borderColor: 'white',
  },
  textContainer: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  text: {
    color: 'white',
    marginBottom: 5,
  },
  time: {
    color: '#8d8296',
  },
});

export default NotificationItem;
