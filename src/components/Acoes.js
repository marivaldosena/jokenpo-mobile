import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

const Acoes = ({ jokenpo }) => {
  const { acoes, botoes } = estilos;

  return (
    <View style={acoes}>
      <View style={botoes}>
        <Button
          title="pedra"
          onPress={() => jokenpo('pedra')}
        />
      </View>
      <View style={botoes}>
        <Button
          title="papel"
          onPress={() => jokenpo('papel')}
        />
      </View>
      <View style={botoes}>
        <Button
          title="tesoura"
          onPress={() => jokenpo('tesoura')}
        />
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  acoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  botoes: {
    width: 90,
  }
});

export default Acoes;
