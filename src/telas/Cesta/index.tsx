import React from "react";
import { StyleSheet, View, FlatList } from 'react-native';

import Texto from "../../components/Texto";
import { useLinguagem } from "../../hooks/useLinguagem";
import { IDetalhes, IItens, ITopo } from "../../mocks/cesta";

import Detalhes from "./components/Detalhes";
import Item from "./components/Item";
import Topo from './components/Topo'

export default function Cesta() {
  const { textosLingua } = useLinguagem()

  /* 
    FlatList já é uma scrolll view, e não pode estar dentro de outra scroll view
    com a view pai sendo flex: 1, ela renderizará apenas os itens que estão na tela de rolagem.
  */
  return (
    <>
      <FlatList
        data={textosLingua?.itens?.lista}
        renderItem={Item}
        keyExtractor={({ nome }, index) => nome + index}
        ListHeaderComponent={() => (
          <>
            <Topo {...textosLingua?.topo} />
            <View style={estilos.cesta}>
              <Detalhes {...textosLingua?.detalhes} />
              <Texto style={estilos.titulo}>{ textosLingua?.itens?.titulo }</Texto>
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