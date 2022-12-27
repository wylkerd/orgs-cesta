import React from 'react';

import { Image, StyleSheet, View } from 'react-native';
import Texto from '../../../components/Texto';

// Item padrão, já sendo desestruturado a captura (nome e imagem)
export default function Item({ item: { nome, imagem }}: any) {

  return (
    <View style={estilos.item}>
      <Image source={imagem} style={estilos.imagem}/>
      <Texto style={estilos.nome}>{ nome }</Texto>
    </View>
  )
}

const estilos = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    paddingVertical: 16,
    marginHorizontal: 16,
    alignItems: 'center'
  },
  imagem: {
    width: 46,
    height: 46,
  },
  nome: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: '#464646'
  }
})