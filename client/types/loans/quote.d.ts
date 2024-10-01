export interface LoanQuote {
  loanPurpose?: LoanQuotePurpose;
  loanAmount?: number;
  propertyValue?: number;
  zipcode?: string;
  loanTerm?: string;
  creditScore?: number;
  propertyType?: string;
  propertyUsage?: string;
  loanType?: LoanQuoteType;
  state?: string;
  county?: string;
  city?: string;
  compensation?: string;
  incomeCheck?: boolean;
  citizenship: string;
  totalPreTaxIncome?: number;
  firstTimeHomeBuyer?: boolean;
  ownedProperties?: number;
  isHaveSecondMortgageAndHeloc?: boolean;
  secondMortgageAndHelocBalance?: number;
}

export enum LoanQuotePurpose {
  Purchase = "purchase",
  Refinance = "refinance",
  Tbd = "TBD",
  CashOut = "cash out",
}

export enum LoanQuoteType {
  Conventional = "conventional",
  HardMoneyLoan = "hard money loan",
  NonQM = "non-qm",
}
