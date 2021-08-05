import React from 'react';
import { TouchableOpacity, StyleSheet, Text} from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import colors from '../config/colors';

function AppButton({title, color="primary", onPress, icon = null}) {
    return (
            <TouchableOpacity style={[styles.button, {backgroundColor: colors[color]}]} onPress={onPress}>
               
                <Text title={title} style={styles.text}>{title}</Text>
            </TouchableOpacity>
            
       
    );
}

export default AppButton;

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        width: '100%',
        backgroundColor: colors.primary,
        borderRadius: 20,
        alignItems: 'center',
        padding: 15,
        marginVertical: 10
    },
    text: {
        color: colors.white,
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    }
})