import React from 'react';
import { View, TextInput, Button, StyleSheet, FlatList, Text } from 'react-native';

const messages = [
    { id: '1', sender: 'Buyer', text: 'Is the product available?' },
    { id: '2', sender: 'Seller', text: 'Yes, it is.' },
];

export default function ChatScreen() {
    return (
        <View style={styles.container}>
            <FlatList
                data={messages}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Text style={styles.message}>
                        <Text style={{ fontWeight: 'bold' }}>{item.sender}: </Text>
                        {item.text}
                    </Text>
                )}
            />
            <TextInput style={styles.input} placeholder="Type a message" />
            <Button title="Send" onPress={() => alert('Message Sent!')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    message: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
    },
});