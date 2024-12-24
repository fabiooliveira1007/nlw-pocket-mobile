import { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { api } from '@/services/api';
import type { MarketsProps } from '@/types';

export const useMarkets = (category: string) => {
  const [markets, setMarkets] = useState<MarketsProps[]>([]);

  useEffect(() => {
    async function fetchMarkets() {
      try {
        if (!category) return;
        const { data } = await api.get(`/markets/category/${category}`);
        setMarkets(data);
      } catch (error) {
        console.error(error);
        Alert.alert('Locais', 'Não foi possível carregar os locais.');
      }
    }
    fetchMarkets();
  }, [category]);

  return { markets };
};
