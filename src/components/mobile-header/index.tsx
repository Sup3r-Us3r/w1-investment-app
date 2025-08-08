import { Bell } from 'lucide-react';
import { MobileSidebar } from '../mobile-sidebar';

export const MobileHeader = () => {
  return (
    <header className="md:hidden sticky top-0 z-30 bg-white border-b border-[#e5e7eb]">
      <div className="flex items-center justify-between px-4 h-14">
        <div className="flex items-center gap-2">
          <MobileSidebar />
          <div className="text-lg font-semibold text-[#1f2225]">
            Investimentos
          </div>
        </div>
        <button
          aria-label="Notificações"
          className="h-9 w-9 grid place-items-center rounded-full hover:bg-[#f4f5f5]"
        >
          <Bell className="h-5 w-5 text-[#1f2225]" />
        </button>
      </div>
    </header>
  );
};
