import { Organization } from "../organizations";
import { Team } from "../teams";
import { User } from "../users";
import { LoanBorrower } from "./borrower";
import { LoanProposalVersions } from "./proposalVersions";
import { LoanQuote } from "./quote";
import { LoanSubjectProperty } from "./subjectProperty";

export interface ListLoansQueryParams {
  query: {
    name?: string;
    memberId?: string;
    teamId?: string;
    status?: LoanStatus[];
    startDate?: string;
    endDate?: string;
    quoteLoanPurpose?: string[];
    quoteZipcode?: string;
    quoteLoanType?: string[];
    subjectPropertyStatecode?: string;
  };
  page: number;
  limit: number;
  sort: {
    status?: sortBase;
    id?: sortBase;
    createdAt?: sortBase;
    updatedAt?: sortBase;
    "quote.zipcode"?: sortBase;
    textSearchScore?: sortBase;
    "lockedRate.expiredAt"?: sortBase;
    closedAt?: sortBase;
  };
}

type sortBase = 1 | -1;

export interface ListLoansResponse {
  success: boolean;
  metadata: Metadata;
  data: Loan[];
}

export interface Loan {
  _id: string;
  status: LoanStatus;
  alias?: number;
  quote: LoanQuote;
  createdAt: Date;
  updatedAt: Date;
  processingOrganization: Organization;
  prevStatuses: string[];
  id: number;
  statusScore: number;
  processingUsers: User[];
  processingTeams: Team[];
  borrowers: LoanBorrower[];
  loanTodos: LoanTodo[];
  loanNotes: LoanNote[];
  applicant: User;
  escrow: object;
  desiredRate?: LoanRate;
  lockedRate?: LoanRate;
  subjectProperty?: LoanSubjectProperty | string;
  proposalVersions?: LoanProposalVersions;
  isDeleted?: boolean;
}

export enum LoanStatus {
  New = "new",
  Assigned = "assigned",
  LeadAssigned = "lead assigned",
  LoanAssigned = "loan assigned",
  Followed = "followed",
  LeadOnHold = "lead on hold",
  LoanOnHold = "loan on hold",
  Applied = "applied",
  LeadReady = "lead ready",
  LeadFollowed = "lead followed",
  LoanFollowed = "loan followed",
  Incomplete = "incomplete",
  Complete = "complete",
  BorrowerEsigned = "borrower esigned",
  LenderReview = "lender review",
  Approved = "approved",
  FinalReview = "final review",
  DocsAtEscrow = "docs at escrow",
  FinalDocSigned = "final doc signed",
  Funded = "funded",
  Withdrawn = "withdrawn",
  Denied = "denied",
  Closed = "closed",
}

export interface Employment {
  isCurrent: boolean;
  _id: string;
  status: string;
  address: string;
  company: string;
  position: string;
  phoneNumber: string;
  zipcode: string;
  startDate: null;
  endDate: null;
  monthlyIncomes: MonthlyIncome[];
}

export interface MonthlyIncome {
  name: string;
  companyName: string;
}

export interface LoanRate {
  rate?: number;
  closingCost?: number;
  monthlyPayment?: number;
  apr?: number;
  lender?: string;
  expiredAt?: Date | null;
  basePrice?: number;
  baseRate?: number;
  program?: string;
  ltv?: number;
}

export interface LoanNote {
  _id: string;
  loanApplication: string;
  __v: number;
  createdAt: Date;
  note: string;
  updatedAt: Date;
  user: string;
}

export interface LoanTodo {
  _id: string;
  status: string;
  name: string;
  dueDate: Date;
}

export interface OtherProperty {
  _id: string;
  address: string;
  zipcode: number;
  apartmentUnit: number;
  type: string;
  usage: Usage;
  hasSolar: string;
  hasSecondMortgageOrHeloc: string;
  rentalIncomeOnTax: string;
  currentRemainingBalance: number;
  borrower: string;
}

export interface Origin {
  proposalName: string;
  proposalNote: string;
  incomes: OriginIncomes;
  debts: Debts;
  subjectProperty: null;
  otherProperties: OtherProperty[];
  currentProposal: boolean;
}

export interface Metadata {
  total: number;
  page: number;
  limit: number;
}
