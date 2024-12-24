import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { api } from '@/services/api';
import type { CategoriesProps } from '@/components/categories';

export const useCategories = () => {
  const [categories, setCategories] = useState<CategoriesProps>([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    async function fetchCategories() {
      try {
        const { data } = await api.get('/categories');
        setCategories(data);
        setSelectedCategory(data[0]?.id || '');
      } catch (error) {
        console.error(error);
        Alert.alert('Categorias', 'Não foi possível carregar as categorias');
      }
    }
    fetchCategories();
  }, []);

  return { categories, setSelectedCategory, selectedCategory };
};
