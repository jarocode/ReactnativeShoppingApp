import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import AccountScreen from '../screens/AccountScreen';
import ListEditScreen from '../screens/ListEditScreen';
import ListingsScreen from '../screens/ListingsScreen';
import FeedNavigator from './FeedNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name="Feed" component={FeedNavigator}/>
        <Tab.Screen name="ListingsEdit" component={ListEditScreen}/>
        <Tab.Screen name="Account" component={AccountScreen}/>
    </Tab.Navigator>
);

export default AppNavigator;