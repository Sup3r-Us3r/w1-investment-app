import { QueryClientProvider } from '@tanstack/react-query';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { queryClient } from './lib/query.ts';
import { InvestmentPage } from './pages/investments/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <InvestmentPage />
    </QueryClientProvider>
  </StrictMode>
);
