import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home, Login, Restaurant, Cart } from './src/screens';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRoute={'Home'}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Restaurant' component={Restaurant}/>
        <Stack.Screen name='Cart' component={Cart}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;
