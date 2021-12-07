import React, { useState } from "react";
import { Modal, Animated, FlatList, SafeAreaView, View, StyleSheet, TextInput, Button, Image, Text, TouchableOpacity, Dimensions, NavigationContainer, Platform, ToastAndroid, Alert } from "react-native";
import { ModalPicker } from './ModalPicker';
import Icon from 'react-native-vector-icons/Octicons';
import { ScreenStackHeaderRightView } from "react-native-screens";
import { ScrollView } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";
import { showMessage, hideMessage } from "react-native-flash-message";

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
        Alert.alert(title, msg);
    }

    function GetCheckMarkCave() {
        if(caveAreaVisited){
            return(<Icon name='check' size={100} color='green' style={{ position: 'absolute', top: -300, left: 120, width: 110, height: 90 }} />);
        }
        else{
            return null;
        }
    }

    function GetCheckMarkTree() {
        if(treeAreaVisited){
            return(<Icon name='check' size={100} color='green' style={{ position: 'absolute', top: -280, left: -40, width: 110, height: 90 }} />);
        }
        else{
            return null;
        }
    }

    function GetCheckMarkHouse() {
        if(houseAreaVisited){
            return(<Icon name='check' size={100} color='green' style={{ position: 'absolute', top: -160, left: 50, width: 110, height: 90 }} />);
        }
        else{
            return null;
        }
    }

    function GetCheckMarkWell() {
        if(wellAreaVisited){
            return(<Icon name='check' size={100} color='green' style={{ position: 'absolute', top: -300, left: -180, width: 110, height: 90 }} />);
        }
        else{
            return null;
        }
    }

    function GetCheckMarkCrystal() {
        if(crystalAreaVisited){
            return(<Icon name='check' size={100} color='green' style={{ position: 'absolute', top: -160, left: -150, width: 110, height: 90 }} />);
        }
        else{
            return null;
        }
    }

    function GetRandomEnemy() {
        if (enemyChosen == false) {
            randomEnemyNum = Math.floor(Math.random() * 12);
            enemyChosen = true;
        }
        if (randomEnemyNum == 0) {
            currentEnemyName = "Skeleton Archer";
            neededBattleTP = 10;
            return (<SafeAreaView
            ><Image source={require('./img/Skeleton_Archer.png')}
                resizeMode={'cover'} style={{ position: 'absolute', top: -180, left: 160, width: 150, height: 125 }} />
                <Text style={styles.battleText}>Current Quest:</Text>
                <Text style={styles.battleText}>Defeat the {currentEnemyName}</Text>
                <Text style={styles.battleText}>Progress: {battleTP} TP/{neededBattleTP} TP</Text></SafeAreaView>);
        }
        else if (randomEnemyNum == 1) {
            currentEnemyName = "Skeleton Crossbowman";
            neededBattleTP = 15;
            return (<SafeAreaView><Image source={require('./img/Skeleton_Crossbowman.png')}
                resizeMode={'cover'} style={{ position: 'absolute', top: -180, left: 160, width: 150, height: 125 }} /><Text style={styles.battleText}>Current Quest:</Text>
                <Text style={styles.battleText}>Defeat the {currentEnemyName}</Text>
                <Text style={styles.battleText}>Progress: {battleTP} TP/{neededBattleTP} TP</Text></SafeAreaView>);
        }
        else if (randomEnemyNum == 2) {
            currentEnemyName = "Flaming Skull";
            neededBattleTP = 8;
            return (<SafeAreaView><Image source={require('./img/Skeleton_Flaming_Skull.png')}
                resizeMode={'cover'} style={{ position: 'absolute', top: -250, left: 160, width: 100, height: 140 }} /><Text style={styles.battleText}>Current Quest:</Text>
                <Text style={styles.battleText}>Defeat the {currentEnemyName}</Text>
                <Text style={styles.battleText}>Progress: {battleTP} TP/{neededBattleTP} TP</Text></SafeAreaView>);
        }
        else if (randomEnemyNum == 3) {
            currentEnemyName = "Great Maceman";
            neededBattleTP = 25;
            return (<SafeAreaView><Image source={require('./img/Skeleton_Great_Maceman.png')}
                resizeMode={'cover'} style={{ position: 'absolute', top: -180, left: 160, width: 150, height: 125 }} /><Text style={styles.battleText}>Current Quest:</Text>
                <Text style={styles.battleText}>Defeat the {currentEnemyName}</Text>
                <Text style={styles.battleText}>Progress: {battleTP} TP/{neededBattleTP} TP</Text></SafeAreaView>);
        }
        else if (randomEnemyNum == 4) {
            currentEnemyName = "Hooded Mage";
            neededBattleTP = 15;
            return (<SafeAreaView><Image source={require('./img/Skeleton_Mage_Hooded.png')}
                resizeMode={'cover'} style={{ position: 'absolute', top: -220, left: 140, width: 150, height: 175 }} /><Text style={styles.battleText}>Current Quest:</Text>
                <Text style={styles.battleText}>Defeat the {currentEnemyName}</Text>
                <Text style={styles.battleText}>Progress: {battleTP} TP/{neededBattleTP} TP</Text></SafeAreaView>);
        }
        else if (randomEnemyNum == 5) {
            currentEnemyName = "Mage";
            neededBattleTP = 12;
            return (<SafeAreaView><Image source={require('./img/Skeleton_Mage.png')}
                resizeMode={'cover'} style={{ position: 'absolute', top: -220, left: 140, width: 150, height: 175 }} /><Text style={styles.battleText}>Current Quest:</Text>
                <Text style={styles.battleText}>Defeat the {currentEnemyName}</Text>
                <Text style={styles.battleText}>Progress: {battleTP} TP/{neededBattleTP} TP</Text></SafeAreaView>);
        }
        else if (randomEnemyNum == 6) {
            currentEnemyName = "Royal Guard";
            neededBattleTP = 22;
            return (<SafeAreaView><Image source={require('./img/Skeleton_Royal_Guard.png')}
                resizeMode={'cover'} style={{ position: 'absolute', top: -230, left: 160, width: 150, height: 190 }} /><Text style={styles.battleText}>Current Quest:</Text>
                <Text style={styles.battleText}>Defeat the {currentEnemyName}</Text>
                <Text style={styles.battleText}>Progress: {battleTP} TP/{neededBattleTP} TP</Text></SafeAreaView>);
        }
        else if (randomEnemyNum == 7) {
            currentEnemyName = "Armored Spearman";
            neededBattleTP = 22;
            return (<SafeAreaView><Image source={require('./img/Skeleton_Spearman_Armored.png')}
                resizeMode={'cover'} style={{ position: 'absolute', top: -180, left: 160, width: 150, height: 125 }} /><Text style={styles.battleText}>Current Quest:</Text>
                <Text style={styles.battleText}>Defeat the {currentEnemyName}</Text>
                <Text style={styles.battleText}>Progress: {battleTP} TP/{neededBattleTP} TP</Text></SafeAreaView>);
        }
        else if (randomEnemyNum == 8) {
            currentEnemyName = "Spearman";
            neededBattleTP = 18;
            return (<SafeAreaView><Image source={require('./img/Skeleton_Spearman.png')}
                resizeMode={'cover'} style={{ position: 'absolute', top: -180, left: 160, width: 150, height: 125 }} /><Text style={styles.battleText}>Current Quest:</Text>
                <Text style={styles.battleText}>Defeat the {currentEnemyName}</Text>
                <Text style={styles.battleText}>Progress: {battleTP} TP/{neededBattleTP} TP</Text></SafeAreaView>);
        }
        else if (randomEnemyNum == 9) {
            currentEnemyName = "Armored Swordsman";
            neededBattleTP = 20;
            return (<SafeAreaView><Image source={require('./img/Skeleton_Swordman_Armored.png')}
                resizeMode={'cover'} style={{ position: 'absolute', top: -180, left: 160, width: 150, height: 125 }} /><Text style={styles.battleText}>Current Quest:</Text>
                <Text style={styles.battleText}>Defeat the {currentEnemyName}</Text>
                <Text style={styles.battleText}>Progress: {battleTP} TP/{neededBattleTP} TP</Text></SafeAreaView>);
        }
        else if (randomEnemyNum == 10) {
            currentEnemyName = "Swordman";
            neededBattleTP = 15;
            return (<SafeAreaView><Image source={require('./img/Skeleton_Swordman.png')}
                resizeMode={'cover'} style={{ position: 'absolute', top: -180, left: 160, width: 150, height: 125 }} /><Text style={styles.battleText}>Current Quest:</Text>
                <Text style={styles.battleText}>Defeat the {currentEnemyName}</Text>
                <Text style={styles.battleText}>Progress: {battleTP} TP/{neededBattleTP} TP</Text></SafeAreaView>);
        }
        else {
            currentEnemyName = "Skeleton Archer";
            return (<SafeAreaView><Image source={require('./img/Skeleton_Archer.png')}
                resizeMode={'cover'} style={{ position: 'absolute', top: -180, left: 160, width: 150, height: 125 }} /><Text style={styles.battleText}>Current Quest:</Text>
                <Text style={styles.battleText}>Defeat the {currentEnemyName}</Text>
                <Text style={styles.battleText}>Progress: {battleTP} TP/{neededBattleTP} TP</Text></SafeAreaView>);
        }
    }

    function MapBattleScreen() {
        if (skeletonKingBeat) {
            return (
                <SafeAreaView style={styles.container}>
                    <Image source={require('./img/battle-bg.png')}
                        resizeMode={'cover'} style={{ width: windowWidth, height: imgHeight, margin: 20 }}
                    />
                    <Image source={require('./img/idleCatFighter.gif')}
                        resizeMode={'cover'} style={{ position: 'absolute', top: 100, left: -20, width: 200, height: 200 }} />
                    <Image source={require('./img/villager5.png')}
                        resizeMode={'cover'} style={{ position: 'absolute', top: 100, left: 190, width: 170, height: 170 }} />
                    <Text style={styles.infoText}>"Thank ye Cat Warrior! Ya saved my skin. But don't stop now. The Skeleton King's twin brother has kidnapped my twin cousin!" - Pirate Captain </Text>
                    <TouchableOpacity style={styles.signinbutton} onPress={() => {
                        skeletonKingBeat = false;
                        navigation.replace('Task');
                    }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 18 }}>Continue</Text>
                    </TouchableOpacity>
                </SafeAreaView>);
        }
        if (wellAreaVisited && houseAreaVisited && caveAreaVisited && treeAreaVisited && crystalAreaVisited) {
            notifyMessage("The Skeleton King found you while you were traveling!");
            currentEnemyName = "THE SKELETON KING";
            neededBattleTP = 100;
            skeletonKingBattle = true;
            return (
                <TouchableOpacity onPress={() => {
                    notifyMessage("You must finish the current quest to return to the map screen.");
                }}><SafeAreaView style={styles.container}>
                        <Image source={require('./img/battle-bg.png')}
                            resizeMode={'cover'} style={{ width: windowWidth, height: imgHeight, margin: 20 }}
                        />
                        <Image source={require('./img/catFighter.gif')}
                            resizeMode={'cover'} style={{ position: 'absolute', top: 100, left: -20, width: 200, height: 200 }} />
                        <SafeAreaView><Image source={require('./img/Skeleton_King.png')}
                            resizeMode={'cover'} style={{ position: 'absolute', top: -270, left: 180, width: 140, height: 235 }} />
                            <Text style={styles.infoText}>"You will never defeat me Cat Warrior. The Pirate Captain is mine. He makes the BEST pies ever. Feel my wrath!" - Skeleton King</Text>
                            <Text style={styles.infoText}>Current Quest:</Text>
                            <Text style={styles.infoText}>Defeat the {currentEnemyName}</Text>
                            <Text style={styles.infoText}>Progress: {battleTP} TP/{neededBattleTP} TP</Text></SafeAreaView>
                    </SafeAreaView>
                    <Animated.View
                        style={[styles.innerStyle, { width: ((battleTP / neededBattleTP) * 100) + "%" },]}
                    />
                </TouchableOpacity>);
        }
        if (!tutorialGiven) {
            return (
                <SafeAreaView style={styles.container}>
                    <Image source={require('./img/battle-bg.png')}
                        resizeMode={'cover'} style={{ width: windowWidth, height: imgHeight, margin: 20 }}
                    />
                    <Image source={require('./img/idleCatFighter.gif')}
                        resizeMode={'cover'} style={{ position: 'absolute', top: 100, left: -20, width: 200, height: 200 }} />
                    <Image source={require('./img/villager4.png')}
                        resizeMode={'cover'} style={{ position: 'absolute', top: 100, left: 190, width: 170, height: 170 }} />
                    <Text style={styles.infoText}>"Cat Warrior we need your help! Our pirate captain has been kidnapped by the scary Skeleton King. We don't know where he is though. Travel to each location to find him. Mark off tasks that you accomplish in the real world in order to fight the forces of evil! Hurry!" - Scared Pirate</Text>
                    <TouchableOpacity style={styles.signinbutton} onPress={() => {
                        tutorialGiven = true;
                        navigation.replace('Task');
                    }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 18 }}>Continue</Text>
                    </TouchableOpacity>
                </SafeAreaView>
            );
        }
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
                        <GetRandomEnemy />
                    </SafeAreaView>
                    <Animated.View
                        style={[styles.innerStyle, { width: ((battleTP / neededBattleTP) * 100) + "%" },]}
                    />
                </TouchableOpacity>);
        }
        if (playerLocation == "well") {
            return (
                <SafeAreaView style={styles.container}>
                    <Image source={require('./img/battle-bg.png')}
                        resizeMode={'cover'} style={{ width: windowWidth, height: imgHeight, margin: 20 }}
                    />
                    <Image source={require('./img/well.png')}
                        resizeMode={'cover'} style={{ position: 'absolute', top: 130, left: 150, width: 100, height: 100 }} />
                    <Image source={require('./img/idleCatFighter.gif')}
                        resizeMode={'cover'} style={{ position: 'absolute', top: 100, left: -20, width: 200, height: 200 }} />
                    <Image source={require('./img/villager1.png')}
                        resizeMode={'cover'} style={{ position: 'absolute', top: 130, left: 250, width: 130, height: 130 }} />
                    <Text style={styles.infoText}>"The Skeleton King's lucky he isn't here or I'd take 'im out with this big bomb on my back. Keep looking!" - Bomb Pirate </Text>
                    <TouchableOpacity style={styles.signinbutton} onPress={() => {
                        playerLocation = "";
                        wellAreaVisited = true;
                        navigation.replace('Task');
                    }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 18 }}>Continue</Text>
                    </TouchableOpacity>
                </SafeAreaView>);
        }
        else if (playerLocation == "house") {
            return (
                <SafeAreaView style={styles.container}>
                    <Image source={require('./img/battle-bg.png')}
                        resizeMode={'cover'} style={{ width: windowWidth, height: imgHeight, margin: 20 }}
                    />
                    <Image source={require('./img/house1.png')}
                        resizeMode={'cover'} style={{ position: 'absolute', top: 20, left: 260, width: 160, height: 200 }} />
                    <Image source={require('./img/idleCatFighter.gif')}
                        resizeMode={'cover'} style={{ position: 'absolute', top: 100, left: -20, width: 200, height: 200 }} />
                    <Image source={require('./img/villager2.png')}
                        resizeMode={'cover'} style={{ position: 'absolute', top: 130, left: 210, width: 130, height: 150 }} />

                    <Text style={styles.infoText}>"Arrgh! I'd chase down that Skeleton King if I had me good leg. Go get 'im fer me!" - Peg Leg Pirate</Text>
                    <TouchableOpacity style={styles.signinbutton} onPress={() => {
                        playerLocation = "";
                        houseAreaVisited = true;
                        navigation.replace('Task');
                    }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 18 }}>Continue</Text>
                    </TouchableOpacity>
                </SafeAreaView>);
        }
        else if (playerLocation == "crystal") {
            return (
                <SafeAreaView style={styles.container}>
                    <Image source={require('./img/battle-bg.png')}
                        resizeMode={'cover'} style={{ width: windowWidth, height: imgHeight, margin: 20 }}
                    />
                    <Image source={require('./img/crystal1.png')}
                        resizeMode={'cover'} style={{ position: 'absolute', top: 20, left: 170, width: 290, height: 240 }} />
                    <Image source={require('./img/idleCatFighter.gif')}
                        resizeMode={'cover'} style={{ position: 'absolute', top: 100, left: -20, width: 200, height: 200 }} />
                    <Image source={require('./img/villager6-2.png')}
                        resizeMode={'cover'} style={{ position: 'absolute', top: 130, left: 160, width: 200, height: 150 }} />

                    <Text style={styles.infoText}>"That Skeleton King could be hiding anywhere. Except here. He's not here. Keep your peepers peeled sonny." - Whale</Text>
                    <TouchableOpacity style={styles.signinbutton} onPress={() => {
                        playerLocation = "";
                        crystalAreaVisited = true;
                        navigation.replace('Task');
                    }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 18 }}>Continue</Text>
                    </TouchableOpacity>
                </SafeAreaView>);
        }
        else if (playerLocation == "cave") {
            return (
                <SafeAreaView style={styles.container}>
                    <Image source={require('./img/battle-bg.png')}
                        resizeMode={'cover'} style={{ width: windowWidth, height: imgHeight, margin: 20 }}
                    />
                    <Image source={require('./img/Cave_enter.png')}
                        resizeMode={'cover'} style={{ position: 'absolute', top: 20, left: 150, width: 320, height: 250 }} />
                    <Image source={require('./img/idleCatFighter.gif')}
                        resizeMode={'cover'} style={{ position: 'absolute', top: 100, left: -20, width: 200, height: 200 }} />
                    <Image source={require('./img/villager3.png')}
                        resizeMode={'cover'} style={{ position: 'absolute', top: 130, left: 190, width: 130, height: 150 }} />

                    <Text style={styles.infoText}> "The Skeleton King isn't in this creepy cave. Thank goodness... he gives me the willies." - Pickle Pirate </Text>
                    <TouchableOpacity style={styles.signinbutton} onPress={() => {
                        playerLocation = "";
                        caveAreaVisited = true;
                        navigation.replace('Task');
                    }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 18 }}>Continue</Text>
                    </TouchableOpacity>
                </SafeAreaView>);
        }
        else if (playerLocation == "tree") {
            return (
                <SafeAreaView style={styles.container}>
                    <Image source={require('./img/battle-bg.png')}
                        resizeMode={'cover'} style={{ width: windowWidth, height: imgHeight, margin: 20 }}
                    />
                    <Image source={require('./img/villager4.png')}
                        resizeMode={'cover'} style={{ position: 'absolute', top: 130, left: 210, width: 140, height: 150 }} />
                    <Image source={require('./img/tree1.png')}
                        resizeMode={'cover'} style={{ position: 'absolute', top: 40, left: 120, width: 150, height: 240 }} />
                    <Image source={require('./img/idleCatFighter.gif')}
                        resizeMode={'cover'} style={{ position: 'absolute', top: 100, left: -20, width: 200, height: 200 }} />


                    <Text style={styles.infoText}>"Oh... hi again. I wasn't hiding in this tree hehe... I was just looking for the Skeleton King. Have you found 'im yet?" - Scared Pirate</Text>
                    <TouchableOpacity style={styles.signinbutton} onPress={() => {
                        playerLocation = "";
                        treeAreaVisited = true;
                        navigation.replace('Task');
                    }}>
                        <Text style={{ color: '#FFFFFF', fontSize: 18 }}>Continue</Text>
                    </TouchableOpacity>
                </SafeAreaView>);
        }
        return (<SafeAreaView style={styles.container}>
            <Image source={require('./img/map-BG.png')}
                resizeMode={'cover'} style={{ width: windowWidth, height: imgHeight, margin: 20 }}
            />
            {/*These are all the locations the player must travel to*/}
            <TouchableOpacity onPress={() => {
                if(treeAreaVisited){
                    notifyMessage("You've already been to this area!");
                }
                else{
                    inABattle = true;
                neededBattleTP = 10;
                playerLocation = "tree";
                navigation.replace('Task');
                notifyMessage("Enemies are attacking you on your way to the next area!");
                }
            }}><Image source={require('./img/tree1.png')}
                resizeMode={'cover'} style={{position: 'absolute', top: -280, left: -40, width: 70, height: 115 }} />
                <GetCheckMarkTree /></TouchableOpacity>
            <TouchableOpacity onPress={() => {
                if(caveAreaVisited){
                    notifyMessage("You've already been to this area!");
                }
                else{
                inABattle = true;
                neededBattleTP = 10;
                playerLocation = "cave";
                navigation.replace('Task');
                notifyMessage("Enemies are attacking you on your way to the next area!");}
            }}><Image source={require('./img/Cave_enter.png')}
                resizeMode={'cover'} style={{ position: 'absolute', top: -300, left: 100, width: 110, height: 90 }} />
                <GetCheckMarkCave />
                </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                if(houseAreaVisited){
                    notifyMessage("You've already been to this area!");
                }
                else{
                inABattle = true;
                neededBattleTP = 10;
                playerLocation = "house";
                navigation.replace('Task');
                notifyMessage("Enemies are attacking you on your way to the next area!");}
            }}><Image source={require('./img/house1.png')}
                resizeMode={'cover'} style={{ position: 'absolute', top: -160, left: 50, width: 80, height: 110 }} />
            <GetCheckMarkHouse />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                if(crystalAreaVisited){
                    notifyMessage("You've already been to this area!");
                }
                else{
                inABattle = true;
                neededBattleTP = 10;
                playerLocation = "crystal";
                navigation.replace('Task');
                notifyMessage("Enemies are attacking you on your way to the next area!");}
            }}><Image source={require('./img/crystal1.png')}
                resizeMode={'cover'} style={{ position: 'absolute', top: -160, left: -190, width: 130, height: 110 }} />
                <GetCheckMarkCrystal /></TouchableOpacity>
            <View>
            <TouchableOpacity onPress={() => {
                if(wellAreaVisited){
                    notifyMessage("You've already been to this area!");
                }
                else{
                inABattle = true;
                neededBattleTP = 10;
                playerLocation = "well";
                navigation.replace('Task');
                notifyMessage("Enemies are attacking you on your way to the next area!");}
            }}><Image source={require('./img/well.png')}
                resizeMode={'cover'} style={{ position: 'absolute', top: -280, left: -180, width: 70, height: 70 }} />
                <GetCheckMarkWell /></TouchableOpacity>
            </View>
            {/*These images below are just for show*/}
            <Image source={require('./img/bush1.png')}
                resizeMode={'cover'} style={{ position: 'absolute', top: 70, left: 110, width: 30, height: 23 }} />
            <Image source={require('./img/bush2.png')}
                resizeMode={'cover'} style={{ position: 'absolute', top: 190, left: 180, width: 40, height: 30 }} />
            <Image source={require('./img/rock1.png')}
                resizeMode={'cover'} style={{ position: 'absolute', top: 40, left: 270, width: 30, height: 30 }} />
            <Image source={require('./img/rock2.png')}
                resizeMode={'cover'} style={{ position: 'absolute', top: 160, left: 350, width: 30, height: 22 }} />
            <Image source={require('./img/rock3.png')}
                resizeMode={'cover'} style={{ position: 'absolute', top: 210, left: 380, width: 20, height: 13 }} />
            <Image source={require('./img/ruins2.png')}
                resizeMode={'cover'} style={{ position: 'absolute', top: 100, left: 20, width: 30, height: 30 }} />
            <Text style={styles.infoText}>World Map</Text>
            <Text style={styles.infoText}>Tap A Location To Travel To</Text>
        </SafeAreaView>);
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
        else if (skeletonKingBattle) {
            if (battleTP >= neededBattleTP) {
                inABattle = false;
                enemyChosen = false;
                battleTP = 0;
                notifyMessage("You defeated the Skeleton King!", "");
                skeletonKingBattle = false;
                skeletonKingBeat = true;
                wellAreaVisited = false;
                crystalAreaVisited = false;
                treeAreaVisited = false;
                caveAreaVisited = false;
                houseAreaVisited = false;
                navigation.replace('Task');
            }
        }
    }

    function undoTPcalculations(valueToAdd) {
        TotalTP = TotalTP - valueToAdd;
        battleTP = battleTP - valueToAdd;
    }


    function PrintInt(IntValue) {
        Alert.alert(IntValue.toString());
    }

    function AddTaskButton() {
        return (
            <TouchableOpacity style={styles.addTaskButton} onPress={() =>
                navigation.replace("Add")}>
                <Icon name='plus' size={30} color='#FFF' />
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={ /*{ flex: 1 }*/ styles.droidSafeArea }>
            <View style={styles.topBar}>

                <TouchableOpacity style={styles.menu}
                    onPress={() => { changeModalVisibilty(true) }}
                >
                    <Icon name='three-bars' size={45} color='#55BCF6' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.menu}
                    onPress={() => {navigation.replace('Home')}}
                >
                    <Icon name='sign-out' size={43} color='#55BCF6' />
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
                ListFooterComponent={<AddTaskButton />}
                renderItem={({ item }) => <View style={styles.item}>
                    <View style={styles.itemLeft}>
                        <TouchableOpacity style={styles.square} onPress={() => {
                            //notifyMessage("Completed!", item.key)
                            showMessage({
                                message: "Task Completed: " + item.key,
                                description: "Want to undo? Click here",
                                type: "info",
                                onPress: () => {
                                    /* THIS FUNC/CB WILL BE CALLED AFTER MESSAGE PRESS */
                                    toDoList.unshift(item)
                                    var index = finishedList.indexOf(item);
                                    if (index !== -1) {
                                        finishedList.splice(index, 1)
                                    }
                                    undoTPcalculations(item.value);
                                    setState(!state);
                                },
                            });
                            finishedList.push(item)
                            var index = toDoList.indexOf(item);
                            if (index !== -1) {
                                toDoList.splice(index, 1)
                            }
                            doTPcalculations(item.value);
                            setState(!state);
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
        paddingTop: 15,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingEnd: 15,
        paddingStart: 15,
        color: '#E7E7E7'
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
        width: 45,
        height: 45,
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
        flexDirection: 'row'
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
    innerStyle: {
        width: "100%",
        height: 31,
        borderRadius: 16,
        backgroundColor: "#42aeef",
    },
    infoText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#55BCF6',
        padding: 15,
    },
    battleText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#55BCF6',
        paddingBottom: 5,
    },
    addTaskButton: {
        backgroundColor: '#87D77A',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10
    },
    addTaskButtonText: {
        color: '#FFFFFF',
        fontSize: 32
    },
    droidSafeArea: {
        flex: 1,
        backgroundColor: `#f6f6f6`,
        paddingTop: Platform.OS === 'android' ? 25 : 0
    }
});

export default TaskComponent;