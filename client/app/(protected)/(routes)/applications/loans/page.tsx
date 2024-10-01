import BlankContent from "@/components/blankContent";
import { BreadCrumbPropsType } from "@/components/ui/breadcrumb";
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
