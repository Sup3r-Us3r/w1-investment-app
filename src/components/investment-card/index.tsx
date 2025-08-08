import { Cloud, MoreVertical } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';

type InvestmentCardProps = {
  bankName: string;
  liquidity: string;
  position: string;
};

export const InvestmentCard = ({
  bankName,
  liquidity,
  position,
}: InvestmentCardProps) => {
  return (
    <Card className="rounded-xl border-[#e5e5e5]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#1f2225]">
            <div className="h-6 w-6 grid place-items-center rounded-full bg-[#ebf0f0]">
              <Cloud className="h-4 w-4 text-[#444545]" />
            </div>
            <CardTitle className="text-base font-semibold">
              Previdência
            </CardTitle>
          </div>
          <button className="h-8 w-8 grid place-items-center rounded-md hover:bg-[#f4f5f5]">
            <MoreVertical className="h-4 w-4 text-gray-500" />
          </button>
        </div>
        <div className="mt-3 border-t border-[#ebf0f0]" />
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full overflow-hidden bg-white border border-[#ebf0f0]">
            <img
              width={32}
              height={32}
              alt={`${bankName} logo`}
              src="https://logodownload.org/wp-content/uploads/2019/08/nubank-logo-2-1.png"
            />
          </div>
          <div className="leading-snug truncate">
            <h1 className="text-sm font-medium text-[#1f2225] truncate">
              {bankName}
            </h1>
            <span className="text-xs text-[#71717a]">Fundo previdenciário</span>
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Liquidez:</span>
            <span className="text-gray-500">{liquidity}</span>
          </div>
        </div>

        <div className="space-y-1 bg-gray-100 p-2 rounded-md">
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>Posição:</span>
            <span className="text-gray-500">{position}</span>
          </div>
        </div>

        <div className="h-px bg-gray-200 w-full" />

        <div className="flex items-center justify-center">
          <Button
            variant="ghost"
            className="h-8 px-3 text-[#006a6a] hover:bg-[#cce8e7] hover:text-[#1f4148] cursor-pointer"
          >
            Ver mais
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
