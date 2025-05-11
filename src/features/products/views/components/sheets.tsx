import {registerSheet, SheetDefinition} from 'react-native-actions-sheet';
import CategoriesSheet from './CategoriesSheet';
registerSheet('categories-sheet', CategoriesSheet);

// We extend some of the types here to give us great intellisense
// across the app for all registered sheets.
declare module 'react-native-actions-sheet' {
  interface Sheets {
    'categories-sheet': SheetDefinition<{
      payload: {categoryId: number};
      returnValue: number;
    }>;
  }
}

export {};
