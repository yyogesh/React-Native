import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, FlexDimensions, Layout, TextInputComponent } from '../components';

export const Home = ({ navigation }) => {
    const style = { width: 200, height: 150 }
    const handleBtnPress = () => {
        // alert("You tapped the button!");
        navigation.navigate('Profile')
    }
    return (
        <View style={styles.container}>
            <Button title="Press me" onPress={handleBtnPress} />
            <Text>Open up App.js to start working on your app!</Text>
            <Text style={styles.red}>Hello this is our red text</Text>
            <Text style={styles.bigBlue}>Hello this is our red text</Text>
            <Text style={[styles.bigBlue, styles.red]}>Hello this is our red text</Text>
            <Text style={{ color: 'green' }}>Hello this is our red text</Text>
            {/* <Dimensions />
            <FlexDimensions />
            <Layout /> */}
            <TextInputComponent />
            <Image source={require('../assets/abc.jpg')} style={style} />
            <Image source={{ uri: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K', cache: 'only-if-cached' }} style={style} />
            <StatusBar style="auto" />
            <ImageBackground source={require('../assets/abc.jpg')} style={style}>
                <Text>Inside</Text>
            </ImageBackground>
            <View style={styles.styleContainer}>
                <Text style={styles.red}>Red text</Text>
            </View>
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
