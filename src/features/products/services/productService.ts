import axios from '../../../api/apiClient';
import {Product} from '../models/Product';

export const getAllProducts = async (): Promise<Product[]> => {
  const response = await axios.get<Product[]>('/products');
  return response.data;
};

export const getProductByCategoryId = async (
  categoryId: number,
): Promise<Product[]> => {
  const response = await axios.get<Product[]>(
    `categories/${categoryId}/products`,
  );
  return response.data;
};
