import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainStack from './MainStack';
import AuthPage from '@/screens/AuthScreen/Auth';
import RegisterPage from '@/screens/RegisterScreen/Register';

const Stack = createNativeStackNavigator();

export const RootStack = () => {
  const isAuth = true; 

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isAuth ? (
        <>
          <Stack.Screen name="Auth" component={AuthPage} />
          <Stack.Screen name="Register" component={RegisterPage} />
        </>
      ) : (
        <Stack.Screen name="MainStack" component={MainStack} />
      )}
    </Stack.Navigator>
  );
};
