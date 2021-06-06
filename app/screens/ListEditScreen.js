import React from 'react';
import { StyleSheet, Image } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import {AppFormField, AppForm, SubmitButton} from '../components/forms';

const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).matches()
});

const ListEditScreen = () => {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{ email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
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
    )
}

export default ListEditScreen;
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
