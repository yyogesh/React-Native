import React from 'react'
import { View } from 'react-native';

export const Layout = () => {
    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: "space-between" }}>
            <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}></View>
            <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }}></View>
            <View style={{ width: 100, height: 100, backgroundColor: 'skyblue', display: 'flex', justifyContent: "flex-end" }}>
                <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}></View>
            </View>
        </View>
    )
}

