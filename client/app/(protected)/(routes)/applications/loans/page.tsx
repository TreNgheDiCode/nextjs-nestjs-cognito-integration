import BlankContent from "@/components/blank-content";
import { BreadCrumbPropsType } from "@/components/breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Loans | Wonder CRM",
};

export default function LoansPage() {
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

  return <BlankContent title="Loans" breadCrumbItems={breadCrumbItems} />;
}
