import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleLogin = () => {
        navigation.navigate('Home', { name, email });
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Jobizz</Text>
            <Text style={styles.subtitle}>Welcome Back 👋</Text>
            <Text style={styles.description}>Let's log in. Apply to jobs!</Text>
            <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
            <View style={styles.dividerContainer}>
                <View style={styles.divider} />
                <Text style={styles.dividerText}>Or continue with</Text>
                <View style={styles.divider} />
            </View>
            <View style={styles.socialContainer}>
                <TouchableOpacity style={styles.socialButton}>
                    <Image source={require('C:\\Users\\saddi\\WebstormProjects\\rn-assignment4-11355543\\Assignment4\\assets\\applenew.png')} style={styles.socialIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <Image source={require('C:\\Users\\saddi\\WebstormProjects\\rn-assignment4-11355543\\Assignment4\\assets\\google.png')} style={styles.socialIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.socialButton}>
                    <Image source={require('C:\\Users\\saddi\\WebstormProjects\\rn-assignment4-11355543\\Assignment4\\assets\\fb.png')} style={styles.socialIcon} />
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.registerText}>Haven't registered an account? Register</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#2e659f',
        marginBottom: 10,
        alignSelf: 'flex-start',
    },
    subtitle: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
    },
    description: {
        fontSize: 18,
        color: '#7a7a7a',
        marginBottom: 20,
        alignSelf: 'flex-start',
        opacity: 0.7,
    },
    input: {
        width: 327,
        height: 52,
        padding: 15,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    button: {
        width: 327,
        paddingVertical: 15,
        backgroundColor: '#2e659f',
        borderRadius: 5,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
    },
    divider: {
        flex: 1,
        height: 0,
        borderColor: '#ccc',
        borderWidth: 0.4,
        width: 90,
    },
    dividerText: {
        width: 99,
        textAlign: 'center',
        fontSize: 16,
        color: '#7a7a7a',
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 20,
    },
    socialButton: {
        padding: 10,
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
    },
    socialIcon: {
        width: 45,
        height: 45,
        borderRadius: 20,
    },
    registerText: {
        color: '#1a5695',
        marginTop: 20,
    },
});

export default LoginScreen;
