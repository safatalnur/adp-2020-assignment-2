import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
// import navigation dependencies
import { NavigationContainer, StackActions} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//import Game page
import Game from '../src/Game'

function Home ({navigation}) {

  return (
    <View style={styles.container}>
        <Text style={styles.homeText}>
            ARE YOU READY TO TAKE ON SOME MATH CHALLENGES ????
        </Text>
        {/* Create a button linked to Game component */}
        <Button
            title="CLICK HERE TO TAKE THE CHALLENGE!!!!!"
            onPress= {()=> navigation.navigate('Game')}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },

  homeText: {
      color: '#ffffff',
      fontSize: 30,
      textAlign: 'center',
  },
});

export default Home