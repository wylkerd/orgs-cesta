import React from "react";
import { StyleSheet, View, FlatList } from 'react-native';

import Texto from "../../components/Texto";

import Detalhes from "./components/Detalhes";
import Item from "./components/Item";
import Topo from './components/Topo'

export default function Cesta({ topo, detalhes, itens }) {

  /* 
    FlatList já é uma scrolll view, e não pode estar dentro de outra scroll view
    com a view pai sendo flex: 1, ela renderizará apenas os itens que estão na tela de rolagem.
  */
  return (
    <>
      <FlatList
        data={itens.lista}
        renderItem={Item}
        keyExtractor={({ nome }, index) => nome + index}
        ListHeaderComponent={() => (
          <>
            <Topo {...topo} />
            <View style={estilos.cesta}>
              <Detalhes {...detalhes} />
              <Texto style={estilos.titulo}>{ itens.titulo }</Texto>
            </View>
          </>
        )}
      />
    </>
  )
}

const estilos = StyleSheet.create({
  titulo: {
    color: '#464646',
    fontWeight: 'bold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16
  }
})