import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import {Icon} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ItemList = ({label, type, name, active, navigation}) => {
  if (active) {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#8a56ac',
          borderRadius: 30,
          paddingVertical: 10,
          paddingHorizontal: 15,
          marginTop: 20,
          alignSelf: 'flex-start',
        }}>
        <Icon type={type} name={name} style={{color: 'white'}} />
        <Text
          onPress={() => navigation.closeDrawer()}
          style={{
            color: 'white',
            paddingLeft: 15,
            fontSize: 19,
          }}>
          {label === 'Create Company Profile'
            ? `Create Company ${'\n'} Profile`
            : label}
        </Text>
      </View>
    );
  } else
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingTop: 20,
          paddingLeft: 10,
        }}>
        <Icon type={type} name={name} style={{color: '#b8b3bd'}} />
        <Text
          onPress={() => navigation.closeDrawer()}
          style={{
            color: label == 'Sign Out' ? '#9a91a0' : '#53465e',
            paddingLeft: 15,
            fontSize: 19,
          }}>
          {label === 'Create Company Profile'
            ? `Create Company ${'\n'} Profile`
            : label}
        </Text>
      </View>
    );
};

function Drawer({navigation}) {
  return (
    <View style={styles.container}>
      <View style={{flex: 0.4, backgroundColor: 'transparent'}}>
        <ImageBackground
          imageStyle={{borderBottomLeftRadius: 90}}
          source={{
            uri: 'https://miro.medium.com/max/6494/0*mi1X66cRuXRVLfKT',
          }}
          style={styles.header}>
          <View>
            <Image
              style={{height: 70, width: 70, borderRadius: 35}}
              source={{
                uri:
                  'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
              }}
            />
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 30,
                color: 'white',
                paddingTop: 10,
              }}>
              Chiara De Luca
            </Text>
            <Text style={{color: '#7f7685'}}>@Chiaradeluca15</Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.subContainer}>
        <View style={{flex: 1}}>
          <View style={styles.main}>
            <ItemList
              label="Create Company Profile"
              type="AntDesign"
              name="home"
              active={false}
              navigation={navigation}
            />
            <ItemList
              label="Share"
              type="Feather"
              name="users"
              active={false}
              navigation={navigation}
            />
            <ItemList
              label="My coupons"
              type="MaterialCommunityIcons"
              name="calendar-blank-outline"
              active={true}
              navigation={navigation}
            />
            <ItemList
              label="Contact"
              type="Feather"
              name="user"
              active={false}
              navigation={navigation}
            />
            <ItemList
              label="About us"
              type="AntDesign"
              name="exclamationcircleo"
              active={false}
              navigation={navigation}
            />
          </View>
          <View style={styles.footer}>
            <ItemList
              label="Sign Out"
              type="Ionicons"
              name="ios-log-out"
              active={false}
              navigation={navigation}
            />

            <Text
              style={{
                color: '#9a91a0',
                fontSize: 12,
                paddingTop: 10,
                paddingLeft: 10,
              }}>
              Delete Profile
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopRightRadius: 100,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 35,
  },
  subContainer: {
    flex: 1,
  },
  main: {
    flex: 1,
    paddingLeft: 30,
  },
  footer: {
    flex: 0.2,
    paddingLeft: 30,
  },
});

export default Drawer;
