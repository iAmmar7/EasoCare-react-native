import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {Icon} from 'native-base';
import Slider from 'azir-slider';

function QuestionWithSlider({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.navigationBar}>
        <Icon type="MaterialIcons" name="arrow-back" style={styles.icon} />
      </View>
      <View style={styles.commentContainer}>
        <View style={styles.commentBox}>
          <Text style={styles.heading}>3. Question</Text>
          <Text style={styles.description}>
            How do you feel with the staff assistance?
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <View>
                <Text style={styles.buttonText}>Skip</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.emojiContainer}>
          <Icon type="FontAwesome5" name="angry" style={styles.emojiIcon} />
          <Icon type="Ionicons" name="heart" style={styles.emojiIcon} />
        </View>
        <Slider
          // value={30}
          // step={10}
          // onStart={value => console.log(value)}
          // onChange={value => console.log(value)}
          minimumValue={0}
          maximumValue={100}
          progressTrackColor="#8a56ac"
          trackStyle={styles.track}
          thumbStyle={styles.thumb}
        />
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
    backgroundColor: '#8a56ac',
  },
  buttonText: {
    color: 'white',
    textTransform: 'uppercase',
  },
  bottomContainer: {
    marginBottom: 40,
    paddingLeft: 10,
    paddingRight: 10,
  },
  emojiContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  emojiIcon: {
    color: 'red',
    fontSize: 40,
  },
  track: {
    height: 22,
    borderRadius: 80,
    backgroundColor: '#d1d1d1',
  },
  thumb: {
    width: 30,
    height: 30,
    color: 'white',
    backgroundColor: '#eaeaea',
  },
});

export default QuestionWithSlider;
