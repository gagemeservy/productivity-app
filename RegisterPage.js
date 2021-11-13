import React from 'react'
import {SafeAreaView, View, StyleSheet, TextInput, Button, Image, Text, TouchableOpacity} from "react-native";

const RegisterComponent = ({navigation}) => {

    const [first, onChangeFirst] = React.useState(null);
    const [last, onChangeLast] = React.useState(null);
    const [email, onChangeEmail] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('./img/profileIcon.png')}
                style={{width: 215, height: 215, margin: 20}}
            />
            <TextInput placeholderTextColor={'#C7C7C7'}
                style={styles.input}
                onChangeText={onChangeFirst}
                value={first}
                placeholder="First Name"
                />
            <TextInput placeholderTextColor={'#C7C7C7'}
                style={styles.input}
                onChangeText={onChangeLast}
                value={last}
                placeholder="Last Name"
                />
            <TextInput placeholderTextColor={'#C7C7C7'}
                style={styles.input}
                onChangeText={onChangeEmail}
                value={email}
                placeholder="example@gmail.com"
                textContentType="emailAddress"
                />
            <TextInput placeholderTextColor={'#C7C7C7'}
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder="Password"
                textContentType="password"
                secureTextEntry={true}
                />
            <TouchableOpacity style={styles.signinbutton}
                onPress={() => {
                    navigation.replace('Task')
                }}>
                <Text style={{color: '#FFFFFF', fontSize: 18}}>SIGN UP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.extrabutton}
                onPress={() => {
                    navigation.replace('Login')
                }}>
                <Text style={styles.extraText}>Already have an Account?</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    input: {
        height: 40,
        width: 308,
        margin: 12,
        borderWidth: 1,
        borderColor: '#E7E7E7',
        borderRadius: 22,
        padding: 10,
    },
    signinbutton: {
        height: 50,
        width: 308,
        margin: 12,
        backgroundColor: '#71A0FC',
        borderRadius: 22,
        color: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    extrabutton: {
        margin: 15,
    },
    extraText: {
        color: '#7C7C7C'
    }
});

export default RegisterComponent;