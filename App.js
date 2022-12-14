import { 
  StatusBar, 
  SafeAreaView // Assegura para o IOS uma formatação que não quebra a barra de status  superior e inferior
} from 'react-native';
import Cesta from './src/telas/Cesta';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}
