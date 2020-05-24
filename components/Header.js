import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import Colors from '../constants/colors';
import TitleText from './TitleText';

const Header = ({ title }) => {
    return (
        <View style={{ ...styles.baseHeader, ...Platform.select({
            ios: styles.headerIOS,
            android: styles.headerAndroid
        })}}>
            <TitleText style={styles.title}>{title}</TitleText>
        </View>
    )
};

const styles = StyleSheet.create({
    baseHeader: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
        // borderBottomWidth: Platform.OS === 'ios' ? '#ccc' : 'transparent',
        // borderBottomWidth: Platform.OS === 'ios' ? 1 : 0
    },
    headerIOS: {
        backgroundColor: 'white',
        borderBottomWidth:'#ccc',
        borderBottomWidth: 1
    },
    headerAndroid: {
        backgroundColor: 'white',
    },
    title: {
        color: Platform.OS === 'ios' ? Colors.primary : 'white'
    }
})

export default Header;
