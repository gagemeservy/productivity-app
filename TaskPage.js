import React from "react";
import {FlatList, SafeAreaView, View, StyleSheet, TextInput, Button, Image, Text, TouchableOpacity, Dimensions} from "react-native";

const TaskComponent = ({navigation}) => {
    const allTasks = [["Do dishes", 2],["Do laundry", 3],["Do hair", 1],["Do homework", 3],["Fix car", 3],["Sleep", 1]];
    const windowWidth = Dimensions.get('window').width;
    const imgHeight = Math.round((windowWidth*11)/16);
    const FlatListBasics = () => {
        return (
          <View style={styles.container}>
            <FlatList
              data={[
                {key: 'Devin'},
                {key: 'Dan'},
                {key: 'Dominic'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Jillian'},
                {key: 'Jimmy'},
                {key: 'Julie'},
              ]}
              renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
          </View>
        );
      }

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
                {key: 'Devin'},
                {key: 'Dan'},
                {key: 'Dominic'},
                {key: 'Jackson'},
                {key: 'James'},
                {key: 'Joel'},
                {key: 'John'},
                {key: 'Jillian'},
                {key: 'Jimmy'},
                {key: 'Julie'},
              ]}
              renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
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