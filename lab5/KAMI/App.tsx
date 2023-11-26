/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Login';
import MainNavigation from './src/MainNavigation';

const Stack = createNativeStackNavigator();

const App = () => {
    return (
      <Login/>
    );
};

export default App;
