import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.box1}>
        <Text style={styles.text}>View 1</Text>
      </View>

      <View style={styles.box2}>
        <Text style={styles.text}>View 2</Text>
      </View>

      <View style={styles.box3}>
        <Text style={styles.text}>View 3</Text>
      </View>    

      <Text>Open up App.js to start working on your app!</Text>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection : 'column'
  },
  text:{
    color: '#fff',
    fontWeight: 'bold'
  },
  box1:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#757575'
  },
  box2:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#673AB7'
  },
  box3:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#607D8B'
  }
});
