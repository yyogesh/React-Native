import React from 'react'
import { View, TextInput } from 'react-native';

export const TextInputComponent = () => {
    return (
        <View style={{ padding: 10 }}>
            <TextInput style={{ height: 40 }} placeholder="Type here" />
        </View>
    )
}
