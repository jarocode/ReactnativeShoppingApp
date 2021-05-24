import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';

import  Screen from '../components/Screen';

const LoginScreen = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    return (
        <Screen style={styles.container}>
            <Image 
                style={styles.logo}
                source={require('../assets/logo-red.png')}
            />
            <AppTextInput
                autoCapitalize="none"
                autoCorrect= {false}
                icon="email"
                placeholder="Email"
                keyboardType="email-address"
                textContentType="emailAddress"
                onChange={text => setEmail(text)}
            />
            <AppTextInput
                autoCapitalize="none"
                autoCorrect= {false}
                icon="lock"
                placeholder="Password"
                secureTextEntry
                textContentType="password"
                onChange={text => setPassword(text)}
            />
            <AppButton
                title="login"
                onPress= {() => console.log(email, password)}
            />
        </Screen>
    )
}

export default LoginScreen;
const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20
    }
})
