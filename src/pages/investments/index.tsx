import { Button } from '@/components/ui/button';
import { ArrowLeft, Loader2, Plus, SearchX } from 'lucide-react';
import { AsideInner } from '../../components/aside-inner';
import { Filters } from '../../components/filters';
import { Header } from '../../components/header';
import { InvestmentCard } from '../../components/investment-card';
import { MobileHeader } from '../../components/mobile-header';
import { useInvestments } from './hooks/use-investments';

export const InvestmentPage = () => {
  const { isLoading, originalInvestments, investments, filters, setFilter } =
    useInvestments();

  return (
    <div className="min-h-screen bg-[#f4f5f5] md:grid md:grid-cols-[260px_1fr]">
      {/* Desktop sidebar */}
      <aside className="h-screen sticky top-0 hidden md:flex bg-[#022028] text-white flex-col justify-between">
        <AsideInner />
      </aside>

      {/* Mobile header with hamburger */}
      <MobileHeader />

      <main className="flex flex-col">
        {/* Top toolbar (desktop) */}
        <Header />

        {/* Title row with actions */}
        <div className="flex flex-col sm:flex-row lg:items-center justify-between px-4 md:px-6 pt-4 pb-2">
          <div className="flex items-center gap-3">
            <button
              aria-label="Voltar"
              className="hidden md:grid h-9 w-9 rounded-lg border border-[#d9d9d9] place-items-center bg-white"
            >
              <ArrowLeft className="h-5 w-5 text-[#1f2225]" />
            </button>
            <h1 className="hidden sm:inline text-2xl md:text-3xl font-semibold text-[#1f2225]">
              Investimentos
            </h1>
          </div>
          <div className="flex items-center justify-end gap-2 md:gap-3 w-full">
            <div className="hidden rounded-lg bg-[#cce8e7] text-[#1f4148] h-12 px-3 text-xs md:text-sm font-medium lg:flex flex-col justify-center items-center">
              <span>Investimentos (5)</span>
              <span className="rounded-md text-xs text-[#1f4148] font-normal">
                R$ 25.000,00
              </span>
            </div>
            <Button className="bg-teal-950 hover:bg-teal-900 text-white rounded-lg h-12 px-3 md:px-4 w-full sm:w-auto cursor-not-allowed">
              <Plus className="h-4 w-4 mr-1.5 md:mr-2" />
              <span className="hidden sm:inline">Adicionar investimento</span>
              <span className="sm:hidden">Adicionar investimento</span>
            </Button>
          </div>
        </div>

        {/* Filter options */}
        <Filters
          investments={originalInvestments}
          filters={filters}
          setFilter={setFilter}
        />

        {/* Cards grid */}
        <section className="px-4 md:px-6 py-6">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20 text-center text-gray-500">
              <Loader2 className="w-12 h-12 mb-4 animate-spin text-gray-400" />
              <p className="text-lg font-medium">Carregando investimentos...</p>
            </div>
          ) : investments.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center text-gray-500">
              <SearchX className="w-12 h-12 mb-4 text-gray-400" />
              <p className="text-lg font-medium">
                Nenhum investimento encontrado
              </p>
              <p className="text-sm text-gray-400">
                Ajuste os filtros ou tente outra busca.
              </p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              {investments.map((investment) => (
                <InvestmentCard
                  key={investment.id}
                  bankName={investment.attributes.broker}
                  liquidity={investment.attributes.liquidity.toString()}
                  position={investment.attributes.currentAmount}
                />
              ))}
            </div>
          )}
        </section>
      </main>
    </div>
  );
};
