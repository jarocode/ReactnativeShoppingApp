import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import Icon from './Icon';
import AppText from './AppText';


const CategoryPickerItem = ({onPress, item}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80}/>
            <AppText style={styles.label}>{item.label}</AppText>
        </TouchableOpacity>
    );
}

export default CategoryPickerItem;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingVertical: 15,
        alignItems: 'center',
        width: '33.3%'
    },
    label: {
        marginTop: 5,
        textAlign: 'center'
    }
})
