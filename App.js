// App.js
import React, { useState } from "react";
import { Image, View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import images from './images.js';

function App() {
  const [numero, setNumero] = useState('');

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Meu número amigo</Text>
      <Picker
        selectedValue={numero}
        onValueChange={(value, index) => setNumero(value)}
        mode="dropdown"
        style={styles.picker}
      >
        <Picker.Item label="Quem é seu amigo?" value="" />
        <Picker.Item label="1" value="1"/>
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3"/>
        <Picker.Item label="4" value="4"/>
        <Picker.Item label="5" value="5"/>
        <Picker.Item label="6" value="6"/>
        <Picker.Item label="7" value="7"/>
        <Picker.Item label="8" value="8"/>
        <Picker.Item label="9" value="9"/>
        <Picker.Item label="10" value="10"/>
      </Picker>
            <Image style={styles.tinyLogo} source={images[numero]}/>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'white'
  },
  text: {
    fontSize: 20,
    width: 300,
  },
  tinyLogo: {
    height: 200,
    width: 150,
  },
  title: {
    fontSize: 28,
    width: 300,
    textAlign: 'center',
    paddingBottom: 20,
  },
  picker: {
    fontSize: 30,
    marginVertical: 30,
    width: 300,
    padding: 10,
    borderWidth: 1,
    borderColor: "#666",
  },
});