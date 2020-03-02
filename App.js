import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
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
                <Stack.Screen name="Game" component={Game} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App