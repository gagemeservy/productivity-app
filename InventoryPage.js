import React from "react";
import {FlatList, SafeAreaView, View, StyleSheet, TextInput, Button, Image, Text, TouchableOpacity, Dimensions} from "react-native";
//import CheckBox from '@react-native-community/checkbox';

const InventoryComponent = ({navigation}) => {
    const allTasks = [["Do dishes", 2],["Do laundry", 3],["Do hair", 1],["Do homework", 3],["Fix car", 3],["Sleep", 1]];
    const windowWidth = Dimensions.get('window').width;
    const playerHeight = Math.round((windowWidth*9)/16);
    const itemHeight = Math.round((windowWidth*15)/16);
    //const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <SafeAreaView style={styles.container}>
            <Button 
                title="Logout"
                onPress={() =>
                    navigation.replace('Login')}/>
            <Button 
                title="Tasks"
                onPress={() =>
                    navigation.replace('Task')}/>
            <Image source={require('./img/player.png')}
                resizeMode={'cover'} style={{width: windowWidth, height: playerHeight, margin: 20}}
            />
            <Image source={require('./img/items.png')}
                resizeMode={'cover'} style={{width: windowWidth, height: itemHeight, margin: 20}}
            />
        </SafeAreaView>
    );
};



const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    flatlist_container: {
        flex: 1,
        paddingTop: 22
       },
    item: {
        padding : 10,
        fontSize: 18,
        height: 44,
        width: 660,
        borderColor: "#fff",
        borderWidth:  2
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

export default InventoryComponent;