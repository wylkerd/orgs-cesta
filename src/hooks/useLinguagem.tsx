import React, { useState, createContext, ReactNode } from 'react'
import cesta, { ILang, ICestaTextos } from '../mocks/cesta'
import { useContext } from 'react'

interface IProviderProps {
  initalState?: keyof ILang,
  children: ReactNode
}

interface ILanguageContextData {
  textosLingua: ICestaTextos | undefined,
  setLingua: React.Dispatch<React.SetStateAction<keyof ILang>>,
}

const languageDictionary = (key: keyof ILang) => cesta[key]

const LanguageContext = createContext<ILanguageContextData>({} as ILanguageContextData)

function LanguageProvider({ initalState = "ptBr", children }: IProviderProps) {
  const [lingua, setLingua] = useState<keyof ILang>(initalState)

  return(
    <LanguageContext.Provider
      value={{
        textosLingua: languageDictionary(lingua),
        setLingua,
      }}
    >
      { children }
    </LanguageContext.Provider>
  )
}

function useLinguagem() {
  const context = useContext(LanguageContext);

  return context;
}

export { LanguageProvider, useLinguagem }