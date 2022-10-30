import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, ScrollView } from 'react-native';
import AddItem from './components/AddItem';
import ItemList from './components/ItemList';

export default function App() {
  let [goal, setgoal] = useState('')
  let [allGoal, setAllGoal] = useState([])
  let [disabled, setDisable] = useState(false)
  let [show, setShow] = useState(false)
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
    setAllGoal([...allGoal, data])
    setShow(false)
  }
  let deleteButton = (val, i) => {
    console.log(i)
    setAllGoal(allGoal.filter((_, val) => val !== i))
    console.log(allGoal)
  }
  console.log(allGoal)
  let dummy = ['Learn React Native', 'Learn React Native', 'Learn React Native']
  let ModalHandle = () => {
    setShow(true)
  }
  let closeModal = () => {
    setShow(false)
  }
  return (
    <View style={styles.appContainer} >
      <AddItem addgoal={addGoalHandler} showmodal={show} modalfn={closeModal} />
      {!show && <View style={styles.box2}>
        <Button title='Add New Goal' onPress={ModalHandle} />
        <ScrollView >
          {allGoal.map((val, i) => <ItemList text={val} id={i} delete={deleteButton} />)}
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
