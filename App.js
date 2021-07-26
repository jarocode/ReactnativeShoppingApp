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
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import AppLoading from 'expo-app-loading';


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
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';
import AccountNavigator from './app/navigation/AccountNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage';

const Tweets = ({navigation}) => (
  <Screen>
    <Text>Tweets</Text>
    <Button title="View Tweet" onPress={() => navigation.navigate("TweetDetails", {id: 1})}/>
  </Screen>
)

const TweetDetails = ({route}) => (
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
)

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
)

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator 
    screenOptions={{
      headerStyle: {backgroundColor: 'dodgerBlue'},
      headerTintColor: "white"
    }}
  >
    <Stack.Screen 
      name="Tweets" 
      component={Tweets}
      options={{
        headerStyle: {backgroundColor: 'tomato'},
        headerTintColor: "white"
      }}/>
    <Stack.Screen 
      name="TweetDetails" 
      component={TweetDetails}
      options={({route}) => ({title: route.params.id})}
    />
  </Stack.Navigator>
)

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "tomato",
      activeTintColor: "white",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "black"
    }}
  >
      <Tab.Screen 
        name="Feed" 
        component={StackNavigator}
        options={{
          tabBarIcon: ({size, color}) => 
          <MaterialCommunityIcons 
            name="home" 
            size={size} 
            color={color}
          />
        }}
        />
      <Tab.Screen name="Account" component={Account}/>
  </Tab.Navigator>
);

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState();

  if(!isReady) 
    return <AppLoading 
            startAsync={restoreUser} 
            onFinish={() => setIsReady(true)} 
            onError={console.warn}
          />

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if(user) setUser(user);
  }

  
  return (
    <AuthContext.Provider value={{user, setUser}}>
      <OfflineNotice/>
      <NavigationContainer theme={navigationTheme}>
        {user? <AppNavigator/> : <AuthNavigator/>}
      </NavigationContainer>
    </AuthContext.Provider>
    
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
