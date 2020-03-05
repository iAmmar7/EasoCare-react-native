import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';

let {height} = Dimensions.get('window');

function Authentication() {
  let [isSignUp, setSignUp] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.subLayer} />

      <View style={styles.subContainer}>
        <View style={styles.titles}>
          <TouchableOpacity
            onPress={() => {
              setSignUp(false);
            }}>
            <Text style={{color: !isSignUp ? 'white' : '#d3d3d3'}}>
              SIGN IN
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setSignUp(true);
            }}>
            <Text style={{color: isSignUp ? 'white' : '#d3d3d3'}}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          {isSignUp && <TextInput style={styles.input} placeholder="Name" />}
          <TextInput style={styles.input} placeholder="Email" />
          <TextInput style={styles.input} placeholder="Password" />
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={{color: 'white'}}>CONTINUE</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',

    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 40,
    padding: 40,
  },
  input: {
    borderBottomColor: '#d3d3d3',
    borderBottomWidth: 0.7,
    marginBottom: 25,
  },
  subContainer: {
    height: 350,
    width: 330,
    marginTop: 50,
  },
  button: {
    width: 330,
    height: 55,
    borderRadius: 30,
    backgroundColor: '#644085',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  subLayer: {
    height: height / 2.5,

    backgroundColor: '#644085',
    borderBottomLeftRadius: 150,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: -1,
  },
  titles: {
    paddingVertical: 17,
    paddingHorizontal: 30,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default Authentication;
