export interface LoanBorrower {
  _id: string;
  loanApplication: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  incomes: Income[];
  debts: LoanBorrowerDept[];
  properties: LoanBorrowerProperty[];
  documents: LoanBorrowerDocument[];
  phoneNumber?: string;
  residentialInfo?: LoanBorrowerResidentialInfo;
  otherMonthlyIncomes?: Income[];
  employments?: Employment[];
}

export interface LoanBorrowerDept {
  creditor: string;
  accountType: string;
  accountTypeNote: string;
  accountNumber?: number;
  limit: number;
  balance: number;
  monthlyPayment: number;
}

export interface LoanBorrowerProperty {
  _id: string;
  address: string;
  city?: string;
  zipcode?: string;
  statecode?: string;
  apartmentUnit?: number | string;
  type?: string;
  usage?: string;
  hasSolar?: string;
  hasSecondMortgageOrHeloc?: string;
  rentalIncomeOnTax?: string;
  borrower: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  currentRemainingBalance?: number;
  monthlyRentalIncome?: number;
  currentRemainingYears?: number;
  monthlyTax?: number;
}

export interface LoanBorrowerDocument {
  _id: string;
  type: string;
  name: string;
  url: string;
  mimeType: string;
  s3Info: LoanBorrowerDocumentS3Info;
  borrower: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  expiredAt?: Date;
}

export interface LoanBorrowerResidentialInfo {
  address?: string;
  city?: string;
  statecode?: string;
  apartmentUnit?: number | null;
  startDate?: Date | null;
  endDate?: null;
  type?: string;
  zipcode?: string;
  propertyType?: string;
  monthlyExpenses?: number;
}

export interface Income {
  name: string;
  value?: number;
}

export interface LoanBorrowerDocumentS3Info {
  eTag: string;
  location: string;
  key: string;
  bucket: string;
}
