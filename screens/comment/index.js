import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {Icon} from 'native-base';

function Comment({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.navigationBar}>
        <Icon type="MaterialIcons" name="arrow-back" style={styles.icon} />
      </View>
      <View style={styles.commentContainer}>
        <View style={styles.commentBox}>
          <Text style={styles.heading}>Comment</Text>
          <Text style={styles.description}>
            Choose the best option for your comment or opinion to this company
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={[styles.button, styles.clientButton]}>
              <View>
                <Text style={styles.buttonText}>Client</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.employeeButton]}>
              <View>
                <Text style={styles.buttonText}>Employee</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.providerButton]}>
              <View>
                <Text style={styles.buttonText}>Provider</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aaa',
  },
  navigationBar: {
    marginLeft: 20,
    marginTop: 20,
  },
  icon: {
    color: 'grey',
  },
  commentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  commentBox: {
    marginLeft: 20,
    marginRight: 20,
    padding: 25,
    paddingBottom: 55,
    backgroundColor: '#250033',
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
  },
  heading: {
    fontWeight: '700',
    fontSize: 30,
    color: 'white',
  },
  description: {
    color: '#8d8296',
  },
  buttonContainer: {
    marginTop: 60,
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 100,
    marginBottom: 12,
    width: '90%',
    alignItems: 'center',
  },
  clientButton: {
    backgroundColor: '#8a56ac',
  },
  employeeButton: {
    backgroundColor: '#d47fa6',
  },
  providerButton: {
    backgroundColor: 'grey',
  },
  buttonText: {
    color: 'white',
    textTransform: 'uppercase',
  },
});

export default Comment;
