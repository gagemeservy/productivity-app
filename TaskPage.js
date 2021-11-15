import React, {useState} from "react";
import {Modal, FlatList, SafeAreaView, View, StyleSheet, TextInput, Button, Image, Text, TouchableOpacity, Dimensions, NavigationContainer } from "react-native";
import {ModalPicker} from './ModalPicker';
import Icon from 'react-native-vector-icons/Octicons';

const TaskComponent = ({ navigation }) => {
    const windowWidth = Dimensions.get('window').width;
    const imgHeight = Math.round((windowWidth * 11) / 16);
    const [chooseData, setchooseData] = useState('Select item...');
    const [isModalVisible, setisModalVisible] = useState(false);
    const changeModalVisibilty = (bool) => {
        setisModalVisible(bool)
    }
    const setData = (option) => {
        setchooseData(option);
    }
    const navigateTo = (pageName) => {
        navigation.replace(pageName);
    }

    return (
        <SafeAreaView>
            <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.menu}
                onPress={() => {changeModalVisibilty(true)}}
                >
                    <Icon name='three-bars' size={30} color='#000'/>
            </TouchableOpacity>
            <Modal
                transparent={true}
                animationType='fade'
                visible={isModalVisible}
                nRequestClose={() => changeModalVisibilty(false)}>
                    <ModalPicker 
                    changeModalVisibilty={changeModalVisibilty}
                    setData={setData}
                    navigateTo={navigateTo}></ModalPicker>
                </Modal>
            <Image source={require('./img/map.png')}
                resizeMode={'cover'} style={{ width: windowWidth, height: imgHeight, margin: 20 }}
            /></SafeAreaView>
            <FlatList 
                    data = {toDoList}
                    renderItem={({ item }) => <View style={styles.item}>
                    <View style={styles.itemLeft}>
                        <TouchableOpacity style={styles.square} onPress={() => {
                        navigation.replace('Login')
                    }}></TouchableOpacity>
                        <Text style={styles.itemText}>{item.key}</Text>
                    </View>
                    <View style={styles.circular}><Text>TP : {item.value}</Text></View>
                </View>}
                />

        </SafeAreaView>
    );
};



const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: '80%',
    },
    menu: {
        paddingTop: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    item: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    square:{
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15
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
    buttons: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#71A0FC',
        color: '#7C7C7C'
    },
    extraText: {
        color: '#7C7C7C'
    },
    itemText: {
        maxWidth: '80%',
    },
    circular: {
        width: 64,
        height: 30,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 6,
        alignItems: 'center'
    }
});

export default TaskComponent;