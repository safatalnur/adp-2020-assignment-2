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

import NumberButton from './NumberButton';


function Game() {

    // const [randomNumbersArray, setRandomNumbersArray] = useState([])

    // const randomNumbers = () => {
    //     const newRandomNumbers = [...Array(6)].map(()=>1+Math.floor(Math.random()*10));
    //     setRandomNumbersArray(newRandomNumbers);
    //     console.log(setRandomNumbersArray)

    // }
    const randomNumbers = [...Array(6)].map(()=>1+Math.floor(Math.random()*9))
    console.log ('randomNumbers:>>', randomNumbers)

    // const targetNumber = 10 + Math.floor(40*Math.random())
    const targetNumber = randomNumbers.slice(Math.floor(Math.random()*5))
                                    .reduce((acc, curr) => acc + curr, 0)

    console.log ('targetNumber:>>', targetNumber)

    return (
        <ScrollView style={styles.MainContainer}>
            <View style={styles.container}>
                <Text style={styles.targetNumber}>
                    The target number is ==> {targetNumber}
                </Text>
            </View>
            
            <View style={styles.randomContainer}>
                {randomNumbers.map((randomNumber, index)=>
                    <NumberButton 
                            key={index} 
                            id={index}
                            number={randomNumber}
                    />
                )}
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

    randomContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around', 
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