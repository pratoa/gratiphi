import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Donate() {
    return (
        <View style={styles.container}>
            <Text> Donate </Text>
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