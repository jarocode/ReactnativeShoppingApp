import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import Chair from '../assets/chair.jpg';
import colors from '../config/colors';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons name="close" size={35} color="white"/>
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons name="trash-can-outline" size={35} color="white"/>
            </View>
            <Image style={styles.image} resizeMode={'contain'}  source={Chair}/>
        </View>
    );
}

export default ViewImageScreen;

const styles = StyleSheet.create({
    closeIcon: {
       position: 'absolute',
        top: 40,
        left: 30
    },
    container:{
        backgroundColor: colors.black,
        flex: 1
    },
    deleteIcon: {
        position: 'absolute',
        top: 40,
        right: 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
    
})