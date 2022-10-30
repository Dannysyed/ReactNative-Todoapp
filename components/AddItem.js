import React, { useState } from 'react'
import { Button, StyleSheet, Text, View, TextInput, ScrollView, Modal, Image } from 'react-native';
const AddItem = (prop) => {
    let [goal, setgoal] = useState('')
    let goalInputHandler = (enteredText) => {
        setgoal(enteredText)

    }
    return (
        <Modal visible={prop.showmodal} animationType='slide'>
            <View style={styles.modalcontainer}>
                <Image style={styles.image} source={require('../assets/images/goal.png')} />

                <View style={styles.inputcontainer}>

                    <TextInput placeholder='Your course goal!' onChangeText={goalInputHandler} style={styles.textInput} />
                </View>
                <View style={styles.buttoncontainer}>
                    <View style={styles.button1}>

                        <Button disabled={false} title='Add Goal' onPress={prop.addgoal.bind(null, goal)} />
                    </View>
                    <View style={styles.button2}>

                        <Button disabled={false} title='Cancel' onPress={prop.modalfn} />
                    </View>

                </View>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    modalcontainer: {
        backgroundColor: '#311b6b',
        alignItems: "center",
        flex: 1,
        justifyContent: 'center'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
        // backgroundColor: 'black'
    },
    inputcontainer: {

        alignSelf: 'stretch'
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'grey',
        backgroundColor: 'white',
        padding: 10,
        margin: 20
    },
    buttoncontainer: {
        display: 'flex',
        flexDirection: 'row',
        // borderWidth: 2,
        justifyContent: 'space-between',
        // margin: 20

    },
    button1: {
        marginRight: 20
    },
    button2: {
        // marginLeft: 30


    }

});

export default AddItem