import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text} from 'react-native';
import BackgroundImg from '../assets/background.jpg';
import Logo from '../assets/logo-red.png';
import AppButton from '../components/AppButton';

function WelcomeScreen({navigation}) {
    return (
        <ImageBackground 
        source={BackgroundImg} 
        style={styles.background}
        blurRadius={10}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={Logo}/>
                <Text style={styles.tagLine}>Sell what you don't need</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title="login" onPress={() => navigation.navigate('Login')}/>
                <AppButton title="register" color="secondary" onPress={() => navigation.navigate('Register')}/>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex : 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },

    buttonsContainer: {
        padding: 20,
        width: '100%'
    },
    
    logo: {
        width: 100,
        height: 100,
        
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    tagLine: {
        fontWeight: '600',
        fontSize: 25,
        paddingVertical: 20
    }
})

export default WelcomeScreen;