/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { StackNavigator } from "react-navigation";
import HomeScreen from "./src/home/Home";

const AppNavigation = StackNavigator({
  Home: { screen: HomeScreen }
});

export default class App extends Component {
  render() {
    return <AppNavigation />;
  }
}
