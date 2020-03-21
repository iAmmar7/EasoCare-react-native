import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {Icon} from 'native-base';

function Question({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.navigationBar}>
        <Icon type="MaterialIcons" name="arrow-back" style={styles.icon} />
      </View>
      <View style={styles.commentContainer}>
        <View style={styles.commentBox}>
          <Text style={styles.heading}>2. Question</Text>
          <Text style={styles.description}>
            Did you like the service or product of this company?
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.skipButton]}>
              <View>
                <Text style={styles.buttonText}>Skip</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={[styles.button, styles.noButton]}>
          <View>
            <Text style={styles.buttonText}>No</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.skipButton]}>
          <View>
            <Text style={styles.buttonText}>Yes</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#736d6d',
    paddingLeft: 20,
    paddingRight: 20,
  },
  icon: {
    color: 'white',
  },
  commentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  commentBox: {
    padding: 25,
    paddingLeft: 35,
    backgroundColor: 'white',
    borderTopRightRadius: 80,
    borderTopLeftRadius: 80,
    borderBottomLeftRadius: 80,
  },
  heading: {
    fontWeight: '700',
    fontSize: 25,
    paddingBottom: 5,
  },
  description: {
    color: '#8d8296',
  },
  buttonContainer: {
    marginTop: 50,
    alignItems: 'flex-end',
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 100,
    alignItems: 'center',
  },
  skipButton: {
    backgroundColor: '#8a56ac',
  },
  noButton: {
    backgroundColor: '#a1a1a1',
  },
  buttonText: {
    color: 'white',
    textTransform: 'uppercase',
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Question;
