import {useQuery} from '@tanstack/react-query';
import {useCallback, useState} from 'react';
import {SheetManager} from 'react-native-actions-sheet';

import {
  getAllProducts,
  getProductByCategoryId,
} from '../services/productService';

export const useProductViewModel = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number>(1);

  const {data: allProducts, isLoading: isLoadingAll} = useQuery({
    queryKey: ['products'],
    queryFn: getAllProducts,
    staleTime: 1000 * 60 * 5,
  });

  const {
    data: filteredProducts,
    isLoading: isLoadingFiltered,
    isError: isErrorFiltered,
  } = useQuery({
    queryKey: ['productsByCategoryId', selectedCategoryId],
    queryFn: () => getProductByCategoryId(selectedCategoryId),
    enabled: !!selectedCategoryId,
    staleTime: 1000 * 60 * 5,
  });

  // ⬇️ Відкриває шіт, чекає вибір, оновлює категорію
  const openCategorySheet = useCallback(async () => {
    const result = await SheetManager.show('categories-sheet', {
      payload: {categoryId: selectedCategoryId},
    });
    if (result) {
      setSelectedCategoryId(result);
    }
  }, [selectedCategoryId]);

  return {
    allProducts: filteredProducts || allProducts,
    filteredProducts,
    selectedCategoryId,
    openCategorySheet,
    isLoadingAll,
    isLoadingFiltered,
    isErrorFiltered,
  };
};
