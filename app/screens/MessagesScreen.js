import React, {useState} from 'react';
import { FlatList,  StyleSheet} from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import ListItemDeleteAction from '../components/ListItemDeleteAction';

const initialMessages= [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/mosh.jpg')
    },
    {
        id: 2,
        title: 'T1',
        description: 'D2',
        image: require('../assets/mosh.jpg')
    },
]

const MessagesScreen = () => {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        const newMessage = messages.filter(m => m.id != message.id);
        setMessages(newMessage);
    }

    return (
        <Screen>
            <FlatList 
                data={messages} 
                keyExtractor={message => message.id.toString()}
                renderItem={({item}) => {
                    const {title, description, image} = item;
                    return <ListItem
                            title={title}
                            subTitle={description}
                            image={image}
                            renderRightActions={() => 
                                <ListItemDeleteAction 
                                    onPress={() => handleDelete(item)}/>}
                            onPress={() => console.log('message selected', item)}/>
                    }}
                ItemSeparatorComponent={() => <ListItemSeparator/> }
                refreshing={refreshing}
                onRefresh = {() => {
                    setMessages([
                        {
                            id: 2,
                            title: 'T1',
                            description: 'D2',
                            image: require('../assets/mosh.jpg')
                        }
                    ]);
                }}
            />
        </Screen>
    )
}

export default MessagesScreen;

const styles = StyleSheet.create({
    
})
