import { 
  StatusBar, 
  SafeAreaView, // Assegura para o IOS uma formatação que não quebra a barra de status  superior e inferior
  View
} from 'react-native';
import Cesta from './src/telas/Cesta';
import { 
  useFonts, 
  Montserrat_400Regular, 
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat' // 'npx expo install expo-font @expo-google-fonts/nome_da_fonte', ou instale outra manualmente

export default function App() {

  // the hook uses Font.loadAsync
  const [fontesCarregadas] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if (!fontesCarregadas) {
    return <View />;
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}
