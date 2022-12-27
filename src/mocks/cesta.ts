import {
  logo,
  tomate,
  abobora,
  batata,
  brocolis,
  pepino
} from '../constants/images';

export interface ILang {
  ptBr: ICestaTextos,
  en: ICestaTextos,
}

export interface ICestaTextos {
  topo: ITopo,
  detalhes: IDetalhes,
  itens: IItens
}

export interface ITopo {
  titulo: string
}

export interface IDetalhes {
  nome: string,
  logoFazenda: any,
  nomeFazenda: string,
  descricao: string,
  preco: string,
  botao: string,
}

export interface IItens {
  titulo: string,
  lista: IItem[]
}

export interface IItem {
  nome: string,
  imagem: any
}

const cesta: ILang = {
  ptBr: {
    topo: {
      titulo: "Detalhe da cesta",
    },
    detalhes: {
      nome: "Cesta de Verduras",
      logoFazenda: logo,
      nomeFazenda: "Jenny Jack Farm",
      descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
      preco: "R$ 40,00",
      botao: "Comprar",
    },
    itens: {
      titulo: "Itens da cesta",
      lista: [
        {
          nome: "Tomate",
          imagem: tomate,
        },
        {
          nome: "Brócolis",
          imagem: brocolis,
        },
        {
          nome: "Batata",
          imagem: batata,
        },
        {
          nome: "Pepino",
          imagem: pepino,
        },
        {
          nome: "Abóbora",
          imagem: abobora,
        }
      ]
    }
  },
  en: {
    topo: {
      titulo: "Detalhe da cesta",
    },
    detalhes: {
      nome: "Cesta de Verduras",
      logoFazenda: logo,
      nomeFazenda: "Jenny Jack Farm",
      descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
      preco: "R$ 40,00",
      botao: "Comprar",
    },
    itens: {
      titulo: "Itens da cesta",
      lista: [
        {
          nome: "Tomate",
          imagem: tomate,
        },
        {
          nome: "Brócolis",
          imagem: brocolis,
        },
        {
          nome: "Batata",
          imagem: batata,
        },
        {
          nome: "Pepino",
          imagem: pepino,
        },
        {
          nome: "Abóbora",
          imagem: abobora,
        }
      ]
    }
  }
}

export default cesta;