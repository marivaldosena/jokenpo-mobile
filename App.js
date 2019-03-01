/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import {
  View, StyleSheet, Text
} from 'react-native';
import Topo from './src/components/Topo';
import Acoes from './src/components/Acoes';
import Resultado from './src/components/Resultado';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      escolhaUsuario: '',
      escolhaComputador: '',
      resultado: '',
    };
  }

  jokenpo = (escolhaUsuario) => {
    const numAleatorio = Math.floor(Math.random() * 3);
    const opcoes = ['pedra', 'papel', 'tesoura'];
    const escolhaComputador = opcoes[numAleatorio];

    let resultado = '';

    switch (escolhaComputador) {
      case 'pedra': {
        switch (escolhaUsuario) {
          case 'pedra': resultado = 'Empate'; break;
          case 'papel': resultado = 'Você ganhou!'; break;
          case 'tesoura': resultado = 'Você perdeu!'; break;
          default:
        }
        break;
      }
      case 'papel': {
        switch (escolhaUsuario) {
          case 'pedra': resultado = 'Você perdeu!'; break;
          case 'papel': resultado = 'Empate'; break;
          case 'tesoura': resultado = 'Você ganhou!'; break;
          default:
        }
        break;
      }
      case 'tesoura': {
        switch (escolhaUsuario) {
          case 'pedra': resultado = 'Você ganhou!'; break;
          case 'papel': resultado = 'Você perdeu!'; break;
          case 'tesoura': resultado = 'Empate'; break;
          default:
        }
        break;
      }
      default:
    }

    this.setState({
      escolhaUsuario, escolhaComputador, resultado
    });
  }

  render() {
    const { principal } = estilos;
    const {
      escolhaUsuario, escolhaComputador, resultado
    } = this.state;

    return (
      <View style={principal}>
        <Topo />
        <Acoes jokenpo={this.jokenpo} />
        {
          escolhaUsuario ?
          <Resultado
            escolhaUsuario={escolhaUsuario}
            escolhaComputador={escolhaComputador}
            resultado={resultado}
          /> : <Text>.</Text>
        }
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  principal: {
    flex: 1,
    backgroundColor: '#acccaa',
  },
});

export default App;
