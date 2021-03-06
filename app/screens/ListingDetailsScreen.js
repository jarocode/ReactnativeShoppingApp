import React from 'react';
import { View, StyleSheet} from 'react-native';
import {Image} from 'react-native-expo-image-cache';

import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';
import AppButton from '../components/AppButton';
import Label from '../components/Label';

const ListingDetailsScreen = ({route, navigation}) => {
    const listing = route.params
    return (
        <View>
            <Image 
                style={styles.image} 
                uri ={listing.images[0].url}
                preview={{uri :listing.images[0].thumbnailUrl }}
                tint="light"
            />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                {!!listing.description === true && <AppText style={styles.description}>{listing.description}</AppText>}
                <AppText style={styles.price}>{`$${listing.price}`}</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                    image={require('../assets/mosh.jpg')}
                    title="uchman jaroslaw"
                    subTitle="10 listings"/>
                    <View style={styles.labelContainer}>
                        <Label 
                            backgroundColor={colors.secondary} 
                            name="chat"  
                            size={50} 
                            onPress={() => navigation.navigate('ChatScreen')}/>
                        <Label backgroundColor={colors.secondary} name="phone"  size={50}/>
                    </View>
                </View>
            </View>
          </View>
    )
}

export default ListingDetailsScreen;

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20
    },

    description: {
        marginTop: 5
    },
    
    image : {
        width: '100%',
        height: 300
    },

    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    },

    labelContainer: {
        marginRight: 200,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },

    userContainer: {
        marginVertical: 40
    }

})
