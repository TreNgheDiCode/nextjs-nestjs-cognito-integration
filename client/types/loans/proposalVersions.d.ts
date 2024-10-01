import { LoanBorrowerDept } from "./borrower";
import { LoanSubjectProperty } from "./subjectProperty";

export interface LoanProposalVersions {
  [key: string]: LoanProposal;
}

export interface LoanProposal {
  proposalName: string;
  proposalNote: string;
  incomes: Record<string, LoanProposalIncomeDetails>;
  debts: Record<string, LoanBorrowerDept[]>;
  subjectProperty: LoanSubjectProperty;
  otherProperties: LoanProposalOtherProperty[];
  currentProposal: boolean;
}

export interface LoanProposalIncomeDetails {
  monthlyIncomes: MonthlyIncome[];
  otherMonthlyIncomes: MonthlyIncome[];
}

export interface MonthlyIncome {
  name: string;
  value?: number;
}

export interface LoanProposalOtherProperty {
  _id: string;
  address: string;
  zipcode: number;
  apartmentUnit: number;
  type: string;
  usage: string;
  hasSolar: string;
  hasSecondMortgageOrHeloc: string;
  rentalIncomeOnTax: string;
  currentRemainingBalance: number;
  borrower: string;
}
