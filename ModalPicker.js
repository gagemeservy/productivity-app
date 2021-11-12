import React from 'react'
import {
    StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView
} from 'react-native'

const OPTIONS = ['Tasks', 'Logout'];
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const ModalPicker = (props, { navigation }) => {
    const onPressItem = (option) => {
        props.changeModalVisibilty(false);
        props.setData(option);
        if(option == "Logout"){
            option = "Login";
        }
        else if(option == "Tasks"){
            option = "Task";
        }
        props.navigateTo(option);
    }
    const option = OPTIONS.map((item, index) => {
        return(
            <TouchableOpacity 
            style={styles.option}
            key={index}
            onPress={() => onPressItem(item)}
            >
                <Text style={styles.text}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
    })
    return (
        <TouchableOpacity
            onPress={() => props.changeModalVisibilty(false)}
            style={styles.container}
        >
            <View style={[styles.modal, {width: WIDTH - 20, height: HEIGHT}]}>
                <ScrollView>{option}</ScrollView>
            </View>
        </TouchableOpacity>
    ) 
}

export {ModalPicker}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 80
    },
    modal: {
        backgroundColor: 'white',
        borderRadius: 10
    },
    option: {
        alignItems: 'flex-start',
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 4
    },
    text: {
        margin: 20,
        fontSize: 20,
        fontWeight: 'bold'
    }
});