import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Auth } from 'aws-amplify';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppTextInput from '../../components/AppTextInput';
import AppButton from '../../components/AppButton';

export default function SignUp({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    async function signUp() {
        // if (password !== confirmPassword) {
        //     setError("Passwords don't match!")
        //     return null;
        // }
        
        try  {
            await Auth.signUp({ email, password, attributes: { email } });
            console.log("Sign-up Confirmed");
            navigation.navigate("ConfirmationSignUp");
        } catch (error) {
            console.log("Error signing up...", error);
        }
    };

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.container}>
                <Text style={styles.title}>Create a new account</Text>
                <AppTextInput value={email}
                    onChangeText={text => setEmail(text)}
                    leftIcon="account"
                    placeholder="Enter email address"
                    autoCapotalize="none"
                    keyboardType="email-address"
                    textContentType="emailAddress"/>
                <AppTextInput value={password}
                    onChangeText={text => setPassword(text)}
                    leftIcon="lock"
                    placeholder="Enter password"
                    autoCapotalize="none"
                    autoCorrect={false}
                    secureTextEntry
                    textContentType="password"/>
                <AppTextInput value={confirmPassword}
                    onChangeText={text => setConfirmPassword(text)}
                    leftIcon="lock"
                    placeholder="Enter password"
                    autoCapotalize="none"
                    autoCorrect={false}
                    secureTextEntry
                    textContentType="password"/>
                <AppButton title="Sign Up" onPress={signUp} />
                {error !== '' && <TextError title={error} textStyle={{ alignSelf: 'center' }} />}
                <View style={styles.footerButtonContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                        <Text style={styles.forgotPasswordButtonText}>
                            Already have an account? Sign In
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: '#202020',
        fontWeight: '500',
        marginVertical: 15
    },
    footerButtonContainer: {
        marginVertical: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    forgotPasswordButtonText: {
        color: 'tomato',
        fontSize: 18,
        fontWeight: '600'
    }
});