import React, { useState } from "react";
import { Modal, Animated, FlatList, SafeAreaView, View, StyleSheet, TextInput, Button, Image, Text, TouchableOpacity, Dimensions, NavigationContainer, Platform, ToastAndroid, Alert } from "react-native";
import { ModalPicker } from './ModalPicker';
import Icon from 'react-native-vector-icons/Octicons';
import { ScreenStackHeaderRightView } from "react-native-screens";
import { ScrollView } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";

const TaskComponent = ({ navigation }) => {
    const windowWidth = Dimensions.get('window').width;
    const imgHeight = Math.round((windowWidth * 11) / 16);
    const [chooseData, setchooseData] = useState('Select item...');
    const [isModalVisible, setisModalVisible] = useState(false);
    const [state, setState] = useState(false)
    
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

    function GetRandomEnemy(){
        if (enemyChosen == false){
            randomEnemyNum = Math.floor(Math.random()*12);
            enemyChosen = true;
        }
        if(randomEnemyNum == 0){
            currentEnemyName = "Skeleton Archer";
            neededBattleTP = 10;
            return(<SafeAreaView
            ><Image source={require('./img/Skeleton_Archer.png')}
                resizeMode={'cover'} style={{ position: 'absolute', top: -180, left: 160, width: 150, height: 125  }} />
                <Text style={styles.infoText}>Current Quest:</Text>
                <Text style={styles.infoText}>Defeat the {currentEnemyName}</Text>
                <Text style={styles.infoText}>Progress: {battleTP} TP/{neededBattleTP} TP</Text></SafeAreaView>);
        }
        else if(randomEnemyNum == 1){
            currentEnemyName = "Skeleton Crossbowman";
            neededBattleTP = 15;
            return(<SafeAreaView><Image source={require('./img/Skeleton_Crossbowman.png')}
                resizeMode={'cover'} style={{ position: 'absolute', top: -180, left: 160, width: 150, height: 125 }} /><Text style={styles.infoText}>Current Quest:</Text>
                <Text style={styles.infoText}>Defeat the {currentEnemyName}</Text>
                <Text style={styles.infoText}>Progress: {battleTP} TP/{neededBattleTP} TP</Text></SafeAreaView>);
        }
        else if(randomEnemyNum == 2){
            currentEnemyName = "Flaming Skull";
            neededBattleTP = 8;
            return(<SafeAreaView><Image source={require('./img/Skeleton_Flaming_Skull.png')}
                resizeMode={'cover'} style={{ position: 'absolute', top: -250, left: 160, width: 100, height: 140 }} /><Text style={styles.infoText}>Current Quest:</Text>
                <Text style={styles.infoText}>Defeat the {currentEnemyName}</Text>
                <Text style={styles.infoText}>Progress: {battleTP} TP/{neededBattleTP} TP</Text></SafeAreaView>);
        }
        else if(randomEnemyNum == 3){
            currentEnemyName = "Great Maceman";
            neededBattleTP = 25;
            return(<SafeAreaView><Image source={require('./img/Skeleton_Great_Maceman.png')}
                resizeMode={'cover'} style={{ position: 'absolute', top: -180, left: 160, width: 150, height: 125 }} /><Text style={styles.infoText}>Current Quest:</Text>
                <Text style={styles.infoText}>Defeat the {currentEnemyName}</Text>
                <Text style={styles.infoText}>Progress: {battleTP} TP/{neededBattleTP} TP</Text></SafeAreaView>);
        }
        else if(randomEnemyNum == 4){
            currentEnemyName = "Hooded Mage";
            neededBattleTP = 15;
            return(<SafeAreaView><Image source={require('./img/Skeleton_Mage_Hooded.png')}
                resizeMode={'cover'} style={{ position: 'absolute', top: -220, left: 140, width: 150, height: 175 }} /><Text style={styles.infoText}>Current Quest:</Text>
                <Text style={styles.infoText}>Defeat the {currentEnemyName}</Text>
                <Text style={styles.infoText}>Progress: {battleTP} TP/{neededBattleTP} TP</Text></SafeAreaView>);
        }
        else if(randomEnemyNum == 5){
            currentEnemyName = "Mage";
            neededBattleTP = 12;
            return(<SafeAreaView><Image source={require('./img/Skeleton_Mage.png')}
                resizeMode={'cover'} style={{ position: 'absolute', top: -220, left: 140, width: 150, height: 175  }} /><Text style={styles.infoText}>Current Quest:</Text>
                <Text style={styles.infoText}>Defeat the {currentEnemyName}</Text>
                <Text style={styles.infoText}>Progress: {battleTP} TP/{neededBattleTP} TP</Text></SafeAreaView>);
        }
        else if(randomEnemyNum == 6){
            currentEnemyName = "Royal Guard";
            neededBattleTP = 22;
            return(<SafeAreaView><Image source={require('./img/Skeleton_Royal_Guard.png')}
                resizeMode={'cover'} style={{ position: 'absolute', top: -180, left: 160, width: 150, height: 125  }} /><Text style={styles.infoText}>Current Quest:</Text>
                <Text style={styles.infoText}>Defeat the {currentEnemyName}</Text>
                <Text style={styles.infoText}>Progress: {battleTP} TP/{neededBattleTP} TP</Text></SafeAreaView>);
        }
        else if(randomEnemyNum == 7){
            currentEnemyName = "Armored Spearman";
            neededBattleTP = 22;
            return(<SafeAreaView><Image source={require('./img/Skeleton_Spearman_Armored.png')}
                resizeMode={'cover'} style={{ position: 'absolute', top: -180, left: 160, width: 150, height: 125  }} /><Text style={styles.infoText}>Current Quest:</Text>
                <Text style={styles.infoText}>Defeat the {currentEnemyName}</Text>
                <Text style={styles.infoText}>Progress: {battleTP} TP/{neededBattleTP} TP</Text></SafeAreaView>);
        }
        else if(randomEnemyNum == 8){
            currentEnemyName = "Spearman";
            neededBattleTP = 18;
            return(<SafeAreaView><Image source={require('./img/Skeleton_Spearman.png')}
                resizeMode={'cover'} style={{ position: 'absolute', top: -180, left: 160, width: 150, height: 125  }} /><Text style={styles.infoText}>Current Quest:</Text>
                <Text style={styles.infoText}>Defeat the {currentEnemyName}</Text>
                <Text style={styles.infoText}>Progress: {battleTP} TP/{neededBattleTP} TP</Text></SafeAreaView>);
        }
        else if(randomEnemyNum == 9){
            currentEnemyName = "Armored Swordsman";
            neededBattleTP = 20;
            return(<SafeAreaView><Image source={require('./img/Skeleton_Swordman_Armored.png')}
                resizeMode={'cover'} style={{ position: 'absolute', top: -180, left: 160, width: 150, height: 125  }} /><Text style={styles.infoText}>Current Quest:</Text>
                <Text style={styles.infoText}>Defeat the {currentEnemyName}</Text>
                <Text style={styles.infoText}>Progress: {battleTP} TP/{neededBattleTP} TP</Text></SafeAreaView>);
        }
        else if(randomEnemyNum == 10){
            currentEnemyName = "Swordman";
            neededBattleTP = 15;
            return(<SafeAreaView><Image source={require('./img/Skeleton_Swordman.png')}
                resizeMode={'cover'} style={{ position: 'absolute', top: -180, left: 160, width: 150, height: 125  }} /><Text style={styles.infoText}>Current Quest:</Text>
                <Text style={styles.infoText}>Defeat the {currentEnemyName}</Text>
                <Text style={styles.infoText}>Progress: {battleTP} TP/{neededBattleTP} TP</Text></SafeAreaView>);
        }
        else{
            currentEnemyName = "Skeleton Archer";
            return(<SafeAreaView><Image source={require('./img/Skeleton_Archer.png')}
                resizeMode={'cover'} style={{ position: 'absolute', top: -180, left: 160, width: 150, height: 125  }} /><Text style={styles.infoText}>Current Quest:</Text>
                <Text style={styles.infoText}>Defeat the {currentEnemyName}</Text>
                <Text style={styles.infoText}>Progress: {battleTP} TP/{neededBattleTP} TP</Text></SafeAreaView>);
        }
    }

    function MapBattleScreen() {
        if (inABattle) {
            return (
                <TouchableOpacity onPress={() => {
                    notifyMessage("You must finish the current quest to return to the map screen.");
                }}><SafeAreaView style={styles.container}>
                <Image source={require('./img/battle-bg.png')}
                    resizeMode={'cover'} style={{ width: windowWidth, height: imgHeight, margin: 20 }}
                />
                <Image source={require('./img/catFighter.gif')}
                    resizeMode={'cover'} style={{ position: 'absolute', top: 100, left: -20, width: 200, height: 200 }} />
                <GetRandomEnemy/>
                </SafeAreaView>
                <Animated.View
                style={[styles.innerStyle, { width: ((battleTP/neededBattleTP)*100) + "%" },]}
                />
                </TouchableOpacity>);
        }
        return (<TouchableOpacity onPress={() => {
            inABattle = true;
            neededBattleTP = 10;
            navigation.replace('Task');
            notifyMessage("Enemies are attacking you on your way to the next area!");
        }} style={styles.container}>
            <Image source={require('./img/new_map.png')}
                resizeMode={'cover'} style={{ width: windowWidth, height: imgHeight, margin: 20 }}
            />
            <Text style={styles.infoText}>Tap A Location To Travel To</Text>
        </TouchableOpacity>);
    }

    function doTPcalculations(valueToAdd) {
        TotalTP = TotalTP + valueToAdd;
        battleTP = battleTP + valueToAdd;
        if (inABattle) {
            if (battleTP >= neededBattleTP) {
                inABattle = false;
                enemyChosen = false;
                battleTP = 0;
                notifyMessage("You finished the quest!", "");
                navigation.replace('Task');
            }
        }
    }


    function PrintInt(IntValue) {
        Alert.alert(IntValue.toString());
    }
       
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.topBar}>

                <TouchableOpacity style={styles.menu}
                    onPress={() => { changeModalVisibilty(true) }}
                >
                    <Icon name='three-bars' size={30} color='#000' />
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
            <SafeAreaView>
                <MapBattleScreen />
            </SafeAreaView>
            <FlatList
                extraData={state}
                data={toDoList}
                renderItem={({ item }) => <View style={styles.item}>
                    <View style={styles.itemLeft}>
                        <TouchableOpacity style={styles.square} onPress={() => {
                            notifyMessage("Completed!", item.key)
                            finishedList.push(item)
                            var index = toDoList.indexOf(item);
                            if (index !== -1) {
                                toDoList.splice(index, 1)
                            }
                            doTPcalculations(item.value);
                            setState(!state)
                            //navigation.replace('Task');
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
    },
    menu: {
        paddingTop: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingEnd: 10
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
    square: {
        width: 32,
        height: 32,
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
    topBar: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
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
    },
    innerStyle:{
    width: "100%",
    height: 31,
    borderRadius: 16,
    backgroundColor:"green",
    },
    infoText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#55BCF6',
        paddingBottom: 5
    }
});

export default TaskComponent;