import { useFetchInvestments } from '@/http/w1-api/investments/fetch';
import { useMemo, useState } from 'react';

export const useInvestments = () => {
  const { data, isLoading } = useFetchInvestments();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredInvestments = useMemo(() => {
    if (!data?.data) return [];

    if (!searchTerm.trim()) {
      return data.data;
    }

    return data.data.filter((investment) =>
      investment.attributes.broker
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
  }, [data?.data, searchTerm]);

  return {
    investments: filteredInvestments,
    isLoading,
    searchTerm,
    setSearchTerm,
  };
};
