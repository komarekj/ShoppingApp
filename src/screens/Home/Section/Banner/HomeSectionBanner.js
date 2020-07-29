import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Banner from '~/components/Banner';
import { homeSectionBannerType } from '~/types';

const HomeSectionBanner = ({ settings }) => {
  const { image, link, aspectRatio } = settings;
  const navigation = useNavigation();

  const handleBannerPress = () => {
    const { screen, id } = link;
    navigation.push(screen, { id });
  };

  return (
    <Banner
      image={image}
      onPress={handleBannerPress}
      aspectRatio={aspectRatio}
    />
  );
};

HomeSectionBanner.propTypes = {
  settings: homeSectionBannerType.isRequired,
};

export default HomeSectionBanner;
