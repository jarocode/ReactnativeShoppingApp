import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import {Image} from 'react-native-expo-image-cache';

import colors from '../config/colors';
import AppText from '../components/AppText';
import App from '../../App';

function Card({title, subTitle, imageUrl, onPress, thumbnailUrl}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <Image 
                    style={styles.image} 
                    uri={imageUrl} 
                    preview={{uri : thumbnailUrl}}
                    tint="light"
                    />
                <View style={styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText style={styles.subTitle}>{subTitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

export default Card;

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden'
    },

    detailsContainer: {
        padding: 20
    },
    
    image: {
        width: '100%',
        height: 200
    },
    
    title: {
        marginBottom: 7
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: 'bold'
    }
})