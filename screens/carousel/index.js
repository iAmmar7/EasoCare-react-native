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
import Carousel, {Pagination} from 'react-native-snap-carousel';
import CarouselItem from '../../components/carouselItem';
let width = Dimensions.get('window').width;

function CarouselItems() {
  let [indexi, setIndex] = useState(0);
  const _renderItem = ({item, index}) => {
    return <CarouselItem />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Icon type="Ionicons" name="md-arrow-back" style={{color: 'gray'}} />
        <Icon
          type="MaterialCommunityIcons"
          name="filter-variant"
          style={{color: 'gray'}}
        />
      </View>
      <Carousel
        data={[
          {text: 'hello g'},
          {text: 'hello g'},
          {text: 'hello g'},
          {text: 'hello g'},
        ]}
        onSnapToItem={index => setIndex(index)}
        renderItem={_renderItem}
        sliderWidth={width}
        itemWidth={width - 20}
      />

      <Pagination
        dotsLength={4}
        activeDotIndex={indexi}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,

          backgroundColor: '#8a56ac',
        }}
        inactiveDotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: '#d3d3d3',
        }}
        inactiveDotOpacity={0.8}
        inactiveDotScale={0.9}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f0f2',
  },
  headerContainer: {
    height: 60,

    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
    paddingTop: 30,
  },
  listItem: {
    height: '70%',
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});

export default CarouselItems;
