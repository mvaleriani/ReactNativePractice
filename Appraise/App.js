import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>Testing Text</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(to bottom, #6A82FB, #FC5C7D)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
