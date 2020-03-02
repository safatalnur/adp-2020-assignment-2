import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
} from 'react-native';

import NumberButton from './NumberButton';


function Game() {

    const [selectedNumbers, setSelectedNumbers] = useState([])
    const [ selectedNumberValues, setSelectedNumberValues ] = useState([0])
    const [ sumSelected, setSumSelected ] = useState(0)
    const [ gameStatus, setGameStatus ] = useState('PLAYING')
    const [timer, setTimer] = useState(10)
    const [startCounter, setStartCounter] = useState(true)
    const [ resetCount, setResetCount ] = useState(0)

    //Provide an array of 6 random numbers between 1 and 9
    const [ randomNumbers, setRandomNumbers ] = useState( [...Array(6)].map(()=>1+Math.floor(Math.random()*9)) )

    // randomly select random array of numbers from the randomNumbers array and add them up to get a target number
    const [ targetNumber, setTargetNumber ] = useState( randomNumbers.slice(Math.floor
    
    (Math.random()*5)).reduce((acc, curr) => acc + curr, 0) )

    //find the index of selected random number and if selected return boolean info
    function isSelectedNumber (numberIndex) {
        return selectedNumbers.indexOf(numberIndex) >=0
    }

    function selectNumber(numberIndex, numberValue) {
        //Create an  array of selected numbers index value
        setSelectedNumbers(prevState => {
            return [...prevState, numberIndex]
        })
        //Create an  array of selected numbers actual value
        setSelectedNumberValues(prev => {
            return [...prev, numberValue]
        })
    }

    //Add the values of selected numbers
    useEffect(()=> {
        const sum = selectedNumberValues.reduce((acc, curr) => acc + curr)
        setSumSelected(sum)
    }, [selectedNumbers])

    //Declare game status
    useEffect(() => {
        
        if (sumSelected < targetNumber) {
            setGameStatus('PLAYING')
        }
        if (sumSelected === targetNumber) {
            setGameStatus('WON')
        }
        if (sumSelected > targetNumber) {
            setGameStatus('LOST')
        }
        if (timer === 0) {
            setGameStatus('LOST')
        }
    }, [sumSelected, timer])

    //Game timer function
    useEffect(() => {
        startCounter && setInterval(() => {
            setTimer(prev => { 
                if (prev <= 0){
                    return 0
                }
                return prev - 1
            })    
        }, 1000)
    }, [startCounter])

    //Set everything back to initial state for reset button to work
    const reset = () => {
        setGameStatus("PLAYING")
        setSelectedNumbers([])
        setSelectedNumberValues([0])
        setRandomNumbers([...Array(6)].map(()=>1+Math.floor(Math.random()*9)))
        setTimer(10)
        setSumSelected(0)
        setResetCount(prev => prev + 1)
    }

    //setRandomNumbers need to be run completely before setTargetNumber can run
    useEffect(() => {
        setTargetNumber(randomNumbers.slice(Math.floor(Math.random()*5)).reduce((acc, curr) => acc + curr, 0))
    }, [resetCount])


    return (
        <ScrollView style={styles.MainContainer}>

            {/* display target number for the game */}
            <View style={styles.container}>
                <Text style={[styles.targetNumber, styles[`STATUS_${gameStatus}`]]}>
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
                            isDisabled = {isSelectedNumber(index) || gameStatus!== 'PLAYING'}
                            onPress = {selectNumber}
                    />
                )}
            </View>

            <View style={styles.timer}>
                <Text style={styles.timerText}>
                    You have {timer} seconds to get it right
                </Text>
            </View>

            <View>
                <Button onPress={reset}
                    title= 'RESET'>
                </Button>      
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

    STATUS_PLAYING: {
        backgroundColor: '#bbb'
    },
    STATUS_WON: {
        backgroundColor: 'green'
    },
    STATUS_LOST: {
        backgroundColor: 'red'
    },
    
    timer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
    },

    timerText: {
        fontSize: 25,
        color: 'blue',
        fontWeight: 'bold',
    },
})

export default Game