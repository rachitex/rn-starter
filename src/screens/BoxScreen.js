import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.parentStyle}>
            <View style={styles.viewOneStyle} />
            <View style={styles.viewTwoStyle} />
            <View style={styles.viewThreeStyle} />
        </View>
    );
};

const styles = StyleSheet.create({
    parentStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewOneStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'red'
    },
    viewTwoStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        alignSelf: 'flex-end'
        // ...StyleSheet.absoluteFillObject is equivalent to below 5 properties altogether
        // position: 'absolute',   
        // top: 0,
        // right: 0,
        // bottom: 0,
        // left: 0

    },
    viewThreeStyle: {
        height: 50,
        width: 50,
        backgroundColor: 'purple'
    }
});

export default BoxScreen;