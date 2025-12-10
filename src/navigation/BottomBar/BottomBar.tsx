import React from 'react';
import { View, Pressable } from 'react-native';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

import { style } from './BottomBar.styles';
import { getTabIcon } from '@/widgets/navigation/lib/getTabIcon';

const BottomTabs = ({ state, navigation, insets }: BottomTabBarProps) => {
  const ava =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq8pjPH7WaXwjiVOIv3qrkyCwDxkxSAUrmQA&s';

  return (
    <View style={[{ paddingBottom: insets.bottom }, style.container]}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        return (
          <Pressable
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={{ opacity: isFocused ? 1 : 0.65 }}
          >
            {getTabIcon(route.name, ava)}
          </Pressable>
        );
      })}
    </View>
  );
};

export default BottomTabs;
