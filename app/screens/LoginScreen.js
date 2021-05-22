import React from 'react';
import { StyleSheet, Image } from 'react-native';

import  Screen from '../components/Screen';

const LoginScreen = () => {
    return (
        <Screen>
            <Image source={require('../assets/logo-red.png')}/>
        </Screen>
    )
}

export default LoginScreen;
const styles = StyleSheet.create({
    
})
