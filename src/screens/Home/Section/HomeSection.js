import React from 'react';
import PropTypes from 'prop-types';
import HomeSectionBanner from './Banner';
import HomeSectionCarousel from './Carousel';
import HomeSectionProduct from './Products';
import HomeSectionUsp from './Usp';
import HomeSectionLinks from './Links';
import HomeSectionCategory from '~/constants/HomeSectionCategory';
import {
  homeSectionCategoryType,
  homeSectionCarouselType,
  homeSectionBannerType,
  homeSectionProductsType,
  homeSectionUspType,
  homeSectionLinksType,
} from '~/types';

const HomeSection = ({ sectionCategory, settings }) => {
  switch (sectionCategory) {
    case HomeSectionCategory.CAROUSEL: {
      return <HomeSectionCarousel settings={settings} />;
    }
    case HomeSectionCategory.BANNER: {
      return <HomeSectionBanner settings={settings} />;
    }
    case HomeSectionCategory.PRODUCTS: {
      return <HomeSectionProduct settings={settings} />;
    }
    case HomeSectionCategory.USP: {
      return <HomeSectionUsp settings={settings} />;
    }
    case HomeSectionCategory.LINKS: {
      return <HomeSectionLinks settings={settings} />;
    }
    default: {
      return null;
    }
  }
};

HomeSection.propTypes = {
  sectionCategory: homeSectionCategoryType.isRequired,
  settings: PropTypes.oneOfType([
    homeSectionCarouselType,
    homeSectionBannerType,
    homeSectionProductsType,
    homeSectionUspType,
    homeSectionLinksType,
  ]),
};

export default HomeSection;
