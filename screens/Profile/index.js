import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {Icon, Fab} from 'native-base';
import Modal from 'react-native-modal';

let height = Dimensions.get('window').height;

function Profile() {
  let [model, setModel] = useState(false);
  return (
    <View style={styles.conatiner}>
      <Fab style={{backgroundColor: 'white'}} position="bottomRight">
        <Icon type="AntDesign" name="plus" style={{color: '#4b0066'}} />
      </Fab>
      <ImageBackground
        imageStyle={{borderBottomLeftRadius: 100}}
        source={{
          uri:
            'https://hdwallsource.com/img/2017/4/fitness-girl-computer-wallpaper-hd-61771-63608-hd-wallpapers.jpg',
        }}
        style={styles.mainHalf}>
        <View style={styles.headerContainer}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: 'flex-end',
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'row',
            }}>
            <View style={{alignItems: 'center', marginLeft: 50}}>
              <ImageBackground
                source={{
                  uri:
                    'https://hdwallsource.com/img/2017/4/fitness-girl-computer-wallpaper-hd-61771-63608-hd-wallpapers.jpg',
                }}
                imageStyle={{
                  borderRadius: 30,
                  borderWidth: 2,
                  borderColor: '#700099',
                  position: 'relative',
                }}
                style={{height: 60, width: 60}}>
                <View
                  style={{
                    height: 20,
                    width: 25,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'gray',
                    position: 'absolute',

                    top: 0,
                    right: 0,
                  }}>
                  <Text style={{color: 'white', fontSize: 10}}>12</Text>
                </View>
              </ImageBackground>
              <Text style={{color: 'black', fontSize: 12, paddingTop: 4}}>
                PROFILE
              </Text>
            </View>

            <View style={{alignItems: 'center', marginLeft: 50}}>
              <View
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 30,
                  borderWidth: 1,
                  borderColor: '#d3d3d3',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  type="EvilIcons"
                  name="paperclip"
                  style={{color: 'gray'}}
                />
              </View>
              <Text style={{color: 'gray', fontSize: 12, paddingTop: 4}}>
                RECENT
              </Text>
            </View>

            <View style={{alignItems: 'center', marginLeft: 50}}>
              <View
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 30,
                  borderWidth: 1,
                  borderColor: '#d3d3d3',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  type="EvilIcons"
                  name="paperclip"
                  style={{color: 'gray'}}
                />
              </View>
              <Text style={{color: 'gray', fontSize: 12, paddingTop: 4}}>
                COUPONS
              </Text>
            </View>

            <View style={{alignItems: 'center', marginLeft: 50}}>
              <View
                style={{
                  height: 60,
                  width: 60,
                  borderRadius: 30,
                  borderWidth: 1,
                  borderColor: '#d3d3d3',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon
                  type="EvilIcons"
                  name="paperclip"
                  style={{color: 'gray'}}
                />
              </View>
              <Text style={{color: 'gray', fontSize: 12, paddingTop: 4}}>
                RECENT
              </Text>
            </View>
          </ScrollView>
          <View
            style={{
              flex: 0.3,
              justifyContent: 'center',
              alignItems: 'center',
              paddingLeft: 20,
              padding: 5,
            }}>
            <Icon
              type="EvilIcons"
              name="chevron-down"
              style={{color: 'gray'}}
            />
          </View>
        </View>
        <View style={styles.imageContainer}>
          <View style={{display: 'flex', paddingLeft: 50, paddingBottom: 50}}>
            <Text style={{color: '#d3d3d3', paddingBottom: 2, fontSize: 19}}>
              45 Comments
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text
                  style={{color: 'white', fontSize: 32, fontWeight: 'bold'}}>
                  Chiara De Luca
                </Text>
              </View>
              <TouchableOpacity
                style={{
                  height: 40,
                  width: 40,
                  borderRadius: 20,
                  backgroundColor: '#4b0066',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 13,
                }}
                onPress={() => setModel(true)}>
                <Icon
                  type="Feather"
                  name="edit-2"
                  style={{fontSize: 20, color: 'white'}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.iconsContainer}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRightColor: '#38004d',
              borderRightWidth: 0.5,
            }}>
            <View>
              <Icon
                type="Feather"
                name="message-square"
                style={{fontSize: 50, color: 'white'}}
              />
              <View
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#b300b3',
                  position: 'absolute',
                  top: -15,
                  right: -15,
                }}>
                <Text style={{color: 'white'}}>7</Text>
              </View>
            </View>
            <Text style={{paddingTop: 5, color: '#d3d3d3', fontSize: 17}}>
              Comments
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View>
              <Icon
                type="Ionicons"
                name="ios-notifications-outline"
                style={{fontSize: 50, color: 'white'}}
              />
              <View
                style={{
                  height: 30,
                  width: 30,
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#ff0066',
                  position: 'absolute',
                  top: -15,
                  right: -15,
                }}>
                <Text style={{color: 'white'}}>5</Text>
              </View>
            </View>
            <Text style={{paddingTop: 5, color: '#d3d3d3', fontSize: 17}}>
              Notifications
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.aboutContainer}>
        <Text style={{fontSize: 19, color: 'white', fontWeight: 'bold'}}>
          About me
        </Text>
        <Text style={{color: '#d3d3d3', width: '85%'}}>
          Psicologa, Especialista en RRHH, Magister en RRHH
        </Text>
      </View>
      <View style={styles.experContainer}>
        <Text style={{fontSize: 19, color: 'white', fontWeight: 'bold'}}>
          Experience
        </Text>
        <Text style={{color: '#d3d3d3', width: '85%'}}>
          Tera Digital LLC (Actualmente), Airfrance, Airltaly
        </Text>
      </View>
      <View style={styles.footer}></View>
      <Modal
        testID={'modal'}
        isVisible={model}
        style={styles.model}
        onBackdropPress={() => setModel(false)}>
        <View
          style={{
            height: height / 1.7,
            backgroundColor: 'white',
            borderTopLeftRadius: 80,
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'white',
              borderTopLeftRadius: 80,
              borderBottomColor: '#d3d3d3',
              borderBottomWidth: 0.5,
              justifyContent: 'center',
              alignItems: 'center',
              padding: 40,
            }}>
            <Text
              style={{
                color: 'black',
                fontSize: 35,
                fontWeight: '700',
                paddingBottom: 10,
              }}>
              Are you sure?
            </Text>
            <Text
              style={{
                color: 'gray',
                textAlign: 'center',
                width: '80%',
                fontSize: 18,
              }}>
              All your comments will be removed, however your surveys will keep.
              If you have any company profile this will keep activated unless
              you delete it or put on not visible in the respective section
            </Text>
          </View>
          <View
            style={{
              flex: 0.7,
              borderBottomLeftRadius: 80,
              borderLeftWidth: 0.5,
              borderLeftColor: 'gray',
              borderBottomColor: 'gray',
              borderBottomWidth: 0.5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 22, color: 'black', fontWeight: '400'}}>
              YES
            </Text>
          </View>
          <View
            style={{
              flex: 0.7,
              borderBottomLeftRadius: 80,
              borderLeftWidth: 0.5,
              borderLeftColor: 'gray',
              borderBottomColor: 'gray',
              borderBottomWidth: 0.5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => setModel(false)}>
              <Text style={{fontSize: 22, color: 'black', fontWeight: '400'}}>
                CANCEL
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{flex: 0.2, alignItems: 'center', justifyContent: 'center'}}>
            <View
              style={{
                height: 6,
                borderRadius: 4,
                width: '40%',
                backgroundColor: 'black',
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: '#250033',
  },
  headerContainer: {
    flex: 0.7,
    backgroundColor: 'white',
    borderBottomLeftRadius: 100,
  },

  mainHalf: {
    flex: 2.6,
  },
  imageContainer: {
    flex: 1.6,
    justifyContent: 'flex-end',
  },
  iconsContainer: {
    flex: 0.8,
    borderLeftWidth: 0.5,
    borderLeftColor: '#4b0066',
    borderBottomColor: '#4b0066',
    borderBottomWidth: 0.5,
    borderBottomLeftRadius: 80,
  },
  aboutContainer: {
    flex: 0.5,
    borderLeftWidth: 0.5,
    borderLeftColor: '#4b0066',
    borderBottomColor: '#4b0066',
    borderBottomWidth: 0.5,
    borderBottomLeftRadius: 80,
    justifyContent: 'center',
    paddingLeft: 50,
  },
  experContainer: {
    flex: 0.5,
    borderLeftWidth: 0.5,
    borderLeftColor: '#4b0066',
    borderBottomColor: '#4b0066',
    borderBottomWidth: 0.5,
    borderBottomLeftRadius: 80,
    justifyContent: 'center',
    paddingLeft: 50,
  },
  footer: {
    flex: 0.3,
  },
  model: {
    justifyContent: 'flex-end',
    margin: 0,
    backgroundColor: 'rgba(0, 51, 102,0.9)',
  },
});

export default Profile;
