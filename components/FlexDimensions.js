import React from 'react'
import { View } from 'react-native';

export const FlexDimensions = () => {
    return (
        <View style={{ flex: 1, display: 'flex', width: '100%' }}>
            <View style={{ flex: 1, backgroundColor: 'powderblue' }}></View>
            <View style={{ flex: 2, backgroundColor: 'skyblue' }}></View>
        </View>
    )
}

