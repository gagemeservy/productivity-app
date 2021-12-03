import React from 'react'
import {SafeAreaView, View, StyleSheet, TextInput, Modal, Text, TouchableOpacity, Alert} from "react-native";
import Icon from 'react-native-vector-icons/Octicons'
import ModalDropdown from 'react-native-modal-dropdown'
import { ModalPicker } from './ModalPicker';
const AddTaskComponent = ({ navigation }) => {
    const [taskName, onChangeName] = React.useState(null);
    const [tp, onChangeTP] = React.useState(null);
    const [chooseData, setchooseData] = React.useState('Select item...');
    const [isModalVisible, setisModalVisible] = React.useState(false);
    const dropdown = React.useRef(null);
    
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
                        <Icon name='three-bars' size={45} color='#000'/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu}
                    onPress={() => {navigation.replace('Home')}}
                >
                    <Icon name='sign-out' size={45} color='#000' />
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
                

                    <Text>Enter Task Point(TP) difficulty value:</Text>
                    <ModalDropdown
                        ref={dropdown}
                        style={styles.tp_input}
                        dropdownStyle={styles.dropdown}
                        dropdownTextStyle={styles.list_text}
                        textStyle={styles.dropdown_text}
                        defaultIndex={-1}
                        defaultValue={'Please select...'}
                        options={['1', '2', '3', '4', '5']}
                        onSelect={(index, value) => onChangeTP(value)}
                    >
                    </ModalDropdown>
                </View>
                <TouchableOpacity style={styles.signinbutton}
                    onPress={() => {
                        if (tp === null || taskName === null) {
                            notifyMessage("You must input a task name and a task point number");
                            return;
                        }
                        toDoList.push({key: taskName, value: parseInt(tp, 10)});
                        onChangeName(null);
                        onChangeTP(null);
                        dropdown.current.select(-1);
                        notifyMessage("Successful Added", taskName)
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
        paddingEnd: 10,
        paddingStart: 10,
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
    tp_input: {
        height: 55,
        width: 308,
        margin: 12,
        backgroundColor: '#71A0FC',
        borderRadius: 22,
        padding: 10,
    },
    dropdown: {
        width: 308,
        marginTop: 12,
        borderWidth: 1,
        borderColor: '#E7E7E7',
    },
    dropdown_text: {
        color: '#FFFFFF',
        fontSize: 18,
    },
    list_text: {
        color: '#71A0FC',
        fontSize: 18,
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
        margin: 12,
        flexDirection: 'row'
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