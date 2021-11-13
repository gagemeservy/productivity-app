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

const Stack = createNativeStackNavigator();

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
            <Stack.Screen name="ModalPicker" component={ModalPicker}/>
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
