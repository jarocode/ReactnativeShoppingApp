import React from 'react';
import { TextInput, View, Platform, StyleSheet } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import defaultStyles from '../config/styles';

const AppTextInput = ({icon, ...otherProps}) => {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons 
                        name={icon} 
                        color={defaultStyles.colors.medium} 
                        size={20} 
                        style={styles.icon}
                        />
            }
            <TextInput
                placeholderTextColor={defaultStyles.colors.medium} 
                style={defaultStyles.text} 
                {...otherProps}
            />
        </View>
    )
}

export default AppTextInput;
const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        width: '100%',
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10
        
    },
    icon: {
        marginRight: 10,
        marginTop: 4
    },
    textInput: {
        fontSize: 18,
        fontFamily: Platform.OS === "android"? "Roboto" : "Avenir",
        color: defaultStyles.colors.dark
    }
})
