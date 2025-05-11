import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import ProductListScreen from './src/features/products/views/screens/ProductListScreen';
import {SheetProvider} from 'react-native-actions-sheet';
import './src/features/products/views/components/sheets.tsx';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const queryClient = new QueryClient();

export default function App() {
  return (
    <SheetProvider>
      <QueryClientProvider client={queryClient}>
        <GestureHandlerRootView style={{flex: 1}}>
          <ProductListScreen />
        </GestureHandlerRootView>
      </QueryClientProvider>
    </SheetProvider>
  );
}
