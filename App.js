import { useCallback } from 'react';
import { 
  StatusBar, 
  SafeAreaView, // Assegura para o IOS uma formatação que não quebra a barra de status  superior e inferior
  View
} from 'react-native';
import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat' // 'npx expo install expo-font @expo-google-fonts/nome_da_fonte', ou instale outra manualmente
import Cesta from './src/telas/Cesta';
import mock from './src/mocks/cesta'

import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  // the hook uses Font.loadAsync
  const [fontesCarregadas] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontesCarregadas) {
      await SplashScreen.hideAsync();
    }
  }, [fontesCarregadas]);

  if (!fontesCarregadas) {
    return <View />;
  }

  // utilizando spread operator (...) 
  // para desestruturar o objeto e passar as chaves da desestruturação como se fossem parâmetros da cesta (topo e detalhes).
  return (
    <SafeAreaView onLayout={onLayoutRootView}>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}
