import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { createStackNavigator } from "react-navigation";
import Form from "./src/container/Form";
import Home from "./src/container/Home";
import Room from "./src/container/Room";

import axios from "axios";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

const App = createStackNavigator({
  HomeScreen: {
    screen: Home
  },
  RoomScreen: {
    screen: Room
  },
  FormScreen: {
    screen: Form
  }
});

export default App;
