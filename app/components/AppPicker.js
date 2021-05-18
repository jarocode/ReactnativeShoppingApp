import React, { Fragment, useState } from 'react';
import {TouchableWithoutFeedback, View, Platform, StyleSheet, Modal, Button } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import Screen from './Screen';

const AppPicker = ({icon, placeholder, ...otherProps}) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
            <Fragment>
                <TouchableWithoutFeedback onPress ={() => setModalVisible(true)}>
                    <View style={styles.container}>
                        {icon && <MaterialCommunityIcons 
                                    name={icon} 
                                    color={defaultStyles.colors.medium} 
                                    size={20} 
                                    style={styles.icon}
                                    />
                        }
                        <AppText style={styles.text}>{placeholder}</AppText>
                        {icon && <MaterialCommunityIcons 
                                    name= "chevron-down" 
                                    size={20} 
                                />
                        }
                    </View>
                </TouchableWithoutFeedback>
                <Modal visible={modalVisible} animationType="slide">
                    <Screen>
                        <Button title="Close" onPress={() => setModalVisible(false)}/>
                    </Screen>
                </Modal>
            </Fragment>
    )
}

export default AppPicker;
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
    },
    text: {
        flex: 1
    }
})
