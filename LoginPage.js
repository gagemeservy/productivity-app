import React from "react";
import {SafeAreaView, View, StyleSheet, TextInput, Button, Image, Text, TouchableOpacity} from "react-native";

const LoginComponent = ({navigation}) => {
    const [email, onChangeEmail] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('./img/profileIcon.png')}
                style={{width: 215, height: 215, margin: 20}}
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
            <TouchableOpacity style={styles.signinbutton}>
                <Text style={{color: '#FFFFFF', fontSize: 18}}>SIGN IN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.extrabutton}>
                <Text style={styles.extraText}>Forgot password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.extrabutton}>
                <Text style={styles.extraText}>Create an Account</Text>
            </TouchableOpacity>
            <Button 
                title="Go back to home"
                onPress={() =>
                    navigation.navigate('Home')}/>
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

export default LoginComponent;