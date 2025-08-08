import type { InvestmentsOutput } from '@/http/w1-api/investments/fetch/types';

export type FiltersProps = {
  investments: InvestmentsOutput['data'];
  filters: {
    searchTerm: string;
    institution: string;
    ticket: string;
  };
  setFilter: <K extends keyof FiltersProps['filters']>(
    key: K,
    value: FiltersProps['filters'][K]
  ) => void;
};
