import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';
import axios from 'axios';

export default function App() {
  let [goal, setgoal] = useState('')
  let [allGoal, setAllGoal] = useState([])
  let [disabled, setDisable] = useState(false)
  let [show, setShow] = useState(false)
  let [token, setToken] = useState('')
  let [Notes, setNotes] = useState([])
  useEffect(() => {
    if (goal !== '') {
      setDisable(false)
    }
    else {
      setDisable(true)
    }
  }, [goal, disabled])


  let goalInputHandler = (enteredText) => {
    setgoal(enteredText)

  }

  let addGoalHandler = (data) => {
    console.log(goal, 'asd')

    setShow(false)
    axios.defaults.headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
    axios.post(`https://fastapi-mongo-test.onrender.com/add_note?name=Daniyal&todo=${data}`, {
      headers: {
        // Overwrite Axios's automatically set Content-Type
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }

    }).then(res => {
      setNotes(res.data.newdata)
    })
  }
  let deleteButton = (val, i) => {

    axios.post(`https://fastapi-mongo-test.onrender.com/delete_note/${i}`).then(res => {
      setNotes(res.data.newdata)
    })

  }
  console.log(allGoal)
  let dummy = ['Learn React Native', 'Learn React Native', 'Learn React Native']
  let ModalHandle = () => {
    console.log('hello')
    setShow(true)
  }
  useEffect(() => {
    axios.get("https://fastapi-mongo-test.onrender.com/login").then(res => {
      let datSa = JSON.parse(res.data.token).access_token
      console.log(datSa)
      setToken(datSa)

    }

    )
  }, [])
  let getdata = () => {
    axios.get("https://fastapi-mongo-test.onrender.com/all_notes").then(res => {
      setNotes(res.data.data)
    })
  }
  useEffect(() => {
    getdata()
  }, [])
  let closeModal = () => {
    setShow(false)
  }
  console.log(Notes, 'asdfasdfasd')
  return (
    <View style={styles.appContainer} >
      <AddItem addgoal={addGoalHandler} showmodal={show} modalfn={closeModal} token={token} />
      {!show && <View style={styles.box2}>
        <Button title='Add New Goal' onPress={ModalHandle} />
        <ScrollView >
          {Notes?.map((val, i) => <ItemList text={val.todo} id={val.id} delete={deleteButton} />)}
        </ScrollView>
      </View>}

    </View >
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: '#311b6b'
  },

  box1: {
    flex: 0.2,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    // backgroundColor: 'red'

  },

  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 10,
    padding: 8,
  },

});
