import React, { useState, useContext } from 'react';
import { StyleSheet, Image } from 'react-native';
import * as Yup from 'yup';

import authApi from '../api/auth';
import Screen from '../components/Screen';
import {ErrorMessage, AppFormField, AppForm, SubmitButton} from '../components/forms';
import useAuth from '../auth/useAuth';


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).matches()
});

const LoginScreen = () => {
    const[loginFailed, setLoginFailed] = useState(false);
    const {logIn} = useAuth();

    const handleSubmit =  async ({email, password}) => {
        try {
            const result = await authApi.login(email, password);
            if(!result.ok) return setLoginFailed(true);
            setLoginFailed(false);
            logIn(result.data)
        
        } catch (error) {
            console.log(error);
        }
    }
    
    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/appLogo.png')}
            />
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >
                <ErrorMessage error="Invalid email and/or password." visible={loginFailed}/>
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="email"
                    placeholder="Email"
                    name="email"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    />
                            
                <AppFormField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                    name="password"
                /> 
                 <SubmitButton title="login"/>
            </AppForm>

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
