import { ChevronRight } from 'lucide-react';
import { ProfileBlock } from '../profile-block';

export const Header = () => {
  return (
    <div className="hidden md:flex items-center justify-between px-6 py-4 bg-white">
      <nav className="flex items-center gap-2 text-sm text-[#71717a]">
        <span className="font-medium text-[#1e293b]">{'Painel'}</span>
        <ChevronRight className="h-4 w-4 text-[#a1a1aa]" />
        <span className="text-[#71717a]">{'Investimentos'}</span>
      </nav>
      <ProfileBlock />
    </div>
  );
};
