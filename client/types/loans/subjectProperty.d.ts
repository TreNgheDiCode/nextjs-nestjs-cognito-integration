export interface LoanSubjectProperty {
  _id: string;
  address: string;
  apartmentUnit?: string;
  type?: string;
  usage: string;
  hasSolar?: string;
  hasSecondMortgageOrHeloc?: string;
  rentalIncomeOnTax?: string;
  borrower?: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  zipcode: string;
  city: string;
  statecode: string;
  currentRemainingYears?: number;
  monthlyTax?: number;
  monthlyInsurance?: number;
  monthlyHoa?: number;
  yearBuilt?: string;
}
