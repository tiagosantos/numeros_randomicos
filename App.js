/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const geraNumeroAleatorio = () => {
  let numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 10);
  alert(numeroAleatorio);
};
type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text>Gerador de números randômicos</Text>
        <TouchableOpacity
          style={styles.Btn}
          onPress={geraNumeroAleatorio}
        >
          <Text style={styles.BtnText}>Gerar número randômico</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  BtnText: {
    color: '#fff'
  },
  Btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#841584',
    padding: 10,
  },
});
