import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { NativeScreenNavigationContainer} from "react-native-screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginComponent from './LoginPage';
import RegisterComponent from './RegisterPage';
import TaskComponent from './TaskPage';
import InventoryComponent from './InventoryPage';

//import styled from "styled-components"

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
      /*<View style={styles.container}>
        <TouchableOpacity style={styles.button}
                          onPress={this.onPress}>
          <Text>Click me</Text>
        </TouchableOpacity>
        <View>
          <Text>You clicked {this.state.count } times</Text>
        </View>
      </View>*/
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home"
            component={HomeScreen}
            options={{title: 'Welcome'}}
            />
            <Stack.Screen name="Login" component={LoginComponent}/>
            <Stack.Screen name="Register" component={RegisterComponent}/>
            <Stack.Screen name="Task" component={TaskComponent}/>
            <Stack.Screen name="Inventory" component={InventoryComponent}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const HomeScreen = ({navigation}) => {
  return (
    <Button style={styles.button} title="Sign In"
    onPress={() =>
      navigation.replace('Login')
    }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  }
});

export default App;
