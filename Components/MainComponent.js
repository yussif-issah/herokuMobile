import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import LoginComponent from './LoginComponent';
import SignComponent from './SignupComponent';
import { Icon } from 'react-native-elements/dist/icons/Icon';

class MainComponent extends Component{
    constructor(props){
      super(props)
    }
  
  
    render(){
        const Tab = createBottomTabNavigator();


      return (<NavigationContainer>
        <Tab.Navigator
        tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}
          
        >
          <Tab.Screen  options={{tabBarIcon: ({ color, size }) => (
            <Icon name="user" type='font-awesome' color={color} size={size} />
          ),}} name="Login" component={LoginComponent} />
          <Tab.Screen  options={{tabBarIcon: ({ color, size }) => (
            <Icon name="user-plus" type='font-awesome' color={color} size={size} />
          ),}}             name="SignUp" component={SignComponent} />
        </Tab.Navigator>
      </NavigationContainer>)
    }
  
  }

  export default MainComponent