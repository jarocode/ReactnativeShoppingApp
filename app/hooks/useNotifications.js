import {useEffect} from 'react';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';

import expoPushTokensApi from '../api/expoPushTokens';



export default useNotifications = (notificationListener) => {
    useEffect(() => {
        registerForPushNotifications();
        notificationListener && Notifications.addNotificationReceivedListener(notificationListener);
     }, []);
     
     const registerForPushNotifications = async () => {
        try {
             const permission = await  Permissions.askAsync(Permissions.NOTIFICATIONS);
             if(!permission.granted) return;
     
             const token  = await Notifications.getExpoPushTokenAsync();
             expoPushTokensApi.register(token.data);
             console.log(token);
             // if (Platform.OS === 'android') {
             //     Notifications.setNotificationChannelAsync('default', {
             //       name: 'default',
             //       importance: Notifications.AndroidImportance.MAX,
             //       vibrationPattern: [0, 250, 250, 250],
             //       lightColor: '#FF231F7C',
             //     });
             //   }
        } catch (error) {
            console.log('Error getting a push token', error);
        }
     }
 
}