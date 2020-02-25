import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.row}>
        <View style={styles.box1}>
            <Text style={styles.text}>1</Text>
        </View>
        <View style={styles.box2}>
          <Text>2</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.box3}>
        <Text>3</Text>
        </View>
        <View style={styles.box4}>
        <Text>4</Text>
        </View>
      </View>

      

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
  row:{
    flex:1,
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#757775',
    flexDirection: 'row',
  },

  box1:{
    flex:1,
    backgroundColor:'#ffff',
  },
  box2:{
    flex:1,
  },
  box3:{
    flex:1,
    backgroundColor:'#4577',
 
  },
  box4:{
    flex:1,
    backgroundColor:'#9876',
    justifyContent:'space-between'
  },
  text:{
    alignItems: 'center',
    justifyContent: 'center',
  }
});
