import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import {Icon} from 'native-base';

import NotificationItem from '../../components/notificationItem';

function Notifications({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.pinkContainer}>
          <View style={styles.whiteContainer}>
            <View style={styles.navigationBar}>
              <Icon
                type="MaterialIcons"
                name="arrow-back"
                style={styles.icon}
              />
              <Icon
                type="Ionicons"
                name="ios-search"
                style={styles.icon}
                onPress={() => {
                  navigation.navigate('Contact');
                }}
              />
            </View>
            <View style={styles.headingContainer}>
              <Text style={styles.heading}>Notifications</Text>
            </View>
          </View>

          <View style={styles.topTwoNotification}>
            <View style={[styles.eachNotification, styles.pinkNotification]}>
              <NotificationItem
                isNotification={false}
                numberOfNotifications={0}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQY5xLrTvUKamJ44nhZikxNFh6YS_xnupbWCAkywyZfLhw7szwc"
                title="Stephane Moreau"
                text="Do not forger rate - January Tera Digital LLC"
                time="9 hrs"
              />
            </View>
            <View style={[styles.eachNotification, styles.pinkNotification]}>
              <NotificationItem
                isNotification={false}
                numberOfNotifications={0}
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSN8nKNtyY5yedQpzDCVwBFsomMW6EtMzzyPz49-cyhnLF8fUKh"
                title="Stephane Moreau"
                text="Check out this Meetup with"
                time="Aug 19"
              />
            </View>
          </View>
        </View>

        <View style={styles.thirdNotification}>
          <View style={styles.eachNotification}>
            <NotificationItem
              isNotification={false}
              numberOfNotifications={0}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLnAcINDrOook2hSq2HY0-CPwRDLbcqGcuDtolBs8SRHpgdi6e"
              title="Stephane Moreau"
              text="Check out this Meetup with"
              time="Aug 19"
            />
          </View>
        </View>
      </View>

      {/* Scrollable notifications */}
      <ScrollView style={styles.notificationContainer}>
        <View style={styles.eachNotification}>
          <NotificationItem
            isNotification={false}
            numberOfNotifications={0}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQY5xLrTvUKamJ44nhZikxNFh6YS_xnupbWCAkywyZfLhw7szwc"
            title="Stephane Moreau"
            text="Check out this Meetup with"
            time="Aug 19"
          />
        </View>
        <View style={styles.eachNotification}>
          <NotificationItem
            isNotification={false}
            numberOfNotifications={0}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTLnAcINDrOook2hSq2HY0-CPwRDLbcqGcuDtolBs8SRHpgdi6e"
            title="Andi Lane"
            text="Welcome to out Kizomba"
            time="Jun 21"
          />
        </View>
        <View style={styles.eachNotification}>
          <NotificationItem
            isNotification={false}
            numberOfNotifications={0}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSN8nKNtyY5yedQpzDCVwBFsomMW6EtMzzyPz49-cyhnLF8fUKh"
            title="Anson Buck"
            text="Hi Stephane"
            time="Feb 13"
          />
        </View>
        <View style={styles.eachNotification}>
          <NotificationItem
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
  topContainer: {
    // flex: 1,
    backgroundColor: '#8a56ac',
    borderBottomLeftRadius: 100,
  },
  whiteContainer: {
    // flex: 1,
    backgroundColor: 'white',
    borderBottomLeftRadius: 100,
    paddingBottom: '6%',
  },
  navigationBar: {
    paddingLeft: '6%',
    paddingRight: '6%',
    paddingTop: '6%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  icon: {
    color: 'gray',
  },
  headingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 30,
    color: 'black',
    fontWeight: '700',
  },
  pinkContainer: {
    // flex: 1,
    backgroundColor: '#d47fa6',
    borderBottomLeftRadius: 100,
  },
  topTwoNotification: {
    // flex: 1,
    borderBottomLeftRadius: 100,
    backgroundColor: '#d47fa6',
  },
  thirdNotification: {
    // flex: 1,
    borderBottomLeftRadius: 100,
  },
  notificationContainer: {
    // flex: 1,
  },
  eachNotification: {
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderLeftColor: '#2a1a37',
    borderBottomColor: '#2a1a37',
    borderBottomLeftRadius: 100,
  },
  pinkNotification: {
    borderLeftColor: '#aaa',
    borderBottomColor: '#aaa',
    paddingRight: 10,
  },
});

export default Notifications;
