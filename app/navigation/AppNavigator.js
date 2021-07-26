import React, {useEffect} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

import expoPushTokensApi from '../api/expoPushTokens';
import ListEditScreen from '../screens/ListEditScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {

    useEffect(() => {
       registerForPushNotifications();
    })
    
    const registerForPushNotifications = async () => {
       try {
            const permission = await  Permissions.askAsync(Permissions.NOTIFICATIONS);
            if(!permission.granted) return;
    
            const token  = await Notifications.getExpoPushTokenAsync();
            expoPushTokensApi.register(token.data);
            console.log(token);
       } catch (error) {
           console.log('Error getting a push token', error);
       }
    }
    
    return (
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
)
};

export default AppNavigator;