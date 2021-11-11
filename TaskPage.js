import React from "react";
import {FlatList, SafeAreaView, View, StyleSheet, TextInput, Button, Image, Text, TouchableOpacity, Dimensions} from "react-native";
//import CheckBox from '@react-native-community/checkbox';

const TaskComponent = ({navigation}) => {
    const allTasks = [["Do dishes", 2],["Do laundry", 3],["Do hair", 1],["Do homework", 3],["Fix car", 3],["Sleep", 1]];
    const windowWidth = Dimensions.get('window').width;
    const imgHeight = Math.round((windowWidth*11)/16);
    //const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <SafeAreaView style={styles.container}>
            <Image source={require('./img/map.png')}
                resizeMode={'cover'} style={{width: windowWidth, height: imgHeight, margin: 20}}
            />
            <Button 
                title="Go back to home"
                onPress={() =>
                    navigation.replace('Home')}/>
            <SafeAreaView style={styles.flatlist_container}>
            <FlatList
              data={[
                {key: 'Do dishes', value: 2},
                {key: 'Do laundry', value: 3},
                {key: 'Do hair', value: 1},
                {key: 'Do homework', value: 3},
                {key: 'Fix car', value: 3},
                {key: 'Sleep', value: 1},
                {key: 'Eat', value: 2},
                {key: 'Make Dinner', value: 3},
                {key: 'Cry a little', value: 1},
                {key: 'Be happy', value: 2},
                {key: 'Call mom', value: 1},
                {key: 'Call dad', value: 3},
                {key: 'Get new phone', value: 3},
                {key: 'Get new hat', value: 2},
                {key: 'Fix watch', value: 4},
                {key: 'Get hair cut', value: 2},
                {key: 'Watch Inception', value: 1},
              ]}
              renderItem={({item}) => <SafeAreaView><Text style={styles.item}>*checkbox* {item.key} - Difficulty: {item.value}</Text></SafeAreaView>}
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

export default TaskComponent;