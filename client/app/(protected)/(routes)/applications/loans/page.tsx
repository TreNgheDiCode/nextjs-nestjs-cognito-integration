import LoansDataTable from "@/components/tables/loans/loansDataTable";
import { BreadCrumbPropsType } from "@/components/ui/breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loans | Wonder CRM",
};

const breadCrumbItems: BreadCrumbPropsType["items"] = [
  {
    link: "/applications",
    title: "Applications",
  },
  {
    link: "/applications/loans",
    title: "Loans",
  },
];

export default function LoansPage() {
  return <LoansDataTable title="Loans" breadCrumbItems={breadCrumbItems} />;
}
