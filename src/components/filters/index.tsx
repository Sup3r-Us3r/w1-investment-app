import { Search } from 'lucide-react';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Filter } from './components/filter';
import type { FiltersProps } from './types';
import { buildOptions } from './utils/build-options';

export const Filters = ({ investments, filters, setFilter }: FiltersProps) => {
  const institutionOptions = buildOptions(
    investments.map((inv) => inv?.attributes?.name)
  );

  const ticketOptions = buildOptions(
    investments.map((inv) => inv?.attributes?.ticket)
  );

  return (
    <section aria-labelledby="filtros" className="px-4 md:px-6">
      <h2 id="filtros" className="sr-only">
        Filtros
      </h2>

      <div className="mt-10">
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
                value={filters.searchTerm}
                onChange={(event) =>
                  setFilter('searchTerm', event.target.value)
                }
              />
            </div>
          </div>

          {/* Instituição */}
          <Filter
            name="Instituição"
            options={institutionOptions}
            defaultValue={filters.institution}
            onValueChange={(value) => setFilter('institution', value)}
          />

          {/* Ticket */}
          <Filter
            name="Ticket"
            options={ticketOptions}
            defaultValue={filters.ticket}
            onValueChange={(value) => setFilter('ticket', value)}
          />
        </div>
      </div>
    </section>
  );
};
