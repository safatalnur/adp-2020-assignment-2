import React, {useState, useEffect, useMemo} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform,
  Button,
  TouchableOpacity,
} from 'react-native';


function Game() {

    // const [randomNumbersArray, setRandomNumbersArray] = useState([])

    // const randomNumbers = () => {
    //     const newRandomNumbers = [...Array(6)].map(()=>1+Math.floor(Math.random()*10));
    //     setRandomNumbersArray(newRandomNumbers);
    //     console.log(setRandomNumbersArray)

    // }
    const randomNumbers = [...Array(6)].map(()=>1+Math.floor(Math.random()*9))
    console.log ('randomNumbers:>>', randomNumbers)

    const targetNumber = 10 + Math.floor(40*Math.random())
    console.log ('targetNumber:>>', targetNumber)

    return (
        <ScrollView style={styles.MainContainer}>
            <View style={styles.container}>
                <Text style={styles.targetNumber}>
                    The target number is ==> {targetNumber}
                </Text>
                <Text>
                    {randomNumbers}
                </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: '#f5f5f5',
    },
    targetNumber: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center', 
        backgroundColor: '#aaa', 
        fontSize: 35,
        marginHorizontal: 50,
        marginTop: 25,
    },

  
})

export default Game
// -------------BACK UP------------------
// import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'


// function Game() {
//     return (
//         <View>
//             <Text>
//                 Here we go
//             </Text>
//         </View>
//     )
// }

// export default Game