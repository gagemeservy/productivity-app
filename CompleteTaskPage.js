import React, {useState} from "react";
import {Modal, FlatList, SafeAreaView, View, StyleSheet, TextInput, Button, Image, Text, TouchableOpacity, Dimensions, NavigationContainer } from "react-native";
import {ModalPicker} from './ModalPicker';
import Icon from 'react-native-vector-icons/Octicons';


const finishedTaskComponent = ({navigation}) => {

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
    <SafeAreaView style={{flex: 1}}>
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
            <Text style={styles.titleText}>Completed Tasks</Text>
            <Text style={styles.subtitleText}>Total Earned TP: {TotalTP}</Text>
        </View>
        <FlatList 
                    data = {finishedList}
                    renderItem={({ item }) => <View style={styles.item}>
                    <View style={styles.itemLeft}>
                        <Text style={styles.itemText}>{item.key}</Text>
                    </View>
                    <View style={styles.circular}><Text>TP : {item.value}</Text></View>
                </View>}
        />

    </SafeAreaView>
 )
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        maxHeight: '80%',
    },
    menu: {
        paddingTop: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingEnd: 10,
        paddingStart: 10,
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
    topBar: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        margin: 12,
        flexDirection: 'row'
    },
    itemText: {
        maxWidth: '100%',
    },
    circular: {
        width: 64,
        height: 30,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 6,
        alignItems: 'center'
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
    },
    subtitleText: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#FFFFFF'
    }
});

export default finishedTaskComponent;