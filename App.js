import { Button, StyleSheet, Switch, Text, TextInput, View } from 'react-native';
import React from 'react';

export default function App() {
  const [val, setVal] = React.useState('placeholder');
  
  return (
    <View style={styles.container}>
      <TextInput style={styles.edit} 
      clearTextOnFocus="true" 
      onChangeText={text => setVal(text)}
      ></TextInput>

      <Text style={styles.textView}>{val}</Text>

      <Button title="Clear" onPress={() => setVal('')}></Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textView:{
    color:'black',
    alignItems:'center',
    fontSize:15,
    // borderWidth:3,
    // borderColor:'red'
  },
  edit:{
    borderColor:'#000',
    borderWidth:2,
    width:'90%',
    // padding:20,
    borderRadius:4,
    fontSize:17,
    
  }
});
