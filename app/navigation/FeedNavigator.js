import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AppNavigator from './AppNavigator'
import ListingsScreen from '../screens/ListingsScreen';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import ChatScreen from '../screens/ChatScreen';
import ListItem from '../components/ListItem';


const Stack = createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator 
        mode="modal"
        // screenOptions={{
        //     headerShown: false
        // }}
    >
        <Stack.Screen 
            name="Listings" 
            component={ListingsScreen}
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen 
            name="ListingDetails" 
            component={ListingDetailsScreen}
            options={{
                headerShown: false
            }}
        />
        <Stack.Screen 
            name="ChatScreen" 
            component={ChatScreen}
            options={{
                headerShown: true,
                headerTitle: props => (
                    <ListItem 
                        image={require('../assets/mosh.jpg')}
                        title="uchman jaroslaw"
                        subTitle="active now"
                    />
                ),
                headerStyle: {
                    height: 130
                }
            }}
        />
    </Stack.Navigator>
);

export default FeedNavigator;
   
