import React, { useEffect, useState, ReactElement } from 'react'
import { View, Text, StyleSheet, Button, ImageBackground, Image } from 'react-native';

export default function Welcome({ navigation }) {

    const backgroundImage = '../../../assets/images/el-tigre.jpg';
    const logo = '../../../assets/images/alimenta-logo.png'

    return (
      <View style={styles.backgroundContainer}>
        <ImageBackground source={require(backgroundImage)} style={styles.backgroundImage}>
            <View style={styles.container}>
                <Image source={require(logo)} style={styles.logo}/>
                <View style={styles.buttonContainer}>
                    <Button title="Sign In"
                        onPress={() => navigation.navigate('SignIn')} 
                        style={styles.button}/>
                    <Text>Or</Text>
                    <Button title="Sign Up" 
                        onPress={() => navigation.navigate('SignUp')}
                        style={styles.button}/>
                </View>
            </View>
        </ImageBackground>
      </View>
    );
};

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    backgroundContainer: {
        flex: 1
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
    logo: {
        marginTop: 50,
        width: 100,
        height: 100
    },
    button: {
        alignSelf: 'center',
        justifyContent: 'center'
    }
});