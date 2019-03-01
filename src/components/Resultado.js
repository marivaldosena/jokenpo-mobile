import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import iconePedra from '../images/pedra.png';
import iconePapel from '../images/papel.png';
import iconeTesoura from '../images/tesoura.png';

const Resultado = ({
  escolhaComputador, escolhaUsuario, resultado
}) => {
  const { palco, textoResultado, texto } = estilos;
  return (
    <View style={palco}>
      <Text style={textoResultado}>{resultado}</Text>
      <Text style={texto}>Computador: </Text>
      <Icone escolha={escolhaComputador} />
      <Text style={texto}>Você: </Text>
      <Icone escolha={escolhaUsuario} />
    </View>
  );
};

const Icone = ({ escolha }) => {
  const { icone } = estilos;

  switch (escolha) {
    case 'pedra': return <Image style={icone} source={iconePedra} />;
    case 'papel': return <Image style={icone} source={iconePapel} />;
    case 'tesoura': return <Image style={icone} source={iconeTesoura} />;
    default: return <Text style={icone}>.</Text>;
  }
};

const estilos = StyleSheet.create({
  palco: {
    alignItems: 'center',
  },
  textoResultado: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 45,
  },
  texto: {
    fontSize: 20,
    padding: 5,
  },
  icone: {
    width: 80,
    height: 80,
    marginBottom: 10
  }
});

export default Resultado;
