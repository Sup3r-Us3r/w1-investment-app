import { useFetchInvestments } from '@/http/w1-api/investments/fetch';
import { useMemo, useState } from 'react';

type FiltersState = {
  searchTerm: string;
  institution: string;
  ticket: string;
};

export const useInvestments = () => {
  const { data, isLoading } = useFetchInvestments();

  const [filters, setFilters] = useState<FiltersState>({
    searchTerm: '',
    institution: 'todas',
    ticket: 'todas',
  });

  const setFilter = <K extends keyof FiltersState>(
    key: K,
    value: FiltersState[K]
  ) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredInvestments = useMemo(() => {
    if (!data?.data) return [];

    return data.data.filter((investment) => {
      const { broker, name, ticket } = investment.attributes;

      // Busca textual
      const matchesSearch =
        !filters.searchTerm.trim() ||
        broker.toLowerCase().includes(filters.searchTerm.toLowerCase());

      // Filtro de instituição
      const matchesInstitution =
        filters.institution === 'todas' ||
        name.toLowerCase().includes(filters.institution.toLowerCase());

      // Filtro de ticket
      const matchesTicket =
        filters.ticket === 'todas' ||
        ticket?.toLowerCase() === filters.ticket.toLowerCase();

      return matchesSearch && matchesInstitution && matchesTicket;
    });
  }, [data?.data, filters]);

  return {
    originalInvestments: data?.data || [],
    investments: filteredInvestments,
    isLoading,
    filters,
    setFilter,
  };
};
