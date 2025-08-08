import { describe, it, expect, vi, beforeEach, type Mock } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useInvestments } from './';

vi.mock('@/http/w1-api/investments/fetch', () => {
  return {
    useFetchInvestments: vi.fn(),
  };
});

import { useFetchInvestments } from '@/http/w1-api/investments/fetch';

const mockInvestmentsData = {
  data: [
    {
      id: '1',
      attributes: {
        broker: 'XP Investimentos',
        name: 'XP Instituição',
        ticket: 'XP123',
      },
    },
    {
      id: '2',
      attributes: {
        broker: 'Banco ABC',
        name: 'Banco ABC Instituição',
        ticket: 'ABC456',
      },
    },
  ],
};

describe('useInvestments', () => {
  beforeEach(() => {
    vi.clearAllMocks();

    (useFetchInvestments as unknown as Mock).mockReturnValue({
      data: mockInvestmentsData,
      isLoading: false,
    });
  });

  it('should return the original investments and the initial filter state', () => {
    const { result } = renderHook(() => useInvestments());

    expect(result.current.originalInvestments).toHaveLength(2);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.filters).toEqual({
      searchTerm: '',
      institution: 'todas',
      ticket: 'todas',
    });
    expect(result.current.investments).toHaveLength(2);
  });

  it('should filter investments by searchTerm (broker)', () => {
    const { result } = renderHook(() => useInvestments());

    act(() => {
      result.current.setFilter('searchTerm', 'XP');
    });

    expect(result.current.investments).toHaveLength(1);
    expect(result.current.investments[0].attributes.broker).toBe(
      'XP Investimentos'
    );
  });

  it('should filter investments by institution (name)', () => {
    const { result } = renderHook(() => useInvestments());

    act(() => {
      result.current.setFilter('institution', 'banco abc');
    });

    expect(result.current.investments).toHaveLength(1);
    expect(result.current.investments[0].attributes.name).toBe(
      'Banco ABC Instituição'
    );
  });

  it('should filter investments by ticket', () => {
    const { result } = renderHook(() => useInvestments());

    act(() => {
      result.current.setFilter('ticket', 'xp123');
    });

    expect(result.current.investments).toHaveLength(1);
    expect(result.current.investments[0].attributes.ticket).toBe('XP123');
  });

  it('should return an empty list if data is undefined', () => {
    (useFetchInvestments as unknown as Mock).mockReturnValue({
      data: undefined,
      isLoading: false,
    });

    const { result } = renderHook(() => useInvestments());

    expect(result.current.originalInvestments).toEqual([]);
    expect(result.current.investments).toEqual([]);
  });

  it('should keep isLoading as true if fetch is loading', () => {
    (useFetchInvestments as unknown as Mock).mockReturnValue({
      data: undefined,
      isLoading: true,
    });

    const { result } = renderHook(() => useInvestments());

    expect(result.current.isLoading).toBe(true);
  });
});
