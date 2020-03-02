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


function Game(props) {

    const [selectedNumbers, setSelectedNumbers] = useState([])
    const [ selectedNumberValues, setSelectedNumberValues ] = useState([0])


    //Provide an array of 6 random numbers between 1 and 9
    // const randomNumbers = [...Array(6)].map(()=>1+Math.floor(Math.random()*9))
    const [ randomNumbers, setRandomNumbers ] = useState( [...Array(6)].map(()=>1+Math.floor(Math.random()*9)) )

    console.log ('randomNumbers:>>', randomNumbers)

    // randomly select random array of numbers from the randomNumbers array and add them up to get a target number
    // const targetNumber = randomNumbers.slice(Math.floor(Math.random()*5))
    //                                 .reduce((acc, curr) => acc + curr, 0)
    const [ targetNumber, setTargetNumber ] = useState( randomNumbers.slice(Math.floor
    
    (Math.random()*5)).reduce((acc, curr) => acc + curr, 0) )

    console.log ('targetNumber:>>', targetNumber)
    //find the index of selected random number and if selected return boolean info
    function isSelectedNumber (numberIndex) {
        return selectedNumbers.indexOf(numberIndex) >=0
    }

    function selectNumber(numberIndex, numberValue) {
        //Create an  array of selected numbers index value
        setSelectedNumbers(prevState => {
            console.log('selectNumber:>>',prevState, numberIndex)
            return [...prevState, numberIndex]
        })
        //Create an  array of selected numbers actual value
        setSelectedNumberValues(prev => {
            console.log('VALUES =>>', prev, numberValue)
            return [...prev, numberValue]
        })

    }


    return (
        <ScrollView style={styles.MainContainer}>

            {/* display target number for the game */}
            <View style={styles.container}>
                <Text style={styles.targetNumber}>
                    The target number is ==> {targetNumber}
                </Text>
            </View>

            {/* map random numbers and provide properties for those numbers */}
            <View style={styles.randomContainer}>
                {randomNumbers.map((randomNumber, index)=>
                    <NumberButton 
                            key={index} 
                            id={index}
                            number={randomNumber}
                            isDisabled = {isSelectedNumber(index)}
                            onPress = {selectNumber}
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