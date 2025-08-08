import { Menu } from 'lucide-react';
import { AsideInner } from '../aside-inner';
import { Button } from '../ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-md">
          <Menu className="h-5 w-5 text-[#1f2225]" />
          <span className="sr-only">Abrir menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="p-0 w-[86vw] sm:w-[320px] bg-[#022028] text-white"
      >
        <SheetHeader className="sr-only">
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="h-full flex flex-col justify-between">
          <AsideInner />
        </div>
      </SheetContent>
    </Sheet>
  );
};
