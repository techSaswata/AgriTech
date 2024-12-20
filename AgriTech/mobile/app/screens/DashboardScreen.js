import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function DashboardScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Dashboard Analytics</Text>
            <Text style={styles.stat}>Total Bids Placed: 120</Text>
            <Text style={styles.stat}>Active Collection Centers: 15</Text>
            <Text style={styles.stat}>Active Buyers: 30</Text>
            <Text style={styles.stat}>Order Statistics: 45% Completed</Text>
            <Text style={styles.stat}>Regional Bid Distribution: Balanced</Text>
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
    stat: {
        fontSize: 16,
        marginBottom: 10,
    },
});