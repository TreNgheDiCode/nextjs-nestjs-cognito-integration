export interface LoanQuote {
  loanPurpose?: LoanQuotePurpose;
  loanAmount?: number;
  propertyValue?: number;
  zipcode?: string;
  loanTerm?: string;
  creditScore?: number;
  propertyType?: LoanQuotePropertyType;
  propertyUsage?: LoanQuotePropertyUsage;
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

export enum LoanQuotePropertyType {
  SingleFamilyResidence = "single family residence",
  Condo = "condo",
  Townhouse = "townhouse",
  Duplex = "duplex",
  Triplex = "triplex",
  Fourplex = "fourplex",
  MobileHome = "mobile home",
}

export enum LoanQuotePropertyUsage {
  OwnerOccupied = "owner occupied",
  Investment = "investment",
  SecondHome = "second home",
}

export enum LoanQuoteTerm {
  The30YearFixed = "30-year fixed",
  The25YearFixed = "25-year fixed",
  The20YearFixed = "20-year fixed",
  The15YearFixed = "15-year fixed",
  The10YearFixed = "10-year fixed",
  The10yARM = "10y arm",
  The7yARM = "7y arm",
  The5yARM = "5y arm",
}
