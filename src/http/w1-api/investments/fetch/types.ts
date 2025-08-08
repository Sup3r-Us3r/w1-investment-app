/* eslint-disable @typescript-eslint/no-explicit-any */
export type InvestmentsOutput = {
  data: Array<{
    id: string;
    type: string;
    attributes: {
      name: string;
      broker: string;
      brokerCnpj: any;
      liquidity: number;
      type: string;
      profitabilityType: string;
      postFixedTax: string;
      ticket: string;
      quantity?: number;
      socialSecurityTaxRegime: any;
      socialSecurityProposalNumber: any;
      socialSecurityProcessNumber: any;
      modality: {
        name: string;
        rent_type: string;
      };
      contributedAmount: string;
      currentAmount: string;
      balanceAmount: string;
      profitAmount: string;
      profitabilityRatesAnnual: string;
      profitabilityAccumulatedRate: string;
      profitabilityCdiRate: string;
      postFixedTaxPercentage: string;
      lastMonthRate: any;
      lastTwelveMonthsRate: any;
      annualRate: any;
      objectivesAssociated: Array<any>;
      available: {
        percentage: string;
        amount: string;
      };
      dueDate: {
        original: string;
        formatted: string;
      };
      lastUpdate: string;
      readOnly: boolean;
    };
  }>;
};
