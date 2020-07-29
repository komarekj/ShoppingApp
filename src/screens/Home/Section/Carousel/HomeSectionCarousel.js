import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Banner from '~/components/Banner';
import { homeSectionCarouselType } from '~/types';
import styles from './HomeSectionCarousel.styles';

const HomeSectionCarousel = ({ settings }) => {
  const { items, aspectRatio } = settings;
  const [carouselWidth, setCaruselWidth] = useState(1);
  const [activeSlide, setActiveSlide] = useState(0);
  const carouselHeight = carouselWidth / aspectRatio;

  const navigation = useNavigation();

  const onSlideChange = (index) => {
    setActiveSlide(index);
  };

  const measureCarusel = (event) => {
    const { width } = event.nativeEvent.layout;
    setCaruselWidth(width);
  };

  const handleLinkPress = (link) => {
    const { screen, id } = link;
    navigation.push(screen, { id });
  };

  return (
    <View onLayout={measureCarusel} style={styles.wrap}>
      <Carousel
        data={items}
        renderItem={({ item }) => (
          <Banner
            image={item.image}
            aspectRatio={aspectRatio}
            pressEffect={false}
            onPress={() => handleLinkPress(item.link)}
          />
        )}
        sliderWidth={carouselWidth}
        sliderHeight={carouselHeight}
        itemWidth={carouselWidth}
        onSnapToItem={onSlideChange}
      />
      <Pagination
        dotsLength={items.length}
        activeDotIndex={activeSlide}
        containerStyle={styles.pagination}
      />
    </View>
  );
};

HomeSectionCarousel.propTypes = {
  settings: homeSectionCarouselType.isRequired,
};

export default HomeSectionCarousel;
