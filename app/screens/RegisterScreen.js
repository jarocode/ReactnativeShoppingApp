import React, { useState } from 'react'
import { StyleSheet, Image } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import userApi from '../api/users';
import authApi from '../api/auth';
import {AppFormField, AppForm, SubmitButton, ErrorMessage} from '../components/forms';
import useAuth from '../auth/useAuth';
import useApi from '../hooks/useApi';
import ActivityIndicator from '../components/ActivityIndicator';

const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).matches()
});

const RegisterScreen = () => {
    const  registerApi =  useApi(userApi.register);
    const loginApi = useApi(authApi.login);
    const auth = useAuth();
    const [error, setError] = useState();
    const handleSubmit = async (userInfo) => {
        try {
            const result = await registerApi.request(userInfo);

            if(!result.ok){
                console.log(result.ok);
                if(result.data) setError(result.data.error);
                else {
                    setError('An unexpected error occurred.');
                    console.log(result);
                }

                return;
            }
            const {data: authToken} = await loginApi.request(
                userInfo.email,
                userInfo.password
            );
            auth.logIn(authToken)
            } catch (error) {
                console.log(error);
            }
    }
    return (
        <>
            <ActivityIndicator visible={registerApi.loading || loginApi.loading}/>
            <Screen style={styles.container}>
            
                <AppForm
                    initialValues={{ name: "" , email: '', password: '' }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema}
                >
                    <ErrorMessage error={error} visible={true}/>
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="profile"
                        placeholder="Name"
                        name="name"
                        textContentType="text"
                        />
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
                    <SubmitButton title="Register"/>
                </AppForm>
            
            </Screen>
        </>
    )
}

export default RegisterScreen;
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
