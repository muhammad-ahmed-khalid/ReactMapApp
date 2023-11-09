/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

function App(): JSX.Element {


  return (
 <View style={styles.root}>
  <Text>Start</Text>
 </View>
  );
}

const styles = StyleSheet.create({
 root:{
  flex:1,
  alignItems: 'center',
  justifyContent: 'center'
}
});

export default App;
