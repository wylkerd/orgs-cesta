import { Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Texto({ children, style }) { // React Native / React já disponibilizam a captura dos filhos na criação do componente
  let estiloPadrao = estilos.texto;

  if (style?.fontWeight === 'bold') {
    estiloPadrao = estilos.textoNegrito;
  }

  return <Text style={[ style, estiloPadrao ]}>{ children }</Text>
}

const estilos = StyleSheet.create({
  texto: {
    fontFamily: 'MontserratRegular',
    fontWeight: 'normal'
  },
  textoNegrito:  {
    fontFamily: 'MontserratBold',
    fontWeight: 'normal' // para dar preferacia ao bold da propria fonte
  }
})