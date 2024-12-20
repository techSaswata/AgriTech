import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function SellerScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Manage Bids</Text>
            <TextInput style={styles.input} placeholder="Submit Price Quote" />
            <TextInput style={styles.input} placeholder="Upload Product Images (URL)" />
            <TextInput style={styles.input} placeholder="Bid Details" />
            <Button title="Submit Bid" onPress={() => alert('Bid Submitted!')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f8f8f8',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 15,
        borderRadius: 5,
    },
});