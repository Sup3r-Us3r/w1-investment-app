import {
  Calendar,
  Info,
  LayoutDashboard,
  LogOut,
  MoreHorizontal,
  Receipt,
  RefreshCw,
  Target,
  Wallet,
} from 'lucide-react';

export const AsideInner = () => {
  const linkBase = 'flex items-center gap-3 px-4 py-2 rounded-md text-sm';
  const itemClasses = 'text-[#ebf0f0]/90 hover:bg-white/5';
  const activeClasses = 'bg-white/10 text-white';

  return (
    <>
      <div className="px-4 pt-6">
        {/* Logo */}
        <div className="h-10 flex items-center mb-6">
          <div className="text-xl font-semibold tracking-tight">w1</div>
        </div>

        <nav className="space-y-1">
          <a className={`${linkBase} ${itemClasses}`} href="#">
            <LayoutDashboard className="h-4 w-4" />
            <span>Painel</span>
          </a>
          <a className={`${linkBase} ${itemClasses}`} href="#">
            <Receipt className="h-4 w-4" />
            <span>Extrato</span>
          </a>
          <a className={`${linkBase} ${itemClasses}`} href="#">
            <Target className="h-4 w-4" />
            <span>Objetivos</span>
          </a>
          <a className={`${linkBase} ${itemClasses}`} href="#">
            <Calendar className="h-4 w-4" />
            <span>Planejamento</span>
          </a>
          <a className={`${linkBase} ${activeClasses}`} href="#">
            <Wallet className="h-4 w-4" />
            <span>Investimentos</span>
          </a>
          <a className={`${linkBase} ${itemClasses}`} href="#">
            <RefreshCw className="h-4 w-4" />
            <span>Sincronizar contas</span>
          </a>
          <a className={`${linkBase} ${itemClasses}`} href="#">
            <MoreHorizontal className="h-4 w-4" />
            <span>Ver mais</span>
          </a>
        </nav>
      </div>

      <div className="px-4 pb-6 space-y-1">
        <a
          className="flex items-center gap-3 px-4 py-2 rounded-md text-sm text-[#ebf0f0]/80 hover:bg-white/5"
          href="#"
        >
          <Info className="h-4 w-4" />
          <span>Nosso conceito</span>
        </a>
        <a
          className="flex items-center gap-3 px-4 py-2 rounded-md text-sm text-[#ebf0f0]/80 hover:bg-white/5"
          href="#"
        >
          <LogOut className="h-4 w-4" />
          <span>Sair</span>
        </a>
      </div>
    </>
  );
};
