import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

function NumberButton(props) {
    //handle each random number when pressed
    function handleRandomPress() {                                  
        // disable selected number once selected
        if (props.isDisabled) {
            return
        }
        //If random number is not selected then run this
        {props.onPress(props.id, props.number)}
    }
        return (
        // Organize and display 6 randomly selected numbers
        <View>
            <TouchableOpacity onPress={handleRandomPress}>
                <Text style={[styles.randomItems, props.isDisabled && styles.disabled]}>
                    {props.number}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    randomItems: {
        width: 150,
        height: 150,
        borderWidth: 1,
        margin: 15,
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 35,
        paddingTop: 50,
        backgroundColor: '#aaa',
    },

    disabled: {
        opacity: 0.3
    },
})

export default NumberButton