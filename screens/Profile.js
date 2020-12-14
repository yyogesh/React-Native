import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, FlexDimensions, Layout, TextInputComponent } from '../components';

export const Profile = () => {
    const style = { width: 200, height: 150 }
    const handleBtnPress = () => {
        alert("You tapped the button!");
    }
    return (
        <View style={styles.container}>
            <Button title="Profile page" onPress={handleBtnPress} />
            <Text>Open up App.js to start working on your app!</Text>
            <Text style={styles.red}>Hello this is our red text</Text>
            <Text style={styles.bigBlue}>Hello this is our red text</Text>
            <Text style={[styles.bigBlue, styles.red]}>Hello this is our red text</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    styleContainer: {
        marginTop: 50
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    red: {
        color: 'red'
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30
    }
});
