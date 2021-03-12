import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home, Login, Products, Cart } from './src/screens';
import { Provider } from 'react-redux';
import configureStore from './src/state/store';

const store = configureStore();
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRoute={'Home'}>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Products' component={Products}/>
          <Stack.Screen name='Cart' component={Cart}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>

  );
};

export default App;
