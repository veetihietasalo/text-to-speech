import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import * as Speech from 'expo-speech';

const App = () => {
  const [text, setText] = useState('');

  const speakText = () => {
    Speech.speak(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputField}
        placeholder="Kirjoita teksti tähän"
        onChangeText={text => setText(text)}
        value={text}
      />
      <Button title="Puhu teksti" onPress={speakText} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  inputField: {
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    marginBottom: 20,
  },
});

export default App;
