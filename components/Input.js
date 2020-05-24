import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = (props, { style }) => {
    return (
        <TextInput {...props} style={{...styles.input, ...style}} />
    )
}

const styles = StyleSheet.create({
    input: {
        width: 50,
        height: 30,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 20
    }
})

export default Input;
