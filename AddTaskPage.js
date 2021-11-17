import React from 'react'
import {SafeAreaView, View, StyleSheet, TextInput, Modal, Text, TouchableOpacity, Alert} from "react-native";
import Icon from 'react-native-vector-icons/Octicons'
import { ModalPicker } from './ModalPicker';
const AddTaskComponent = ({ navigation }) => {
    const [taskName, onChangeName] = React.useState(null);
    const [tp, onChangeTP] = React.useState(null);
    const [chooseData, setchooseData] = React.useState('Select item...');
    const [isModalVisible, setisModalVisible] = React.useState(false);
    const changeModalVisibilty = (bool) => {
        setisModalVisible(bool)
    }
    const setData = (option) => {
        setchooseData(option);
    }
    const navigateTo = (pageName) => {
        navigation.replace(pageName);
    }

    function notifyMessage(title, msg) {
        if (Platform.OS == 'android') {
            ToastAndroid.show(msg, ToastAndroid.SHORT)
        } else {
            Alert.alert(title, msg);
        }
    }

    return (
        <SafeAreaView>
            <View style={styles.topBar}>
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
            </View>
            <View style={styles.title}>
                <Text style={styles.titleText}>Add Task</Text>
            </View>
            <View>
                <View>
                    <Text>Enter task name:</Text>
                    <TextInput 
                        style={styles.input}
                        onChangeText={onChangeName}
                        value={taskName}
                        />
                </View>
                <View>
                    <Text>Enter Task Point(TP) difficulty value:</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeTP}
                        value={tp}
                        numeric
                        keyboardType="numeric"
                    />
                </View>
                <TouchableOpacity style={styles.signinbutton}
                    onPress={() => {
                        toDoList.push({key: taskName, value: parseInt(tp, 10)});
                        onChangeName(null);
                        onChangeTP(null);
                        notifyMessage("Successful Add", taskName)
                    }}>
                    <Text style={{color: '#FFFFFF', fontSize: 18}}>ADD TASK</Text>
                </TouchableOpacity>
            </View>
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
        justifyContent: 'flex-start',
        paddingEnd: 10
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
    topBar: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        margin: 12
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#71A0FC'
    },
    titleText: {
        fontSize: 38,
        fontWeight: 'bold',
        color: '#FFFFFF'
    }
});

export default AddTaskComponent;