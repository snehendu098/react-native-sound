import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
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
  const playSound = sound => {
    const soundV = new Sound(sound, Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
    });

    setTimeout(() => {
      soundV.play();
    }, 1000);

    soundV.release();
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.images} />
      <View style={styles.topview}>
        {soundList.map(sound => {
          return (
            <TouchableOpacity
              key={sound}
              onPress={() => playSound(sound)}
              style={styles.box}>
              <Text style={styles.text}>{sound}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c',
  },
  images: {
    alignSelf: 'center',
    marginTop: 10,
  },
  topview: {
    flex: 1,
    margin: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  box: {
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    width: '45%',
    marginVertical: 6,
    backgroundColor: '#0f4c75',
    borderRadius: 10,
    shadowColor: '#393e46',
    elevation: 5,
  },
  text: {
    fontSize: 50,
    color: '#ff4301',
  },
});
