import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BottomTabs from './BottomBar/BottomBar';
import HomePage from '@/screens/FeedScreen/Home';
import SearchTab from '@/screens/SearchScreen/Search';
import AddTab from '@/screens/AddTabScreen/AddTab';
import ReelsTab from '@/screens/ReelsScreen/Reels';
import ProfilePage from '@/screens/ProfileScreen/Profile';

const Tab = createBottomTabNavigator();

const AppTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <BottomTabs {...props} />}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Search" component={SearchTab} />
      <Tab.Screen name="Send" component={AddTab} />
      <Tab.Screen name="Reels" component={ReelsTab} />
      <Tab.Screen name="Profile" component={ProfilePage} />
      
    </Tab.Navigator>
  );
};

export default AppTabs;
