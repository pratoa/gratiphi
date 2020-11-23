import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HistoryDonations() {
    return (
        <View style={styles.container}>
            <Text> History Donations </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20
    }
});