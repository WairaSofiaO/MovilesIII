import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Alert, Button} from 'react-native';

export default function App() {
  const saludo = () => {Alert.alert("Bienvenido")};
  // Function que se ejecuta y cambia la variable con el onChangeText
  const [name, setName] = useState("");
  return (
    <View style={styles.container}>

      <View style={styles.row}>
        <Text>{name}</Text>
        <Image style={styles.icon} source={require('./assets/login.png')}></Image>
        <TextInput maxLength={5} style={styles.textInput} placeholder="Usuario" onChangeText={(text)=>setName(text)}></TextInput>
        <Button title="Start" onPress={saludo}></Button>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  icon:{
    width: 100,
    height: 100
  },
  textInput: {
    padding: 5,
    width: 250,
    borderColor: '#ffff',
    color: '#ffff',
    borderWidth: 1
    

  }
});
