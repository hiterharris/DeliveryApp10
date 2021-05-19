import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home, Login, Product, Cart, SignUp } from './src/screens';

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRoute={'Login'}>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='Product' component={Product}/>
          <Stack.Screen name='Cart' component={Cart}/>
          <Stack.Screen name='SignUp' component={SignUp}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
