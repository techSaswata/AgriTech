import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function BuyerScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Place an Order</Text>
            <TextInput style={styles.input} placeholder="Quantity Requirements" />
            <TextInput style={styles.input} placeholder="Quality Parameters" />
            <TextInput style={styles.input} placeholder="Region/Location" />
            <TextInput style={styles.input} placeholder="Loading Date" />
            <TextInput style={styles.input} placeholder="Delivery Location" />
            <Button title="Submit Order" onPress={() => alert('Order Submitted!')} />
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