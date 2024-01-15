import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {COLORS} from '../../constants';

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({images}) => {
  const slides = images || [];

  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        inactiveDotColor={COLORS.primary}
        ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 80}}
        autoplay
        circleLoop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default Carousel;
