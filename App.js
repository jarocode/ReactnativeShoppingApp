import React, {useState, useEffect} from 'react';
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
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';


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
import ImageInput from './app/components/ImageInput';
import ImageInputList from './app/components/ImageInputList';

export default function App() {
  // const [imageUris, setImageUris] = useState([0]);
  const [imageUris, setImageUris] = useState([]);

 

  // useEffect(() => {
  //   console.log(imageUris);
  // },[imageUris]);

  // const onAddImage = async (uri) => {
    
  //   try {
  //     const result =  await ImagePicker.launchImageLibraryAsync({
  //       mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //       quality: 0.5
  //     });
  //     if (!result.cancelled) setImageUris(prev => {
  //       if(prev[0] === 0){
  //         return [result.uri];
  //       }else{
  //         return [...prev, result.uri];
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
   
  // }

 const handleAdd = (uri) => {
   setImageUris([...imageUris, uri]);
 }

 const handleRemove = (uri) => {
  setImageUris(imageUris.filter(imageUri => imageUri !== uri));
 }
  
  return (
    <Screen>
        {/* <Button title="select image" onPress={selectImage}/>
        <Image source= {{uri: imageUri}} width={200} height={200}/> */}
        {/* <ImageInput imageUri={imageUri} onChangeImage={(uri) => setImageUri(uri)}/> */}
        <ImageInputList imageUris= {imageUris} onAddImage={handleAdd} onRemoveImage={handleRemove}/>
    </Screen>
    
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
