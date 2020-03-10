import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';

import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Icon,
} from 'native-base';
let width = Dimensions.get('window').width;
import CouponItem from '../../components/couponItem';

function Coupons({navigation}) {
  return (
    <View style={styles.container}>
      <View
        style={{
          height: '50%',
          backgroundColor: '#8a56ac',
          borderBottomLeftRadius: 80,
        }}>
        <View style={{flex: 1}}>
          <View style={styles.headerContainer}>
            <View
              style={{
                flex: 0.2,
                padding: '6%',
                justifyContent: 'space-between',
                flexDirection: 'row',
              }}>
              <Icon
                type="MaterialIcons"
                name="arrow-back"
                style={{color: 'gray'}}
              />
              <Icon
                type="Ionicons"
                name="ios-search"
                style={{color: 'gray'}}
                onPress={() => {
                  navigation.navigate('Contact');
                }}
              />
            </View>
            <View
              style={{
                flex: 1,
                alignItems: 'flex-start',
                justifyContent: 'flex-end',
                paddingLeft: '20%',
                paddingBottom: '30%',
              }}>
              <Text style={{fontSize: 30, color: 'black', fontWeight: '700'}}>
                Coupons
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 0.7,
              borderLeftWidth: 1,
              borderLeftColor: '#754a92',
              borderBottomColor: '#754a92',
              borderBottomWidth: 1,
              borderBottomLeftRadius: 80,
            }}>
            <CouponItem
              isNotification={true}
              numberOfNotifications={4}
              image="https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              title="Coca-Cola"
              text=" Discount 80%"
              time="9 hrs"
            />
          </View>
          <View
            style={{
              flex: 0.7,
              borderLeftWidth: 1,
              borderLeftColor: '#754a92',
              borderBottomColor: '#754a92',
              borderBottomWidth: 1,
              borderBottomLeftRadius: 80,
            }}>
            <CouponItem
              isNotification={true}
              numberOfNotifications={7}
              image="https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              title="Volkswagen"
              text=" Discount 25%"
              time="9 hrs"
            />
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            height: 150,
            borderLeftWidth: 1,
            borderLeftColor: '#2a1a37',
            borderBottomColor: '#2a1a37',
            borderBottomWidth: 1,
            borderBottomLeftRadius: 80,
          }}>
          <CouponItem
            isNotification={false}
            numberOfNotifications={0}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQY5xLrTvUKamJ44nhZikxNFh6YS_xnupbWCAkywyZfLhw7szwc"
            title="Stephane Moreau"
            text="Check out this Meetup with"
            time="Aug 19"
          />
        </View>
        <View
          style={{
            height: 150,
            borderLeftWidth: 1,
            borderLeftColor: '#2a1a37',
            borderBottomColor: '#2a1a37',
            borderBottomWidth: 1,
            borderBottomLeftRadius: 80,
          }}>
          <CouponItem
            isNotification={false}
            numberOfNotifications={0}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLnAcINDrOook2hSq2HY0-CPwRDLbcqGcuDtolBs8SRHpgdi6e"
            title="Andi Lane"
            text="Welcome to out Kizomba"
            time="Jun 21"
          />
        </View>
        <View
          style={{
            height: 150,
            borderLeftWidth: 1,
            borderLeftColor: '#2a1a37',
            borderBottomColor: '#2a1a37',
            borderBottomWidth: 1,
            borderBottomLeftRadius: 80,
          }}>
          <CouponItem
            isNotification={false}
            numberOfNotifications={0}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSN8nKNtyY5yedQpzDCVwBFsomMW6EtMzzyPz49-cyhnLF8fUKh"
            title="Anson Buck"
            text="Hi Stephane"
            time="Feb 13"
          />
        </View>
        <View
          style={{
            height: 150,
            borderLeftWidth: 1,
            borderLeftColor: '#2a1a37',
            borderBottomColor: '#2a1a37',
            borderBottomWidth: 1,
            borderBottomLeftRadius: 80,
          }}>
          <CouponItem
            isNotification={false}
            numberOfNotifications={0}
            image="https://i.pinimg.com/originals/e2/a8/fe/e2a8fe98678715243ca4b69166d2ace3.jpg"
            title="Dina Meyer"
            text="Bonjour"
            time="Sep 18, 2017"
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#250033',
  },
  headerContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderBottomLeftRadius: 100,
  },
  subContainer: {
    height: '80%',
  },
});

export default Coupons;
