import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';


import ListEditScreen from '../screens/ListEditScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen 
            name="Feed" 
            component={FeedNavigator}
            options={{
                tabBarIcon: ({color, size}) => 
                    <MaterialCommunityIcons 
                    name="home" 
                    color={color}
                    size={size}/>
            }}/>
        <Tab.Screen 
            name="ListingsEdit" 
            component={ListEditScreen}
            options={({navigation}) => ({
                tabBarButton: () => 
                <NewListingButton
                    onPress={() => navigation.navigate('ListingsEdit')}
                />,
                // tabBarIcon: ({color, size}) => 
                //     <MaterialCommunityIcons 
                //         name="plus-circle" 
                //         color={color}
                //         size={size}
                //     />
            })}/>
        <Tab.Screen 
            name="Account" 
            component={AccountNavigator}
            options={{
                tabBarIcon: ({color, size}) => 
                    <MaterialCommunityIcons 
                        name="account" 
                        color={color}
                        size={size}
                    />
            }}/>
    </Tab.Navigator>
);

export default AppNavigator;