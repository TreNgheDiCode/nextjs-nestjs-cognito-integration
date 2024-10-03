import BlankContent from "@/components/blankContent";
import { BreadCrumbPropsType } from "@/components/ui/breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loan Customers | Wonder CRM",
};

const breadCrumbItems: BreadCrumbPropsType["items"] = [
  {
    link: "/customers",
    title: "Customers",
  },
  {
    link: "/customers/loans",
    title: "Loan Customers",
  },
];

export default function LoanCuustomersPage() {
  return (
    <BlankContent title="Loan Customers" breadCrumbItems={breadCrumbItems} />
  );
}
