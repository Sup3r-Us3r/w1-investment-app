import { useQuery } from '@tanstack/react-query';
import type { InvestmentsOutput } from './types';

export function useFetchInvestments() {
  return useQuery<InvestmentsOutput>({
    queryKey: ['investments'],
    queryFn: async () => {
      const response = await fetch(
        'https://gist.githubusercontent.com/Sup3r-Us3r/e1fcf7ac76ceb5e449013e03f30c2ad6/raw/197e1ee0ffbf0ee10697794dcbb6f373fe1240b2/gistfile1.txt'
      );

      if (!response.ok) {
        throw new Error('Failed to fetch investments');
      }

      return response.json();
    },
  });
}
