import React, {useState } from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

function NumberButton(props) {

    function handleRandomPress() {                                  

    }
        return (
        <View>
            <TouchableOpacity onPress={handleRandomPress}>
                <Text style={styles.randomItems}>
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
    }

})

export default NumberButton