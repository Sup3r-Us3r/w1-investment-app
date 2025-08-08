/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { InvestmentPage } from './';

vi.mock('./hooks/use-investments', () => ({
  useInvestments: vi.fn(),
}));

vi.mock('../../components/filters', () => ({
  Filters: ({ filters }: { filters: any }) => (
    <div data-testid="filters">{JSON.stringify(filters)}</div>
  ),
}));
vi.mock('../../components/investment-card', () => ({
  InvestmentCard: ({ bankName }: { bankName: string }) => (
    <div data-testid="investment-card">{bankName}</div>
  ),
}));
vi.mock('../../components/aside-inner', () => ({
  AsideInner: () => <aside data-testid="aside-inner" />,
}));
vi.mock('../../components/header', () => ({
  Header: () => <header data-testid="header" />,
}));
vi.mock('../../components/mobile-header', () => ({
  MobileHeader: () => <div data-testid="mobile-header" />,
}));

import { useInvestments } from './hooks/use-investments';

describe('InvestmentPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render empty message when there are no investments', () => {
    (useInvestments as any).mockReturnValue({
      isLoading: false,
      originalInvestments: [],
      investments: [],
      filters: {},
      setFilter: () => {},
    });

    render(<InvestmentPage />);
    expect(
      screen.getByText(/Nenhum investimento encontrado/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Ajuste os filtros ou tente outra busca./i)
    ).toBeInTheDocument();
  });

  it('should render InvestmentCards when there are investments', () => {
    (useInvestments as any).mockReturnValue({
      isLoading: false,
      originalInvestments: [
        {
          id: '1',
          attributes: { broker: 'XP', liquidity: 10, currentAmount: 1000 },
        },
      ],
      investments: [
        {
          id: '1',
          attributes: { broker: 'XP', liquidity: 10, currentAmount: 1000 },
        },
      ],
      filters: {},
      setFilter: () => {},
    });

    render(<InvestmentPage />);
    expect(screen.getAllByTestId('investment-card')).toHaveLength(1);
    expect(screen.getByText('XP')).toBeInTheDocument();
  });

  it('should pass filters to the Filters component', () => {
    const mockFilters = {
      searchTerm: 'XP',
      institution: 'todas',
      ticket: 'todas',
    };
    const mockSetFilter = vi.fn();

    (useInvestments as any).mockReturnValue({
      isLoading: false,
      originalInvestments: [],
      investments: [],
      filters: mockFilters,
      setFilter: mockSetFilter,
    });

    render(<InvestmentPage />);

    const filtersDiv = screen.getByTestId('filters');
    expect(filtersDiv.textContent).toContain('XP');
  });
});
