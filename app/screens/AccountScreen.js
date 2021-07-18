import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeparatorComponent from '../components/ListItemSeparator';
import colors from '../config/colors';
import Icon from '../components/Icon';
import navigationTheme from '../navigation/navigationTheme';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        },
        targetScreen: "Messages"
    },
]

const AccountScreen = ({navigation}) => {
    return (
        
            <Screen style={styles.screen}>
                <View style={styles.container}>
                    <ListItem
                        title="uchman jaroslaw"
                        subTitle="uchman444@jaroslaw.com"
                        image={require('../assets/mosh.jpg')}
                    />
                </View>
                <View style={styles.container}>
                    <FlatList
                        data={menuItems}
                        keyExtractor={menuItem => menuItem.title}
                        ItemSeparatorComponent = {ListItemSeparatorComponent}
                        renderItem={({item}) =>
                        <ListItem
                            title={item.title}
                            IconComponent={
                                <Icon 
                                name={item.icon.name}
                                backgroundColor={item.icon.backgroundColor}/>
                            }/>}
                            onPress = {() => navigation.navigate('Messages')}
                        />
                </View>
                <ListItem
                    title="Log Out"
                    IconComponent={
                        <Icon name="logout" backgroundColor="#ffe66d"/>
                    }
                />
                
            </Screen>
        
    )
}

export default AccountScreen;
const styles = StyleSheet.create({
    container: {
        marginVertical: 30
    },
    screen: {
        backgroundColor: colors.light
    }
})
