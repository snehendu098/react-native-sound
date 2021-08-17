import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import Sound from 'react-native-sound';

const soundList = [
  require('./assets/one.wav'),
  require('./assets/two.wav'),
  require('./assets/three.wav'),
  require('./assets/four.wav'),
  require('./assets/five.wav'),
  require('./assets/six.wav'),
  require('./assets/seven.wav'),
  require('./assets/eight.wav'),
  require('./assets/nine.wav'),
  require('./assets/ten.wav'),
];

const App = () => {
  return (
    <ScrollView>
      <Image source={require('./assets/logo.png')} />
      <View></View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({});
