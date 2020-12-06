import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, FlexDimensions, Layout, TextInputComponent } from '../components';

export const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Text style={styles.red}>Hello this is our red text</Text>
            <Text style={styles.bigBlue}>Hello this is our red text</Text>
            <Text style={[styles.bigBlue, styles.red]}>Hello this is our red text</Text>
            <Text style={{ color: 'green' }}>Hello this is our red text</Text>
            {/* <Dimensions />
            <FlexDimensions />
            <Layout /> */}
            <TextInputComponent />
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
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
