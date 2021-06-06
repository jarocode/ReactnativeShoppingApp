import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  // Button,
  StatusBar,  
  Alert,
  Platform,
  TextInput
} from 'react-native';


import {useDimensions, useDeviceOrientation} from '@react-native-community/hooks'
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import Button from './app/components/AppButton';
import Card from './app/components/Card';
import ProductImg from './app/assets/jacket.jpg';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListEditScreen from './app/screens/ListEditScreen';

export default function App() {
 
  return (
    
    <ListEditScreen/>
      

      
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
    // width: "50%",
    // height: landscape? "100%" : "30%",
    // paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
