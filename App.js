import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Button, ImageBackground, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginComponent from './LoginPage';
import RegisterComponent from './RegisterPage';
import TaskComponent from './TaskPage';
import { ModalPicker } from './ModalPicker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import finishedTaskComponent from './CompleteTaskPage';
import AddTaskComponent from './AddTaskPage';

const Stack = createNativeStackNavigator();

global.toDoList=[
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
];

global.inABattle = false;
global.TotalTP = 0;
global.battleTP = 0;
global.neededBattleTP = 10;

global.finishedList=[];

class App extends Component {
  state = {
    count: 0
  }

  onPress = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home"
            component={HomeScreen}
            
            />
            <Stack.Screen name="Login" component={LoginComponent}/>
            <Stack.Screen name="Register" component={RegisterComponent}/>
            <Stack.Screen name="Task" component={TaskComponent}/>
            <Stack.Screen name="Add" component={AddTaskComponent}/>
            <Stack.Screen name="ModalPicker" component={ModalPicker}/>
            <Stack.Screen name="Finished" component={finishedTaskComponent}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const HomeScreen = ({navigation}) => {
  return (
    <ImageBackground source={require('./img/Background.png')} resizeMode="cover" style=
        {styles.image}>
    <View style={styles.container}>
      <Text style={styles.title}>Goal Adventure</Text>
      <TouchableOpacity style={styles.button}
        onPress={ () => {
          navigation.replace('Login')
        }}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}
        onPress={ () => {
          navigation.replace('Register')
        }}>
        <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 50,
    width: 308,
    margin: 12,
    backgroundColor: '#71A0FC',
    borderRadius: 22,
    color: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText:{ 
    color: '#FFFFFF', fontSize: 18
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  title: {
    fontSize: 48,
    color: '#FFFFFF',
    fontWeight: 'bold',
    margin: 12
  }
});

export default App;
