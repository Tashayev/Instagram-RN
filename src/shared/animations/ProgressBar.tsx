import { View, Animated, StyleSheet } from 'react-native';
import { useEffect, useRef } from 'react';

export const StoriesProgressBar = ({
  count,
  currentIndex,
  duration,
  isPaused,
}: {
  count: number;
  currentIndex: number;
  duration: number;
  isPaused: boolean;
}) => {
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    progress.setValue(0);

    if (isPaused) {
      progress.stopAnimation();
      return;
    }

    Animated.timing(progress, {
      toValue: 1,
      duration,
      useNativeDriver: false,
    }).start();
  }, [currentIndex, isPaused, duration]);

  return (
    <View style={styles.container}>
      {Array.from({ length: count }).map((_, index) => {
        const isCompleted = index < currentIndex;
        const isActive = index === currentIndex;

        return (
          <View key={index} style={styles.segment}>
            {isCompleted && <View style={styles.fillFull} />}

            {isActive && (
              <Animated.View
                style={[
                  styles.fillAnimated,
                  {
                    width: progress.interpolate({
                      inputRange: [0, 1],
                      outputRange: ['0%', '100%'],
                    }),
                  },
                ]}
              />
            )}
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  segment: {
    flex: 1,
    height: 3,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginHorizontal: 2,
    overflow: 'hidden',
  },
  fillFull: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  fillAnimated: {
    height: '100%',
    backgroundColor: '#fff',
  },
});
