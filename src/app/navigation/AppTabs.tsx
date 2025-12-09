import React from 'react';
import HomePage from '../../pages/HomeTab/HomeTab';
import { ProfilePage } from '../../pages/ProfileTab/ProfilePage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabs from '../../widgets/BottomTabs/BottomTabs';
import HomeHeader from '../../widgets/HomeHeader/HomeHeader';
import SearchTab from '../../pages/SearchTab/SearchTab';
import AddTab from '../../pages/AddTab/AddTab';
import ReelsTab from '../../pages/ReelsTab/ReelsTab';

const Tab = createBottomTabNavigator();

const AppTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        
      }}
      tabBar={props => <BottomTabs {...props} />}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          headerShown: true,
          header: () => <HomeHeader />,
          
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchTab}
        options={{
          headerShown: true,
          header: () => <HomeHeader />,
        }}
      />
      <Tab.Screen
        name="Send"
        component={AddTab}
        options={{
          headerShown: true,
          header: () => <HomeHeader />,
        }}
      />
      <Tab.Screen
        name="Reels"
        component={ReelsTab}
        options={{
          headerShown: true,
          header: () => <HomeHeader />,
        }}
      />

      <Tab.Screen name="Profile" component={ProfilePage} />
    </Tab.Navigator>
  );
};

export default AppTabs;
