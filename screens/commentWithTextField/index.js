import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {Icon} from 'native-base';
import {CheckBox} from 'react-native-elements';

function CommentWithTextField({navigation}) {
  const [checkBox, setCheckBox] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.navigationBar}>
        <Icon type="MaterialIcons" name="arrow-back" style={styles.icon} />
      </View>
      <View style={styles.commentContainer}>
        <View style={styles.commentBox}>
          <Text style={styles.heading}>Comment</Text>
          <TextInput
            multiline={true}
            numberOfLines={4}
            style={styles.inputField}
          />
          <CheckBox
            containerStyle={styles.checkBoxContainer}
            textStyle={styles.checkBoxText}
            title="Anonymous"
            checkedIcon="dot-circle-o"
            uncheckedIcon="circle-o"
            checked={checkBox}
            onPress={() => setCheckBox(!checkBox)}
            size={20}
            checkedColor="grey"
            uncheckedColor="grey"
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity>
              <View style={styles.imageButtonContainer}>
                <Icon
                  type="SimpleLineIcons"
                  name="cloud-upload"
                  style={styles.imageButtonIcon}
                />
                <Text style={styles.buttonText}>Image</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <View>
                <Text style={styles.buttonText}>Post</Text>
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
    paddingBottom: 50,
    backgroundColor: '#250033',
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
  },
  heading: {
    fontWeight: '700',
    fontSize: 30,
    color: 'white',
    marginBottom: 20,
  },
  inputField: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 6,
  },
  checkBoxContainer: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    alignSelf: 'flex-start',
  },
  checkBoxText: {
    color: 'grey',
    marginLeft: 4,
    textTransform: 'uppercase',
    fontWeight: '400',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginTop: 25,
    alignItems: 'flex-end',
  },
  imageButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 6,
  },
  imageButtonIcon: {
    color: 'white',
    marginRight: 8,
    backgroundColor: '#8a56ac',
    borderRadius: 50,
    padding: 6,
  },
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 100,
    backgroundColor: '#8a56ac',
  },
  buttonText: {
    color: 'white',
    textTransform: 'uppercase',
  },
});

export default CommentWithTextField;
