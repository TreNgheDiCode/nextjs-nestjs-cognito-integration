import LoansDataTable from "@/components/tables/loans/loansDataTable";
import { BreadCrumbPropsType } from "@/components/ui/breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loan Applications | Wonder CRM",
};

const breadCrumbItems: BreadCrumbPropsType["items"] = [
  {
    link: "/applications",
    title: "Applications",
  },
  {
    link: "/applications/loans",
    title: "Loan Applications",
  },
];

export default function LoanApplicationsPage() {
  return (
    <LoansDataTable
      title="Loan Applications"
      breadCrumbItems={breadCrumbItems}
    />
  );
}
