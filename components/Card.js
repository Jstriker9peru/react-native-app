import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ children, style }) => {
    return (
        <View style={{...styles.card, ...style}}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        elevation: 5,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    }
})

export default Card;
