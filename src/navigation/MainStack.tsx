import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppTabs from './AppTabs';
import HomeHeader from './headers/HomeHeader/HomeHeader';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import StoriesViewer from '@/features/stories/ui/StoriesContent/StoriesViewer';


const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      
      <Stack.Screen
        name="Tabs"
        component={AppTabs}
        options={({ route }) => ({
          header: props => {
            const tab = getFocusedRouteNameFromRoute(route) ?? 'Home';
            if (tab === 'Home') {
              return <HomeHeader {...props} />;
            }
            // if (tab === 'Search') {
            //   return <SearchHeader {...props} />;
            // }
            return null;
          },
        })}
      />
      <Stack.Screen
        name="StoryContent"
        component={StoriesViewer} 
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
