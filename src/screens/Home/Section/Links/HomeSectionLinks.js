import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Card, CardItem, Text } from 'native-base';
import { Image } from 'react-native';
import LineDivider from '~/styled/LineDivider';
import ArrowIcon from '~/styled/ArrowIcon';
import { homeSectionLinksType } from '~/types';
import styles from './HomeSectionLinks.style';

const HomeSectionLinks = ({ settings }) => {
  const { items } = settings;
  const navigation = useNavigation();

  const handleLinkPress = (link) => {
    const { screen, id } = link;
    navigation.push(screen, { id });
  };

  return (
    <Card style={styles.container}>
      {items.map(({ title, image, link }, idx, list) => (
        <React.Fragment key={title}>
          <CardItem button onPress={() => handleLinkPress(link)}>
            <Image
              style={styles.image}
              source={{ uri: image, width: 50, height: 50 }}
            />
            <Text style={styles.title} testID="linkTitle">
              {title}
            </Text>
            <ArrowIcon />
          </CardItem>
          {idx < list.length - 1 && <LineDivider />}
        </React.Fragment>
      ))}
    </Card>
  );
};

HomeSectionLinks.propTypes = {
  settings: homeSectionLinksType.isRequired,
};

export default HomeSectionLinks;
