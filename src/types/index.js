import PropTypes from 'prop-types';
import HomeSectionCategory from '~/constants/HomeSectionCategory';
import screens from '~/constants/screens';

export const productType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});

export const childrenType = PropTypes.oneOfType([
  PropTypes.arrayOf(PropTypes.node),
  PropTypes.node,
]);

export const uspItemType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
});

export const cartProductItemType = PropTypes.shape({
  qty: PropTypes.number.isRequired,
  product: productType.isRequired,
});

export const collectionType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
});

export const linkType = PropTypes.shape({
  screen: PropTypes.oneOf(Object.values(screens)),
  id: PropTypes.string.isRequired,
});

export const homeSectionCategoryType = PropTypes.oneOf(
  Object.values(HomeSectionCategory)
);

export const homeSectionCarouselItemType = PropTypes.shape({
  image: PropTypes.string.isRequired,
  link: linkType.isRequired,
});

export const homeSectionCarouselType = PropTypes.shape({
  items: PropTypes.arrayOf(homeSectionCarouselItemType),
  aspectRatio: PropTypes.number.isRequired,
});

export const homeSectionBannerType = PropTypes.shape({
  image: PropTypes.string.isRequired,
  link: linkType.isRequired,
  aspectRatio: PropTypes.number.isRequired,
});

export const homeSectionProductsType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(productType),
});

export const homeSectionUspType = PropTypes.shape({
  items: PropTypes.arrayOf(uspItemType),
});

export const homeSectionLinksType = PropTypes.shape({
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      link: linkType.isRequired,
    })
  ),
});

export const homeSectionType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  category: homeSectionCategoryType.isRequired,
  settings: PropTypes.oneOfType([
    homeSectionCarouselType,
    homeSectionBannerType,
    homeSectionProductsType,
    homeSectionUspType,
    homeSectionLinksType,
  ]),
});

export const wishlistType = PropTypes.arrayOf(PropTypes.string).isRequired;

export const orderType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  created: PropTypes.number.isRequired,
  total: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
});

export const notificationType = PropTypes.shape({
  message: PropTypes.string.isRequired,
  isError: PropTypes.bool.isRequired,
});

export const menuItem = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subitems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
});
