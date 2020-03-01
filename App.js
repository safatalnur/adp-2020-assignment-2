import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//importing react-navigation
import { NavigationContainer, StackActions} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//importing components
import Home from './src/Home'
import Game from './src/Game'

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App