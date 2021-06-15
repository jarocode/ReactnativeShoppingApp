import React, { Fragment, useState } from 'react';
import {TouchableWithoutFeedback, View, Platform, StyleSheet, Modal, Button, FlatList } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';

const AppPicker = ({
    icon, 
    placeholder, 
    items, 
    selectedItem, 
    onSelectItem, 
    onBlur,
    numberOfColumns = 1,
    PickerItemComponent = PickerItem
}) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
            <Fragment>
                <TouchableWithoutFeedback onPress ={() => setModalVisible(true)} onBlur={onBlur}>
                    <View style={styles.container}>
                        {icon && <MaterialCommunityIcons 
                                    name={icon} 
                                    color={defaultStyles.colors.medium} 
                                    size={20} 
                                    style={styles.icon}
                                    />
                        }
                        {selectedItem ? 
                         (<AppText style={styles.text}>{selectedItem.label}</AppText>)
                         : (<AppText style={styles.placeholder}>{placeholder}</AppText>)
                        }
                        
                         <MaterialCommunityIcons 
                            name= "chevron-down" 
                            size={20} 
                        />
                        
                    </View>
                </TouchableWithoutFeedback>
                <Modal visible={modalVisible} animationType="slide">
                    <Screen>
                        <Button title="Close" onPress={() => setModalVisible(false)}/>
                        <FlatList
                                data={items}
                                numColumns= {numberOfColumns}
                                keyExtractor={item => item.value.toString()}
                                renderItem = {({item}) => 
                                    <PickerItemComponent
                                        item={item}
                                        onPress={() => {
                                            setModalVisible(false);
                                            onSelectItem(item);
                                        }}
                                    />}
                            />
                        
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

    
    placeholder: {
        color: defaultStyles.colors.medium,
        flex: 1
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
