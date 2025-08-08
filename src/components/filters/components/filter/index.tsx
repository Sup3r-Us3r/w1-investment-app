import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import type { FilterProps } from './types';

export const Filter = ({ options, defaultValue }: FilterProps) => {
  return (
    <div className="flex flex-col">
      <Label className="text-[13px] text-[#3b3b3b]">Instituição</Label>
      <div className="mt-2">
        <Select defaultValue={defaultValue}>
          <SelectTrigger className="rounded-md border-[#d9d9d9] text-sm h-10 w-full bg-white">
            <SelectValue placeholder="Selecione" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
