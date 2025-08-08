import { Search } from 'lucide-react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Filter } from './components/filter';
import type { FiltersProps } from './types';

export const Filters = ({ searchTerm, setSearchTerm }: FiltersProps) => {
  return (
    <section aria-labelledby="filtros" className="px-4 md:px-6">
      <h2 id="filtros" className="sr-only">
        Filtros
      </h2>
      <div className="mt-10">
        {/* Cabeçalho dos campos (labels no topo, conforme Figma) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
          {/* Busca */}
          <div className="flex flex-col col-span-1 2xl:col-span-2">
            <Label htmlFor="busca" className="text-[13px] text-[#3b3b3b]">
              Busca
            </Label>
            <div className="relative mt-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#979797]" />
              <Input
                id="busca"
                placeholder="Busque por nome"
                className="pl-10 rounded-md border-[#d9d9d9] text-sm bg-white placeholder:text-gray-400"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Instituição */}
          <Filter
            options={[
              { value: 'todas', label: 'Todas' },
              { value: 'nubank', label: 'NuBank' },
              { value: 'c6', label: 'Banco C6' },
              { value: 'itau', label: 'Itaú' },
            ]}
            defaultValue="todas"
          />

          {/* Alocação */}
          <Filter
            options={[
              { value: 'todas', label: 'Todas' },
              { value: 'previdencia', label: 'Previdência' },
              { value: 'renda-fixa', label: 'Renda fixa' },
              { value: 'renda-variavel', label: 'Renda variável' },
            ]}
            defaultValue="todas"
          />
        </div>
      </div>
    </section>
  );
};
