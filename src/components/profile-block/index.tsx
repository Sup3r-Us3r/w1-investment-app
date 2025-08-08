import { Bell } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

export const ProfileBlock = () => {
  return (
    <div className="flex items-center gap-4">
      <button
        aria-label="Notificações"
        className="h-9 w-9 grid place-items-center rounded-full hover:bg-[#ebf0f0]"
      >
        <Bell className="h-5 w-5 text-[#1f2225]" />
      </button>
      <div className="flex items-center gap-3">
        <Avatar className="h-9 w-9">
          <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Avatar" />
          <AvatarFallback>MM</AvatarFallback>
        </Avatar>
        <div className="leading-tight">
          <div className="text-sm font-medium text-[#1f2225]">
            Mayderson Mello
          </div>
          <div className="text-xs text-[#71717a]">maydersonmello@gmail.com</div>
        </div>
      </div>
    </div>
  );
};
