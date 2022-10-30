import React from 'react'
// import { Text, View } from 'react-native'
import { Button, StyleSheet, Text, View, TextInput, ScrollView, Pressable } from 'react-native';

const ItemList = (prop) => {
    let handlepress = () => {
        // alert('asfd')
        prop.delete(prop.text, prop.id)
    }
    return (
        <View style={styles.itemBody}>
            <Pressable onPress={handlepress} android_ripple={{ color: '#dddddd' }}>

                <Text style={styles.box2_body_text}> {prop.text}</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    itemBody: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc'
    },
    box2_body_text: {
        textTransform: 'capitalize',
        padding: 8,
        color: 'white'
    }
});

export default ItemList