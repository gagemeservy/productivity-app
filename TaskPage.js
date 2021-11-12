import React, {useState} from "react";
import {Modal, FlatList, SafeAreaView, View, StyleSheet, TextInput, Button, Image, Text, TouchableOpacity, Dimensions, NavigationContainer } from "react-native";
import {ModalPicker} from './ModalPicker';
import Icon from 'react-native-vector-icons/Octicons';

const TaskComponent = ({ navigation }) => {
    const allTasks = [["Do dishes", 2], ["Do laundry", 3], ["Do hair", 1], ["Do homework", 3], ["Fix car", 3], ["Sleep", 1]];
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
            />
            <SafeAreaView style={styles.flatlist_container}>
                <FlatList
                    data={[
                        { key: 'Do dishes', value: 2 },
                        { key: 'Do laundry', value: 3 },
                        { key: 'Do hair', value: 1 },
                        { key: 'Do homework', value: 3 },
                        { key: 'Fix car', value: 3 },
                        { key: 'Sleep', value: 1 },
                        { key: 'Eat', value: 2 },
                        { key: 'Make Dinner', value: 3 },
                        { key: 'Cry a little', value: 1 },
                        { key: 'Be happy', value: 2 },
                        { key: 'Call mom', value: 1 },
                        { key: 'Call dad', value: 3 },
                        { key: 'Get new phone', value: 3 },
                        { key: 'Get new hat', value: 2 },
                        { key: 'Fix watch', value: 4 },
                        { key: 'Get hair cut', value: 2 },
                        { key: 'Watch Inception', value: 1 },
                    ]}
                    renderItem={({ item }) => <SafeAreaView><Text style={styles.item}>*checkbox* {item.key} - Difficulty: {item.value}</Text></SafeAreaView>}
                />
            </SafeAreaView>
        </SafeAreaView>
    );
};



const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    menu: {
        paddingTop: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    flatlist_container: {
        flex: 1,
        paddingTop: 22
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
        width: 660,
        borderColor: "#fff",
        borderWidth: 2
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
    }
});

export default TaskComponent;