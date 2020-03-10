import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

    {/* ----- Ejercicio Cuadritos ---- */}
      {/* <View style={styles.row}>

        <View style={styles.box1}>
          <Text style={styles.text}>View 1</Text>
        </View>

        <View style={styles.box2}>
          <Text style={styles.text}>View 2</Text>
        </View>

        <View style={styles.box3}>
          <Text style={styles.text}>View 3</Text>
        </View>

        <View style={styles.box4}>
          <Text style={styles.text}>View 4</Text>
        </View>

        <View style={styles.box5}>
          <Text style={styles.text}>View 5</Text>
        </View>

        <View style={styles.box6}>
          <Text style={styles.text}>View 6</Text>
        </View>
      </View> */}



    {/* ------ Ejercicio 2 ------ */}

      <View style={styles.column}>
        <Image source={require('./assets/login.png')}></Image>

        <Text style={styles.title}>Company Name</Text>

        <TextInput style={styles.inputs} placeholder="Username or email"></TextInput>

        <TextInput style={styles.inputs} placeholder="Password"></TextInput>

        <Button title='GET STARTED'></Button>


      </View>
      <View style={styles.row2}>
        <Text style={styles.text}>Create Account</Text>
        <Text style={styles.text}>Forgot Password</Text>

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
  text:{
    color: '#fff',
    padding:25
  },
  row:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#757575',
    flexDirection:'row',
    flexWrap: 'wrap'
  },
  box1:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#673AB7',
    padding: 50,
    margin: 50
  },
  box2:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000099',
    padding: 50,
    margin: 50

  },
  box3:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#990000',
    padding: 50,
    margin: 50
  },
  box4:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F8FF',
    padding: 50,
    margin: 50
  },
  box5:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFE0',
    padding: 50,
    margin: 50
  },
  box6:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#AFEEEE',
    padding: 50,
    margin: 50
  },

  column:{
    flex:10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#757575',
    flexDirection:'column',
    
  },




  icon:{
    width:'200px'
  },
  title:{
    color: '#fff',
    fontWeight: 'bold',
    fontSize:30,
    paddingBottom:50
  },
  inputs:{
    borderColor:'#fff',
    borderWidth:1,
    borderRadius: 25,
    padding:10,
    marginBottom:15,
    width:400


  },
  row2:{
    flex:2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#757575',
    flexDirection:'row',
    flexWrap:'wrap'
  }



});
