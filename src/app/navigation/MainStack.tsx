import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppTabs from './AppTabs';


const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="Tabs"
        component={AppTabs}
        options={{ headerShown: false }} // хедер для табов делаем в AppTabs через Stack
      />
      {/* <Stack.Screen
        name="ModalScreen"
        
        options={{ presentation: 'modal' }}
      /> */}
    </Stack.Navigator>
  );
};

export default MainStack;
